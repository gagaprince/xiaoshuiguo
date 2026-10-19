import { sys } from 'cc';

/**
 * 第 10 步：关卡进度存档（对齐原版 GbzDataManager.game_level 的最小子集）。
 *
 * 原版语义：game_level 是“下一个待玩关卡”——首通某关的胜利结算时
 * AddCurLv(1) 立即 +1 并持久化；重试/失败不改档；首页 btn_start 与
 * 关卡内 labLevel 都显示这个值（fakeGame_level 在进入关卡时与它同步）。
 *
 * 重建工程使用独立 storage key，不与原包 CC2_SCREWBOX 互通；
 * 存档缺失、JSON 损坏或字段非法时安全回退到第 1 关。
 */
const STORAGE_KEY = 'xiaoshuiguo_progress_v1';
const FIRST_LEVEL = 1;

interface ProgressSaveData {
    level?: unknown;
}

export class LevelProgress {
    private static _currentLevel = 0;

    /** 下一个待玩关卡（未存档/损坏时为 1）。读取一次后缓存。 */
    public static get currentLevel(): number {
        if (this._currentLevel <= 0) this._currentLevel = this.read();
        return this._currentLevel;
    }

    /**
     * 胜利结算推进（原版 AddCurLv 时机：弹胜利层瞬间）。
     * 重玩已通关的旧关不会回退进度。
     */
    public static unlockAfterWin(level: number): number {
        const next = Math.max(this.currentLevel, Math.floor(level) + 1);
        this._currentLevel = next;
        this.write(next);
        return next;
    }

    /** 开发期：清空进度回到第 1 关（?resetprogress=1）。 */
    public static reset(): void {
        this._currentLevel = FIRST_LEVEL;
        this.write(FIRST_LEVEL);
    }

    private static read(): number {
        try {
            const raw = sys.localStorage.getItem(STORAGE_KEY);
            if (!raw) return FIRST_LEVEL;
            const parsed = JSON.parse(raw) as ProgressSaveData;
            const level = Number(parsed.level);
            return Number.isFinite(level) && level >= 1 ? Math.floor(level) : FIRST_LEVEL;
        } catch {
            return FIRST_LEVEL;
        }
    }

    private static write(level: number): void {
        try {
            sys.localStorage.setItem(STORAGE_KEY, JSON.stringify({ level }));
        } catch {
            // 隐私模式/存储不可用时本次会话仍可继续（内存值已更新）。
        }
    }
}
