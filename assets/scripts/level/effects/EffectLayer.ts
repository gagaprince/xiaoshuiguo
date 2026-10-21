/**
 * 第 14 步·特效子任务：消除粒子 effPr、磁铁拖尾 streak、
 * 落槽斜面尘土 landEff0~3、砸墙爆破 boxBoom、锤子 chuizi。
 *
 * 原版对应：
 * - GameMgr.showFruitEff(fruitNode, particleType)：配对成功的水果在缩放回弹
 *   结束处喷 8~12 个 effPr，随机方向飞散、旋转、缩没后回池。
 * - FruitComp.streakFun / StreakComp：磁铁批量消除时给被消水果挂 MotionStreak
 *   拖尾，每 3 帧跟随目标坐标，3s 后自毁。
 * - FruitComp.checkDropWall：被点水果首次撞落槽斜面，在脚下 60px 播
 *   landEff{floor(level/10)%4}（一次性粒子，播完自毁）。
 * - GameMgr.creatBoxBoom / playChuiziEff + ChuiziCom：解锁槽位时锤子砸墙
 *   （延迟 0.5s 起手、0.08s -10°、0.18s 45° backOut），命中瞬间碎石爆破。
 */
import {
    _decorator,
    Component,
    Node,
    Prefab,
    Vec3,
    UITransform,
    ParticleSystem2D,
    NodePool,
    Layers,
    assetManager,
    instantiate,
    tween,
    Tween,
} from 'cc';
import { StreakFollow } from './StreakFollow';

const { ccclass } = _decorator;

/** loadAny 首次失败后的重试间隔（ms），与 FruitFactory 保持一致。 */
const LOAD_RETRY_DELAYS = [150, 350] as const;

/** 特效预制体 UUID（assets/game/prefab/ 下，主包 loadAny 按 UUID 加载）。 */
export const EFFECT_PREFAB_UUID = Object.freeze({
    effPr: '27b82d5b-1e79-4595-ae8f-03396c4382ee',
    streak: '6ab9c73d-b507-412e-b3eb-328490ab9772',
    boxBoom: 'b2f56abe-d832-4b9f-b1a2-8abad8d6edbb',
    chuizi: 'c606c6b4-294a-4f9f-97f3-fa3732f8bce1',
    landEff0: '0db58ff1-2ac8-4407-a7f1-f916d9612a7f',
    landEff1: 'abebe84d-ef14-46ba-aa76-3e7663c02544',
    landEff2: '6b1c29e2-ec8f-4814-ae40-f41b6f4e3124',
    landEff3: '1d7d658a-60a3-457f-996a-ede0898e9ebc',
});

export type EffectPrefabKey = keyof typeof EFFECT_PREFAB_UUID;

/**
 * 原版 ReferenceLayMgr.originalPt 中水果 ID -> effPr 子节点序号（0~6）；
 * getEliminateColor 查不到水果时原版回落为 2。
 */
const PARTICLE_TYPE_BY_FRUIT: Readonly<Record<number, number>> = Object.freeze({
    0: 1, 1: 3, 2: 0, 3: 3, 4: 2, 5: 0, 6: 4, 7: 0,
    8: 0, 9: 0, 10: 4, 11: 0, 12: 5, 13: 6, 14: 4, 15: 6,
    16: 2, 17: 4, 18: 0, 19: 6, 20: 3, 21: 0, 22: 2, 23: 3,
    24: 2, 25: 4, 26: 1, 27: 3, 28: 1, 29: 4, 30: 5, 31: 6,
    32: 4, 33: 0, 66: 1,
});

/** 原版 ReferenceMgr.randomN：[min,max) 浮点。 */
function randomN(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

/** 原版 ReferenceMgr.RandomInt：[min,max] 闭区间整数。 */
function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** 递归同步 layer（恢复出的预制体可能残留 GIZMOS 等非相机可见层）。 */
function syncLayer(node: Node, layer: number): void {
    node.layer = layer;
    for (const child of node.children) syncLayer(child, layer);
}

/** 原包 chuizi 预制体带丢失的 ChuiziCom（MissingScript），实例化后剔除。 */
function stripMissingScripts(node: Node): void {
    for (const comp of node.components.slice()) {
        if ((comp.constructor as { name?: string }).name === 'MissingScript') {
            node.removeComponent(comp);
        }
    }
}

@ccclass('EffectLayer')
export class EffectLayer extends Component {
    public static instance: EffectLayer | null = null;

    /** 当前关卡号（原版 GbzDataManager.game_level），决定 landEff 变体。 */
    public currentLevel = 1;

    private readonly cache = new Map<EffectPrefabKey, Prefab>();
    private readonly loading = new Map<EffectPrefabKey, Promise<Prefab>>();
    private readonly effPrPool = new NodePool();

    protected onLoad(): void {
        EffectLayer.instance = this;
    }

    protected onDestroy(): void {
        if (EffectLayer.instance === this) EffectLayer.instance = null;
        this.effPrPool.clear();
    }

    /** 预加载全部特效预制体；单个失败不阻断其余资源。 */
    public preloadAll(): Promise<void> {
        return Promise
            .all((Object.keys(EFFECT_PREFAB_UUID) as EffectPrefabKey[])
                .map(key => this.load(key).catch(() => null)))
            .then(() => undefined);
    }

    private load(key: EffectPrefabKey): Promise<Prefab> {
        const cached = this.cache.get(key);
        if (cached) return Promise.resolve(cached);
        const pending = this.loading.get(key);
        if (pending) return pending;
        const uuid = EFFECT_PREFAB_UUID[key];
        const promise = this.loadWithRetry(uuid).then(
            asset => {
                this.cache.set(key, asset);
                this.loading.delete(key);
                return asset;
            },
            err => {
                this.loading.delete(key);
                throw err;
            },
        );
        this.loading.set(key, promise);
        return promise;
    }

    /** loadAny 的单次 Promise 封装。 */
    private loadOnce(uuid: string): Promise<Prefab> {
        return new Promise<Prefab>((resolve, reject) => {
            assetManager.loadAny(uuid, (err, asset: Prefab) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(asset);
            });
        });
    }

    /** 偶发 IO/解压缩失败时按 LOAD_RETRY_DELAYS 自动重试。 */
    private async loadWithRetry(uuid: string): Promise<Prefab> {
        let lastError: unknown = null;
        for (let attempt = 0; attempt <= LOAD_RETRY_DELAYS.length; attempt += 1) {
            try {
                return await this.loadOnce(uuid);
            } catch (err) {
                lastError = err;
                if (attempt < LOAD_RETRY_DELAYS.length) {
                    await new Promise<void>(resolve => setTimeout(resolve, LOAD_RETRY_DELAYS[attempt]));
                }
            }
        }
        throw lastError instanceof Error ? lastError : new Error(String(lastError));
    }

    private async instantiate(key: EffectPrefabKey): Promise<Node | null> {
        const prefab = await this.load(key).catch(() => null);
        if (!prefab || !this.node.isValid) return null;
        const node = instantiate(prefab);
        syncLayer(node, this.node.layer || Layers.Enum.UI_2D);
        return node;
    }

    /** 把世界坐标换算成本节点本地坐标（原版 Tool2.convetOtherNodeSpaceAR）。 */
    private toLocal(worldPosition: Vec3): Vec3 {
        const ui = this.node.getComponent(UITransform) ?? this.node.addComponent(UITransform);
        return ui.convertToNodeSpaceAR(worldPosition, new Vec3());
    }

    /**
     * 原版 GameMgr.showFruitEff：在水果位置喷 8~12 个 effPr 粒子。
     * 每个粒子只显示对应颜色的子节点 eff0~eff6，随机偏移/缩放后向随机
     * 方向飞 55~95px（sineOut），同时自转 260~300°、缩放到 0，结束回池。
     */
    public burstEliminate(source: Node, fruitId: number): void {
        if (!this.node.isValid) return;
        const type = PARTICLE_TYPE_BY_FRUIT[fruitId] ?? 2;
        const origin = this.toLocal(source.worldPosition.clone());
        const count = randomInt(8, 12);
        for (let i = 0; i < count; i += 1) {
            void this.spawnOneParticle(type, origin);
        }
    }

    private async spawnOneParticle(type: number, origin: Vec3): Promise<void> {
        let node = this.effPrPool.get();
        if (!node) node = await this.instantiate('effPr');
        if (!node || !this.node.isValid) {
            if (node) this.effPrPool.put(node);
            return;
        }
        for (let i = 0; i < node.children.length; i += 1) {
            node.children[i].active = i === type;
        }
        node.active = true;
        Tween.stopAllByTarget(node);
        this.node.addChild(node);
        node.setPosition(origin.x + randomN(-50, 50), origin.y + randomN(-50, 50));
        node.angle = 0;
        const scale = 0.69 * randomN(1, 2);
        node.setScale(scale, scale, 1);

        const speed = randomN(55, 95);
        const distance = randomN(55, 95);
        const duration = distance / speed;
        const angle = randomN(0, Math.PI * 2);
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;
        const spin = randomN(260, 300);

        tween(node)
            .by(duration, { position: new Vec3(dx, dy, 0) }, { easing: 'sineOut' })
            .call(() => this.recycleParticle(node))
            .start();
        tween(node)
            .parallel(
                tween(node).by(duration, { angle: spin }),
                tween(node).to(duration, { scale: new Vec3(0, 0, 1) }),
            )
            .start();
    }

    private recycleParticle(node: Node): void {
        if (!node.isValid) return;
        Tween.stopAllByTarget(node);
        node.active = false;
        node.removeFromParent();
        this.effPrPool.put(node);
    }

    /**
     * 原版 FruitComp.streakFun：拖尾挂到水果的同一父节点下跟随。
     * 仅磁铁批量消除场上水果时调用。
     */
    public async spawnStreak(target: Node): Promise<void> {
        const parent = target.parent;
        if (!parent) return;
        const node = await this.instantiate('streak');
        if (!node || !target.isValid || !parent.isValid) {
            node?.destroy();
            return;
        }
        parent.addChild(node);
        node.setPosition(target.position);
        node.addComponent(StreakFollow).init(target);
    }

    /**
     * 原版 FruitComp.checkDropWall 落地粒子：水果脚下 60px，
     * 变体随关卡每 10 关轮换（floor(level/10) % 4），一次性播放自毁。
     */
    public async playLand(fruit: Node): Promise<void> {
        const parent = fruit.parent;
        if (!parent) return;
        const variant = (Math.floor(this.currentLevel / 10) % 4) as 0 | 1 | 2 | 3;
        const node = await this.instantiate(`landEff${variant}`);
        if (!node || !fruit.isValid || !parent.isValid) {
            node?.destroy();
            return;
        }
        parent.addChild(node);
        node.setPosition(fruit.position.x, fruit.position.y - 60);
        node.getComponent(ParticleSystem2D)?.resetSystem();
    }

    /** 原版 GameMgr.creatBoxBoom：墙位置碎石粒子（一次性自毁）。 */
    public async playBoxBoom(wall: Node): Promise<void> {
        const node = await this.instantiate('boxBoom');
        if (!node || !wall.isValid) {
            node?.destroy();
            return;
        }
        const pos = this.toLocal(wall.worldPosition.clone());
        this.node.addChild(node);
        node.setPosition(pos);
        node.getComponent(ParticleSystem2D)?.resetSystem();
    }

    /**
     * 原版 GameMgr.playChuiziEff + ChuiziCom.playHammer：
     * 锤子在墙位置表演砸击，命中瞬间回调（销毁墙/爆破），随后播锤击粒子，
     * 2s 后整体销毁。
     */
    public async playHammer(wall: Node, onStrike: () => void): Promise<void> {
        const node = await this.instantiate('chuizi');
        if (!node) {
            // 锤子预制体加载失败也要保证命中回调：调用方（breakWall）靠它拆墙、
            // 升级第二面墙并复位 wallBreaking，否则扩槽后点击锁永久卡死。
            // 场地已销毁（关卡退出）时不再触碰业务节点。
            if (wall.isValid && this.node.isValid) onStrike();
            return;
        }
        if (!wall.isValid || !this.node.isValid) {
            node.destroy();
            return;
        }
        stripMissingScripts(node);
        const pos = this.toLocal(wall.worldPosition.clone());
        this.node.addChild(node);
        node.setPosition(pos);
        node.active = true;

        const hammer = node.getChildByName('chuizi');
        const effect = node.getChildByName('eff')?.getComponent(ParticleSystem2D);
        if (!hammer) {
            onStrike();
            node.destroy();
            return;
        }
        hammer.active = true;
        hammer.angle = 0;
        tween(hammer)
            .delay(0.5)
            .to(0.08, { angle: -10 }, { easing: 'quadOut' })
            .to(0.18, { angle: 45 }, { easing: 'backOut' })
            .call(() => {
                hammer.active = false;
                onStrike();
                effect?.resetSystem();
                this.scheduleOnce(() => {
                    if (node.isValid) node.destroy();
                }, 2);
            })
            .start();
    }
}
