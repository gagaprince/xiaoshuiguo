/**
 * 第 3 步：关卡生成器类型定义（从 tmp/gen.js 的 JSDoc typedef 迁移）。
 * 只包含可序列化的纯数据，不依赖 Cocos 节点或组件。
 */

export type LevelDifficulty = 'normal' | 'easy' | 'hard';

/** 水果移动方向（原版 arrangeType）：0 静止 / 1 默认下移 / 2 左移 / 3 右移。 */
export const enum MoveDirection {
    NONE = 0,
    DEFAULT = 1,
    LEFT = 2,
    RIGHT = 3,
}

export interface Point {
    x: number;
    y: number;
}

/** 关卡布局边界；水果中心会按自身半径向内收缩。 */
export interface LayoutConfig {
    width: number;
    height: number;
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
    /**
     * 水果堆放起始 Y（原版 ReferenceLayMgr.genLvMapData 的 _bottomY，
     * 取运行时 boundaryLine.y：Widget bottom=702.674 对齐 1334 高节点 => 35.674）。
     * 下移/静止关的阶段水果带从该位置向上堆叠。
     */
    bottomY: number;
    /** 原包参考半径，黑洞容量公式固定使用 55。 */
    itemRadius: number;
}

/** 单个水果的纯数据描述；调用方据此实例化水果预制体。 */
export interface FruitData {
    /** 本次生成结果中的唯一编号，从 0 开始。 */
    id: number;
    /** 水果在打乱后队列中的索引，可用于还原生成顺序。 */
    queueIndex: number;
    /** 水果类型编号，对应水果资源/预制体编号，范围 1～33。 */
    type: number;
    /** 三阶段配量中的生成批次（0/1/2），不是节点层级。 */
    stage: number;
    /** 在关卡容器下的本地坐标。 */
    position: Point;
    /** 布局碰撞半径，已乘入 scaleExp。 */
    radius: number;
    /** 原始美术资源的参考半径，未乘缩放。 */
    sourceRadius: number;
    /** 建议应用到水果节点的最终缩放，已乘入关卡 scaleExp。 */
    scale: number;
    /** 原包使用的粒子效果分类编号。 */
    particleType: number;
    /** normal 普通 / frozen 冰冻（需要冰冻表现与解冻逻辑）。 */
    status: 'normal' | 'frozen';
    /** 第 12.2 步：非空时该水果是黑洞锚点（CalculatedInfo.type=3），值为黑洞 id。 */
    holeId?: number;
    /** 第 11 步：是否为随机盒水果（blackBox，CalculatedInfo.type=2）；盒下是真水果，pairId 不变。 */
    mystery?: boolean;
    /** 冰冻解除阈值；普通水果固定为 0。 */
    thawHits: number;
}

export interface ObstacleData {
    id: number;
    position: Point;
    /** 障碍物外观/预制体变体编号 1～3。 */
    variant: number;
}

/** 木板障碍：当前只恢复数量，坐标朝向待木板布局逻辑补齐。 */
export interface WoodenObstacleData {
    id: number;
}

/** 随机盒子：当前只恢复数量，实例化位置待对应玩法补齐。 */
export interface RandomBoxData {
    id: number;
}

export interface BlackHoleData {
    id: number;
    position: Point;
    /** 分配给该黑洞的水果类型序列，供黑洞玩法消费或释放。 */
    fruitTypes: number[];
}

/** 从 ReferenceMgr 恢复的关卡参数。 */
export interface LevelParameters {
    /** 三阶段水果类型表；typeArr[stage][index] 为水果类型。 */
    typeArr: number[][];
    /** 三阶段水果数量表，与 typeArr 同位置一一对应。 */
    countArr: number[][];
    /** 本关统一缩放系数，已体现在 FruitData.scale/radius。 */
    scaleExp: number;
    /** 水果移动方向，见 MoveDirection。 */
    moveDir: number;
    /** 尾号 6 关卡启用的特殊道具布局。 */
    itemLayout: boolean;
    /** 尾号 6 道具布局关的网格水果总数（原版由 GridManager 格点直接摆放，不走三阶段表）。 */
    itemFruitTotal: number;
    /** 原包保留的拼写：是否启用水果连接玩法。 */
    itemConnet: boolean;
    /** 每个黑洞分配的水果类型序列。 */
    holeItemTypeArr: number[][];
    randomBox: number;
    woodenObs: number;
    obsCount: number;
    iceCount: number;
    level: number;
    difficulty: LevelDifficulty;
    /** 当前十关组在四组循环中的索引 0～3。 */
    levelCycle: number;
    /** countArr 所有数量的总和。 */
    totalFruitCount: number;
}

export interface GenerateLevelOptions {
    difficulty?: LevelDifficulty | 1 | 2 | 3;
    seed?: string | number;
    /** 自定义随机函数 [0,1)，优先级高于 seed。 */
    rng?: () => number;
    layout?: Partial<LayoutConfig>;
    /** 仅包含前 28 类水果的替代皮肤。 */
    useAlternateSkin?: boolean;
    /** 原包第 2 关字节平台特殊配置。 */
    byteDanceMode?: boolean;
    /** 优先生成区域的 Y 中心，主要用于调试。 */
    preferredY?: number;
}

export interface LevelData {
    level: number;
    difficulty: LevelDifficulty;
    parameters: LevelParameters;
    layout: LayoutConfig;
    fruits: FruitData[];
    obstacles: ObstacleData[];
    woodenObstacles: WoodenObstacleData[];
    randomBoxes: RandomBoxData[];
    blackHoles: BlackHoleData[];
}

export interface LevelValidationResult {
    valid: boolean;
    errors: string[];
}
