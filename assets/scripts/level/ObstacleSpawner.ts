import { _decorator, BoxCollider2D, Component, instantiate, Node, Prefab, Size, Vec3, tween } from 'cc';
import { LevelData } from './generator/LevelTypes';
import { MechanicPrefabs, MechanicPrefabKey } from './MechanicPrefabs';
import { applyNodePhysicsGroup, FRUIT_PHYSICS_GROUP, setNodePhysicsGroup } from './Physics2DGroups';

const { ccclass } = _decorator;

/**
 * 第 11 步：普通障碍（obs1/2/3）与木板（stake）生成，对齐原版
 * ReferenceLayMgr.genLvMapData + GameMgr.initLevel 的机关时序。
 *
 * - 普通障碍：Y 轴按等距条带、X 在 [-208,208] 随机，变体 obs1/2/3 随机，
 *   插入 obstaclesRoot，scale 0 起播 0.8s backOut，物理分组 obst（只碰水果）。
 * - 木板：woodenObs 数量即布局编码（2/4/6），位置为原版固定公式，挂 stakeRoot。
 *   6 块时生成期间左右墙碰撞体临时加宽到 345（水果先按窄列排布），完成后回 200；
 *   2 块时生成期间显示 walls/middleBox（布局标记节点，33x28 且无实际阻挡）。
 * - prepare 与水果实例化并行；finalizeSpawning 必须在全部水果节点创建后、
 *   生成保护期动画前调用（对齐原版 genLvMap 回调时机）。
 */
@ccclass('ObstacleSpawner')
export class ObstacleSpawner extends Component {
    private static readonly POP_SECONDS = 0.8;

    private readonly mechanics = new MechanicPrefabs();
    private readonly spawnedNodes: Node[] = [];
    private leftWallCollider: BoxCollider2D | null = null;
    private rightWallCollider: BoxCollider2D | null = null;
    private middleBox: Node | null = null;
    private woodenCount = 0;

    /** 同步应用生成期墙体调整，并开始异步实例化障碍/木板。 */
    public prepare(data: LevelData): Promise<void> {
        this.woodenCount = data.woodenObstacles.length;
        this.cacheWallNodes();
        this.applyPreSpawnWallState();
        return this.spawnAll(data);
    }

    /** 全部水果节点已创建：恢复生成期墙体状态（对齐原版 genLvMap 回调）。 */
    public finalizeSpawning(): void {
        if (this.woodenCount === 6) this.setSideWallWidth(200);
        if (this.woodenCount === 2 && this.middleBox) this.middleBox.active = false;
    }

    public clear(): void {
        for (const node of this.spawnedNodes) {
            if (node.isValid) node.destroy();
        }
        this.spawnedNodes.length = 0;
    }

    public onDestroy(): void {
        this.clear();
    }

    private cacheWallNodes(): void {
        this.leftWallCollider = this.node.getChildByPath('game/walls/left')?.getComponent(BoxCollider2D) ?? null;
        this.rightWallCollider = this.node.getChildByPath('game/walls/right')?.getComponent(BoxCollider2D) ?? null;
        this.middleBox = this.node.getChildByPath('game/walls/middleBox');
        if (this.middleBox) this.middleBox.active = false;
    }

    private applyPreSpawnWallState(): void {
        if (this.woodenCount === 6) this.setSideWallWidth(345);
        if (this.woodenCount === 2 && this.middleBox) {
            this.middleBox.setPosition(0, 100, 0);
            this.middleBox.active = true;
        }
    }

    private setSideWallWidth(width: number): void {
        for (const collider of [this.leftWallCollider, this.rightWallCollider]) {
            if (!collider) continue;
            collider.size = new Size(width, collider.size.height);
            collider.apply();
        }
    }

    private async spawnAll(data: LevelData): Promise<void> {
        await this.spawnStakes();
        await this.spawnObstacles(data);
    }

    /** 木板位置公式（原版 ReferenceLayMgr，halfGameW=375）。 */
    private stakePositions(): Vec3[] {
        const positions: Vec3[] = [];
        if (this.woodenCount === 6) {
            for (let i = 0; i < 6; i += 1) {
                const x = i % 2 === 0 ? 375 : -375;
                positions.push(new Vec3(x, 100 + 278 * Math.floor(i / 2), 0));
            }
        } else if (this.woodenCount === 2) {
            for (let i = 0; i < 2; i += 1) positions.push(new Vec3(0, 150 + 278 * i, 0));
        } else if (this.woodenCount === 4) {
            positions.push(new Vec3(-270, 350, 0), new Vec3(270, 350, 0));
        }
        return positions;
    }

    private async spawnStakes(): Promise<void> {
        const root = this.node.getChildByPath('game/stakeRoot');
        const positions = this.stakePositions();
        if (!root || positions.length === 0) return;
        const prefab = await this.load('stake');
        if (!prefab || !this.node.isValid) return;
        const layer = root.layer;
        for (const position of positions) {
            if (!this.node.isValid) return;
            const node = this.instantiateMechanic(prefab, root, position, layer);
            if (node) this.spawnedNodes.push(node);
        }
    }

    private async spawnObstacles(data: LevelData): Promise<void> {
        const root = this.node.getChildByPath('game/obstaclesRoot');
        if (!root || data.obstacles.length === 0) return;
        const layer = root.layer;
        for (const obstacle of data.obstacles) {
            const variant = Math.min(3, Math.max(1, obstacle.variant)) as 1 | 2 | 3;
            const prefab = await this.load(`obs${variant}` as MechanicPrefabKey);
            if (!prefab || !this.node.isValid) return;
            const node = this.instantiateMechanic(
                prefab,
                root,
                new Vec3(obstacle.position.x, obstacle.position.y, 0),
                layer,
            );
            if (node) this.spawnedNodes.push(node);
        }
    }

    private instantiateMechanic(prefab: Prefab, parent: Node, position: Vec3, layer: number): Node | null {
        const node = instantiate(prefab);
        parent.addChild(node);
        node.setPosition(position);
        this.syncLayer(node, layer);
        // 机关属于 obst 分组（掩码 18：只与 fruit/clickFruit 碰撞），b2 body 次帧重建 fixture。
        setNodePhysicsGroup(node, FRUIT_PHYSICS_GROUP.OBST);
        this.scheduleOnce(() => {
            if (node.isValid) applyNodePhysicsGroup(node);
        }, 0);
        node.setScale(new Vec3(0, 0, 1));
        tween(node)
            .to(ObstacleSpawner.POP_SECONDS, { scale: new Vec3(1, 1, 1) }, { easing: 'backOut' })
            .start();
        return node;
    }

    private async load(key: MechanicPrefabKey): Promise<Prefab | null> {
        try {
            return await this.mechanics.acquire(key);
        } catch (err) {
            console.warn(`[ObstacleSpawner] load ${key} failed`, err);
            return null;
        }
    }

    private syncLayer(node: Node, layer: number): void {
        node.layer = layer;
        for (const child of node.children) this.syncLayer(child, layer);
    }
}
