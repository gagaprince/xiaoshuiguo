import {
    _decorator,
    Component,
    DistanceJoint2D,
    ERigidBody2DType,
    Graphics,
    instantiate,
    Intersection2D,
    Node,
    Prefab,
    RigidBody2D,
    Size,
    UITransform,
    Vec2,
} from 'cc';
import { FruitEntity } from './fruit/FruitEntity';

const { ccclass } = _decorator;

/** 一根本绳的两个端点果（ropeConnectFruits 与 fruitRopes 下标一一对应）。 */
type RopePair = [FruitEntity, FruitEntity];

interface RopeDrawSnapshot {
    ax: number;
    ay: number;
    bx: number;
    by: number;
}

/**
 * 第 12.3 步：关节/绳索机关管理器（1:1 移植原版 JointGearMgr）。
 *
 * 仅尾号 8 关（ReferenceMgr.initLvConfig case 8，itemConnet=true）启用：
 * - mapCreateJoint：开局在静态果中选 2~5 对（关卡越高越多），对每对生成
 *   jointPoint 物理链（每节 Dynamic g=0、相邻节 DistanceJoint maxLength=10），
 *   两端果各挂一个 DistanceJoint 连到链头/链尾；建链期间所有果临时
 *   Dynamic(g=0) 0.5s 再转回 Static，并互设 jointFruit。
 * - 绳用 game/graphics 的 cc.Graphics 绘制（moveTo 果 A -> 各绳节 -> 果 B），
 *   upDrawRope 每帧仅在端点移动 >0.5px 时重绘。
 * - 端点果配对消除/入槽/磁铁时调 removeRopeByFruit 断绳回收；
 *   打乱先 recycle 全部再 shuffleCreateJoint 重建；过关/离场 recycle。
 *
 * isBind 语义在 FruitEntity：绳未断且另一端未被点走期间，两端均跳过
 * update/接触/配对判定；点一端后该端 Dynamic 下落，链松绳拉直时拽动链节，
 * 另一端仍 Static 等待玩家点击（原版同款表现，Static 体不被关节拉动）。
 */
@ccclass('JointRopeMgr')
export class JointRopeMgr extends Component {
    /** 绳对数（原版 getter ConnectNum）。 */
    public get connectNum(): number {
        return this.ropeConnectFruits.length;
    }

    private graphics: Graphics | null = null;
    private pointPrefab: Prefab | null = null;
    private isInit = false;
    /** 每根绳的 jointPoint 节点链，与 ropeConnectFruits 一一对应。 */
    private readonly fruitRopes: Node[][] = [];
    private readonly ropeConnectFruits: RopePair[] = [];
    private readonly lastDrawPositions: RopeDrawSnapshot[] = [];
    /** 建链完成后置 true，下一帧 upDrawRope 做首次绘制（原版 isUpdateDrow）。 */
    private needRedraw = false;

    /** 原版 init：注入 game/graphics 的 Graphics 组件与 jointPoint 预制体。 */
    public init(graphics: Graphics, pointPrefab: Prefab): void {
        this.graphics = graphics;
        this.pointPrefab = pointPrefab;
        this.fruitRopes.length = 0;
        this.ropeConnectFruits.length = 0;
        this.lastDrawPositions.length = 0;
        this.needRedraw = false;
        this.isInit = true;

        // 重建预制体的 graphics UITransform 是 0×0（原版 750×1334），
        // 运行时补齐，保证 Graphics 绘制/命中区域与原版一致。
        const ui = graphics.node.getComponent(UITransform) ?? graphics.node.addComponent(UITransform);
        ui.setContentSize(new Size(750, 1334));
    }

    /** ReferenceMgr.RandomInt：闭区间 [min, max]。 */
    private static randomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /** 实体可能已随节点销毁（消除飞筐后组件的 node 为 null），遍历全量数组前先判活。 */
    private static alive(entity: FruitEntity): boolean {
        return !!entity && entity.isValid && entity.node !== null && entity.node.isValid;
    }

    private isConnectFruitsExist(node: Node): boolean {
        return this.ropeConnectFruits.some(pair => pair[0].node === node || pair[1].node === node);
    }

    /**
     * 原版 mapCreateJoint：开局选对。
     * 对数 o=min(5, 2+floor(level/10))；第一个果下标 [3, length-1] 随机，
     * 且双方都不在别的绳里；第二个果在第一个下标 ±10 内顺序扫，
     * 距离需在 [139, 347.5]；每对最多试 3000 次。
     */
    public mapCreateJoint(
        level: number,
        entities: readonly FruitEntity[],
        enabled: boolean,
        done?: () => void,
    ): void {
        if (!this.isInit || !enabled) {
            done?.();
            return;
        }
        let remaining = Math.min(5, 2 + Math.floor(level / 10));
        let tries = 0;
        let guard = 0;
        while (remaining > 0) {
            guard += 1;
            // 原版：首果已在绳中时直接重试且不计 3000 次；此处加硬上限防死循环。
            if (guard > 10000) break;
            const firstIndex = JointRopeMgr.randomInt(3, entities.length - 1);
            const first = entities[firstIndex];
            if (!JointRopeMgr.alive(first)) continue;
            if (this.isConnectFruitsExist(first.node)) continue;
            tries += 1;
            if (tries >= 3000) break;

            const low = Math.max(0, firstIndex - 10);
            const high = Math.min(firstIndex + 10, entities.length - 1);
            let second: FruitEntity | null = null;
            for (let index = low; index <= high; index += 1) {
                const candidate = entities[index];
                if (!JointRopeMgr.alive(candidate)) continue;
                if (candidate === first || this.isConnectFruitsExist(candidate.node)) continue;
                const distance = Vec2.distance(
                    first.node.position as unknown as Vec2,
                    candidate.node.position as unknown as Vec2,
                );
                if (distance >= 139 && distance <= 347.5) {
                    second = candidate;
                    break;
                }
            }
            if (second) {
                remaining -= 1;
                this.ropeConnectFruits.push([first, second]);
            }
        }
        console.log(`[JointRopeMgr] level ${level} created ${this.ropeConnectFruits.length} ropes`);
        this.canCreateLines(entities, done);
    }

    /**
     * 原版 shuffleCreateJoint：打乱后从下标 RandomInt(20,30) 起扫，
     * 双方未连、距离 [139,347.5] 且连线走廊与其他果圆不相交（canCreateLine）。
     */
    public shuffleCreateJoint(
        count: number,
        entities: readonly FruitEntity[],
        done?: () => void,
    ): void {
        if (!this.isInit || count <= 0) {
            done?.();
            return;
        }
        let remaining = count;
        let start = JointRopeMgr.randomInt(20, 30);
        if (start >= entities.length - 1) start = Math.max(0, entities.length - 2);
        for (let h = start; h < entities.length - 1 && remaining > 0; h += 1) {
            const first = entities[h];
            if (!JointRopeMgr.alive(first)) continue;
            if (this.isConnectFruitsExist(first.node)) continue;
            for (let l = h + 1; l < entities.length; l += 1) {
                if (remaining <= 0) break;
                const second = entities[l];
                if (!JointRopeMgr.alive(second)) continue;
                if (this.isConnectFruitsExist(first.node) || this.isConnectFruitsExist(second.node)) continue;
                const distance = Vec2.distance(
                    first.node.position as unknown as Vec2,
                    second.node.position as unknown as Vec2,
                );
                if (distance >= 139 && distance <= 347.5 && this.canCreateLine(entities, first, second)) {
                    remaining -= 1;
                    this.ropeConnectFruits.push([first, second]);
                }
            }
        }
        console.log(`[JointRopeMgr] shuffle recreated ${this.ropeConnectFruits.length} ropes`);
        this.canCreateLines(entities, done);
    }

    /**
     * 原版 canCreateLines：非入槽果先全部 Dynamic(g=0, 可休眠)，逐对建链，
     * 0.5s 后全部转回 Static、互设 jointFruit，回调 done 并允许首帧绘制。
     */
    private canCreateLines(entities: readonly FruitEntity[], done?: () => void): void {
        const board = entities.filter(entity => JointRopeMgr.alive(entity) && !entity.isInSlot);
        for (const entity of board) {
            entity.setRigType(ERigidBody2DType.Dynamic, 0, false);
        }
        for (const pair of this.ropeConnectFruits) {
            this.createRope(pair[0], pair[1]);
        }
        this.scheduleOnce(() => {
            if (!this.isInit) return;
            for (const entity of board) {
                if (JointRopeMgr.alive(entity) && !entity.isInSlot) {
                    entity.setRigType(ERigidBody2DType.Static);
                }
            }
            for (const pair of this.ropeConnectFruits) {
                if (JointRopeMgr.alive(pair[0]) && JointRopeMgr.alive(pair[1])) {
                    pair[0].jointFruit = pair[1];
                    pair[1].jointFruit = pair[0];
                }
            }
            done?.();
            this.needRedraw = true;
        }, 0.5);
    }

    /**
     * 原版 createRope：两果之间按 floor(距离/19) 个 jointPoint 排成物理链。
     * 链头从果 A 边缘起，每节间距 距离/节数；果 A 连第 0 节（maxLength=间距），
     * 果 B 连末节（末节自带的空关节销毁）；相邻节之间 DistanceJoint maxLength=10。
     */
    private createRope(a: FruitEntity, b: FruitEntity): void {
        if (!this.graphics || !this.pointPrefab) return;
        const ap = a.node.position;
        const bp = b.node.position;
        const distance = Math.hypot(bp.x - ap.x, bp.y - ap.y);
        const linkCount = Math.max(2, Math.floor(distance / 19));
        const dirX = (bp.x - ap.x) / distance;
        const dirY = (bp.y - ap.y) / distance;
        const stepX = (dirX * distance) / linkCount;
        const stepY = (dirY * distance) / linkCount;
        const aUI = a.node.getComponent(UITransform);
        const edge = (Math.max(aUI?.width ?? 0, aUI?.height ?? 0) / 2) * a.node.scale.x;

        let x = ap.x + dirX * edge;
        let y = ap.y + dirY * edge;
        const ropeRoot = this.graphics.node;
        const points: Node[] = [];
        for (let z = 0; z < linkCount; z += 1) {
            const point = instantiate(this.pointPrefab);
            ropeRoot.addChild(point);
            point.setPosition(x, y, 0);
            point.active = true;
            const body = point.getComponent(RigidBody2D);
            const selfJoint = point.getComponent(DistanceJoint2D);
            points.push(point);
            x += stepX;
            y += stepY;

            if (z === 0) {
                a.initJoint(body);
            } else if (z === linkCount - 1) {
                b.initJoint(body);
                if (selfJoint) selfJoint.destroy();
            }
            if (z >= 1) {
                const link = points[z - 1].getComponent(DistanceJoint2D)
                    ?? points[z - 1].addComponent(DistanceJoint2D);
                link.connectedBody = body;
                link.maxLength = 10;
                link.apply();
            }
        }
        this.fruitRopes.push(points);
    }

    /** 原版 removeRopeByFruit：断开含该节点的绳——两端 removeJoint、销毁全部链节。 */
    public removeRopeByFruit(node: Node): void {
        if (!this.isInit) return;
        for (let index = 0; index < this.ropeConnectFruits.length; index += 1) {
            const pair = this.ropeConnectFruits[index];
            if (pair[0].node !== node && pair[1].node !== node) continue;
            for (const fruit of pair) {
                if (JointRopeMgr.alive(fruit)) fruit.removeJoint();
            }
            this.ropeConnectFruits.splice(index, 1);
            const points = this.fruitRopes[index];
            while (points.length > 0) {
                const point = points.shift()!;
                if (!point.isValid) continue;
                const joint = point.getComponent(DistanceJoint2D);
                if (joint) joint.connectedBody = null;
                point.removeFromParent();
                point.destroy();
            }
            this.fruitRopes.splice(index, 1);
            break;
        }
    }

    /** 原版 upDrawRope：建链首帧强制画一次，之后仅当任一端点移动 >0.5px 重绘。 */
    public upDrawRope(): void {
        if (!this.isInit || this.fruitRopes.length === 0) return;
        if (this.needRedraw) {
            this.drawRope();
            return;
        }
        for (let index = 0; index < this.ropeConnectFruits.length; index += 1) {
            const [a, b] = this.ropeConnectFruits[index];
            if (!JointRopeMgr.alive(a) || !JointRopeMgr.alive(b)) continue;
            const snapshot = this.lastDrawPositions[index];
            if (!snapshot) {
                this.drawRope();
                return;
            }
            const ap = a.node.position;
            const bp = b.node.position;
            if (
                Math.abs(ap.x - snapshot.ax) > 0.5
                || Math.abs(ap.y - snapshot.ay) > 0.5
                || Math.abs(bp.x - snapshot.bx) > 0.5
                || Math.abs(bp.y - snapshot.by) > 0.5
            ) {
                this.drawRope();
                return;
            }
        }
    }

    /** 原版 drawRope：clear 后逐根 moveTo(A)->lineTo 各链节->lineTo(B)->统一 stroke。 */
    private drawRope(): void {
        if (!this.graphics) return;
        this.graphics.clear();
        this.lastDrawPositions.length = 0;
        for (let index = 0; index < this.fruitRopes.length; index += 1) {
            const points = this.fruitRopes[index];
            const pair = this.ropeConnectFruits[index];
            if (!pair) continue;
            const [a, b] = pair;
            if (!JointRopeMgr.alive(a) || !JointRopeMgr.alive(b)) continue;
            const ap = a.node.position;
            const bp = b.node.position;
            this.lastDrawPositions.push({ ax: ap.x, ay: ap.y, bx: bp.x, by: bp.y });
            this.graphics.moveTo(ap.x, ap.y);
            for (const point of points) {
                if (point.isValid) this.graphics.lineTo(point.position.x, point.position.y);
            }
            this.graphics.lineTo(bp.x, bp.y);
        }
        this.graphics.stroke();
        this.needRedraw = false;
    }

    /** 原版 recycle：清绘制、销毁全部链节、两端果 removeJoint、清空所有状态。 */
    public recycle(): void {
        if (!this.isInit) return;
        if (this.graphics?.node.isValid) {
            this.graphics.clear();
            const ropeRoot = this.graphics.node;
            for (let index = ropeRoot.children.length - 1; index >= 0; index -= 1) {
                const child = ropeRoot.children[index];
                const joint = child.getComponent(DistanceJoint2D);
                if (joint) joint.connectedBody = null;
                child.removeFromParent();
                child.destroy();
            }
        }
        for (const pair of this.ropeConnectFruits) {
            for (const fruit of pair) {
                if (JointRopeMgr.alive(fruit)) fruit.removeJoint();
            }
        }
        this.fruitRopes.length = 0;
        this.ropeConnectFruits.length = 0;
        this.lastDrawPositions.length = 0;
        this.needRedraw = false;
    }

    /** 原版 getAngleForPos：两点连线角度（度）。 */
    private getAngleForPos(a: Vec2, b: Vec2): number {
        return Math.atan2(b.y - a.y, b.x - a.x) * 180 / Math.PI;
    }

    /** 原版 CalculateCorners：中心 center、长 length、宽 20 的旋转矩形四角。 */
    private calculateCorners(cx: number, cy: number, length: number, width: number, angleDeg: number): Vec2[] {
        const angle = (angleDeg * Math.PI) / 180;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        const locals: ReadonlyArray<readonly [number, number]> = [
            [length / 2, width / 2],
            [length / 2, -width / 2],
            [-length / 2, -width / 2],
            [-length / 2, width / 2],
        ];
        return locals.map(([dx, dy]) => new Vec2(cx + dx * cos - dy * sin, cy + dx * sin + dy * cos));
    }

    /**
     * 原版 canCreateLine：连线为中线的矩形走廊（长=距-50、宽 20、随连线旋转）
     * 与任意其他水果圆相交则不能建绳，避免新绳穿过果堆。
     */
    private canCreateLine(
        entities: readonly FruitEntity[],
        first: FruitEntity,
        second: FruitEntity,
    ): boolean {
        const ap = first.node.position;
        const bp = second.node.position;
        const center = new Vec2((ap.x + bp.x) / 2, (ap.y + bp.y) / 2);
        const length = Math.hypot(bp.x - ap.x, bp.y - ap.y) - 50;
        const angle = this.getAngleForPos(
            new Vec2(ap.x, ap.y),
            new Vec2(bp.x, bp.y),
        );
        const corners = this.calculateCorners(center.x, center.y, length, 20, angle);
        for (const entity of entities) {
            if (entity === first || entity === second || !JointRopeMgr.alive(entity)) continue;
            const ui = entity.node.getComponent(UITransform);
            const radius = (Math.max(ui?.width ?? 0, ui?.height ?? 0) / 2) * entity.node.scale.x;
            const point = new Vec2(entity.node.position.x, entity.node.position.y);
            if (Intersection2D.polygonCircle(corners, point, radius)) return false;
        }
        return true;
    }
}
