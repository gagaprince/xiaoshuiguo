import { LevelLaunchConfig } from './LevelLaunchConfig';
import { generateLevel, validateLevel } from './generator/LevelGenerator';
import { LevelData } from './generator/LevelTypes';

/**
 * 当前关卡会话：按启动参数生成纯数据 LevelData（不实例化水果），
 * 并维护第 8 步的目标进度（fruitTotalNum/fruitRemnantNum）。
 * 容量/满载失败在第 9 步追加。
 */
export class LevelSession {
    private totalGoalValue = 0;
    private remainValue = 0;
    private wonValue = false;

    public constructor(public readonly data: LevelData) {}

    /** 按 LevelLaunchConfig（关卡号/难度/种子）创建会话；固定种子保证可复现。 */
    public static create(overrides?: Parameters<typeof generateLevel>[1]): LevelSession {
        const options = LevelLaunchConfig.options;
        const data = generateLevel(options.level, {
            difficulty: options.difficulty,
            seed: options.seed,
            ...overrides,
        });
        const validation = validateLevel(data);
        if (!validation.valid) {
            console.warn(`[LevelSession] generated level ${options.level} failed validation: ${validation.errors.join('; ')}`);
        }
        return new LevelSession(data);
    }

    /** 本关水果总数（原版 GameMgr.fruitTotalNum；第 1 关为 12）。 */
    public get totalGoal(): number {
        return this.totalGoalValue;
    }

    /** 剩余目标（原版 fruitRemnantNum），每有一个水果飞入篮筐递减 1。 */
    public get remain(): number {
        return this.remainValue;
    }

    /** 完成比例 0~1（原版 updateFruitText 的 fillRange）。 */
    public get progress(): number {
        if (this.totalGoalValue <= 0) return 0;
        return (this.totalGoalValue - this.remainValue) / this.totalGoalValue;
    }

    public get won(): boolean {
        return this.wonValue;
    }

    /** FruitSpawner.spawn 返回真实总数后绑定（第 1 关 12，其余为 data.fruits.length）。 */
    public bindGoal(total: number): void {
        this.totalGoalValue = total;
        this.remainValue = total;
        this.wonValue = false;
    }

    /**
     * 一个水果飞入篮筐后结算（对齐原版 fruitTween 到达回调里的 updateFruitText 递减）。
     * 返回本帧结算后的状态；cleared 仅在最后一个水果到达时为 true，
     * 胜利弹窗由此触发，避免和消除飞行动画重叠。
     */
    public recordCollected(): { remain: number; progress: number; cleared: boolean } {
        if (this.remainValue > 0) this.remainValue -= 1;
        const cleared = this.remainValue <= 0;
        if (cleared) this.wonValue = true;
        return { remain: this.remainValue, progress: this.progress, cleared };
    }
}
