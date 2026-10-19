/**
 * 第 0 步：开发期关卡启动参数。
 *
 * 浏览器预览可用查询参数覆盖，例如：
 *   http://localhost:7456/?level=2&difficulty=hard&seed=12345
 *   http://localhost:7456/?level=10&movedir=2   （第 5 步：强制横向移动场地）
 *   http://localhost:7456/?resetprogress=1       （第 10 步：清空关卡进度回第 1 关）
 *
 * 第 10 步起，不传 level 时进入存档当前关（首玩为第 1 关）；
 * 固定种子 20261016 保证同一关卡多次启动生成结果一致。
 * 微信小游戏环境没有 location，解析失败时一律使用默认值。
 */
import { LevelProgress } from '../core/LevelProgress';

export type LevelDifficulty = 'normal' | 'easy' | 'hard';

export interface LevelLaunchOptions {
    level: number;
    difficulty: LevelDifficulty;
    seed: number;
    /** 开发预览：?autolevel=1 时 Loading 结束直接进 Level，跳过手动点击 */
    autoEnterLevel: boolean;
    /**
     * 第 5 步调试用：?movedir=0..3 强制覆盖场地移动方向
     * （0 静止 / 1 下移 / 2 右移 / 3 左移）。仅覆盖墙体与移动行为，
     * 不改生成器数据；不传为 null，用关卡参数 moveDir。
     */
    moveDirOverride: number | null;
}

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
        if (params.get('resetprogress') === '1') LevelProgress.reset();
        return {
            // 显式 ?level= 仅作开发覆盖；正式链路（首页开始按钮）由导航传存档关。
            level: this.parsePositiveInt(params.get('level'), LevelProgress.currentLevel),
            difficulty: this.parseDifficulty(params.get('difficulty')),
            seed: this.parsePositiveInt(params.get('seed'), DEFAULT_SEED),
            autoEnterLevel: params.get('autolevel') === '1',
            moveDirOverride: this.parseMoveDir(params.get('movedir')),
        };
    }

    private static parseMoveDir(raw: string | null): number | null {
        if (raw === null) return null;
        const value = Number.parseInt(raw, 10);
        return value >= 0 && value <= 3 ? value : null;
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
