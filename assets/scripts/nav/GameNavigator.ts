import {
    _decorator,
    assetManager,
    Color,
    Component,
    find,
    Graphics,
    instantiate,
    Label,
    Layers,
    Node,
    Prefab,
    Tween,
    UIOpacity,
    UITransform,
    tween,
} from 'cc';
import { LevelProgress } from '../core/LevelProgress';
import { LevelLaunchConfig } from '../level/LevelLaunchConfig';
import { LevelView } from '../level/LevelView';
import { LevelSession } from '../level/LevelSession';
import { FruitSpawner } from '../level/fruit/FruitSpawner';
import { LevelPlayfield } from '../level/LevelPlayfield';
import {
    COLLECTION_EVENT_FRUIT_ARRIVED,
    COLLECTION_EVENT_FRUIT_SETTLED,
} from '../level/CollectionController';
import { LOSE_REASON_DEADLOCK, LOSE_REASON_FULL } from '../level/LevelPlayfield';
import { LoseLayer } from '../level/LoseLayer';
import { ResurgenceLayer } from '../level/ResurgenceLayer';
import { WinLayer } from '../level/WinLayer';
import { LevelHudIntro } from '../level/LevelHudIntro';
import { CarTransitionLayer } from '../level/CarTransitionLayer';
import { CityTable } from '../level/CityTable';
import { GameAudio } from '../audio/GameAudio';
import { RankLayer } from '../home/RankLayer';
import { FruitBookLayer } from '../home/FruitBookLayer';
import { FruitBookState } from '../home/FruitBookState';

/** 第 14 步子任务 3：汽车过关过场预制体（assets/secondary/prefab/Game）。 */
const CAR_MOVE_PREFAB_UUID = 'a981e4ed-d6a1-4dfb-8671-6f277f4c0e13';

const { ccclass, property } = _decorator;

/**
 * 页面导航（第 1 步）：Home <-> Level 静态页面切换。
 *
 * 单场景架构：所有页面动态挂到 Canvas/MAIN/Stage。
 * Level 固定按 GbzLvCommon（玩法层，在下）、GbzMainLayer（HUD，在上）顺序创建。
 * 后续胜负层、返回首页也统一走这里，保证同一时刻只有一套页面实例。
 */
@ccclass('GameNavigator')
export class GameNavigator extends Component {
    @property({ type: Node, tooltip: '页面容器 Canvas/MAIN/Stage' })
    public stage: Node = null;

    @property({ type: Prefab, tooltip: '首页 GbzMenuLayer' })
    public homePrefab: Prefab = null;

    @property({ type: Prefab, tooltip: '玩法层 GbzLvCommon' })
    public levelCommonPrefab: Prefab = null;

    @property({ type: Prefab, tooltip: '关卡 HUD GbzMainLayer' })
    public levelHudPrefab: Prefab = null;

    @property({ type: Prefab, tooltip: '胜利层 GbzWin2Layer' })
    public winPrefab: Prefab = null;

    @property({ type: Prefab, tooltip: '失败层 GbzLoseFullLayer' })
    public losePrefab: Prefab = null;

    @property({ type: Prefab, tooltip: '复活层 GbzResurgenceLayer' })
    public resurgencePrefab: Prefab = null;

    private home: Node | null = null;
    private levelCommon: Node | null = null;
    private levelHud: Node | null = null;
    private winLayer: Node | null = null;
    private loseLayer: Node | null = null;
    private resurgenceLayer: Node | null = null;
    /** 第 14 步子任务 3：汽车过关过场层。 */
    private carLayer: Node | null = null;
    /** 排行榜弹层（首页 btn_rank 打开）。 */
    private rankLayer: Node | null = null;
    /** 图鉴弹层（首页 btn_fruitBook 打开）。 */
    private fruitBookLayer: Node | null = null;
    /** 弹层预制体懒加载进行中：挡住加载空窗期的连续点击，避免实例化多个弹层。 */
    private rankOpening = false;
    private fruitBookOpening = false;
    /** 首页“功能开发中”通用提示（懒建一次复用）。 */
    private homeToast: Node | null = null;
    private homeToastLabel: Label | null = null;
    /** 每次弹 toast 自增，使上一次的定时隐藏失效（连点时不会提前消失）。 */
    private homeToastToken = 0;

    /**
     * 首页尚未实现功能的按钮（设置/分享/客服/皮肤/加桌面/反馈/粉丝群/
     * 游戏圈/邀请等平台或运营入口），统一“功能开发中”占位响应。
     */
    private static readonly HOME_PLACEHOLDER_BUTTONS = [
        'btn_setting',
        'btn_share',
        'btn_Service',
        'btn_Theme',
        'btn_addShortcut',
        'btn_advise',
        'btn_cbl',
        'btn_fans',
        'btn_gameClub',
        'btn_request',
    ];
    /** 第 9 步：胜负互斥，同一局只结算一次（含最后一对与满载同帧的情况）。 */
    private outcomeLocked = false;
    private navigating = false;
    private levelSession: LevelSession | null = null;
    private levelView: LevelView | null = null;
    private playfield: LevelPlayfield | null = null;
    /** 第 13 步：每局限一次复活（原版 GameMgr.reliveCount=1）。 */
    private reviveUsed = false;

    public onLoad(): void {
        // 恢复场景默认带的透明输入拦截层当前没有任何过场逻辑，先关闭以保证真实点击
        const fade = find('Canvas/UIFade');
        if (fade) fade.active = false;
        const blackInput = find('Canvas/BlackInput');
        if (blackInput) blackInput.active = false;
    }

    public showHome(): void {
        if (this.navigating) return;
        this.navigating = true;
        try {
            this.clearLevel();
            if (!this.home && this.homePrefab && this.stage) {
                this.home = instantiate(this.homePrefab);
                this.stage.addChild(this.home);
                this.bindHomeButton();
            }
            this.updateHomeLevelLabel();
            // 原版 GbzMainLayer 回菜单：playBGM(GAME_BGM = 水果消除bgm)。
            GameAudio.ins.playBGM('水果消除bgm');
        } finally {
            this.navigating = false;
        }
    }

    /**
     * 进入关卡。显式传入 level 时覆盖启动参数（首页开始/下一关/重试统一走这里）；
     * 不传时沿用 LevelLaunchConfig（?level= 调试或 bootstrap autolevel）。
     */
    public showLevel(level?: number): void {
        if (this.navigating || this.levelCommon) return;
        this.navigating = true;
        this.outcomeLocked = false;
        this.reviveUsed = false;
        try {
            if (!this.stage || !this.levelCommonPrefab || !this.levelHudPrefab) {
                console.warn('[GameNavigator] level prefabs or stage missing');
                return;
            }
            if (typeof level === 'number' && level > 0) {
                LevelLaunchConfig.override({ level: Math.floor(level) });
            }
            const cfg = LevelLaunchConfig.options;
            this.levelSession = LevelSession.create();
            const p = this.levelSession.data.parameters;
            console.log(`[LevelLaunch] level=${cfg.level} difficulty=${cfg.difficulty} seed=${cfg.seed}`);
            console.log(`[LevelGen] 第 ${cfg.level} 关共 ${this.levelSession.data.fruits.length} 个水果；`
                + `阶段=${p.typeArr.map((types, s) => p.countArr[s].reduce((a, b) => a + b, 0)).join('/')}，`
                + `moveDir=${p.moveDir}，scaleExp=${p.scaleExp}，`
                + `障碍=${p.obsCount}，木板=${p.woodenObs}，随机盒=${p.randomBox}，`
                + `黑洞=${this.levelSession.data.blackHoles.length}，冰冻=${p.iceCount}`);
            // 原版 GbzMainLayer.show：进关卡切关卡 BGM（循环、音量 0.3，同名不重播）。
            GameAudio.ins.playBGM('水果消除关卡bgm');

            if (this.home) {
                this.home.destroy();
                this.home = null;
            }
            // 进关卡：首页 toast 不应残留在关卡画面上。
            if (this.homeToast) {
                Tween.stopAllByTarget(this.homeToast.getComponent(UIOpacity));
                this.homeToast.active = false;
            }

            this.levelCommon = instantiate(this.levelCommonPrefab);
            this.stage.addChild(this.levelCommon);
            const levelView = this.levelCommon.addComponent(LevelView);
            this.levelView = levelView;
            levelView.bindLevelData(this.levelSession.data);
            const fruitSpawner = this.levelCommon.addComponent(FruitSpawner);
            const playfield = this.levelCommon.addComponent(LevelPlayfield);
            this.playfield = playfield;

            this.levelHud = instantiate(this.levelHudPrefab);
            this.stage.addChild(this.levelHud);

            this.hideDevNodes();
            this.bindLevelButtons();

            // 第 12.4 步：第 2 关先播“难度提升”面板，结束后才生成水果（原版 showAnim 时序）；
            // 左右移关水果照常生成，并播方向大图标飞向 levelBg/img。
            const beginPlay = (): void => {
                if (!this.levelCommon || !this.levelSession) return;
                this.levelSession.bindGoal(fruitSpawner.spawn(this.levelSession.data));
                levelView.bindInitialGoal(this.levelSession.totalGoal);
                playfield.enter(this.levelSession.data, fruitSpawner);
                // 第 12 步：点击冰冻水果弹一次“未解冻”。
                playfield.iceTipHandler = () => this.levelView?.showFullTip('未解冻');
                // 第 13 步：砸掉限制墙扩一个槽位（3→4→5）。
                playfield.slotExpandedHandler = () => this.levelSession?.expandCapacity();
                // 第 12.5 步：尾号 1 主题 1 关开局闪电（HUD 过场在 intro 上）。
                playfield.lightningFlash = () => new Promise<void>(resolve => {
                    intro.playLightning(() => resolve());
                });
                playfield.collectionController?.events.on(
                    COLLECTION_EVENT_FRUIT_ARRIVED,
                    this.onFruitArrived,
                    this,
                );
                playfield.collectionController?.events.on(
                    COLLECTION_EVENT_FRUIT_SETTLED,
                    this.onFruitSettled,
                    this,
                );
            };

            const intro = this.levelHud.addComponent(LevelHudIntro);
            const moveDir = this.levelSession.data.parameters.moveDir;
            if (cfg.level === 2) {
                intro.playLevel2Panel(beginPlay);
            } else {
                beginPlay();
                if (moveDir === 2 || moveDir === 3) {
                    const dirImg = this.levelCommon.getChildByPath('game/levelBg/img');
                    if (dirImg) {
                        intro.playDirectionIntro(moveDir as 2 | 3, dirImg, () => {
                            this.levelView?.showDirectionIcon();
                        });
                    }
                }
            }
        } finally {
            this.navigating = false;
        }
    }

    /** 第 8 步：每个水果飞入篮筐后递减目标，最后一个到达时弹胜利层（原版 checkWin 时机）。 */
    private onFruitArrived(): void {
        if (!this.levelSession || !this.levelView || this.outcomeLocked) return;
        const result = this.levelSession.recordCollected();
        this.levelView.setGoalRemain(result.remain);
        this.levelView.setProgress(result.progress);
        if (result.cleared) {
            this.showWinLayer();
            return;
        }
        // 原版 fruitTween 结尾：出槽释放容量后复检死局（checkSlotLose）。
        const reason = this.playfield?.evaluateLose() ?? null;
        if (reason) this.lose(reason);
    }

    /** 第 9 步：水果落入收集区瞬间做容量/死局判定（原版 addInSlotFruit）。 */
    private onFruitSettled(): void {
        if (this.outcomeLocked) return;
        const reason = this.playfield?.evaluateLose();
        if (reason) this.lose(reason);
    }

    /**
     * 第 9 步：失败只结算一次。对齐原版 overFun：fullTip 提示与
     * GbzLoseFullLayer 几乎同时出现，随后锁定全场输入。
     */
    private lose(reason: string): void {
        if (this.outcomeLocked) return;
        if (!this.levelSession?.markLost(reason)) return;
        this.outcomeLocked = true;
        // 原版 fullSound/checkLose：容量溢出播“装不下啦”，死局播通用失败音。
        GameAudio.ins.play(reason === LOSE_REASON_FULL ? '装不下啦' : '失败');
        this.playfield?.finalizeLose(reason);
        this.levelView?.showFullTip(reason);
        if (this.levelHud) this.levelHud.active = false;
        if (!this.stage || !this.losePrefab) {
            console.warn('[GameNavigator] lose prefab/stage missing');
            return;
        }
        const level = this.levelSession?.data.level ?? LevelLaunchConfig.options.level;
        const node = instantiate(this.losePrefab);
        const layer = node.addComponent(LoseLayer);
        layer.setup({
            onRetry: () => {
                GameAudio.ins.play('ui_click');
                this.gotoLevel(level);
            },
            onHome: () => {
                GameAudio.ins.play('ui_click');
                this.backHome();
            },
        });
        // 原版 GbzLoseFullLayer.onEnable：有复活次数时隐藏失败层、
        // 改弹独立的 GbzResurgenceLayer；其关闭回调再把失败层显示出来。
        const reviveAvailable = !this.reviveUsed && !!this.resurgencePrefab;
        if (reviveAvailable) node.active = false;
        this.stage.addChild(node);
        this.loseLayer = node;

        if (reviveAvailable) {
            const reviveNode = instantiate(this.resurgencePrefab);
            const reviveLayer = reviveNode.addComponent(ResurgenceLayer);
            reviveLayer.setup({
                onRevive: () => {
                    GameAudio.ins.play('ui_click');
                    this.reviveFromLose();
                },
                onClose: () => {
                    GameAudio.ins.play('ui_click');
                    this.closeResurgence();
                },
            }, this.levelSession?.remain ?? 0);
            this.stage.addChild(reviveNode);
            this.resurgenceLayer = reviveNode;
        }
    }

    /** 放弃复活：销毁复活层并显示失败层（原版 GbzResurgenceLayer.onClose）。 */
    private closeResurgence(): void {
        if (this.resurgenceLayer) {
            this.resurgenceLayer.destroy();
            this.resurgenceLayer = null;
        }
        if (this.loseLayer) this.loseLayer.active = true;
    }

    /**
     * 第 13 步：复活（原版 GbzResurgenceLayer 看广告后 reviveFun，本工程免广告）。
     * 撤销失败结算、重新显示 HUD，再让场地把水果退回安全状态。
     */
    private reviveFromLose(): void {
        if (this.reviveUsed) return;
        this.reviveUsed = true;
        if (this.resurgenceLayer) {
            this.resurgenceLayer.destroy();
            this.resurgenceLayer = null;
        }
        if (this.loseLayer) {
            this.loseLayer.destroy();
            this.loseLayer = null;
        }
        this.levelSession?.resetLost();
        this.outcomeLocked = false;
        if (this.levelHud) this.levelHud.active = true;
        this.playfield?.revive();
    }

    /** 第 8 步：胜利只触发一次；锁输入、隐 HUD、挂最小可用 GbzWin2Layer。 */
    private showWinLayer(): void {
        if (this.winLayer || this.outcomeLocked) return;
        this.outcomeLocked = true;
        if (!this.stage || !this.winPrefab) {
            console.warn('[GameNavigator] win prefab/stage missing');
            return;
        }
        this.playfield?.lockInput();
        if (this.levelHud) this.levelHud.active = false;

        const level = this.levelSession?.data.level ?? LevelLaunchConfig.options.level;
        // 原版 GbzGameManager.onGameOver(LAYER_WIN)：弹胜利层瞬间 AddCurLv(1) 持久化。
        const nextLevel = LevelProgress.unlockAfterWin(level);
        GameAudio.ins.play('胜利');
        console.log(`[LevelProgress] level ${level} cleared, next level ${nextLevel}`);
        const node = instantiate(this.winPrefab);
        const win = node.addComponent(WinLayer);
        win.setup({
            onNext: () => {
                GameAudio.ins.play('ui_click');
                // 原版 GbzWin2Layer.onClickButtons：关胜利层 -> 汽车过场 -> onGameStart 下一关。
                this.playCarTransition(level + 1);
            },
            onHome: () => {
                GameAudio.ins.play('ui_click');
                this.backHome();
            },
        }, level);
        this.stage.addChild(node);
        this.winLayer = node;
    }

    /** 胜利层出口：销毁当前关卡后以新关卡号重建（重玩即同号）。 */
    private gotoLevel(level: number): void {
        if (this.navigating) return;
        LevelLaunchConfig.override({ level });
        this.clearLevel();
        this.showLevel();
    }

    /**
     * 第 14 步子任务 3：下一关前的汽车过场（原版 CarMoveLayer）。
     * 山/草依次弹出、车从左开到右、鸣笛；到达后销毁过场并进下一关。
     */
    private playCarTransition(nextLevel: number): void {
        if (this.winLayer) {
            this.winLayer.destroy();
            this.winLayer = null;
        }
        assetManager.loadAny(CAR_MOVE_PREFAB_UUID, (error, prefab: Prefab) => {
            if (error || !this.stage || !this.isValid) {
                console.warn('[GameNavigator] car prefab load failed, go next directly', error);
                this.gotoLevel(nextLevel);
                return;
            }
            const node = instantiate(prefab);
            GameNavigator.syncLayerRecursive(node, this.stage.layer || Layers.Enum.UI_2D);
            this.stage.addChild(node);
            this.carLayer = node;
            const cityName = CityTable.getCityName(nextLevel - 1);
            const transition = node.addComponent(CarTransitionLayer);
            transition.play(cityName, () => {
                node.destroy();
                this.carLayer = null;
                this.gotoLevel(nextLevel);
            });
        });
    }

    private static syncLayerRecursive(node: Node, layer: number): void {
        node.layer = layer;
        for (const child of node.children) GameNavigator.syncLayerRecursive(child, layer);
    }

    /** 首页开始按钮上的关卡号 = 存档当前关（原版 btn_start/level/labLevel）。 */
    private updateHomeLevelLabel(): void {
        const labNode = this.home?.getChildByPath('main/btn_start/level/labLevel');
        const label = labNode?.getComponent(Label);
        if (label) label.string = `${LevelProgress.currentLevel}`;
    }

    public backHome(): void {
        this.showHome();
    }

    private bindHomeButton(): void {
        if (!this.home) return;
        const btnStart = this.home.getChildByPath('main/btn_start');
        if (btnStart) {
            btnStart.on(Node.EventType.TOUCH_END, this.onStartClick, this);
        } else {
            console.warn('[GameNavigator] main/btn_start not found in home prefab');
        }
        const btnRank = this.home.getChildByName('btn_rank');
        btnRank?.on(Node.EventType.TOUCH_END, this.onRankClick, this);
        const btnFruitBook = this.home.getChildByName('btn_fruitBook');
        btnFruitBook?.on(Node.EventType.TOUCH_END, this.onFruitBookClick, this);
        // 原版 fruitBookShow：红点 = fruitBookLastLevel < game_level。
        const bookBadge = btnFruitBook?.children[0] ?? null;
        if (bookBadge) bookBadge.active = FruitBookState.hasNew(LevelProgress.currentLevel);
        // 其余首页按钮（平台/运营/设置等入口）当前未实现，统一占位响应。
        for (const name of GameNavigator.HOME_PLACEHOLDER_BUTTONS) {
            const button = this.home.getChildByName(name);
            button?.on(Node.EventType.TOUCH_END, this.onPlaceholderClick, this);
        }
    }

    /** 未实现的首页按钮：点击音 + “功能开发中”toast。 */
    private onPlaceholderClick(): void {
        GameAudio.ins.play('ui_click');
        this.showHomeToast('功能开发中');
    }

    /**
     * 首页中央 toast：半透明黑底白字，淡入 -> 停留 -> 淡出。
     * 连续触发时重启动画并顺延隐藏，纯代码节点不依赖任何美术资源
     *（Graphics 画圆角矩形；不用内置 default-sprite-frame——预览打包后
     * 跨 bundle 取到的对象 instanceof SpriteFrame 为 false，Sprite 不渲染），
     * 避免资源缺失时提示本身也打不开。
     */
    private showHomeToast(text: string): void {
        if (!this.stage) return;
        if (!this.homeToast) {
            const toast = new Node('homeToast');
            toast.layer = this.stage.layer || Layers.Enum.UI_2D;
            toast.addComponent(UITransform).setContentSize(480, 86);
            const background = toast.addComponent(Graphics);
            background.fillColor = new Color(0, 0, 0, 190);
            background.roundRect(-240, -43, 480, 86, 18);
            background.fill();
            toast.addComponent(UIOpacity);

            const labelNode = new Node('label');
            labelNode.layer = toast.layer;
            labelNode.addComponent(UITransform).setContentSize(460, 60);
            const label = labelNode.addComponent(Label);
            label.fontSize = 34;
            label.lineHeight = 44;
            label.horizontalAlign = Label.HorizontalAlign.CENTER;
            label.verticalAlign = Label.VerticalAlign.CENTER;
            label.color = new Color(255, 255, 255, 255);
            toast.addChild(labelNode);
            this.homeToastLabel = label;
            this.homeToast = toast;
        }

        const toast = this.homeToast;
        if (this.homeToastLabel) this.homeToastLabel.string = text;
        if (toast.parent !== this.stage) this.stage.addChild(toast);
        toast.setPosition(0, 140);
        toast.active = true;

        const opacity = toast.getComponent(UIOpacity)!;
        const token = ++this.homeToastToken;
        Tween.stopAllByTarget(opacity);
        opacity.opacity = 0;
        tween(opacity)
            .to(0.15, { opacity: 255 })
            .delay(1.1)
            .to(0.25, { opacity: 0 })
            .call(() => {
                // 期间又弹过新 toast 则本次隐藏作废。
                if (token === this.homeToastToken && toast.isValid) toast.active = false;
            })
            .start();
    }

    private onStartClick(): void {
        if (this.navigating) return;
        GameAudio.ins.play('ui_click');
        // 正式链路始终从存档关进入；?level= 调试覆盖只对 autolevel/直链生效。
        this.showLevel(LevelProgress.currentLevel);
    }

    /** 首页 btn_rank：懒加载 GbzRankLayer 排行榜弹层到 Stage。 */
    private onRankClick(): void {
        if (this.rankLayer || this.rankOpening) return;
        // 两个首页弹层互斥：另一个已打开或正在加载时不再弹。
        if (this.fruitBookLayer || this.fruitBookOpening || !this.stage) return;
        this.rankOpening = true;
        GameAudio.ins.play('ui_click');
        assetManager.loadAny(RankLayer.prefabUuid, (error, prefab: Prefab) => {
            this.rankOpening = false;
            if (error || !this.stage || !this.isValid) {
                console.warn('[GameNavigator] rank prefab load failed', error);
                return;
            }
            const node = instantiate(prefab);
            GameNavigator.syncLayerRecursive(node, this.stage.layer || Layers.Enum.UI_2D);
            const layer = node.addComponent(RankLayer);
            layer.setup(() => {
                node.destroy();
                this.rankLayer = null;
            });
            this.stage.addChild(node);
            this.rankLayer = node;
        });
    }

    /** 首页 btn_fruitBook：懒加载 GbzFruitBookLayer 图鉴弹层到 Stage。 */
    private onFruitBookClick(): void {
        if (this.fruitBookLayer || this.fruitBookOpening) return;
        if (this.rankLayer || this.rankOpening || !this.stage) return;
        this.fruitBookOpening = true;
        GameAudio.ins.play('ui_click');
        assetManager.loadAny(FruitBookLayer.prefabUuid, (error, prefab: Prefab) => {
            this.fruitBookOpening = false;
            if (error || !this.stage || !this.isValid) {
                console.warn('[GameNavigator] fruit book prefab load failed', error);
                return;
            }
            const node = instantiate(prefab);
            GameNavigator.syncLayerRecursive(node, this.stage.layer || Layers.Enum.UI_2D);
            const badge = this.home?.getChildByName('btn_fruitBook')?.children[0] ?? null;
            const layer = node.addComponent(FruitBookLayer);
            layer.setup(() => {
                node.destroy();
                this.fruitBookLayer = null;
                // 原版 GbzFruitBookLayer.onDisable：查看后红点消失。
                if (badge) badge.active = false;
            });
            this.stage.addChild(node);
            this.fruitBookLayer = node;
        });
    }

    private bindLevelButtons(): void {
        if (!this.levelHud) return;
        const btnExit = this.levelHud.getChildByName('btn_exit');
        if (btnExit) {
            btnExit.on(Node.EventType.TOUCH_END, () => {
                GameAudio.ins.play('ui_click');
                this.backHome();
            }, this);
        } else {
            console.warn('[GameNavigator] btn_exit not found in GbzMainLayer');
        }
        // 第 13 步：刷新/打乱（GbzMainLayer skills 第 2 个按钮 btn_skill_board）。
        const btnDisturb = this.levelHud.getChildByPath('skills/btn_skill_board');
        btnDisturb?.on(Node.EventType.TOUCH_END, this.onDisturbClick, this);
        // 第 13 步：消除/磁铁（skills 第 1 个按钮 btn_skill_core）。
        const btnRemove = this.levelHud.getChildByPath('skills/btn_skill_core');
        btnRemove?.on(Node.EventType.TOUCH_END, this.onRemoveClick, this);
    }

    /** 第 13 步：打乱按钮；第 1 关原版禁用，只提示“第二关使用”。 */
    private onDisturbClick(): void {
        if (this.outcomeLocked) return;
        GameAudio.ins.play('ui_click');
        const result = this.playfield?.disturbFruits();
        if (result === 'level-locked') this.levelView?.showFullTip('第二关使用');
        else if (result === 'executed') GameAudio.ins.play('刷新');
    }

    /** 第 13 步：磁铁按钮；第 1 关原版禁用，无配对目标时给出反馈。 */
    private onRemoveClick(): void {
        if (this.outcomeLocked) return;
        GameAudio.ins.play('ui_click');
        const result = this.playfield?.removeFruitPair();
        if (result === 'level-locked') this.levelView?.showFullTip('第二关使用');
        else if (result === 'no-target') this.levelView?.showFullTip('没有可消除的水果');
        else if (result === 'executed') GameAudio.ins.play('磁铁音效');
    }

    /**
     * 第 0 步：正式界面隐藏调试/运营开发节点。
     * GbzMainLayer：btn_Win（直接胜利）、jumpLv（跳关）、linearDamping（阻尼调试）。
     */
    private hideDevNodes(): void {
        if (this.levelHud) {
            for (const name of ['btn_Win', 'jumpLv', 'linearDamping']) {
                const node = this.levelHud.getChildByName(name);
                if (node) node.active = false;
            }
        }
    }

    private clearLevel(): void {
        if (this.rankLayer) {
            this.rankLayer.destroy();
            this.rankLayer = null;
        }
        if (this.fruitBookLayer) {
            this.fruitBookLayer.destroy();
            this.fruitBookLayer = null;
        }
        const collection = this.playfield?.collectionController ?? null;
        collection?.events.off(COLLECTION_EVENT_FRUIT_ARRIVED, this.onFruitArrived, this);
        collection?.events.off(COLLECTION_EVENT_FRUIT_SETTLED, this.onFruitSettled, this);
        this.playfield = null;
        this.levelView = null;
        this.levelSession = null;
        this.outcomeLocked = false;
        if (this.carLayer) {
            this.carLayer.destroy();
            this.carLayer = null;
        }
        if (this.resurgenceLayer) {
            this.resurgenceLayer.destroy();
            this.resurgenceLayer = null;
        }
        if (this.loseLayer) {
            this.loseLayer.destroy();
            this.loseLayer = null;
        }
        if (this.winLayer) {
            this.winLayer.destroy();
            this.winLayer = null;
        }
        if (this.levelHud) {
            this.levelHud.destroy();
            this.levelHud = null;
        }
        if (this.levelCommon) {
            this.levelCommon.destroy();
            this.levelCommon = null;
        }
    }
}
