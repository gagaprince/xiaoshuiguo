import { _decorator, Color, Component, instantiate, Label, Node, Size, Sprite, tween, UITransform, Vec3 } from 'cc';

const { ccclass } = _decorator;

/** 第 8 步：胜利弹层三个最小可用出口。 */
export interface WinLayerHandlers {
    /** 下一关（原版 GbzWin2Layer.onClickButtons 经汽车过场进入下一关，本步直接进）。 */
    onNext: () => void;
    /** 重新挑战当前关（原弹层无此按钮，运行时复制下一关按钮改造而成）。 */
    onReplay: () => void;
    /** 返回首页（原版 btn_close2 -> LAYER_MENU）。 */
    onHome: () => void;
}

/**
 * GbzWin2Layer 的最小可用控制器（第 8 步）。
 *
 * 预制体里城市进度（proBg）、蔬菜奖励（guang/info）、分享翻倍（btnshare）
 * 与汽车过场相关，本步隐藏；只保留“恭喜过关”标题、下一关、重玩、返回主页。
 * 组件需在 addChild 到舞台前 setup，入场动画在 start 播放。
 */
@ccclass('WinLayer')
export class WinLayer extends Component {
    private handlers: WinLayerHandlers | null = null;
    private busy = false;

    private title: Node | null = null;
    private buttons: Node | null = null;

    public setup(handlers: WinLayerHandlers): void {
        this.handlers = handlers;

        const panel = this.node.getChildByPath('style/panel');
        if (!panel) {
            console.warn('[WinLayer] style/panel missing');
            return;
        }

        // 本步不实现：蔬菜奖励、城市进度、分享翻倍。
        for (const name of ['guang', 'info', 'proBg', 'btnshare']) {
            const node = panel.getChildByName(name);
            if (node) node.active = false;
        }

        this.title = panel.getChildByName('title');
        this.buttons = panel.getChildByPath('buttons');
        const nextButton = this.buttons?.getChildByName('btn_restart') ?? null;
        const closeButton = panel.getChildByName('btn_close2');

        if (nextButton) {
            this.matchButtonTouchArea(nextButton);
            nextButton.on(Node.EventType.TOUCH_END, this.onNextClick, this);
            const replayButton = this.buildReplayButton(nextButton);
            if (replayButton) {
                this.matchButtonTouchArea(replayButton);
                this.layoutButtons(nextButton, replayButton);
                replayButton.on(Node.EventType.TOUCH_END, this.onReplayClick, this);
            }
        }
        closeButton?.on(Node.EventType.TOUCH_END, this.onHomeClick, this);

        // 入场前先收起，start 再播 backOut。
        if (this.title) this.title.setScale(new Vec3(0, 0, 1));
        if (this.buttons) this.buttons.setScale(new Vec3(0, 0, 1));
    }

    public start(): void {
        if (this.title) {
            tween(this.title)
                .to(0.35, { scale: new Vec3(1, 1, 1) }, { easing: 'backOut' })
                .start();
        }
        if (this.buttons) {
            tween(this.buttons)
                .delay(0.15)
                .to(0.35, { scale: new Vec3(1, 1, 1) }, { easing: 'backOut' })
                .start();
        }
    }

    /**
     * 复制 btn_restart：蓝底（btn_restart-001）保留，
     * 关掉自带与子节点上的“下一关”图片字，加一个白色 Label“重玩”。
     * 预制体 buttons 容器的 Layout 是禁用状态，位置由 layoutButtons 手动排。
     */
    private buildReplayButton(nextButton: Node): Node | null {
        if (!this.buttons) return null;
        const replay = instantiate(nextButton);
        replay.name = 'btn_replay';
        const ownText = replay.getComponent(Sprite);
        if (ownText) ownText.enabled = false;
        const imageText = replay.getChildByName('btn_restart-002');
        if (imageText) imageText.active = false;

        const labelNode = new Node('lbl_replay');
        labelNode.layer = replay.layer;
        const label = labelNode.addComponent(Label);
        label.string = '重玩';
        label.fontSize = 36;
        label.lineHeight = 44;
        label.color = new Color(255, 255, 255, 255);
        replay.addChild(labelNode);

        this.buttons.addChild(replay);
        return replay;
    }

    /** 按钮节点触摸区默认 152x45，但可见蓝底（btn_restart-001）是 287x110，需放大触摸区。 */
    private matchButtonTouchArea(button: Node): void {
        const bg = button.getChildByName('btn_restart-001')?.getComponent(UITransform);
        const ui = button.getComponent(UITransform);
        if (bg && ui) ui.setContentSize(new Size(bg.width, bg.height));
    }

    /** 两个按钮以 20px 间距水平居中并排（预制体 Layout 禁用，不能依赖自动布局）。 */
    private layoutButtons(nextButton: Node, replayButton: Node): void {
        const width = nextButton.getComponent(UITransform)?.width ?? 287;
        const spacing = 20;
        const centerDistance = (width + spacing) / 2;
        const y = nextButton.position.y;
        nextButton.setPosition(new Vec3(-centerDistance, y, 0));
        replayButton.setPosition(new Vec3(centerDistance, y, 0));
    }

    private runOnce(action: () => void): void {
        if (this.busy) return;
        this.busy = true;
        action();
    }

    private onNextClick(): void {
        this.runOnce(() => this.handlers?.onNext());
    }

    private onReplayClick(): void {
        this.runOnce(() => this.handlers?.onReplay());
    }

    private onHomeClick(): void {
        this.runOnce(() => this.handlers?.onHome());
    }
}
