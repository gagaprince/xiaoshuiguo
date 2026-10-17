import { _decorator, Component, Sprite, SpriteFrame, UITransform } from 'cc';

const { ccclass, property } = _decorator;

/**
 * 多品牌 Logo（原版 logoCom，脚本资源 UUID 11693561-9042-4f3a-b854-16e5fd252075）。
 * 根据品牌名从 logoFrames 选择对应 SpriteFrame 挂到 icon 上，并按宽 520 等比缩放。
 * 本包（wxf41b76649658b9e3）品牌为「消个水果」，对应原版 GlobalXZ.logo。
 */
@ccclass('LogoCom')
export class LogoCom extends Component {
    @property({ type: [SpriteFrame], tooltip: '品牌 logo 帧：消个水果/闯关乐消除/解压水果消' })
    public logoFrames: SpriteFrame[] = [];

    @property(Sprite)
    public icon: Sprite = null;

    private readonly indexs: Record<string, number> = {
        消个水果: 0,
        闯关乐消除: 1,
        解压水果消: 2,
    };

    /** 当前包品牌（原版 globalxz.logo），后续接 GlobalXZ 配置后改为读取配置 */
    private readonly logoName = '消个水果';

    public onEnable(): void {
        this.onRefreshUI();
    }

    public onRefreshUI(): void {
        const idx = this.indexs[this.logoName];
        const frame = this.logoFrames[idx];
        if (this.logoName && idx !== undefined && frame && this.icon) {
            this.icon.spriteFrame = frame;
            this.scheduleOnce(() => this.setSpriteSizeWidth(this.icon, 520));
        }
    }

    /** 原版 SOUtil.SetSpriteSizeWidth：以宽度等比设置 Sprite 节点尺寸 */
    private setSpriteSizeWidth(icon: Sprite, width: number): void {
        if (!icon || !icon.spriteFrame) return;
        const size = icon.spriteFrame.getOriginalSize();
        const height = size.height * (width / size.width);
        icon.node.getComponent(UITransform).setContentSize(width, height);
    }
}
