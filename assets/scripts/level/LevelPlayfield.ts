import { _decorator, assetManager, Collider2D, Component, Graphics, instantiate, Node, Prefab, Size, Sprite, Tween, UITransform, Vec3, Widget, tween } from 'cc';
import { LevelLaunchConfig } from './LevelLaunchConfig';
import { LevelData } from './generator/LevelTypes';
import { FruitEntity, FruitInputHost } from './fruit/FruitEntity';
import { FruitSpawner } from './fruit/FruitSpawner';
import { FRUIT_PHYSICS_GROUP } from './fruit/FruitPrefabMap';
import { applyNodePhysicsGroup, ensurePhysics2DMatrix, setNodePhysicsGroup } from './Physics2DGroups';
import { COLLECTION_EVENT_FRUIT_ARRIVED, CollectionController } from './CollectionController';
import { ObstacleSpawner } from './ObstacleSpawner';
import { HoleComp, HoleCompDeps } from './HoleComp';
import { MechanicPrefabs } from './MechanicPrefabs';
import { JointRopeMgr } from './JointRopeMgr';
import { GameAudio } from '../audio/GameAudio';
import { EffectLayer } from './effects/EffectLayer';

const { ccclass } = _decorator;

interface ShiftItem {
    entity: FruitEntity;
    x: number;
    y: number;
}

/** 第 9 步失败文案（原版 overFun 入参）：超过容量 / 已无可行配对。 */
export const LOSE_REASON_FULL = '装不下啦';
export const LOSE_REASON_DEADLOCK = '消不掉啦';

/** 第 13 步道具执行结果：已执行 / 第 1 关锁定 / 忙（结算或动画中）/ 无可打乱目标。 */
export type DisturbResult = 'executed' | 'level-locked' | 'busy' | 'no-target';

/** 第 13.5 步：教学手指预制体（assets/game/prefab/game/finger.prefab）。 */
const FINGER_PREFAB_UUID = '39f2d48e-f381-450c-8df5-01633284e898';

/**
 * 第 5 步：主场地物理与移动方向（对齐原版 GameMgr 的物理子集）。
 *
 * 证据见 tmp/level页逻辑梳理.md 第 7 节与 GameMgr.initWall/hideWall/
 * fruitDown/fruitMove、FruitComp.checkBound/fruitDrop/setRigType：
 *
 * - 原包所有墙体 RigidBody2D.group 均为默认 0（DEFAULT）；只有 left/right
 *   在 initWall 中按方向改成 DEFAULT(0) 或 guardrail(5)。碰撞矩阵保持
 *   settings/v2/packages/project.json 现状（fruit=1/wall=2/obst=3/
 *   clickFruit=4/guardrail=5）。
 * - arrangeType：0 静止 / 1 下移 / 2 右移 / 3 左移。第 1 关固定 1 但不调度下移。
 * - 水果默认 Static，仅生成保护期内为 Dynamic(gravityScale=0) 用于轻微分离。
 * - 下移关：fruitDown 每 1s 尝试整体下移（非物理，直接 tween setPosition，
 *   Static 刚体会跟随节点变换）；左右移关：开局 fruitMove(true) 向分界线靠拢，
 *   之后的 7px 步进由第 6 步点击后触发。
 * - checkBound：护栏外侧（右移关 x<-345 / 左移关 x>345）压暗不可点；
 *   越过分界线（|x-line.x|<50）的水果自动 Dynamic(gravityScale=13) 下落。
 *
 * 本步不绑触摸、不入槽、不配对；自动下落的水果只会落到漏斗/地板上静止。
 */
@ccclass('LevelPlayfield')
export class LevelPlayfield extends Component implements FruitInputHost {
    private static readonly MOVE_DISTANCE = 7;
    private static readonly BASE_Y = 120;
    private static readonly DOWN_INTERVAL = 1;
    private static readonly TWEEN_TAG_MOVE = 1;

    private spawner: FruitSpawner | null = null;
    private level = 1;
    private arrangeType = 0;
    private isDowning = false;
    private halfWidth = 375;
    private halfHeight = 667;

    private line: Node | null = null;
    private leftWall: Node | null = null;
    private rightWall: Node | null = null;
    private topWall: Node | null = null;
    private bottomWall: Node | null = null;
    private canCheckWall: Node | null = null;
    private boundaryLine: Node | null = null;
    /** 第 13 步：收集区两面限制墙（原版 btnFirstWall/btnSecondWall，3→4→5）。 */
    private firstWall: Node | null = null;
    private secondWall: Node | null = null;
    /** 第 1 关教学三行（game/firstLevel/pos1..3）。 */
    private firstLevelRoot: Node | null = null;
    /** 第 13.5 步：教学手指实例（原版 GameMgr.finger，挂在 firstLevel 下）。 */
    private fingerNode: Node | null = null;
    /** 第 13.5 步：配对教学气泡（game/leaderTip，roundone 文案）。 */
    private leaderTip: Node | null = null;
    /** finger 预制体全局共享一次加载（主包资源，跨关复用）。 */
    private static fingerPrefabPromise: Promise<Prefab> | null = null;
    /** 第 1 关点击计数（原版 GameMgr.clickCount，第 4 次移入后两行）。 */
    private firstLevelClickCount = 0;
    /** 场地是否已可操作（对齐原版 ENUM_STATUS.RUN，UNRUN 期间点击无效）。 */
    private running = false;
    /** 第 7 步：收集区与配对消除控制器。 */
    private collection: CollectionController | null = null;
    /** 第 11 步：普通障碍 obs1/2/3 与木板 stake。 */
    private obstacleSpawner: ObstacleSpawner | null = null;
    /** 第 9 步：收集区容量（原版 GameMgr.slotsNum，初始 3；第 13 步砸墙 3→4→5）。 */
    private slotCapacity = 3;
    /** 第 9 步：正在红白闪烁的水果（达到危险容量）。 */
    private readonly flashing = new Set<FruitEntity>();
    /** 第 12 步：点击冰冻水果时的“未解冻”提示回调（导航层接到 LevelView.showFullTip）。 */
    public iceTipHandler: (() => void) | null = null;
    /** 第 13 步：砸墙扩位后通知会话层（LevelSession.expandCapacity）。 */
    public slotExpandedHandler: (() => void) | null = null;
    /** 第 12 步：“未解冻”每局只提示一次（原版 GameMgr.isIceTip）。 */
    private iceTipShown = false;
    /** 第 12 步：一对两个水果先后到达时只扣一次冰（原版 GameMgr.isBreaking）。 */
    private isBreakingIce = false;
    /** 第 13 步：道具（打乱/消除）执行期间锁定全场输入（原版 status=UNRUN）。 */
    private skillLocked = false;
    /** 第 13 步：磁铁飞筐剩余到达数；归 0 后解锁（2 个水果各发一次到达事件）。 */
    private skillPending = 0;
    /** 第 12.2 步：场上存活的黑洞（原版 GameMgr.holeComps）。 */
    private readonly holes: HoleComp[] = [];
    /** 第 12.2 步：洞贴图与计数预制体加载器。 */
    private readonly holeMechanics = new MechanicPrefabs();
    /** 第 12.3 步：关节绳索管理器（仅尾号 8 关节关创建）。 */
    private jointMgr: JointRopeMgr | null = null;
    /** 第 12.3 步：jointPoint 绳节预制体加载器。 */
    private readonly jointMechanics = new MechanicPrefabs();
    /** 第 14 步：特效层（消除粒子/拖尾/砸墙/落地）。 */
    private effects: EffectLayer | null = null;
    /** 第 14 步：锤子动画进行中，屏蔽重复点击墙。 */
    private wallBreaking = false;
    /** 第 12.5 步：HUD 闪电过场（GameNavigator 用 LevelHudIntro.playLightning 桥接）。 */
    public lightningFlash: (() => Promise<void>) | null = null;

    /** 进入场地：配置墙体 -> 等水果实例化 -> 生成保护期动画 -> 启动方向移动。 */
    public enter(data: LevelData, spawner: FruitSpawner): void {
        void this.run(data, spawner);
    }

    /** 收集区控制器（第 8 步 UI/会话层订阅消除事件用）。 */
    public get collectionController(): CollectionController | null {
        return this.collection;
    }

    private async run(data: LevelData, spawner: FruitSpawner): Promise<void> {
        this.spawner = spawner;
        this.level = data.level;
        this.skillLocked = false;
        this.skillPending = 0;
        this.isDowning = false;
        this.firstLevelClickCount = 0;
        const override = LevelLaunchConfig.options.moveDirOverride;
        this.arrangeType = data.level === 1 ? 1 : override ?? data.parameters.moveDir;

        const rootUITransform = this.node.getComponent(UITransform);
        this.halfWidth = (rootUITransform?.width ?? 750) / 2;
        this.halfHeight = (rootUITransform?.height ?? 1334) / 2;

        // 重建工程的 physics2d 碰撞矩阵不会自动注入运行时，玩法启动先显式安装。
        ensurePhysics2DMatrix();

        this.cacheWallNodes();
        // 第 14 步：特效层挂在 game 下（与 fruits/walls 同父），进关即预加载特效预制体。
        this.wallBreaking = false;
        const gameNode = this.node.getChildByName('game');
        if (gameNode) {
            let effectsNode = gameNode.getChildByName('effsRoot');
            if (!effectsNode) {
                effectsNode = new Node('effsRoot');
                gameNode.addChild(effectsNode);
                effectsNode.layer = gameNode.layer;
            }
            this.effects = effectsNode.getComponent(EffectLayer) ?? effectsNode.addComponent(EffectLayer);
            this.effects.currentLevel = data.level;
            void this.effects.preloadAll();
        }
        // 第 13 步：初始只开放第一面限制墙；砸掉后才给第二面绑定（原版 breakWall）。
        this.firstWall?.on(Node.EventType.TOUCH_END, this.breakWall, this);
        this.collection = this.node.getComponent(CollectionController) ?? this.node.addComponent(CollectionController);
        this.collection.bind(
            this.node,
            this.arrangeType === 2 || this.arrangeType === 3
                ? () => {
                      // 原版 fruitTween 结尾：消除后先靠拢再向分界线步进 7px。
                      this.fruitMove(true);
                      this.fruitMove(false);
                  }
                  : null,
        );
        // 第 12 步：每对水果回收后，场上全部冰冻水果受击一次（原版 breakIceFun）。
        this.collection.events.on(COLLECTION_EVENT_FRUIT_ARRIVED, this.onFruitArrivedBreakIce, this);
        // 先把全部场地碰撞体统一刷成 DEFAULT（即时重建 fixture filter），
        // 随后 initWall 再把护栏侧 left/right 改成 guardrail。
        this.refreshWallGroups();
        this.boundaryLine?.getComponent(Widget)?.updateAlignment();
        this.initWall();
        // b2 body 在本帧物理 step 后才创建，延迟一帧再重建 fixture，
        // 避免 apply 时把 fixture 挂到 groundBody 上。
        this.scheduleOnce(() => {
            if (this.node.isValid) this.applyWallFixtures();
        }, 0);

        // 第 11 步：机关与水果并行生成；生成期墙体调整在 prepare 内同步完成。
        this.obstacleSpawner = this.node.getComponent(ObstacleSpawner)
            ?? this.node.addComponent(ObstacleSpawner);
        void this.obstacleSpawner.prepare(data);

        await spawner.spawnComplete;
        if (!this.node.isValid) return;
        this.obstacleSpawner?.finalizeSpawning();

        // 生成保护期：全部水果同时播放 backOut 弹出动画（内部 Dynamic g=0 -> Static）。
        await Promise.all(spawner.entities.map(entity => entity.playSpawnAnim()));
        if (!this.node.isValid) return;

        // 第 6 步：绑定触摸与接触回调，checkBound 决定护栏侧是否可点。
        for (const entity of spawner.entities) entity.bindInput(this);
        this.checkBoundAll();
        this.hideWall();

        // 第 12.2 步：生成动画结束后在锚点处建洞（原版 anim 回调中 getNode("holeBg")）。
        await this.setupBlackHoles(data, spawner);
        if (!this.node.isValid) return;

        // 原版 setCollisionMgr(true)/showlightning 在 mapCreateJoint 的 done
        // 回调里：关节关需等绳索建好（Dynamic 0.5s -> Static）才开局。
        const beginPlay = (): void => {
            if (!this.node.isValid) return;
            if (this.level === 1) {
                // 原版 firstLevel：setFinger 后延迟 0.3s 才置 RUN（UNRUN 期间点击无效）。
                void this.startFirstLevelGuide();
                return;
            }
            this.running = true;

            if (this.arrangeType === 1) {
                this.fruitDown();
                this.schedule(this.fruitDownTick, LevelPlayfield.DOWN_INTERVAL);
            } else if (this.arrangeType === 2 || this.arrangeType === 3) {
                this.fruitMove(true);
            }
        };

        // 第 12.5 步：尾号 1 关且 curTheme==1（每 40 关一轮：L11/51/…），
        // 绳索/建洞都结束后先播 0.5s 闪电，劈落 floor(n/13) 个水果再开局
        //（原版 showlightning 在 mapCreateJoint 回调里、init() 置 RUN 前）。
        const curTheme = Math.floor(Math.max(1, this.level - 1) / 10) % 4;
        if (this.level % 10 === 1 && curTheme === 1) {
            if (this.lightningFlash) await this.lightningFlash();
            if (!this.node.isValid) return;
            this.blitzkrieg(spawner.entities);
        }

        if (data.parameters.itemConnet) {
            const ropesReady = await this.setupJointRopes();
            if (!this.node.isValid) return;
            if (ropesReady && this.jointMgr) {
                this.jointMgr.mapCreateJoint(this.level, spawner.entities, true, beginPlay);
                return;
            }
        }
        beginPlay();
    }

    /** 第 12.3 步：加载 jointPoint 预制体并创建绳索管理器（原版 jointGearMgr.init）。 */
    private async setupJointRopes(): Promise<boolean> {
        const graphicsNode = this.node.getChildByPath('game/graphics');
        const graphics = graphicsNode?.getComponent(Graphics) ?? null;
        if (!graphicsNode || !graphics) {
            console.warn('[LevelPlayfield] game/graphics missing for joint ropes');
            return false;
        }
        try {
            await this.jointMechanics.preload(['jointPoint']);
            const prefab = await this.jointMechanics.acquire('jointPoint');
            if (!this.node.isValid) return false;
            const mgr = this.node.getComponent(JointRopeMgr) ?? this.node.addComponent(JointRopeMgr);
            // 重建预制体 graphics 的 UITransform 为 0×0，init 内补齐为原版 750×1334。
            const ui = graphicsNode.getComponent(UITransform) ?? graphicsNode.addComponent(UITransform);
            ui.setContentSize(new Size(750, 1334));
            mgr.init(graphics, prefab);
            this.jointMgr = mgr;
            return true;
        } catch (err) {
            console.warn('[LevelPlayfield] jointPoint prefab load failed', err);
            return false;
        }
    }

    /** 第 12.3 步：每帧驱动绳索重绘（原版 GameMgr.update 调 upDrawRope）。 */
    protected lateUpdate(): void {
        this.jointMgr?.upDrawRope();
    }

    /**
     * 第 12.5 步：闪电战（原版 GameMgr.blitzkrieg）。
     * 劈落 floor(n/13) 个水果：下标在 [20, length-1] 随机、不重复、y>=300，
     * 选中的水果走 FruitEntity.electricShock（抖动后自由落体，等同被点击）。
     */
    private blitzkrieg(entities: readonly FruitEntity[]): void {
        GameAudio.ins.play('lei');
        const count = Math.floor(entities.length / 13);
        const picked = new Set<number>();
        const maxIndex = entities.length - 1;
        for (let struck = 0; struck < count; struck += 1) {
            if (maxIndex < 20) break;
            let index = -1;
            for (let attempt = 0; attempt < 3000; attempt += 1) {
                const candidate = Math.floor(Math.random() * (maxIndex - 20 + 1)) + 20;
                const entity = entities[candidate];
                if (
                    !picked.has(candidate)
                    && LevelPlayfield.isAlive(entity)
                    && !entity.isTouch
                    && !entity.isInSlot
                    && entity.node.position.y >= 300
                ) {
                    index = candidate;
                    break;
                }
            }
            if (index < 0) continue;
            picked.add(index);
            entities[index].electricShock();
        }
        console.log(`[LevelPlayfield] blitzkrieg struck ${picked.size}/${count} fruits`);
    }

    public onDestroy(): void {
        // 第 12.3 步：离场清理绳节与两端关节（原版 hideGameView recycle）。
        this.jointMgr?.recycle();
        this.jointMgr = null;
        this.collection?.events.off(COLLECTION_EVENT_FRUIT_ARRIVED, this.onFruitArrivedBreakIce, this);
        // 父节点组件 onDestroy 时子墙节点可能已被销毁，isValid 守卫避免对已销毁节点 off。
        if (this.fingerNode?.isValid) {
            Tween.stopAllByTarget(this.fingerNode);
            this.fingerNode.destroy();
        }
        this.fingerNode = null;
        if (this.firstWall?.isValid) this.firstWall.off(Node.EventType.TOUCH_END, this.breakWall, this);
        if (this.secondWall?.isValid) this.secondWall.off(Node.EventType.TOUCH_END, this.breakWall, this);
        this.unscheduleAllCallbacks();
        Tween.stopAllByTag(LevelPlayfield.TWEEN_TAG_MOVE);
    }

    /**
     * 第 12.2 步：黑洞关卡（尾号 0）生成动画结束后建洞。
     * 对齐原版 FruitComp.anim 回调：锚点 fruitType 改 0、holeBg 插到 fruits
     * 第 0 层、HoleComp.init(洞位, 锚点果, 洞内序列)；holeCount 计数挂 game/numRoot。
     */
    private async setupBlackHoles(data: LevelData, spawner: FruitSpawner): Promise<void> {
        if (data.blackHoles.length === 0) return;
        const fruitsRoot = this.node.getChildByPath('game/fruits');
        const numRoot = this.node.getChildByPath('game/numRoot');
        if (!fruitsRoot || !numRoot) {
            console.warn('[LevelPlayfield] game/fruits or game/numRoot missing for black holes');
            return;
        }
        await this.holeMechanics.preload(['holeBg', 'holeCount']);
        let bgPrefab: Prefab;
        let countPrefab: Prefab;
        try {
            [bgPrefab, countPrefab] = await Promise.all([
                this.holeMechanics.acquire('holeBg'),
                this.holeMechanics.acquire('holeCount'),
            ]);
        } catch (err) {
            console.warn('[LevelPlayfield] load hole prefabs failed', err);
            return;
        }
        if (!this.node.isValid) return;

        for (const holeData of data.blackHoles) {
            // 锚点是 data.fruits 前 holeCount 项，spawnGeneric 按序 1:1 生成。
            const anchorIndex = data.fruits.findIndex(fruit => fruit.holeId === holeData.id);
            const anchor = anchorIndex >= 0 ? spawner.entities[anchorIndex] : null;
            if (!anchor || !anchor.node.isValid) {
                console.warn(`[LevelPlayfield] hole ${holeData.id} anchor fruit missing`);
                continue;
            }
            anchor.becomeHoleAnchor();

            const holeNode = instantiate(bgPrefab);
            LevelPlayfield.stripMissingScripts(holeNode);
            fruitsRoot.insertChild(holeNode, 0);
            const pos = anchor.node.position.clone();
            holeNode.setPosition(pos.x, pos.y);
            LevelPlayfield.syncLayer(holeNode, fruitsRoot.layer);
            setNodePhysicsGroup(holeNode, FRUIT_PHYSICS_GROUP.DEFAULT);
            // b2 body 在本帧 step 后才创建，延迟一帧重建 fixture。
            this.scheduleOnce(() => {
                if (holeNode.isValid) applyNodePhysicsGroup(holeNode);
            }, 0);

            const comp = holeNode.getComponent(HoleComp) ?? holeNode.addComponent(HoleComp);
            const deps: HoleCompDeps = {
                countPrefab,
                numRoot,
                spawnEntity: (type, at) => spawner.emitHoleFruit(type, at),
                onEmitted: (entity) => {
                    entity.bindInput(this);
                    entity.markBoardTouchable();
                    void entity.playHoleSpawnAnim();
                },
                onEmpty: (hole) => {
                    const index = this.holes.indexOf(hole);
                    if (index >= 0) this.holes.splice(index, 1);
                },
            };
            comp.init(pos, anchor, holeData.fruitTypes, deps);
            this.holes.push(comp);
        }
        console.log(`[LevelPlayfield] level ${data.level} created ${this.holes.length} black holes`);
    }

    /** 原包 holeBg 预制体带丢失的 HoleComp 脚本（MissingScript），实例化后剔除。 */
    private static stripMissingScripts(node: Node): void {
        for (const comp of node.components.slice()) {
            if ((comp.constructor as { name?: string }).name === 'MissingScript') {
                node.removeComponent(comp);
            }
        }
    }

    /** 递归同步 layer（机关预制体可能残留 GIZMOS 等非相机可见层）。 */
    private static syncLayer(node: Node, layer: number): void {
        node.layer = layer;
        for (const child of node.children) LevelPlayfield.syncLayer(child, layer);
    }

    private cacheWallNodes(): void {
        const walls = this.node.getChildByPath('game/walls');
        this.line = walls?.getChildByName('line') ?? null;
        this.leftWall = walls?.getChildByName('left') ?? null;
        this.rightWall = walls?.getChildByName('right') ?? null;
        this.topWall = walls?.getChildByName('top') ?? null;
        this.bottomWall = walls?.getChildByName('bottom') ?? null;
        this.canCheckWall = walls?.getChildByName('canCheck') ?? null;
        this.firstWall = walls?.getChildByName('btnFirstWall') ?? null;
        this.secondWall = walls?.getChildByName('btnSecondWall') ?? null;
        this.boundaryLine = this.node.getChildByPath('game/boundaryLine');
        this.firstLevelRoot = this.node.getChildByPath('game/firstLevel');
        this.leaderTip = this.node.getChildByPath('game/leaderTip');
    }

    /** FruitInputHost：canCheck 传感器 y（节点本地坐标，预制体 -144）。 */
    public get canCheckY(): number {
        return this.canCheckWall?.position.y ?? -144;
    }

    public isInputActive(): boolean {
        return this.running && !this.skillLocked;
    }

    /** 第 8 步：胜利后锁定全场输入（对齐原版 checkWin 后 gameState=isPaused/UNRUN）。 */
    public lockInput(): void {
        this.running = false;
    }

    /**
     * 第 9 步：容量/死局判定，对齐原版 GameMgr.checkLose + checkSlotLose。
     * 每次入槽（addInSlotFruit）和每对水果到达回收后（fruitTween 结尾）调用。
     * 返回失败文案；null 表示继续游戏。
     */
    public evaluateLose(): string | null {
        if (!this.running || !this.collection || !this.spawner) return null;

        const slot = this.collection.slotEntities;
        const live = this.spawner.entities.filter(LevelPlayfield.isAlive);
        const count = slot.length;
        let reason: string | null = null;

        // checkLose：槽内数严格大于容量 -> 装不下啦（第 4 个水果入槽瞬间）。
        if (count > this.slotCapacity) {
            reason = LOSE_REASON_FULL;
        } else if (count >= this.slotCapacity && !this.canMatchInSlot(slot) && this.holes.length === 0) {
            // checkSlotLose：达到容量且槽内无配对，再给两种“救援”机会，
            // 场上还有能与槽内配对的水果、或场上仍存在任意一对，都不算死。
            // 第 12.2 步：洞存活时原版直接 return false（洞内序列还能救场）。
            if (!this.hasBoardRescue(live, slot)) reason = LOSE_REASON_DEADLOCK;
        } else if (this.holes.length === 0 && (
            count > 0
            && live.length === slot.length
            && live.every(entity => entity.isTouch)
            && !this.canMatchInSlot(slot)
        )) {
            // checkSlotLose 尾分支：场上已无未点击水果，剩余水果全在槽内且无法配对。
            reason = LOSE_REASON_DEADLOCK;
        }

        this.updateDangerFlash(slot);
        return reason;
    }

    /** 第 9 步：失败收尾；溢出时槽内水果变灰转 Static（原版 checkLose 表现）。 */
    public finalizeLose(reason: string): void {
        this.lockInput();
        for (const entity of this.flashing) entity.flashDanger(false);
        this.flashing.clear();
        if (reason === LOSE_REASON_FULL && this.collection) {
            for (const entity of this.collection.slotEntities) entity.grayOutForLose();
        }
    }

    /** 槽内是否存在同 pairId 的一对（原版 canMatchInSlot）。 */
    private canMatchInSlot(slot: readonly FruitEntity[]): boolean {
        for (let i = 0; i < slot.length; i += 1) {
            for (let j = i + 1; j < slot.length; j += 1) {
                if (slot[i].pairId === slot[j].pairId && slot[i].pairId > 0) return true;
            }
        }
        return false;
    }

    /** 场上（未入槽）水果能否挽救死局：与槽内配对，或场上自身还存在一对。 */
    private hasBoardRescue(live: readonly FruitEntity[], slot: readonly FruitEntity[]): boolean {
        const board = live.filter(entity => slot.indexOf(entity) < 0);
        for (const boardEntity of board) {
            if (slot.some(slotEntity => slotEntity.pairId === boardEntity.pairId)) return true;
        }
        for (let i = 0; i < board.length; i += 1) {
            for (let j = i + 1; j < board.length; j += 1) {
                if (board[i].pairId === board[j].pairId) return true;
            }
        }
        return false;
    }

    /** 危险值反馈：槽内数 >= 容量时红白闪烁，回落后关闭（原版 fruitColorTween）。 */
    private updateDangerFlash(slot: readonly FruitEntity[]): void {
        const danger = slot.length >= this.slotCapacity ? new Set<FruitEntity>(slot) : new Set<FruitEntity>();
        for (const entity of this.flashing) {
            if (!LevelPlayfield.isAlive(entity)) {
                this.flashing.delete(entity);
            } else if (!danger.has(entity)) {
                entity.flashDanger(false);
                this.flashing.delete(entity);
            }
        }
        for (const entity of danger) {
            if (!this.flashing.has(entity)) {
                entity.flashDanger(true);
                this.flashing.add(entity);
            }
        }
    }

    /** 消除回收后 spawner.entities 仍保留组件，但 node 引用已置空；遍历前统一判活。 */
    private static isAlive(entity: FruitEntity): boolean {
        return entity.isValid && entity.node?.isValid === true;
    }

    /** FruitInputHost：点击水果后，下移关立即整体下移一步（原版 GameMgr.fruitDown）。 */
    public onFruitClicked(_entity: FruitEntity): void {
        if (this.level === 1) {
            this.firstLevelClickCount += 1;
            this.showLeader();
        }
        if (this.level !== 1 && this.arrangeType === 1) this.fruitDown();
    }

    /**
     * 第 13.5 步：第 1 关新手引导（原版 GameMgr.firstLevel 的手指与气泡时序）。
     * 全部水果生成动画结束后调用：实例化 finger，指向 pos1 的第 1 个定位点并
     * 开放第 1 个西瓜（children[4]）；0.3s 后才置 RUN（原版 status UNRUN -> RUN）。
     * 其余水果由 checkBoundAll（arrangeType=1）天然 isCanTouch=true，与原版一致，
     * 手指只做视觉引导，不做严格门控，否则第 3/4 次点击会无水果可点。
     */
    private async startFirstLevelGuide(): Promise<void> {
        const root = this.firstLevelRoot;
        if (root) {
            try {
                const prefab = await LevelPlayfield.loadFingerPrefab();
                if (!this.node.isValid || !root.isValid) return;
                const finger = instantiate(prefab);
                finger.active = false;
                root.addChild(finger);
                finger.layer = root.layer;
                for (const child of finger.children) child.layer = root.layer;
                this.fingerNode = finger;
                // 原版 opacityTween：scale 0.7 <-> 0.8 各 0.5s 循环呼吸。
                tween(finger)
                    .to(0.5, { scale: new Vec3(0.7, 0.7, 1) })
                    .to(0.5, { scale: new Vec3(0.8, 0.8, 1) })
                    .union()
                    .repeatForever()
                    .start();
                this.setFinger(0, 0, 4, true);
            } catch (err) {
                console.warn('[LevelPlayfield] finger prefab load failed', err);
            }
        }
        this.scheduleOnce(() => {
            if (this.node.isValid) this.running = true;
        }, 0.3);
    }

    /** 主包 finger 预制体只加载一次，跨关复用同一个 Promise。 */
    private static loadFingerPrefab(): Promise<Prefab> {
        if (!LevelPlayfield.fingerPrefabPromise) {
            LevelPlayfield.fingerPrefabPromise = new Promise<Prefab>((resolve, reject) => {
                assetManager.loadAny(FINGER_PREFAB_UUID, (err, asset: Prefab) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(asset);
                });
            });
        }
        return LevelPlayfield.fingerPrefabPromise;
    }

    /**
     * 原版 GameMgr.showLeader：第 1 关每次成功点击后的引导推进。
     * 1 -> 手指改指第 2 个西瓜；2 -> 显 roundone 气泡 2s 并藏手指；
     * 4 -> pos2/pos3 两行移入（firsrLevelRound2）。
     */
    private showLeader(): void {
        switch (this.firstLevelClickCount) {
            case 1:
                this.setFinger(0, 1, 5, true);
                break;
            case 2:
                this.setFinger(0, 1, 4, false);
                if (this.leaderTip) this.leaderTip.active = true;
                this.setFinger(0, 1, 5, false);
                this.scheduleOnce(() => {
                    if (this.leaderTip?.isValid) this.leaderTip.active = false;
                }, 2);
                break;
            case 4:
                if (this.fingerNode?.isValid) this.fingerNode.active = false;
                this.startFirstLevelRound2();
                break;
            default:
                break;
        }
    }

    /**
     * 原版 GameMgr.setFinger：把手指定位到第 row 行的第 anchorIdx 个定位点
     * （坐标 = 定位点本地 x、定位点 y + 行 y），并开放同行第 fruitIdx 个水果可点。
     * 定位点/水果无效或水果已点击时即使 show=true 也藏起手指。
     */
    private setFinger(row: number, anchorIdx: number, fruitIdx: number, show: boolean): void {
        const finger = this.fingerNode;
        if (!finger) return;
        const targetRow = this.firstLevelRoot?.children[row];
        const anchor = targetRow?.children[anchorIdx] ?? null;
        const fruitNode = targetRow?.children[fruitIdx] ?? null;
        const entity = fruitNode?.getComponent(FruitEntity) ?? null;
        finger.active = show;
        if (anchor && targetRow && entity && entity.isValid && !entity.isTouch) {
            finger.setPosition(anchor.position.x, anchor.position.y + targetRow.position.y, 0);
            entity.isCanTouch = true;
        } else {
            finger.active = false;
        }
    }

    /** FruitInputHost：点击冰冻水果，每局只弹一次“未解冻”（原版 GameMgr.iceTip）。 */
    public onFrozenTouched(): void {
        if (this.iceTipShown || !this.running) return;
        this.iceTipShown = true;
        this.iceTipHandler?.();
    }

    /**
     * 第 12 步：每个水果飞入篮筐后对场上全部冰冻水果扣一次受击数
     * （原版 GameMgr.breakIceFun：isBreaking + 0.01s 复位，
     * 防止一对的两个水果先后到达时扣两次）。
     */
    private onFruitArrivedBreakIce(): void {
        // 第 13 步：磁铁强制消除的两个水果到达后解锁输入（原版 fruitTween 回调）。
        if (this.skillPending > 0) {
            this.skillPending -= 1;
            if (this.skillPending === 0) {
                this.isDowning = false;
                this.skillLocked = false;
                // 原版 fruitTween 完成回调：下移关补一次整体下移
                // （侧移关的靠拢已由收集回调 fruitMove 覆盖）。
                if (this.arrangeType === 1) this.fruitDown();
            }
        }
        if (!this.spawner || this.isBreakingIce) return;
        const frozen = this.spawner.entities.filter(
            entity => LevelPlayfield.isAlive(entity) && entity.fruitType === 1,
        );
        if (frozen.length === 0) return;
        this.isBreakingIce = true;
        for (const entity of frozen) entity.applyIceHit();
        this.scheduleOnce(() => {
            this.isBreakingIce = false;
        }, 0.01);
    }

    /**
     * 第 1 关教学（原版 GameMgr.firsrLevelRound2）：第 4 次点击后，
     * 屏外的 pos2/pos3 两行用 2s tween 移到第 1 行高度；这些水果在
     * 开局 checkBoundAll 时已 isCanTouch=true，移入后直接可点。
     */
    private startFirstLevelRound2(): void {
        const root = this.firstLevelRoot;
        const row0 = root?.children[0];
        if (!root || !row0 || root.children.length < 3 || !this.spawner) return;
        for (let rowIndex = 1; rowIndex < root.children.length; rowIndex += 1) {
            const row = root.children[rowIndex];
            const target = new Vec3(row.position.x, row0.position.y, 0);
            tween(row).to(2, { position: target }).start();
        }
        for (const entity of this.spawner.entities) {
            if (!LevelPlayfield.isAlive(entity)) continue;
            if (entity.node.parent === root.children[1] || entity.node.parent === root.children[2]) {
                entity.markBoardTouchable();
            }
        }
    }

    /** FruitInputHost：水果接触 floor/btnFirstWall/btnSecondWall，进入收集区。 */
    public onFruitSettled(entity: FruitEntity): void {
        // 原版 checkID 入槽分支：isJoint 时先断绳再入槽。
        this.jointMgr?.removeRopeByFruit(entity.node);
        this.collection?.addSettled(entity);
        // 原版 setLastTouchFruit(f,true) 后左右移关重新向分界线靠拢。
        if (this.arrangeType === 2 || this.arrangeType === 3) this.fruitMove(true);
    }

    /** FruitInputHost：同类型水果物理接触满足条件时配对消除。 */
    public onFruitMatch(self: FruitEntity, other: FruitEntity): void {
        // 原版 checkID F 分支：消除前两端各自断绳（可能连着不同的绳）。
        this.jointMgr?.removeRopeByFruit(self.node);
        this.jointMgr?.removeRopeByFruit(other.node);
        this.collection?.tryMatch(self, other);
    }

    /**
     * 把场地内所有非水果碰撞体归到 DEFAULT 分组并即时刷新 filter；
     * left/right 的 guardrail 特例随后由 initWall 的分组设置覆盖。
     */
    private refreshWallGroups(): void {
        const walk = (node: Node): void => {
            if (!node.getComponent(FruitEntity) && node.getComponent(Collider2D)) {
                setNodePhysicsGroup(node, FRUIT_PHYSICS_GROUP.DEFAULT);
            }
            for (const child of node.children) walk(child);
        };
        walk(this.node);
    }

    /** b2 body 就绪后的下一帧：重建全部场地碰撞体的 fixture（跳过水果）。 */
    private applyWallFixtures(): void {
        const walk = (node: Node): void => {
            if (!node.getComponent(FruitEntity) && node.getComponent(Collider2D)) {
                applyNodePhysicsGroup(node);
            }
            for (const child of node.children) walk(child);
        };
        walk(this.node);
    }

    /**
     * 原版 GameMgr.initWall：按方向配置四边墙与分界线。
     * 注意 case 0 原版穿透到 case 1，但 case 0 额外开启了 top/bottom。
     */
    private initWall(): void {
        if (this.leftWall) {
            this.leftWall.active = false;
            this.leftWall.setPosition(-this.halfWidth - 100, 0);
        }
        if (this.rightWall) {
            this.rightWall.active = false;
            this.rightWall.setPosition(this.halfWidth + 100, 0);
        }
        if (this.topWall) this.topWall.active = false;
        if (this.bottomWall) {
            this.bottomWall.active = true;
            this.bottomWall.getComponent(Widget)?.updateAlignment();
        }

        const setGroup = (wall: Node | null, group: number): void => {
            if (wall) setNodePhysicsGroup(wall, group);
        };

        switch (this.arrangeType) {
            case 0:
                setGroup(this.leftWall, FRUIT_PHYSICS_GROUP.DEFAULT);
                setGroup(this.rightWall, FRUIT_PHYSICS_GROUP.DEFAULT);
                if (this.line) this.line.active = false;
                if (this.leftWall) this.leftWall.active = true;
                if (this.rightWall) this.rightWall.active = true;
                if (this.topWall) this.topWall.active = true;
                if (this.bottomWall) this.bottomWall.active = true;
                break;
            case 1:
                setGroup(this.leftWall, FRUIT_PHYSICS_GROUP.DEFAULT);
                setGroup(this.rightWall, FRUIT_PHYSICS_GROUP.DEFAULT);
                if (this.line) this.line.active = false;
                if (this.leftWall) this.leftWall.active = true;
                if (this.rightWall) this.rightWall.active = true;
                break;
            case 2:
                if (this.line) {
                    this.line.active = true;
                    this.line.setPosition(this.halfWidth - 70, this.line.position.y);
                }
                setGroup(this.rightWall, FRUIT_PHYSICS_GROUP.DEFAULT);
                setGroup(this.leftWall, FRUIT_PHYSICS_GROUP.GUARDRAIL);
                if (this.rightWall) this.rightWall.active = true;
                if (this.leftWall) this.leftWall.active = true;
                if (this.topWall) this.topWall.active = true;
                if (this.bottomWall) this.bottomWall.active = true;
                break;
            case 3:
                if (this.line) {
                    this.line.active = true;
                    this.line.setPosition(-this.halfWidth + 70, this.line.position.y);
                }
                setGroup(this.leftWall, FRUIT_PHYSICS_GROUP.DEFAULT);
                setGroup(this.rightWall, FRUIT_PHYSICS_GROUP.GUARDRAIL);
                if (this.leftWall) this.leftWall.active = true;
                if (this.rightWall) this.rightWall.active = true;
                if (this.topWall) this.topWall.active = true;
                if (this.bottomWall) this.bottomWall.active = true;
                break;
            default:
                break;
        }
    }

    /**
     * 原版 GameMgr.hideWall：bottom 墙在所有方向关生成完成后都隐藏（左右移关
     * 越线自动下落的水果由此落进漏斗，否则会停在 bottom 大板上水平滑出屏幕）；
     * top 墙仅下移关隐藏（initWall 中下移关本就没开 top）。
     */
    private hideWall(): void {
        if (this.arrangeType === 1 && this.topWall) this.topWall.active = false;
        if (this.bottomWall) this.bottomWall.active = false;
    }

    /** 原版 GameMgr.fruitDown：第 1 关以外的下移关每 1s 整体下移。 */
    private readonly fruitDownTick = (): void => {
        this.fruitDown();
    };

    private fruitDown(): void {
        if (this.level === 1 || this.arrangeType !== 1 || this.isDowning || !this.spawner) return;

        const boundaryY = this.boundaryLine?.position.y ?? 0;
        const targetY = boundaryY + 10;
        let minY = Infinity;
        let maxY = -Infinity;
        for (const entity of this.spawner.entities) {
            if (!LevelPlayfield.isAlive(entity) || entity.isTouch) continue;
            const y = entity.node.position.y;
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
        }
        if (!isFinite(minY) || maxY < this.halfHeight - 250) return;

        const distance = minY - targetY;
        if (distance <= 20) return;

        let duration = distance / 600;
        if (duration < 0.4) duration = 0.4;
        this.isDowning = true;
        this.shiftFruits(0, -distance, duration, null, 0);
        this.scheduleOnce(() => {
            this.isDowning = false;
        }, duration + 0.2);
    }

    /**
     * 原版 GameMgr.fruitMove：左右移关的整体横移。
     * initial=true：开局按距分界线最近水果的距离一次性靠拢（至少留 baseY 间隔）；
     * initial=false：向分界线方向步进 7px（第 6 步点击后调用，本步预留 public）。
     */
    public fruitMove(initial: boolean): void {
        if (this.isDowning || this.arrangeType <= 1 || !this.spawner) return;

        let distance = LevelPlayfield.MOVE_DISTANCE;
        const nearest = this.minDistanceToLine();

        const doMove = (): void => {
            Tween.stopAllByTag(LevelPlayfield.TWEEN_TAG_MOVE);
            this.isDowning = true;
            let duration: number;
            if (initial) {
                duration = distance / 1050;
                if (duration < 0.15) duration = 0.15;
            } else {
                duration = 0.1;
            }
            // 原版 i() 内符号翻转对初始靠拢与步进都生效：
            // RIGHT 水果在屏左向右移（+），LEFT 水果在屏右向左移（-）。
            distance = this.arrangeType === 2 ? distance : -distance;
            this.scheduleOnce(() => {
                this.isDowning = false;
            }, duration);
            this.shiftFruits(distance, 0, duration, () => this.checkBoundAll(), LevelPlayfield.TWEEN_TAG_MOVE);
        };

        if (initial) {
            if (nearest > LevelPlayfield.BASE_Y) {
                distance = nearest - LevelPlayfield.BASE_Y;
                this.scheduleOnce(doMove, 0.1);
            }
        } else {
            doMove();
        }
    }

    /** 原版 getMinDistance：未触摸水果中距分界线 x 的最小距离。 */
    private minDistanceToLine(): number {
        const lineX = this.line?.position.x ?? 0;
        let nearest = 5000;
        for (const entity of this.spawner?.entities ?? []) {
            if (!LevelPlayfield.isAlive(entity) || entity.isTouch) continue;
            const d = Math.abs(entity.node.position.x - lineX);
            if (d < nearest) nearest = d;
        }
        return nearest;
    }

    /**
     * 单个 tween 驱动所有未触摸水果平移（原版实现方式，避免数百个 tween）。
     * tag=0 表示不打标签（fruitDown 原版也不打标签）。
     */
    private shiftFruits(dx: number, dy: number, duration: number, done: (() => void) | null, tag: number): void {
        const items: ShiftItem[] = [];
        for (const entity of this.spawner?.entities ?? []) {
            if (!LevelPlayfield.isAlive(entity) || entity.isTouch) continue;
            items.push({ entity, x: entity.node.position.x, y: entity.node.position.y });
        }
        const driver = { offset: 0 };
        const t = tween(driver).to(duration, { offset: 1 }, {
            onUpdate: () => {
                for (const item of items) {
                    if (LevelPlayfield.isAlive(item.entity)) {
                        item.entity.node.setPosition(item.x + dx * driver.offset, item.y + dy * driver.offset);
                    }
                }
            },
        });
        if (tag !== 0) t.tag(tag);
        if (done) {
            t.call(() => {
                if (this.node.isValid) done();
            });
        }
        t.start();
    }

    /** 原版 FruitComp.checkBound：方向关按水平位置压暗/恢复，并处理越线自动下落。 */
    private checkBoundAll(): void {
        if (!this.spawner) return;
        for (const entity of this.spawner.entities) {
            if (!LevelPlayfield.isAlive(entity)) continue;
            this.checkBoundOne(entity);
        }
    }

    /** 单个水果的 checkBound：护栏侧压暗、越分界线自动下落（打乱落位后同样调用）。 */
    private checkBoundOne(entity: FruitEntity): void {
        const lineX = this.line?.position.x ?? 0;
        if (this.arrangeType === 0 || this.arrangeType === 1) {
            entity.markBoardTouchable();
            return;
        }
        const x = entity.node.position.x;
        let dark = false;
        if (this.arrangeType === 2) {
            dark = x < -this.halfWidth + 30;
        } else if (this.arrangeType === 3) {
            dark = x > this.halfWidth - 30;
        }
        entity.applySideAppearance(dark);
        if (entity.isCanTouch && Math.abs(lineX - x) < 50) {
            entity.autoDrop();
        }
    }

    /**
     * 第 13 步：刷新/打乱（原版 GameMgr.btnDisturbFun）。
     * 候选 = 未锁定、未入槽、未越过 canCheck 线的普通/随机盒水果
     * （冰冻、黑洞绑定水果不动）；2 个直接互换，更多则 Fisher-Yates
     * 洗牌位置（SOUtil.shuffleArray 同实现）。执行期间锁定全场输入。
     * 返回执行结果供导航层提示（第 1 关原版弹“第二关使用”）。
     * 第 12.2 步：原版打乱会互换洞绑定关系，本工程简化为直接排除绑定果。
     */
    public disturbFruits(): DisturbResult {
        if (this.level === 1) return 'level-locked';
        if (!this.running || this.skillLocked || this.isDowning || !this.spawner) return 'busy';

        const candidates = this.spawner.entities.filter(entity =>
            LevelPlayfield.isAlive(entity)
            && !entity.isCollider
            && !entity.isInSlot
            && !entity.canCheckPassed
            && !entity.hole
            && (entity.fruitType === 0 || entity.fruitType === 2));
        if (candidates.length < 2) return 'no-target';

        const positions = candidates.map(entity => entity.node.position.clone());
        if (positions.length === 2) {
            const first = positions[0];
            positions[0] = positions[1];
            positions[1] = first;
        } else {
            LevelPlayfield.shufflePositions(positions);
        }

        this.isDowning = true;
        this.skillLocked = true;
        // 原版 btnDisturbFun：打乱前先拆全部绳（两端 removeJoint + 销毁链节）。
        const jointCount = this.jointMgr?.connectNum ?? 0;
        if (jointCount > 0) this.jointMgr?.recycle();
        for (const entity of candidates) entity.prepareShuffle();

        let finished = 0;
        const total = candidates.length;
        const unlockAfterShuffle = (): void => {
            // 原版 sortFruit 后 shuffleCreateJoint：绳对数与打乱前一致，
            // 建链的 Dynamic 0.5s -> Static 期间保持输入锁定，done 后再解锁。
            if (jointCount > 0 && this.jointMgr && this.spawner) {
                this.jointMgr.shuffleCreateJoint(jointCount, this.spawner.entities, () => {
                    if (!this.node.isValid) return;
                    this.isDowning = false;
                    this.skillLocked = false;
                });
            } else {
                this.isDowning = false;
                this.skillLocked = false;
            }
        };
        candidates.forEach((entity, index) => {
            entity.playShuffleTween(positions[index], () => {
                if (this.node.isValid) this.checkBoundOne(entity);
                finished += 1;
                if (finished === total && this.node.isValid) {
                    unlockAfterShuffle();
                }
            });
        });
        return 'executed';
    }

    /** SOUtil.shuffleArray：返回洗牌后的新数组（Fisher-Yates，Math.random）。 */
    private static shufflePositions(positions: Vec3[]): Vec3[] {
        for (let i = positions.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1));
            const tmp = positions[i];
            positions[i] = positions[j];
            positions[j] = tmp;
        }
        return positions;
    }

    /**
     * 第 13 步：消除/磁铁（原版 GameMgr.btnRemoveFun(1)）。
     * 先在槽内（槽尾向前）找一个场内有配偶的水果；找不到再从全场
     * 普通水果里按方向取边界果（下移最低/左移最左/右移最右/静止随机）。
     * 配偶优先普通，其次冰冻（直接解冻）、随机盒（直接开盖）。
     * 选中后走与正常配对完全相同的飞筐/到达事件链，期间锁定全场输入。
     */
    public removeFruitPair(): DisturbResult {
        if (this.level === 1) return 'level-locked';
        if (!this.running || this.skillLocked || this.isDowning || !this.spawner || !this.collection) {
            return 'busy';
        }

        const picked = this.selectMagnetPair();
        if (!picked) {
            // 第 12.2 步：槽内果在场上无配偶时，直接消耗黑洞待吐序列中的同类型
            //（原版 btnRemoveFun 第二遍扫描 curHoleFruitTyes.indexOf(ID)+splice），
            // 该序列果不生成实体；槽内果独自飞筐，另补一次虚拟到达递减目标。
            const slot = this.collection.slotEntities;
            for (let index = slot.length - 1; index >= 0; index -= 1) {
                const queuedSeed = slot[index];
                if (queuedSeed.isCollider) continue;
                const targetHole = this.holes.find(hole =>
                    hole.isValid && hole.consumeQueuedType(queuedSeed.pairId));
                if (targetHole) {
                    queuedSeed.isTouch = true;
                    if (!this.collection.forceEliminateOne(queuedSeed)) return 'no-target';
                    this.isDowning = true;
                    this.skillLocked = true;
                    this.skillPending = 2;
                    this.collection.events.emit(
                        COLLECTION_EVENT_FRUIT_ARRIVED,
                        { pairId: queuedSeed.pairId } as { pairId: number },
                    );
                    return 'executed';
                }
            }
            return 'no-target';
        }
        const [seed, partner] = picked;
        // getMatchFruit：冰冻/盒配偶先解冻/开盖，再按普通水果飞筐。
        if (partner.fruitType === 1) partner.unlockIce();
        else if (partner.fruitType === 2) partner.unlockBlackBox();
        // 第 12.2 步：配偶是洞绑定果时强制消耗序列吐下一个（原版 getMatchFruit
        // 的 A 桶分支 r.holeComp.genFruit()），绑定果本身照常飞筐。
        partner.hole?.forceEmit();
        seed.isTouch = true;
        partner.isTouch = true;
        // 第 14 步：原版 btnRemoveFun 场上扫描路径（非槽内优先路径）给被消水果挂 streak 拖尾。
        if (this.collection.slotEntities.indexOf(seed) < 0) {
            void this.effects?.spawnStreak(seed.node);
            void this.effects?.spawnStreak(partner.node);
        }
        // 第 12.3 步：原版 getMatchFruit 末尾，seed/partner 任一为关节果先断绳再飞筐。
        this.jointMgr?.removeRopeByFruit(seed.node);
        this.jointMgr?.removeRopeByFruit(partner.node);
        if (!this.collection.forceEliminatePair(seed, partner)) return 'no-target';

        this.isDowning = true;
        this.skillLocked = true;
        this.skillPending = 2;
        return 'executed';
    }

    /** 原版 btnRemoveFun 的选对 + getMatchFruit 桶优先级。 */
    private selectMagnetPair(): readonly [FruitEntity, FruitEntity] | null {
        const all = (this.spawner?.entities ?? []).filter(LevelPlayfield.isAlive);
        const findPartner = (seed: FruitEntity): FruitEntity | null => {
            const matches = all.filter(entity =>
                entity !== seed
                && !entity.isCollider
                && entity.pairId > 0
                && entity.pairId === seed.pairId
                && (entity.fruitType === 0 || entity.fruitType === 1 || entity.fruitType === 2));
            if (matches.length === 0) return null;
            // 第 12.3 步 getMatchFruit 桶顺序：普通 > 关节果 > 洞绑定果 > 冰冻 > 随机盒。
            const normal = matches.filter(entity => entity.fruitType === 0 && !entity.hole && !entity.isJoint);
            const jointBound = matches.filter(entity => entity.fruitType === 0 && entity.isJoint);
            const holeBound = matches.filter(entity => entity.fruitType === 0 && !!entity.hole);
            const frozen = matches.filter(entity => entity.fruitType === 1);
            const mystery = matches.filter(entity => entity.fruitType === 2);
            const bucket = normal.length > 0
                ? normal
                : jointBound.length > 0
                    ? jointBound
                : holeBound.length > 0
                    ? holeBound
                    : frozen.length > 0
                        ? frozen
                        : mystery;
            bucket.sort((a, b) => this.compareMagnetTarget(a, b));
            return bucket[0] ?? null;
        };

        // 槽内优先：fruitsInSlotComp 逆序找第一个能配对的。
        const slot = this.collection?.slotEntities ?? [];
        for (let i = slot.length - 1; i >= 0; i -= 1) {
            if (slot[i].isCollider) continue;
            const partner = findPartner(slot[i]);
            if (partner) return [slot[i], partner];
        }

        // 全场普通果（原版 ID>0 && fruitType=0 && !holeComp，含已点击下落中的）。
        const board = all.filter(entity =>
            entity.fruitType === 0 && entity.pairId > 0 && !entity.isCollider && !entity.hole);
        if (board.length === 0) return null;
        let seed: FruitEntity;
        if (this.arrangeType === 1) {
            seed = board.reduce((a, b) => (b.node.position.y < a.node.position.y ? b : a));
        } else if (this.arrangeType === 3) {
            seed = board.reduce((a, b) => (b.node.position.x < a.node.position.x ? b : a));
        } else if (this.arrangeType === 2) {
            seed = board.reduce((a, b) => (b.node.position.x > a.node.position.x ? b : a));
        } else {
            seed = board[Math.floor(Math.random() * board.length)];
        }
        const partner = findPartner(seed);
        return partner ? [seed, partner] : null;
    }

    /** eliminateDataSort 的简化：已点击下落中的优先，再按方向取最靠近漏斗的。 */
    private compareMagnetTarget(a: FruitEntity, b: FruitEntity): number {
        if (a.isTouch !== b.isTouch) return a.isTouch ? -1 : 1;
        if (this.arrangeType === 3) return a.node.position.x - b.node.position.x;
        if (this.arrangeType === 2) return b.node.position.x - a.node.position.x;
        return a.node.position.y - b.node.position.y;
    }

    /**
     * 第 13 步：点击“解锁”砖扩一个槽位（原版 GameMgr.breakWall，跳过广告）。
     * 3→4 砸掉 btnFirstWall，并把 btnSecondWall 升级为解锁砖
     * （贴图换成第一面的“水果解锁砖”、箭头子节点显示、绑定点击）；
     * 4→5 砸掉 btnSecondWall；两面都没了即上限 5，不再响应。
     * 第 14 步：补上 playChuiziEff 锤子动画，命中瞬间播解锁音 +
     * creatBoxBoom 碎石再拆墙（原版音效在锤击时才响，不是点击时）。
     * 槽位容量点击即生效（原版 slotsNum++ 在锤子之前）。
     */
    private readonly breakWall = (): void => {
        if (!this.running || this.skillLocked || this.wallBreaking) return;
        if (this.firstWall) {
            this.wallBreaking = true;
            const wall = this.firstWall;
            const second = this.secondWall;
            // 解锁砖贴图要在墙销毁前从第一面墙取下来复用给第二面。
            const unlockFrame = wall.getComponent(Sprite)?.spriteFrame ?? null;
            wall.off(Node.EventType.TOUCH_END, this.breakWall, this);
            this.firstWall = null;
            this.expandSlot();
            this.effects?.playHammer(wall, () => {
                GameAudio.ins.play('解锁坑位');
                this.effects?.playBoxBoom(wall);
                wall.destroy();
                // 第二面墙在第一面砸碎后升级为可点击的“水果解锁砖”。
                if (second && second.isValid) {
                    const secondSprite = second.getComponent(Sprite);
                    if (unlockFrame && secondSprite) secondSprite.spriteFrame = unlockFrame;
                    if (second.children[0]) second.children[0].active = true;
                    if (second.children[1]) second.children[1].active = true;
                    second.on(Node.EventType.TOUCH_END, this.breakWall, this);
                }
                this.wallBreaking = false;
            });
        } else if (this.secondWall) {
            this.wallBreaking = true;
            const wall = this.secondWall;
            wall.off(Node.EventType.TOUCH_END, this.breakWall, this);
            this.secondWall = null;
            this.expandSlot();
            this.effects?.playHammer(wall, () => {
                GameAudio.ins.play('解锁坑位');
                this.effects?.playBoxBoom(wall);
                wall.destroy();
                this.wallBreaking = false;
            });
        }
    };

    /** slotsNum++/colorLimit++：同步会话层并立即解除危险闪烁。 */
    private expandSlot(): void {
        this.slotCapacity += 1;
        this.slotExpandedHandler?.();
        // 顺带刷新红白闪烁：扩位后槽内数不再达到危险阈值。
        this.evaluateLose();
    }

    /**
     * 第 13 步：复活（原版 GameMgr.reviveFun，跳过广告）。
     * 已点击水果中除最低的锚点果外全部退回点击前原位（自动下落果
     * 退到中部安全点），从槽位移除；锚点果留在槽内继续 Dynamic 下落。
     * 场上未点击水果临时 Dynamic(g=0) 防穿越，归位完成后恢复 Static。
     * 目标数不回滚（已入筐计数保持）；完成后重新开放输入。
     */
    public revive(): void {
        if (!this.spawner || !this.collection || this.running) return;

        const live = this.spawner.entities.filter(LevelPlayfield.isAlive);
        // 原版 f：全部 isTouch 水果（正在飞筐消除的 isCollider 已锁，跳过）。
        const touched = live.filter(entity => entity.isTouch && !entity.isCollider);
        if (touched.length === 0) {
            this.resumeAfterRevive([]);
            return;
        }

        // 原版 l：未点击、未入槽、未过 canCheck、在屏幕内的水果。
        const bystanders = live.filter(entity =>
            !entity.isCollider
            && !entity.isInSlot
            && !entity.canCheckPassed
            && LevelPlayfield.isOnBoard(entity.node.position, this.halfWidth, this.halfHeight));
        for (const entity of bystanders) entity.prepareReviveBystander();

        // 原版 v：isTouch 中 y 最低的水果留在槽内做锚点。
        const anchor = touched.reduce((lowest, entity) =>
            (entity.node.position.y < lowest.node.position.y ? entity : lowest));
        const returnees = touched.filter(entity => entity !== anchor);

        if (returnees.length === 0) {
            anchor.resumeFallingAnchor();
            this.resumeAfterRevive(bystanders);
            return;
        }

        let finished = 0;
        for (const entity of returnees) {
            if (entity.isInSlot) this.collection.removeFromSlot(entity);
            // 自动下落果没有 downOrgPos（原版走 getSafePos）。
            const target = entity.isAutoDrop || !entity.downOrgPos
                ? this.getSafeRevivePosition(bystanders, entity.radius)
                : entity.downOrgPos;
            entity.reviveReturnTo(target, () => {
                if (!this.node.isValid) return;
                this.checkBoundOne(entity);
                finished += 1;
                if (finished === returnees.length) {
                    // 已锁定飞筐的水果仍占槽，不能恢复物理。
                    this.collection?.slotEntities
                        .filter(slotEntity => !slotEntity.isCollider)
                        .forEach(slotEntity => slotEntity.resumeFallingAnchor());
                    this.resumeAfterRevive(bystanders);
                }
            });
        }
    }

    /** 复活归位结束：场上水果回 Static，重新开放输入与方向移动。 */
    private resumeAfterRevive(bystanders: readonly FruitEntity[]): void {
        for (const entity of bystanders) {
            if (LevelPlayfield.isAlive(entity)) entity.finishReviveBystander();
        }
        this.isDowning = false;
        this.skillLocked = false;
        this.running = true;
        this.checkBoundAll();
    }

    /** 原版 isOnScreen（无下边界，仅排除左右屏外与屏顶以上）。 */
    private static isOnBoard(pos: Vec3, halfWidth: number, halfHeight: number): boolean {
        return pos.x < halfWidth + 100 && pos.x > -halfWidth - 100 && pos.y < halfHeight + 100;
    }

    /**
     * 原版 getSafePos 的简化：中部安全矩形内随机找点，
     * 与场上水果保持半径距离，30 次找不到则直接随机。
     */
    private getSafeRevivePosition(bystanders: readonly FruitEntity[], radius: number): Vec3 {
        const xMin = this.arrangeType === 3 ? -200 : -300;
        const xMax = this.arrangeType === 2 ? 200 : 300;
        const yMin = this.boundaryLine?.position.y ?? 0;
        const yMax = this.halfHeight;
        const occupied = bystanders.map(entity => ({
            x: entity.node.position.x,
            y: entity.node.position.y,
            r: Math.max(entity.radius, 20),
        }));
        const minGap = Math.max(radius, 40);
        for (let attempt = 0; attempt < 30; attempt += 1) {
            const x = xMin + Math.random() * (xMax - xMin);
            const y = yMin + Math.random() * (yMax - yMin);
            if (occupied.every(item => Math.hypot(item.x - x, item.y - y) > item.r + minGap)) {
                return new Vec3(x, y, 0);
            }
        }
        return new Vec3(
            -300 + Math.random() * 600,
            200 + Math.random() * 300,
            0,
        );
    }
}
