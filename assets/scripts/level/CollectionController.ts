import { _decorator, Component, EventTarget, Mat4, Node, Vec3, tween } from 'cc';
import { FruitEntity } from './fruit/FruitEntity';
import { GameAudio } from '../audio/GameAudio';

const { ccclass } = _decorator;

/** 第 7 步事件：一对水果成功配对（在消除动画开始时派发一次）。 */
export interface PairEliminatedDetail {
    pairId: number;
}

export const COLLECTION_EVENT_PAIR_ELIMINATED = 'pair-eliminated';

/** 第 8 步事件：一个水果飞入篮筐完成回收（原版 fruitTween 到达时 updateFruitText 递减）。 */
export interface FruitArrivedDetail {
    pairId: number;
}

export const COLLECTION_EVENT_FRUIT_ARRIVED = 'fruit-arrived';

/** 第 9 步事件：一个新水果落入收集区（原版 addInSlotFruit 入列后做容量判定）。 */
export interface FruitSettledDetail {
    pairId: number;
}

export const COLLECTION_EVENT_FRUIT_SETTLED = 'fruit-settled';

/**
 * 下方收集区与配对消除的控制器（对齐原版 GameMgr 的 fruitsInSlotComp/
 * addInSlotFruit/checkID F 分支/fruitTween/recycleFruit 的基础逻辑）。
 *
 * - 水果接触 floor/btnFirstWall/btnSecondWall 后由 addSettled 入槽；
 * - 配对判定在水果间 POST_SOLVE 接触中由 FruitEntity 发起（双方越过 canCheck
 *   或一方已入槽且 pairId 相同），本控制器只做去重/锁定/动画/回收；
 * - 消除数量通过事件通知（第 8 步由 UI/会话层订阅更新剩余目标与进度），
 *   控制器不直接操作 UI。
 *
 * 容量/满载失败是第 9 步内容，本步不做。
 */
@ccclass('CollectionController')
export class CollectionController extends Component {
    public readonly events = new EventTarget();

    private readonly inSlotEntities: FruitEntity[] = [];
    private basket01: Node | null = null;
    private basket02: Node | null = null;
    /** 每对水果到达篮子后的回调（原版 fruitTween 结尾的 fruitMove(true)+(false)）。 */
    private pairArrived: (() => void) | null = null;

    public bind(root: Node, pairArrived: (() => void) | null = null): void {
        this.basket01 = root.getChildByPath('game/basket01');
        this.basket02 = root.getChildByPath('game/basket02');
        this.pairArrived = pairArrived;
    }

    /** 原版 addInSlotFruit 的去重入槽。 */
    public addSettled(entity: FruitEntity): void {
        if (this.inSlotEntities.indexOf(entity) < 0) {
            this.inSlotEntities.push(entity);
            this.events.emit(COLLECTION_EVENT_FRUIT_SETTLED, { pairId: entity.pairId } as FruitSettledDetail);
        }
    }

    public get slotCount(): number {
        return this.inSlotEntities.length;
    }

    /** 两个水果满足配对条件时调用；任一方已锁定则忽略，保证一对只结算一次。 */
    public tryMatch(a: FruitEntity, b: FruitEntity): void {
        if (a === b || a.isCollider || b.isCollider) return;
        if (!a.node.isValid || !b.node.isValid) return;
        if (a.pairId !== b.pairId || a.pairId <= 0) return;
        this.eliminatePair(a, b);
    }

    /**
     * 第 13 步：磁铁/消除道具强制消除一对（原版 GameMgr.btnRemoveFun
     * 选中后对每个水果 hideCollider + fruitTween）。不检查接触/越线/类型，
     * 调用方负责挑选与解冻/开盖；复用同一套飞筐/到达事件链。
     * @returns 是否成功发起消除。
     */
    public forceEliminatePair(a: FruitEntity, b: FruitEntity): boolean {
        if (a === b || a.isCollider || b.isCollider) return false;
        if (!a.node.isValid || !b.node.isValid) return false;
        if (a.pairId !== b.pairId || a.pairId <= 0) return false;
        this.eliminatePair(a, b);
        return true;
    }

    /**
     * 第 12.2 步：单果飞筐（原版 btnRemoveFun 第二遍扫描：槽内果在黑洞
     * 待吐序列里找到同类型时，序列项直接消耗、不生成实体，槽内果独自飞筐）。
     * 到达时只派发一次 fruit-arrived；序列项的那次递减由调用方另发虚拟事件。
     */
    public forceEliminateOne(entity: FruitEntity): boolean {
        if (entity.isCollider || !entity.node.isValid || entity.pairId <= 0) return false;
        entity.lockForElimination();
        entity.playEliminationTween(this.basketLocalFor(entity), () => this.onFruitArrived(entity));
        return true;
    }

    private eliminatePair(a: FruitEntity, b: FruitEntity): void {
        a.lockForElimination();
        b.lockForElimination();
        // 原版 checkID F 分支配对成功即播连击音（xiaochu_1..5，3s 窗口递增）。
        GameAudio.ins.playCombo();
        // 原版：配对水果在 fruitTween 到达回收时才 fruitSplice 出槽，
        // 飞行期间仍占容量（第 9 步溢出判定依赖此时机）。

        a.playEliminationTween(this.basketLocalFor(a), () => this.onFruitArrived(a));
        b.playEliminationTween(this.basketLocalFor(b), () => this.onFruitArrived(b));

        this.events.emit(COLLECTION_EVENT_PAIR_ELIMINATED, { pairId: a.pairId } as PairEliminatedDetail);
    }

    /** 原版 fruitSplice：水果到达篮筐回收时从槽位列表摘除；复活退回的水果同样摘除。 */
    public removeFromSlot(entity: FruitEntity): void {
        const index = this.inSlotEntities.indexOf(entity);
        if (index >= 0) this.inSlotEntities.splice(index, 1);
    }

    /** 当前槽内水果（含飞行中的已配对水果，对齐原版 fruitsInSlotComp）；过滤已销毁残留。 */
    public get slotEntities(): FruitEntity[] {
        return this.inSlotEntities.filter(entity => entity.isValid && entity.node?.isValid === true);
    }

    /** 原版 fruitTween 结尾：篮子弹跳 + 回收节点（音效/粒子在表现步骤补）。 */
    private onFruitArrived(entity: FruitEntity): void {
        this.removeFromSlot(entity);
        this.playBasketTween();
        // 原版 fruitTween：水果消失音，同组并发上限 1。
        GameAudio.ins.play('水果消失', 1);
        // 原版顺序：basketTween -> updateFruitText（递减/胜利判定）-> fruitMove -> recycleFruit。
        this.events.emit(COLLECTION_EVENT_FRUIT_ARRIVED, { pairId: entity.pairId } as FruitArrivedDetail);
        this.pairArrived?.();
        if (entity.node.isValid) entity.node.destroy();
    }

    /**
     * 原版 basketTween：basket01/basket02 各做 0.15 放大 1.2 再 0.15 还原。
     * 每个水果到达时都触发一次（两个水果连放即两次轻跳）。
     */
    private playBasketTween(): void {
        for (const basket of [this.basket01, this.basket02]) {
            if (!basket) continue;
            tween(basket)
                .to(0.15, { scale: new Vec3(1.2, 1.2, 1) })
                .to(0.15, { scale: new Vec3(1, 1, 1) })
                .start();
        }
    }

    /** 把 basket01 的世界坐标换算成水果父节点本地坐标（fruits/firstLevel 层级不同也要正确）。 */
    private basketLocalFor(entity: FruitEntity): Vec3 {
        const parent = entity.node.parent ?? this.node;
        const world = this.basket01?.worldPosition ?? Vec3.ZERO;
        const inverse = new Mat4();
        Mat4.invert(inverse, parent.getWorldMatrix());
        const local = new Vec3();
        Vec3.transformMat4(local, world, inverse);
        return local;
    }

    public clear(): void {
        this.inSlotEntities.length = 0;
    }

    public onDestroy(): void {
        this.events.targetOff(this);
        this.clear();
    }
}
