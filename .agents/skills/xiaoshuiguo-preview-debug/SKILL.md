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
