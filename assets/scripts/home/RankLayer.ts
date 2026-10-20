import {
    _decorator, assetManager, Color, Component, find, Label, Layout, Node, SpriteFrame, UITransform,
} from 'cc';
import { GameAudio } from '../audio/GameAudio';
import { LevelProgress } from '../core/LevelProgress';
import { RankHeadIcons } from './RankHeadIcons';
import { RankNpcData, RankPlayer } from './RankNpcData';
import { RankRow, RankRowSharedFrames } from './RankRow';

const { ccclass } = _decorator;

/** GbzRankLayer.prefab（assets/secondary/prefab/Home）。 */
const RANK_PANEL_UUID = 'a6317380-835b-4669-bc36-59b124ad923e';

const SPRITE_BG_OTHER = '988b0b52-f527-4f74-9ff8-7bd329c25d84@f9941';
const SPRITE_BG_SELF = 'a4ca209d-4a78-4c30-91e6-6a5e1b5e122e@f9941';
const SPRITE_HEAD_FRAME = '220b7319-a5ca-4bc2-ac29-2abdb63545e7@f9941';
const SPRITE_MEDALS = [
    'de01a423-364c-4d31-9c00-3b1e3cd036f5@f9941',
    'cb047a85-5e2b-4839-b667-faae0506e02f@f9941',
    '1cc015c1-cf2b-446a-92b1-01a8a31b5e2d@f9941',
];

/**
 * 排行榜面板（原版 GbzRankLayer）。
 *
 * 面板预制体已恢复（tab/底板/ScrollView 均在），仅原 GridLayerListView
 * 池化脚本失效：世界榜改为原生 ScrollView + VERTICAL Layout，行模板
 * （原工程未迁入）由 RankRow 按原包结构在代码中还原。
 * 好友榜依赖微信开放数据域，Web 预览显示占位提示。
 */
@ccclass('RankLayer')
export class RankLayer extends Component {
    public static prefabUuid = RANK_PANEL_UUID;

    private closeHandler: (() => void) | null = null;

    private panel: Node | null = null;
    private wordRank: Node | null = null;
    private friendRank: Node | null = null;
    private content: Node | null = null;
    private selfDataNode: Node | null = null;
    private selfRow: RankRow | null = null;

    private readonly rows: Array<{ row: RankRow; player: RankPlayer }> = [];
    private readonly headFrameCache = new Map<string, Promise<SpriteFrame | null>>();
    private sharedFrames: RankRowSharedFrames | null = null;

    public setup(closeHandler: () => void): void {
        this.closeHandler = closeHandler;
    }

    public start(): void {
        this.stripMissingScripts(this.node);
        this.panel = find('style/panel', this.node);

        const shade = this.node.getChildByName('btnBgshade');
        shade?.on(Node.EventType.TOUCH_END, this.onCloseClick, this);
        this.panel?.getChildByName('btn_Close')?.on(Node.EventType.TOUCH_END, this.onCloseClick, this);

        const changeBg = this.panel?.getChildByName('changeBg') ?? null;
        changeBg?.getChildByName('btnWord')?.on(Node.EventType.TOUCH_END, this.showWordRank, this);
        changeBg?.getChildByName('btnFriend')?.on(Node.EventType.TOUCH_END, this.onFriendRank, this);

        this.wordRank = this.panel?.getChildByName('wordRank') ?? null;
        this.friendRank = this.panel?.getChildByName('friendRank') ?? null;
        this.content = this.wordRank?.getChildByPath('list/view/content') ?? null;

        this.showWordRank(false);
        this.buildFriendPlaceholder();
        this.configureContentLayout();
        this.loadAndBuild();
    }

    /**
     * 原 GridLayerListView 失效（9d992… MissingScript），剔除后改用
     * Cocos 原生 Layout：纵向、CONTAINER 自适应、行距 10（原 spaceY=10）。
     */
    private stripMissingScripts(node: Node): void {
        for (const comp of node.components.slice()) {
            if ((comp.constructor as { name?: string }).name === 'MissingScript') {
                node.removeComponent(comp);
            }
        }
        for (const child of node.children) this.stripMissingScripts(child);
    }

    private configureContentLayout(): void {
        const layout = this.content?.getComponent(Layout);
        if (!layout || !this.content) return;
        layout.enabled = true;
        layout.type = Layout.Type.VERTICAL;
        layout.resizeMode = Layout.ResizeMode.CONTAINER;
        layout.spacingY = 10;
        layout.paddingTop = 20;
        layout.paddingBottom = 20;
        // content 宽 665、行根 650，两侧等距 padding 让 CONTAINER 自动居中。
        layout.paddingLeft = 8;
        layout.paddingRight = 7;
    }

    private buildFriendPlaceholder(): void {
        if (!this.friendRank) return;
        const tipNode = new Node('friendTip');
        tipNode.layer = this.friendRank.layer;
        tipNode.addComponent(UITransform).setContentSize(560, 120);
        tipNode.setPosition(0, 0);
        const label = tipNode.addComponent(Label);
        label.fontSize = 32;
        label.lineHeight = 48;
        label.color = new Color(106, 74, 55, 255);
        label.string = '好友榜为微信功能\n请在微信中查看';
        this.friendRank.addChild(tipNode);
    }

    private async loadAndBuild(): Promise<void> {
        try {
            const frames = await this.loadSharedFrames();
            if (!this.node.isValid || !this.content) return;
            this.sharedFrames = frames;
            this.buildRows(frames);
        } catch (error) {
            console.error('[RankLayer] init failed', error);
        }
    }

    private buildRows(frames: RankRowSharedFrames): void {
        const layer = this.node.layer;
        // 原版 onEnable：curlLevel = fakeGame_level - 1。
        const playerLevel = Math.max(0, LevelProgress.currentLevel - 1);
        const { players, playerRank } = RankNpcData.build(playerLevel);

        for (let i = 0; i < players.length; i++) {
            const player = players[i];
            const row = RankRow.build(this.content!, layer, frames);
            row.render(player, i);
            this.rows.push({ row, player });
            this.requestHead(player.headImg, frame => row.setHead(frame));
        }

        this.buildSelfData(frames, layer, playerRank, playerLevel);
    }

    /** 底部固定的自己行（原版 wordRank/selfData，50 名外时显示 99+）。 */
    private buildSelfData(frames: RankRowSharedFrames, layer: number, playerRank: number, playerLevel: number): void {
        if (!this.wordRank) return;
        const wrapper = new Node('selfData');
        wrapper.layer = layer;
        wrapper.addComponent(UITransform).setContentSize(665, 120);
        // 坐标逐字取自原包面板 selfData 的 PrefabInstance 覆盖值 (0,-342.604)。
        wrapper.setPosition(0, -342.604);
        this.wordRank.addChild(wrapper);
        this.selfDataNode = wrapper;

        const row = RankRow.build(wrapper, layer, frames);
        this.selfRow = row;
        const self: RankPlayer = { headImg: '椰子', userName: '自己', level: playerLevel, isPlayer: true };
        if (playerRank !== -1) {
            wrapper.active = false;
        } else {
            row.renderSelf(self);
            this.requestHead('椰子', frame => row.setHead(frame));
        }
    }

    private requestHead(name: string, apply: (frame: SpriteFrame) => void): void {
        const uuid = RankHeadIcons.uuid(name);
        if (!uuid) return;
        let task = this.headFrameCache.get(name);
        if (!task) {
            task = new Promise<SpriteFrame | null>(resolve => {
                assetManager.loadAny({ uuid, type: SpriteFrame }, (err, frame: SpriteFrame) => {
                    resolve(err ? null : frame);
                });
            });
            this.headFrameCache.set(name, task);
        }
        task.then(frame => {
            if (frame && this.node.isValid) apply(frame);
        });
    }

    private loadSharedFrames(): Promise<RankRowSharedFrames> {
        return new Promise((resolve, reject) => {
            const uuids = [SPRITE_BG_OTHER, SPRITE_BG_SELF, SPRITE_HEAD_FRAME, ...SPRITE_MEDALS];
            assetManager.loadAny(uuids.map(uuid => ({ uuid, type: SpriteFrame })), (err, frames: SpriteFrame[]) => {
                if (err) {
                    reject(err);
                    return;
                }
                const bgOther = frames[0];
                const bgSelf = frames[1];
                resolve({
                    bgOther,
                    bgSelf,
                    headFrame: frames[2],
                    medals: [frames[3], frames[4], frames[5]],
                });
            });
        });
    }

    private showWordRank(playSound = true): void {
        if (playSound) GameAudio.ins.play('ui_click');
        const changeBg = this.panel?.getChildByName('changeBg');
        const wordShow = changeBg?.getChildByName('btnWordShow');
        const friendShow = changeBg?.getChildByName('btnFriendShow');
        if (wordShow) wordShow.active = true;
        if (friendShow) friendShow.active = false;
        if (this.wordRank) this.wordRank.active = true;
        if (this.friendRank) this.friendRank.active = false;
    }

    private onFriendRank(): void {
        GameAudio.ins.play('ui_click');
        const changeBg = this.panel?.getChildByName('changeBg');
        const wordShow = changeBg?.getChildByName('btnWordShow');
        const friendShow = changeBg?.getChildByName('btnFriendShow');
        if (wordShow) wordShow.active = false;
        if (friendShow) friendShow.active = true;
        if (this.wordRank) this.wordRank.active = false;
        if (this.friendRank) this.friendRank.active = true;
    }

    private onCloseClick(): void {
        GameAudio.ins.play('ui_click');
        if (this.closeHandler) this.closeHandler();
        else this.node.destroy();
    }

    public onDestroy(): void {
        const shade = this.node.getChildByName('btnBgshade');
        shade?.off(Node.EventType.TOUCH_END, this.onCloseClick, this);
    }
}
