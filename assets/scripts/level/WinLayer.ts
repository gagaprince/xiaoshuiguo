/**
 * 第 8/14 步：GbzWin2Layer 胜利弹层。
 *
 * 第 14 步起恢复原版完整布局：title（恭喜过关）、guang（放射光圈 + 中央
 * 收集物图标，按关卡从 CityConfig.u 表取水果/蔬菜）、info（夸赞文案图）、
 * proBg（城市进度：填充条 + 小车 + “即将到达/再过 N 关到达” RichText）、
 * buttons（仅“下一关”，通关后无需重玩）；btnshare（分享翻倍）不实现、隐藏。
 *
 * 入场时序与原版 losePanelTween 一致：
 * title 立即 backOut；0.5s 后 guang/info/proBg backOut 且进度条与小车
 * 用 1s 从上一关节点走到本关；再 1s+0.5s+0.2s 后 buttons 弹出。
 */
import {
    _decorator,
    assetManager,
    Component,
    Node,
    RichText,
    Size,
    Sprite,
    SpriteFrame,
    Tween,
    UITransform,
    Vec3,
    tween,
} from 'cc';
import { CityTable } from './CityTable';
import { CollectibleTable } from './CollectibleTable';

const { ccclass } = _decorator;

export interface WinLayerHandlers {
    /** 下一关（原版 onClickButtons 经汽车过场进入下一关）。 */
    onNext: () => void;
    /** 返回首页（btn_close2）。 */
    onHome: () => void;
}

@ccclass('WinLayer')
export class WinLayer extends Component {
    private handlers: WinLayerHandlers | null = null;
    private busy = false;

    private title: Node | null = null;
    private guang: Node | null = null;
    private info: Node | null = null;
    private proBg: Node | null = null;
    private fill: Sprite | null = null;
    private car: Node | null = null;
    private nextLabel: Node | null = null;

    public setup(handlers: WinLayerHandlers, clearedLevel: number): void {
        this.handlers = handlers;

        const panel = this.node.getChildByPath('style/panel');
        if (!panel) {
            console.warn('[WinLayer] style/panel missing');
            return;
        }

        // 分享翻倍不实现；其余节点（guang/info/proBg）恢复显示。
        const share = panel.getChildByName('btnshare');
        if (share) share.active = false;

        this.title = panel.getChildByName('title');
        this.guang = panel.getChildByName('guang');
        this.info = panel.getChildByName('info');
        this.proBg = panel.getChildByName('proBg');
        this.fill = this.proBg?.getChildByName('proBg_fill')?.getComponent(Sprite) ?? null;
        this.car = this.proBg?.getChildByName('car') ?? null;
        const icon = this.guang?.getChildByName('icon')?.getComponent(Sprite) ?? null;
        const levelText = this.proBg?.getChildByName('lv')?.getComponent(RichText) ?? null;
        this.nextLabel = this.proBg?.getChildByName('lv') ?? null;

        // 中央收集物图标：按 fakeGame_level = clearedLevel + 1 取 CityConfig.u 表。
        if (icon) {
            const uuid = CollectibleTable.iconUuidForNextLevel(clearedLevel + 1);
            assetManager.loadAny(uuid, (error, frame: SpriteFrame) => {
                if (!error && frame && icon.isValid) {
                    icon.spriteFrame = frame;
                }
            });
        }

        // 城市进度文案与进度值（原版 getCityTotalProgress/getLvDiffNum/getNextCityName）。
        const progress = CityTable.getProgress(clearedLevel);
        if (levelText) levelText.string = this.buildRouteText(progress.diff, progress.nextSimple);

        const width = this.proBg?.getComponent(UITransform)?.width ?? 350;
        const nowRatio = (progress.cur - 1) / progress.total;
        const targetRatio = progress.cur / progress.total;
        this.progressStartX = -width / 2 + width * nowRatio;
        this.progressTargetX = -width / 2 + width * targetRatio;
        this.progressTargetRatio = targetRatio;
        if (this.fill) this.fill.fillRange = nowRatio;
        if (this.car) this.car.setPosition(this.progressStartX, this.car.position.y);

        const nextButton = panel.getChildByPath('buttons/btn_restart');
        const closeButton = panel.getChildByName('btn_close2');
        if (nextButton) {
            this.matchButtonTouchArea(nextButton);
            nextButton.on(Node.EventType.TOUCH_END, this.onNextClick, this);
        }
        closeButton?.on(Node.EventType.TOUCH_END, this.onHomeClick, this);

        // 入场前全部收起，start 再按原时序弹出。
        for (const node of [this.title, this.guang, this.info, this.proBg, nextButton]) {
            node?.setScale(new Vec3(0, 0, 1));
        }
    }

    private progressStartX = 0;
    private progressTargetX = 0;
    private progressTargetRatio = 0;

    /** 原版 RichText 模板：本省最后一关显示“即将到达”，否则“再过 N 关到达”。 */
    private buildRouteText(diff: number, nextSimple: string): string {
        if (diff === 0) {
            return `<outline color=black width=4><b>即将到达<color=f4fd14>${nextSimple}</color></b></outline>`;
        }
        return `<outline color=black width=4><b>再过<color=f4fd14>${diff}</color>关到达`
            + `<color=f4fd14>${nextSimple}</color></b></outline>`;
    }

    public start(): void {
        const pop = (node: Node | null, delay: number): void => {
            if (!node) return;
            tween(node)
                .delay(delay)
                .to(0.5, { scale: new Vec3(1, 1, 1) }, { easing: 'backOut' })
                .start();
        };

        // title 立即弹出。
        pop(this.title, 0);

        // 0.5s 后光圈/文案/进度条弹出，填充与小车 1s 走到本关节点。
        this.scheduleOnce(() => {
            pop(this.guang, 0);
            pop(this.info, 0);
            pop(this.proBg, 0);
            if (this.fill) tween(this.fill).to(1, { fillRange: this.progressTargetRatio }).start();
            if (this.car) {
                tween(this.car)
                    .to(1, { position: new Vec3(this.progressTargetX, this.car.position.y, 0) })
                    .start();
            }
        }, 0.5);

        // 原版 0.5 + 1(btnshare 占位) + 0.5 + 0.2 后按钮弹出。
        const nextButton = this.nextButtonNode();
        pop(nextButton, 2.2);
    }

    private nextButtonNode(): Node | null {
        return this.node.getChildByPath('style/panel/buttons/btn_restart');
    }

    /** 按钮节点触摸区默认 152x45，但可见蓝底（btn_restart-001）是 287x110，需放大触摸区。 */
    private matchButtonTouchArea(button: Node): void {
        const bg = button.getChildByName('btn_restart-001')?.getComponent(UITransform);
        const ui = button.getComponent(UITransform);
        if (bg && ui) ui.setContentSize(new Size(bg.width, bg.height));
    }

    private runOnce(action: () => void): void {
        if (this.busy) return;
        this.busy = true;
        action();
    }

    private onNextClick(): void {
        this.runOnce(() => this.handlers?.onNext());
    }

    private onHomeClick(): void {
        this.runOnce(() => this.handlers?.onHome());
    }

    protected onDestroy(): void {
        for (const node of [this.title, this.guang, this.info, this.proBg, this.car, this.nextLabel]) {
            if (node) Tween.stopAllByTarget(node);
        }
    }
}
