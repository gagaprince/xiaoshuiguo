import { _decorator, Component, Node, tween, Vec3 } from 'cc';

const { ccclass } = _decorator;

/** GbzLoseFullLayer 出口（原版 onRestart / onBackHome）。 */
export interface LoseLayerHandlers {
    /** 重新挑战当前关（原版 GbzLoseFullLayer.onRestart）。 */
    onRetry: () => void;
    /** 返回首页（原版 onBackHome -> LAYER_MENU）。 */
    onHome: () => void;
}

/**
 * GbzLoseFullLayer 控制器。
 *
 * 只负责 style/lose_panel：重试（btn_restart）、回首页（btn_back），
 * 分享（btnShare）隐藏。复活引导是独立的 GbzResurgenceLayer
 * （ResurgenceLayer），由 GameNavigator 负责两层切换。
 * 节点可能先以 inactive 形态创建（等复活弹层关闭后再显示），
 * 所以入场缩放动画放在 start() 里随激活自动播放。
 */
@ccclass('LoseLayer')
export class LoseLayer extends Component {
    private handlers: LoseLayerHandlers | null = null;
    private busy = false;

    private losePanel: Node | null = null;
    private restartButton: Node | null = null;
    private backButton: Node | null = null;

    public setup(handlers: LoseLayerHandlers): void {
        this.handlers = handlers;

        const style = this.node.getChildByName('style');
        const revivePanel = style?.getChildByName('panel') ?? null;
        if (revivePanel) revivePanel.active = false;
        this.losePanel = style?.getChildByName('lose_panel') ?? null;
        if (!this.losePanel) {
            console.warn('[LoseLayer] style/lose_panel missing');
            return;
        }
        this.losePanel.active = true;

        const shareButton = this.losePanel.getChildByName('btnShare');
        if (shareButton) shareButton.active = false;
        this.restartButton = this.losePanel.getChildByName('btn_restart');
        this.backButton = this.losePanel.getChildByName('btn_back');
        this.restartButton?.on(Node.EventType.TOUCH_END, this.onRetryClick, this);
        this.backButton?.on(Node.EventType.TOUCH_END, this.onHomeClick, this);

        this.collapseLosePanel();
    }

    public start(): void {
        this.playLosePanelTween();
    }

    /** 收起 lose_panel 的标题与按钮，供入场动画弹出。 */
    private collapseLosePanel(): void {
        const title = this.losePanel?.getChildByName('title');
        if (title) title.setScale(new Vec3(0, 0, 1));
        if (this.restartButton) this.restartButton.setScale(new Vec3(0, 0, 1));
        if (this.backButton) this.backButton.setScale(new Vec3(0, 0, 1));
    }

    private playLosePanelTween(): void {
        const title = this.losePanel?.getChildByName('title');
        if (title) {
            tween(title)
                .to(0.35, { scale: new Vec3(1, 1, 1) }, { easing: 'backOut' })
                .start();
        }
        if (this.restartButton) {
            tween(this.restartButton)
                .delay(0.12)
                .to(0.35, { scale: new Vec3(1, 1, 1) }, { easing: 'backOut' })
                .start();
        }
        if (this.backButton) {
            tween(this.backButton)
                .delay(0.22)
                .to(0.35, { scale: new Vec3(1, 1, 1) }, { easing: 'backOut' })
                .start();
        }
    }

    private runOnce(action: () => void): void {
        if (this.busy) return;
        this.busy = true;
        action();
    }

    private onRetryClick(): void {
        this.runOnce(() => this.handlers?.onRetry());
    }

    private onHomeClick(): void {
        this.runOnce(() => this.handlers?.onHome());
    }
}
