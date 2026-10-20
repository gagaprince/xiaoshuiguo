import {
    _decorator,
    CircleCollider2D,
    Collider2D,
    Contact2DType,
    Color,
    Component,
    DistanceJoint2D,
    ERigidBody2DType,
    EventTouch,
    IPhysics2DContact,
    instantiate,
    Label,
    Node,
    Prefab,
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
import type { HoleComp } from '../HoleComp';
import { GameAudio } from '../../audio/GameAudio';
import { EffectLayer } from '../effects/EffectLayer';

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
    /** 第 12 步：点击尚未解冻的冰冻水果（对齐 GameMgr.iceTip，每局只提示一次）。 */
    onFrozenTouched(): void;
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
    /** 第 12 步：冰冻水果解冻所需受击次数（CalculatedInfo.unlockNum）。 */
    thawHits?: number;
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
    /** 第 13 步：手动点击下落前的位置（原版 FruitComp.downOrgPos，复活归位用）。 */
    public downOrgPos: Vec3 | null = null;
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
    /** 第 11 步：随机盒外壳节点（CalculatedInfo.type=2 时挂在水果下）。 */
    private boxShell: Node | null = null;
    /** 第 12 步：冰冻外壳 iceLab（fruitType=1 时挂在水果下）。 */
    private iceShell: Node | null = null;
    /** 第 12 步：解冻所需剩余受击次数（原版 FruitComp.iceCounts）。 */
    private iceCount = 0;
    /** 第 12.2 步：当前绑定的黑洞（原版 FruitComp.holeComp，点击后单向解绑）。 */
    public hole: HoleComp | null = null;
    /** 第 12.3 步：绳索挂在本水果上的 DistanceJoint（原版 FruitComp.disJoint）。 */
    private disJoint: DistanceJoint2D | null = null;
    /** 第 12.3 步：绳索另一端的水果（建绳后 0.5s 互相赋值，原版 jointFruit）。 */
    public jointFruit: FruitEntity | null = null;
    /** 第 14 步：出生/归位位置（原版 FruitComp.originPos，碰撞音位移基准）。 */
    private originPos: Vec3 = new Vec3();
    /** 第 14 步：本果本次下落已响过碰撞音的水果 uuid（原版 hitFruits）。 */
    private readonly hitFruits = new Set<string>();
    /** 第 14 步：侧移关已撞过落槽斜面（原版 isLRAddForce，落地音只播一次）。 */
    private isLRAddForce = false;
    /** 第 14 步：本次下落已播过斜面落地粒子（原版 isShowedlandEff）。 */
    private isShowedLandEff = false;

    /** 原版 isJoint：身上有绳索关节即为绳索果。 */
    public get isJoint(): boolean {
        return this.disJoint !== null;
    }

    /**
     * 原版 isBind：绳索还在、且另一端水果尚未被点走。
     * 绑定期间不做 canCheck 越线、接触配对/入槽判定（由先被点走的一端拖着走）。
     */
    public get isBind(): boolean {
        return this.isJoint && this.jointFruit !== null && !this.jointFruit.isTouch;
    }

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
        this.iceCount = init.thawHits ?? 0;
        this.iceShell = null;
        this.hole = null;
        this.disJoint = null;
        this.jointFruit = null;
        this.hitFruits.clear();
        this.isLRAddForce = false;
        this.isShowedLandEff = false;
        this.originPos.set(0, 0, 0);
        this.boardScale = scale;

        this.baseWidth = this.node.getComponent(UITransform)?.width ?? 100;
        this.baseHeight = this.node.getComponent(UITransform)?.height ?? this.baseWidth;
        this.replaceWithCircleCollider();
        this.body = this.node.getComponent(RigidBody2D);
        if (this.body) this.body.group = FRUIT_PHYSICS_GROUP.FRUIT;
        this.applyAppearance(false);
        // 第 11 步：随机盒先隐藏真水果贴图，外壳由 attachBoxShell 在预制体加载后挂上。
        if (this.fruitType === 2) {
            this.node.getComponent(Sprite)!.enabled = false;
        }
        this.node.setScale(new Vec3(0, 0, 1));
        this.setRigType(ERigidBody2DType.Static, 0, true);
    }

    /**
     * 第 11 步：挂上 blackBox 外壳（对齐 FruitComp.setFruitType case 2）。
     * 外壳相对水果节点的缩放 = 0.55 / fruitScale，使最终视觉固定为 0.55 倍。
     */
    public attachBoxShell(prefab: Prefab): void {
        if (this.fruitType !== 2 || this.boxShell) return;
        const shell = instantiate(prefab);
        this.node.addChild(shell);
        shell.setPosition(0, 0, 0);
        shell.angle = 0;
        const shellScale = 0.55 / Math.max(0.0001, this.boardScale);
        shell.setScale(new Vec3(shellScale, shellScale, 1));
        this.boxShell = shell;
    }

    /**
     * 第 12 步：挂上 iceLab 冰冻外壳（对齐 FruitComp.setFruitType case 1）。
     * 冰壳缩放 = 水果宽 / iceLab 宽 + 0.15，数字节点反向旋转抵消水果倾角。
     */
    public attachIceShell(prefab: Prefab): void {
        if (this.fruitType !== 1 || this.iceShell) return;
        const shell = instantiate(prefab);
        this.node.addChild(shell);
        shell.setPosition(0, 0, 0);
        shell.angle = 0;
        const fruitWidth = this.node.getComponent(UITransform)?.width ?? 100;
        const shellWidth = shell.getComponent(UITransform)?.width ?? 165;
        const shellScale = fruitWidth / shellWidth + 0.15;
        shell.setScale(new Vec3(shellScale, shellScale, 1));
        const count = shell.getChildByName('count');
        if (count) {
            count.angle = -this.node.angle;
            count.getComponent(Label)!.string = `${Math.max(0, this.iceCount)}`;
        }
        this.iceShell = shell;
    }

    /** 第 12 步：场上消除一对后所有冰冻水果受击一次（原版 FruitComp.iceBox）。 */
    public applyIceHit(): void {
        if (this.fruitType !== 1) return;
        this.iceCount -= 1;
        if (this.iceCount <= 0) {
            this.unlockIce();
        } else {
            this.playIceCountTween();
        }
    }

    /** 第 12 步：解冻（原版 FruitComp.unlockFruit 的冰冻分支）。 */
    public unlockIce(): void {
        if (this.fruitType !== 1) return;
        this.fruitType = 0;
        this.iceCount = 0;
        if (this.iceShell) {
            this.iceShell.destroy();
            this.iceShell = null;
        }
    }

    /** 原版 upIceLa：数字 1→1.5(backIn)→换数→1(backOut) 弹跳。 */
    private playIceCountTween(): void {
        const count = this.iceShell?.getChildByName('count');
        if (!count) return;
        const label = count.getComponent(Label);
        Tween.stopAllByTarget(count);
        count.setScale(new Vec3(1, 1, 1));
        tween(count)
            .to(0.2, { scale: new Vec3(1.5, 1.5, 1) }, { easing: 'backIn' })
            .call(() => {
                if (label?.isValid) label.string = `${Math.max(0, this.iceCount)}`;
            })
            .to(0.2, { scale: new Vec3(1, 1, 1) }, { easing: 'backOut' })
            .start();
    }

    /** 第 11 步：随机盒开盖（对齐 FruitComp.unlockFruit 的盒分支）。 */
    public unlockBlackBox(): void {
        if (this.fruitType !== 2) return;
        this.fruitType = 0;
        if (this.boxShell) {
            this.boxShell.destroy();
            this.boxShell = null;
        }
        const sprite = this.node.getComponent(Sprite);
        if (sprite) sprite.enabled = true;
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
        if (!host || !host.isInputActive()) return;
        // 原版 touchStart：冰冻水果不可点击，只弹一次“未解冻”提示。
        if (this.fruitType === 1) {
            host.onFrozenTouched();
            return;
        }
        if (!this.isCanTouch || this.isTouch) return;

        // 第 13 步复活：记录点击前原位（原版 touchStart 的 downOrgPos）。
        this.downOrgPos = this.node.position.clone();
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
        // 第 12.2 步：黑洞关联水果被点走 -> breakHole，洞开始按距离吐下一个。
        this.hole?.notifyTouched();
        this.hole = null;
        this.applyAppearance(false);
        Tween.stopAllByTarget(this.node);
        this.setRigType(ERigidBody2DType.Dynamic, this.gravityScale, true);
        GameAudio.ins.play('点击水果');
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
        // 第 12.3 步：绳索绑定期间由另一端拖着走，不做越线/开盖判定（原版 isBind）。
        if (this.isBind) return;
        this.canCheckPassed = this.node.position.y <= host.canCheckY;
        // 第 11 步：随机盒点击下落、越过 canCheck 线即开盖露出真水果（FruitComp.update）。
        if (this.fruitType === 2 && this.boxShell && this.canCheckPassed) {
            this.unlockBlackBox();
        }
    }

    /** 原版 FruitComp.onBeginContact。 */
    private onBeginContact(
        self: Collider2D,
        other: Collider2D,
        _contact: IPhysics2DContact | null,
    ): void {
        // 原版所有接触回调都先判 ENUM_STATUS.RUN；胜负锁定后不再入槽/配对。
        if (!this.host?.isInputActive()) return;
        if (this.isBind) return;
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
                // 原版 checkDropWall：被点水果首次撞落槽斜面播落地音（并发上限 5）。
                // 反弹力与 landEff 粒子在第 14 步特效子任务补。
                if (this.isTouch && !this.isLRAddForce) {
                    this.isLRAddForce = true;
                    GameAudio.ins.play('水果落地', 5);
                    // 原版 checkDropWall：首次撞斜面在脚下播 landEff 尘土粒子（每果一次）。
                    if (!this.isShowedLandEff) {
                        this.isShowedLandEff = true;
                        EffectLayer.instance?.playLand(this.node);
                    }
                }
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
        if (!this.host?.isInputActive()) return;
        if (this.isBind) return;
        const otherEntity = other.node.getComponent(FruitEntity);
        if (otherEntity) {
            this.handleFruitContact(otherEntity);
            return;
        }
        if (this.isCollider) return;
        const name = other.node.name;
        if (name === 'floor' || name === 'btnFirstWall' || name === 'btnSecondWall') {
            // 原版 checkID 墙体分支先 unlockFruit 再 addInSlotFruit（兜底开盖）。
            this.unlockBlackBox();
            this.markSettled();
        }
    }

    /**
     * 原版 FruitComp.checkID 的水果间接触分支（POST_SOLVE）：
     * 1. 双方越过 canCheck 或一方已入槽，同 pairId -> 配对消除；
     * 2. 双方都未入槽 -> 什么都不做（返回）；
     * 3. 自己还没入槽、对方已入槽 -> 自己也入槽占容量。
     * 第 3 条是满载判定的关键：水果在桶内叠高时，只有最底层能碰到
     * floor/btnFirstWall/btnSecondWall，上层水果靠接触已入槽水果计入槽位。
     */
    private handleFruitContact(other: FruitEntity): void {
        // 原版 checkID 开头：被点走的水果离开出生位 >=50px 后，每碰到一个新水果
        // 响一次轻碰撞音并短震（hitFruits 按节点 uuid 去重）。
        const dx = this.node.position.x - this.originPos.x;
        const dy = this.node.position.y - this.originPos.y;
        const otherId = other.node.uuid;
        if (dx * dx + dy * dy >= 2500 && !this.hitFruits.has(otherId)) {
            this.hitFruits.add(otherId);
            GameAudio.ins.play('ui_click');
            FruitEntity.vibrateShort();
        }
        if (this.tryPair(other)) return;
        if (this.isInSlot || !other.isInSlot) return;
        if (this.isCollider || other.isCollider) return;
        this.markSettled();
    }

    /**
     * 原版 FruitComp.checkID 的同类型配对判定（POST_SOLVE 水果间接触）：
     * 双方都越过 canCheck，或至少一方已入槽时，同 pairId 即可配对。
     */
    /** @returns 是否已触发配对（触发后跳过同次接触的其余分支）。 */
    private tryPair(other: FruitEntity): boolean {
        if (this.isCollider || other.isCollider) return false;
        // 原版 checkID F 分支：绳索未断开的两端不参与配对。
        if (this.isBind || other.isBind) return false;
        if (this.pairId <= 0 || this.pairId !== other.pairId) return false;
        const bothPassedCanCheck = this.canCheckPassed && other.canCheckPassed;
        const oneInSlot = this.isInSlot || other.isInSlot;
        if (!bothPassedCanCheck && !oneInSlot) return false;
        if (this.fruitType !== 0 || other.fruitType !== 0) return;
        this.host?.onFruitMatch(this, other);
        return true;
    }

    private markSettled(): void {
        if (this.isInSlot || this.isCollider) return;
        this.isInSlot = true;
        this.host?.onFruitSettled(this);
    }

    /**
     * 第 13 步：打乱开始（原版 FruitComp.hideCollider）。
     * 关碰撞体、刚体转 Static(g=0) 并清零速度，随后只做纯位移 tween。
     * 在按钮触摸事件中调用（非物理回调），可直接 apply。
     */
    public prepareShuffle(): void {
        Tween.stopAllByTarget(this.node);
        if (this.circleCollider) {
            this.circleCollider.sensor = true;
            this.circleCollider.enabled = false;
            this.circleCollider.apply();
        }
        if (this.body) {
            this.body.enabledContactListener = false;
            this.body.gravityScale = 0;
            this.body.allowSleep = true;
            this.body.bullet = false;
            this.body.angularVelocity = 0;
            this.body.linearVelocity = new Vec2(0, 0);
            this.body.angularDamping = 0;
            this.body.linearDamping = 0;
            this.body.type = ERigidBody2DType.Static;
        }
    }

    /**
     * 第 13 步：打乱位移 + 弹出（原版 movePos(t=null,e=.4) 接 anim(true,cb,.4)）。
     * 先 0.4s 平移到目标位置（碰撞已关），再 Dynamic(g=0) 下 0.4s backOut，
     * 结束后恢复 Static/碰撞/FRUIT 组与未点击状态，done 由场地做 checkBound。
     */
    public playShuffleTween(target: Vec3, done: () => void): void {
        const node = this.node;
        tween(node)
            .to(0.4, { position: new Vec3(target.x, target.y, 0) })
            .call(() => {
                if (!node.isValid) {
                    done();
                    return;
                }
                this.setRigType(ERigidBody2DType.Dynamic, 0, false);
                tween(node)
                    .to(0.4, { scale: new Vec3(this.boardScale, this.boardScale, 1) }, { easing: 'backOut' })
                    .call(() => {
                        if (!node.isValid) {
                            done();
                            return;
                        }
                        node.setScale(new Vec3(this.boardScale, this.boardScale, 1));
                        this.finishShuffle();
                        done();
                    })
                    .start();
            })
            .start();
    }

    /** 第 13 步：打乱落位后恢复为场上未点击的普通 Static 水果。 */
    private finishShuffle(): void {
        this.isTouch = false;
        this.isAutoDrop = false;
        this.canCheckPassed = false;
        this.inCheckBox = false;
        if (this.body) this.body.group = FRUIT_PHYSICS_GROUP.FRUIT;
        if (this.circleCollider) {
            (this.circleCollider as unknown as { _group: number })._group = FRUIT_PHYSICS_GROUP.FRUIT;
        }
        // setRigType 会重新 enabled 碰撞体并 apply 新 filter。
        this.setRigType(ERigidBody2DType.Static, 0, true);
    }

    /** 第 13 步复活：场上未点击水果临时 Dynamic(g=0)，供归位水果无碰撞穿越。 */
    public prepareReviveBystander(): void {
        this.setRigType(ERigidBody2DType.Dynamic, 0, false);
    }

    /** 第 13 步复活：归位结束后场上水果恢复 Static。 */
    public finishReviveBystander(): void {
        this.setRigType(ERigidBody2DType.Static, 0, true);
    }

    /**
     * 第 13 步复活：已点击水果（除最低锚点果外）退回原位
     * （原版 reviveFun：group 回 fruit -> movePos(0.5) -> anim(0.4) -> fruitReset）。
     * autoDrop 水果没有 downOrgPos，由场地给安全点；颜色恢复白色。
     */
    public reviveReturnTo(target: Vec3, done: () => void): void {
        const node = this.node;
        this.applyAppearance(false);
        if (this.body) this.body.group = FRUIT_PHYSICS_GROUP.FRUIT;
        if (this.circleCollider) {
            (this.circleCollider as unknown as { _group: number })._group = FRUIT_PHYSICS_GROUP.FRUIT;
        }
        this.prepareShuffle();
        tween(node)
            .to(0.5, { position: new Vec3(target.x, target.y, 0) })
            .call(() => {
                if (!node.isValid) {
                    done();
                    return;
                }
                this.setRigType(ERigidBody2DType.Dynamic, 0, false);
                tween(node)
                    .to(0.4, { scale: new Vec3(this.boardScale, this.boardScale, 1) }, { easing: 'backOut' })
                    .call(() => {
                        if (!node.isValid) {
                            done();
                            return;
                        }
                        node.setScale(new Vec3(this.boardScale, this.boardScale, 1));
                        this.resetAfterRevive();
                        done();
                    })
                    .start();
            })
            .start();
    }

    /** 第 13 步复活：留在槽内的最低锚点果恢复白色并继续 Dynamic 下落。 */
    public resumeFallingAnchor(): void {
        this.applyAppearance(false);
        this.setRigType(ERigidBody2DType.Dynamic, this.gravityScale, true);
    }

    /** 原版 fruitReset：归位水果重置为未点击的 Static 普通水果。 */
    private resetAfterRevive(): void {
        this.isTouch = false;
        this.isAutoDrop = false;
        this.isInSlot = false;
        this.canCheckPassed = false;
        this.inCheckBox = false;
        this.downOrgPos = null;
        // 原版 fruitReset：归位后碰撞音位移基准与去重集合一并重置。
        this.originPos.set(this.node.position);
        this.hitFruits.clear();
        this.isLRAddForce = false;
        this.setRigType(ERigidBody2DType.Static, 0, true);
    }

    /**
     * 生成保护期动画：Dynamic(gravityScale=0) 下 scale 0 -> boardScale 的 backOut 弹出，
     * 结束后冻结 Static。返回动画结束的 Promise（节点已销毁时立即 resolve）。
     */
    public playSpawnAnim(): Promise<void> {
        return new Promise<void>(resolve => {
            this.originPos.set(this.node.position);
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

    /** 第 12.2 步：黑洞锚点果的生成动画结束，转为普通水果（原版 fruitType=0）。 */
    public becomeHoleAnchor(): void {
        this.fruitType = 0;
        this.isCanTouch = true;
        this.applyAppearance(false);
    }

    /**
     * 第 12.3 步：原版 FruitComp.initJoint——在本水果节点上挂 DistanceJoint2D
     * 连到绳端绳节刚体，maxLength 取当前间距（即绳长固定不可拉长）。
     */
    public initJoint(targetBody: RigidBody2D): void {
        if (this.disJoint) return;
        const joint = this.node.getComponent(DistanceJoint2D) ?? this.node.addComponent(DistanceJoint2D);
        joint.connectedBody = targetBody;
        joint.maxLength = Vec3.distance(this.node.getPosition(), targetBody.node.getPosition());
        joint.apply();
        this.disJoint = joint;
    }

    /** 原版 FruitComp.removeJoint：断开绳端关节（jointFruit 由管理器统一清空）。 */
    public removeJoint(): void {
        if (!this.disJoint) return;
        this.jointFruit = null;
        this.disJoint.connectedBody = null;
        this.disJoint.destroy();
        this.disJoint = null;
    }

    /**
     * 第 12.2 步：黑洞吐出的水果弹出动画（原版 FruitComp.init2 + anim）。
     * 绑定洞时全程 Static（g=0），从 boardScale-0.1 用 0.8s backOut 弹出。
     */
    public playHoleSpawnAnim(): Promise<void> {
        return new Promise<void>(resolve => {
            const startScale = this.boardScale - 0.1;
            this.originPos.set(this.node.position);
            this.node.setScale(new Vec3(startScale, startScale, 1));
            this.setRigType(ERigidBody2DType.Static, 0, false);
            tween(this.node)
                .to(
                    0.8,
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
     * 第 12.5 步：被闪电劈中（原版 FruitComp.electricShock）。
     * 与点击下落同一套物理结果，但不播点击音效、不触发 fruitDown、不记 downOrgPos：
     * 先做 4 段 ±15° 抖动（各 0.1s），结束后转 Dynamic(g=13) 自由落体。
     */
    public electricShock(): void {
        if (this.isTouch) return;
        if (this.body) this.body.group = FRUIT_PHYSICS_GROUP.CLICK_FRUIT;
        if (this.circleCollider) {
            // 与 onTouchStart 相同：直接写 _group，setRigType 的 apply() 会重建 filter。
            (this.circleCollider as unknown as { _group: number })._group =
                FRUIT_PHYSICS_GROUP.CLICK_FRUIT;
        }
        this.isTouch = true;
        // 原版 electricShock 同样 breakHole（洞锚点果被劈中时开启洞）。
        this.hole?.notifyTouched();
        this.hole = null;
        this.applyAppearance(false);
        Tween.stopAllByTarget(this.node);
        tween(this.node)
            .to(0.1, { angle: 15 })
            .to(0.1, { angle: -15 })
            .to(0.1, { angle: 15 })
            .to(0.1, { angle: 0 })
            .call(() => {
                if (this.node.isValid) {
                    this.setRigType(ERigidBody2DType.Dynamic, this.gravityScale, true);
                }
            })
            .start();
    }

    /** 原版 FruitComp.hitPower -> GbzSdkManager.vibrateShort：微信短震，Web 兜底 navigator.vibrate。 */
    private static vibrateShort(): void {
        try {
            const wxApi = (globalThis as { wx?: { vibrateShort?: (options?: unknown) => void } }).wx;
            if (wxApi?.vibrateShort) {
                wxApi.vibrateShort({ type: 'light' });
            } else if (typeof navigator !== 'undefined'
                && typeof (navigator as Navigator & { vibrate?: (ms: number) => void }).vibrate === 'function') {
                (navigator as Navigator & { vibrate: (ms: number) => void }).vibrate(15);
            }
        } catch {
            // 平台不支持震动时静默忽略。
        }
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
        if (sprite) {
            Tween.stopAllByTarget(sprite);
            sprite.color = new Color(255, 255, 255, 255);
        }
        Tween.stopAllByTarget(node);

        const u = node.scale.x;
        const enlarged = u + 0.1;
        const rise = new Vec3(node.position.x, node.position.y + 50, 0);

        tween(node)
            .to(0.12, { scale: new Vec3(enlarged, enlarged, 1) })
            .to(0.12, { scale: new Vec3(u, u, 1) })
            .call(() => {
                // 原版 fruitTween：缩放回弹结束、上浮前在原位喷 effPr 消除粒子。
                if (node.isValid) EffectLayer.instance?.burstEliminate(node, this.pairId);
            })
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
     * 第 9 步：槽内容量达到危险值（>=colorLimit）时红白呼吸闪烁
     * （原版 GameMgr.fruitColorTween 的循环版；消除/安全时需主动关闭）。
     */
    public flashDanger(on: boolean): void {
        const sprite = this.node.getComponent(Sprite);
        if (!sprite) return;
        Tween.stopAllByTarget(sprite);
        if (on) {
            sprite.color = new Color(255, 255, 255, 255);
            tween(sprite)
                .to(0.5, { color: new Color(255, 0, 0, 255) }, { easing: 'sineIn' })
                .to(0.5, { color: new Color(255, 255, 255, 255) }, { easing: 'sineOut' })
                .union()
                .repeatForever()
                .start();
        } else {
            sprite.color = new Color(255, 255, 255, 255);
        }
    }

    /**
     * 第 9 步：溢出失败（装不下啦）后槽内水果停止闪烁、变灰、转 Static
     * （原版 checkLose 里 scheduleOnce(setRigType(Static)) + color(100,100,100)）。
     */
    public grayOutForLose(): void {
        this.flashDanger(false);
        const sprite = this.node.getComponent(Sprite);
        if (sprite) sprite.color = new Color(100, 100, 100, 255);
        this.scheduleOnce(() => {
            if (this.node.isValid) this.setRigType(ERigidBody2DType.Static);
        }, 0);
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
