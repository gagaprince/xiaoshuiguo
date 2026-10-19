import { _decorator, Component, Node, tween, Vec3 } from 'cc';

const { ccclass } = _decorator;

/** 第 9 步：失败弹层两个最小可用出口；复活（onRevive）仅预留接口。 */
export interface LoseLayerHandlers {
    /** 重新挑战当前关（原版 GbzLoseFullLayer.onRestart）。 */
    onRetry: () => void;
    /** 返回首页（原版 onBackHome -> LAYER_MENU）。 */
    onHome: () => void;
    /** 复活（原版先弹 panel/GbzResurgenceLayer 看广告）：本步不接广告，不调用。 */
    onRevive?: () => void;
}

/**
 * GbzLoseFullLayer 的最小可用控制器（第 9 步）。
 *
 * 预制体里 style/panel 是广告复活引导（btn_relive/剩余数），
 * 本步按“复活只留接口”隐藏它，直接展示 style/lose_panel：
 * 重试（btn_restart）、回首页（btn_back）；分享（btnShare）隐藏。
 * 组件需在 addChild 到舞台前 setup，入场动画在 start 播放。
 */
@ccclass('LoseLayer')
export class LoseLayer extends Component {
    private handlers: LoseLayerHandlers | null = null;
    private busy = false;

    private title: Node | null = null;
    private restartButton: Node | null = null;
    private backButton: Node | null = null;

    public setup(handlers: LoseLayerHandlers): void {
        this.handlers = handlers;

        const style = this.node.getChildByName('style');
        const panel = style?.getChildByName('panel') ?? null;
        const losePanel = style?.getChildByName('lose_panel') ?? null;
        if (!losePanel) {
            console.warn('[LoseLayer] style/lose_panel missing');
            return;
        }

        // 广告复活引导本步不做（onRevive 仅预留接口）。
        if (panel) panel.active = false;
        losePanel.active = true;

        this.title = losePanel.getChildByName('title');
        this.restartButton = losePanel.getChildByName('btn_restart');
        this.backButton = losePanel.getChildByName('btn_back');
        const shareButton = losePanel.getChildByName('btnShare');
        if (shareButton) shareButton.active = false;

        this.restartButton?.on(Node.EventType.TOUCH_END, this.onRetryClick, this);
        this.backButton?.on(Node.EventType.TOUCH_END, this.onHomeClick, this);

        // 入场前先收起，start 再播 backOut。
        if (this.title) this.title.setScale(new Vec3(0, 0, 1));
        if (this.restartButton) this.restartButton.setScale(new Vec3(0, 0, 1));
        if (this.backButton) this.backButton.setScale(new Vec3(0, 0, 1));
    }

    public start(): void {
        if (this.title) {
            tween(this.title)
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
