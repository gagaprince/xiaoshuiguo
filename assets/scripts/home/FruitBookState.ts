import { sys } from 'cc';

/**
 * 图鉴上次查看进度（对齐原版 GbzDataManager.fruitBookLastLevel）。
 *
 * 原版语义：打开图鉴面板时记录当前 game_level；首页按钮红点在
 * fruitBookLastLevel < game_level 时出现，面板内新解锁项的 newTip
 * 同理判定（No.r 满足 lastLevel <= r-1 < game_level）。
 */
const STORAGE_KEY = 'xiaoshuiguo_fruitbook_v1';
const DEFAULT_LAST_LEVEL = 0;

interface FruitBookSaveData {
    lastLevel?: unknown;
}

export class FruitBookState {
    private static cached = -1;

    /** 上次打开图鉴时的关数（未存档时为 0，首装即有一个新条目）。 */
    public static get lastViewedLevel(): number {
        if (this.cached < 0) this.cached = this.read();
        return this.cached;
    }

    /** 关闭/查看图鉴时写入当前关数，红点随之消失。 */
    public static markViewed(level: number): void {
        this.cached = Math.max(0, Math.floor(level));
        try {
            sys.localStorage.setItem(STORAGE_KEY, JSON.stringify({ lastLevel: this.cached }));
        } catch {
            // 存储不可用时仅本次会话生效。
        }
    }

    /** 原版 fruitBookLastLevel < game_level。 */
    public static hasNew(level: number): boolean {
        return this.lastViewedLevel < level;
    }

    private static read(): number {
        try {
            const raw = sys.localStorage.getItem(STORAGE_KEY);
            if (!raw) return DEFAULT_LAST_LEVEL;
            const parsed = JSON.parse(raw) as FruitBookSaveData;
            const value = Number(parsed.lastLevel);
            return Number.isFinite(value) && value >= 0 ? Math.floor(value) : DEFAULT_LAST_LEVEL;
        } catch {
            return DEFAULT_LAST_LEVEL;
        }
    }
}
