# 反编译成果说明（2026-10-16）

> 更新：`readable/`、`raw/`、`tables/`、`manifest.json` 已由通用工具
> [`recovered_game`](../../recovered_game)（独立项目：`/Users/zidong.wang/aiwork/recovered_game`）
> 重新生成（117/117 成功，导入名已语义化），首版手工产物保留在
> `readable-manual-v1/`、`raw-manual-v1/`。复现：
> `node /Users/zidong.wang/aiwork/recovered_game/src/cli.js <game.js> -o tmp/recovered-src`

## 来源
- 打包源码：`wxf41b76649658b9e3_unpacked/game.js` 中 `define("assets/start-scene/index.js")`（1706-32102 行，约 2MB）。
- 加固：code.fortify 混淆 level-3（字符串表 `to[47]`、数值表 `ro[274]`、不透明谓词、控制流平坦化），但所有业务方法体完整保留。

## 提取方法（可复现）
1. `run_wrapped.js`：Node VM 中 hook `System.register`，让混淆代码自执行注册，拿到 117 个 `chunks:///_virtual/*.ts` 模块（模块名、deps、factory 源码）。
2. `deob2.js`：Babel 插件，作用域感知地把 `to[k][j]`→字符串、`ro[k]`→数字，并做常量传播，输出到 `readable/`。
3. 关卡配置表（LvConfig1/1_easy/2/3）含数组乱序混淆，可直接在 VM 中执行模块 factory 取运行时真值。

## 目录
- `readable/`：117 个反混淆模块（变量名仍为单字母，但类名/方法名/属性名/字符串/数值均已还原）
- `raw/`：原始 factory 体
- `data/to_table.json`：字符串表（47 行）
- `data/ro_entries.json`：数值常量表（274 项）
- `data/deps.json`：每模块的原始依赖路径
- `data/rf_map.json`：scriptId(压缩UUID) → 类名（115 项）
- `data/obfuscated-full.js`：混淆模块原始体
- `MODULE_INDEX.md`：全部模块的依赖/方法索引

## 场景 7 个常驻组件（gameNew.scene）
ViewFPS、GbzLoadingLayer、GbzFadeManager、GbzIndex（启动）、GbzGameManager（静态总管）、GbzUIManager（页面栈）、logoCom

## 24 个占位脚本 → 真实类
000 IceFollow, 001 CloudMgr, 002 logoCom, 003 GbzFruitDownLayer, 004 FruitBookComp,
005 VibrateCom, 006 JumpLvBtn, 007 GbzUIManager, 008 BgCtrCom, 009 GbzGetRewLayer,
010 GbzGameManager, 011 GbzIndex, 012 GridLayerListView, 013 HoleComp, 014 ChuiziCom,
015 GbzFansLayer, 016 GbzFadeManager, 017 GbzLoadingLayer, 018 GameMgr（核心玩法）,
019 ViewFPS, 020 PiaoEff, 021 VideoShareCom, 022 RankDataComp, 023 JointGearMgr

## 核心玩法（源码实证，非推测）
- 关卡数据：`ReferenceMgr.genLvMapData(lv,boundaryLine,stakeRoot,obsRoot)` → `{info:fruitConfig,totalNum}`；
  `ReferenceLayMgr.genLvMap(cb)` 异步建水果；第 1 关特例：12 个水果、firstLevel 教程。
- 场地状态：`status` RUN/UNRUN（localData.ins）；`arrangeType` 0/1=无/向下，2=向右，3=向左。
- 点击：FruitComp.touchStart → GameMgr.addTouchFruit → FruitComp.movePos（tween）落入槽位，isInSlot=true。
- 配对：槽位数组 fruitsInSlotComp，按 fruit.ID 判同类；canMatchInSlot 双查；getMatchFruit 处理
  普通/关节/黑洞(fruitType 1=冰, 2=黑盒)/解锁；配对后 onEliminatePair 加分、fruitRemnantNum--。
- 失败有两种：超过 slotsNum → overFun("装不下啦")；槽满且场上无可消同色 → overFun("消不掉啦")。
- 胜利：fruitRemnantNum<=0 → winFun（GbzGameManager.onGameOver 弹 LAYER_WIN）。
- 道具：btnRemoveFun（消除）、btnDisturbFun（打乱，交换水果位置+重建关节）、锤子 ChuiziCom、
  破墙 breakWall/breakSingleWall/breakAllWall；复活 reviveFun。
