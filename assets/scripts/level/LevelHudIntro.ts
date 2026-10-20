import { _decorator, Animation, Component, Label, Node, Tween, UIOpacity, UITransform, Vec3, tween, view } from 'cc';

const { ccclass } = _decorator;

/**
 * 第 12.4 步：关卡开场方向过场，对齐原版 GbzMainLayer.showAnim。
 *
 * 证据（GbzMainLayer.showAnim + GameMgr.initLevel）：
 * - 第 2 关：showAnim(0) 播 animNode0“难度提升”面板，从屏左 0.5s 滑入、
 *   停 1.5s、0.5s 从屏右滑出；原版面板结束后才开始生成水果（回调 U）。
 * - 左/右移关（arrangeType 2/3）：水果照常生成，同时 showAnim(1) 播
 *   animNode1：icons 放大 1.5 倍 ±15° 摇晃 3 轮（每段 0.1s），dir Label
 *   显示“从左/右往X移动”，随后 0.5s 缩小飞向顶部 levelBg/img 锚点并常显。
 * - 下移/静止关与第 1 关不播任何过场；levelBg/img 也不显示。
 * - animbg 带 BlockInputEvents，过场期间天然吞掉触摸（等价原版 status=UNRUN）。
 *
 * 节点均在 GbzMainLayer 预制体内：animNodes/{animbg,animNode0,animNode1}，
 * animNode1 下为 icons/{xiangxia,向左,向右} 与 dir Label。
 */
@ccclass('LevelHudIntro')
export class LevelHudIntro extends Component {
    private animNodes: Node | null = null;
    private animBg: Node | null = null;
    private panelNode: Node | null = null;
    private dirNode: Node | null = null;
    private icons: Node | null = null;
    private dirLabel: Label | null = null;
    /** 第 12.5 步：闪电节点（GbzMainLayer 根下直接子节点，原版 lightningNode）。 */
    private lightningNode: Node | null = null;

    public onLoad(): void {
        this.animNodes = this.node.getChildByName('animNodes');
        this.animBg = this.animNodes?.getChildByName('animbg') ?? null;
        this.panelNode = this.animNodes?.getChildByName('animNode0') ?? null;
        this.dirNode = this.animNodes?.getChildByName('animNode1') ?? null;
        this.icons = this.dirNode?.getChildByName('icons') ?? null;
        this.dirLabel = this.dirNode?.getChildByName('dir')?.getComponent(Label) ?? null;
        this.lightningNode = this.node.getChildByName('lightningNode');
        // 预制体初始即关闭，这里再兜一次，避免编辑器里误开。
        if (this.animNodes) this.animNodes.active = false;
        if (this.lightningNode) this.lightningNode.active = false;
    }

    /**
     * 第 12.5 步：开局闪电（原版 GbzMainLayer.showlightning）。
     * lightningNode 显形：anim 子节点 UIOpacity 0.2s 从 100 升到 255，
     * 同时 Animation 播放 9 帧闪电精灵动画，再停 0.3s 隐藏，整体约 0.5s；
     * animbg 带 BlockInputEvents + opacity 80，过场期间吞掉全部触摸。
     * 结束回调由 LevelPlayfield 接着执行 blitzkrieg（随机劈落水果）再开局。
     */
    public playLightning(done: () => void): void {
        const root = this.lightningNode;
        if (!root) {
            done();
            return;
        }
        const animNode = root.getChildByName('anim');
        const animation = animNode?.getComponent(Animation) ?? null;
        const opacity = animNode?.getComponent(UIOpacity) ?? animNode?.addComponent(UIOpacity);
        root.active = true;
        if (!animNode || !animation || !opacity) {
            // 资源异常兜底：0.5s 后关节点继续流程。
            this.scheduleOnce(() => {
                if (root.isValid) root.active = false;
                done();
            }, 0.5);
            return;
        }
        opacity.opacity = 100;
        animation.play('anim');
        tween(opacity)
            .to(0.2, { opacity: 255 })
            .delay(0.3)
            .call(() => {
                if (root.isValid) root.active = false;
                done();
            })
            .start();
    }

    /** 第 2 关“难度提升”横滑面板；结束回调里再开始生成水果（原版时序）。 */
    public playLevel2Panel(done: () => void): void {
        const root = this.animNodes;
        const panel = this.panelNode;
        if (!root || !panel) {
            done();
            return;
        }
        this.resetForPanel();
        root.active = true;
        const width = view.getVisibleSize().width;
        const enterX = width / 2 + 200;
        Tween.stopAllByTarget(panel);
        panel.setPosition(-enterX, panel.position.y, 0);
        tween(panel)
            .to(0.5, { position: new Vec3(0, panel.position.y, 0) })
            .delay(1.5)
            .to(0.5, { position: new Vec3(enterX, panel.position.y, 0) })
            .call(() => {
                if (root.isValid) root.active = false;
                done();
            })
            .start();
    }

    /**
     * 左移（3）/右移（2）关方向教学；动画末把大图标缩飞到 levelBg/img
     * 的世界位置，结束回调里激活顶部小方向图标常显。
     */
    public playDirectionIntro(arrangeType: 2 | 3, targetImg: Node, done: () => void): void {
        const root = this.animNodes;
        const dirRoot = this.dirNode;
        const icons = this.icons;
        const label = this.dirLabel;
        if (!root || !dirRoot || !icons || !label || !targetImg?.isValid) {
            done();
            return;
        }
        this.resetForDirection(arrangeType);
        root.active = true;

        const targetPos = this.targetPositionIn(dirRoot, targetImg);
        Tween.stopAllByTarget(icons);
        const wobble = tween(icons)
            .to(0.1, { angle: 15 })
            .to(0.1, { angle: 0 })
            .to(0.1, { angle: -15 })
            .to(0.1, { angle: 0 });
        tween(icons)
            .repeat(3, wobble)
            .call(() => {
                if (!label.node.isValid) return;
                label.node.active = false;
                if (this.animBg?.isValid) this.animBg.active = false;
            })
            .to(0.5, { position: targetPos, scale: new Vec3(1, 1, 1) }, { easing: 'backIn' })
            .call(() => {
                if (icons.isValid) icons.active = false;
                if (root.isValid) root.active = false;
                done();
            })
            .start();
    }

    private resetForPanel(): void {
        if (this.animBg) this.animBg.active = true;
        if (this.panelNode) this.panelNode.active = true;
        if (this.dirNode) this.dirNode.active = false;
        for (const node of [this.icons, this.dirLabel?.node].filter((n): n is Node => !!n)) {
            Tween.stopAllByTarget(node);
        }
    }

    private resetForDirection(arrangeType: 2 | 3): void {
        if (this.animBg) this.animBg.active = true;
        if (this.panelNode) this.panelNode.active = false;
        if (this.dirNode) this.dirNode.active = true;
        if (this.icons) {
            this.icons.active = true;
            this.icons.setScale(new Vec3(1.5, 1.5, 1));
            this.icons.setPosition(0, 40, 0);
            this.icons.angle = 0;
            // 预制体子节点顺序：0 xiangxia、1 向左、2 向右。
            const children = this.icons.children;
            children.forEach((child, index) => {
                child.active = arrangeType === 2 ? index === 2 : index === 1;
            });
        }
        if (this.dirLabel) {
            this.dirLabel.node.active = true;
            this.dirLabel.string = arrangeType === 2 ? '从左往右移动' : '从右往左移动';
        }
    }

    private targetPositionIn(dirRoot: Node, target: Node): Vec3 {
        const targetUI = target.getComponent(UITransform);
        const rootUI = dirRoot.getComponent(UITransform);
        if (!targetUI || !rootUI) return new Vec3(0, 0, 0);
        const world = targetUI.convertToWorldSpaceAR(new Vec3());
        return rootUI.convertToNodeSpaceAR(world, new Vec3());
    }

    public onDestroy(): void {
        for (const node of [this.panelNode, this.icons, this.dirLabel?.node]) {
            if (node?.isValid) Tween.stopAllByTarget(node);
        }
    }
}
