import { _decorator, Component, instantiate, Node, Prefab, UITransform } from 'cc';
import { LevelData } from '../generator/LevelTypes';
import { FruitEntity } from './FruitEntity';
import { FruitFactory } from './FruitFactory';
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
    /** 原版 GameMgr.firstLevelIDS：三行四列，类型 9 / 1 / 2。 */
    private static readonly FIRST_LEVEL_IDS: readonly number[][] = [
        [9, 9, 9, 9],
        [1, 1, 1, 1],
        [2, 2, 2, 2],
    ];

    private readonly factory = new FruitFactory();
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
        return data.fruits.length;
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

        await this.factory.preload(data.fruits.map(fruit => fruit.type));

        for (const fruitData of data.fruits) {
            const node = await this.createFruit(fruitData.type, {
                stage: fruitData.stage,
                scale: fruitData.scale,
                radius: fruitData.radius,
                kind: fruitData.status === 'frozen' ? 1 : 0,
            });
            if (!this.node.isValid) return;
            if (!node) continue;
            fruitsRoot.addChild(node);
            node.setPosition(fruitData.position.x, fruitData.position.y);
            this.syncLayer(node, fruitsRoot.layer);
        }
    }

    private async createFruit(
        type: number,
        options: { stage: number; scale: number; radius: number; kind?: 0 | 1 },
    ): Promise<Node | null> {
        let prefab: Prefab;
        try {
            prefab = await this.factory.acquire(type);
        } catch (err) {
            console.warn(`[FruitSpawner] load fruit${type} failed`, err);
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
            },
            options.scale,
        );
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
