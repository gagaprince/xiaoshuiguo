# Level 页逻辑梳理（重建准备，2026-10-17）

> 依据：tmp/recovered-src/readable 反混淆源码（GameMgr / FruitComp / GbzMainLayer /
> GbzFruitDownLayer / ReferenceMgr / ReferenceLayMgr / FruitConfig / GbzEnum 等）、
> 工程现有预制体 gameNew.scene、tmp/gen.js（已恢复的关卡生成器）。
> 本文只做证据梳理，不改实现。计划文档以 tmp/level页重建计划.md 为准。

## 0. 现状核对（2026-10-17）

- 计划里写"第 1 步已完成"，但当前工程中导航代码已不存在：
  `ShuiguoGameBootstrap.ts` 只负责 Loading→Home，无 btn_start / GbzLvCommon / GbzMainLayer
  任何引用。即第 1 步需要重做（预制体本身都在）。
- 场景常驻：Canvas 上有空壳 RestoredComponent_011（GbzIndex 占位）+ ShuiguoGameBootstrap。
  Stage 当前为空，Home 由 Bootstrap 实例化。
- UIFade 节点 active=true 且带 BlockInputEvents（虽可能透明），第 1 步真实点击验收前要确认
  它不会拦截触摸；BlackInput active=false 正常。
- 计划提到的样例 tmp/level-1.normal.seed-*.json / level-2.*.json 已不在 tmp 下；
  生成器文件实际叫 tmp/gen.js（CommonJS，generateLevel(level, options)）。
- 水果预制体 33 个在 assets/fruits/fruit1..33.prefab，各带 RigidBody2D + PolygonCollider2D。
- 碰撞分组/矩阵已恢复（settings/v2/packages/project.json）：
  fruit=2(idx1), wall=4(idx2), obst=8(idx3), clickFruit=16(idx4), guardrail=32(idx5)。
  矩阵：DEFAULT 19 / fruit 31 / wall 2 / obst 18 / clickFruit 59 / guardrail 16。
  含义：wall 只碰 fruit；clickFruit 与 DEFAULT/fruit/obst/clickFruit/guardrail 都碰；
  两个 clickFruit 相互碰撞——这是"同类相碰即消除"的物理基础。

## 1. 页面结构（预制体实证）

单场景 Stage 动态挂两个预制体，顺序 GbzLvCommon（玩法层）在下，GbzMainLayer（HUD）在上。

GbzLvCommon.prefab 根组件：GameMgr(脚本 d2634…)、BgCtrCom、CloudMgr、PiaoEff、
VideoShareCom×3；子节点：

- `game`（GameMgr.gameRoot，玩法容器）：
  - `walls`：line, btnFirstWall, btnSecondWall（两道可解锁墙，TOUCH_END→breakWall）,
    wall(PolygonCollider, BgCtrCom), wallBottom, bottomBg[H], left, right,
    dropLeft, dropRight, floor, canCheck, top, bottom, bottom copy×2, middleBox[H]。
  - `fruitTextBg/labFruit`：剩余水果数（GameMgr.labFruit）。
  - `progressBg/fillImg,fillBg,labProgress`：fillImg 用 Sprite.fillRange 显示进度，
    文案 "NN %"（注意有空格）。
  - `basket01`（GameMgr.basket，消除飞入点）、`basket02`。
  - `obstaclesRoot`、`stakeRoot`、`graphics`、`fruits`（水果挂点）、`piaoEff`、
    `numRoot`、`effsRoot`、`boundaryLine`（Widget 对齐的移动分界线/下移基线）。
  - `levelBg/img + labLevel/labLevel copy`：关卡开局提示条（方向图标+关卡名）。
  - `firstLevel/pos1,pos2,pos3`（各含 pos1..pos4 定位点）：第 1 关教学专用三行四列。
  - `leaderTip[H]`、`dirtectionTip/dirImg,dirLab[H]`、`full/New Label`（失败提示）、
    `btnRemove[H]`、`btnDisturb[H]`、`btnOption[H]`（道具入口后续接）。
- `FruitDownLayer[H]`（GbzFruitDownLayer 脚本）：注意它不是"点击收集区"，
  而是胜利后的喷洒庆祝层：winFun 时激活，从屏外 y=-height tween 到 0，
  在 createPoint（New Node）里每 30ms 生成最多 100 个 clickFruit（重力 13、圆形碰撞），
  完事后 onGameOver(LAYER_WIN)。回收时圆形碰撞还原为多边形。
- `JointGearMgr`：关节/绳索管理（第 12 步）。

GbzMainLayer.prefab（HUD，单例 _GbzMainLayer）：

- `btn_exit`（onExit→LAYER_EXIT 退出确认层；第 1 步可先直接返回 Home）。
- `levelBg[H]/labLevel`、`levelTips[H]/labLevel`：关卡号显示（rendorCurrentLevel 当前为空实现）。
- `c_item[H]/proBg,proBar,proLbl,light`、`ticket[H]`、`timer[H]`：活动/计时相关，核心闭环不用。
- `skills/btn_skill_core,btn_skill_board`（btnType=[removeFruit, …]，道具第 13 步）。
- `animNodes[H]/animNode0,animNode1`：开局整屏滑动过场（showAnim 0=第2关横条、1=方向关）。
- `lightningNode[H]`、`jumpLv[H]`（跳关调试，platformApi.freead 为真时才显示）、
  `btn_Win[H]`、`linearDamping[H]` 调试节点：进关卡全部隐藏。

## 2. 关键数据流（GameMgr，挂在 GbzLvCommon 根）

- 单例 `GameMgr.instance`；onLoad 用 getChildByName 绑定 walls/floor/middleBox/labFruit/
  fillImg/labProgress/basket/boundaryLine/dirtectionTip/firstLevel/levelBg 等，
  btnFirstWall/btnSecondWall 注册 TOUCH_END→breakWall。
- `status`：GbzDataManager.status，"UNRUN"（生成/过场，禁输入）/ "RUN"。
  `gameState`（GbzInstance.gameMgr）：isPlaying / isPaused / isOver。
- 关卡字段：currentLevel=game_level；fruitTotalNum、fruitRemnantNum（剩余目标）；
  slotsNum=3、colorLimit=3（解锁墙道具各 +1）；arrangeType 0静止/1下移/2右移/3左移。
- 进关 start()：gameState=isPlaying；刷新 HUD（GbzMainLayer.refesh）；status=UNRUN；
  initLevel(cb)。
  - 第 1 关特例：arrangeType=1、fruitTotalNum=fruitRemnantNum=**12**、initWall(0)、
    firstLevel() 教学生成（见第 4 节）。
  - 其余关：ReferenceLayMgr.genLvMapData(lv, boundaryLine.y, stakeRoot, obstaclesRoot)
    → {info: fruitConfig, totalNum}；moveDir→arrangeType；initWall(moveDir)；
    woodenObs=6 时左右盒宽 345→200，=2 时 middleBox 出现在 (0,100)；
    ReferenceLayMgr.genLvMap(cb) 异步建水果→sortFruit→关节→hideWall→showlightning→
    status=RUN。第 2 关先播 showAnim(0)（横条 2.5s）再生成。

## 3. 点击→入槽→配对→消除（核心机制，物理驱动）

1. FruitComp.touchStart：status=RUN 且 isCanTouch 且未 isTouch：
   刚体 group 改 clickFruit(16)、setScale(fruitScale)、isTouch=true、
   Dynamic（重力）、playClick、addTouchFruit（lastTouchFruit 最多留 2 个）。
   冰冻水果(fruitType=1)点击只弹 iceTip。
2. 水果以物理体在底部 walls 内自然堆叠；碰到 `floor`/`btnFirstWall`/`btnSecondWall`
   传感器（onEndContact 类回调）→ addInSlotFruit：isInSlot=true，压入 fruitsInSlotComp；
   与已在槽同类相碰时直接进消除（见下）。
3. 同类消除发生在 FruitComp 接触回调里：两个未锁、同 ID 的 clickFruit 相碰→
   双方速度清零、isCollider=true、hideCollider、GameMgr.fruitTween(n/r)：
   高亮→缩放上弹→0.24s 后 tween 到 basket01（quadIn）→ basketTween、
   updateFruitText()（fruitRemnantNum--、fillRange、labProgress）、fruitMove、
   recycleFruit（回池）、checkSlotLose；onEliminatePair 加分；连播音效。
4. addInSlotFruit：槽数≥colorLimit(3) 时槽内水果红色呼吸闪（fruitColorTween，3s 周期）；
   每次入槽都 checkSlotLose。
5. 失败判定：
   - checkLose（入槽防抖 0.2s）：fruitsInSlotComp.length > slotsNum(3)
     → overFun("装不下啦")，槽内水果置灰变 Static。
   - checkSlotLose：槽满(≥slotsNum)且无可配对时，扫描场上是否还存在与槽内同类的水果、
     或场上是否还有任意同类对；都没有 → overFun("消不掉啦")。
   - overFun：full 节点 Label 播晃动提示、gameState=isOver、弹 LAYER_LOSE_FULL。
6. 胜利：updateFruitText 后 checkWin：fruitRemnantNum<=0 → gameState=isPaused、winFun：
   topWall 关、隐藏 LAYER_MAIN(HUD)、激活 FruitDownLayer 播放喷洒、本层 recycle()，
   随后由 GbzFruitDownLayer.onAniEnd 弹 LAYER_WIN。
7. 道具解锁槽：slotsNum++/colorLimit++ 并解除墙点击事件（btnRemove=消除道具、
   btnDisturb=打乱；第 13 步）。复活 reviveFun 保留进度重排（第 13 步，含广告）。

## 4. 第 1 关教学实证（与计划"4个草莓"不同，以此为准）

- firstLevelIDS = [[9,9,9,9],[1,1,1,1],[2,2,2,2]]：三行四列共 12 个水果
  （type 9/1/2，不是 4 个 fruit1 草莓）。定位点用 firstLevel/pos1..3 下的 pos1..4。
- pos2/pos3 初始在屏外（y=height/2+500），第 4 次点击后 firsrLevelRound2 把两行移到第 1 行。
- 教学手指 finger：第 1 次点击→setFinger 引导+TutorialStart；第 2 次显示 leaderTip 2s；
  第 4 次进入第二轮。status 在 12 个水果生成完 0.3s 后才置 RUN。
- 若要最小闭环测试，可在开发期用自定义种子/配置覆盖，但正式第 1 关应按此还原。

## 5. 关卡生成器（tmp/gen.js，第 3 步迁移）

- generateLevel(level,{difficulty:'normal'|'easy'|'hard', seed|rng, useAlternateSkin, …})
  → {info: LevelParameters, totalNum, fruits[], obstacles[], woodenObstacles[],
      randomBoxes[], blackHoles[]}（字段以文件头 typedef 为准）。
- typeArr 三阶段、scaleExp、moveDir、冰冻、黑洞 fruitTypes 等直接来自 ReferenceMgr/
  LvConfig1/1_easy/3；ReferenceLayMgr 四分区占用避让逻辑用扁平数组重写，随机顺序不保证
  与原包逐次一致——固定种子只保证本模块可复现，不保证与原版逐帧一致。
- 原版水果实体字段 CalculatedInfo(fruitType=种类ID/用于配对, type=0普通/1冰/2盒/3黑洞关联,
  pos, radius, scale, unlockNum…)；FruitComp.init(info, ?, holeComp, cb)。
- 待恢复：木板(stake)坐标朝向、blackBox 规则、黑洞计数/传送精确行为（第 11/12 步前回查）。

## 6. 建议的新脚本划分（沿用"独立脚本、不动空壳"约定）

- GameNavigator（导航：Home↔Level、胜负层，实例化/销毁、防连点）。
- LevelTypes/LevelGenerator（gen.js 的 TS 化，纯数据 + 校验 + 种子）。
- FruitPool（fruit1..33 池，按名 "fruit"+type 取节点；主题前缀后续扩展）。
- GamePlayMgr（替代 GameMgr 职责，先只做核心闭环：状态机/槽位/配对/胜负/进度/HUD 文本）。
- FruitView（挂水果：点击、group 切换、碰撞回调、回收；替代 FruitComp 核心子集）。
- LevelHud（GbzMainLayer：btn_exit、关卡号、道具按钮先隐藏）。
- WinLayer/LoseFullLayer 最小可用控制器（下一关/重试/返回首页）。
- 预制体绑定策略与 LogoCom 一致：需要原 __type__ 自动挂接时，新脚本沿用占位脚本
  meta UUID 并删除空壳（如 d2634=RestoredComponent_018、26277=003）；
  或在导航实例化后用代码 addComponent（第 1 步更简单，先不动预制体序列化）。

## 7. 各步证据索引

- 第2步 HUD：GameMgr.onLoad 节点名、setTip（关卡名=CityConfig 第N关+城市名）、
  updateFruitText（fillRange+" %"）、GbzMainLayer onLoad 隐藏 btn_Win/jumpLv/linearDamping。
- 第4步 水果：GameMgr.createFruitNodes、FruitComp.init/init2/initParameter/anim；
  池 GbzPoolManager.getNode("fruit"+fruitType)。
- 第5步 物理：project.json 矩阵；initWall(moveDir)/hideWall；FruitComp.checkBound
  （arrangeType 2/3 出界 black/light）；gameRoot y 移动与 fruitDown/fruitMove。
- 第6步 点击：FruitComp.touchStart、group=clickFruit；接触名 floor/btnFirstWall/
  btnSecondWall/dropLeft/dropRight。
- 第7步 配对：FruitComp onEndContact 同 ID → GameMgr.fruitTween。
- 第8步 胜负：updateFruitText/checkWin/winFun/GbzFruitDownLayer.showAni。
- 第9步 容量：slotsNum/colorLimit=3、checkLose/checkSlotLose/debounceCheckLose、fullTip。
- 第10步 推进：GbzDataManager.game_level/fakeGame_level；LocalData 存档（后续查）。
