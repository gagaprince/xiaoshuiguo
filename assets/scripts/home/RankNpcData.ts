import { sys } from 'cc';

/**
 * 世界榜玩家数据（原版 GbzRankLayer.nameStrs 元素）。
 */
export interface RankPlayer {
    headImg: string;
    userName: string;
    level: number;
    isPlayer: boolean;
}

const NPC_COUNT = 50;
const STORAGE_NAMES = 'xiaoshuiguo_rank_names_v1';
const STORAGE_DATE = 'xiaoshuiguo_rank_date_v1';
const PLAYER_NAME = '自己';
const PLAYER_HEAD = '椰子';

/**
 * 原版 GameMgr.fruitStr 前 28 项：世界榜 NPC 头像只从这些水果里抽
 * （getRandomHead = fruitStr[floor(28 * random())]）。
 */
const HEAD_FRUITS = [
    '西瓜', '火龙果', '包菜', '葡萄', '桃子', '香蕉', '西红柿',
    '车厘子', '草莓', '柠檬', '石榴', '蓝莓', '榴莲', '桂圆',
    '柿子', '茄子', '芒果', '树莓', '橘子', '冬枣', '杨梅',
    '红甘蓝', '花菜', '山竹', '人参果', '椰子', '哈密瓜', '贝贝南瓜',
];

/**
 * 世界榜 NPC 数据（原版 GbzRankLayer 的纯数据部分）。
 *
 * 50 个 NPC + 自己：NPC 关卡 70% 落在 2500~4000、30% 落在 4001~5000；
 * 名字/头像随机生成，localStorage 持久化，跨天每个 NPC +1~4 关后重排；
 * 自己按 curlLevel（= 当前关 - 1）插入降序列表，50 名外则不入榜。
 * 重建工程使用独立 storage key，不与原包互通。
 */
export class RankNpcData {
    public static build(playerLevel: number): { players: RankPlayer[]; playerRank: number } {
        const data = new RankNpcData();
        data.init(playerLevel);
        return { players: data.players, playerRank: data.getPlayerRank() };
    }

    private players: RankPlayer[] = [];

    private init(playerLevel: number): void {
        const stored = this.readStored();
        const today = this.getTodayDate();
        const lastDate = sys.localStorage.getItem(STORAGE_DATE) || '';
        if (!stored || stored.length < NPC_COUNT) {
            this.players = this.generateRandomData();
        } else {
            this.players = stored;
            if (lastDate !== today) this.updateNpcLevels();
        }
        this.processPlayerData(playerLevel);
        try {
            sys.localStorage.setItem(STORAGE_NAMES, JSON.stringify(this.players));
            sys.localStorage.setItem(STORAGE_DATE, today);
        } catch {
            // 存储不可用时本次会话仍可显示。
        }
    }

    private readStored(): RankPlayer[] | null {
        try {
            const raw = sys.localStorage.getItem(STORAGE_NAMES);
            if (!raw) return null;
            const parsed = JSON.parse(raw) as RankPlayer[];
            if (!Array.isArray(parsed)) return null;
            return parsed.filter(p => p && typeof p.userName === 'string' && Number.isFinite(p.level));
        } catch {
            return null;
        }
    }

    private getTodayDate(): string {
        const d = new Date();
        const pad2 = (n: number): string => (n < 10 ? `0${n}` : `${n}`);
        const month = pad2(d.getMonth() + 1);
        const day = pad2(d.getDate());
        return `${d.getFullYear()}-${month}-${day}`;
    }

    /** 跨天：每个 NPC +1~4 关（原版 updateNPCLevels），自己不动，随后重排。 */
    private updateNpcLevels(): void {
        for (const p of this.players) {
            if (!p.isPlayer) p.level += Math.floor(4 * Math.random()) + 1;
        }
        this.sortDesc();
    }

    private generateRandomData(): RankPlayer[] {
        const used = new Set<string>();
        const list: RankPlayer[] = [];
        for (let i = 0; i < NPC_COUNT; i++) {
            list.push({
                headImg: this.getRandomHead(),
                userName: this.getUniqueUsername(used),
                level: this.getRandomLevel(),
                isPlayer: false,
            });
        }
        return list.sort((a, b) => b.level - a.level);
    }

    /** 70% 为 2500~4000，30% 为 4001~5000（原版 getRandomLevel）。 */
    private getRandomLevel(): number {
        if (Math.random() < 0.3) return Math.floor(1501 * Math.random()) + 2500;
        return Math.floor(1000 * Math.random()) + 4001;
    }

    private getRandomHead(): string {
        return HEAD_FRUITS[Math.floor(28 * Math.random())];
    }

    private getUniqueUsername(used: Set<string>): string {
        let name = '';
        for (let tries = 0; tries < 20; tries++) {
            name = this.generateRandomUsername();
            if (!used.has(name)) break;
            if (tries >= 10) {
                name += Math.floor(1000 * Math.random());
                break;
            }
        }
        used.add(name);
        return name;
    }

    private generateRandomUsername(): string {
        switch (Math.floor(3 * Math.random())) {
            case 0:
                return NAME_PREFIXES[Math.floor(Math.random() * NAME_PREFIXES.length)]
                    + NAME_SUFFIXES[Math.floor(Math.random() * NAME_SUFFIXES.length)];
            case 1:
                return FAMILY_NAMES[Math.floor(Math.random() * FAMILY_NAMES.length)]
                    + GIVEN_NAMES[Math.floor(Math.random() * GIVEN_NAMES.length)];
            case 2:
                return SPECIAL_NAMES[Math.floor(Math.random() * SPECIAL_NAMES.length)];
            default:
                return '神秘玩家';
        }
    }

    private createRandomPlayer(): RankPlayer {
        const used = new Set<string>(this.players.map(p => p.userName));
        return {
            headImg: this.getRandomHead(),
            userName: this.getUniqueUsername(used),
            level: this.getRandomLevel(),
            isPlayer: false,
        };
    }

    /**
     * 把自己插入榜单（原版 processPlayerData）：达到第 50 名关卡线才入榜
     * （顶替末位），否则从榜中移除并补一个 NPC；最后统一重排并标记 isPlayer。
     */
    private processPlayerData(playerLevel: number): void {
        if (this.players.length < NPC_COUNT) this.fillMissingData();
        this.sortDesc();
        const threshold = this.players[NPC_COUNT - 1].level;
        const index = this.players.findIndex(p => p.userName === PLAYER_NAME);
        if (playerLevel >= threshold) {
            const self: RankPlayer = {
                headImg: PLAYER_HEAD,
                userName: PLAYER_NAME,
                level: playerLevel,
                isPlayer: true,
            };
            if (index !== -1) this.players[index] = self;
            else this.players.push(self);
            this.sortDesc();
            this.players.pop();
        } else if (index !== -1) {
            this.players.splice(index, 1);
            this.players.push(this.createRandomPlayer());
            this.sortDesc();
        }
        this.sortDesc();
        for (const p of this.players) p.isPlayer = p.userName === PLAYER_NAME;
    }

    private fillMissingData(): void {
        const need = NPC_COUNT - this.players.length;
        if (need <= 0) return;
        const used = new Set<string>(this.players.map(p => p.userName));
        for (let i = 0; i < need; i++) {
            this.players.push({
                headImg: this.getRandomHead(),
                userName: this.getUniqueUsername(used),
                level: this.getRandomLevel(),
                isPlayer: false,
            });
        }
    }

    private sortDesc(): void {
        this.players.sort((a, b) => b.level - a.level);
    }

    private getPlayerRank(): number {
        for (let i = 0; i < this.players.length; i++) {
            if (this.players[i].isPlayer) return i + 1;
        }
        return -1;
    }
}

const NAME_PREFIXES = [
    '飞翔的', '奔跑的', '跳跃的', '可爱的', '神秘的', '勇敢的', '聪明的', '快乐的',
    '忧郁的', '疯狂的', '安静的', '闪亮的', '强大的', '敏捷的', '温柔的', '调皮的',
    '认真的', '懒惰的', '勤奋的', '幽默的', 'Flying', 'Running', 'Jumping', 'Cute',
    'Mysterious', 'Brave', 'Clever', 'Happy', 'Melancholy', 'Crazy', 'Quiet',
    'Shiny', 'Powerful', 'Agile', 'Gentle', 'Naughty', 'Serious', 'Lazy',
    'Diligent', 'Humorous',
];

const NAME_SUFFIXES = [
    '小猪', '小猫', '小狗', '小鸟', '小兔', '小熊', '小虎', '小龙', '小马', '小羊',
    '小猴', '小鸡', '小鸭', '小鱼', '熊猫', '狐狸', '狼人', '企鹅', '恐龙', '独角兽',
    '凤凰', '狮子', '老虎', '大象', '长颈鹿', '河马', '斑马', '袋鼠', 'Piggy',
    'Kitty', 'Puppy', 'Birdie', 'Bunny', 'Bear', 'Tiger', 'Dragon', 'Pony', 'Lamb',
    'Monkey', 'Chick', 'Duckling', 'Fish', 'Panda', 'Fox', 'Werewolf', 'Penguin',
    'Dinosaur', 'Unicorn', 'Phoenix', 'Lion', 'Tiger', 'Elephant', 'Giraffe',
    'Hippo', 'Zebra', 'Kangaroo',
];

const SPECIAL_NAMES = [
    '游戏达人', '闯关高手', '速度之王', '无尽挑战者', '关卡征服者', '冒险家',
    '探索者', '勇者无敌', '极限玩家', '终极战士', '地狱使者', '无敌玩家',
    '无敌战士', '孤独者', '孤狼', '钟理', 'Game Master', 'Level Pro', 'Speed King',
    'Endless Challenger', 'Stage Conqueror', 'Adventurer', 'Explorer',
    'Invincible Hero', 'Extreme Gamer', 'Ultimate Warrior', 'Hell Messenger',
    'Invincible Player', 'Invincible Warrior', 'Lonely One', 'Void', 'Chung Li',
];

/**
 * 原包此处是 10 个混淆字符串变量，英文半组 Zhao/Qian/Sun/Li/Zhou/Wu/Zheng/
 * Wang/Feng/Chen 已明确对应“赵钱孙李周吴郑王冯陈”，按此还原。
 */
const FAMILY_NAMES = [
    '赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈',
    'Zhao', 'Qian', 'Sun', 'Li', 'Zhou', 'Wu', 'Zheng', 'Wang', 'Feng', 'Chen',
];

const GIVEN_NAMES = [
    '小明', '小红', '小刚', '小丽', '小华', '小强', '小美', '小杰', '文静',
    '建国', '建军', '爱国', '爱民', '志强', '美丽', '秀英', 'Xiaoming', 'Xiaohong',
    'Xiaogang', 'Xiaoli', 'Xiaohua', 'Xiaoqiang', 'Xiaomei', 'Xiaojie', 'Wenjing',
    'Jianguo', 'Jianjun', 'Aiguo', 'Aimin', 'Zhiqiang', 'Meili', 'Xiuying',
];
