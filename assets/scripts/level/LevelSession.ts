import { LevelLaunchConfig } from './LevelLaunchConfig';
import { generateLevel, validateLevel } from './generator/LevelGenerator';
import { LevelData } from './generator/LevelTypes';

/**
 * 第 3 步：当前关卡会话的最小实现。
 *
 * 现在只负责按启动参数生成纯数据 LevelData（不实例化水果）；
 * 后续步骤在此追加目标进度、槽位容量、胜负状态等运行时状态。
 */
export class LevelSession {
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
}
