---
name: xiaoshuiguo-preview-debug
description: "消水果 Cocos Creator 3.8.8 重建工程的速查：预览运行时报错抓取、触摸链路自动复现、原包预制体/资源反查、从反混淆源码提取配置数据、按原包时序还原音频/粒子/过场/弹层等表现层功能，以及一路踩过的 Cocos 3.8 坑。遇到“预览报错/按钮报错/要对照原包实现一个功能/要从混淆代码挖配置表/预制体贴图引用存疑”时使用。"
---

# 消水果重建工程速查

目标：**30 秒内拿到真实报错堆栈**；还原原版功能时**先证据后实现**，不凭文件名猜。

## 1. 抓预览浏览器报错（首选，最快）

项目日志（`temp/logs/project.log`、MCP `search_project_logs`）**不含浏览器运行时错误**，
只有 Cocos 编辑器侧日志。浏览器错误必须从 iab 标签抓：

```js
// 工具：mcp__cua_repl__js
// 带唯一 cb 防缓存；URL 参数（autolevel/level/debuglose 等）按需要拼
const tab = await cua.createBrowserTab(
  "iab",
  "http://localhost:7456/?autolevel=1&level=2&cb=" + Date.now(),
  { visible: true },
);
globalThis.__tab = tab;
await tab.playwright.waitForTimeout(8000); // 等加载+关卡生成
const logs = await tab.dev.logs();
nodeRepl.write(logs
  .filter(l => /TypeError|ReferenceError|Uncaught|destroy twice|is missing/i.test(l.message))
  .map(l => l.timestamp.slice(11,23) + " [" + l.level + "] " + l.message).join("\n"));
```

- `tab.dev.logs()` 一次拿全部 console（error 含完整堆栈和 chunk 行号）。
- 关键业务日志 `[LevelLaunch]`、`[LevelGen]`、`[FruitSpawner]` 可确认页面/关卡状态。
- 堆栈里 `chunks/xx/xxxx.js:行` 可对照 `temp/programming/packer-driver/targets/preview/chunks/` 下编译产物。
- **脚本热更后旧标签缓存旧 chunk**：refresh-asset 后务必 `createBrowserTab` 新开标签
  （iab 沙箱里 `location.reload/href` 都不可用）。

## 2. 已验证的死路，别再走

- **Playwright 真实点击到不了 Cocos 触摸系统**：`locator("#GameCanvas").click()`
  对竖屏触摸输入无效。不要做坐标映射、网格扫描、旋转方向枚举，全部试过。
- `tab.playwright.evaluate()` 是受限沙箱：无 `MouseEvent`、无 `createEvent`、
  无 `fetch`/`performance`、`window.cc` 为 undefined。只能读 DOM 几何。
- **截图链路基本不可用**：MCP `capture_preview_screenshot` 经常 No BrowserWindow；
  `elementScreenshot` 必须传数值 x/y 且 canvas 有模拟器旋转偏移，签名难用。
  **视觉/声音问题直接请用户人肉验证，不要纠缠截图**。
- 不要手解原包压缩序列化 JSON（`[version,uuids,keys,classes,masks,instances,...]`），
  mask 的 OFFSET 编码极易错位。用第 4 节的引擎反序列化或直接 python 解析工程内预制体。

## 3. 自动验证：URL 钩子 + 临时日志三件套

触摸模拟不了、视觉要靠人时，**自动化只验证"链路执行 + 数据正确 + 0 报错"**：

1. 业务代码里加临时 URL 参数钩子（统一前缀 `TMP`，如 `TMPDBGEFF`/`TMPDBCAR`/`TMPDBGWIN`），
   `scheduleOnce` 直接调内部私有方法（`this as unknown as { fn }` 强转），需要触发内部链路时用。
2. 关键节点 `console.log('[TMPXXX]', ...)` 打执行证据和数据（取到的节点数、坐标、
   配置表结果、资源 uuid）。
3. 新标签 `?tmpxxx=1` 等动画播完，`dev.logs()` 过滤 `TMPXXX` 确认执行 + 过滤
   TypeError 等确认 0 报错。**验完立刻删除钩子和日志，`grep -rn "TMP" assets/scripts` 归零**。

要点：
- 读 URL：`new URLSearchParams(globalThis.location?.search ?? '')`，整体 try/catch（非浏览器环境）。
- 回调里再包 `try/catch + console.error`，异步错误一样进 dev.logs。
- 时间线按动画时长排（锤子 0.5+0.26s、汽车 3s），等待时间给足。

历史钩子参数（已删除，需要时照模式重建）：`debuglose=1`（自动失败）、`dbgeff=1`（四种特效）、
`dbgcar=1`（汽车过场）、`dbgwin=1`（胜利层）。

## 4. 预制体与资源反查

**工程内预制体直接 python 解析**（比引擎反序列化快）：

```python
import json
d = json.load(open('assets/secondary/prefab/Game/GbzWin2Layer.prefab'))
for o in d:
    if isinstance(o, dict) and o.get('__type__') == 'cc.Node':
        print(o['_name'], o.get('_active'), o.get('_lpos'))
    if isinstance(o, dict) and o.get('__type__') == 'cc.Sprite':
        print(o['node'], o.get('_spriteFrame'), 'fillType', o.get('_type'))
```

- 节点树：`cc.Node` 的 `_name/_active/_lpos/_children/__id__`；组件在 `_components`。
- 图片引用：Sprite `_spriteFrame.__uuid__`，压缩 id 形如 `xxxx@f9941`；
  `@f9941` = spriteFrame 子资源，`@6c48a` = texture。
- uuid → 路径：MCP editor 上下文 `Editor.Message.request('asset-db','query-asset-info', uuid)`。
- 整包引用校验：MCP `validate_prefab_references`（target 给 db:// 路径），
  missingCount=0 才能放心 instantiate。
- 图片资源在工程中的实际 spriteFrame uuid：读 `xxx.png.meta` 的
  `subMetas.f9941.uuid`（写常量表时用这个，loadAny 直接拿到 SpriteFrame）。

**原包预制体**（在 unpacked 目录）用正在运行的引擎反序列化（仅 scene 上下文）：
先 `cp` 进工程 tmp，再 `cc.deserialize(json, new cc.deserialize.Details())`，
遍历 `uuidList/uuidObjList/uuidPropList`，压缩 uuid 到对应子包 `config.json`
的 `uuids[]/paths[]` 查路径。用完删 tmp/orig-*.json。

实测更简单的配方（排行榜行模板验证通过）：
- editor 上下文不能 require('cc')；scene 上下文可以直接用全局 cc，
  且能用 require('fs') 读绝对路径（safety_checks=false）。
- 打包 JSON 是数组 [ver, depUuids, keys, classes, masks, ...]：json[1] 是
  该预制体依赖的全部 uuid（含 @f9941），先打印它拿图片/材质清单。
- cc.deserialize(json) 返回 Prefab，根节点是 res.data（res.isNode=false，
  别直接遍历 res）。递归读 name/position/UITransform.contentSize/components
  （Sprite 的 spriteFrame._uuid/type/color、Label 的 string/fontSize/color、
  MissingScript 上的自定义属性也能直接读）。
- 22 位压缩 uuid 本地解码：base64 字母表 A-Za-z0-9+/，首 2 字符保留，
  之后每 2 字符解 3 个 hex，拼成 8-4-4-4-32 标准 uuid。

九宫格（SLICED）资源恢复：
- 恢复出的 png.meta 默认 border 全 0，SLICED 会每帧刷
  Sliced.updateUVs reading '0'（spriteFrame.uvSliced 为空）。
  运行时改 sf.insetLeft 等无效（UV 导入时算好）。正确做法：改
  xxx.png.meta 的 subMetas.f9941.userData 的
  borderTop/Bottom/Left/Right，refresh-asset 该 png，验证
  library 下 <uuid>@f9941.json 的 content.capInsets=[l,t,r,b]，
  再新开预览标签（旧标签缓存旧资源）。
- border 数值首选权威来源：原包子包 config.json 的 paths 按资源名
  找到 spriteFrame 的 uuid 下标，packs{packKey:[uuid下标...]} 定位
  pack 文件（import/<key前2>/<key>.json，磁盘文件名可能与 key 差一字符），
  该 pack 的 d[5] 里按名字找 cc.SpriteFrame 实例，读
  `"capInsets":[left,top,right,bottom]`（引擎语义就是 l/t/r/b，
  见 sprite-frame.ts INSET_LEFT=0..）。已验证：排行榜底板01
  [31,0,29,35]、图鉴设置面板 [35,113,32,41]、排行榜行底 [50,25,30,25]。
  原包没给数据时再按 native 下 png 像素视觉分段。

loadAny 取图片必须带子资源后缀：裸 uuid 会拿到 ImageAsset 而不是
SpriteFrame，症状是赋帧时报 _applySpriteSize reading 'width' 或
Sliced uvSliced undefined。常量表一律存 uuid 拼 @f9941。
代码动态建 Sprite 时先把 sizeMode 设 CUSTOM 再赋 spriteFrame，
默认 RAW 模式在原尺寸未就绪时同样会报 width undefined。

## 5. 还原一个原版功能的标准路径（音频/特效/过场/弹层通用）

按这个顺序，基本不会返工：

1. **定资源**：`find assets -iname "*xxx*"` 找预制体/图片；python 解析预制体拿
   节点名、坐标、组件类型（ParticleSystem2D/MotionStreak/Animation/RichText 的
   playOnLoad/autoRemoveOnFinish/_type/clips）；`validate_prefab_references` 验引用。
2. **定逻辑**：`rg -n "预制体名|关键节点名|枚举名" tmp/recovered-src/readable/`，
   顺着 `onEnable/play/losePanelTween` 读调用链，**精确记录时序**
   （delay/to 秒数、easing、call 回调顺序、限流参数），这些数字要逐字照搬。
3. **定数据**：枚举/配置表用第 6 节脚本提取，提取完与原包语义数字对账。
4. **挂接点**：表现挂到**已有**时序点（消除 tween 的 `.call`、接触回调、
   导航回调），不改玩法主流程、不改胜负判定时机。
5. **资源加载**：UUID 常量表（冻结对象）+ `assetManager.loadAny(uuid, cb)` +
   Map 缓存/去重并发；异步实例化后必须复检 `this.node.isValid && 目标.isValid`。
6. **动态节点**：`new Node` + `addComponent`（不进场景文件，免保存）；
   预制体实例递归同步 layer（常残留 GIZMOS）；原脚本失效的预制体实例化后
   按 `constructor.name === 'MissingScript'` 剔除。
7. **收尾**：tsc → editor refresh（新建目录/文件后先让 meta 生成）→
   第 3 节三件套自动验证 → 删临时代码 → 交人肉看视觉/听声音。

**GridLayerListView（9d992 池化列表）失效时的原生替代**（图鉴/排行榜行模板验证通过）：
- 面板预制体里 content 上禁用的 Layout 参数是图鉴残留（paddingLeft30/
  spacingX12/spacingY38），实际定位全在 GridListView.initParam/addItems：
  纵向时 itemSize=格高+spaceY、spaceSize=格宽+spaceX、
  cellNum=floor(内容宽/spaceSize)；content 锚点(0.5,1)、与 view 等宽、
  高=行数*itemSize、y=view高/2；colX=(col-(cellNum-1)/2)*spaceSize、
  rowY=-itemSize*(row+0.5)。spaceX/Y 取挂在 list 节点的 9d992 序列化值
  （图鉴 spaceY=28，排行榜 spaceY=10；行模板根 scale 不能漏，排行榜行底是 0.9）。
- 175 格直接全量 instantiate 无性能问题（每格约 5 节点），不必复刻对象池；
  批量 loadAny 加载去重后的真实贴图 uuid，未迁入类目不套默认图冒充，
  用剪影+文字呈现（图鉴无图类目处理）。

已建的可复用层：
- `assets/scripts/audio/GameAudio.ts`：音效单例（play 限流/playCombo/playBGM/
  preloadSfx），新音效只往 `CLIP_UUID` 加 UUID。
- `assets/scripts/level/effects/EffectLayer.ts`：effPr/streak/landEff/boxBoom/chuizi
  统一特效层（`EffectLayer.instance`），新表现特效往这里加。

## 6. 从反混淆产物提取静态配置表

混淆后的配置长这样（regenerator + 属性包装）：

```js
Pu(t = {}, "name", 0), Pu(t, "cityNameArr", 0), ...,
(n = t).name = "广东省", n.cityNameArr = ["南京","苏州"], n.simpleName = "广东";
```

- **属性包装函数忽略**，正则只抓真实赋值：`\["name"\]\s*=\s*"([^"]+)"`。
- **状态机 switch（`switch(++D, N)` + `case N:` 乱序跳转）不要尝试还原控制流**，
  直接在"函数起点锚点 ~ 下一表锚点"切片后全文正则，按文本出现顺序即真实顺序。
- 多表同文件（如 `var e, a, u`）：用锚点切片，如
  `src.find('e = function')` ~ `src.find('u = [[')`、`a = function` 同终点。
- 数组字面量表（`u = [["人参果",0],["冬瓜",2],...]`）直接正则提 pair；
  **个别元素是混淆变量名**（`[Y, 2]`、`[Z, 3]`、`[q, 3]`），正则计数与
  原包语义总数对账能发现漏项（实测 175 项、49 项有工程图）。
- **提取后必须对账**：城市表 e=100+a=100=200（与 `% 200` 吻合）、ENUM_CLIP 24 个、
  particleType 7 种。数字对不上说明切片/正则漏了，回头查变量名元素。
- 生成 TS 数据文件：字面量表声明成
  `ReadonlyArray<readonly [string, string, number]>`，否则三元组被推断成联合数组、
  赋不了接口；映射表用 `Object.freeze({...})`。
- 参考产物：`CityTable.ts`（省名/简称/城市数 + getCityName/getProgress）、
  `CollectibleTable.ts`（175 项 + spriteFrame uuid）、`GameAudio.CLIP_UUID`（24 音频）。
- 提取脚本是一次性 python heredoc，不进仓库；中间产物可临时落 `tmp/city_table.json`。
- **关卡生成器尾号家族**（`ReferenceMgr.initLvCfg` 按 `level%10` 分支）：
  0=黑洞静止、1/2/3/5=三阶段带状下移、4=右移、6=道具布局网格下移、
  7=随机盒下移、8=关节连接下移、9=左移。排查"某一关水果数为 0"先看
  `[LevelGen]` 日志的总数和阶段串，再对照对应分支。
- **尾号 6 道具布局关**不走 typeArr/countArr，走 `ReferenceLayMgr` 的
  itemLayout 独立分支，水果摆 `GridManager` 固定格点（格距 83，
  `stopDownY=728-halfH`）：phase=`(level-6)%40` 四选一
  InitPart(7,42)/InitPart2(7,45)/InitPart7(7,48)/InitPart8(7,89)，
  InitPart7/8 是行宽状态机，翻译时按"每行先更新状态再产格、行末再翻转"
  逐行对账。总数 gt=130/182+.../min(238,...)/min(268,...)（注意边界
  是 t>10、t>30 不含等号，t=10/30 是黑洞关不会进来）。类型先成对 push
  到两段数组（前 floor(gt/3) 个取 1..11），各自 shuffle 后**自底行**逐格
  shift；`ReferenceMgr.RandomInt` 用 Math.random，而 `shuffleArray`
  走实例 `this.random`（也是 Math.random），无需消耗种子 rng。
  回归在 `tmp/verify-level-generator.cjs`：旧参考 tmp/gen.js 没实现该分支，
  尾号 6 不能逐字段对比，改查网格不变量（每行<=7、y=stopDownY+83*row、
  |x|<=336、类型成对偶数、随机盒=min(randomBox,总数)）。

## 7. Cocos 3.8 踩坑清单（全部实测）

- **一个 .ts 文件只能有一个 `@ccclass` Component**，否则启动报
  "Each script can have at most one Component" +
  `CCClass ... Cannot set properties of null (setting '_sealed')`。
  辅助组件拆独立文件（如 StreakFollow 从 EffectLayer 拆出）。
- `NodePool` 构造**无参**（`new NodePool()`，不要传名字）。
- 节点销毁期间 `node.children` 可能已置 null：`onDestroy` 里遍历用
  `this.xxx?.children?.forEach(...)`，否则连刷 N 次 NPE。
- AudioClip 时长 API 是 `getDuration()`，没有 `.duration` 属性。
- BGM：常驻节点（`director.addPersistRootNode`）+ 独立 AudioSource，
  loop/volume 0.3/同名不重播/`Game.EVENT_HIDE|SHOW` 暂停恢复；
  短音效用同一个 sfxSource 的 `playOneShot`。
- Sprite 填充条：`_type: 3`（FILLED），`fillRange` 0~1 可直接 tween；
  初始值/目标值按业务进度算（如 `(cur-1)/total` → `cur/total`）。
- MotionStreak 只是残影绘制组件，跟随目标要**另写组件**在 update 里
  每 3 帧 `setPosition(target.position)`，并 scheduleOnce 3s 自毁。
- ParticleSystem2D：`playOnLoad:false` 的手动 `resetSystem()`；
  `autoRemoveOnFinish:true` 的一次性粒子实例化后不用管回收。
- 旋转 tween 直接用 `node.angle`（度数），等价原版 `Quat.fromEuler` 的 z 轴旋转。
- tsconfig target 偏低：**`Array.prototype.includes` 不可用**，用 `indexOf(...) < 0`。
- `globalThis` 顶层声明在 execute_javascript 里会跨调用冲突（Identifier already
  declared），用 IIFE `(async()=>{...})()` 或唯一变量名包裹。
- 预制体上原脚本 uuid 失效 → MissingScript：自己的脚本 `addComponent` 即可，
  预制体实例上的 MissingScript 主动剔除（chuizi 即如此）。
- **代码动态建纯色底不要用 `builtinResMgr.get('default-sprite-frame')`**：
  预览打包（chunk 分包）后取到的对象与游戏 bundle 的 SpriteFrame 是跨类域，
  `instanceof SpriteFrame` 为 false，赋给 Sprite 后**完全不渲染**（节点上的
  Label 照常显示，极易误判成尺寸/层级问题）。零美术资源的圆角底色块直接用
  `Graphics`：`addComponent(Graphics)` + `fillColor` + `roundRect(...)` +
  `fill()`，配 UIOpacity 淡入淡出正常。排查手段：打日志看
  `spriteFrame instanceof SpriteFrame` 和 `rect.width`，不要只看对象非空。
- **首页/通用 toast 这类纯代码 UI 的资源依赖为 0**（Graphics+Label），
  连点用自增 token 让旧的定时隐藏失效；离开页面（进关卡）时 stop 动画并
  `active=false`，避免残留到下一个界面。
- **异步资源加载失败必须保住"数据 ↔ 实体 1:1"**：FruitFactory.acquire 失败曾让
  spawner 跳过该水果，但胜利目标按 `data.fruits.length` 绑定 → 剩余数永远到不了 0，
  死关；尾号 0 黑洞关还会让 `spawner.entities[anchorIndex]` 锚点索引整体错位；
  洞吐果失败同理丢队列。修复模式：loadAny 失败自动重试（150/350ms 两次），
  再失败用"教学关硬依赖必然存在"的 type1 预制体做视觉替身，实体 pairId 仍写真
  类型（FruitEntity.setup 与 prefab 无关），配对/计数逻辑零影响，同类型只 warn 一次。
  排查这类问题先看 `[FruitSpawner] spawned created/total` 是否相等。
- **容错链路用 URL 故障注入验证**（比手改 uuid 安全）：acquire 开头临时加
  `?TMPBADFRUIT=<type>` 命中即 throw，验完删除；断言日志打替身实体的
  `entity.pairId`（必须=真类型）和 Sprite 实际 `spriteFrame.name`（必须=替身图，
  如"西瓜"），以及 spawned 总数不缺。注意 preload 走 loadPrefab 不经过 acquire，
  注入点放 acquire 才能同时绕过缓存。
- **异步表演函数的业务回调必须在失败路径也执行**：playHammer(wall,onStrike) 的
  拆墙/第二面墙升级/wallBreaking 复位全在 onStrike 里，chuizi 预制体加载失败时
  原实现直接 return → 墙永驻、点击锁永久卡死、扩槽链路断裂（容量虽已 +1）。
  规则：纯表现异步函数（特效/音效/动画）的 onDone 回调是业务契约，加载失败时
  立即补调；场地整体销毁（node 无效）时才允许跳过。特效加载器同样加 150/350ms
  重试（EffectLayer.loadWithRetry）。验证用 TMP 钩子在 enter 里 scheduleOnce
  直接调私有 `breakWall`（Playwright 点不到 Cocos 触摸），日志序列断言
  cap 3→4→5、两面墙 isValid 转 false、wallBreaking 最终回 false。
- **懒加载弹层防连点：在途标志要同步置位**。守卫只查已实例化节点不够——
  节点在 loadAny 回调里才赋值，加载空窗期连点会实例化多层。模式：
  click 时同步 `xxxOpening=true`，回调里复位（失败也复位可重试），
  同类/互斥弹层都查 `layer||opening`。验证：TMP 钩子同 tick 连点 3 次
  （?TMPPOPUP=spam）和两按钮同帧各点一次（cross），1.5s 后数
  stage.children 里对应 Component 实例必须只有 1 个。

## 8. 改动后的标准动作

- 类型检查（约 1s）：
  `/Applications/Cocos/Creator/3.8.8/CocosCreator.app/Contents/Resources/resources/3d/engine/node_modules/typescript/bin/tsc --noEmit -p tsconfig.json 2>&1 | grep -v engine/`
- 改 TS：editor 上下文 `Editor.Message.request("asset-db","refresh-asset","db://assets/...")`。
  **新建目录后**先 refresh 目录生成 `.meta`，再 refresh 文件。
- 改场景属性（给组件新挂 Prefab 字段）：先 refresh 脚本等热更（新字段才注册为
  可序列化），再 scene 上下文 `loadAny({uuid,type:cc.Prefab})` 赋值，
  `Editor.Message.request("scene","save-scene")` 持久化，最后 grep 场景文件确认。
- 已知无害报错可忽略：`lightMaterial`/`materialAttacked` 材质缺失
  （727e741a、b6c5f405），GbzFruitDownLayer/GbzLvCommon 预制体引用。
- 临时钩子/日志收尾：`grep -rn "TMP" assets/scripts` 必须为 0。
- 每完成一个功能在 `tmp/level页重建计划.md` 追加固定格式交付记录
  （改动/原版依据/验证结果/已知差异/人肉验收清单）。

## 9. 常见报错模式

- `Cannot read properties of null (reading 'off')` + 一串 "destroy twice"：
  组件 `onDestroy` 里对子节点 `.off()` 时子节点已先销毁 → `if (node?.isValid)` 守卫；
  同类还有 `children` 为 null（第 7 节）。
- "The asset xxx is missing! used by <Prefab> PropName"：预制体引用了工程里
  不存在的 uuid，按第 4 节反查原包资源补图或改引用。
- "Each script can have at most one Component"：一文件多组件，拆文件。
- 按钮"文字叠字"：底图本身烤了文字（如 `按钮.png`=返回主页）又叠了子节点文字图；
  以预制体 Details/反查结果为准，不要凭文件名猜。
- 异步回调里改节点报 null：loadAny/tween 回调第一行复检
  `this.isValid && node.isValid`，关卡切换会让整批待回调失效。
