import { _decorator, assetManager, Component, Label, Node, Sprite, SpriteFrame, Tween, UIOpacity, UITransform, tween } from 'cc';
import { LevelLaunchConfig } from './LevelLaunchConfig';
import { LevelData } from './generator/LevelTypes';

const { ccclass } = _decorator;

/**
 * 第 12.4 步：顶部小方向图标（原版 setTip 的
 * ["xiangxia","向右","向左","中间"][arrangeType-1]，宽度统一 50）。
 * 仅左右移关在开场动画结束后常显，其余关保持隐藏。
 */
const DIR_ICON_SPRITE_FRAME: Readonly<Record<number, string>> = Object.freeze({
    1: 'c6fe3fa1-6138-470c-9e7c-616c5292e6c4@f9941',
    2: 'e966b986-22d3-4292-bb58-258ceec934bd@f9941',
    3: 'de70211e-9510-4dc1-be55-300f3d190d49@f9941',
    4: 'f067ee1b-231c-4422-b58d-5620377ed931@f9941',
});

/**
 * 第 2 步：Level 静态 UI 校准与初始状态。
 *
 * 只负责 GbzLvCommon/game 下已有节点的初始显隐与文案：
 * - levelBg/labLevel：顶部关卡条主文案“第 N 关”。
 * - levelBg/labLevel/labLevel copy：原版为“城市名 + 关卡名”小字，依赖 CityConfig
 *   （城市主题系统，后续步骤接入）；接入前先置空，避免与主文案重叠。
 * - levelBg/img：水果移动方向图标，arrangeType>1 的方向关才显示；第 1 关初始隐藏。
 * - fruitTextBg/labFruit：剩余目标水果数。
 * - progressBg/fillImg（cc.Sprite FILLED，竖向）+ labProgress：进度 0~1。
 *   fillImg/fillBg 的贴图原版在进关时按城市主题异步加载（GameMgr.getImgFill），
 *   预制体里本就没有 spriteFrame；与原版一致，仅在 spriteFrame 存在时写 fillRange。
 * - 开局隐藏 dirtectionTip（方向教学）、full（“装不下啦”）、leaderTip。
 *
 * 本步不接水果交互；setGoalRemain/setProgress 供后续 LevelController 调用。
 * 开发预览可用 ?uigoal=12&uiprogress=50 注入临时数据做 UI 验收。
 */
@ccclass('LevelView')
export class LevelView extends Component {
    private labFruit: Label | null = null;
    private fillImg: Sprite | null = null;
    private labProgress: Label | null = null;
    private labLevel: Label | null = null;
    private labLevelSub: Label | null = null;
    private levelDirImg: Node | null = null;
    private dirtectionTip: Node | null = null;
    private fullTip: Node | null = null;
    private leaderTip: Node | null = null;
    private levelData: LevelData | null = null;
    private goalOverride: number | null = null;

    /** 第 3 步：绑定生成器产出的关卡纯数据；必须在 start（首帧）前调用。 */
    public bindLevelData(data: LevelData): void {
        this.levelData = data;
    }

    /** 第 4 步：第 1 关等特例真实水果总数与生成器数据不同，由 FruitSpawner 提供。 */
    public bindInitialGoal(total: number): void {
        this.goalOverride = total;
    }

    public onLoad(): void {
        this.labFruit = this.findLabel('game/fruitTextBg/labFruit');
        this.fillImg = this.findSprite('game/progressBg/fillImg');
        this.labProgress = this.findLabel('game/progressBg/labProgress');
        this.labLevel = this.findLabel('game/levelBg/labLevel');
        this.labLevelSub = this.findLabel('game/levelBg/labLevel/labLevel copy');
        this.levelDirImg = this.node.getChildByPath('game/levelBg/img');

        this.dirtectionTip = this.node.getChildByPath('game/dirtectionTip');
        this.fullTip = this.node.getChildByPath('game/full');
        this.leaderTip = this.node.getChildByPath('game/leaderTip');
    }

    public start(): void {
        this.applyInitialState();
        this.prepareDirectionIcon(this.levelData?.parameters.moveDir ?? -1);
        const level = this.levelData?.level ?? LevelLaunchConfig.options.level;
        this.setLevel(level);

        if (this.levelData) {
            // 正式链路：剩余目标初始化为本关水果总数；进度为 0。
            this.setGoalRemain(this.goalOverride ?? this.levelData.fruits.length);
            this.setProgress(0);
        } else {
            // 无生成数据时（独立预览）允许用调试参数临时填数。
            this.setGoalRemain(this.readDebugNumber('uigoal', 0));
            this.setProgress(this.readDebugNumber('uiprogress', 0) / 100);
        }

        // ?uiprogress 仍可在真实关卡上覆盖进度，便于 UI 三档验收。
        const debugProgress = this.readDebugNumber('uiprogress', -1);
        if (debugProgress >= 0) this.setProgress(debugProgress / 100);
    }

    /** 关卡号文案，原版格式为“第 N 关”；城市/关卡名小字待 CityConfig 接入后再填。 */
    public setLevel(level: number): void {
        if (this.labLevel) this.labLevel.string = `第 ${level} 关`;
        if (this.labLevelSub) this.labLevelSub.string = '';
    }

    /** 第 12.4 步：左右移开场动画结束后，顶部小方向图标常显。 */
    public showDirectionIcon(): void {
        if (this.levelDirImg) this.levelDirImg.active = true;
    }

    /**
     * 原版 GameMgr.setTip：arrangeType>0 时给 levelBg/img 换方向小图标，
     * 宽度按原比例统一为 50（SOUtil.SetSpriteSizeWidth）。初始保持隐藏，
     * 仅左/右移关由开场动画回调 showDirectionIcon 激活。
     */
    private prepareDirectionIcon(moveDir: number): void {
        const uuid = DIR_ICON_SPRITE_FRAME[moveDir];
        const img = this.levelDirImg;
        if (!uuid || !img) return;
        assetManager.loadAny({ uuid, type: SpriteFrame }, (err, frame: SpriteFrame) => {
            if (err || !img.isValid) return;
            const sprite = img.getComponent(Sprite);
            if (!sprite) return;
            sprite.spriteFrame = frame;
            const size = frame.getOriginalSize?.() ?? (frame as unknown as { originalSize?: { width: number; height: number } }).originalSize;
            if (size && size.width > 0) {
                img.getComponent(UITransform)?.setContentSize(50, size.height * (50 / size.width));
            }
        });
    }

    /** 剩余目标水果数；初始为关卡水果总数，每次消除后递减。 */
    public setGoalRemain(remain: number): void {
        if (this.labFruit) this.labFruit.string = `${Math.max(0, Math.round(remain))}`;
    }

    /**
     * 第 9 步：game/full 中央提示（装不下啦/消不掉啦）。
     * 对齐原版 GameMgr.fullTip：0.3s 淡入、摇晃两轮、停 0.5s、0.3s 淡出。
     */
    public showFullTip(text: string): void {
        const tip = this.fullTip;
        if (!tip) return;
        const label = tip.children[0]?.getComponent(Label);
        if (label) label.string = text;
        tip.active = true;
        tip.angle = 0;
        const opacity = tip.getComponent(UIOpacity) ?? tip.addComponent(UIOpacity);
        opacity.opacity = 0;
        Tween.stopAllByTarget(tip);
        Tween.stopAllByTarget(opacity);
        tween(opacity).to(0.3, { opacity: 255 }).start();
        const shake = tween(tip)
            .to(0.1, { angle: 10 })
            .to(0.1, { angle: 0 })
            .to(0.1, { angle: -10 })
            .to(0.1, { angle: 0 });
        tween(tip)
            .repeat(2, shake)
            .delay(0.5)
            .call(() => {
                if (tip.isValid) tween(opacity).to(0.3, { opacity: 0 }).start();
            })
            .start();
    }

    /**
     * 进度 0~1。文案始终更新；fillRange 与原版一样仅在填充贴图已加载时写入，
     * 否则引擎 BarFilled.updateUVs 会因 spriteFrame 为空抛错。
     * 文案保留原版格式：整数 + 空格 + 百分号。
     */
    public setProgress(progress: number): void {
        const clamped = Math.min(1, Math.max(0, progress));
        if (this.labProgress) this.labProgress.string = `${Math.round(clamped * 100)} %`;
        // 开发验收：?uifill=1 且主题填充贴图未加载时，借用 progressBg 底板临时显示填充量。
        if (this.fillImg && !this.fillImg.spriteFrame && this.readDebugFlag('uifill')) {
            const bg = this.node.getChildByPath('game/progressBg')?.getComponent(Sprite);
            if (bg?.spriteFrame) this.fillImg.spriteFrame = bg.spriteFrame;
        }
        if (this.fillImg && this.fillImg.spriteFrame) this.fillImg.fillRange = clamped;
    }

    private applyInitialState(): void {
        if (this.dirtectionTip) this.dirtectionTip.active = false;
        if (this.fullTip) this.fullTip.active = false;
        if (this.leaderTip) this.leaderTip.active = false;
        if (this.levelDirImg) this.levelDirImg.active = false;
    }

    private findLabel(path: string): Label | null {
        const node = this.node.getChildByPath(path);
        return node ? node.getComponent(Label) : null;
    }

    private findSprite(path: string): Sprite | null {
        const node = this.node.getChildByPath(path);
        return node ? node.getComponent(Sprite) : null;
    }

    private readDebugNumber(key: string, fallback: number): number {
        try {
            if (typeof location !== 'undefined' && location.search) {
                const raw = new URLSearchParams(location.search).get(key);
                if (raw !== null) {
                    const value = Number.parseFloat(raw);
                    if (Number.isFinite(value) && value >= 0) return value;
                }
            }
        } catch {
            // 非浏览器环境忽略调试参数
        }
        return fallback;
    }

    private readDebugFlag(key: string): boolean {
        try {
            if (typeof location !== 'undefined' && location.search) {
                return new URLSearchParams(location.search).get(key) === '1';
            }
        } catch {
            // 非浏览器环境忽略调试参数
        }
        return false;
    }
}
