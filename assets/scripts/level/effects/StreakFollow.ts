/**
 * 第 14 步·特效子任务：原版 StreakComp 重建。
 * 拖尾节点（挂 cc.MotionStreak）每 3 帧对齐目标水果的本地坐标，3s 后自毁。
 */
import { _decorator, Component, Node } from 'cc';

const { ccclass } = _decorator;

@ccclass('StreakFollow')
export class StreakFollow extends Component {
    private target: Node | null = null;
    private tick = 0;

    public init(target: Node): void {
        this.target = target;
    }

    protected start(): void {
        this.scheduleOnce(() => {
            if (this.node.isValid) this.node.destroy();
        }, 3);
    }

    protected update(): void {
        this.tick += 1;
        if (this.tick % 3 !== 0) return;
        if (this.target?.isValid && this.node.isValid) {
            this.node.setPosition(this.target.position);
        }
    }
}
