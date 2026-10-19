import { _decorator, Component, find, instantiate, Label, Node, Prefab } from 'cc';
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
import { WinLayer } from '../level/WinLayer';

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

    private home: Node | null = null;
    private levelCommon: Node | null = null;
    private levelHud: Node | null = null;
    private winLayer: Node | null = null;
    private loseLayer: Node | null = null;
    /** 第 9 步：胜负互斥，同一局只结算一次（含最后一对与满载同帧的情况）。 */
    private outcomeLocked = false;
    private navigating = false;
    private levelSession: LevelSession | null = null;
    private levelView: LevelView | null = null;
    private playfield: LevelPlayfield | null = null;

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

            if (this.home) {
                this.home.destroy();
                this.home = null;
            }

            this.levelCommon = instantiate(this.levelCommonPrefab);
            this.stage.addChild(this.levelCommon);
            const levelView = this.levelCommon.addComponent(LevelView);
            this.levelView = levelView;
            levelView.bindLevelData(this.levelSession.data);
            const fruitSpawner = this.levelCommon.addComponent(FruitSpawner);
            this.levelSession.bindGoal(fruitSpawner.spawn(this.levelSession.data));
            levelView.bindInitialGoal(this.levelSession.totalGoal);
            const playfield = this.levelCommon.addComponent(LevelPlayfield);
            this.playfield = playfield;
            playfield.enter(this.levelSession.data, fruitSpawner);
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

            this.levelHud = instantiate(this.levelHudPrefab);
            this.stage.addChild(this.levelHud);

            this.hideDevNodes();
            this.bindLevelButtons();
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
            onRetry: () => this.gotoLevel(level),
            onHome: () => this.backHome(),
        });
        this.stage.addChild(node);
        this.loseLayer = node;
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
        console.log(`[LevelProgress] level ${level} cleared, next level ${nextLevel}`);
        const node = instantiate(this.winPrefab);
        const win = node.addComponent(WinLayer);
        win.setup({
            onNext: () => this.gotoLevel(level + 1),
            onReplay: () => this.gotoLevel(level),
            onHome: () => this.backHome(),
        });
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
    }

    private onStartClick(): void {
        if (this.navigating) return;
        // 正式链路始终从存档关进入；?level= 调试覆盖只对 autolevel/直链生效。
        this.showLevel(LevelProgress.currentLevel);
    }

    private bindLevelButtons(): void {
        if (!this.levelHud) return;
        const btnExit = this.levelHud.getChildByName('btn_exit');
        if (btnExit) {
            btnExit.on(Node.EventType.TOUCH_END, () => this.backHome(), this);
        } else {
            console.warn('[GameNavigator] btn_exit not found in GbzMainLayer');
        }
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
        const collection = this.playfield?.collectionController ?? null;
        collection?.events.off(COLLECTION_EVENT_FRUIT_ARRIVED, this.onFruitArrived, this);
        collection?.events.off(COLLECTION_EVENT_FRUIT_SETTLED, this.onFruitSettled, this);
        this.playfield = null;
        this.levelView = null;
        this.levelSession = null;
        this.outcomeLocked = false;
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
