import { _decorator, Component, instantiate, Node, Prefab, UITransform, Vec3 } from 'cc';
import { LevelData } from '../generator/LevelTypes';
import { FruitEntity, FruitKind } from './FruitEntity';
import { FruitFactory } from './FruitFactory';
import { MechanicPrefabs } from '../MechanicPrefabs';
import { getFruitNodeScale } from '../generator/LevelGenerator';

const { ccclass } = _decorator;

/**
 * 第 4 步：按关卡数据把水果实例摆放到场景中。
 * 第 5 步：spawn 只负责实例化与定位（实例初始 scale 0、Static），
 * 生成保护期弹出动画和场地移动统一由 LevelPlayfield 在 spawnComplete 后驱动。
 *
 * - 第 1 关特例：原版 GameMgr.firstLevel 还原 12 个水果
 *   （firstLevelIDS 三行 9/1/2 各 4 个），父节点为 game/firstLevel/pos1..3；
 *   pos2/pos3 初始在屏幕外，第四轮教学才移入。
 * - 其余关卡：按生成器 FruitData 挂到 game/fruits。
 *
 * spawn() 返回真实总数；spawnComplete 在全部实例化完成后 resolve，
 * 异步期间取消（节点销毁）会 reject 一个静默标记，调用方检查 isValid 即可。
 */
@ccclass('FruitSpawner')
export class FruitSpawner extends Component {
    /**
     * 第 10 步：普通关每帧实例化预算。
     * 第 2 关 174 个水果若同帧 instantiate（每个 prefab 含 Sprite/刚体/碰撞体）
     * 会长时间冻结；按 18 个/帧分批约 10 帧创建完，单帧开销可控。
     * 物理激活顺序不变：全部实例初始 scale 0 + Static，spawnComplete 后
     * 才由 LevelPlayfield 统一播放保护期动画（Dynamic g=0 -> Static），
     * 分帧期间先创建的静态体不会产生位移或碰撞扰动。
     */
    private static readonly SPAWN_BATCH_SIZE = 18;

    /** 原版 GameMgr.firstLevelIDS：三行四列，类型 9 / 1 / 2。 */
    private static readonly FIRST_LEVEL_IDS: readonly number[][] = [
        [9, 9, 9, 9],
        [1, 1, 1, 1],
        [2, 2, 2, 2],
    ];

    private readonly factory = new FruitFactory();
    private readonly mechanics = new MechanicPrefabs();
    private readonly spawnedNodes: Node[] = [];
    private readonly spawnedEntities: FruitEntity[] = [];
    private nextId = 0;
    private resolveSpawn: (() => void) | null = null;
    /** 全部水果实例化完成（保护期动画尚未播放）；LevelPlayfield 等待此 Promise。 */
    public spawnComplete: Promise<void> = Promise.resolve();

    /** 已生成的水果实体（生成结束后不再变化）。 */
    public get entities(): readonly FruitEntity[] {
        return this.spawnedEntities;
    }

    /**
     * 生成水果。返回真实水果总数（第 1 关为 12，其余关为 data.fruits.length），
     * 供 LevelView 初始化剩余目标。
     */
    public spawn(data: LevelData): number {
        this.spawnComplete = new Promise<void>(resolve => {
            this.resolveSpawn = resolve;
        });
        if (data.level === 1) {
            void this.spawnFirstLevel().then(() => this.finishSpawn());
            return FruitSpawner.FIRST_LEVEL_IDS.length * 4;
        }
        void this.spawnGeneric(data).then(() => this.finishSpawn());
        // 第 12.2 步：总目标含黑洞待吐水果（原版 totalNum = 场上 + 洞内序列）。
        const holePool = data.blackHoles.reduce((sum, hole) => sum + hole.fruitTypes.length, 0);
        return data.fruits.length + holePool;
    }

    private finishSpawn(): void {
        const resolve = this.resolveSpawn;
        this.resolveSpawn = null;
        if (resolve) resolve();
    }

    /** 第 1 关教学布局（GameMgr.firstLevel 的还原）。 */
    private async spawnFirstLevel(): Promise<void> {
        const firstLevel = this.node.getChildByPath('game/firstLevel');
        if (!firstLevel) {
            console.warn('[FruitSpawner] game/firstLevel not found');
            return;
        }

        const rows = FruitSpawner.FIRST_LEVEL_IDS.map((_, index) => firstLevel.children[index]);
        if (rows.some(row => !row)) {
            console.warn('[FruitSpawner] firstLevel pos rows incomplete');
            return;
        }
        // 第 2、3 行初始位于屏幕外（原版：height/2 + 500），第四轮教学再移入。
        const offscreenY = (this.node.getComponent(UITransform)?.height ?? 1334) / 2 + 500;
        rows[1].setPosition(rows[1].position.x, offscreenY);
        rows[2].setPosition(rows[2].position.x, offscreenY);

        // 记录每个定位点的本地坐标（原版直接读取 pos1..4 的 x/y）。
        const slotPositions = rows.map(row => row.children.map(slot => slot.position.clone()));

        const types = FruitSpawner.FIRST_LEVEL_IDS.reduce<number[]>((all, row) => all.concat(row), []);
        await this.factory.preload(types);

        for (let rowIndex = 0; rowIndex < rows.length; rowIndex += 1) {
            for (let slotIndex = 0; slotIndex < slotPositions[rowIndex].length; slotIndex += 1) {
                const type = FruitSpawner.FIRST_LEVEL_IDS[rowIndex][slotIndex];
                const node = await this.createFruit(type, {
                    stage: 0,
                    // 原版 firstLevel 用 getPt(type) 的原始 scale（非固定 0.68）。
                    scale: getFruitNodeScale(type),
                    radius: 0,
                });
                if (!this.node.isValid) return;
                if (!node) continue;
                const pos = slotPositions[rowIndex][slotIndex];
                rows[rowIndex].addChild(node);
                node.setPosition(pos.x, pos.y);
                this.syncLayer(node, rows[rowIndex].layer);
            }
        }
        console.log('[FruitSpawner] firstLevel spawned 12 fruits (types 9/1/2 x4)');
    }

    /** 普通关：按生成器布局挂到 game/fruits。 */
    private async spawnGeneric(data: LevelData): Promise<void> {
        const fruitsRoot = this.node.getChildByPath('game/fruits');
        if (!fruitsRoot) {
            console.warn('[FruitSpawner] game/fruits not found');
            return;
        }

        // 第 12.2 步：黑洞待吐水果的预制体也要预热，避免吐果时才异步加载。
        const preloadTypes = data.fruits.map(fruit => fruit.type);
        for (const hole of data.blackHoles) {
            for (const type of hole.fruitTypes) preloadTypes.push(type);
        }
        await this.factory.preload(preloadTypes);
        const hasMystery = data.fruits.some(fruit => fruit.mystery === true);
        if (hasMystery) await this.mechanics.preload(['blackBox']);
        let blackBoxPrefab: Prefab | null = null;
        if (hasMystery) blackBoxPrefab = await this.mechanics.acquire('blackBox').catch(() => null);
        const hasFrozen = data.fruits.some(fruit => fruit.status === 'frozen');
        if (hasFrozen) await this.mechanics.preload(['iceLab']);
        let iceLabPrefab: Prefab | null = null;
        if (hasFrozen) iceLabPrefab = await this.mechanics.acquire('iceLab').catch(() => null);

        const beganAt = Date.now();
        let batches = 0;
        let created = 0;
        for (let index = 0; index < data.fruits.length; index += 1) {
            const fruitData = data.fruits[index];
            const node = await this.createFruit(fruitData.type, {
                stage: fruitData.stage,
                scale: fruitData.scale,
                radius: fruitData.radius,
                // 原版 ReferenceLayMgr 中冰冻在随机盒之后标记并覆盖 type，双重标记时冰冻优先。
                // 第 12.2 步：洞锚点初始 kind=3，动画结束由 HoleSystem 转为普通果并建洞。
                kind: fruitData.holeId !== undefined
                    ? 3
                    : fruitData.status === 'frozen' ? 1 : (fruitData.mystery === true ? 2 : 0),
                shellPrefab: blackBoxPrefab,
                icePrefab: iceLabPrefab,
                thawHits: fruitData.thawHits,
            });
            if (!this.node.isValid) return;
            if (!node) continue;
            created += 1;
            fruitsRoot.addChild(node);
            node.setPosition(fruitData.position.x, fruitData.position.y);
            this.syncLayer(node, fruitsRoot.layer);

            // 每创建一批让出一帧，避免第 2 关等大量水果同帧创建冻结画面。
            if (
                (index + 1) % FruitSpawner.SPAWN_BATCH_SIZE === 0
                && index + 1 < data.fruits.length
            ) {
                batches += 1;
                await this.waitNextFrame();
                if (!this.node.isValid) return;
            }
        }
        if (created !== data.fruits.length) {
            console.error(`[FruitSpawner] level ${data.level} missing ${data.fruits.length - created} fruit`
                + ` instances (${created}/${data.fruits.length}); goal can never reach 0`);
        }
        console.log(`[FruitSpawner] level ${data.level} spawned ${created}/${data.fruits.length} fruits`
            + ` in ${Date.now() - beganAt}ms across ${batches + 1} batches`);
    }

    /** async 生成链中让出一帧（scheduleOnce delay 0 在下一帧执行）。 */
    private waitNextFrame(): Promise<void> {
        return new Promise<void>(resolve => {
            this.scheduleOnce(() => resolve(), 0);
        });
    }

    /**
     * 第 12.2 步：黑洞在洞口吐出一个普通水果（原版 HoleComp.genFruit ->
     * createFruitNodes(..., new CalculatedInfo(type, pos, 0, 46, scale), ..., 1)
     * 走 init2）。实例同样登记到 spawnedEntities，自动参与后续胜负/冰冻统计。
     */
    public async emitHoleFruit(type: number, pos: Vec3): Promise<FruitEntity | null> {
        const fruitsRoot = this.node.getChildByPath('game/fruits');
        if (!fruitsRoot) {
            console.warn('[FruitSpawner] game/fruits not found for hole fruit');
            return null;
        }
        const node = await this.createFruit(type, {
            stage: 0,
            scale: getFruitNodeScale(type),
            // 原版洞吐果半径固定 46（CalculatedInfo 第 4 参）。
            radius: 46,
            kind: 0,
        });
        if (!node || !this.node.isValid) return null;
        fruitsRoot.addChild(node);
        node.setPosition(pos.x, pos.y);
        this.syncLayer(node, fruitsRoot.layer);
        return node.getComponent(FruitEntity);
    }

    private async createFruit(
        type: number,
        options: {
            stage: number;
            scale: number;
            radius: number;
            kind?: FruitKind;
            shellPrefab?: Prefab | null;
            icePrefab?: Prefab | null;
            thawHits?: number;
        },
    ): Promise<Node | null> {
        let prefab: Prefab;
        try {
            prefab = await this.factory.acquire(type);
        } catch (err) {
            console.error(`[FruitSpawner] load fruit${type} failed even with fallback prefab`, err);
            return null;
        }
        if (!this.node.isValid) return null;

        const node = instantiate(prefab);
        node.name = `fruit${type}`;
        const entity = node.getComponent(FruitEntity) ?? node.addComponent(FruitEntity);
        entity.setup(
            {
                id: this.nextId++,
                fruitType: type,
                kind: options.kind,
                stage: options.stage,
                radius: options.radius,
                thawHits: options.thawHits,
            },
            options.scale,
        );
        if ((options.kind ?? 0) === 2 && options.shellPrefab) {
            entity.attachBoxShell(options.shellPrefab);
        }
        if ((options.kind ?? 0) === 1 && options.icePrefab) {
            entity.attachIceShell(options.icePrefab);
        }
        this.spawnedNodes.push(node);
        this.spawnedEntities.push(entity);
        return node;
    }

    /**
     * 恢复出的水果预制体节点 layer 可能是 GIZMOS（原子包遗留），不在相机可见层。
     * 资源层已批量修正，这里递归同步作为兜底。
     */
    private syncLayer(node: Node, layer: number): void {
        node.layer = layer;
        for (const child of node.children) this.syncLayer(child, layer);
    }

    public clear(): void {
        for (const node of this.spawnedNodes) {
            if (node.isValid) node.destroy();
        }
        this.spawnedNodes.length = 0;
        this.spawnedEntities.length = 0;
        this.nextId = 0;
    }

    public onDestroy(): void {
        this.clear();
    }
}
