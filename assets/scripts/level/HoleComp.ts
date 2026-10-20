import {
    _decorator,
    CircleCollider2D,
    Component,
    ERigidBody2DType,
    instantiate,
    Label,
    Node,
    Prefab,
    RigidBody2D,
    Tween,
    Vec3,
} from 'cc';
import { FruitEntity } from './fruit/FruitEntity';

const { ccclass } = _decorator;

/** 第 12.2 步：黑洞依赖（由 LevelPlayfield 装配）。 */
export interface HoleCompDeps {
    /** holeCount 计数预制体（已缓存，instantiate 不产生异步加载）。 */
    countPrefab: Prefab;
    /** 计数节点挂载父节点（原版 GameMgr.numRoot）。 */
    numRoot: Node;
    /** 在洞口位置生成一个普通水果（对齐 createFruitNodes(...,init2)）。 */
    spawnEntity(type: number, pos: Vec3): Promise<FruitEntity | null>;
    /** 新水果实例化完成：绑输入、置可点、播 0.8s backOut 吐果动画。 */
    onEmitted(entity: FruitEntity): void;
    /** 洞销毁（队列吐完）时回调，用于从场地洞列表移除。 */
    onEmpty?: (hole: HoleComp) => void;
}

/**
 * 第 12.2 步：黑洞组件（重建原版 HoleComp）。
 *
 * 生命周期（原版 HoleComp.init/upInfo/genFruit/recycle）：
 * - 生成动画结束时由场地在洞锚点处创建：洞节点插在 fruits 第 0 层（水果后面），
 *   锚点水果转为普通果（fruitType=0）并与洞单向绑定（FruitEntity.hole）。
 * - 锚点被玩家点走（breakHole）后 armed=true；update 检测绑定果离开洞口
 *   距离 >=80 时，从序列 shift 下一个类型，在洞口吐出新果并重新绑定。
 * - 磁铁可直接取走绑定果：强制 genFruit 消耗序列（不等距离）。
 * - 吐最后一个果后洞立即 recycle（原版即如此），洞贴图与计数消失。
 */
@ccclass('HoleComp')
export class HoleComp extends Component {
    /** 绑定果离开洞口多少距离后吐下一个（原版固定 80）。 */
    private static readonly EMIT_DISTANCE = 80;

    private body: RigidBody2D | null = null;
    private circle: CircleCollider2D | null = null;
    private bound: FruitEntity | null = null;
    private queue: number[] = [];
    private deps: HoleCompDeps | null = null;
    private countNode: Node | null = null;
    private countLabel: Label | null = null;
    /** breakHole 后为 true，绑定果离开 80 即吐果（原版 isUpdate）。 */
    private armed = false;
    private emitting = false;
    private recycled = false;

    public init(pos: Vec3, anchor: FruitEntity, types: readonly number[], deps: HoleCompDeps): void {
        this.deps = deps;
        this.body = this.node.getComponent(RigidBody2D);
        this.circle = this.node.getComponent(CircleCollider2D);
        this.armed = false;
        if (this.body) this.body.type = ERigidBody2DType.Static;
        if (this.circle) this.circle.enabled = true;
        this.node.setPosition(pos.x, pos.y);
        this.queue = types.slice();
        this.bound = anchor;
        anchor.hole = this;

        const countNode = instantiate(deps.countPrefab);
        deps.numRoot.addChild(countNode);
        HoleComp.syncLayer(countNode, deps.numRoot.layer);
        this.countNode = countNode;
        this.countLabel = countNode.children[0]?.getComponent(Label) ?? countNode.getComponent(Label);
        this.updateLabel();
        this.updateLabelPos();
    }

    /** 洞待吐水果数量（供死局/胜利判定参考）。 */
    public get remaining(): number {
        return this.queue.length;
    }

    /**
     * 第 12.2 步：磁铁/消除道具直接消耗序列中一个指定类型
     * （原版 btnRemoveFun 第二遍扫描 curHoleFruitTyes.indexOf(ID)+splice，
     * 该果不生成实体）。消耗后序列空了则洞立即消失。
     */
    public consumeQueuedType(type: number): boolean {
        const index = this.queue.indexOf(type);
        if (index < 0) return false;
        this.queue.splice(index, 1);
        this.updateLabel();
        if (this.queue.length <= 0) this.recycle();
        return true;
    }

    /** 原版 FruitComp.breakHole：绑定果被点走，洞开始按距离吐下一个。 */
    public notifyTouched(): void {
        this.armed = true;
    }

    /** 原版 HoleComp.genFruit：强制消耗序列吐下一个（磁铁取绑定果时调用）。 */
    public forceEmit(): void {
        void this.emitNext();
    }

    protected update(): void {
        if (!this.armed || this.recycled || this.emitting || this.queue.length <= 0) return;
        const bound = this.bound;
        if (!bound || !bound.isValid || !bound.node.isValid) return;
        this.updateLabelPos();
        if (Vec3.distance(this.node.position, bound.node.position) >= HoleComp.EMIT_DISTANCE) {
            void this.emitNext();
        }
    }

    /** 原版 genFruit：解绑旧果 -> shift 类型 -> 洞口造果并绑定；队列空则回收。 */
    private async emitNext(): Promise<void> {
        if (this.recycled || this.emitting || !this.deps) return;
        this.armed = false;
        if (this.bound) {
            if (this.bound.isValid) this.bound.hole = null;
            this.bound = null;
        }
        const type = this.queue.shift();
        if (type === undefined) {
            this.recycle();
            return;
        }
        this.emitting = true;
        this.updateLabel();
        const pos = this.node.position.clone();
        const entity = await this.deps.spawnEntity(type, pos);
        this.emitting = false;
        if (this.recycled || !this.isValid || !this.node.isValid) return;
        if (!entity) {
            if (this.queue.length <= 0) this.recycle();
            return;
        }
        entity.hole = this;
        this.bound = entity;
        this.deps.onEmitted(entity);
        // 原版：吐出队列最后一个果后洞立即消失。
        if (this.queue.length <= 0) this.recycle();
    }

    /** 原版 upHoleLa：显示序列剩余数。 */
    private updateLabel(): void {
        if (this.countLabel?.isValid) this.countLabel.string = `${this.queue.length}`;
    }

    /** 原版 upHoleLaPos：计数跟随洞口，偏移 (20,-20)。 */
    private updateLabelPos(): void {
        if (this.countNode?.isValid) {
            this.countNode.setPosition(this.node.position.x + 20, this.node.position.y - 20, 0);
        }
    }

    /** 原版 recycle：停动画/回调、移除计数与洞节点。 */
    public recycle(): void {
        if (this.recycled) return;
        this.recycled = true;
        Tween.stopAllByTarget(this.node);
        this.unscheduleAllCallbacks();
        this.armed = false;
        if (this.bound?.isValid) this.bound.hole = null;
        this.bound = null;
        if (this.countNode?.isValid) this.countNode.destroy();
        this.countNode = null;
        this.countLabel = null;
        if (this.circle) this.circle.enabled = false;
        const deps = this.deps;
        if (this.node.isValid) {
            this.node.removeFromParent();
            this.node.destroy();
        }
        deps?.onEmpty?.(this);
    }

    protected onDestroy(): void {
        if (!this.recycled) {
            if (this.countNode?.isValid) this.countNode.destroy();
            this.countNode = null;
            if (this.bound?.isValid) this.bound.hole = null;
            this.bound = null;
        }
    }

    /** 与 FruitSpawner.syncLayer 同样的兜底：预制体可能残留非相机可见层。 */
    private static syncLayer(node: Node, layer: number): void {
        node.layer = layer;
        for (const child of node.children) HoleComp.syncLayer(child, layer);
    }
}
