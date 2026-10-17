"use strict";

/**
 * 从小游戏打包产物中恢复的关卡/布局生成器。
 *
 * 源码依据：
 * - game.js / ReferenceMgr.ts：关卡参数生成。
 * - game.js / ReferenceLayMgr.ts：水果队列展开与坐标选择。
 * - game.js / GameMgr.ts：运行时水果实例化。
 * - LvConfig1.ts、LvConfig1_easy.ts、LvConfig3.ts：三档难度配置常量。
 *
 * 恢复状态：
 * - 三档难度参数、关卡分类、分阶段水果数量、障碍物 X 区间、黑洞位置、
 *   队列交换方式、坐标重试次数均为从打包代码直接恢复。
 * - 原版 ReferenceLayMgr 使用四分区占用网格；本独立模块保留其碰撞检测、
 *   三阶段重试和兜底逻辑，但用扁平数组代替 Cocos 单例与分区缓存。因此适合
 *   当前工程接入和代码审查，但随机调用顺序不保证与原包逐次一致。
 * - 只有传入 seed 或自定义 rng 时，随机关卡才可以稳定复现。
 *
 * CommonJS 用法：
 *
 *   const { generateLevel } = require('./recovered-level-layout');
 *   const level = generateLevel(31, { difficulty: 'normal', seed: 1234 });
 *
 * Cocos 接入示例：
 *
 *   const data = generateLevel(levelNumber, { rng: Math.random });
 *   for (const fruit of data.fruits) {
 *     // 实例化对应 type 的水果预制体，将其挂到 GbzLvCommon/game/fruits，
 *     // 再把节点坐标设置为 fruit.position.x / fruit.position.y。
 *   }
 */

/**
 * 二维坐标，单位与 Cocos 场景中的本地坐标单位一致。
 * @typedef {Object} Point
 * @property {number} x 横坐标。
 * @property {number} y 纵坐标。
 */

/**
 * 关卡布局边界。
 * @typedef {Object} LayoutConfig
 * @property {number} width 设计区域宽度，默认 750。
 * @property {number} height 设计区域高度，默认 1334。
 * @property {number} minX 布局有效区域的左边界；水果中心还会按自身半径向内收缩。
 * @property {number} maxX 布局有效区域的右边界；水果中心还会按自身半径向内收缩。
 * @property {number} minY 布局有效区域的下边界。
 * @property {number} maxY 布局有效区域的上边界。
 * @property {number} itemRadius 从原包保留的参考半径，默认 55；当前黑洞容量公式固定使用原包值 55。
 */

/**
 * 单个水果的纯数据描述。调用方应根据 type 实例化预制体，再应用坐标与缩放。
 * @typedef {Object} FruitData
 * @property {number} id 本次生成结果中的唯一编号，从 0 开始。
 * @property {number} queueIndex 水果在打乱后队列中的索引，可用于还原生成顺序。
 * @property {number} type 水果类型编号，对应原包的水果资源/预制体编号，范围通常为 1～33。
 * @property {0|1|2} stage 配置生成批次。它表示三阶段配量中的阶段，不是 Cocos 节点层级。
 * @property {Point} position 水果在关卡容器下的本地坐标。
 * @property {number} radius 布局碰撞半径，已乘入 scaleExp；坐标避让使用该值。
 * @property {number} sourceRadius 原始美术资源的参考半径，未乘缩放。
 * @property {number} scale 建议应用到水果节点的最终缩放值，已乘入关卡 scaleExp。
 * @property {number} particleType 原包使用的粒子效果分类编号。
 * @property {"normal"|"frozen"} status 水果状态；frozen 表示需要挂载冰冻表现/逻辑。
 * @property {number} thawHits 冰冻解除阈值；普通水果固定为 0。
 */

/**
 * 普通障碍物描述。障碍物 Y 轴按关卡高度分段，X 轴在源码区间内随机。
 * @typedef {Object} ObstacleData
 * @property {number} id 障碍物编号。
 * @property {Point} position 障碍物在关卡容器下的本地坐标。
 * @property {1|2|3} variant 障碍物外观/预制体变体编号。
 */

/**
 * 木板障碍物占位数据。目前只恢复出关卡所需数量，最终坐标与朝向应由木板布局逻辑补齐。
 * @typedef {Object} WoodenObstacleData
 * @property {number} id 木板编号。
 */

/**
 * 随机盒子占位数据。目前只恢复出关卡所需数量，实例化位置需由对应玩法逻辑决定。
 * @typedef {Object} RandomBoxData
 * @property {number} id 随机盒子编号。
 */

/**
 * 黑洞描述。
 * @typedef {Object} BlackHoleData
 * @property {number} id 黑洞编号。
 * @property {Point} position 黑洞的固定本地坐标。
 * @property {number[]} fruitTypes 分配给该黑洞的水果类型序列，供黑洞玩法消费或释放。
 */

/**
 * 从 ReferenceMgr 恢复的关卡参数。
 * @typedef {Object} LevelParameters
 * @property {number[][]} typeArr 三阶段水果类型表；typeArr[阶段][索引] 是水果类型。
 * @property {number[][]} countArr 三阶段水果数量表；与 typeArr 同位置一一对应。
 * @property {number} scaleExp 本关统一缩放系数，已体现在 FruitData.scale/radius 中。
 * @property {number} moveDir 水果移动方向：0 无移动、1 默认、2 向左、3 向右。
 * @property {boolean} itemLayout 是否启用特殊道具布局；尾号 6 关卡会启用。
 * @property {boolean} itemConnet 原包保留的拼写，表示是否启用水果连接玩法。
 * @property {number[][]} holeItemTypeArr 每个黑洞所分配的水果类型序列。
 * @property {number} randomBox 本关需要创建的随机盒子数量。
 * @property {number} woodenObs 本关需要创建的木板障碍数量。
 * @property {number} obsCount 本关需要创建的普通障碍数量。
 * @property {number} iceCount 本关目标冰冻水果数量；候选不足时实际数量可能更少。
 * @property {number} level 关卡编号。
 * @property {"normal"|"easy"|"hard"} difficulty 归一化后的难度。
 * @property {number} levelCycle 当前十关组在四组循环中的索引，范围为 0～3。
 * @property {number} totalFruitCount countArr 中所有数量的总和。
 */

/**
 * generateLevel 的可选参数。
 * @typedef {Object} GenerateLevelOptions
 * @property {"normal"|"easy"|"hard"|1|2|3} [difficulty="normal"] 难度名称或原包难度编号。
 * @property {string|number} [seed] 随机种子；传入后，同样参数可稳定复现同一结果。
 * @property {() => number} [rng] 自定义随机函数，返回 [0, 1)；优先级高于 seed。
 * @property {Partial<LayoutConfig>} [layout] 覆盖默认布局尺寸或边界。
 * @property {boolean} [useAlternateSkin=false] 是否使用仅包含前 28 类水果的替代皮肤。
 * @property {boolean} [byteDanceMode=false] 是否启用原包第 2 关的字节平台特殊配置。
 * @property {number} [preferredY] 优先生成区域的 Y 中心；主要用于布局调试。
 */

/**
 * generateLevel 的完整返回值。该对象只包含可序列化数据，不包含 Cocos Node 或 Component。
 * @typedef {Object} LevelData
 * @property {number} level 关卡编号，与传入值一致。
 * @property {"normal"|"easy"|"hard"} difficulty 归一化后的难度。
 * @property {LevelParameters} parameters 原始玩法参数，适合驱动关卡管理器和调试面板。
 * @property {LayoutConfig} layout 本次生成实际使用的布局尺寸和边界。
 * @property {FruitData[]} fruits 已展开、打乱并完成坐标计算的全部水果。
 * @property {ObstacleData[]} obstacles 已带坐标和变体的普通障碍物。
 * @property {WoodenObstacleData[]} woodenObstacles 木板数量占位列表，尚不包含坐标。
 * @property {RandomBoxData[]} randomBoxes 随机盒子数量占位列表，尚不包含坐标。
 * @property {BlackHoleData[]} blackHoles 黑洞列表；仅尾号为 0 的关卡非空。
 */

const MOVE_DIRECTION = Object.freeze({
  NONE: 0,
  DEFAULT: 1,
  LEFT: 2,
  RIGHT: 3,
});

const DIFFICULTY = Object.freeze({
  NORMAL: "normal",
  EASY: "easy",
  HARD: "hard",
});

// 以下三套参数表均为打包产物内 LvConfig 文件的原始数值。
const DIFFICULTY_CONFIGS = deepFreeze({
  normal: {
    lv2Config: {
      oneCreatreN: 17,
      twoCreatreN: 87,
      allCreateN: 174,
      typeBase: 6,
      typeStage: 8,
      lastTypeAdd: 1,
      lastMultiple: 2,
    },
    lv2_3_5Config: {
      typeBase: 6,
      typeStage: 8,
      lastTypeMin: 11,
      lastTypeScale: 10,
      lastMultiple: 2,
      onsNumScale: 0.1,
      TwoNumScale: 0.5,
      num10Base: 100,
      num10Add: 10,
      num30Base: 172,
      num30Add: 2,
      num100Base1: 238,
      num100Base2: 210,
      num100Add1: 2,
      num100reduce1: 5,
      num100Base3: 268,
      num100Add2: 2,
      num100reduce2: 5,
      num100Base1_2: 228,
      num100Base3_2: 248,
      obsMax: 10,
      obsBase: 5,
      obsAdd: 40,
      iceMax: 15,
      iceBase: 7,
      iceAdd: 40,
      woodenObsMax: 6,
      woodenObsBase: 2,
      woodenObsEasylv: 10,
      woodenObsEasyLv2: 2,
    },
    lv4Config: {
      num10Base: 100,
      num30Base: 178,
      num30Add: 20,
      num30reduce: 10,
      num100Base1: 238,
      num100Base2: 210,
      num100Add1: 2,
      num100reduce1: 5,
      num100Base3: 248,
      num100Base4: 238,
      num100Add2: 2,
      num100reduce2: 10,
      onsNumScale: 0.2,
      TwoNumScale: 0.6,
      typeBase: 4,
      typeStage: 9,
      lastTypeMin: 6,
      lastTypeScale: 10,
      lastMultiple: 2,
    },
    lv6Config: { randomMin: 15, randomBase: 5, randomScale: 10 },
    lv7Config: {
      num10Base: 160,
      num30Base: 184,
      num30Add: 20,
      num30reduce: 10,
      num100Base1: 238,
      num100Base2: 210,
      num100Add1: 2,
      num100reduce1: 5,
      num100Base3: 268,
      num100Base4: 238,
      num100Add2: 2,
      num100reduce2: 10,
      onsNumScale: 0.1,
      TwoNumScale: 0.5,
      typeBase: 6,
      typeStage: 8,
      lastTypeMin: 11,
      lastTypeScale: 10,
      lastMultiple: 2,
      randomMin: 15,
      randomBase: 5,
      randomScale: 10,
    },
    lv8Config: {
      num10Base: 170,
      num30Base: 186,
      num30Add: 20,
      num30reduce: 10,
      num100Base1: 238,
      num100Base2: 210,
      num100Add1: 2,
      num100reduce1: 5,
      num100Base3: 248,
      num100Base4: 238,
      num100Add2: 2,
      num100reduce2: 10,
      onsNumScale: 0.1,
      TwoNumScale: 0.5,
      typeBase: 6,
      typeStage: 8,
      lastTypeMin: 11,
      lastTypeScale: 10,
      lastMultiple: 2,
    },
    lv9Config: {
      num10Base: 180,
      num30Base: 188,
      num30Add: 20,
      num30reduce: 10,
      num100Base1: 238,
      num100Base2: 210,
      num100Add1: 2,
      num100reduce1: 5,
      num100Base3: 248,
      num100Base4: 238,
      num100Add2: 2,
      num100reduce2: 10,
      onsNumScale: 0.2,
      TwoNumScale: 0.6,
      typeBase: 6,
      typeStage: 8,
      lastTypeMin: 6,
      lastTypeScale: 10,
      lastMultiple: 2,
    },
    lv10Config: {
      oneTypeStartNum: 0,
      oneTypeEndNum: 4,
      otherTypeStartNum: 4,
      holeMax: 34,
      holeBase: 14,
      holeScale: 10,
      holeAddbase: 4,
    },
  },
  easy: {
    lv2Config: {
      oneCreatreN: 12,
      twoCreatreN: 67,
      allCreateN: 174,
      typeBase: 4,
      typeStage: 6,
      lastTypeAdd: 1,
      lastMultiple: 1,
    },
    lv2_3_5Config: {
      typeBase: 4,
      typeStage: 6,
      lastTypeMin: 7,
      lastTypeScale: 13,
      lastMultiple: 1,
      onsNumScale: 0.15,
      TwoNumScale: 0.5,
      num10Base: 80,
      num10Add: 8,
      num30Base: 140,
      num30Add: 2,
      num100Base1: 200,
      num100Base2: 170,
      num100Add1: 1,
      num100reduce1: 6,
      num100Base3: 220,
      num100Add2: 1,
      num100reduce2: 6,
      num100Base1_2: 190,
      num100Base3_2: 210,
      obsMax: 6,
      obsBase: 3,
      obsAdd: 50,
      iceMax: 10,
      iceBase: 4,
      iceAdd: 50,
      woodenObsMax: 6,
      woodenObsBase: 2,
      woodenObsEasylv: 10,
      woodenObsEasyLv2: 2,
    },
    lv4Config: {
      num10Base: 80,
      num30Base: 150,
      num30Add: 15,
      num30reduce: 12,
      num100Base1: 200,
      num100Base2: 170,
      num100Add1: 1,
      num100reduce1: 6,
      num100Base3: 210,
      num100Base4: 200,
      num100Add2: 1,
      num100reduce2: 12,
      onsNumScale: 0.25,
      TwoNumScale: 0.6,
      typeBase: 3,
      typeStage: 7,
      lastTypeMin: 4,
      lastTypeScale: 13,
      lastMultiple: 1,
    },
    lv6Config: { randomMin: 10, randomBase: 3, randomScale: 13 },
    lv7Config: {
      num10Base: 130,
      num30Base: 155,
      num30Add: 15,
      num30reduce: 12,
      num100Base1: 200,
      num100Base2: 170,
      num100Add1: 1,
      num100reduce1: 6,
      num100Base3: 220,
      num100Base4: 200,
      num100Add2: 1,
      num100reduce2: 12,
      onsNumScale: 0.15,
      TwoNumScale: 0.5,
      typeBase: 4,
      typeStage: 6,
      lastTypeMin: 7,
      lastTypeScale: 13,
      lastMultiple: 1,
      randomMin: 10,
      randomBase: 3,
      randomScale: 13,
    },
    lv8Config: {
      num10Base: 140,
      num30Base: 158,
      num30Add: 15,
      num30reduce: 12,
      num100Base1: 200,
      num100Base2: 170,
      num100Add1: 1,
      num100reduce1: 6,
      num100Base3: 210,
      num100Base4: 200,
      num100Add2: 1,
      num100reduce2: 12,
      onsNumScale: 0.15,
      TwoNumScale: 0.5,
      typeBase: 4,
      typeStage: 6,
      lastTypeMin: 7,
      lastTypeScale: 13,
      lastMultiple: 1,
    },
    lv9Config: {
      num10Base: 150,
      num30Base: 160,
      num30Add: 15,
      num30reduce: 12,
      num100Base1: 200,
      num100Base2: 170,
      num100Add1: 1,
      num100reduce1: 6,
      num100Base3: 210,
      num100Base4: 200,
      num100Add2: 1,
      num100reduce2: 12,
      onsNumScale: 0.25,
      TwoNumScale: 0.6,
      typeBase: 4,
      typeStage: 6,
      lastTypeMin: 4,
      lastTypeScale: 13,
      lastMultiple: 1,
    },
    lv10Config: {
      oneTypeStartNum: 0,
      oneTypeEndNum: 3,
      otherTypeStartNum: 3,
      holeMax: 24,
      holeBase: 10,
      holeScale: 13,
      holeAddbase: 3,
    },
  },
  hard: {
    lv2Config: {
      oneCreatreN: 22,
      twoCreatreN: 107,
      allCreateN: 174,
      typeBase: 8,
      typeStage: 10,
      lastTypeAdd: 2,
      lastMultiple: 3,
    },
    lv2_3_5Config: {
      typeBase: 8,
      typeStage: 10,
      lastTypeMin: 15,
      lastTypeScale: 8,
      lastMultiple: 3,
      onsNumScale: 0.07,
      TwoNumScale: 0.43,
      num10Base: 120,
      num10Add: 14,
      num30Base: 210,
      num30Add: 3,
      num100Base1: 260,
      num100Base2: 230,
      num100Add1: 3,
      num100reduce1: 4,
      num100Base3: 300,
      num100Add2: 3,
      num100reduce2: 4,
      num100Base1_2: 250,
      num100Base3_2: 280,
      obsMax: 15,
      obsBase: 8,
      obsAdd: 30,
      iceMax: 20,
      iceBase: 10,
      iceAdd: 30,
      woodenObsMax: 8,
      woodenObsBase: 3,
      woodenObsEasylv: 8,
      woodenObsEasyLv2: 2,
    },
    lv4Config: {
      num10Base: 120,
      num30Base: 200,
      num30Add: 25,
      num30reduce: 8,
      num100Base1: 260,
      num100Base2: 230,
      num100Add1: 3,
      num100reduce1: 4,
      num100Base3: 280,
      num100Base4: 260,
      num100Add2: 3,
      num100reduce2: 8,
      onsNumScale: 0.15,
      TwoNumScale: 0.55,
      typeBase: 5,
      typeStage: 11,
      lastTypeMin: 8,
      lastTypeScale: 8,
      lastMultiple: 3,
    },
    lv6Config: { randomMin: 20, randomBase: 8, randomScale: 8 },
    lv7Config: {
      num10Base: 190,
      num30Base: 210,
      num30Add: 25,
      num30reduce: 8,
      num100Base1: 260,
      num100Base2: 230,
      num100Add1: 3,
      num100reduce1: 4,
      num100Base3: 300,
      num100Base4: 260,
      num100Add2: 3,
      num100reduce2: 8,
      onsNumScale: 0.07,
      TwoNumScale: 0.43,
      typeBase: 8,
      typeStage: 10,
      lastTypeMin: 15,
      lastTypeScale: 8,
      lastMultiple: 3,
      randomMin: 20,
      randomBase: 8,
      randomScale: 8,
    },
    lv8Config: {
      num10Base: 200,
      num30Base: 215,
      num30Add: 25,
      num30reduce: 8,
      num100Base1: 260,
      num100Base2: 230,
      num100Add1: 3,
      num100reduce1: 4,
      num100Base3: 280,
      num100Base4: 260,
      num100Add2: 3,
      num100reduce2: 8,
      onsNumScale: 0.07,
      TwoNumScale: 0.43,
      typeBase: 8,
      typeStage: 10,
      lastTypeMin: 15,
      lastTypeScale: 8,
      lastMultiple: 3,
    },
    lv9Config: {
      num10Base: 210,
      num30Base: 220,
      num30Add: 25,
      num30reduce: 8,
      num100Base1: 260,
      num100Base2: 230,
      num100Add1: 3,
      num100reduce1: 4,
      num100Base3: 280,
      num100Base4: 260,
      num100Add2: 3,
      num100reduce2: 8,
      onsNumScale: 0.15,
      TwoNumScale: 0.55,
      typeBase: 8,
      typeStage: 10,
      lastTypeMin: 8,
      lastTypeScale: 8,
      lastMultiple: 3,
    },
    lv10Config: {
      oneTypeStartNum: 0,
      oneTypeEndNum: 5,
      otherTypeStartNum: 5,
      holeMax: 44,
      holeBase: 18,
      holeScale: 8,
      holeAddbase: 5,
    },
  },
});

// 默认皮肤的几何参数，来源于 ReferenceLayMgr.originalPt。
// 最终碰撞半径 = 原始半径 × 资源缩放 × 关卡 scaleExp。
const FRUIT_GEOMETRY = deepFreeze({
  1: { radius: 77, scale: 0.51291, particleType: 3 },
  2: { radius: 80, scale: 0.47538, particleType: 0 },
  3: { radius: 78, scale: 0.5004, particleType: 3 },
  4: { radius: 78, scale: 0.4785075, particleType: 2 },
  5: { radius: 75, scale: 0.531675, particleType: 0 },
  6: { radius: 75, scale: 0.56295, particleType: 4 },
  7: { radius: 75, scale: 0.531675, particleType: 0 },
  8: { radius: 75, scale: 0.5004, particleType: 0 },
  9: { radius: 67.6, scale: 0.531675, particleType: 0 },
  10: { radius: 72, scale: 0.56295, particleType: 4 },
  11: { radius: 70, scale: 0.52542, particleType: 0 },
  12: { radius: 75, scale: 0.531675, particleType: 5 },
  13: { radius: 81.5, scale: 0.51291, particleType: 6 },
  14: { radius: 85, scale: 0.5004, particleType: 4 },
  15: { radius: 72, scale: 0.56295, particleType: 6 },
  16: { radius: 77, scale: 0.531675, particleType: 2 },
  17: { radius: 82.7, scale: 0.519165, particleType: 4 },
  18: { radius: 85, scale: 0.5004, particleType: 0 },
  19: { radius: 75, scale: 0.519165, particleType: 6 },
  20: { radius: 64.5, scale: 0.6255, particleType: 3 },
  21: { radius: 85, scale: 0.5004, particleType: 0 },
  22: { radius: 80, scale: 0.51291, particleType: 2 },
  23: { radius: 82.7, scale: 0.47538, particleType: 3 },
  24: { radius: 85.6, scale: 0.481635, particleType: 2 },
  25: { radius: 82, scale: 0.51291, particleType: 4 },
  26: { radius: 82, scale: 0.51291, particleType: 1 },
  27: { radius: 82, scale: 0.51291, particleType: 3 },
  28: { radius: 80, scale: 0.51291, particleType: 1 },
  29: { radius: 89, scale: 0.481635, particleType: 4 },
  30: { radius: 85, scale: 0.481635, particleType: 5 },
  31: { radius: 85, scale: 0.5004, particleType: 6 },
  32: { radius: 89, scale: 0.481635, particleType: 4 },
  33: { radius: 89, scale: 0.48789, particleType: 0 },
});

const DEFAULT_LAYOUT = Object.freeze({
  width: 750,
  height: 1334,
  minX: -368,
  maxX: 368,
  minY: -560,
  maxY: 650,
  itemRadius: 55,
});

function deepFreeze(value) {
  if (!value || typeof value !== "object" || Object.isFrozen(value)) return value;
  Object.freeze(value);
  for (const child of Object.values(value)) deepFreeze(child);
  return value;
}

function assertLevel(level) {
  if (!Number.isInteger(level) || level < 1) {
    throw new TypeError(`level must be a positive integer; received ${level}`);
  }
}

function getDifficultyConfig(difficulty = DIFFICULTY.NORMAL) {
  const key = typeof difficulty === "number"
    ? ({ 1: "normal", 2: "easy", 3: "hard" }[difficulty])
    : String(difficulty).toLowerCase();
  const config = DIFFICULTY_CONFIGS[key];
  if (!config) throw new RangeError(`unknown difficulty: ${difficulty}`);
  return { key, config };
}

/** 创建一个轻量的确定性随机函数，便于评审和测试；正式运行时也可直接传 Math.random。 */
function createSeededRandom(seed) {
  let state = hashSeed(seed);
  return function seededRandom() {
    state |= 0;
    state = (state + 0x6d2b79f5) | 0;
    let value = Math.imul(state ^ (state >>> 15), 1 | state);
    value = value + Math.imul(value ^ (value >>> 7), 61 | value) ^ value;
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function hashSeed(seed) {
  if (typeof seed === "number" && Number.isFinite(seed)) return seed | 0;
  const text = String(seed == null ? 0 : seed);
  let hash = 2166136261;
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash | 0;
}

function resolveRng(options) {
  if (options && options.rng != null) {
    if (typeof options.rng !== "function") throw new TypeError("options.rng must be a function");
    return options.rng;
  }
  return options && Object.prototype.hasOwnProperty.call(options, "seed")
    ? createSeededRandom(options.seed)
    : Math.random;
}

function randomFloat(min, max, rng) {
  return rng() * (max - min) + min;
}

function randomInt(min, max, rng) {
  if (max < min) throw new RangeError(`invalid random range: ${min}..${max}`);
  return Math.floor(randomFloat(min, max + 1, rng));
}

function range(from, to) {
  const result = [];
  for (let value = from; value <= to; value += 1) result.push(value);
  return result;
}

function baseLevelInfo() {
  return {
    typeArr: [],
    countArr: [],
    scaleExp: 1,
    moveDir: MOVE_DIRECTION.DEFAULT,
    itemLayout: false,
    itemConnet: false, // 原包字段就是这个拼写，为保持数据兼容而不做更名。
    holeItemTypeArr: [],
    randomBox: 0,
    woodenObs: 0,
    obsCount: 0,
    iceCount: 0,
  };
}

function getMaxFruitType(requested, useAlternateSkin) {
  return Math.min(useAlternateSkin ? 28 : 33, requested);
}

function getLevelTotal(level, cfg, specialDigitTwo) {
  let cap30To99 = specialDigitTwo && cfg.num100Base1_2 != null
    ? cfg.num100Base1_2
    : cfg.num100Base1;
  let cap100Plus = specialDigitTwo && cfg.num100Base3_2 != null
    ? cfg.num100Base3_2
    : cfg.num100Base3;

  if (level < 10) return cfg.num10Base + cfg.num10Add * (level - 3);
  if (level > 10 && level < 30) return cfg.num30Base + cfg.num30Add * (level - 11);
  if (level > 30 && level < 100) {
    return Math.min(
      cap30To99,
      cfg.num100Base2 + cfg.num100Add1 * Math.floor((level - 30) / cfg.num100reduce1),
    );
  }
  if (level >= 100) {
    return Math.min(
      cap100Plus,
      cap30To99 + cfg.num100Add2 * Math.floor((level - 100) / cfg.num100reduce2),
    );
  }
  return cfg.num10Base;
}

/**
 * 重建 ReferenceMgr 的三阶段水果类型表和数量表。
 *
 * typeArr[stage] 中的每个类型，都与 countArr[stage] 同索引的数量一一对应。
 * 运行时会先按数量展开成单个水果记录，再为每个水果计算坐标。
 */
function buildStages(level, total, cfg, options) {
  const rng = options.rng;
  const info = options.info;
  const useAlternateSkin = Boolean(options.useAlternateSkin);
  const randomOnly = Boolean(options.randomOnly);
  const multiplyFromStage = options.multiplyFromStage;
  const firstTarget = Math.floor(cfg.onsNumScale * total);
  const secondTarget = Math.floor(cfg.TwoNumScale * total);
  const targets = [firstTarget, secondTarget, total];
  let created = 0;

  for (let stage = 0; stage < 3; stage += 1) {
    const types = [];
    const counts = [];
    let typeCount = cfg.typeBase + cfg.typeStage * stage;
    if (stage === 2) {
      typeCount += Math.min(cfg.lastTypeMin, Math.floor(level / cfg.lastTypeScale));
    }
    typeCount = getMaxFruitType(typeCount, useAlternateSkin);

    if (!randomOnly) {
      for (let type = 1; type <= typeCount && created < total; type += 1) {
        let count = 2;
        if (stage >= multiplyFromStage) count *= randomInt(1, cfg.lastMultiple, rng);
        types.push(type);
        counts.push(count);
        created += count;
      }
    }

    while (created < targets[stage]) {
      types.push(randomInt(1, typeCount, rng));
      counts.push(2);
      created += 2;
    }

    info.typeArr.push(types);
    info.countArr.push(counts);
  }
}

function buildLevel2(info, cfg, rng, useAlternateSkin, byteDanceMode) {
  if (byteDanceMode) {
    info.typeArr.push(range(1, 10));
    info.countArr.push(new Array(10).fill(4));
    return;
  }

  let created = 0;
  const targets = [cfg.oneCreatreN, cfg.twoCreatreN, cfg.allCreateN];
  for (let stage = 0; stage < 3; stage += 1) {
    const types = [];
    const counts = [];
    let typeCount = cfg.typeBase + cfg.typeStage * stage;
    if (stage === 2) typeCount += cfg.lastTypeAdd;
    typeCount = getMaxFruitType(typeCount, useAlternateSkin);

    for (let type = 1; type <= typeCount && created < cfg.allCreateN; type += 1) {
      let count = 2;
      if (stage > 1) count *= randomInt(1, cfg.lastMultiple, rng);
      types.push(type);
      counts.push(count);
      created += count;
    }
    while (created < targets[stage]) {
      types.push(randomInt(1, typeCount, rng));
      counts.push(2);
      created += 2;
    }
    info.typeArr.push(types);
    info.countArr.push(counts);
  }
}

function selectFruitTypes(count, useAlternateSkin, rng) {
  const result = range(1, useAlternateSkin ? 28 : 33);
  while (result.length > count) result.splice(randomInt(0, result.length - 1, rng), 1);
  return result;
}

function getHoleCount(level) {
  const decade = Math.floor(level / 10) % 10;
  if (decade === 1) return 2;
  if (decade >= 2 && decade <= 7) return 3;
  return 4;
}

function getHolePositions(level) {
  const decade = Math.floor(level / 10) % 10;
  const positions = {
    1: [[-270, 400], [270, 400]],
    2: [[-270, 180], [270, 180], [0, 450]],
    3: [[-270, 450], [270, 450], [0, 180]],
    4: [[0, 130], [0, 400], [0, 670]],
    5: [[-270, 400], [270, 400], [0, 400]],
    6: [[-270, 130], [270, 670], [0, 400]],
    7: [[-270, 670], [270, 130], [0, 400]],
    8: [[-270, 400], [270, 400], [0, 400], [0, 130]],
    9: [[-270, 400], [270, 400], [0, 670], [0, 130]],
    0: [[-270, 670], [270, 670], [0, 400], [0, 130]],
  }[decade];
  return positions.map(([x, y]) => ({ x, y }));
}

function buildHoleLevel(level, info, cfg, rng, options) {
  info.scaleExp = 0.9;
  info.moveDir = MOVE_DIRECTION.NONE;
  const holeCount = getHoleCount(level);
  const selectedTypes = selectFruitTypes(28, Boolean(options.useAlternateSkin), rng);
  let poolTarget = Math.min(cfg.holeBase + Math.floor(level / cfg.holeScale), cfg.holeMax);
  poolTarget += cfg.holeAddbase * (holeCount - 2);

  // 原包公式：
  // floor((halfGameH - 190 - stopDownY + 100) * width / (55 * PI * 55))
  // 其中 stopDownY = 728 - halfGameH；750x1334 时容量基数为 40。
  const width = options.layout.width;
  const halfHeight = options.layout.height / 2;
  const stopDownY = 728 - halfHeight;
  const layoutCapacity = Math.max(
    poolTarget,
    Math.floor((halfHeight - 190 - stopDownY + 100) * width / (55 * Math.PI * 55)),
  );

  const pool = [];
  let created = 0;
  for (let stage = 0; stage < 2; stage += 1) {
    const types = [];
    const counts = [];
    const start = stage === 0 ? cfg.oneTypeStartNum : cfg.otherTypeStartNum;
    const end = stage === 0 ? cfg.oneTypeEndNum : selectedTypes.length;
    let cursor = start;

    while (created < layoutCapacity && end > start) {
      const type = selectedTypes[cursor];
      const pairCount = rng() > 0.5 ? 2 : 4;
      types.push(type);
      if (stage === 1 && pool.length < poolTarget) {
        pool.push(type);
        counts.push(pairCount - 1);
        created += pairCount - 1;
      } else {
        counts.push(pairCount);
        created += pairCount;
      }
      cursor += 1;
      if (cursor >= end) cursor = start;
    }
    info.typeArr.push(types);
    info.countArr.push(counts);
  }

  while (pool.length < poolTarget) {
    const type = selectedTypes[randomInt(0, selectedTypes.length - 1, rng)];
    pool.push(type, type);
  }
  pool.length = poolTarget;
  pool.sort((a, b) => a - b);

  info.holeItemTypeArr = Array.from({ length: holeCount }, () => []);
  for (let i = 0; i < holeCount && pool.length > 0; i += 1) {
    info.holeItemTypeArr[i].push(pool.pop());
  }
  while (pool.length > 0) {
    info.holeItemTypeArr[randomInt(0, holeCount - 1, rng)].push(pool.pop());
  }
}

/**
 * 生成一份与原包 ReferenceLvInfo 结构兼容的关卡参数。
 *
 * @param {number} level 从 1 开始的关卡编号。
 * @param {GenerateLevelOptions} [options] 难度、随机源和布局等生成选项。
 * @returns {LevelParameters} 尚未展开为单个水果的关卡玩法参数。
 */
function generateLevelParameters(level, options = {}) {
  assertLevel(level);
  const rng = resolveRng(options);
  const { key: difficulty, config } = getDifficultyConfig(options.difficulty);
  const useAlternateSkin = Boolean(options.useAlternateSkin);
  const info = baseLevelInfo();
  const digit = level % 10;
  const cycle = Math.floor((Math.max(1, level - 1) / 10) % 4);

  if (level === 1) {
    info.typeArr.push([1]);
    info.countArr.push([4]);
    return attachParameterMetadata(info, level, difficulty, cycle);
  }

  if (level === 2) {
    buildLevel2(info, config.lv2Config, rng, useAlternateSkin, Boolean(options.byteDanceMode));
    return attachParameterMetadata(info, level, difficulty, cycle);
  }

  if (digit === 0) {
    buildHoleLevel(level, info, config.lv10Config, rng, {
      layout: { ...DEFAULT_LAYOUT, ...(options.layout || {}) },
      useAlternateSkin,
    });
    return attachParameterMetadata(info, level, difficulty, cycle);
  }

  if (digit === 6) {
    const cfg = config.lv6Config;
    info.itemLayout = true;
    info.randomBox = Math.min(cfg.randomMin, cfg.randomBase + Math.floor(level / cfg.randomScale));
    return attachParameterMetadata(info, level, difficulty, cycle);
  }

  let cfg;
  let multiplyFromStage;
  let randomOnly = false;
  if (digit === 4) {
    cfg = config.lv4Config;
    multiplyFromStage = 1;
    info.moveDir = MOVE_DIRECTION.LEFT;
  } else if (digit === 7) {
    cfg = config.lv7Config;
    multiplyFromStage = 1;
    info.randomBox = Math.min(cfg.randomMin, cfg.randomBase + Math.floor(level / cfg.randomScale));
  } else if (digit === 8) {
    cfg = config.lv8Config;
    multiplyFromStage = 1;
    randomOnly = true;
    info.itemConnet = true;
  } else if (digit === 9) {
    cfg = config.lv9Config;
    multiplyFromStage = 1;
    info.moveDir = MOVE_DIRECTION.RIGHT;
  } else {
    cfg = config.lv2_3_5Config;
    multiplyFromStage = 2;

    if (digit === 1 && cycle === 2) {
      info.iceCount = Math.min(cfg.iceMax, cfg.iceBase + Math.floor(level / cfg.iceAdd));
    }
    if (digit === 1 && cycle === 3) {
      info.obsCount = Math.min(cfg.obsMax, cfg.obsBase + Math.floor(level / cfg.obsAdd));
    }
    if (digit === 2) {
      info.scaleExp = 0.9;
      info.woodenObs = cfg.woodenObsBase;
      if (Math.floor(level / cfg.woodenObsEasylv) % cfg.woodenObsEasyLv2 === 0) {
        info.woodenObs = cfg.woodenObsMax;
      }
    }
  }

  const total = getLevelTotal(level, cfg, digit === 2);
  buildStages(level, total, cfg, {
    info,
    rng,
    useAlternateSkin,
    randomOnly,
    multiplyFromStage,
  });
  return attachParameterMetadata(info, level, difficulty, cycle);
}

function attachParameterMetadata(info, level, difficulty, cycle) {
  info.level = level;
  info.difficulty = difficulty;
  info.levelCycle = cycle;
  info.totalFruitCount = sumCounts(info.countArr);
  return info;
}

function sumCounts(countArr) {
  let total = 0;
  for (const stage of countArr) {
    for (const count of stage) total += count;
  }
  return total;
}

function expandFruitQueue(levelInfo) {
  const queue = [];
  for (let stage = 0; stage < levelInfo.typeArr.length; stage += 1) {
    const types = levelInfo.typeArr[stage];
    const counts = levelInfo.countArr[stage] || [];
    for (let index = 0; index < types.length; index += 1) {
      for (let amount = 0; amount < (counts[index] || 0); amount += 1) {
        queue.push({ type: types[index], stage });
      }
    }
  }
  return queue;
}

/**
 * 与原包一致的队列打乱方式：总共交换 queue.length 次，每次都从整个队列
 * 中随机选择交换对象。这里有意不使用 Fisher-Yates，以保留原包的随机特征。
 */
function legacySwapShuffle(items, rng) {
  for (let index = 0; index < items.length; index += 1) {
    const other = randomInt(0, items.length - 1, rng);
    [items[index], items[other]] = [items[other], items[index]];
  }
  return items;
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function isPositionFree(position, radius, placed, spacing) {
  return placed.every((other) => (
    distance(position, other.position) >= (radius + other.radius) * spacing
  ));
}

/**
 * ReferenceLayMgr.getPos() 的独立实现。源码会依次使用三套“间距/尝试次数”参数：
 * 1.25/120、1.0625/80、1.05/50；仍找不到空位时，会选取一个已有水果作为
 * 锚点生成兜底坐标，并将结果限制在关卡边界内。
 */
function findFruitPosition(radius, placed, bounds, rng, preferredY) {
  const minX = bounds.minX + radius + 7;
  const maxX = bounds.maxX - radius - 7;
  let minY = bounds.minY;
  let maxY = bounds.maxY;
  if (Number.isFinite(preferredY) && preferredY > 0) {
    minY = Math.max(preferredY - 0.3 * 290, minY);
    maxY = Math.min(preferredY + 0.7 * 290, maxY);
  }

  const attempts = [
    { spacing: 1.25, count: 120 },
    { spacing: 1.25 * 0.85, count: 80 },
    { spacing: 1.05, count: 50 },
  ];
  for (const phase of attempts) {
    for (let attempt = 0; attempt < phase.count; attempt += 1) {
      const position = {
        x: randomFloat(minX, maxX, rng),
        y: randomFloat(minY, maxY, rng),
      };
      if (isPositionFree(position, radius, placed, phase.spacing)) return position;
    }
  }

  if (placed.length === 0) {
    return { x: randomFloat(minX, maxX, rng), y: randomFloat(minY, maxY, rng) };
  }

  const anchor = placed[randomInt(0, placed.length - 1, rng)].position;
  let dx = randomFloat(-1, 1, rng);
  let dy = randomFloat(0, 1, rng);
  const length = Math.hypot(dx, dy) || 1;
  dx /= length;
  dy /= length;
  const fallbackDistance = Math.max(2.5 * radius, 80);
  return {
    x: clamp(anchor.x + dx * fallbackDistance, minX + 3, maxX - 3),
    y: clamp(anchor.y + dy * fallbackDistance, minY + 20, maxY - 20),
  };
}

function getFruitGeometry(type, scaleExp) {
  const source = FRUIT_GEOMETRY[type] || { radius: 80, scale: 0.5, particleType: 0 };
  return {
    sourceRadius: source.radius,
    scale: source.scale * scaleExp,
    radius: source.radius * source.scale * scaleExp,
    particleType: source.particleType,
  };
}

function generateFruitLayout(levelInfo, options = {}) {
  const rng = options.rng || Math.random;
  const bounds = { ...DEFAULT_LAYOUT, ...(options.layout || {}) };
  const queue = legacySwapShuffle(expandFruitQueue(levelInfo), rng);
  const fruits = [];

  for (let index = 0; index < queue.length; index += 1) {
    const queued = queue[index];
    const geometry = getFruitGeometry(queued.type, levelInfo.scaleExp);
    const position = findFruitPosition(
      geometry.radius,
      fruits,
      bounds,
      rng,
      options.preferredY,
    );
    fruits.push({
      id: index,
      queueIndex: index,
      type: queued.type,
      stage: queued.stage,
      position,
      radius: geometry.radius,
      sourceRadius: geometry.sourceRadius,
      scale: geometry.scale,
      particleType: geometry.particleType,
      status: "normal",
      thawHits: 0,
    });
  }
  return fruits;
}

/** 障碍物在 Y 轴上等分布置，每个障碍物的 X 坐标在 [-208, 208] 内随机。 */
function generateObstacles(count, layout, rng) {
  if (count <= 0) return [];
  const height = layout.maxY - layout.minY;
  const section = height / count;
  return Array.from({ length: count }, (_, index) => ({
    id: index,
    position: {
      x: randomFloat(-208, 208, rng),
      y: layout.minY + section * (index + 0.5),
    },
    variant: randomInt(1, 3, rng),
  }));
}

/**
 * 冰冻候选水果必须位于队列第 30 项之后，且距离关卡顶部至少 400 个单位。
 * 随机抽取时不放回，因此同一水果不会被重复选中。
 */
function applyIce(fruits, count, layout, rng) {
  const candidates = fruits
    .filter((fruit) => fruit.queueIndex >= 30 && fruit.position.y <= layout.maxY - 400)
    .map((fruit) => fruit.id);

  for (let index = 0; index < count && candidates.length > 0; index += 1) {
    const candidateIndex = randomInt(0, candidates.length - 1, rng);
    const fruit = fruits[candidates.splice(candidateIndex, 1)[0]];
    const heightRatio = clamp(
      (fruit.position.y - layout.minY) / Math.max(1, layout.maxY - layout.minY),
      0,
      1,
    );
    fruit.status = "frozen";
    fruit.thawHits = Math.ceil(heightRatio * fruits.length * 0.5) + randomInt(0, 5, rng);
  }
}

function buildBlackHoles(levelInfo) {
  if (levelInfo.level % 10 !== 0) return [];
  const positions = getHolePositions(levelInfo.level);
  return positions.map((position, index) => ({
    id: index,
    position,
    fruitTypes: (levelInfo.holeItemTypeArr[index] || []).slice(),
  }));
}

/**
 * 高层入口。返回值是纯数据对象，可供 Cocos 运行时、测试程序、可视化工具
 * 或关卡导出工具直接消费；函数本身不会实例化任何 Cocos 节点。
 *
 * @param {number} level 从 1 开始的关卡编号。
 * @param {GenerateLevelOptions} [options] 难度、随机源和布局等生成选项。
 * @returns {LevelData} 完整关卡数据，字段用途见文件顶部 LevelData 类型定义。
 */
function generateLevel(level, options = {}) {
  const rng = resolveRng(options);
  const layout = { ...DEFAULT_LAYOUT, ...(options.layout || {}) };
  const sharedOptions = { ...options, rng, layout };
  const parameters = generateLevelParameters(level, sharedOptions);
  const fruits = generateFruitLayout(parameters, sharedOptions);
  applyIce(fruits, parameters.iceCount, layout, rng);

  return {
    level,
    difficulty: parameters.difficulty,
    parameters,
    layout,
    fruits,
    obstacles: generateObstacles(parameters.obsCount, layout, rng),
    woodenObstacles: Array.from({ length: parameters.woodenObs }, (_, id) => ({ id })),
    randomBoxes: Array.from({ length: parameters.randomBox }, (_, id) => ({ id })),
    blackHoles: buildBlackHoles(parameters),
  };
}

function validateLevel(levelData) {
  const errors = [];
  const { parameters, fruits, layout } = levelData;
  if (fruits.length !== parameters.totalFruitCount) {
    errors.push(`fruit count mismatch: ${fruits.length} !== ${parameters.totalFruitCount}`);
  }
  for (const fruit of fruits) {
    if (!Number.isFinite(fruit.position.x) || !Number.isFinite(fruit.position.y)) {
      errors.push(`fruit ${fruit.id} has an invalid position`);
    }
    if (fruit.position.x < layout.minX - 1 || fruit.position.x > layout.maxX + 1) {
      errors.push(`fruit ${fruit.id} is outside horizontal bounds`);
    }
  }
  if (parameters.iceCount > 0) {
    const frozen = fruits.filter((fruit) => fruit.status === "frozen").length;
    if (frozen > parameters.iceCount) errors.push("too many frozen fruits");
  }
  return { valid: errors.length === 0, errors };
}

module.exports = {
  DEFAULT_LAYOUT,
  DIFFICULTY,
  DIFFICULTY_CONFIGS,
  FRUIT_GEOMETRY,
  MOVE_DIRECTION,
  applyIce,
  buildBlackHoles,
  createSeededRandom,
  expandFruitQueue,
  findFruitPosition,
  generateFruitLayout,
  generateLevel,
  generateLevelParameters,
  generateObstacles,
  getHolePositions,
  legacySwapShuffle,
  validateLevel,
};

if (require.main === module) {
  const sample = generateLevel(31, { difficulty: "normal", seed: 20261016 });
  const check = validateLevel(sample);
  console.log(JSON.stringify({
    level: sample.level,
    difficulty: sample.difficulty,
    totalFruitCount: sample.fruits.length,
    obstacleCount: sample.obstacles.length,
    frozenFruitCount: sample.fruits.filter((fruit) => fruit.status === "frozen").length,
    blackHoleCount: sample.blackHoles.length,
    validation: check,
    firstFiveFruits: sample.fruits.slice(0, 5),
  }, null, 2));
}

