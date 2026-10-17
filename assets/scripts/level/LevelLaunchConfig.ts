/**
 * 第 0 步：开发期关卡启动参数。
 *
 * 浏览器预览可用查询参数覆盖，例如：
 *   http://localhost:7456/?level=2&difficulty=hard&seed=12345
 *
 * 不传时默认：第 1 关、normal、固定种子 20261016，保证多次启动生成结果一致。
 * 微信小游戏环境没有 location，解析失败时一律使用默认值。
 */
export type LevelDifficulty = 'normal' | 'easy' | 'hard';

export interface LevelLaunchOptions {
    level: number;
    difficulty: LevelDifficulty;
    seed: number;
}

const DEFAULT_LEVEL = 1;
const DEFAULT_DIFFICULTY: LevelDifficulty = 'normal';
const DEFAULT_SEED = 20261016;

export class LevelLaunchConfig {
    private static _options: LevelLaunchOptions | null = null;

    public static get options(): LevelLaunchOptions {
        if (!this._options) this._options = this.resolve();
        return this._options;
    }

    /** 测试代码可显式注入参数；正式界面不暴露入口 */
    public static override(options: Partial<LevelLaunchOptions>): LevelLaunchOptions {
        this._options = { ...this.options, ...options };
        return this.options;
    }

    private static resolve(): LevelLaunchOptions {
        const params = this.readQuery();
        return {
            level: this.parsePositiveInt(params.get('level'), DEFAULT_LEVEL),
            difficulty: this.parseDifficulty(params.get('difficulty')),
            seed: this.parsePositiveInt(params.get('seed'), DEFAULT_SEED),
        };
    }

    private static readQuery(): URLSearchParams {
        try {
            if (typeof location !== 'undefined' && location.search) {
                return new URLSearchParams(location.search);
            }
        } catch {
            // 非浏览器环境（微信小游戏等）忽略查询参数
        }
        return new URLSearchParams();
    }

    private static parsePositiveInt(raw: string | null, fallback: number): number {
        if (raw === null) return fallback;
        const value = Number.parseInt(raw, 10);
        return Number.isFinite(value) && value > 0 ? value : fallback;
    }

    private static parseDifficulty(raw: string | null): LevelDifficulty {
        if (raw === 'easy' || raw === 'hard' || raw === 'normal') return raw;
        return DEFAULT_DIFFICULTY;
    }
}
