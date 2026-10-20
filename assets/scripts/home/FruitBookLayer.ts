import {
    _decorator, assetManager, Color, Component, find, instantiate, Label, Node, Prefab,
    Sprite, SpriteFrame, tween, UIOpacity, UITransform, Vec3, Widget,
} from 'cc';
import { GameAudio } from '../audio/GameAudio';
import { LevelProgress } from '../core/LevelProgress';
import { CollectibleTable } from '../level/CollectibleTable';
import { FruitBookState } from './FruitBookState';

const { ccclass } = _decorator;

/** GbzFruitBookLayer.prefab（assets/secondary/prefab/Home）。 */
const BOOK_PANEL_UUID = 'f0e6eef5-39e5-464e-8ab3-2162133d6d15';
/** fruitBook.prefab：原 GridLayerListView.prefab 引用的格子模板。 */
const BOOK_CELL_UUID = '7af9864f-d0e9-43b8-91b6-bb3a75bffe34';

/**
 * 图鉴面板（原版 GbzFruitBookLayer + FruitBookComp + GridLayerListView）。
 *
 * 原池化列表脚本未迁入，这里用原包 GridListView.initParam/addItems 的
 * 定位公式直接摆 175 个格子（3 列、行距 28、内容高 rows*228）：
 *   colX = -(cellNum-1)*200/2 + col*200 = -200/0/200
 *   rowY = -(200+28)*(0.5+row)
 *
 * 解锁规则（原版 FruitBookComp.refreshPro）：
 * No.r（r 从 1 起）满足 r < game_level 即解锁，亮彩显示名字/编号；
 * 未解锁项水果染黑、透明度 100、隐藏文字；新解锁项显示 newTip。
 */
@ccclass('FruitBookLayer')
export class FruitBookLayer extends Component {
    public static prefabUuid = BOOK_PANEL_UUID;

    private static readonly CELL_SIZE = 200;
    private static readonly SPACE_X = 0;
    private static readonly SPACE_Y = 28;
    private static readonly COLUMN_NUM = 3;

    private closeHandler: (() => void) | null = null;

    private panel: Node | null = null;
    private content: Node | null = null;

    public setup(closeHandler: () => void): void {
        this.closeHandler = closeHandler;
    }

    public start(): void {
        this.stripMissingScripts(this.node);
        this.panel = find('style/panel', this.node);

        const shade = this.node.getChildByName('btnBgshade');
        shade?.on(Node.EventType.TOUCH_END, this.onCloseClick, this);
        this.panel?.getChildByName('btn_Close')?.on(Node.EventType.TOUCH_END, this.onCloseClick, this);

        this.content = this.panel?.getChildByPath('list/view/content') ?? null;

        this.loadAndBuild();
    }

    private stripMissingScripts(node: Node): void {
        for (const comp of node.components.slice()) {
            if ((comp.constructor as { name?: string }).name === 'MissingScript') {
                node.removeComponent(comp);
            }
        }
        for (const child of node.children) this.stripMissingScripts(child);
    }

    private loadAndBuild(): void {
        assetManager.loadAny(BOOK_CELL_UUID, (cellError, cellPrefab: Prefab) => {
            if (cellError || !this.node.isValid) {
                console.warn('[FruitBookLayer] cell prefab load failed', cellError);
                return;
            }
            const uuids = this.collectIconUuids();
            assetManager.loadAny(uuids.map(uuid => ({ uuid, type: SpriteFrame })), (iconError, frames: SpriteFrame[]) => {
                if (!this.node.isValid) return;
                const iconMap = new Map<string, SpriteFrame>();
                if (!iconError) {
                    for (let i = 0; i < uuids.length; i++) iconMap.set(uuids[i], frames[i]);
                }
                this.build(cellPrefab, iconMap);
            });
        });
    }

    private collectIconUuids(): string[] {
        const setList: string[] = [];
        for (let i = 0; i < CollectibleTable.bookCount; i++) {
            const uuid = CollectibleTable.bookIconUuidAt(i);
            if (setList.indexOf(uuid) < 0) setList.push(uuid);
        }
        return setList;
    }

    private build(cellPrefab: Prefab, iconMap: Map<string, SpriteFrame>): void {
        if (!this.panel || !this.content) return;

        const level = LevelProgress.currentLevel;
        const total = CollectibleTable.bookCount;
        const unlockedCount = Math.min(level - 1, total);
        const lastViewed = FruitBookState.lastViewedLevel;

        const layoutPro = this.panel.getChildByName('layoutPro');
        const levelLabel = layoutPro?.getChildByName('level')?.getComponent(Label);
        const allLabel = layoutPro?.getChildByName('allLable')?.getComponent(Label);
        if (levelLabel) levelLabel.string = `${unlockedCount}`;
        if (allLabel) allLabel.string = `/${total}`;

        // 原 GridListView.initParam：content 锚点 (0.5,1)，与 view 等宽，
        // 高 = 行数 * (格子高 + spaceY)。
        const view = this.content.parent;
        const viewHeight = view?.getComponent(UITransform)?.contentSize.height ?? 900;
        const viewWidth = view?.getComponent(UITransform)?.contentSize.width ?? 624;
        const contentTransform = this.content.getComponent(UITransform);
        const contentWidget = this.content.getComponent(Widget);
        if (contentWidget) contentWidget.enabled = false;
        const rowNum = Math.ceil(total / FruitBookLayer.COLUMN_NUM);
        const itemStep = FruitBookLayer.CELL_SIZE + FruitBookLayer.SPACE_Y;
        if (contentTransform) {
            contentTransform.setContentSize(viewWidth, rowNum * itemStep);
            contentTransform.setAnchorPoint(0.5, 1);
        }
        this.content.setPosition(0, viewHeight / 2);

        for (let i = 0; i < total; i++) {
            const cell = instantiate(cellPrefab);
            this.stripMissingScripts(cell);
            this.syncLayer(cell, this.node.layer);
            this.content.addChild(cell);
            const row = Math.floor(i / FruitBookLayer.COLUMN_NUM);
            const col = i % FruitBookLayer.COLUMN_NUM;
            const x = (col - (FruitBookLayer.COLUMN_NUM - 1) / 2)
                * (FruitBookLayer.CELL_SIZE + FruitBookLayer.SPACE_X);
            const y = -itemStep * (row + 0.5);
            cell.setPosition(x, y);
            this.renderCell(cell, i, level, lastViewed, iconMap);
        }
    }

    private syncLayer(node: Node, layer: number): void {
        node.layer = layer;
        for (const child of node.children) this.syncLayer(child, layer);
    }

    /** 原版 FruitBookComp.refreshPro。 */
    private renderCell(cell: Node, index: number, level: number, lastViewed: number, iconMap: Map<string, SpriteFrame>): void {
        const parentNode = cell.getChildByName('parent');
        const fruitNode = parentNode?.getChildByName('fruit') ?? null;
        const nameNode = parentNode?.getChildByName('fruitName') ?? null;
        const numNode = parentNode?.getChildByName('num') ?? null;
        const newTip = parentNode?.getChildByName('newTip') ?? null;

        const rankNo = index + 1;
        const fruit = fruitNode?.getComponent(Sprite) ?? null;
        const hasIcon = CollectibleTable.bookHasIcon(index);
        if (hasIcon) {
            const frame = iconMap.get(CollectibleTable.bookIconUuidAt(index));
            if (fruit && frame) fruit.spriteFrame = frame;
        }

        const nameLabel = nameNode?.getComponent(Label) ?? null;
        if (nameLabel) nameLabel.string = CollectibleTable.bookNameAt(index);
        const numLabel = numNode?.getComponent(Label) ?? null;
        if (numLabel) numLabel.string = `No.${rankNo}`;

        const unlocked = rankNo < level;
        // 有真实贴图：解锁亮彩，未解锁黑色剪影；无贴图条目即使解锁也以剪影呈现，
        // 避免用默认草莓图冒充华夫饼等未迁入类目。
        const showColorful = unlocked && hasIcon;
        if (fruit) fruit.color = showColorful ? Color.WHITE : Color.BLACK;
        let opacity = fruitNode?.getComponent(UIOpacity) ?? null;
        if (!opacity && fruitNode) opacity = fruitNode.addComponent(UIOpacity);
        if (opacity) opacity.opacity = showColorful ? 255 : 100;
        if (nameNode) nameNode.active = unlocked;
        if (numNode) numNode.active = unlocked;
        if (newTip) newTip.active = unlocked && hasIcon && rankNo >= lastViewed;

        // 原版进场弹跳：parent scale 0 -> 0.9，backOut，0.5s。
        if (parentNode) {
            parentNode.setScale(0, 0, 1);
            tween(parentNode)
                .to(0.5, { scale: new Vec3(0.9, 0.9, 1) }, { easing: 'backOut' })
                .start();
        }
    }

    private onCloseClick(): void {
        GameAudio.ins.play('ui_click');
        FruitBookState.markViewed(LevelProgress.currentLevel);
        if (this.closeHandler) this.closeHandler();
        else this.node.destroy();
    }

    public onDestroy(): void {
        const shade = this.node.getChildByName('btnBgshade');
        shade?.off(Node.EventType.TOUCH_END, this.onCloseClick, this);
    }
}
