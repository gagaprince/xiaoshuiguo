import { _decorator, Color, Component, Label, Node, Sprite, SpriteFrame, UITransform } from 'cc';
import type { RankPlayer } from './RankNpcData';

const { ccclass } = _decorator;

/** 排行榜行共享贴图（原版 RankDataComp refreshPro 用到的资源）。 */
export interface RankRowSharedFrames {
    bgOther: SpriteFrame;
    bgSelf: SpriteFrame;
    headFrame: SpriteFrame;
    medals: SpriteFrame[];
}

/**
 * 世界榜单行（原版 RankDataComp + 行模板预制体 dccf7e21）。
 *
 * 工程内没有该预制体，按原包反序列化结果在代码中还原：
 * 行底（别人/z自己，sliced）+ 奖牌（前三名）/名次 + 头像框 + 水果头像
 * + 名字（#6a4a37）+ 关卡（#8d1c8f，“N关”）。
 * 模板尺寸/坐标逐字取自原包：root 650x120；parent 723x143 但带
 * scale 0.9（所有子节点坐标都在这个 0.9 缩放下，漏了会整体跑偏）。
 */
@ccclass('RankRow')
export class RankRow extends Component {
    private rankImg: Sprite | null = null;
    private labRank: Label | null = null;
    private headImg: Sprite | null = null;
    private labName: Label | null = null;
    private labLevel: Label | null = null;
    private bgSprite: Sprite | null = null;
    private frames: RankRowSharedFrames | null = null;

    /** 按原包模板创建一行，返回挂在 root 上的组件。 */
    public static build(parent: Node, layer: number, frames: RankRowSharedFrames): RankRow {
        const root = new Node('data');
        root.layer = layer;
        root.addComponent(UITransform).setContentSize(650, 120);
        parent.addChild(root);
        const row = root.addComponent(RankRow);

        const bgNode = new Node('parent');
        bgNode.layer = layer;
        bgNode.addComponent(UITransform).setContentSize(723, 143);
        bgNode.setScale(0.9, 0.9, 1);
        const bgSprite = bgNode.addComponent(Sprite);
        bgSprite.type = Sprite.Type.SLICED;
        bgSprite.sizeMode = Sprite.SizeMode.CUSTOM;
        bgSprite.spriteFrame = frames.bgOther;
        root.addChild(bgNode);
        row.bgSprite = bgSprite;

        const medalNode = RankRow.makeSprite('rankImg', frames.medals[0], 75, 88, layer);
        medalNode.setPosition(-297.9, 25.7);
        bgNode.addChild(medalNode);
        row.rankImg = medalNode.getComponent(Sprite);

        const rankLabelNode = new Node('LabRank');
        rankLabelNode.layer = layer;
        rankLabelNode.addComponent(UITransform).setContentSize(100, 54);
        rankLabelNode.setPosition(-300.5, 0);
        const rankLabel = rankLabelNode.addComponent(Label);
        rankLabel.fontSize = 40;
        rankLabel.lineHeight = 40;
        rankLabel.horizontalAlign = Label.HorizontalAlign.CENTER;
        rankLabel.verticalAlign = Label.VerticalAlign.CENTER;
        rankLabel.color = new Color(253, 224, 96, 255);
        rankLabel.enableOutline = true;
        rankLabel.outlineColor.set(119, 80, 38, 255);
        rankLabel.outlineWidth = 2;
        bgNode.addChild(rankLabelNode);
        row.labRank = rankLabel;

        const headBgNode = RankRow.makeSprite('headBg', frames.headFrame, 90, 90, layer);
        headBgNode.setPosition(-197.1, 0);
        bgNode.addChild(headBgNode);

        const headNode = RankRow.makeSprite('HeadImg', null, 75, 75, layer);
        headBgNode.addChild(headNode);
        row.headImg = headNode.getComponent(Sprite);

        const nameNode = new Node('userName');
        nameNode.layer = layer;
        nameNode.addComponent(UITransform).setContentSize(180, 50);
        nameNode.setPosition(19.1, 0);
        const nameLabel = nameNode.addComponent(Label);
        nameLabel.fontSize = 30;
        nameLabel.lineHeight = 40;
        nameLabel.horizontalAlign = Label.HorizontalAlign.CENTER;
        nameLabel.verticalAlign = Label.VerticalAlign.CENTER;
        nameLabel.isBold = true;
        nameLabel.color = new Color(106, 74, 55, 255);
        bgNode.addChild(nameNode);
        row.labName = nameLabel;

        const levelNode = new Node('level');
        levelNode.layer = layer;
        levelNode.addComponent(UITransform).setContentSize(160, 50);
        levelNode.setPosition(293.3, 0);
        const levelLabel = levelNode.addComponent(Label);
        levelLabel.fontSize = 30;
        levelLabel.lineHeight = 40;
        levelLabel.horizontalAlign = Label.HorizontalAlign.CENTER;
        levelLabel.verticalAlign = Label.VerticalAlign.CENTER;
        levelLabel.isBold = true;
        levelLabel.color = new Color(141, 28, 143, 255);
        bgNode.addChild(levelNode);
        row.labLevel = levelLabel;

        row.frames = frames;
        return row;
    }

    private static makeSprite(name: string, frame: SpriteFrame | null, width: number, height: number, layer: number): Node {
        const node = new Node(name);
        node.layer = layer;
        node.addComponent(UITransform).setContentSize(width, height);
        const sprite = node.addComponent(Sprite);
        sprite.sizeMode = Sprite.SizeMode.CUSTOM;
        if (frame) sprite.spriteFrame = frame;
        return node;
    }

    /** 原版 RankDataComp.refreshPro / GbzRankLayer.selfDataFun。 */
    public render(player: RankPlayer, index: number): void {
        if (this.labName) this.labName.string = player.userName;
        if (this.labLevel) this.labLevel.string = `${player.level}关`;
        if (this.bgSprite && this.frames) {
            this.bgSprite.spriteFrame = player.isPlayer ? this.frames.bgSelf : this.frames.bgOther;
        }
        const rankNo = index + 1;
        if (rankNo < 4 && this.frames) {
            if (this.labRank) this.labRank.node.active = false;
            if (this.rankImg) {
                this.rankImg.node.active = true;
                this.rankImg.spriteFrame = this.frames.medals[rankNo - 1];
            }
        } else {
            if (this.rankImg) this.rankImg.node.active = false;
            if (this.labRank) {
                this.labRank.node.active = true;
                this.labRank.string = `${rankNo}`;
            }
        }
    }

    /** 底部固定的“自己”行（50 名外）：名次固定 99+，头像后续异步补。 */
    public renderSelf(player: RankPlayer): void {
        if (this.labName) this.labName.string = player.userName;
        if (this.labLevel) this.labLevel.string = `${player.level}关`;
        if (this.bgSprite && this.frames) this.bgSprite.spriteFrame = this.frames.bgSelf;
        if (this.rankImg) this.rankImg.node.active = false;
        if (this.labRank) {
            this.labRank.node.active = true;
            this.labRank.string = '99+';
        }
    }

    public setHead(frame: SpriteFrame): void {
        if (this.headImg && this.headImg.node.isValid) this.headImg.spriteFrame = frame;
    }
}
