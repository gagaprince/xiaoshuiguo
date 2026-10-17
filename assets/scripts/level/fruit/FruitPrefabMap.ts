/**
 * 第 4 步：水果类型（1～33）到预制体资源 UUID 的映射。
 *
 * 资源位于 assets/fruits/fruitN.prefab（主包，无 bundle），
 * UUID 取自各预制体的 .meta，重导入后不变；若资源被移动需重新生成此表。
 */
export const FRUIT_PREFAB_UUID: Readonly<Record<number, string>> = Object.freeze({
    1: '02d42c3d-4c42-4992-a9be-c10836b163fd',
    2: '1481ca07-7554-4ec6-b982-0c50613ebb1b',
    3: '73c8a2b3-9d8e-431b-8b76-bb75e9075ec0',
    4: '1582113b-184a-40b4-be35-c6b8daca950a',
    5: '4a09dcb9-3215-4f37-9294-17779ac0c4a6',
    6: '64c6d7a7-8470-44b4-93b7-f643b3436e89',
    7: 'f0b9fd00-be23-4f96-9e93-fe7f8657ccec',
    8: '78ab6734-4048-423d-b6de-53b3972f4dbc',
    9: '99a7934d-a0b4-45c4-bf25-0fa8790eb3e2',
    10: '26c7625b-9c64-4da9-834e-582e8095ce11',
    11: 'cf4dd2a3-68e7-4c53-85f3-0978ff0d05e0',
    12: '58c2b419-f836-4206-b16d-6b510bb17186',
    13: '33f6109b-9778-41b8-8553-c316f185aaf2',
    14: '79c304c5-21a9-4584-bf9c-10016494b564',
    15: 'e8dbcb07-9ff1-4e4d-a19f-3b21b69f9ff2',
    16: 'f7f3bd4f-e0e0-421b-9ee2-270c969d1dff',
    17: '71d65e7b-c001-4759-b7db-59718fc991c4',
    18: 'c55a7c99-c510-42af-ae55-970763ce2b35',
    19: '77faddf6-8b56-4d66-9dce-8d52e27c813d',
    20: 'ba916717-1459-417e-b7ea-75cff78a6e48',
    21: '038cb180-7eb6-4475-9778-91089d777c3d',
    22: 'b836e05d-cba1-4242-bfd1-f9f05da0519a',
    23: 'e074ee6e-6741-4dc3-b62d-13ad24b189c9',
    24: 'b43ed7c6-4b96-4ad0-908e-c70379e8ec95',
    25: '985207fb-9ebf-4b36-96b9-b9ec7a42c20a',
    26: 'ba803d65-5319-4ac8-9ff9-dd69478d5879',
    27: 'b545144c-07b5-4f39-abc7-e34dd1d6e8c4',
    28: '57485d6c-96be-4b50-b4f9-fa04ff2f8343',
    29: 'e1387a51-7d0b-4bbb-8743-9d46b4a90275',
    30: 'feb5695f-797e-46c5-8668-d755341a75ac',
    31: '05356457-1e5d-4d61-8dc4-bed5b62855f0',
    32: '39e8b602-c47d-45f6-85e6-cd02571f8ade',
    33: 'dd947f5b-c7b5-4a17-a493-bd142ee10cae',
});

/**
 * 物理分组位值（collisionGroups 索引 i 对应运行时 1<<i）。
 * 注意：Cocos 3.8 box2d 后端运行时使用位值而不是数组索引，
 * 且 RigidBody2D.group 赋值后不会同步 fixture，切换分组请用
 * Physics2DGroups.setNodePhysicsGroup（它同时写 collider）。
 */
export const FRUIT_PHYSICS_GROUP = Object.freeze({
    DEFAULT: 1 << 0,
    FRUIT: 1 << 1,
    WALL: 1 << 2,
    OBST: 1 << 3,
    CLICK_FRUIT: 1 << 4,
    GUARDRAIL: 1 << 5,
} as const);

/**
 * 非默认皮肤（curThemeType=2/5）时水果节点的统一显示缩放。
 * 原版 FruitComp.setfruitScale：主题 2/5 固定 0.68，其余非默认皮肤 0.65；
 * 默认皮肤 0 用 originalPt 的逐类型 scale（见 LevelGenerator.getFruitNodeScale）。
 */
export const DEFAULT_FRUIT_SCALE = 0.68;
