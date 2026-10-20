import { _decorator, Component, find, Label, Node, tween, Vec3 } from 'cc';

const { ccclass } = _decorator;

/** GbzResurgenceLayer 出口（原版看广告复活，本工程免广告直接放行）。 */
export interface ResurgenceLayerHandlers {
    /** 立即复活：撤销失败结算并把场上水果退回安全状态。 */
    onRevive: () => void;
    /** 放弃复活：回到失败层（原版 GbzResurgenceLayer.onClose）。 */
    onClose: () => void;
}

/**
 * 第 13 步：独立复活弹层 GbzResurgenceLayer。
 *
 * 结构对齐原包：style/panel/Bg 下 btn_relive（reviveUI1）、
 * btn_close（close）、labInfos/labNum（剩余水果数）。
 */
@ccclass('ResurgenceLayer')
export class ResurgenceLayer extends Component {
    private handlers: ResurgenceLayerHandlers | null = null;
    private busy = false;
    private bg: Node | null = null;

    public setup(handlers: ResurgenceLayerHandlers, remain: number): void {
        this.handlers = handlers;
        this.bg = find('style/panel/Bg', this.node);
        const btnRelive = this.bg?.getChildByName('btn_relive') ?? null;
        const btnClose = this.bg?.getChildByName('btn_close') ?? null;
        const labNum = this.bg
            ?.getChildByPath('labInfos/labNum')
            ?.getComponent(Label) ?? null;
        if (labNum) labNum.string = `${Math.max(0, Math.round(remain))}`;

        btnRelive?.on(Node.EventType.TOUCH_END, this.onReviveClick, this);
        btnClose?.on(Node.EventType.TOUCH_END, this.onCloseClick, this);

        this.bg?.setScale(new Vec3(0, 0, 1));
    }

    public start(): void {
        if (this.bg) {
            tween(this.bg)
                .to(0.35, { scale: new Vec3(1, 1, 1) }, { easing: 'backOut' })
                .start();
        }
    }

    private onReviveClick(): void {
        if (this.busy) return;
        this.busy = true;
        this.handlers?.onRevive();
    }

    private onCloseClick(): void {
        if (this.busy) return;
        this.busy = true;
        this.handlers?.onClose();
    }
}
