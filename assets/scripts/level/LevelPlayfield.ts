import { _decorator, Component, Node, RigidBody2D, Tween, UITransform, Widget, tween } from 'cc';
import { LevelLaunchConfig } from './LevelLaunchConfig';
import { LevelData } from './generator/LevelTypes';
import { FruitEntity } from './fruit/FruitEntity';
import { FruitSpawner } from './fruit/FruitSpawner';
import { FRUIT_PHYSICS_GROUP } from './fruit/FruitPrefabMap';

const { ccclass } = _decorator;

interface ShiftItem {
    entity: FruitEntity;
    x: number;
    y: number;
}

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
export class LevelPlayfield extends Component {
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
    private boundaryLine: Node | null = null;

    /** 进入场地：配置墙体 -> 等水果实例化 -> 生成保护期动画 -> 启动方向移动。 */
    public enter(data: LevelData, spawner: FruitSpawner): void {
        void this.run(data, spawner);
    }

    private async run(data: LevelData, spawner: FruitSpawner): Promise<void> {
        this.spawner = spawner;
        this.level = data.level;
        const override = LevelLaunchConfig.options.moveDirOverride;
        this.arrangeType = data.level === 1 ? 1 : override ?? data.parameters.moveDir;

        const rootUITransform = this.node.getComponent(UITransform);
        this.halfWidth = (rootUITransform?.width ?? 750) / 2;
        this.halfHeight = (rootUITransform?.height ?? 1334) / 2;

        this.cacheWallNodes();
        this.boundaryLine?.getComponent(Widget)?.updateAlignment();
        this.initWall();

        await spawner.spawnComplete;
        if (!this.node.isValid) return;

        // 生成保护期：全部水果同时播放 backOut 弹出动画（内部 Dynamic g=0 -> Static）。
        await Promise.all(spawner.entities.map(entity => entity.playSpawnAnim()));
        if (!this.node.isValid) return;

        this.checkBoundAll();
        this.hideWall();

        if (this.level === 1) return;

        if (this.arrangeType === 1) {
            this.fruitDown();
            this.schedule(this.fruitDownTick, LevelPlayfield.DOWN_INTERVAL);
        } else if (this.arrangeType === 2 || this.arrangeType === 3) {
            this.fruitMove(true);
        }
    }

    public onDestroy(): void {
        this.unscheduleAllCallbacks();
        Tween.stopAllByTag(LevelPlayfield.TWEEN_TAG_MOVE);
    }

    private cacheWallNodes(): void {
        const walls = this.node.getChildByPath('game/walls');
        this.line = walls?.getChildByName('line') ?? null;
        this.leftWall = walls?.getChildByName('left') ?? null;
        this.rightWall = walls?.getChildByName('right') ?? null;
        this.topWall = walls?.getChildByName('top') ?? null;
        this.bottomWall = walls?.getChildByName('bottom') ?? null;
        this.boundaryLine = this.node.getChildByPath('game/boundaryLine');
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
            const body = wall?.getComponent(RigidBody2D);
            if (body) body.group = group;
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
            if (!entity.node.isValid || entity.isTouch) continue;
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
                distance = this.arrangeType === 2 ? distance : -distance;
            }
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
            if (entity.isTouch) continue;
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
            if (!entity.node.isValid || entity.isTouch) continue;
            items.push({ entity, x: entity.node.position.x, y: entity.node.position.y });
        }
        const driver = { offset: 0 };
        const t = tween(driver).to(duration, { offset: 1 }, {
            onUpdate: () => {
                for (const item of items) {
                    if (item.entity.node.isValid) {
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
        const lineX = this.line?.position.x ?? 0;
        for (const entity of this.spawner.entities) {
            if (!entity.node.isValid) continue;
            if (this.arrangeType === 0 || this.arrangeType === 1) {
                entity.markBoardTouchable();
                continue;
            }
            const x = entity.node.position.x;
            let dark = false;
            if (this.arrangeType === 2) {
                dark = x < -this.halfWidth + 30;
            } else if (this.arrangeType === 3) {
                dark = x > this.halfWidth - 30;
            }
            entity.applySideAppearance(dark);
            if (this.arrangeType > 1 && entity.isCanTouch && Math.abs(lineX - x) < 50) {
                entity.autoDrop();
            }
        }
    }
}
