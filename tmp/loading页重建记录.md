# Loading 页重建记录

> 状态：已验收（2026-10-17）
> 对应原版：GbzIndex.start + GbzLoadingLayer（`tmp/recovered-src/readable/GbzLoadingLayer.ts.js`、`GbzIndex.ts.js`）

## 实现内容

新增 3 个独立脚本（不向 RestoredComponent 空壳堆逻辑）：

- `assets/scripts/core/LoadingState.ts`：临时单例，字段 `loadingRate`（0/1）。
  对应原版 `GbzDataManager.ins.loading_rate`，待 GbzDataManager 重建后并入。
- `assets/scripts/ui/GbzLoadingLayer.ts`：原版 GbzLoadingLayer 逻辑 1:1 移植。
  - `@property fill` 绑定场景 `Canvas/UI/LoadingLayer/progress/loadbg/loadfill`。
  - start 时填充宽归零，从 `fill.parent/labPro` 取百分比 Label。
  - update 中按原版公式渐近推进：`fillPro += dt/2*(1-fillPro)`；
    填充宽 = fillPro*578，末端 img（草莓）x 跟随，labPro 显示百分比。
  - 与原版的差异：原版 `loadingRate>=1` 时封顶 99% 直接 hide（从未显示 100%）；
    重建版按验收要求改为 rate>=1 后以 `dt*4` 快速补满到 100%（草莓走到最右端），
    满后停留 0.3s 再 hide。
- `assets/scripts/bootstrap/ShuiguoGameBootstrap.ts`：挂在 Canvas（原版 GbzIndex 的最小版）。
  - `homePrefab` 绑定 `assets/game/prefab/ui/GbzMenuLayer.prefab`，`stage` 绑定 `Canvas/MAIN/Stage`。
  - 流程：loadingRate=0 -> 顺序执行 `loadingTasks`（预留空数组，后续填充资源预加载）
    -> 保证最小展示时长（minLoadingTime，默认 1s，接入真实加载后可设 0）
    -> 在 Stage 实例化首页 -> loadingRate=1，加载页自行隐藏露出首页。

## 场景变更（gameNew.scene）

- LoadingLayer 节点：空壳 RestoredComponent_017 已移除，替换为 GbzLoadingLayer，fill 已绑定。
- Canvas：新增 ShuiguoGameBootstrap（RestoredComponent_011 空壳保留，无行为）。
- 空壳移除方式备忘：编辑器内存场景不承认直接 removeComponent，最终通过编辑场景 JSON
  （删除组件对象 + 重排全部 `__id__` 索引）后切换临时场景强制从磁盘重载完成。

## 视觉修复（进度条九宫格）

- 现象：加载条底槽与填充的圆角被拉伸变形。根因：两个 SpriteFrame meta 的九宫格 border 全为 0
  （Sprite.type 虽已是 Sliced=1，但无 inset 等于整张图拉伸）。
- 修复（写 meta 后 refresh-asset）：
  - `assets/start-scene/resUI/加载页/加载条底.png.meta`（44x40）：border 四边 15。
  - `assets/start-scene/resUI/加载页/加载条.png.meta`（33x28）：border 四边 13。
- 节点真值：loadbg 592x44；loadfill 初始 250x32、锚点 (0,0.5)、pos x=-289，Widget 左对齐 left=7；
  img（小草莓）52x63。fillMaxWidth=578 时 100% 右缘为 -289+578=289，与底槽右内缘吻合。

## 预览编译缓存坑

- 改 TS 后预览不更新：需在 editor 上下文执行
  `Editor.Message.request('asset-db','refresh-asset','db://assets/scripts/...ts')` 强制重编，
  并确认 `temp/programming/packer-driver/targets/preview/chunks/` 下 chunk 内容已更新。
- 浏览器端旧 chunk 会被 HTTP 缓存，验证时用 `http://localhost:7456/?cb=<timestamp>` 绕过。

## 验收结果（浏览器预览，iPhone 14 Pro 规格，minLoadingTime=1）

- 进度条从 0 渐近增长，黄色填充与末端草莓位置正确，labPro 百分比同步更新。
- rate 置 1 后填充快速补满，100% 时草莓贴到进度条最右端，圆角两端标准无拉伸；
  满格停留约 0.3s 后加载页隐藏（总时长约 2s），Home（GbzMenuLayer）完整显示。
- 控制台无 error/warn；TS 诊断除引擎 cc.d.ts 的 88 条已知项目外报错为 0。

## 后续填充点

- `ShuiguoGameBootstrap.loadingTasks`：按 GbzIndex.loadPrefabbAsync / loadENUM_RES 接入真实资源预加载。
- LoadingState 并入 GbzDataManager；GbzLoadingLayer 的父类后续可切换为重建后的 GbzBaselayer。
- Home 按钮（btn_start 等）逻辑属于后续首页步骤，本步不实现。

## Logo 补齐（Loading + Home，2026-10-17）

- 现象：Loading 页与 Home 页（GbzMenuLayer）顶部均缺游戏 logo。
- 根因：两页的 `bg_notice` 节点结构、三张品牌 logo SpriteFrame 引用（`@f9941`，原图 590x475）
  都在，唯独原版 logoCom 是空壳 RestoredComponent_002（无 onEnable 逻辑），运行时没人把帧赋给 Sprite。
- 修复：删除 `assets/scripts/restored/RestoredComponent_002.ts`，新增
  `assets/scripts/ui/LogoCom.ts`（meta 沿用原脚本 UUID `11693561-9042-4f3a-b854-16e5fd252075`，
  故 gameNew.scene 与 GbzMenuLayer.prefab 中的 `__type__: 11693VhkEJPOrhUFuX9JSB1` 无需改动）：
  - logoFrames 顺序 消个水果/闯关乐消除/解压水果消（index 0/1/2），icon 为本节点 Sprite。
  - onEnable 按品牌名选帧（本包 wxf41b76649658b9e3 = 消个水果，对应原版 GlobalXZ.logo），
    赋帧后下一帧按宽 520 等比缩放（原版 SOUtil.SetSpriteSizeWidth）。
  - 后续 GlobalXZ 重建后，logoName 改为读其 logo 配置。
- 验收：浏览器实测 Loading 页与 Home 页 logo 均正常显示，编辑器组件解析为 LogoCom，3 帧与 icon 绑定完整。
