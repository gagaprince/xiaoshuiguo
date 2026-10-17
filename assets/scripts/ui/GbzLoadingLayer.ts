import { _decorator, Component, Label, Node, UITransform } from 'cc';
import { LoadingState } from '../core/LoadingState';

const { ccclass, property } = _decorator;

/**
 * 加载页（原版 GbzLoadingLayer，逻辑 1:1 移植）。
 * 进度条结构：fill(loadfill) 的宽度随 fillPro 增长，fill 的第一个子节点(img)跟随末端；
 * 百分比文本为 fill 父节点下的 labPro。
 */
@ccclass('GbzLoadingLayer')
export class GbzLoadingLayer extends Component {
    @property({ type: Node, tooltip: '进度填充节点 loadfill（锚点在左，宽度从 0 增长）' })
    public fill: Node = null;

    private time = 0;
    private fillPro = 0;
    private readonly fillMaxWidth = 578;
    private labPro: Label = null;
    private isHiding = false;

    public start(): void {
        this.fill.getComponent(UITransform).width = 0;
        this.labPro = this.fill.parent.getChildByName('labPro').getComponent(Label);
        this.time = 0;
        this.fillPro = 0;
        this.isHiding = false;
    }

    public update(dt: number): void {
        if (!this.fill || !this.node.active) return;
        this.time += dt;
        const rate = LoadingState.ins.loadingRate;
        if (rate >= 1) {
            // 加载完成：快速补满到 100%，停顿片刻后隐藏（原版直接停在 99% 隐藏，这里改为走到最右端）
            this.fillPro = Math.min(1, this.fillPro + dt * 4);
            if (this.fillPro >= 1 && !this.isHiding) {
                this.isHiding = true;
                this.scheduleOnce(() => this.hide(), 0.3);
            }
        } else if (rate > 0 && rate > this.fillPro) {
            this.fillPro = rate;
        } else {
            this.fillPro = Math.max(this.fillPro, (this.time / 2) * (1 - this.fillPro));
        }

        const width = this.fillPro * this.fillMaxWidth;
        this.fill.getComponent(UITransform).width = width;
        this.labPro.string = Math.floor(100 * this.fillPro) + '%';
        this.fill.children[0].x = width;
    }

    public show(): void {
        this.node.active = true;
    }

    public hide(): void {
        this.node.active = false;
    }
}
