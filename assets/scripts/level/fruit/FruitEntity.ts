import {
    _decorator,
    CircleCollider2D,
    Collider2D,
    Color,
    Component,
    ERigidBody2DType,
    PolygonCollider2D,
    RigidBody2D,
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
    /** 点击下落时的重力倍率（原版固定 13，世界重力 -10）。 */
    public readonly gravityScale = 13;
    public readonly restitution = 0;
    /** 生成弹出动画时长（原版 FruitComp.init 传入 1.3s）。 */
    public static readonly SPAWN_ANIM_SECONDS = 1.3;

    private boardScale = 0.68;
    private body: RigidBody2D | null = null;
    private circleCollider: CircleCollider2D | null = null;

    public setup(init: FruitEntityInit, scale: number): void {
        this.id = init.id;
        this.pairId = init.fruitType;
        this.fruitType = (init.kind ?? 0) as FruitKind;
        this.stage = init.stage ?? 0;
        this.radius = init.radius ?? 0;
        this.isCanTouch = false;
        this.isTouch = false;
        this.isAutoDrop = false;
        this.boardScale = scale;

        this.replaceWithCircleCollider();
        this.body = this.node.getComponent(RigidBody2D);
        this.applyAppearance(false);
        this.node.setScale(new Vec3(0, 0, 1));
        this.setRigType(ERigidBody2DType.Static, 0, true);
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
