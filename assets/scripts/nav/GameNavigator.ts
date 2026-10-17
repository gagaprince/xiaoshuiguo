import { _decorator, Component, find, instantiate, Node, Prefab } from 'cc';
import { LevelLaunchConfig } from '../level/LevelLaunchConfig';

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

    private home: Node | null = null;
    private levelCommon: Node | null = null;
    private levelHud: Node | null = null;
    private navigating = false;

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
        } finally {
            this.navigating = false;
        }
    }

    public showLevel(): void {
        if (this.navigating || this.levelCommon) return;
        this.navigating = true;
        try {
            if (!this.stage || !this.levelCommonPrefab || !this.levelHudPrefab) {
                console.warn('[GameNavigator] level prefabs or stage missing');
                return;
            }
            const cfg = LevelLaunchConfig.options;
            console.log(`[LevelLaunch] level=${cfg.level} difficulty=${cfg.difficulty} seed=${cfg.seed}`);

            if (this.home) {
                this.home.destroy();
                this.home = null;
            }

            this.levelCommon = instantiate(this.levelCommonPrefab);
            this.stage.addChild(this.levelCommon);

            this.levelHud = instantiate(this.levelHudPrefab);
            this.stage.addChild(this.levelHud);

            this.hideDevNodes();
            this.bindLevelButtons();
        } finally {
            this.navigating = false;
        }
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
        this.showLevel();
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
