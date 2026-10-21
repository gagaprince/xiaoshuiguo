# Level 页面重建计划

> 状态：执行中；第 0～7 步已完成并人肉验收（第 0～6 步 2026-10-17；第 7 步 2026-10-19）。证据梳理见 `tmp/level页逻辑梳理.md`。  
> 创建日期：2026-10-16  
> 最近更新：2026-10-19  
> 目标工程：Cocos Creator 3.8.8，设计分辨率 750 x 1334  
> 实施约定：后续严格按本文步骤推进；每完成一步，先预览并由人工验收，再进入下一步。

## 1. 本轮目标

重建从首页点击“开始游戏”进入 Level 页后的完整玩法，最终形成以下闭环：

1. 首页进入关卡，关卡可退出并返回首页。
2. 按关卡数据生成水果和机关。
3. 水果在主场地中参与物理运动。
4. 玩家点击水果，水果进入下方收集区。
5. 两个相同水果满足条件后配对消除。
6. 更新目标和进度；完成目标后胜利。
7. 收集区达到容量上限后提示失败，并支持重试。
8. 胜利后进入下一关，后续逐步补齐特殊机关、道具、引导和表现。

本文只定义实施顺序和验收标准，不在本步骤修改 Level 页面或游戏逻辑。

## 2. 已确认的工程基础

### 2.1 页面组织方式

游戏使用单个常驻场景 `gameNew.scene`，页面不是通过切换 Cocos Scene 实现，而是动态挂载预制体：

```text
gameNew / Canvas
├─ UI / LoadingLayer
└─ MAIN / Stage
   ├─ 首页：GbzMenuLayer
   └─ 关卡
      ├─ GbzMainLayer     顶部 HUD、退出、技能、关卡提示
      └─ GbzLvCommon      主物理区、目标进度、下方收集区、机关
```

因此后续继续沿用 `Canvas/MAIN/Stage`，不新建 Level Scene。

### 2.2 已有可复用内容

| 内容 | 当前状态 | 后续用途 |
| --- | --- | --- |
| `GbzMenuLayer.prefab` | 首页已能显示，存在 `btn_start` | 绑定进入 Level 的入口 |
| `GbzMainLayer.prefab` | 结构和美术资源完整，原脚本逻辑缺失 | 关卡顶部 HUD 和退出入口 |
| `GbzLvCommon.prefab` | 物理边界、目标、进度、收集区、机关根节点完整 | 核心玩法容器 |
| `GbzFruitDownLayer.prefab` | 下方区域带左右墙和地板 | 点击后水果的收集区域 |
| `fruit1` 至 `fruit33` | 带 Sprite、RigidBody2D 和 PolygonCollider2D | 关卡中的水果实体 |
| 障碍和机关预制体 | `obs1/2/3`、`stake`、`ice`、`holeBg`、`blackBox`、关节等 | 核心闭环稳定后逐个接入 |
| 胜负预制体 | `GbzWin2Layer`、`GbzLoseFullLayer`、`GbzResurgenceLayer` 等 | 结算阶段接入 |
| 碰撞分组 | `fruit`、`wall`、`obst`、`clickFruit`、`guardrail` | 恢复原有物理分层 |

### 2.3 已回溯的关卡生成代码

> 2026-10-17 核对：生成器文件实际为 `tmp/gen.js`（CommonJS，generateLevel(level, options)）；
> 第 3 步已迁移为 `assets/scripts/level/generator/LevelGenerator.ts`，基准样例固化在
> `tmp/level-baselines/level-{1,2}.normal.seed-20261016.json`。

`tmp/gen.js`（文档早期称 recovered-level-layout.js）已恢复以下内容：

- 普通、简单、困难三档参数。
- 按关卡号生成水果类型、数量、阶段和缩放。
- 水果坐标避让和失败后的兜底放置。
- 普通障碍、冰冻、黑洞位置和部分特殊关卡标志。
- 固定随机种子，便于复现问题。

已有两个固定样例：

- `tmp/level-1.normal.seed-20261016.json`：4 个同类水果，适合验证最小闭环。
- `tmp/level-2.normal.seed-20261016.json`：174 个水果，适合验证分阶段生成、物理稳定性和性能。

当前仍未完全恢复的部分：

- 木板障碍的准确位置和方向。
- 随机盒子的准确实例化规则。
- 黑洞吞入、计数或传送的精确行为。
- 点击水果后的精确轨迹、速度和最终配对时机。
- 下方容器的初始容量、解锁容量和复活清理数量。

这些不确定项不得凭空一次性补齐。实现对应步骤前，先回查打包源码、预制体字段、碰撞矩阵和可见资源，再用独立验收关卡确认。

## 3. 重建原则

1. **新逻辑独立实现**：不继续向 `RestoredComponent_*` 空壳中堆逻辑；保留它们仅为兼容现有序列化引用。
2. **先闭环后扩展**：先完成普通水果关卡，再接入障碍、冰冻、黑洞、关节和道具。
3. **数据和表现分离**：关卡生成器不依赖 Cocos 节点；运行控制器只消费生成结果。
4. **固定种子可复现**：开发模式可指定关卡、难度和种子，正式模式再使用正常随机策略。
5. **每一步均可见、可回退**：单步完成后必须能独立预览，不把多个高风险功能捆在一起。
6. **复用已有预制体**：优先补脚本和绑定，不重画已有页面，不破坏节点名、嵌套预制体和美术引用。
7. **真实输入验收**：涉及点击、碰撞和页面切换的步骤，必须通过预览窗口真实点击验证，不能只看层级或日志。
8. **先确认再固化推测**：遇到文档标记为未知的规则，先做证据核对；若仍无法确认，采用可替换的最小实现并在本文记录差异。

## 4. 计划中的代码职责

文件名可在实施时根据工程现状微调，但职责边界保持不变。

| 模块 | 主要职责 |
| --- | --- |
| `GameNavigator` | 首页、Level、胜负面板之间的挂载、卸载和返回 |
| `LevelTypes` | 关卡参数、生成结果、会话状态等类型定义 |
| `LevelGenerator` | 将 `tmp` 生成器迁移为纯 TypeScript，不直接操作节点 |
| `LevelSession` | 当前关卡、难度、目标、已完成数量、容量和胜负状态 |
| `LevelController` | 关卡总流程和状态机，协调各子模块 |
| `LevelView` | 查找和更新 `GbzMainLayer`、`GbzLvCommon` 中已有 UI |
| `FruitFactory` | 按类型加载 33 个水果预制体并提供对象池 |
| `FruitController` | 单个水果的类型、状态、点击、刚体和碰撞行为 |
| `FruitSpawner` | 根据布局数据分阶段生成水果并挂到正确容器 |
| `CollectionController` | 下方收集区占位、排列、容量和释放 |
| `PairResolver` | 同类配对判定、消除顺序和连消事件 |
| `LevelGoalController` | 剩余目标、进度和胜利判定 |
| `LevelMechanicController` | 障碍、冰冻、黑洞、木板、关节等后续机关 |

建议状态机：

```text
Loading -> Ready -> Playing
Playing -> ResolvingPair -> Playing
Playing -> CapacityWarning -> Playing / Lose
Playing -> Win
Win / Lose -> Restart / Next / Home
```

状态切换期间统一锁定输入，避免重复点击、重复消除或同时触发胜负。

## 5. 分步实施与验收顺序

### 第 0 步：建立 Level 基线和调试开关

状态：`[x] 已完成（2026-10-17 重做并验收）`

实现范围：

- 记录当前首页、Level 两个预制体的节点引用和显隐初值。
- 建立开发期关卡参数入口：关卡号、难度、固定种子。
- 明确正式界面中隐藏 `jumpLv`、难度切换、阻尼调节、直接胜利等调试节点。
- 记录现有碰撞矩阵和各预制体的刚体/碰撞体参数，暂不修改。

可见效果：

- 正式页面无变化。
- 开发期可以稳定指定“第 1 关 + normal + seed 20261016”。

验收标准：

- Loading 和 Home 保持现状，无报错。
- 相同参数多次启动得到相同关卡数据。

完成记录：

- 新增 `assets/scripts/level/LevelLaunchConfig.ts`，默认固定为第 1 关、normal、种子 `20261016`。
- 浏览器预览支持 `?level=2&difficulty=hard&seed=12345` 形式覆盖参数；已验证日志读取结果正确。
- Level 实例化后关闭 `btn_Win`、`jumpLv`、`linearDamping` 开发节点。
- 明确关闭恢复场景中默认启用的透明输入拦截层 `UIFade` 和 `BlackInput`，恢复真实按钮点击。
- 已记录基线遗留项：Creator 3.8.8 自带声明文件有 88 条项目外诊断；恢复预制体引用的 `materialAttacked`、`lightMaterial` 两份原版自定义材质缺失。两项均非本步骤引入，当前不影响静态页面导航。

完成记录（2026-10-17 重做）：

- 参数入口仍为 `assets/scripts/level/LevelLaunchConfig.ts`（单例 `LevelLaunchConfig.options`，支持 `override()` 注入），默认第 1 关、normal、种子 `20261016`。
- 调试节点隐藏与拦截层关闭改由 `assets/scripts/nav/GameNavigator.ts` 统一负责：进入 Level 时隐藏 `btn_Win`、`jumpLv`、`linearDamping`，`onLoad` 关闭 `Canvas/UIFade` 与 `Canvas/BlackInput`。
- 碰撞矩阵基线：`settings/v2/packages/project.json` 已含 fruit(2)/wall(4)/obst(8)/clickFruit(16)/guardrail(32)，本步未改动。
- 预制体基线：Home 根 `GbzMenuLayer`（750x1334，开始按钮路径 `main/btn_start`，300x140）；Level 由 `GbzLvCommon`（玩法层 750x1334）+ `GbzMainLayer`（HUD，退出按钮 `btn_exit`）组成，UUID 绑定已固化到场景 Canvas 上的 GameNavigator。
- 遗留缺失材质报错（`materialAttacked`、`lightMaterial`）仍在，不影响静态导航，后续玩法步骤再处理。

### 第 1 步：首页进入静态 Level 页面

状态：`[x] 已完成（2026-10-17 重做并验收）`

实现范围：

- 给首页 `btn_start` 绑定新的导航逻辑。
- 点击后卸载首页，在 `Canvas/MAIN/Stage` 中依次创建 `GbzLvCommon` 和 `GbzMainLayer`。
- 接通 `GbzMainLayer/btn_exit`，先直接返回首页；复杂退出确认放到后续。
- 防止连续点击造成多个 Level 实例。
- 明确两个预制体的层级顺序、全屏尺寸和 SafeArea 行为。

可见效果：

- 点击“开始游戏”立即进入 Level 页面。
- Level 的背景、顶部 HUD、主场地、底部收集区都能显示。
- 点击退出可以返回 Home，再次开始仍只出现一个 Level。

验收标准：

- Home -> Level -> Home -> Level 连续执行至少 3 次，无残留节点和重复事件。
- 750 x 1334、常见窄屏和宽屏下无明显裁切、错位或重叠。
- 本步不生成水果，不实现玩法。

完成记录：

- 扩展 `ShuiguoGameBootstrap`，按需加载 `GbzLvCommon` 和 `GbzMainLayer`，保持单场景 `Canvas/MAIN/Stage` 架构。
- 绑定真实节点 `GbzMenuLayer/main/btn_start` 和 `GbzMainLayer/btn_exit`，Home 与 Level 可双向切换。
- 每次切换先移除并销毁旧页面；导航期间锁定开始按钮，避免快速连点创建重复实例。
- Level 固定按 `GbzLvCommon`、`GbzMainLayer` 顺序挂载，HUD 位于玩法层上方。
- 为窄屏和平板预览收进退出按钮左侧约束，未改动原预制体整体布局。
- 在 Apple iPhone 14 Pro 和 Apple iPad 10.2 预览规格下完成真实点击验证。
- 连续执行 3 轮 Home -> Level -> Home：Home 始终为 1 个 `GbzMenuLayer`，Level 始终为 2 个节点 `GbzLvCommon`、`GbzMainLayer`，没有重复实例。
- 当前 Level 仍使用预制体默认关卡文案和静态 HUD，不生成水果；关卡号、目标和进度的校准属于第 2 步。

完成记录（2026-10-17 重做）：

- 导航从 Bootstrap 抽离为独立组件 `assets/scripts/nav/GameNavigator.ts`，挂在场景 Canvas；`ShuiguoGameBootstrap.showHome()` 改为委托给它，Loading 结束链路不变。
- GameNavigator 在 Inspector 绑定 `stage=Canvas/MAIN/Stage`、`homePrefab=GbzMenuLayer`、`levelCommonPrefab=GbzLvCommon`、`levelHudPrefab=GbzMainLayer`；场景组件和 Prefab 引用已保存进 `gameNew.scene`，无 MissingScript。
- 点击 `GbzMenuLayer/main/btn_start`（TOUCH_END）卸载 Home，按 `GbzLvCommon` 在下、`GbzMainLayer` 在上的顺序实例化 Level；`GbzMainLayer/btn_exit` 直接 `backHome()` 销毁 Level 并重建 Home。
- `navigating` 锁 + `levelCommon` 非空守卫双重防连点；Home 实例只建一次并缓存，Level 返回时销毁置空，保证同一时刻只有一套页面。
- 验收：预览（iPhone 14 Pro 模拟规格）中由人工真实点击完成 3 轮 Home -> Level -> Home 往返，Level 背景/HUD/主场地/底部收集区正常显示，无重复实例、无控制台新增报错，进入时输出 `[LevelLaunch] level=1 difficulty=normal seed=20261016`。
- iPad/宽屏规格本轮未重新人工点验，留待第 2 步校准静态 UI 时一起覆盖；本步未改任何预制体布局与 Widget。

### 第 2 步：校准 Level 静态 UI 和初始状态

状态：`[x] 已完成（2026-10-17）`

实现范围：

- 复用预制体中的 `levelBg/labLevel`、`fruitTextBg/labFruit`、`progressBg/fillImg/labProgress`。
- 显示当前关卡号，并给目标、百分比填入可验证的临时数据。
- 将 `leaderTip`、`dirtectionTip`、`full`、闪电、胜负和开发调试节点设为正确的初始隐藏状态。
- 检查顶部 HUD 与主游戏区是否由各自的 Widget/SafeArea 唯一控制，消除布局冲突。

可见效果：

- Level 页面布局完整，关卡号、目标数、进度条位置正确。
- 页面刚进入时不会误显示“装不下啦”、教程或特殊机关提示。

验收标准：

- UI 文本不会溢出或遮挡。
- 进度条在 0%、50%、100% 三个测试值下均正确显示。
- 本步仍不实现水果交互。

完成记录（2026-10-17）：

- 新增 `assets/scripts/level/LevelView.ts`，由 `GameNavigator.showLevel()` 在实例化 `GbzLvCommon` 后 `addComponent` 挂载（运行时挂载，不改预制体序列化）；对外提供 `setLevel/setGoalRemain/setProgress`，供后续 `LevelController` 复用。
- 关卡号：`game/levelBg/labLevel` 设为“第 N 关”（N 取 `LevelLaunchConfig.options.level`）。子节点 `labLevel copy` 经反混淆核实是“城市名 + 关卡名”小字（`CityConfig`，见 GameMgr.ts.js:880），不是重复文案；城市主题系统接入前置空，消除了两条文案重叠的问题。
- 初始隐藏：`game/dirtectionTip`（方向教学，预制体原为可见）、`game/full`（“装不下啦”，原为可见）、`game/leaderTip`（预制体已隐藏，双保险）、`game/levelBg/img`（移动方向图标，第 1 关 arrangeType=1 不显示，与 GameMgr.start 逻辑一致）。HUD 侧 `timer/ticket/c_item/levelTips/lightningNode/animNodes` 预制体本就 [H]，`btn_Win/jumpLv/linearDamping` 已在第 1 步由 GameNavigator 隐藏。
- 剩余目标 `game/fruitTextBg/labFruit` 直接给整数；进度 `game/progressBg/labProgress` 文案格式与原版一致为 `整数 + " %"`（GameMgr.updateFruitText: `(100*n).toFixed(0)+" %"`）。
- 重要修正：`game/progressBg/fillImg`（cc.Sprite FILLED，fillType=VERTICAL）在预制体中本就没有 spriteFrame——原版进关时由 `GameMgr.getImgFill()` 按城市主题（`CityConfig`+`setSpriteFrameAsync`）异步加载 fillBg/fillImg 贴图。直接写 fillRange 会触发引擎 `BarFilled.updateUVs` 读 null 报错并中断后续文案赋值；已按原版写法加 `spriteFrame` 判空保护，当前无报错，待城市主题系统接入后填充自动生效。
- 布局核查：GbzLvCommon 根 Widget 未启用对齐（仅 SafeArea + 全屏 750x1334），game 与 GbzMainLayer 根 Widget 同样无对齐，两层全屏叠放、互不约束；各 HUD 元素自带 Widget。不存在双重控制冲突，本步未改任何 Widget/预制体布局。
- 开发开关：`?autolevel=1`（Loading 后直接进 Level，免点击）、`?uigoal=N&uiprogress=M`（注入临时目标数/百分比）、`?uifill=1`（主题贴图未接入时借用 progressBg 底板临时显示竖向填充，仅供进度三档肉眼验收）。
- 验收（自动截图 + 控制台日志）：iPhone 14 Pro 规格下 0% 无填充、50% 填充约半槽、100% 满槽，文案分别为 `0 %/50 %/100 %`，三档均无 BarFilled/TypeError；纯 `?autolevel=1` 初始态显示“第 1 关 / 剩余 0 / 0 %”，无方向提示与失败提示。Apple iPad 10.2 宽屏下画面按 750 逻辑宽等比居中，关卡条/剩余/进度/退出/技能按钮位置正确，无裁切、错位、重叠。
- 遗留（非本步引入）：城市主题进度贴图、`labLevel copy` 城市名待 CityConfig/主题系统步骤接入；既有 `materialAttacked/lightMaterial` 缺失材质报错与引擎 .d.ts 88 条诊断不变。

### 第 3 步：迁移并验证关卡生成器

状态：`[x] 已完成（2026-10-17）`

实现范围：

- 将 `tmp/recovered-level-layout.js` 迁移为带类型的纯 TypeScript 模块。
- 保留 normal/easy/hard、阶段、缩放、移动方向、冰冻、障碍和黑洞数据字段。
- 将随机数作为依赖传入，开发期支持固定种子。
- 增加数据校验：数量必须为偶数、类型合法、坐标有限、ID 唯一、位置在边界内。
- 用已有 JSON 样例做回归基准，不在迁移时顺手改变算法。

可见效果：

- Level 页面可显示“第 1 关共 4 个水果”和“第 2 关共 174 个水果”等真实生成结果。
- 暂不实例化水果。

验收标准：

- 第 1、2 关在固定种子下与现有样例的关键字段一致。
- 连续生成一批代表性关卡时不出现奇数配量、越界坐标或重复 ID。
- 木板和随机盒子的未知字段继续明确标记为待恢复，不伪造坐标。

完成记录（2026-10-17）：

- 新增 `assets/scripts/level/generator/LevelTypes.ts`（Point/FruitData/LevelParameters/LevelData/GenerateLevelOptions 等纯数据类型）与 `assets/scripts/level/generator/LevelGenerator.ts`（`tmp/gen.js` 的带类型迁移，约 1100 行）；算法、数值常量、随机流程逐行保留，迁移中不改任何公式。
- 公开 API：`generateLevel(level, options)`、`validateLevel(data)`、`generateLevelParameters`、`createSeededRandom` 等；rng 仍为依赖注入（`seed` 或 `rng`），开发期固定种子可复现。
- `validateLevel` 在原校验（总数一致、坐标有限、X 越界、冰冻数量）基础上补齐第 3 步要求：每种水果类型必须为偶数、类型 1～33、Y 边界、ID 唯一、radius/scale 为正、冰冻 thawHits、障碍数量与变体、尾号 0 关黑洞及分配数量一致。
- 新增 `assets/scripts/level/LevelSession.ts`：按 `LevelLaunchConfig` 生成并校验 LevelData 的最小会话；`GameNavigator.showLevel()` 进关时创建会话并 `levelView.bindLevelData(data)`，返回首页时随 Level 一起释放。
- 运行链路：`LevelView` 绑定真实数据后，`labFruit` 初始为 `fruits.length`（剩余目标=总数）、进度 0；控制台输出 `[LevelGen] 第 N 关共 M 个水果；阶段=…；moveDir/scaleExp/障碍/木板/随机盒/黑洞/冰冻` 摘要。`?uiprogress` 仍可临时覆盖进度做 UI 验收。
- 基准与回归：固化 `tmp/level-baselines/level-1.normal.seed-20261016.json`（4 个）、`level-2...json`（174 个）；一键脚本 `node tmp/verify-level-generator.cjs` 会先编译 TS，再对比基准，并在 level 1～120 × normal/easy/hard × 4 组种子共 1440 组用例上做 TS 版与 `tmp/gen.js` 的逐字段深度对比 + 校验，结果全部通过（0 diff、0 invalid）。
- 预览验收（`?autolevel=1&level=N`）：第 1 关显示“第 1 关 / 剩余 4 / 0 %”，日志 `共 4 个水果；阶段=4`；第 2 关显示“第 2 关 / 剩余 174 / 0 %”，日志 `共 174 个水果；阶段=18/70/86`；均无报错，且不实例化水果。
- 待恢复项保持不伪造：木板/随机盒仍只输出数量占位（`woodenObstacles/randomBoxes` 的 `{id}`），无坐标朝向；黑洞计数/传送精确行为未补；`labLevel copy` 城市名与进度填充贴图仍待城市主题系统。
- 类型迁移备注：FruitData.stage、ObstacleData.variant 使用 number 而非字面量联合，避免给逐行保留的 JS 实现引入人为收窄；`deepFreeze` 用 `Object.keys` 遍历以兼容当前 lib target。

### 第 4 步：实例化水果并还原第 1 关画面

> 源码修正（2026-10-17）：原版第 1 关是 12 个水果的教学关，不是 4 个草莓。
> GameMgr.firstLevel：firstLevelIDS=[[9,9,9,9],[1,1,1,1],[2,2,2,2]] 三行四列，
> 定位点 firstLevel/pos1..3/pos1..4，含手指引导与两轮教学，fruitTotalNum=12。
> 4 水果最小闭环只作为开发自测布局，正式第 1 关须按 firstLevel 还原。

状态：`[x] 已完成（2026-10-17，人肉验收）`

实现范围：

- 建立 1 至 33 类型到水果预制体的映射和对象池。
- 将生成结果中的类型、坐标、缩放、阶段、状态写入水果实例。
- 开发自测可先用 4 个同类水果；正式第 1 关按 firstLevelIDS 生成 12 个
  （fruit9/fruit1/fruit2 各 4），挂载到 `firstLevel/pos*` 而不是 `game/fruits`。
- 为每个实例绑定稳定 ID，便于日志、点击和回收定位。
- 生成阶段暂时冻结或暂停物理，先验证视觉和坐标。

可见效果：

- 进入第 1 关后能看到 4 个草莓，位置和大小稳定。
- 多次以相同种子进入，布局完全一致。

验收标准：

- 水果图片、缩放、锚点和层级正确，无空白节点。
- 退出或重开后旧水果全部回收，不叠加、不泄漏事件。
- 本步点击水果无反应，属于预期。

完成记录（2026-10-17）：

- 新增 `assets/scripts/level/fruit/FruitPrefabMap.ts`：1～33 类型→预制体 UUID 映射
  （UUID 取自 assets/fruits/fruitN.prefab.meta）、物理分组常量
  （fruit=1 / wall=2 / obst=3 / clickFruit=4 / guardrail=5，以
  settings/v2/packages/project.json collisionGroups 为准）、
  `DEFAULT_FRUIT_SCALE=0.68`（原版 curThemeType=2 的 setfruitScale 固定值）。
- 新增 `FruitFactory.ts`：按 UUID `assetManager.loadAny` 懒加载+缓存+并发去重，
  `preload(types)`；池接口（acquire/release）按对象池形态预留，当前直接销毁。
- 新增 `FruitEntity.ts`（@ccclass('FruitEntity')）：字段 id/pairId/fruitType(kind)/
  stage/radius/isCanTouch；setup 写缩放并把 RigidBody2D 置 group=fruit、Static；
  `unfreeze()` 预留给第 5 步解冻物理。
- 新增 `FruitSpawner.ts`（挂 GbzLvCommon 根，GameNavigator.showLevel 时 addComponent）：
  第 1 关按 firstLevelIDS=[[9×4],[1×4],[2×4]] 挂到 game/firstLevel/pos1..3/pos1..4，
  pos2/pos3 初始 y=height/2+500=1167 屏外（第四轮教学才移入，属原版设计）；
  其余关按生成器 FruitData 挂 game/fruits，坐标/缩放/stage/冰冻 kind 取生成结果；
  spawn() 返回真实总数（第 1 关 12）供 LevelView.bindInitialGoal。
- GameNavigator 进关时 addComponent(FruitSpawner) 并 spawn(data)；
  退出/重开随 levelCommon 子树整体销毁，spawned 数组 onDestroy 兜底 clear。
- 大坑修复：恢复出的 33 个水果预制体根节点 `_layer=2`（GIZMOS，子包遗留），
  不在场景相机 visibility 内导致"水果逻辑存在但完全不渲染"。双层修复：
  (1) 33 个 prefab 文件 `_layer` 批量改为 33554432（UI_2D）并 refresh-asset
  （library 导入缓存已确认更新）；(2) FruitSpawner.syncLayer 递归同步子树 layer 兜底。
- 人肉验收（全新 cb 标签页，Home→开始游戏 常规路径）：第 1 关中央显示第 1 行 4 个草莓
  （菱形四点 (0,23)/(±66,83)/(0,149)，scale 0.68），剩余 12、0%，无报错；
  autolevel 路径同画面。第 2、3 行屏外为教学设计。

### 第 5 步：启用主场地物理和移动方向

状态：`[x] 已完成（2026-10-17，人肉验收通过）`

实现范围：

- 恢复水果刚体、墙体、障碍和护栏所需碰撞分组。
- 验证 `fruit`、`wall`、`obst`、`clickFruit`、`guardrail` 的矩阵关系。
- 先实现默认方向，再分别验证向左、向右和向下关卡参数。
- 设置生成保护期，避免水果创建瞬间互相穿透或高速弹飞。
- 使用第 2 关验证 174 个水果同时存在时的稳定性。

可见效果：

- 水果在场地边界内自然运动和碰撞，不穿墙、不离开屏幕。
- 不同移动方向有对应提示或明显运动趋势。

验收标准：

- 第 1 关运行 60 秒无水果越界。
- 第 2 关完成生成后无持续抖动、爆炸式弹飞或明显卡顿。
- 物理参数调整记录到本文，避免后续无法复现。

完成记录（2026-10-17）：

- 新增 `assets/scripts/level/LevelPlayfield.ts`（挂 GbzLvCommon 根，GameNavigator
  进关时 addComponent 并 enter），对齐原版 GameMgr 的物理子集；
  扩展 `FruitEntity.ts`（圆形碰撞体/刚体参数/保护期动画/checkBound 表现/autoDrop），
  `FruitSpawner.ts` 增加 `spawnComplete` Promise 与 `entities` 访问器。
- 碰撞分组结论（用 wxrestore 解码原包
  `subpackages/game/import/0d/0d785ed53.json` 实证）：原包预制体中**所有墙体**
  RigidBody2D.group 都是默认 0（DEFAULT），只有 left/right 在 initWall 运行时切到
  DEFAULT(0) 或 guardrail(5)。碰撞矩阵维持 project.json 现状：
  DEFAULT=19(碰 DEFAULT/fruit/clickFruit)、fruit=31、wall=2(仅 fruit)、
  obst=18、clickFruit=59、guardrail=16(仅 clickFruit)；世界重力 (0,-10)。
  分组索引：DEFAULT=0 / fruit=1 / wall=2 / obst=3 / clickFruit=4 / guardrail=5
  （注意 FruitConfig.RB_GROUPS 的 1/2/4/8/16/32 是 2.x 风格位掩码，3.8 的
  RigidBody2D.group 要用索引，已在 FruitPrefabMap.FRUIT_PHYSICS_GROUP 转换）。
- 水果碰撞体（对齐 FruitComp.init）：实例化后禁用预制体 PolygonCollider2D，
  新增 CircleCollider2D（radius=UITransform.width/2，density=1、friction=0、
  restitution=0、非 sensor）；174 体同关时圆碰撞显著更稳。
- 生成保护期（对齐 FruitComp.anim/setRigType）：水果 scale 0 +
  Dynamic(gravityScale=0, allowSleep=true, bullet=false)，播放 1.3s backOut
  弹出动画（重叠轻微分离），结束统一 Static；刚体 zeroVelocity/angularDamping=0/
  linearDamping=0；点击下落时才 Dynamic(gravityScale=13, allowSleep=false,
  bullet=true，第 6 步用）。
- initWall/hideWall 逐 case 移植（arrangeType 0 静止/1 下移/2 右移/3 左移）：
  0=四边墙全显且 line 隐藏；1=仅 left/right（生成后再隐藏 top/bottom）；
  2=line 在 x=+305、right=DEFAULT、left=guardrail、top/bottom 显；3=镜像 line=-305；
  left/right 初始位置 ±(375+100)=±475（与预制体一致）。
- 场地移动（非物理，单 tween 驱动 setPosition，Static 刚体随节点变换）：
  下移关 fruitDown 每 1s 尝试，条件"最高水果 ≥ halfH-250(417) 且最低水果距
  boundaryLine.y+10 空隙 >20"才整体下移，时长 max(0.4, S/600)，isDowning 加锁，
  第 1 关不调度；左右移关开局 fruitMove(true) 向 line 靠拢（最近距离>baseY=120
  才移，时长 max(0.15, e/1050)），后续每次点击步进 7px 的入口已预留
  （fruitMove(false)，第 6 步接）。
- checkBound/fruitDrop 移植：右移关 x<-345、左移关 x>345 的护栏外侧水果压暗
  （UIOpacity 125 + 色值 65，isCanTouch=false），其余正常；|x-line.x|<50 的水果
  autoDrop：保持 fruit 分组、Dynamic(gravityScale=13, bullet) 自动落入漏斗。
  本步不绑触摸、不入槽、不配对。
- 调试开关：LevelLaunchConfig 增加 `?movedir=0..3`（横向关 4/9 生成器数据表为空，
  用 level=10 的 40 水果布局覆盖方向来验收；仅影响墙体/移动，不改生成数据）。
  代表关：moveDir 0→第 10 关、1→第 1/2 关、2/3 生成器无数据。
- 顺带修复：FruitPrefabMap 的 UUID 表有 3 处抄写错误（fruit15 截断、
  fruit16 漏字符、fruit20 段错位），已改为从 33 个 prefab.meta 重新生成并逐个
  核对 library 文件存在；FruitFactory.preload 改 allSettled 容错、
  FruitSpawner 单个水果加载失败只跳过该水果不中断整关（原 bug 会导致第 2 关
  水果全不显示并 404）。
- 自动验证（autolevel 新 cb 标签页截图）：第 1 关 4 草莓 Static 稳定；
  第 2 关 174 水果全部显示、布局整齐、间隔 20s 两帧完全一致、FPS 60 无报错；
  movedir=2 右移：line 右侧、右侧水果 autoDrop 落入漏斗后静止；movedir=3 左移镜像；
  moveDir=0 静止：四边墙、line 隐藏、40 水果不动。tsc 项目代码 0 诊断。
- 物理参数（便于复现）：世界重力 (0,-10)；水果重力倍率 13（仅点击/自动下落）；
  碰撞体 density=1 / friction=0 / restitution=0；linearDamping=0、angularDamping=0；
  保护期 1.3s backOut；下移判定 halfH-250、步进阈值 20、S/600（下限 0.4s）；
  横移步距 7、靠拢基准 120、e/1050（下限 0.15s）、步进 0.1s；越线阈值 |dx|<50；
  护栏外侧阈值 ±(halfW-30)。
- 人肉验收修正（2026-10-17）：第 2 关大量水果出生在下方漏斗砖墙内侧。根因是
  生成器在整屏 `minY=-560..maxY=650` 全随机撒点，而原版
  ReferenceLayMgr.genLvMapData 是从 `_bottomY=boundaryLine.y`（Widget 对齐后
  35.674）向上按阶段带状堆放。已按原版重写 `generateFruitLayout`
  （`LevelGenerator.ts` 与 `tmp/gen.js` 同步）：
  - `LayoutConfig` 增加 `bottomY`，`DEFAULT_LAYOUT.minY/bottomY=35.674`；
  - 每阶段一条水平带，带高 `N*PI*55^2*scaleExp/gameW`；DOWN 关逐带累加，
    NONE 关单阶段带顶=halfH-140、多阶段 `min(累加值, halfH-140)`，
    LEFT/RIGHT 暂保持全范围（GridManager 横带未移植，数据表为空）；
  - 阶段展开后的打乱由整队列交换改为原版 `shuffleArray` 的 Fisher-Yates
    （尾向、与 [0,i] 闭区间交换）；
  - 冰冻/障碍分布改用实际水果纵向范围 `[bottomY, max(650, 实际最高)]`；
  - validate 放宽水果 maxY（带顶允许超出屏顶，原版设计靠 fruitDown 下移），
    仅保留 x 边界与 y≥minY 校验。
  回归：重新冻结 level-1/2 基线，`node tmp/verify-level-generator.cjs`
  1440 组 TS↔JS 逐字段 0 diff、validate 全过；L2 预览最低水果 y≈40，
  漏斗砖墙内无水果，20s 稳定 FPS 60；L1 教学布局不受影响。
- 人肉验收修正二（2026-10-17，两个问题）：
  - **左右移关越线水果水平飞出屏幕**：原版 `GameMgr.hideWall` 对**所有**
    arrangeType 都执行 `bottomWall.active=false`（仅 arrangeType=1 额外隐藏
    top），之前只在下移关隐藏 bottom，导致 autoDrop 水果落到 y=-7 的 bottom
    大板上被支撑、在 friction=0 表面水平滑走。已改为无条件隐藏 bottom；
    `?movedir=2/3` 实测越线水果垂直落入中央漏斗并在槽口堆积。
  - **水果贴边出屏**：原版 `getPos` 的 x 范围是逐水果
    `[-halfW + r + 7, halfW - r - 7]`，之前 `DEFAULT_LAYOUT.minX/maxX`
    预扣成 ±368 又在 findFruitPosition 内再加 r+7，等于多扣/少扣错位。
    已改回 ±375（750 宽），x 范围完全交由 findFruitPosition 按水果半径
    计算；兜底 clamp 与原版 `-s+r+10 / s-r-10` 一致。
  - **几何链核对结论**：原包 prefab（subpackages/fruits，UUID 与
    FruitPrefabMap 相同）根 UITransform 即 133~171 宽，与重建工程一致；
    运行时视觉半径 = width/2 * originalPt.scale ≈ 38~40，摆放碰撞半径
    `R*S` 也是同一值，水果大小本来就与原版一致（"偏大"观感主要来自出界
    与重叠）。注意 scaleExp=0.9 只影响带状堆放密度，**不缩单个水果**；
    `getFruitGeometry` 已去掉 scaleExp 乘法。
  - **第 1 关缩放修正**：默认皮肤 useSkinId=0 时 setfruitScale 用
    originalPt.scale（教学关同理），之前误用主题 2 的固定 0.68；
    spawnFirstLevel 改用 `getFruitNodeScale(type)` 逐类型取值。
  - **数量公式修正**：原版 ReferenceMgr.initLvCfg 在 level<10 时，
    尾数 4/7/8/9 直接取 `num10Base` 不做 num10Add 递增（第 9 关=180），
    只有 1/2/3/5 用 `num10Base + num10Add*(t-3)`；之前 lv9 算出 228、
    lv4/7/8 为 NaN→0 水果。已按尾数区分。
  - **MOVE_DIRECTION 枚举对齐原版**：NONE=0/DOWN=1/RIGHT=2/LEFT=3
    （之前本地标签 LEFT/RIGHT 反了，数值语义巧合正确，已改名并在
    L1/L2/L4/L9 显式赋值，避免第 6 步踩坑）。
  - 回归：再次重冻结 level-1/2 基线（x 范围有意变化），
    `node tmp/verify-level-generator.cjs` 1440 组 0 diff、validate 全过；
    L4=102/RIGHT、L7=160、L8=170、L9=180/LEFT、L10=42/NONE 均与原包
    公式吻合；tsc 0 诊断；临时 dropdbg 覆盖层已全部移除。
  - 已知遗留（不影响第 5 步验收）：左右移关原版用 GridManager 屏幕外
    纵向分区（getPos2/getPos3、parts）初始堆放，目前仍是全宽带状堆放 +
    开局 fruitMove(true) 靠拢；斜坡 hitPower 内向力（125±20）未移植，
    实测靠斜坡几何+重力已能汇入中央，第 6 步入槽验收时再决定是否补。

### 第 6 步：点击水果并进入下方收集区

状态：`[x] 已完成（2026-10-17，自动点击回归 + 人肉验收通过）`

完成记录（2026-10-17，自动点击回归 + 人肉验收）：

- 点击链：`FruitEntity.bindInput` 绑 TOUCH_START（isNoLg/status/isCanTouch/isTouch
  门禁，event.propagationStopped），点击后 clickTween（UITransform 0.95 回弹）、
  切 clickFruit 分组、`setRigType(Dynamic, g=13, bullet)` 下落；接触 floor/
  btnFirstWall/btnSecondWall（BEGIN_CONTACT 与 POST_SOLVE 双判定）入槽，
  去重写 isInSlot 并入 `inSlotEntities`（第 7 步配对消费）。
- 左右移关入槽后 `fruitMove(true)` 重新靠拢；自动下落（autoDrop）保持 fruit 分组。
- **运行时物理分组必须用位值**：Cocos 3.8 的 group 是 1<<index
  （DEFAULT=1/fruit=2/wall=4/obst=8/clickFruit=16/guardrail=32），不是索引；
  `FRUIT_PHYSICS_GROUP` 已改为位值。
- **重建工程的 physics2d 碰撞矩阵不会注入运行时**（实测
  `PhysicsSystem2D.instance.collisionMatrix` 为引擎默认值，仅 bit1 掩码=1），
  导致早期“点击水果 maskBits=0 穿透一切”。新增 `Physics2DGroups.ts`：
  `ensurePhysics2DMatrix()` 玩法启动幂等安装 [19,31,2,18,59,16]；
  `setNodePhysicsGroup` 同时写 RigidBody2D 与 collider 的 `_group`
  （两个 setter 都不能运行时直接用：body setter 不同步 fixture；
  collider setter 立即 Refilter，同帧节点激活切换会让 box2d 代理错乱），
  再在下一帧（b2 body 已创建后）`applyNodePhysicsGroup` 重建 fixture；
  不能在激活首帧 apply，否则 fixture 被挂到 groundBody。
- **接触回调内禁止 collider.apply()**：world step 期间 IsLocked，
  `_destroy` 先把 m_userData 置空再 DestroyFixture 会抛异常，留下空代理，
  bullet 的 SolveTOI 随后 `PhysicsContact.init` 空指针崩溃。
  canCheck 的 friction 0.2 改为只改 `IPhysics2DContact.setFriction(0.2)`。
- 回归：第 1 关连点 2 个草莓均落入漏斗；L10 右移关护栏压暗/越线自动下落/
  密集场景快速连点 3 个水果零报错、无穿透无重复；
  `verify-level-generator.cjs` 1440 组全绿；tsc 0 诊断。
- 已知遗留（表现层，后续步骤）：冰冻水果点击的 iceTip 气泡、落地音效/粒子、
  教学关第 2/3 行按教学轮次移入（当前只放第 1 行 4 个）。

实现范围：

- 给可操作水果绑定触摸命中，增加点击防抖和状态锁。
- 点击后将水果从 `fruit` 状态切换为 `clickFruit` 状态。
- 根据原包证据确定采用物理下落、引导移动或两者组合的路径。
- 水果最终进入 `FruitDownLayer`，由 `CollectionController` 分配稳定位置。
- 冰冻、机关占用或正在消除的水果暂时不可重复点击。

可见效果：

- 点击任意可操作水果后，它离开主场地并落入底部容器。
- 同一个水果连续点击只处理一次。

验收标准：

- 快速连续点击多个水果时顺序稳定，无重复实例、丢失或穿透底部。
- 点击空白区域不产生状态变化。
- 退出或重开期间点击不会触发已销毁节点的回调。

### 第 7 步：两个相同水果配对并消除

状态：`[x] 已完成（2026-10-19，自动回归 + 人肉验收通过）`

实现范围：

- 在收集区到位后触发配对判断。
- 两个相同类型水果形成一对，锁定输入、播放靠拢/消失反馈并回收到对象池。
- 消除后释放两个容量位置并重排剩余水果。
- 用事件更新已消除数量，避免 UI、配对和关卡控制器互相直接改状态。
- 先完成基础动画；连消音效和复杂粒子放到后续表现步骤。

可见效果：

- 第 1 关依次点击两个草莓后，两者在下方配对并消失。
- 再点击另外两个草莓后完成第二次消除。

验收标准：

- 一对水果只结算一次。
- 消除过程中继续点击不会破坏队列。
- 不同类型水果不会错误配对；相同类型后续到达时能正确匹配。

完成记录（2026-10-19，自动点击回归）：

- 新增 `CollectionController.ts`：对齐原版 GameMgr 的 fruitsInSlotComp/addInSlotFruit/
  checkID F 分支/fruitTween/recycleFruit 基础链。`addSettled` 去重入槽；
  `tryMatch` 做 isCollider 双锁/pairId 校验，保证一对只结算一次；
  消除开始即 fruitSplice 摘除槽位，随后按原版时序播 fruitTween
  （0.12 放大 0.1 -> 0.12 回弹 -> delay 0.24 -> 0.2 上浮放大 -> 0.4 quadIn
  飞 basket01），到达后 basket01/02 各 0.15×1.2 弹跳、销毁节点；
  左右移关注入 pairArrived 回调执行 fruitMove(true)+fruitMove(false) 靠拢。
- `FruitEntity`：新增 isCollider 锁定与 lockForElimination（清零速度后
  scheduleOnce(0) 关 collider/转 Static，避开 world locked）；
  tryPair 严格对齐原版：双方 isTouch 且越过 canCheck.y（isCanCheck 语义，
  未点击的 Static 场上水果永不参与），或至少一方 isInSlot，且 pairId 相同、
  均为普通水果才发起配对；消除数量经事件
  `COLLECTION_EVENT_PAIR_ELIMINATED` 派发（第 8 步 UI/会话层订阅）。
- 修了一个消除后必现崩溃：水果 destroy 后 spawner.entities 内组件 node
  置空，fruitMove/checkBoundAll 遍历读属性报错；统一 isAlive
  （entity.isValid && node.isValid）判活。
- 回归证据：第 1 关 150ms 极速连点两个草莓 -> touch×2、tryMatch×1（入槽分支）、
  arrived×2，场上恰剩 2 个；L10 右移关自动下落的同类型水果越过 canCheck 后
  正确配对（tryMatch×2、arrived×4，逐水果仅一次），不同类型槽内共存不消除；
  多次消除全程 JS errors=0（修复前为 26 条 isValid 崩溃）；
  `verify-level-generator.cjs` 1440 组全绿；tsc 0 诊断。
- 已知遗留（后续步骤）：连消音效/粒子/发光、篮筐图标外的进度 UI、
  槽内容量统计（第 9 步）。

### 第 8 步：目标、进度与胜利闭环

状态：`[x] 已完成（2026-10-19，人肉验收通过）`

实现范围：

- 用 `LevelSession` 维护总目标、剩余水果数和完成比例。
- 更新 `labFruit`、`fillImg`、`labProgress` 和关卡号。
- 最后一对消除完成后再进入 Win，避免动画和结算重叠。
- 接入 `GbzWin2Layer` 的最小可用状态：下一关、重新挑战、返回首页。
- 暂不实现蔬菜奖励、广告翻倍、汽车过场和段位系统。

联调修复（2026-10-20，水果资源加载失败会死关）：

- 现象假设成立——`FruitFactory.acquire` 失败时 `FruitSpawner.createFruit`
  返回 null 被 `continue` 跳过：场上缺实体，但
  `spawn()` 仍按 `data.fruits.length(+洞池)` 绑定总目标，剩余数永远清不到 0，
  关卡不可通关；尾号 0 黑洞关还会因
  `spawner.entities[anchorIndex]` 与数据 1:1 错位导致锚点错乱；
  `HoleComp` 吐果失败同样直接丢弃队列果。
- 修复（`fruit/FruitFactory.ts`）：loadAny 失败按 150/350ms 自动重试 2 次；
  仍失败时用 type1（第一关教学硬依赖，必然存在）预制体兜底，
  同类型只 warn 一次。兜底实例 `pairId/fruitType` 语义仍是真实类型
  （`FruitEntity.setup` 只取传入 type），配对/进篮/计数不受影响，仅贴图替身，
  保证数据水果与实体严格 1:1。type1 也失败（资源系统整体损坏）才抛错，
  spawner 打 error 并报告 `created/total` 缺口。
- 验证：临时 `?TMPBADFRUIT=8` 故障注入（已删除，grep TMP 归零），
  第 6 关 10 个 type8 实体 pairId 全为 8、实际 SpriteFrame=西瓜（type1），
  日志 `spawned 130/130`，0 TypeError；正常关无 warn。

可见效果：

- 第 1 关从 4 个剩余目标逐步变为 2、0，进度从 0% 到 50%、100%。
- 达到 100% 后弹出胜利页。

验收标准：

- 胜利只触发一次，胜利后场内输入被锁定。
- “重新挑战”重置为本关初始状态。
- “返回首页”无残留；“下一关”进入第 2 关。

### 第 9 步：容量、满载与失败闭环

状态：`[x] 已完成（2026-10-19，人肉验收通过）`

实现范围：

- 根据原包证据确认下方容器初始容量和槽位规则。
- 未配对水果进入收集区时占用容量，消除后释放容量。
- 容量到达危险值时给出明确反馈；无法继续容纳时显示 `full`。
- 接入 `GbzLoseFullLayer` 的最小可用状态：重试和返回首页。
- 复活流程暂时只保留接口，不接广告、不猜测清理数量。

可见效果：

- 连续收集不能配对的水果会逐步占满底部区域。
- 满载后显示“装不下啦”并进入失败页。
- 重试能完整重置关卡。

验收标准：

- 同一帧发生“最后一对消除”和“容量满”时，按已确认规则只产生一个结果。
- 失败只触发一次，失败后场内输入锁定。
- 重试 3 次后节点、计数和对象池均保持正确。

实现记录（2026-10-19，对齐 GameMgr.addInSlotFruit/checkLose/checkSlotLose）：

- 容量模型：`LevelSession` capacity=3（slotsNum/colorLimit 初始 3），
  `expandCapacity()` 预留给后续砸墙/广告扩位。
- 事件时机：`CollectionController` 新增 `fruit-settled`（入槽瞬间派发）；
  配对水果改为到达篮筐才 `removeFromSlot`，飞行期间仍占槽（对齐原版
  fruitSplice 时机），到达后派发 `fruit-arrived` 并复检死局。
- 两级判定 `LevelPlayfield.evaluateLose()`：槽内数 >3 -> “装不下啦”；
  槽内数 ==3 且槽内无配对、场上也无任何可配对救援 -> “消不掉啦”；
  另有尾分支（全部水果都已点击且全在槽内且无配对）。
- 危险反馈：槽内数 >=3 时槽内水果红白呼吸闪烁（`FruitEntity.flashDanger`），
  回落到 3 以下自动关闭；溢出失败时槽内水果变灰并转 Static
  （`grayOutForLose`）。
- 提示与弹层：`LevelView.showFullTip` 播 game/full（0.3s 淡入、摇晃两轮、
  停 0.5s、0.3s 淡出）；新增 `LoseLayer`（挂 GbzLoseFullLayer 预制体），
  隐藏广告复活 panel 与 btnShare，直接展示 lose_panel：重试 / 回首页，
  复活 `onRevive` 仅留接口；`GameNavigator.lose()` 负责胜负互斥
  （outcomeLocked）、锁输入、隐 HUD、挂失败层，clearLevel 统一清理。
- losePrefab 已在 gameNew.scene 的 GameNavigator 组件上赋值
  （GbzLoseFullLayer uuid 4cdd4ecd-41b3-460d-8f19-1a1c383c631c）。
- 验证：tsc 0 诊断；`verify-level-generator.cjs` 1440 组全绿。
- 联调修复（2026-10-19）：补齐原版 `FruitComp.checkID` 的接触传递入槽
  分支——下落水果 POST_SOLVE 撞到**已入槽**水果时自身也立即入槽
  （桶内叠高时只有最底层碰得到 floor/btnFirstWall/btnSecondWall，
  上层水果靠此条计入容量，否则视觉上堆满圆锥也不判负）；同时给
  BEGIN_CONTACT/POST_SOLVE 加 RUN 状态守卫，胜负锁定后不再产生
  入槽/配对（对齐原包 status != UNRUN 前置判断）。
- 遗留（后续步骤）：砸墙/广告扩位、复活层与广告、challengeCount 统计、
  分享、失败音效。

### 第 10 步：关卡推进、存档和第 2 关压力验证

状态：`[x] 已完成（2026-10-19，人肉验收通过）`

实现范围：

- 保存当前已解锁关卡，首页和 Level 显示同一个关卡号。
- 下一关、重试、返回首页都通过统一导航和会话创建流程。
- 实现第 2 关的三阶段生成，避免 174 个水果在同一帧集中创建。
- 确认对象池复用、批量生成预算和物理激活顺序。
- 增加开发期“指定关卡/难度/种子”的入口，正式界面保持隐藏。

实现记录（2026-10-19）：

- 新增 `core/LevelProgress.ts`：localStorage key
  `xiaoshuiguo_progress_v1`，只存 `{level}`（语义同原版
  GbzDataManager.game_level = 下一个待玩关）。缺档/JSON 损坏/字段非法
  安全回退第 1 关；存储不可用时降级为仅本次会话生效。
- 推进时机对齐原版 `GbzGameManager.onGameOver(LAYER_WIN)`：
  弹胜利层瞬间 `unlockAfterWin(level)`（max 防重玩旧关回退）；
  失败/重试不改档。首页 `main/btn_start/level/labLevel` 与
  关卡内 `levelBg/labLevel` 显示同一关卡号（HUD 由 LevelData.level 驱动）。
- 导航统一：`GameNavigator.showLevel(level?)` 成为唯一入口——首页开始
  传存档关，下一关/重玩/重试走 gotoLevel，bootstrap autolevel 沿用
  启动参数（?level= 直链只在自动进入时生效，手动开始始终以存档为准）。
- 第 2 关分批生成：`FruitSpawner` 普通关按 18 个/帧实例化，批次间
  scheduleOnce 让出一帧（174 个约 10 帧创建完，带耗时/批次数日志）；
  实例初始仍为 scale 0 + Static，spawnComplete 后统一播保护期动画，
  分帧期间无物理扰动；中途退关 await 链随组件销毁安全挂起。
- 对象池结论：预制体资源缓存（FruitFactory prefabs Map）跨关复用，
  不重复加载/反序列化；节点实例不做跨关节点池——一关内水果只减不增，
  池化收益仅在跨关重试，却需要完整重置刚体/碰撞体/接触监听/闪烁等状态，
  风险高于收益；整关 destroy 保证监听器、定时器、物理对象 100% 回收，
  冻结问题由分帧预算解决。
- 开发入口：?level / ?difficulty / ?seed / ?movedir / ?autolevel 保留，
  新增 ?resetprogress=1 清档回第 1 关；正式界面 dev 节点继续隐藏。
- 自动验证：tsc 0 诊断；verify-level-generator 1440 组全绿；
  预览直进第 2 关确认 174 水果完整生成、HUD“第 2 关”、剩余 174；
  无档时首页显示第 1 关。待人肉：L1 通关推进、首页刷新关卡号、
  退出重进保持进度、多轮重试无泄漏。

可见效果：

- 第 1 关胜利后进入第 2 关。
- 第 2 关按阶段出现大量不同水果，HUD 显示真实目标。
- 退出再进入仍保持正确关卡。

验收标准：

- 第 2 关完整生成期间无长时间冻结。
- 页面往返和重试不会重复创建监听器、定时器或物理对象。
- 存档损坏或不存在时安全回退到第 1 关。

### 第 11 步：普通障碍、木板和随机盒子

状态：`[x] 已完成（2026-10-19，人肉验收通过）`

实现范围：

- 先接入已恢复位置和种类的 `obs1/2/3`。
- 验证障碍与水果的碰撞、阻挡和层级。
- 回查木板数量、位置、旋转和连接规则后接入 `stake` 等预制体。
- 回查随机盒子的内容、出现位置和打开条件后接入 `blackBox`。
- 每种机关设置单独的固定种子测试关卡。

可见效果：

- 对应关卡能看到障碍，水果会被真实阻挡或改变运动。
- 木板和随机盒子只在数据要求的关卡出现。

验收标准：

- 机关不会遮挡 HUD 或生成在场外。
- 水果不会卡入静态碰撞体后永久无法操作。
- 未确认的机关规则不得以“看起来差不多”作为完成标准。

实现记录（2026-10-19，证据 ReferenceLayMgr.genLvMapData/genLvMap、
GameMgr.initLevel/setLeftAndRightBoxWidth、FruitComp.setFruitType/update/
unlockFruit/checkID）：

- 普通障碍：新增 `ObstacleSpawner`，按生成器 `obstacles[]`（Y 等距条带、
  X∈[-208,208]、variant 1..3）实例化 obs1/2/3 到 game/obstaclesRoot，
  scale 0 播 0.8s backOut，物理分组 obst（掩码 18，只碰 fruit/clickFruit），
  b2 body 次帧 apply；obs3 的 45° 旋转在预制体内，代码不额外转。
- 木板：数量即布局编码（2/4/6），位置为原版固定公式——6 块
  (±375,100+278*floor(i/2))、2 块 (0,150+278i)、4 块 (±270,350)，挂
  game/stakeRoot；代码确认无额外旋转/连接（stake 仅 Static 多边形碰撞体）。
  6 块时左右墙 BoxCollider 宽 345→水果节点创建完恢复 200；2 块时
  walls/middleBox（33×28 布局标记，碰撞 offset 5000 无实际阻挡）
  生成期显示在 (0,100)，完成后隐藏。
- 随机盒：生成器（TS 与 tmp/gen.js 同步）在水果布局后、冰冻前按原版
  rng 顺序不放回抽取 randomBox 个水果打 mystery 标记（CalculatedInfo.type=2）；
  FruitEntity kind=2 时隐藏真水果贴图并挂 blackBox 外壳（0.55/fruitScale），
  点击下落越过 canCheck 线（update）或碰到 floor/桶壁（checkID 兜底）
  即开盖，pairId 始终是盒下真水果，未开盖不参与配对。
- 机关与水果实例化并行，全部水果节点创建后、保护期动画前 finalizeSpawning
  对齐原版 genLvMap 回调；关卡销毁随 levelCommon 整体回收，无独立监听/定时器。
- 固定种子测试关（?autolevel=1&level=N&seed=...）：7=5 个随机盒，
  12=2 块中线木板，22=6 块侧边木板，31=5 个 obs 石头；已截图确认就位。
- 验证：tsc 0 诊断；verify-level-generator 1440 组全绿（基线条目不涉及
  mystery 字段，向后兼容）。
- 尾号 6 道具布局关（itemLayout，6/16/26…）已恢复（2026-10-20）：
  对齐原版 ReferenceLayMgr.genLvMapData 的 itemLayout 分支，水果摆在
  GridManager 固定格点（格距 83，stopDownY=728-halfH）而非三阶段带状堆放；
  phase=(level-6)%40 选网格：0=InitPart(7,42)（偶行6/奇行7）、
  10=InitPart2(7,45)（横向偏移 0..4..0 八行循环）、
  20=InitPart7(7,48)（7/6/6/6 四行循环，部分行从第 1 列起）、
  30=InitPart8(7,89)（奇行4/6、偶行3/5/7 随机）。
  总数 gt：6..10=130；11..29=182+20*floor((t-10)/10)；
  31..99=min(238,210+2*floor((t-30)/5))；>=100=min(268,238+2*floor((t-100)/10))。
  前 floor(gt/3) 个类型取 RandomInt(1,11)、其余取 RandomInt(1,22+min(11,floor(t/10)))，
  各自成对 push 后分别 shuffle，自底行逐格 shift 填充；randomBox 仍由
  applyRandomBoxes 覆盖标记。LevelParameters 新增 itemFruitTotal 元数据。
  verify-level-generator 对尾号 6 关改查网格专属不变量（行数<=7、
  y=stopDownY+83*row、|x|<=336、成对偶数、随机盒数），1440 组全绿。
- 联调修复（2026-10-19，生成器 moveDir 错误）：第 3 关起一进关水果
  挤成一团的根因是生成器把尾号 1/2/3/5（lv2_3_5 家族）及 6/7/8
  尾号关的 moveDir 漏设为默认 NONE，而原版 ReferenceMgr 这些分支末尾
  统一 moveDir=DOWN。NONE 会把三阶段水果压在一屏高（maxY=halfH-140）
  内强行排布；DOWN 则向上无限堆出屏幕、开局只露出上层，随 fruitDown
  逐步下降（与第 2 关一致）。已在 TS 与 tmp/gen.js 同步修正，
  尾号 4=右移、9=左移、0=静止(黑洞关)、1/2/3/5/6/7/8=下移；
  verify-level-generator 1440 组全绿，预览 L3 排布恢复正常。

### 第 12 步：冰冻、黑洞、关节和方向特殊关卡

状态：`[~] 子步骤 1（冰冻水果）、2（黑洞，含尾号 0 关联合生成/奇偶修正）、
3（关节绳索）、4（方向提示，含侧移关生成器修复）均已人肉验收通过
（2026-10-19/20）；子步骤 5（开局闪电）已人肉验收通过（2026-10-20）。
第 12 步全部完成`

按以下子步骤逐个实现，每个子步骤单独验收：

1. 冰冻水果：生成覆盖层、禁止或限制点击、受击次数、解冻状态。
2. 黑洞：传感器进入判定、计数显示、吞入或传送结果。
3. 关节/绳索：连接点、约束、断开条件和回收。
4. 左移、右移、下移：方向切换和 `dirtectionTip` 提示。
5. 闪电或其他特殊材质：只有源码证据足够时才加入。

实现记录（2026-10-19，子步骤 1 冰冻水果，证据 FruitComp.setFruitType
case 1/iceBox/unlockFruit/upIceLa/touchStart、GameMgr.breakIceFun/iceTip、
ReferenceLayMgr 冰冻分配、iceLab 预制体 import/c16c5ea1…）：

- 数据：生成器 applyIce 早已按原版公式产出 status='frozen'+thawHits
  （候选 queueIndex>=30 且距顶部>=400，不放回；
  ceil(heightRatio*n*0.5)+rand(0..4)），本步只接运行时表现；
  原版冰冻在随机盒之后标记并覆盖 type，双重标记时 spawner kind 取冰冻优先。
- 外壳：FruitEntity.attachIceShell 实例化 iceLab 挂为水果子节点，
  scale=水果宽/165+0.15，count 子节点 angle 取反抵消水果旋转，
  Label 初始显示剩余次数。修正重建预制体 iceLab 的两个颜色错误
  （原版压缩包反查：Label 0xFF000000 黑色不透明粗体、
  LabelOutline 0xFFFFFFFF 白色；重建时误成红色 alpha=0/黑色描边，
  导致数字不可见）。
- 不可点击：onTouchStart 在 isCanTouch 判定之前拦截 fruitType=1，
  调 LevelPlayfield.onFrozenTouched（isIceTip 每局一次），
  由 GameNavigator 接 levelView.showFullTip('未解冻')；水果保持 Static，
  仍参与物理阻挡，且不参与配对（tryPair 要求双方 fruitType=0）。
- 受击解冻：CollectionController 的 fruit-arrived（每个水果到筐）触发
  LevelPlayfield.onFruitArrivedBreakIce，等价 breakIceFun——
  isBreakingIce 守卫 + scheduleOnce(0.01) 防止一对两个水果连扣两次；
  对所有 fruitType=1 实体 applyIceHit：iceCounts--，归 0 调 unlockIce
  （fruitType=0、销毁冰壳）成为普通可点水果，否则播放 upIceLa
  数字 1->1.5(backIn) 中途换数 ->1(backOut) 弹跳。
- 验证：tsc 0 诊断；verify-level-generator 1440 组全绿；
  预览 ?autolevel=1&level=21 开局可见带数字冰壳（位置偏高的其余
  冰冻水果随 fruitDown 下降后出现）。待人肉验证：点击弹"未解冻"
  且不掉落；消除几对后数字递减弹跳、归 0 冰壳消失并可点击配对。

实现记录（2026-10-19，子步骤 2 黑洞，证据 HoleComp.init/upInfo/genFruit/
recycle、FruitComp.init/init2/anim/breakHole/touchStart、GameMgr.
createFruitNodes/checkSlotLose/getMatchFruit/btnDisturbFun/reviveFun、
ReferenceLayMgr 洞位与 initItems NONE 分支）：

- 数据（此前已完成，verify 1440 组全绿）：尾号 0 关（moveDir=0）生成器
  前 holeCount 个水果作为洞锚点（FruitData.holeId），位置取
  getHolePositions 固定洞位 ×0.695（L10 为 [-270,400]/[270,400]
  →[-187.65,278]）；blackHoles[].fruitTypes 为洞内待吐序列；
  spawner.spawn 返回总数=场上果+洞内序列（L10=40+8+7=55）。

- 修订（2026-10-19，人肉验收发现总数为奇、关尾必有水果无法配对）：
  此前 buildHoleLevel 是独立近似，场上 40 果与洞序列分别生成导致
  总数 55 为奇。回查原版 ReferenceMgr 尾号 0 关分支（执行序
  b=[5,8,0,2,4,1,9,7,3,6]）后改为逐 case 移植：
  zn=ceil((halfH-190-stopDownY+100)*visibleSize.width/(55π55))
  注意原版用的是全屏宽 750（zn=41），不是半宽；Fn=min(holeBase+
  floor(level/holeScale),holeMax)+holeAddbase*(洞数-2)（L10=15）；
  Xn=ranTypeArr(28)，首阶段前 4 类计数 2/4（偶），次阶段在达到 zn
  前每类计数 ir-1（1/3，奇）并向 Un 登记一个洞内配偶。原版本地
  兜底算法随后把 Un 全量随机分洞、再 shift 排序后最小的 holeCount
  个追加到各洞尾——这两个类型因此全场各多 1 个（board 奇+洞 2=奇），
  尾号 0 关本地配置恒留 2 个无配对果（线上真实关卡由服务器配置
  LayoutIMy 覆盖）。本工程修正分配：每个奇数类型只进一个洞一次，
  最小 holeCount 个放洞尾（保留 shift 的吐果顺序语义），validateLevel
  奇偶校验改为“场上+洞内”合并统计；L10 实测 43 场上+9+6=58，
  TS 与 tmp/gen.js 同步，verify 1440 组仍全绿。
- 新建 assets/scripts/level/HoleComp.ts：init(洞位,锚点果,序列,deps)
  对齐原版——Static 刚体、circle 启用、holeCount 计数实例挂 game/numRoot
  （children[0] 的 Label 显剩余数，定位 洞+(20,-20)，layer 递归同步）；
  update 等价 upInfo：armed 且绑定果离开洞口 Vec3.distance>=80 时
  异步 emitNext（shift 类型→洞口造果→重新绑定→更新计数）；
  forceEmit 供磁铁强制消耗序列（不等距离，原版 genFruit）；
  吐出序列最后一个果后立即 recycle（原版同）：解绑、销毁计数与洞节点、
  onEmpty 从场地 holes 列表移除。
- 运行时接线 LevelPlayfield.setupBlackHoles（spawn 动画+bindInput 后、
  running=true 前）：锚点 entity 按 data.fruits 顺序 1:1 映射
  spawner.entities，调 becomeHoleAnchor（fruitType=0、可点）；
  holeBg 实例化后剔除 MissingScript（原脚本 uuid a2e1e…丢失），
  insertChild(fruits,0) 在水果后面，物理组显式置 DEFAULT，
  scheduleOnce 内 apply 重建 fixture；deps.onEmitted 对新吐果
  bindInput/markBoardTouchable/playHoleSpawnAnim（Static 全程、
  scale-0.1 用 0.8s backOut 弹出，对齐 init2+anim）。
- FruitSpawner.emitHoleFruit：复用 createFruit（kind=0、radius=46、
  scale=getFruitNodeScale，原版 new CalculatedInfo(type,pos,0,46,scale)），
  挂 game/fruits、登记 spawnedEntities（自动参与后续胜负/冰冻统计）；
  spawnGeneric 预加载补上洞内序列类型。
- 判定：evaluateLose 两个“消不掉啦”分支加 this.holes.length===0 门控
  （原版 checkSlotLose 洞存活直接 return false）；“装不下啦”不受影响；
  胜利纯计数驱动（最后一果入筐前洞必已 recycle，等价原版 holeComps 检查）。
- 磁铁：board seed 池排除洞绑定果；getMatchFruit 桶顺序改为
  普通>洞绑定>冰冻>随机盒；配偶为绑定果时 forceEliminatePair 前
  partner.hole.forceEmit()，绑定果照常飞筐。
  另补原版 btnRemoveFun 第二遍扫描：槽内果场上无配偶时，可直接
  消耗某洞待吐序列里的同类型（HoleComp.consumeQueuedType，序列果
  不生成实体、洞空即消失），槽内果走 CollectionController.forceEliminateOne
  独自飞筐，并补发一次 fruit-arrived 虚拟到达以递减剩余目标。
- 打乱：候选增加 !entity.hole（原版还交换洞绑定关系，本工程简化为
  直接排除，已在方法注释注明）；复活简化：未点锚点作为 bystander
  Dynamic(g=0) 保护，已点锚点归位回洞位（原版走 getSafePos），
  尾号 0 为静止关、影响可接受。
- 验证：tsc 0 诊断；预览 ?autolevel=1&level=10 无运行时报错
  （仅已知无害材质缺失），日志确认 40 果生成、2 洞创建；
  截图确认两个黑洞在锚点果（葡萄/卷心菜）后面、计数 8 与 7、剩余 55。
  待人肉验收：点锚点果后洞“开启”、果离开 80 距离洞口吐新果（0.8s
  弹出）、计数递减、吐完洞消失；磁铁取绑定果强制消耗序列；
  洞存活时不提前判“消不掉”、全部收完才胜利。

实现记录（2026-10-19，子步骤 3 关节绳索，证据 JointGearMgr.init/
mapCreateJoint/shuffleCreateJoint/canCreateLines/createRope/drawRope/
upDrawRope/removeRopeByFruit/recycle、FruitComp.initJoint/removeJoint/
isJoint/isBind、GameMgr.initLevel/btnDisturbFun/getMatchFruit/update）：

- 仅尾号 8 关启用（ReferenceMgr case 8：itemConnet=true、moveDir=DOWN，
  首个测试关 L8）；开局时序对齐原版：生成动画+建洞后 jointMgr.init(graphics)
  +mapCreateJoint，done 回调里才 running=true/fruitDown（绳索 Dynamic
  0.5s -> Static 期间全场 UNRUN）；beginPlay 闭包化。
- 新建 assets/scripts/level/JointRopeMgr.ts（@ccclass JointRopeMgr，
  运行时挂 GbzLvCommon 根）；MechanicPrefabs 注册 jointPoint
  （uuid 6bebd4ab…，预制体 Dynamic g0/damping0.8/CircleCollider r10
  sensor/自带 DistanceJoint2D）。
- 选对 1:1 移植：o=min(5,2+floor(level/10))；首果下标 [3,n-1] 随机、
  双方不重复占绳、次果下标 ±10 内顺序扫，距离 [139,347.5]，每对 3000 次
  尝试（另加 10000 硬上限）；打乱重建走 RandomInt(20,30) 起扫 +
  canCreateLine 走廊判定（中线矩形长=距-50 宽 20 随连线旋转，
  CalculateCorners + Intersection2D.polygonCircle 逐果圆相交检测）。
- 物理链 createRope：l=floor(距/19) 个 jointPoint 挂 game/graphics，
  从果 A 边缘（半宽*scale 沿方向偏移）起每 距/l 一个；A.initJoint(首节)、
  B.initJoint(末节) 后销毁末节自带空关节，相邻节 addComponent
  DistanceJoint2D maxLength=10（链节短、链长松，物理上自然垂成绳形）；
  果端 maxLength=果心到端节当前距离。FruitEntity 此前已加 disJoint/
  jointFruit 字段、isJoint/isBind getter、initJoint/removeJoint 及
  update/onBeginContact/onPostSolve/tryPair 的 isBind 守卫。
- Graphics 绘线：game/graphics（cc.Graphics lineWidth10、
  strokeColor(255,45,60,74)，预制体 UITransform 0x0 运行时补 750x1334）；
  moveTo(A)->lineTo 各绳节->lineTo(B)->统一 stroke；建链 0.5s 回调置
  needRedraw 首绘，之后 lateUpdate->upDrawRope 仅在端点移动 >0.5px 重绘。
- 断绳时机对齐原版：onFruitMatch 两端各 removeRopeByFruit（checkID F）、
  onFruitSettled 入槽即断（checkID 墙体/槽果分支）、磁铁 getMatchFruit
  桶优先级插入关节桶（普通>关节>洞>冰>盒）且飞筐前 seed/partner 都断绳；
  打乱先 recycle 拆全部，tween 落位后 shuffleCreateJoint 按原对数重建，
  建链 0.5s 期间保持输入锁定；onDestroy recycle 清 graphics/链节/两端关节。
- isBind 玩法语义：绳建好两端均未点 -> 双方 isBind=true 跳过 update/
  接触/配对；只点一端时该端 isBind 仍为 true（看对端 isTouch），下落被
  链条吊在绳长内、不进槽不配对，必须两端都点才双双下落（原版同款，
  Static 端不会被关节拉动）；另一端此时 isBind=false 恢复物理判定。
- 简化（已记录）：复活 JointRestorePosition 的成对等齐归位未移植，
  绳端果按通用复活逻辑各自归位、绳索不断，尾号 8 为下移关影响可接受；
  jointPoint 不做对象池（原版 GbzPoolManager），直接 instantiate/destroy。
- 验证：tsc 0 诊断；?autolevel=1&level=8 无运行时报错（仅已知无害材质
  缺失），临时诊断确认 2 根绳 13+7 节、graphics 20 子节点、4 果
  isJoint=true 且 jointFruit 互链（诊断代码已删）。待人肉验收：
  红绳连接成对水果；点一端被吊住、另一端可点后双落；配对/入槽绳消失；
  打乱后绳按原对数重建；磁铁能选关节果并断绳；过关/重开/返回清理干净。

修订（2026-10-19，人肉验收发现“消除一对水果后再点打乱报错”）：

- 根因：配对水果飞筐到达后节点 destroy，FruitEntity 组件的 node 置 null；
  打乱重建 shuffleCreateJoint/canCreateLines 收到的是 spawner.entities
  全量数组（含已销毁实体），直接读 entity.node.isValid 即
  “Cannot read properties of null (reading 'isValid')”。
- 修复：JointRopeMgr 增加 alive(entity)（组件 isValid 且 node 非空且
  node.isValid），选对/建链/绘制/回收所有遍历点统一用它过滤。
- 验证：临时 debugjoint=1 钩子（强制一对绳果飞筐销毁 -> 2s 后打乱）
  修复前稳定复现报错，修复后 disturb executed、shuffle recreated 1 ropes、
  无任何业务报错；钩子代码已删除。

实现记录（2026-10-19，子步骤 4 方向提示，证据 GbzMainLayer.showAnim/
showlightning、GameMgr.initLevel/setTip、全工程调用点检索）：

- 死代码澄清：game/dirtectionTip + GameMgr.dirTipFun 在整个反混淆包内
  零调用（与 roundtwo 同类），不做；真实过场是 HUD GbzMainLayer 的
  animNodes，资源在重建预制体中齐全（animNode0“难度提升”面板、
  animNode1/icons/{xiangxia,向左,向右}+dir Label、animbg 带 BlockInputEvents）。
- 新增 scripts/level/LevelHudIntro.ts（动态挂到 HUD 实例）：
  playLevel2Panel = showAnim(0)——面板从 ±(屏宽/2+200) 0.5s 滑入、停 1.5s、
  0.5s 滑出；playDirectionIntro = showAnim(1)——icons 1.5 倍、±15°
  各 0.1s 摇 3 轮，dir 文案“从左/右往X移动”（右移显 icons 第 3 子节点
  向右、左移第 2 个向左），随后 0.5s backIn 缩飞到 levelBg/img 的
  世界坐标（UITransform.convertToWorld/NodeSpaceAR），结束显小图标。
- GameNavigator.showLevel 时序对齐原版：HUD 在玩法层后创建；L2 先播
  面板，2.5s 回调里才 spawn/enter（实测 LevelLaunch→spawn 间隔 3.0s）；
  其余关立即开局，moveDir=2/3 并行播方向动画，回调 levelView.showDirectionIcon；
  beginPlay 抽成闭包，过场中返回首页时 levelCommon/session 已置空，安全跳过。
- LevelView：新增 DIR_ICON_SPRITE_FRAME（xiangxia/向右/向左/中间
  @f9941 uuid），start 按 moveDir 加载小图标并按 SetSpriteSizeWidth
  等比置宽 50，初始隐藏；仅 showDirectionIcon 常显。修正此前把
  levelBg/img 永久隐藏的实现（原版下移/静止关也不显，仅左右移常显）。
- 验证：tsc 0 诊断；L2/L4(moveDir=2)/L9(moveDir=3) 冒烟无逻辑报错。
  待人肉验收：L2“难度提升”横滑面板且面板结束后水果才生成；
  L4 大向右图标摇晃后飞向顶部并常显小图标、文案“从左往右移动”；
  L9 向左图标与“从右往左移动”；L1/下移关无过场、无小图标。

修订（2026-10-19，人肉验收发现“向右关开局水果铺满上部、自动滚落直接失败”）：

- 根因不在过场动画，而在生成器：generateFruitLayout 此前只实现了
  DOWN/NONE 的水平带状排布，moveDir=2/3 退化为全场随机撒点；L4 开局
  即有 17 个水果落在线 x=±305 的 50px 自动下落带内，checkBoundAll
  直接 autoDrop 入漏斗导致秒败。LevelPlayfield.fruitMove 初始靠拢
  对左移关还漏了符号翻转（原版 i() 内 `arrangeType==2?e:-e`
  对初始/步进都生效）。
- 移植原版 ReferenceLayMgr.initPart/getPos2/getPos3（TS 与 tmp/gen.js
  同一份逻辑，保持 verify 1440 组逐字段等价）：40 行 x 4 列容量格子
  排在屏外（RIGHT x=-halfW-2i(row+1)，LEFT 镜像），格宽 2i、高 i，
  i=(halfH-290-stopDownY+50)/4=91.5，每格 maxCount
  （RIGHT floor/LEFT ceil(ceil(0.881)/scaleExp)+1=2）；每个水果从
  第 0 行扫到首个未满行，行内随机列，Y 需在 [bottomY+70+r, halfH-165-r]、
  X 在当前阶段条带 [cMinX,cMaxX] 内；5000 次失败条带内随机兜底；
  条带边界按阶段总面积在 beginStage 推进（宽=面积/(halfH-stopDownY-50)）。
  validateLevel 对侧移关放开左右边界校验（仍保留下漏斗区校验）。
- 实测：L4 开局 xRange[-2145,-458]、autoDrops=0，初始靠拢后 nearest
  恰为 120；L9 镜像 [423,3521]→[-185,…] 同样 0 掉落；verify-level-generator
  基线 + 1440 组全绿；?sidebug=1 临时代码已删除。

实现记录（2026-10-20，子步骤 5 闪电，证据 GbzMainLayer.showlightning、
GameMgr.start/initLevel/blitzkrieg、FruitComp.electricShock、
ReferenceMgr.curTheme）：

- 机制澄清：所谓“闪电材质”不是水果状态材质，而是开局雷击事件。
  GameMgr.start 的 initLevel 回调参数 n 来自 showlightning：
  仅当 fakeGame_level%10==1 且 ReferenceMgr.curTheme==1（curTheme=
  floor(max(1,level-1)/10)%4，即 L11/51/91…，每 40 关一轮）时播
  全屏闪电，回调 true -> blitzkrieg；其余关立即回调 false 正常开局。
  L1 虽尾号 1 但 curTheme=0 不触发；L21 主题 2 是冰冻关、L31 主题 3
  是障碍关，均不触发（与生成器 cycle 公式同源）。
- 闪电视觉：HUD GbzMainLayer 根下 lightningNode（预制体重建齐全）：
  animbg 为 opacity80 全屏暗层带 BlockInputEvents（过场吞触摸）；
  anim 子节点挂 Animation（assets/game/resUI/lightning/anim.anim，
  9 帧精灵切换、0.15s 速度 0.3）与 UIOpacity。LevelHudIntro.playLightning
  1:1 还原：节点显形、opacity 100->255（0.2s）、play("anim")、
  delay 0.3 后隐藏并回调，总时长约 0.5s。
- 雷击选果（GameMgr.blitzkrieg）：数量 floor(实体数/13)；下标
  RandomInt(20,length-1)、不重复、节点 y>=300；重建版另加存活/
  未点/未入槽守卫与 3000 次尝试上限（原版 do-while 无上限）。
  L11 实测 172 果 -> 劈落 13 个。
- FruitEntity.electricShock 1:1 还原 FruitComp：group 改 clickFruit、
  isTouch=true、breakHole（洞锚点开启）、白色，4 段 ±15° 抖动各 0.1s
  （15/-15/15/0）后 setRigType(Dynamic,13) 自由落体；与点击下落的区别
  仅在不播音效、不触发 fruitDown、不记 downOrgPos（复活时走安全点兜底）。
  被劈水果之后的配对/入槽/胜负走原有 isTouch 链路，无需额外接线。
- 时序：LevelPlayfield.run 在建洞/绳索之后、beginPlay 之前插入闪电关
  （lightningFlash 由 GameNavigator 桥接到 HUD LevelHudIntro.playLightning），
  await 0.5s 过场 -> blitzkrieg -> running=true/fruitDown；闪电与关节
  配置互斥（尾号 1 vs 尾号 8），无叠加分支。
- 未做：雷声 ENUM_CLIP.lei（音效体系整体在后续表现步骤）；
  GameMgr.hightLight 的 materialAttacked（b6c5f405 材质缺失）是
  fruitTween 消除飞筐的 0.24s 材质闪烁，属消除表现，不属于本子步骤；
  lightMaterial（727e741a）在反混淆包内零调用，死属性。
- 验证：tsc 0 诊断；?autolevel=1&level=11 无运行时报错，临时日志确认
  play start(true,true,true) -> 0.51s 后 play done -> blitzkrieg
  struck 13/13（临时代码已删）；L21（尾号 1 主题 2 冰冻关）无 blitzkrieg
  日志，条件正确。待人肉验收：开局白屏闪光+闪电帧动画约 0.5s，
  暗层期间点击无效；随后约 13 个水果抖动后自动掉落并正常配对入槽，
  其余水果不动；L1/L21 等无闪电。

可见效果：

- 每种特殊机制都有独立测试关卡，能清楚观察触发前、触发中、触发后的状态。

验收标准：

- 特殊状态不会破坏基础点击、配对、容量和胜负逻辑。
- 重开、下一关和返回首页后，关节、传感器、材质与事件全部清理。

### 第 13 步：道具、复活和新手引导

状态：`[~] 子步骤 1 刷新打乱、2 消除磁铁、3 解锁槽位、4 复活均已人肉验收
通过（2026-10-19）；子步骤 5 第 1 关新手引导已人肉验收通过（2026-10-19）`

原版逻辑梳理（2026-10-19，证据 GbzMainLayer/GbzGameManager/GameMgr/
GbzLoseFullLayer/GbzResurgenceLayer/GbzDataManager/GbzGetItemLayer/
GbzPropSpecialLayer + 重建工程预制体实测）：

- 入口与数量：HUD `skills` Layout 下两个按钮——btn_skill_core（消除）
  与 btn_skill_board（打乱），子节点 ad（广告角标）/propNumLbl（库存）。
  PropType：removeFruit=0、disturbFruit=1；库存 getPropNum/addProp
  持久化在 DataManager（ZXMTG 存档，本步不接），耗尽走广告获取
  （GbzGetItemLayer，本步不接广告），每局免费广告次数 itemADCounts=[4,4]。
  第 1 关两个道具都不可用，点击只弹“第二关使用”。点击道具期间
  skillIndex>=0，水果输入锁定（status=UNRUN），执行完恢复 RUN。
  本步按计划“广告/分享/付费不做，先给本地可测试入口”：两个按钮
  不扣库存、不弹广告，RUN 状态直接执行，库存角标维持预制体原样。
- 消除（磁铁，btnRemoveFun(t=1)）：先 sortFruit（按当前移动方向
  对 fruitsComp 排序：下移/静止按 y 升序，右移按 x 降序，左移按 x
  升序），再选一对——槽内已有水果时从槽尾向前找第一个在场内能
  配成对的；否则从全场普通水果（ID>0、fruitType=0、非黑洞）随机序
  中按方向取边界果（下移取最低 y，左移取最左 x，右移走最右 x，
  静止随机），再经 getMatchFruit 找配偶（普通>关节>黑洞出果>
  冰冻解冻>随机盒开盖；本工程只有普通/冰冻/盒，取普通优先、
  没有可配的普通对时允许解冻一个冰冻或开一个盒）。选中的水果
  先 hideCollider+isTouch=true，走正常 fruitTween 入筐，到达事件
  照常驱动目标递减/胜利/死局复检；因此本工程 CollectionController
  需提供对任意一组水果直接消除的入口，到达事件链不变。
- 打乱（btnDisturbFun）：候选 = !isCollider && !isInSlot &&
  (fruitType=0 或 2) && !holeComp && !canCheckPassed（未越过
  canCheck 线、未入槽的可操作水果；冰冻 fruitType=1 不参与）。
  2 个直接交换位置；>2 用 shuffleArray 把位置数组洗牌后逐个
  movePos（关碰撞→0.4s 移动→anim 弹出→checkBound），期间物理
  重构关节（本工程第 12.3 未做，跳过）。移动完做一次 checkBoundAll。
  候选不足 2 个时原包也会按 0 个正常走完回调（无提示）；建议
  本工程候选 <2 时不锁输入、直接 return（同样不扣次数）。
  movePos 的“关碰撞→位移→Dynamic(g=0) 弹出分离→Static”与
  生成保护期动画同构，可复用 FruitEntity 的刚体重置方法。

- 解锁槽位（屏幕中央漏斗上方的“解锁”箭头即墙体自身）：
  game/walls/btnFirstWall、btnSecondWall 是带刚体的限制墙，初始
  slotsNum=colorLimit=3。原版点墙看广告（breakWall）：3→4 砸掉
  btnFirstWall 并给 btnSecondWall 换贴图/亮子节点；4→5 砸掉
  btnSecondWall；>=5 不可再砸。breakAllWall/breakSingleWall 是
  特殊道具广告入口（GbzPropSpecialLayer，本步不接）。本步本地
  测试入口：直接点击墙即砸毁（playChuiziEff/creatBoxBoom 锤子
  与碎石特效留到第 14 步，本步先做墙消失+容量+1），容量上限 5。
  LevelPlayfield.slotCapacity 由常量 3 改为可扩展字段，
  LevelSession.expandCapacity 已预留；危险闪烁阈值同步 +1。
  checkPro50UeseProp 的进度 50% 弹窗不做（广告特殊道具）。
- 复活：失败时原版先显示复活引导（GbzLoseFullLayer 的
  style/panel：“复活吗?”+剩余数 labNum+btn_relive+btn_close2/
  点空白关闭；独立的 GbzResurgenceLayer 是其复用版本，重建工程
  的 LoseLayer 第 9 步已把 panel 隐藏，本步改回先 panel 后
  lose_panel）。每局 reliveCount=1，广告不接：btn_relive 本地
  直接复活一次，关闭入口进 lose_panel。reviveFun 机制——
  场上未点击未过线水果临时 Dynamic(g=0) 防碰撞；isTouch 的水果
  中除 y 最低的一个外全部退回点击前原位（FruitComp.downOrgPos，
  本工程需在 onTouchStart 记录），自动下落/黑洞位改走 getSafePos
  （本工程无黑洞；自动下落果给边界内安全点），movePos 归位后
  fruitReset（Static+checkBound+isTouch=false），从槽位移除；
  留在槽内的（最低锚点果）恢复 Dynamic(g=13) 继续下落；全部
  完成后 status=RUN、gameState=isPlaying。复活不回滚目标数
  （已入筐计数不变）。需新增 LevelSession.resetLost()，
  GameNavigator 的 outcomeLock 可解、HUD 重新显示、finalizeLose
  的变灰在复活路径上要能撤销（颜色变白）。
- 新手引导（仅第 1 关）：finger 预制体已在
  assets/game/prefab/game/finger.prefab；行节点 pos1 含 4 个
  定位点（children 0-3）+ 4 个水果（children 4-7），setFinger
  把手指放到定位点并把对应水果 isCanTouch=true。原版时序：
  开局手指指第 1 个西瓜；第 1 次点击后指第 2 个；第 2 次点击
  后显示 leaderTip/roundone（“2 个相同的水果会消除”，2s）；
  第 4 次点击触发 pos2/pos3 两行 2s 移入（本工程
  startFirstLevelRound2 已实现，补手指与气泡即可）。
  leaderTip/roundtwo 文案“2 个相同的磁铁会消除一组水果”在
  反混淆代码中找不到任何激活点（全工程仅 leaderTip 整体在
  clickCount=2 激活一次），且第 1 关道具点击原版只弹“第二关
  使用”，磁铁教学触发时机无证据——实现时按“证据不足不做”
  处理，除非玩家另有指示。第 1 关开局只放行手指指向的水果
  可点（pos2/3 在屏外天然不可点），点击后逐个开放。

本步实现顺序与集成点：

1. 刷新/打乱：HUD 技能按钮接线（GameNavigator.bindLevelButtons），
   逻辑放 LevelPlayfield（候选筛选/位置交换/移动动画/碰撞开关），
   执行期 isInputActive 临时关闭，结束复检 checkBoundAll。
2. 消除/磁铁：CollectionController 增加 forceEliminate(entities)
   （复用现有锁定+飞筐+到达事件），LevelPlayfield 按原版规则选一对。
3. 解锁槽位：LevelPlayfield 绑定两面墙 TOUCH_END，上限 5。
4. 复活：LoseLayer 改为 panel 先行；playfield.revive()；
   session/navigator 状态可恢复；entity 记录 downOrgPos。
5. 新手引导：第 1 关手指+roundone 气泡+逐果开放。

实现记录（2026-10-19，子步骤 4 复活，证据 GameMgr.reviveFun/
getSafePos/isOnScreen、FruitComp.fruitReset/movePos、
GbzLoseFullLayer.onEnable/onClose、GbzResurgenceLayer.onRelive）：

**状态：[x] 已完成（2026-10-19，人肉验收通过）**

- FruitEntity：手动点击时记录 downOrgPos；新增
  prepareReviveBystander/finishReviveBystander（场上果临时 Dynamic
  g=0 防穿越）、reviveReturnTo（归 FRUIT 组+关碰撞+0.5s 回位+
  0.4s backOut+fruitReset 等价：isTouch/isAutoDrop/isInSlot/
  canCheckPassed 全复位回 Static、颜色恢复白色）、
  resumeFallingAnchor（槽内最低锚点果白色+Dynamic g=13 继续下落）。
- CollectionController.removeFromSlot 改 public（复活退回时摘槽）。
- LevelPlayfield.revive：touched=isTouch 且未锁定的水果，最低 y 的
  锚点留槽；其余从槽位摘除退回 downOrgPos（自动下落果没有原位，
  走 getSafeRevivePosition：中部矩形内按半径避让随机 30 次，
  失败兜底随机）；场上未点击未入槽未过线且在屏内的水果临时
  Dynamic g=0；全部归位后恢复 Static、checkBoundAll、重新开放输入。
  目标数不回滚；isDowning 期间挡住 fruitDown；复活结束复检死局。
- LevelSession.resetLost 撤销失败；GameNavigator 新增 reviveUsed
  （每局限一次，showLevel 重置），onRevive 销毁失败层、解 outcomeLock、
  重显 HUD、调 playfield.revive；第二次失败直接进 lose_panel。
- LoseLayer 重写：reviveAvailable 时先显示 style/panel（“复活吗?”
  +labInfos/labNum 剩余数+btn_relive，隐藏广告角标），btn_close2
  缩出后进 style/lose_panel；无复活次数时直接 lose_panel。
- 验证：tsc 0 诊断；L2 加载冒烟正常。待人肉验收：打满 4 个不配对
  水果触发失败→弹复活面板且剩余数正确→点复活后已点击水果退回
  场上、只剩最低一个在槽内、可继续操作；点关闭后正常进失败层；
  复活后再失败不再显示复活面板；重试/下一关复活次数刷新。

修订（2026-10-19，子步骤 4 UI 终版，人肉反馈叠字后改为双独立弹层
对齐原版）：
- 引擎反序列化原包预制体证实：GbzLoseFullLayer.onEnable 在
  reliveCount>0 时隐藏自身、改弹独立 GbzResurgenceLayer
  （btn_relive 底图 reviveUI1=播放图标+复活；关闭 btn_close 回失败层）。
- 新增 scripts/level/ResurgenceLayer.ts（style/panel/Bg 下
  btn_relive/btn_close/labInfos/labNum，0.35 backOut 入场）；
  LoseLayer 精简为只管 style/lose_panel（重试/主页，隐藏分享），
  style/panel 强制隐藏；GameNavigator 新增 resurgencePrefab
  （场景已挂 f3f54626…），lose() 先建隐藏的失败层再弹复活层，
  关闭→closeResurgence 显失败层，复活→两层都销毁并 revive()。
- 修复清场报错：LevelPlayfield.onDestroy 对 firstWall/secondWall
  的 off 加 isValid 守卫（父组件 onDestroy 时子墙节点可能已销毁，
  原写法抛 Cannot read properties of null (reading 'off')，并连锁
  destroy twice）。自动链路验证：关闭复活层→返回主页/重玩均 0 报错。

实现记录（2026-10-19，子步骤 3 解锁槽位，证据 GameMgr.breakWall/
breakSingleWall/breakAllWall、GbzPropSpecialLayer、预制体实测）：

- 预制体实测：walls/btnFirstWall（y=-466，贴图=水果解锁砖、箭头
  子节点常显）与 btnSecondWall（y=-546，贴图=普通水果砖、两个
  子节点初始隐藏）叠在漏斗颈，均带刚体+122×91 BoxCollider，水果
  撞其表面即入槽（第 9 步接触逻辑已支持）。
- LevelPlayfield：slotCapacity 改可变（3），缓存两面墙；开局只给
  firstWall 绑 TOUCH_END。breakWall（箭头函数绑 this）——3→4：
  把第一面的“水果解锁砖”SpriteFrame 直接复用给第二面（免异步
  加载）、显示其两个子节点并绑定点击，再销毁第一面、容量+1；
  4→5：销毁第二面、容量+1；之后无墙可点即上限 5。运行中且非
  道具锁定才响应。扩位后调 evaluateLose 顺带清除危险红白闪烁。
  GameNavigator 接 slotExpandedHandler -> levelSession.expandCapacity。
- 跳过广告（showVideo/GbzGetItemLayer/GbzPropSpecialLayer）与
  锤子、碎石特效（playChuiziEff/creatBoxBoom 留第 14 步表现阶段）；
  checkPro50UeseProp 的 50% 进度弹窗不做（广告特殊道具）。
- 验证：tsc 0 诊断。待人肉验收：点“解锁”砖消失、第二块带箭头
  出现、可再点一次；容量 4/5 时第 4/5 个水果入槽不再立刻判负；
  重开/下一关墙与容量复原为 3。
- 联调修复（2026-10-20，锤子加载失败不能锁死扩槽）：
  breakWall 的拆墙/第二面墙升级/wallBreaking 复位全在
  EffectLayer.playHammer 的 onStrike 回调里；chuizi 预制体加载失败时
  playHammer 原实现直接 return，回调永不执行 → 墙永驻、点击锁永久
  卡死、第二面墙永不激活（容量 expandSlot 虽已 +1 但链路断裂）。
  修复：EffectLayer.load 加 150/350ms 两次重试（与 FruitFactory 一致）；
  playHammer 失败路径保证调用 onStrike（场地/墙已销毁的关卡退出场景
  除外），无锤子动画也立即完成拆墙。
  验证：临时 ?TMPBADHAMMER=1 + ?TMPBRKWALL=1 内部驱动 breakWall
  （钩子已删，grep TMP 归零）：重试耗尽后 cap 3→4→5、两面墙均销毁、
  breaking 均复位 false；无注入的正常动画路径结果一致，0 TypeError。

实现记录（2026-10-19，子步骤 2 消除/磁铁，证据 GameMgr.btnRemoveFun/
getMatchFruit/eliminateDataSort、GbzGameManager.onGameSkill、
GbzMainLayer.onSkillClick）：

- CollectionController 抽出 eliminatePair 私有流程，新增
  forceEliminatePair（不检查接触/越线/类型，复用 lockForElimination+
  飞筐 tween+fruit-arrived 事件，目标递减/胜利/死局复检/扣冰/
  侧移关 fruitMove 全部沿用原链）。
- LevelPlayfield.removeFruitPair：第 1 关 level-locked、忙时 busy、
  无配对 no-target。选对规则——槽内优先（slotEntities 逆序找场内
  有同 pairId 配偶者）；否则全场普通果按方向取边界果（下移最低 y、
  左移最左 x、右移最右 x、静止随机）。findPartner 按 getMatchFruit
  桶序：普通 > 冰冻（直接 unlockIce 解冻）> 随机盒（unlockBlackBox
  开盖）；同桶内已点击下落中的优先、再按方向排序（eliminateDataSort
  简化）。选中双方 isTouch=true 防场地移动，执行期 isDowning+
  skillLocked，两个 fruit-arrived 后解锁并在下移关补一次 fruitDown。
- GameNavigator 绑定 skills/btn_skill_core；第 1 关弹“第二关使用”，
  无目标弹“没有可消除的水果”。不扣库存不播广告。
- 验证：tsc 0 诊断。待人肉验收：点消除直接飞筐一对（优先救槽内
  水果）、剩余数-2、无目标提示、执行中输入锁定、冰冻/盒可被磁铁
  直接解冻/开盖带走。

实现记录（2026-10-19，子步骤 1 刷新/打乱，证据 GameMgr.btnDisturbFun、
FruitComp.movePos/anim/hideCollider、SOUtil.shuffleArray、
GbzMainLayer.onSkillClick/refreshSkillBtn）：

- FruitEntity 新增 prepareShuffle（关碰撞体+Static g=0+清零速度，
  触摸上下文直接 apply）、playShuffleTween（0.4s 位移后 Dynamic g=0
  下 0.4s backOut，落位恢复 FRUIT 分组/碰撞/Static 与未点击状态）；
  isTouch/isAutoDrop/canCheckPassed/inCheckBox 全部复位。
- LevelPlayfield 新增 disturbFruits：候选=!isCollider&&!isInSlot&&
  !canCheckPassed 且 fruitType 0/2（冰冻与黑洞果不动）；2 个强制互换、
  >2 Fisher-Yates（同 SOUtil.shuffleArray）；执行期 isDowning+
  skillLocked 双锁（挡住 fruitDown/fruitMove 调度与全部输入/接触
  结算，等价 status=UNRUN），全部落位后解锁并逐个 checkBoundOne
  （方向关压暗/越线自动下落仍生效）；第 1 关返回 level-locked。
- GameNavigator 绑定 GbzMainLayer skills/btn_skill_board；第 1 关
  showFullTip('第二关使用')；胜负锁定后不响应。消除按钮
  btn_skill_core 留待子步骤 2。本地测试不扣库存不播广告。
- 验证：tsc 0 诊断；L2 预览加载正常（174 水果、按钮就位）；
  人肉验收通过（换位动画、动画中输入锁定、入槽/消除中水果不动、
  第 1 关“第二关使用”均符合预期）。

实现顺序：

1. 刷新/打乱：仅重排可操作水果，保持类型和目标数量不变。
2. 消除/磁铁：选择一对或一组有效目标并走正常消除结算。
3. 解锁槽位：增加收集区容量并立即刷新布局。
4. 复活：保留已完成进度，按确认规则恢复到安全容量。
5. 新手引导：第 1 关水果配对，第 2 轮磁铁配对。

广告获取、分享奖励和付费行为不属于本阶段；先提供本地可测试入口。

可见效果：

- 每个道具都有明确可见结果，不会直接绕过目标、容量或状态机。
- 首次进入指定关卡时出现引导，完成后不重复阻塞玩家。

验收标准：

- 道具在 Ready、消除中、胜负状态不可误触。
- 无合法目标时不扣除道具并给出合理反馈。
- 复活后既不会立刻再次失败，也不会错误直接胜利。

实现记录（2026-10-19，子步骤 5 第 1 关新手引导，证据 GameMgr.firstLevel/
showLeader/setFinger/opacityTween/firsrLevelRound2、FruitComp.checkBound、
GbzLvCommon 预制体实测）：

- 门控澄清：原版 arrangeType=1 时 FruitComp.checkBound 把全部水果
  isCanTouch=true，setFinger 只保证被指水果开放；pos2/pos3 在屏外天然
  点不到。手指是纯视觉引导，不做“只放行一个水果”的严格门控
  （否则第 3/4 次点击无水果可点，showLeader 只开放了 fruit[4]/[5]）。
- LevelPlayfield：run() 第 1 关分支改为 await startFirstLevelGuide()
  后 return，running 在 setFinger 后延迟 0.3s 置 true（原版 UNRUN 窗口）。
  finger 用 assetManager.loadAny 按 UUID 加载（39f2d48e…），静态 Promise
  跨关缓存；实例挂到 game/firstLevel 下、同步 layer，opacityTween 用
  union().repeatForever() 做 scale 0.7<->0.8 各 0.5s 呼吸。
- setFinger(row, anchorIdx, fruitIdx, show) 严格照搬原版：
  finger 坐标 = (锚点.x, 锚点.y + 行节点.y)；锚点/水果无效或水果已
  isTouch 时强制隐藏；有效时同步 isCanTouch=true。
- showLeader 按 clickCount：1 -> setFinger(0,1,5,true) 指第 2 个西瓜；
  2 -> setFinger(0,1,4,false)+leaderTip.active=true+setFinger(0,1,5,false)
  +2s 后隐藏气泡；4 -> 藏手指 + startFirstLevelRound2（既有）。
  leaderTip 预制体本就含 roundone 三个 Label“2个/相同/的水果会消除”
  +气泡底图（roundtwo 无激活证据，保持隐藏）。
- 清理：onDestroy 停 finger tween 并销毁实例；run() 重置 clickCount。
- 验证：tsc 0 诊断；?autolevel=1&level=1 冒烟 0 逻辑报错（仅已知
  lightMaterial/materialAttacked 材质缺失）。待人肉验收：开局手指指
  第 1 个西瓜且呼吸；点第 1 个后移指第 2 个；点第 2 个后出“2 个相同
  的水果会消除”气泡约 2s 消失；第 4 次点击后 pos2/pos3 两行 2s 移入。

### 第 14 步：音效、特效、过场和完整回归

状态：`[ ] 部分完成（音效子任务代码完成，待人肉验收；特效/汽车过场/完整回归未开始）`

实现范围：

- 接入点击、落地、同类碰撞、消除、连消、满载、胜利和失败音效。
- 接入落地粒子、消除粒子、磁铁和盒子等已有特效。
- 视原包证据接入汽车过关动画、蔬菜奖励和复活表现。
- 在多种屏幕比例下验证 UI、物理边界、触摸命中和文字。
- 进行长时间、快速点击、重复重试、连续过关和后台恢复测试。

可见效果：

- 核心玩法具备完整声音和视觉反馈。
- 页面切换、胜负、连续关卡体验连贯。

验收标准：

- 控制台无持续错误和未清理回调。
- 多轮游戏后节点数、事件数和内存不会持续增长。
- 至少覆盖第 1、2 关以及每类特殊机关的代表关卡。

#### 子任务 1：音效（2026-10-20，代码完成待验收）

```text
步骤：第 14 步子任务 1 - 音效重建
状态：部分完成（声音只能人肉听辨，待验收）
本次改动：
- 新增 assets/scripts/audio/GameAudio.ts：单例 GameAudio.ins，常驻
  __GameAudio__ 节点（addPersistRootNode），挂 sfx/bgm 两个 AudioSource。
  24 个音频 UUID 常量表 CLIP_UUID（key 即 assets/game/audios/ 中文文件名）。
  play(key,maxConcurrent=1,group=key) 按组限流 + playOneShot，额度按
  clip.getDuration() 延时释放；playCombo() 复刻原版 3s 窗口连击
  xiaochu_1..5 循环（独立组 __combo__，并发上限 5）；playBGM/stop/pause/
  resume（loop、volume 0.3、同名不重播）；EVENT_HIDE/SHOW 自动暂停恢复；
  soundOn/musicOn 开关；preloadSfx() 在 loading 阶段预加载 21 个短音效。
- FruitEntity.ts：onTouchStart 播「点击水果」；dropLeft/dropRight 首次
  接触（isTouch 且未撞过）播「水果落地」（上限 5）；handleFruitContact
  按位移 >=50px² + uuid 去重播「ui_click」同类碰撞轻音，并 vibrateShort
  短震（wx.vibrateShort 优先，navigator.vibrate 兜底）。新增 originPos、
  hitFruits:Set、isLRAddForce 字段，setup 复位。
- CollectionController.ts：eliminatePair 播 playCombo()；onFruitArrived
  播「水果消失」。
- LevelPlayfield.ts：blitzkrieg 开局闪电播「lei」；breakWall 播「解锁坑位」。
- GameNavigator.ts：showHome 播 BGM「水果消除bgm」、showLevel 播
  「水果消除关卡bgm」；lose 按 reason 播「装不下啦」/「失败」；
  showWinLayer 播「胜利」；开始/返回/刷新成功/磁铁成功/复活层等回调
  按钮播「ui_click」，刷新成功再播「刷新」、磁铁成功再播「磁铁音效」。
- ShuiguoGameBootstrap.ts：loadingTasks 增加 GameAudio.ins.preloadSfx()。
原版依据：tmp/recovered-src/readable/GbzAudioManager.ts.js 的
  playSound(group,i,clip) 限流语义、playComboSound 3s/5 循环、
  playBGM/pauseBGM/resumeBGM（group0=BGM, group1=普通音效, group2=UI/胜负）；
  GbzEnum.ts.js ENUM_CLIP 24 clip 完整映射。
预览入口：首页 → 开始游戏；?autolevel=1&level=N（L11 测 lei 闪电音）
可见效果：点击/落地/碰撞/连消/消失/解锁/刷新/磁铁/闪电/胜负/按钮均有音效，
  首页与关卡两首 BGM 自动切换，切后台 BGM 暂停、回前台恢复。
验证结果：tsc 0 诊断；editor refresh-asset 后 ?autolevel=1&level=1 冒烟
  无 JS 报错（仅已知 lightMaterial/materialAttacked 材质缺失），关卡正常
  生成 12 个水果；临时诊断日志已删净（grep TMPAUDIO = 0）。
已知差异/未接线：
- 「水果喷射」原版在 GbzFruitDownLayer 快速点击节流时播，重建无此机制，跳过。
- 「相同水果碰撞」枚举 sameIDHitSound 在原包内零调用，死音效，不接。
- 排位/蔬菜等外围页面音效不在本工程范围。
- 音效开关 UI（声音/音乐按钮）原版有本地存档，当前仅暴露 soundOn/musicOn
  接口，待设置入口接线时使用。
待人肉验收清单：
- 点水果、落斜面、同类相碰轻音+短震、配对连消 xiaochu_1..5 递进、
  水果进槽消失、解锁坑位、刷新、磁铁、L11 闪电 lei、装不下/失败、胜利、
  按钮 ui_click、首页/关卡 BGM 切换、切后台 BGM 暂停恢复。
下一步：验收通过后做子任务 2 特效（effPr 消除粒子/streak 拖尾/
  boxBoom+chuizi 砸墙/landEff0~3 落地粒子）。
```

#### 子任务 2：特效（2026-10-20，代码完成待验收）

```text
步骤：第 14 步子任务 2 - 消除/落地/砸墙/拖尾特效
状态：部分完成（视觉只能人肉看，待验收）
本次改动：
- 新增 assets/scripts/level/effects/EffectLayer.ts：挂在运行时创建的
  game/effsRoot 节点，9 个特效预制体 UUID 常量表 + loadAny 缓存。
  - burstEliminate(source, fruitId)：复刻 GameMgr.showFruitEff，
    水果 ID -> 粒子颜色子节点 eff0~eff6（originalPt 全 35 项映射，
    缺省 2）；每次喷 8~12 个，随机偏移 ±50、缩放 0.69*[1,2)，
    随机方向飞 55~95px（sineOut，时长=距离/[55,95)），并行自转
    260~300° + 缩放到 0，结束 NodePool 回收。
  - spawnStreak(target)：streak 预制体挂到水果同父节点，独立脚本
    StreakFollow（每 3 帧对齐坐标，3s 自毁），MotionStreak 出残影。
  - playLand(fruit)：脚下 60px 播 landEff{floor(level/10)%4}，
    ParticleSystem2D.resetSystem，autoRemoveOnFinish 自毁。
  - playBoxBoom(wall)：墙世界坐标转 effsRoot 本地，碎石粒子自毁。
  - playHammer(wall, onStrike)：chuizi 预制体（实例化后剔除丢失的
    ChuiziComp MissingScript），找子节点 chuizi/eff，延迟 0.5s ->
    0.08s 转到 -10°（quadOut）-> 0.18s 到 45°（backOut），命中时
    回调 + eff 粒子，2s 后销毁。
- 新增 assets/scripts/level/effects/StreakFollow.ts（一文件一组件）。
- FruitEntity.ts：新增 isShowedLandEff；首次撞 dropLeft/Right 斜面
  播 playLand（与落地音同条件、每果一次）；playEliminationTween 缩放
  回弹结束（0.24s 上浮前）.call 触发 burstEliminate(pairId)，
  普通配对/磁铁/单果飞筐全部覆盖。
- LevelPlayfield.ts：run() 在 game 下建 effsRoot + EffectLayer，
  设 currentLevel 并 preloadAll 全部特效预制体；breakWall 改为
  playHammer 时序：点击即 off/expandSlot（容量立即生效），锤击命中
  瞬间才播「解锁坑位」音 + boxBoom + 拆墙/升级第二面（贴图在销毁前
  缓存）；wallBreaking 仅防连点，不锁水果输入。磁铁场上路径
  （种子不在槽内）给 seed/partner 挂 streak，槽内优先路径不挂。
原版依据：GameMgr.showFruitEff/playChuiziEff/creatBoxBoom/breakWall、
  FruitComp.streakFun/checkDropWall、StreakComp、ChuiziCom、
  ReferenceLayMgr.originalPt/getEliminateColor、ReferenceMgr
  RandomInt(闭区间)/randomN/RandomAngle。
预览入口：?autolevel=1&level=N；解锁槽位关用 N>=10（如 ?level=10），
  落地粒子在左右移关（moveDir=2/3）更明显，拖尾点磁铁道具观察。
验证结果：tsc 0 诊断；临时 ?dbgeff=1 钩子自动触发四种特效，
  日志确认 12 个 effPr（颜色=水果映射）、streak、land0（第 2 关
  floor(2/10)%4=0）、hammer strike + boxBoom 全部执行且 0 运行时
  报错；临时代码已删净（grep TMPDBGEFF/dbgeff = 0）；最终 L1
  冒烟仅已知材质缺失报错。
已知差异/未做：
- effMagnet 预制体在原包反混淆代码中零调用，未接线。
- 锤子弹跳用 node.angle 等价原版 Quaternion z 轴旋转。
- 粒子/锤子未走对象池（原版 GbzPoolManager），频率低直接实例化自毁；
  effPr 高频已用 NodePool。
待人肉验收清单：
- 配对消除时水果原位喷对应颜色粒子并飞散旋转缩没；
- 磁铁消场上水果有白色拖尾；
- 点水果撞左右斜面脚下有尘土粒子（每果一次）；
- 点解锁砖：锤子 0.5s 后砸下、命中瞬间碎石 + 解锁音、墙消失/升级；
- 各特效层级位置正确、不挡 UI、长时间游玩无报错。
下一步：验收通过后做子任务 3 汽车过关动画（car.prefab + 汽车鸣笛）。
```

#### 子任务 3：汽车过关过场（2026-10-20，代码完成待验收）

```text
步骤：第 14 步子任务 3 - 汽车过场（GbzCarMoveLayer）
状态：部分完成（视觉只能人肉看，待验收）
本次改动：
- 新增 assets/scripts/level/CityTable.ts：原版 CityConfig
  getCurCityName 的 200 城顺序表，数据从反混淆 CityConfig.ts.js
  提取：常规表 e（35 省、100 城）+ 季节表 a（100 城），各条目
  [省份名, 城市数]；getCityName(t) 按 1-based 累计命中、对 200 取模
  （0 视为 200），与原包 e[0] 空项、先 e 后 a 的遍历顺序一致。
- 新增 assets/scripts/level/CarTransitionLayer.ts：复刻
  GbzCarMoveLayer.losePanelTween。play(cityName, onArrive)：
  cao/zhanpai/lv Label 设省份名；shan（5 个子节点）与 cao（8 个）
  全部从 scale 0 起，按序号延迟 0.2*i、0.5s backOut 弹出；
  car 置于 carStart.x；1s 时播「汽车鸣笛」（group2 音效）；
  tween delay(1).to(2,{x:carEnd.x}) 行驶到右侧，结束回调进下一关。
  预制体自带 Animation（carmove.anim，playOnLoad 车身动画）与尾气
  ParticleSystem2D；onDestroy 停全部 tween（children 可空守卫，
  销毁期不再 NPE）。
- GameNavigator.ts：胜利层“下一关”由直接 gotoLevel 改为
  playCarTransition(nextLevel)：销毁胜利层 -> loadAny 按 UUID
  （a981e4ed…，GbzCarMoveLayer.prefab）加载并实例化到 Stage，
  递归同步 layer 到 Stage，CityTable.getCityName(nextLevel-1)
  取名，到达回调销毁过场层后 gotoLevel 下一关；clearLevel 兜底
  销毁残留 carLayer；加载失败直接进下一关不卡死。重玩/返回主页
  不经过汽车过场（原版只有下一关走 CarMoveLayer）。
原版依据：GbzCarMoveLayer.ts.js（shan/cao 弹出、carStart/End
  -747.044->891.86、1s 鸣笛、2s 行驶）、GbzWin2Layer.onClickButtons
  （关胜利层 -> toggle CarMoveLayer -> recycleDownFruit）、
  GbzEnum ENUM_CLIP.GAME_CAR=汽车鸣笛、CityConfig.getCurCityName。
预览入口：通关任一点“下一关”；自动验证用临时 ?dbgcar=1（已删除）。
验证结果：tsc 0 诊断；MCP validate-prefab 111 引用 0 缺失；
  钩子自动触发确认 play city=广东省（第 2 关后）/山东省（第 3 关后，
  广东 3 城后切换正确）、shan 5 / cao 8、起止坐标与原包一致、
  arrive 后正常 LevelLaunch 下一关且 0 运行时报错；onDestroy 的
  children NPE 已修；临时代码删净（grep TMPDBCAR/dbgcar = 0）；
  L1 最终冒烟仅已知材质缺失报错。
已知差异：
- 季节表 a 在原包为对象（整数键升序遍历），重建按数组顺序等价；
  原包 200 城提取计数 e=100/a=100 完全吻合。
- 过场期间未调用原版 recycleDownFruit（重建 gotoLevel 直接重建场景）。
待人肉验收清单：
- 过关点“下一关”：胜利层消失，山/草依次弹出、标牌显示正确省份名、
  汽车 1s 鸣笛后从左开到右（约 2s），随后进入下一关；
- 重玩、返回主页按钮不触发过场；汽车尾气/车身动画正常。
下一步：验收后做子任务 4（多屏/长时间完整回归）或按需补剩余表现。
```

#### 子任务 3.5：胜利层补全（2026-10-20，代码完成待验收）

```text
步骤：第 14 步子任务 3.5 - 胜利弹层恢复光圈/城市进度，移除重玩按钮
状态：部分完成（待人肉看视觉）
本次改动：
- WinLayer.ts 重写：
  - 删除“重玩”按钮（通关后无重玩需求），按钮容器仅保留居中的
    btn_restart“下一关”，WinLayerHandlers 去掉 onReplay；
    GameNavigator 同步只传 onNext/onHome。
  - 恢复原版 GbzWin2Layer 布局：guang（放射光圈）+ 中央收集物图标、
    info（“不得了…比89%玩家厉害”烤字图）、proBg（城市进度：
    FILLED 进度条 + 小车 + lv RichText）；btnshare 分享翻倍继续隐藏。
  - 入场时序对齐原版 losePanelTween：title 立即 backOut；
    0.5s 后 guang/info/proBg backOut，同时 proBg_fill.fillRange 与
    小车 x 在 1s 内从上一关进度走到本关；按钮在 0.5+1+0.5+0.2=2.2s
    弹出。
  - lv RichText：省内最后一关显示“即将到达{省简称}”，否则
    “再过{N}关到达{省简称}”（黄色 f4fd14 + 黑描边，原版模板）。
- CityTable.ts 扩展：e/a 表补省份简称（simpleName），
  getProgress(level) 返回 {cur,total,diff,nextSimple}，
  getCityName 继续供汽车过场标牌使用。
- 新增 CollectibleTable.ts：原版 CityConfig.u 收集物表 175 项
  [名字,类型,SpriteFrame压缩UUID]；类型 0 水果（fruits/水果图标，
  36 张）与 2 蔬菜（vegetable/蔬菜，28 张）共 49 项写入实际 UUID，
  1/3/4/5（甜品/动物/海洋/糖果，工程无资源）与原包变量名条目
  回退默认草莓图标；iconUuidForNextLevel 复刻
  (fakeGame_level-2)%(length-1) 索引。
原版依据：GbzWin2Layer.ts.js onEnable（cityUnlockData 取 icon）
  与 losePanelTween（全部时序/fillRange/car.x/RichText 模板）、
  CityConfig.ts.js（u 表 175 项、e/a 表省名+简称+城市数）、
  GbzEnum ENUM_Theme_Sprites_Sub（fruits/vegetable 路径）。
预览入口：通关任一点胜利；自动验证用临时 ?dbgwin=1（已删除）。
验证结果：tsc 0 诊断；钩子在 L1/L3/L4 验证进度数据：
  L1 cur=1/3 diff=2“再过2关到达山东”、L3 diff=0“即将到达山东”、
  L4 进入山东省；L1 图标加载成功（人参果 d4f47a61…@f9941）；
  0 运行时报错；临时代码删净（grep TMPDBGWIN/dbgwin=0）；
  proBg_fill 预制体 _type=3(FILLED) 确认；L1 最终冒烟无异常。
已知差异：
- 175 收集物中 126 项为甜品/动物/海洋/糖果主题，原工程未迁入
  对应 bundle，统一回退草莓图标（前 40 关仅 u[3] 华夫饼等少数
  命中回退）。
- btnshare 分享翻倍按钮不实现，保持隐藏；原版 1s 处的弹出占位
  在按钮时序中保留时间差（2.2s），视觉与原版一致。
待人肉验收清单：
- 通关后标题与按钮之间有金色光圈+中央水果图、夸赞文案条、
  城市进度条（车从左侧进度位置向右走、条同步填充）、省份文字；
- 只剩一个居中“下一关”按钮，点击照常进汽车过场；
- 右上角返回首页仍可用。
```

## 第 15 步：首页扩展 - 排行榜（世界榜）

```text
步骤：第 15 步 - 排行榜（GbzRankLayer 世界榜）
状态：行排版已二次修复，待人肉视觉验收
行排版修复（cc.deserialize 行模板 dccf7e21 精确取值）：
- 根因：行底 parent(723x143) 带 scale 0.9，子节点坐标都在缩放下，
  漏掉 scale 导致整体外扩 11%、奖牌/关卡字被列表遮罩裁切；
- Label 逐字对齐原版：三标签均居中、lineHeight 40，名字/关卡加粗，
  名次 LabRank 描边 #775026/2px、宽度 100；关卡框 160 宽；
- selfData 固定行 y=-342.604（原包 PrefabInstance 覆盖值），
  不再与列表末行重叠。
本次改动：
- 新增 assets/scripts/home/RankNpcData.ts：原版 GbzRankLayer 纯数据逻辑，
  50 个 NPC + 自己；NPC 关卡 70% 为 2500~4000、30% 为 4001~5000；
  三套名字池（前缀+后缀/赵钱孙李…+小名/特殊称号）逐字照搬反混淆源码，
  去重重试 10 次后追加随机数；头像取 fruitStr 前 28 项；
  localStorage（xiaoshuiguo_rank_names_v1/_date_v1）持久化，
  跨天每个 NPC +1~4 关重排；自己 level=当前关-1，达第 50 名线才入榜，
  50 名外底部固定行显示“99+ 自己 N关”。
- 新增 assets/scripts/home/RankHeadIcons.ts：28 个排行榜头像水果的
  SpriteFrame UUID 映射（f9941 子资源，从 png.meta 提取）。
- 新增 assets/scripts/home/RankRow.ts：原包行模板 dccf7e21 工程未迁入，
  按 cc.deserialize 还原的结构/坐标/字号/颜色在代码中建行：
  行底别人/z自己（sliced 723x143）、奖牌 75x88（前三名）或名次
  （fs40 #fde060）、头像框 90x90+水果头 75x75、名字（fs30 #6a4a37）、
  关卡（fs30 #8d1c8f，“N关”）。
- 新增 assets/scripts/home/RankLayer.ts：复用原 GbzRankLayer.prefab
  （tab/底板/ScrollView 均在）；剔除失效的 GridLayerListView 与按钮
  MissingScript，content 改原生 VERTICAL Layout（CONTAINER、行距 10、
  上下 padding 20）；tab 切换 btnWordShow/btnFriendShow；
  好友榜为微信开放数据域能力，Web 显示“好友榜为微信功能/请在微信中
  查看”占位；关闭走遮罩/btn_Close + ui_click，setRank/hideGameClub
  等微信 API 跳过；wordRank 下补建缺失的 selfData 固定行（y=-292）。
- GameNavigator.ts：bindHomeButton 追加根节点 btn_rank；
  onRankClick 懒加载 a6317380… 面板 prefab 到 Stage（同步 UI_2D layer），
  关闭即销毁；clearLevel 兜底销毁。
- 资源修复：别人.png/z自己.png 的 f9941 userData 补九宫格 border
  （左50/上25/右30/下25，原图 184x134：左侧米色名次列固定、粉色中段
  横向拉伸），恢复原包 SLICED 表现。
原版依据：tmp/recovered-src/readable/GbzRankLayer.ts.js（名字池/
  getRandomLevel/updateNPCLevels/processPlayerData/selfDataFun/tab 切换）、
  RankDataComp.ts.js（行字段与奖牌/行底切换）、GameMgr.ts.js fruitStr
  前 28 项；行模板结构来自原包打包 JSON 的 cc.deserialize 反序列化。
预览入口：首页点击 btn_rank 排行榜按钮。
验证结果：临时 ?tmprank=1&tmpranktab=friend 钩子自动验证：
  50 条 NPC、降序 sorted=true、名字 unique=true、关卡区间 rangeOk=true、
  selfRowActive=true、content 50 个行节点、前三名名字/关卡日志正确、
  tab 切好友榜 wordActive=false/friendActive=true/tip=true、
  layer=UI_2D(33554432)；过滤后 0 error（仅已知 lightMaterial/
  materialAttacked 缺失）；普通首页冒烟 0 新增报错；
  tsc 0 诊断；钩子已删净（grep TMP 归零）。
已知差异：
- 原包 10 个中文姓氏是混淆字符串变量，按英文半组 Zhao/Qian/... 对应
  还原为“赵钱孙李周吴郑王冯陈”；specialNames[14] 混淆变量无法还原，
  以“孤狼”占位；均不影响功能。
- 好友榜（微信开放数据域 getOpenDataContext/postMessage）与
  setRank 微信上报在 Web/非微信环境无法实现，显示占位提示。
- storage key 与原包 namesData/lastUpdateDate 不互通，使用工程独立
  key（与 LevelProgress 策略一致）。
- 行头像是异步加载（loadAny 缓存/并发去重），首次打开可能有 1 帧空白。
待人肉验收清单：
- 首页点排行榜：面板弹出，世界榜 50 行，前三名金银铜奖牌、4 名后数字；
  行底左米右粉不拉伸变形；水果头像/名字/“N关”颜色位置正常；
- 底部固定行“99+ 自己 N关”（N=当前关-1）；
- 世界榜/好友榜 tab 选中底图切换正确，好友榜显示占位文字；
- 点遮罩或右上关闭按钮可关闭并播放点击音，再次打开数据不变（持久化）。
- 面板底板 01 九宫格已按原包 capInsets=[31,0,29,35] 修 border
  （白色底板上下不再变形）。
- tab 底条矩形5 [29,19,23,14]、列表区米色底板02 [16,0,21,30] 同步修复
  （世界榜/好友榜按钮底条与好友榜内部背景不再拉伸；按钮上的
  世界榜0/1、好友榜0/1、图层2 原图即等尺寸使用，capInsets 为 0 不动）。
- 联调修复（2026-10-20，连点弹多层）：onRankClick/onFruitBookClick
  原守卫只检查已实例化的弹层节点，而节点在 loadAny 异步回调里才赋值，
  加载空窗期连续点击每次都过守卫 → 同屏实例化多个排行榜/图鉴层。
  新增 rankOpening/fruitBookOpening 同步在途标志（回调里复位），
  两个首页弹层互斥（另一个已开或加载中直接忽略）；加载失败标志复位可重试。
  验证：临时 ?TMPPOPUP=spam（同按钮连点 3 次→rank=1）与
  ?TMPPOPUP=cross（排行榜+图鉴同帧点→rank=1/book=0），
  0 TypeError；钩子已删净。
```

## 第 16 步：首页扩展 - 图鉴（GbzFruitBookLayer）

```text
步骤：第 16 步 - 图鉴（水果/蔬菜收集册）
状态：自动验证完成（0 error），待人肉视觉/交互验收
本次改动：
- CollectibleTable.ts 追加 bookCount/bookNameAt/bookIconUuidAt/
  bookHasIcon（175 条 cityUnlockData 复用第 14 步提取结果）。
- 新增 assets/scripts/home/FruitBookState.ts：原版
  fruitBookLastLevel 持久化（xiaoshuiguo_fruitbook_v1，默认 0）。
- 新增 assets/scripts/home/FruitBookLayer.ts：复用原
  GbzFruitBookLayer.prefab（标题/收集进度/ScrollView 均在）和原
  fruitBook.prefab 格子模板（parent 行底/fruit/fruitName/num/newTip
  节点与贴图均完整），剔除失效的 GridLayerListView/FruitBookComp。
  网格定位逐字照搬 GridListView.initParam/addItems：3 列、
  colX=-200/0/200、rowY=-228*(row+0.5)、content 锚点(0.5,1)、
  高 59*228；175 格全部实例化（原池化为表现优化，功能等价）。
  解锁规则同 FruitBookComp.refreshPro：r < game_level 解锁亮彩、
  否则水果染黑+UIOpacity 100+隐藏名字/No；新解锁项显示 newTip；
  每格 parent 0 -> 0.9 backOut 0.5s 进场弹跳。
- GameNavigator：btn_fruitBook 打开弹层；按钮 children[0] 红点按
  lastViewed < currentLevel 初始化，查看后面板关闭写档并隐藏红点；
  clearLevel 兜底销毁。
预览入口：首页左下 btn_fruitBook（图鉴书按钮）。
验证结果：?tmpbookshot=1 新标签自动开面板，175 格实例化 0 error，
截图确认前 4 项解锁（彩图/名字/No/新角标）、其后剪影、3 列布局正常；
tsc 0 诊断；钩子已删净。
已知差异：
- 原包 6 类主题（水果/甜品/蔬菜/动物/海洋/糖果）工程只迁入
  水果/蔬菜贴图（49/175）；无图条目即使解锁也显示剪影+名字，
  不用默认草莓图冒充；补齐需另迁主题 bundle 资源。
- cityUnlockData 有 7 项原包即混淆变量名，名字显示“？？？”。
待人肉验收清单：
- 上下滑动 175 格滚动正常，顶部“收集进度: N/175”N=当前关-1（封顶 175）；
- 关闭后首页按钮红点消失；通关推进一关后红点重新出现、对应新格子有“新”角标；
- 点遮罩或右上 X 关闭有点击音，重开数据一致。
- 面板“设置面板”九宫格已按原包 capInsets=[35,113,32,41] 修 border
  （蓝色头部/分隔线/底部圆角不再拉伸）。

首页未实现按钮通用占位（2026-10-21）：
- GbzMenuLayer 除 btn_start/btn_rank/btn_fruitBook 外的 10 个按钮
  （btn_setting/btn_share/btn_Service/btn_Theme/btn_addShortcut/
  btn_advise/btn_cbl/btn_fans/btn_gameClub/btn_request）原点击无响应，
  现统一播 ui_click + 中央 toast“功能开发中”。
- GameNavigator.showHomeToast：纯代码 toast，零美术资源依赖——
  Graphics 画 480x86 圆角 18 黑底（alpha 190）+ 白字 Label，
  0.15s 淡入/停留 1.1s/0.25s 淡出，自增 token 防连点提前隐藏，
  进关卡时停 tween 并隐藏。踩坑：不能用
  builtinResMgr.get('default-sprite-frame') 配 Sprite，预览分包后
  跨 bundle 取到的对象 instanceof SpriteFrame=false、完全不渲染。
- 验证：临时 ?TMPTOAST=1 钩子（已删）：10 按钮全部找到绑定，
  emit touch-end 后 toast active/文案/(0,140) 正确，连点 3 次
  stage 上只有 1 个 homeToast 节点；截图确认黑底圆角与白字；
  首页冒烟 0 新增报错；tsc 0 诊断。
```

## 6. 每一步的固定交付格式

后续每完成一步，都按以下格式记录，方便逐步查看效果：

```text
步骤：第 N 步 - 名称
状态：已完成 / 部分完成 / 阻塞
本次改动：涉及的脚本、预制体和资源
预览入口：首页点击开始游戏，或指定的开发测试关卡
可见效果：本步应该看到的结果
验证结果：编辑器错误、运行日志、桌面截图、移动尺寸截图、真实点击结果
已知差异：与原包仍不一致的地方
下一步：只有本步验收通过后才开始
```

本文中的对应状态由 `[ ] 未开始` 更新为 `[x] 已完成`；若仅部分完成，不勾选并写清剩余项。

## 7. 回归检查清单

每个会改变运行流程的步骤至少检查：

- `[ ]` Loading 仍能完整走到 Home。
- `[ ]` Home 中央 Logo、开始按钮及已有布局未被破坏。
- `[ ]` Home -> Level 只创建一个关卡实例。
- `[ ]` Level -> Home 后没有残留水果、定时器或事件。
- `[ ]` 重新进入相同关卡能得到可解释、可复现的状态。
- `[ ]` 750 x 1334、窄屏和宽屏下无 UI 重叠。
- `[ ]` 控制台无新增 error；warning 必须记录原因。
- `[ ]` 点击和页面切换由真实预览交互验证。

从第 5 步开始追加检查：

- `[ ]` 水果不穿越边界，不出现非有限坐标。
- `[ ]` 退出、重试和胜负时停止物理输入与异步任务。
- `[ ]` 对象池回收前解除事件、关节和特殊状态。
- `[ ]` 同一事件不会重复计数、重复消除或重复结算。

## 8. 明确暂不纳入核心重建的内容

以下内容不会阻塞 Level 核心闭环，将在玩法稳定后另列计划：

- 好友榜开放数据域（世界榜 NPC 排行已在第 15 步重建）。
- 广告、分享、订阅、客服、游戏圈等平台能力。
- 段位、排行榜奖励和长期数值平衡。
- 图鉴的主题皮肤/完整收集经济（图鉴展示与解锁状态已在第 16 步完成）。
- 服务端存档、账号同步和运营活动。
- 原包中用途不明确的开发调试面板。

## 9. 第一阶段验收终点

第 1 至第 10 步完成后，视为“普通 Level 核心重建”完成。届时应满足：

```text
Loading -> Home -> 开始游戏 -> Level
-> 生成水果 -> 物理运动 -> 点击收集
-> 同类配对消除 -> 目标进度
-> 胜利 / 容量失败
-> 下一关 / 重试 / 返回首页
```

第 11 至第 14 步属于原版主要体验和特殊玩法补齐，应在核心闭环稳定后按顺序实施。

## 10. 计划变更规则

- 若打包源码提供了与本文不同的明确证据，以源码和运行表现为准，并先更新本文再改实现。
- 若某一步依赖尚未恢复的关键规则，先拆成“可确认部分”和“待确认部分”，不能跳过验收直接堆到后续。
- 若用户在某一步提出视觉或手感调整，该步骤保持未完成，修正并重新验证后再继续。
- 未经确认，不提前实现后续步骤，确保每次预览都能定位问题来源。
