/**
 * 第 14 步·子任务 3：汽车过关过场（原版 GbzCarMoveLayer.losePanelTween）。
 *
 * 预制体 assets/secondary/prefab/Game/GbzCarMoveLayer.prefab：
 * shan（山）/cao（草，含 zhanpai/lv 省份名标牌）依次缩放弹出（每个间隔
 * 0.2s、0.5s backOut）；car 从 carStart 开到 carEnd；1s 时播「汽车鸣笛」，
 * 2s 行驶结束回调（原版此时 onGameStart 进入下一关）。
 */
import { _decorator, Component, Label, Node, Tween, Vec3, tween } from 'cc';
import { GameAudio } from '../audio/GameAudio';

const { ccclass } = _decorator;

@ccclass('CarTransitionLayer')
export class CarTransitionLayer extends Component {
    private shanNode: Node | null = null;
    private caoNode: Node | null = null;
    private carNode: Node | null = null;
    private startPoint: Node | null = null;
    private endPoint: Node | null = null;
    private levelLabel: Label | null = null;
    private played = false;

    private initNodes(): void {
        if (this.shanNode) return;
        this.shanNode = this.node.getChildByName('shan');
        this.caoNode = this.node.getChildByName('cao');
        this.carNode = this.node.getChildByName('car');
        this.startPoint = this.node.getChildByName('carStart');
        this.endPoint = this.node.getChildByName('carEnd');
        this.levelLabel = this.caoNode
            ?.getChildByName('zhanpai')
            ?.getChildByName('lv')
            ?.getComponent(Label) ?? null;
    }

    /**
     * 播汽车过场。
     * @param cityName 标牌省份名（CityTable.getCityName(nextLevel - 1)）。
     * @param onArrive 车开到终点后的回调（进入下一关）。
     */
    public play(cityName: string, onArrive: () => void): void {
        if (this.played) return;
        this.played = true;
        this.initNodes();

        if (this.levelLabel) this.levelLabel.string = cityName;

        this.popChildren(this.shanNode);
        this.popChildren(this.caoNode);

        if (this.carNode && this.startPoint && this.endPoint) {
            this.carNode.setPosition(this.startPoint.position.x, this.carNode.position.y);
            this.scheduleOnce(() => GameAudio.ins.play('汽车鸣笛'), 1);
            tween(this.carNode)
                .delay(1)
                .to(2, { position: new Vec3(this.endPoint.position.x, this.carNode.position.y, 0) })
                .call(() => onArrive())
                .start();
        } else {
            console.warn('[CarTransitionLayer] car/start/end nodes missing');
            this.scheduleOnce(onArrive, 1);
        }
    }

    /** 原版：父节点下每个子节点 scale 0，按序号延迟 0.2s、0.5s backOut 弹出。 */
    private popChildren(parent: Node | null): void {
        if (!parent) return;
        for (let i = 0; i < parent.children.length; i += 1) {
            const child = parent.children[i];
            child.setScale(new Vec3(0, 0, 1));
            tween(child)
                .delay(0.2 * i)
                .to(0.5, { scale: new Vec3(1, 1, 1) }, { easing: 'backOut' })
                .start();
        }
    }

    protected onDestroy(): void {
        Tween.stopAllByTarget(this.node);
        if (this.carNode?.isValid) Tween.stopAllByTarget(this.carNode);
        // 销毁期间 children 可能已被置空，做可空守卫。
        this.shanNode?.children?.forEach(child => Tween.stopAllByTarget(child));
        this.caoNode?.children?.forEach(child => Tween.stopAllByTarget(child));
    }
}
