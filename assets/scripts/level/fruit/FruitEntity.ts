import {
    _decorator,
    CircleCollider2D,
    Collider2D,
    Contact2DType,
    Color,
    Component,
    ERigidBody2DType,
    EventTouch,
    IPhysics2DContact,
    Node,
    PolygonCollider2D,
    RigidBody2D,
    Size,
    Sprite,
    Tween,
    UIOpacity,
    UITransform,
    Vec2,
    Vec3,
    tween,
} from 'cc';
import { FRUIT_PHYSICS_GROUP } from './FruitPrefabMap';

const { ccclass } = _decorator;

/** 水果实例的种类（CalculatedInfo.type）：0 普通 / 1 冰冻 / 2 随机盒 / 3 黑洞关联。 */
export type FruitKind = 0 | 1 | 2 | 3;

/** 第 6 步：水果与场地控制器之间的回调（由 LevelPlayfield 实现）。 */
export interface FruitInputHost {
    /** 全局是否处于可操作状态（对齐原版 status !== UNRUN）。 */
    isInputActive(): boolean;
    /** canCheck 传感器的世界 y（点击下落水果越过该 y 即标记 isCanCheck）。 */
    canCheckY: number;
    /** 水果被点击：下移关立即整体下移一步（对齐 GameMgr.fruitDown）。 */
    onFruitClicked(entity: FruitEntity): void;
    /** 水果接触 floor/btnFirstWall/btnSecondWall，进入下方收集区。 */
    onFruitSettled(entity: FruitEntity): void;
    /** 两个同类型水果物理接触且满足配对条件（对齐 FruitComp.checkID 的 F 分支）。 */
    onFruitMatch(self: FruitEntity, other: FruitEntity): void;
}

export interface FruitEntityInit {
    /** 本关内稳定唯一的实例 ID。 */
    id: number;
    /** 配对 ID，对应水果资源类型 1～33。 */
    fruitType: number;
    kind?: FruitKind;
    stage?: number;
    /** 布局碰撞半径（世界单位，已含缩放），供后续点击/物理步骤使用。 */
    radius?: number;
}

/**
 * 水果实例组件（替代原版 FruitComp 的物理子集）。
 *
 * 第 4 步：仅记录布局数据并冻结为 Static。
 * 第 5 步（对齐原版 FruitComp.init/initParameter/setRigType/anim/checkBound）：
 * - 运行时把多边形碰撞体替换为圆形碰撞体（radius=UITransform.width/2，
 *   friction/restitution=0、density=1），174 体同关时物理更稳定；
 * - 生成保护期：先 scale 0 + Dynamic(gravityScale=0, 允许休眠、非 bullet)，
 *   播放 1.3s backOut 弹出动画让重叠轻微分离，结束后冻结为 Static；
 * - 场地移动方向关：applySideAppearance 对应原版 black/light（护栏侧压暗不可点），
 *   autoDrop 对应 fruitDrop（越过分界线的水果自动以重力 13 下落）。
 * 点击/入槽在第 6 步接入，本步不绑触摸。
 */
@ccclass('FruitEntity')
export class FruitEntity extends Component {
    public id = -1;
    /** 用于配对消除的水果类型 ID（原版 FruitComp.ID）。 */
    public pairId = 0;
    /** 实例种类：0 普通 / 1 冰冻 / 2 随机盒 / 3 黑洞关联（原版 CalculatedInfo.type）。 */
    public fruitType: FruitKind = 0;
    public stage = 0;
    public radius = 0;
    /** 生成保护期结束前不可点击；方向关护栏侧水果也为 false。 */
    public isCanTouch = false;
    /** 是否已被点击或已自动下落；场地整体移动时跳过这些水果（原版 isTouch）。 */
    public isTouch = false;
    /** 越过分界线自动下落的水果（原版 isAutoDrop）。 */
    public isAutoDrop = false;
    /** 已进入下方槽位（原版 isInSlot）。 */
    public isInSlot = false;
    /** 进入 canCheck 传感器区域（原版 inCheckBox）。 */
    public inCheckBox = false;
    /** 已越过 canCheck.y，可参与第 7 步配对（原版 isCanCheck）。 */
    public canCheckPassed = false;
    /** 已锁定到一对消除中（原版 isCollider），防止同一水果重复结算。 */
    public isCollider = false;
    /** 点击下落时的重力倍率（原版固定 13，世界重力 -10）。 */
    public readonly gravityScale = 13;
    public readonly restitution = 0;
    /** 生成弹出动画时长（原版 FruitComp.init 传入 1.3s）。 */
    public static readonly SPAWN_ANIM_SECONDS = 1.3;

    private boardScale = 0.68;
    private body: RigidBody2D | null = null;
    private circleCollider: CircleCollider2D | null = null;
    private host: FruitInputHost | null = null;
    private inputBound = false;
    private baseWidth = 0;
    private baseHeight = 0;

    public setup(init: FruitEntityInit, scale: number): void {
        this.id = init.id;
        this.pairId = init.fruitType;
        this.fruitType = (init.kind ?? 0) as FruitKind;
        this.stage = init.stage ?? 0;
        this.radius = init.radius ?? 0;
        this.isCanTouch = false;
        this.isTouch = false;
        this.isAutoDrop = false;
        this.isInSlot = false;
        this.inCheckBox = false;
        this.canCheckPassed = false;
        this.isCollider = false;
        this.boardScale = scale;

        this.baseWidth = this.node.getComponent(UITransform)?.width ?? 100;
        this.baseHeight = this.node.getComponent(UITransform)?.height ?? this.baseWidth;
        this.replaceWithCircleCollider();
        this.body = this.node.getComponent(RigidBody2D);
        if (this.body) this.body.group = FRUIT_PHYSICS_GROUP.FRUIT;
        this.applyAppearance(false);
        this.node.setScale(new Vec3(0, 0, 1));
        this.setRigType(ERigidBody2DType.Static, 0, true);
    }

    /**
     * 第 6 步：绑定触摸与物理接触回调（对齐原版 initCom/initContactCallBack，
     * 在生成保护期结束后由 LevelPlayfield 统一调用一次）。
     */
    public bindInput(host: FruitInputHost): void {
        this.host = host;
        if (!this.inputBound) {
            this.inputBound = true;
            this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
            const collider = this.circleCollider;
            if (collider) {
                collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
                collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
               collider.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
           }
        }
    }

    /** 原版 FruitComp.touchStart：点击 -> clickFruit 组 -> Dynamic(g=13) 下落。 */
    private onTouchStart(event: EventTouch): void {
        event.propagationStopped = true;
        const host = this.host;
        if (!host || !host.isInputActive() || this.fruitType === 1) return;
        if (!this.isCanTouch || this.isTouch) return;

        const body = this.body;
        if (body) body.group = FRUIT_PHYSICS_GROUP.CLICK_FRUIT;
        // 直接写 _group，下面 setRigType 的 collider.apply() 会用新 filter 重建
        // fixture；不能走 collider.group setter（同帧 Refilter 会让 box2d 代理错乱）。
        if (this.circleCollider) {
            (this.circleCollider as unknown as { _group: number })._group = FRUIT_PHYSICS_GROUP.CLICK_FRUIT;
        }
        this.clickTween();
        this.node.setScale(new Vec3(this.boardScale, this.boardScale, 1));
        this.isTouch = true;
        this.applyAppearance(false);
        Tween.stopAllByTarget(this.node);
        this.setRigType(ERigidBody2DType.Dynamic, this.gravityScale, true);
        host.onFruitClicked(this);
    }

    /**
     * 原版 FruitComp.clickTween：UITransform 尺寸缩到 0.95 再还原（各 0.1s，
     * tag=1）。碰撞圆半径在生成时已固定，只做视觉反馈。
     */
    private clickTween(): void {
        const ui = this.node.getComponent(UITransform);
        if (!ui) return;
        tween(ui)
            .to(0.1, { contentSize: new Size(this.baseWidth * 0.95, this.baseHeight * 0.95) })
            .to(0.1, { contentSize: new Size(this.baseWidth, this.baseHeight) })
            .start();
    }

    protected update(): void {
        const host = this.host;
        if (!host || !this.isTouch) return;
        this.canCheckPassed = this.node.position.y <= host.canCheckY;
    }

    /** 原版 FruitComp.onBeginContact。 */
    private onBeginContact(
        self: Collider2D,
        other: Collider2D,
        _contact: IPhysics2DContact | null,
    ): void {
        switch (other.node.name) {
            case 'canCheck':
                this.inCheckBox = true;
                // 原包在这里把 collider.friction 改成 0.2；3.8 box2d 后端在
                // 接触回调期间 world 已锁定，不能 apply() 重建 fixture（会留下
                // m_userData 为空的脏代理并在 SolveTOI 崩溃），只能改当前接触摩擦。
                if (this.circleCollider) this.circleCollider.friction = 0.2;
                _contact?.setFriction(0.2);
                break;
            case 'dropRight':
            case 'dropLeft':
                // 原包 checkDropWall 的力向量是未施加的死代码，这里只保留接触语义；
                // 落地音效/粒子在后续表现步骤补。
                break;
            case 'btnFirstWall':
            case 'btnSecondWall':
            case 'floor':
                this.markSettled();
                break;
            default:
                break;
        }
    }

    private onEndContact(_self: Collider2D, other: Collider2D): void {
        if (other.node.name === 'canCheck') this.inCheckBox = false;
    }

    /** 原版 checkID 在 POST_SOLVE 里对 floor/btnFirstWall/btnSecondWall 的入槽分支。 */
    private onPostSolve(_self: Collider2D, other: Collider2D): void {
        const otherEntity = other.node.getComponent(FruitEntity);
        if (otherEntity) {
            this.tryPair(otherEntity);
            return;
        }
        if (this.isCollider) return;
        const name = other.node.name;
        if (name === 'floor' || name === 'btnFirstWall' || name === 'btnSecondWall') {
            this.markSettled();
        }
    }

    /**
     * 原版 FruitComp.checkID 的同类型配对判定（POST_SOLVE 水果间接触）：
     * 双方都越过 canCheck，或至少一方已入槽时，同 pairId 即可配对。
     */
    private tryPair(other: FruitEntity): void {
        if (this.isCollider || other.isCollider || this.pairId !== other.pairId) return;
        if (this.pairId <= 0) return;
        const bothPassedCanCheck = this.canCheckPassed && other.canCheckPassed;
        const oneInSlot = this.isInSlot || other.isInSlot;
        if (!bothPassedCanCheck && !oneInSlot) return;
        if (this.fruitType !== 0 || other.fruitType !== 0) return;
        this.host?.onFruitMatch(this, other);
    }

    private markSettled(): void {
        if (this.isInSlot || this.isCollider) return;
        this.isInSlot = true;
        this.host?.onFruitSettled(this);
    }

    /**
     * 生成保护期动画：Dynamic(gravityScale=0) 下 scale 0 -> boardScale 的 backOut 弹出，
     * 结束后冻结 Static。返回动画结束的 Promise（节点已销毁时立即 resolve）。
     */
    public playSpawnAnim(): Promise<void> {
        return new Promise<void>(resolve => {
            this.setRigType(ERigidBody2DType.Dynamic, 0, false);
            tween(this.node)
                .to(
                    FruitEntity.SPAWN_ANIM_SECONDS,
                    { scale: new Vec3(this.boardScale, this.boardScale, 1) },
                    { easing: 'backOut' },
                )
                .call(() => {
                    this.node.setScale(new Vec3(this.boardScale, this.boardScale, 1));
                    if (this.node.isValid) this.setRigType(ERigidBody2DType.Static, 0, true);
                    resolve();
                })
                .start();
        });
    }

    /**
     * 原版 FruitComp.setRigType：统一碰撞体/刚体参数后切换刚体类型。
     * Dynamic + wake=true 时 allowSleep=false、bullet=true（防高速穿透，用于点击下落）。
     */
    public setRigType(type: ERigidBody2DType, gravityScale = 0, wake = true): void {
        const collider = this.circleCollider ?? this.node.getComponent(Collider2D);
        if (collider) {
            collider.sensor = false;
            collider.density = 1;
            collider.friction = 0;
            collider.restitution = this.restitution;
            collider.enabled = true;
            if (wake) collider.apply();
        }
        const body = this.body ?? this.node.getComponent(RigidBody2D);
        if (!body) return;
        this.body = body;
        body.enabledContactListener = true;
        body.gravityScale = gravityScale;
        body.angularVelocity = 0;
        body.linearVelocity = new Vec2(0, 0);
        body.angularDamping = 0;
        body.linearDamping = 0;
        body.type = type;
        if (type === ERigidBody2DType.Static || type === ERigidBody2DType.Kinematic) {
            body.allowSleep = true;
            body.bullet = false;
        } else {
            body.allowSleep = !wake;
            body.bullet = wake;
        }
    }

    /**
     * 方向关边界表现（原版 FruitComp.checkBound 的 black/light）：
     * dark=true 护栏侧压暗且不可点；false 恢复正常可点。
     */
    public applySideAppearance(dark: boolean): void {
        this.isCanTouch = !dark;
        this.applyAppearance(dark);
    }

    /** 静止/下移关：生成结束即可点击（第 6 步才真正绑定触摸）。 */
    public markBoardTouchable(): void {
        this.isCanTouch = true;
        this.applyAppearance(false);
    }

    /**
     * 原版 FruitComp.fruitDrop：水果越过分界线时自动按点击水果规格下落
     * （group 仍是 fruit，Dynamic + gravityScale 13 + bullet 防穿透）。
     */
    public autoDrop(): void {
        if (this.isTouch) return;
        this.isTouch = true;
        this.isAutoDrop = true;
        this.setRigType(ERigidBody2DType.Dynamic, this.gravityScale, true);
    }

    /**
     * 第 7 步：锁定为消除中（原版 checkID F 分支：双方速度清零、isCollider=true）。
     * 同步清零速度，物理关闭延迟到下一帧（接触回调期间 world 已锁定，
     * 同帧销毁/改 Static 会让 box2d 代理状态错乱，与 hideCollider scheduleOnce 一致）。
     */
    public lockForElimination(): void {
        this.isCollider = true;
        if (this.body) {
            this.body.linearVelocity = new Vec2(0, 0);
            this.body.angularVelocity = 0;
        }
        this.scheduleOnce(() => {
            if (!this.node.isValid) return;
            if (this.circleCollider?.enabled) {
                this.circleCollider.sensor = true;
                this.circleCollider.enabled = false;
            }
            if (this.body) {
                this.body.gravityScale = 0;
                this.body.allowSleep = true;
                this.body.bullet = false;
                this.body.angularVelocity = 0;
                this.body.linearVelocity = new Vec2(0, 0);
                this.body.angularDamping = 0;
                this.body.linearDamping = 0;
                this.body.enabledContactListener = false;
                this.body.type = ERigidBody2DType.Static;
            }
        }, 0);
    }

    /**
     * 第 7 步：原版 GameMgr.fruitTween 的基础动画（粒子/音效留给表现步骤）。
     * 0.12+0.12 缩放回弹（u -> u+0.1 -> u），0.24s 后上浮 50（quadOut），
     * 再 0.4s quadIn 飞入篮子坐标，到达后回调（控制器负责回收节点）。
     * targetLocal 已由控制器换算为本节点父坐标系下的位置。
     */
    public playEliminationTween(targetLocal: Vec3, onArrive: () => void): void {
        const node = this.node;
        const sprite = node.getComponent(Sprite);
        if (sprite) sprite.color = new Color(255, 255, 255, 255);
        Tween.stopAllByTarget(node);

        const u = node.scale.x;
        const enlarged = u + 0.1;
        const rise = new Vec3(node.position.x, node.position.y + 50, 0);

        tween(node)
            .to(0.12, { scale: new Vec3(enlarged, enlarged, 1) })
            .to(0.12, { scale: new Vec3(u, u, 1) })
            .start();

        tween(node)
            .delay(0.24)
            .to(0.2, { position: rise, scale: new Vec3(enlarged, enlarged, 1) }, { easing: 'quadOut' })
            .to(0.4, { position: targetLocal }, { easing: 'quadIn' })
            .call(() => {
                if (node.isValid) {
                    Tween.stopAllByTarget(node);
                    onArrive();
                }
            })
            .start();
    }

    /**
     * 原版 FruitComp.init：销毁多边形、改用圆形碰撞体（radius=width/2）。
     * 我们保留多边形组件但禁用（可回溯），新增圆形碰撞体。
     */
    private replaceWithCircleCollider(): void {
        const polygon = this.node.getComponent(PolygonCollider2D);
        if (polygon) polygon.enabled = false;

        let circle = this.node.getComponent(CircleCollider2D);
        if (!circle) circle = this.node.addComponent(CircleCollider2D);
        const width = this.node.getComponent(UITransform)?.width ?? 100;
        circle.offset = new Vec2(0, 0);
        circle.radius = width / 2;
        circle.density = 1;
        circle.friction = 0;
        circle.restitution = this.restitution;
        circle.sensor = false;
        circle.enabled = true;
        circle.apply();
        this.circleCollider = circle;
    }

    private applyAppearance(dark: boolean): void {
        const opacity = this.node.getComponent(UIOpacity) ?? this.node.addComponent(UIOpacity);
        opacity.opacity = dark ? 125 : 255;
        const sprite = this.node.getComponent(Sprite);
        if (sprite) sprite.color = dark ? new Color(65, 65, 65, 255) : new Color(255, 255, 255, 255);
    }
}
