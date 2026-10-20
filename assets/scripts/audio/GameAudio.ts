import { assetManager, AudioClip, AudioSource, director, game, Game, Node } from 'cc';

/**
 * 第 14 步：游戏音频管理器（对齐原版 GbzAudioManager 的运行时语义）。
 *
 * 证据（GbzAudioManager.play/playBGM/playComboSound、GbzEnum.ENUM_CLIP）：
 * - 24 个音效全部位于主包 assets/game/audios，按文件名经资源 UUID 懒加载并缓存；
 * - play(name, loop, maxConcurrent)：同一音效并发限流，超出直接丢弃；
 *   每次播放计数 +1，clip 时长后计数 -1（原版 setTimeout(duration)）；
 * - BGM 走常驻节点 AudioSource，loop=true、volume=0.3，同名不重播；
 * - playComboSound：3s 内的连击递增 xiaochu_1 -> xiaochu_5（到 5 回 1），
 *   独立限流组 combo（原版 group=99，并发上限 5）；
 * - 总开关 game_sound/game_music（原版存 GbzDataManager，设置层未建，先默认开）。
 */

/** ENUM_CLIP 名 -> 主包资源 UUID（与 assets/game/audios 下文件一一对应）。 */
const CLIP_UUID: Readonly<Record<string, string>> = Object.freeze({
    lei: 'c6338f86-48f9-41c3-82e7-96629e2b789b',
    ui_click: '1d32a179-5262-44f0-acd1-937a9047bb77',
    xiaochu_1: 'f137aaad-0eb9-4d49-b978-f8b75d5400b6',
    xiaochu_2: 'c99eec5a-eb38-40ba-9952-566402c82d92',
    xiaochu_3: '43dc9755-3d43-45a4-85b2-a92c2bfae7c1',
    xiaochu_4: '041b4ecf-9d01-4d67-a867-9e3a14fd33a1',
    xiaochu_5: '0730c002-1bb6-415f-9916-a82e62229145',
    刷新: '823e423f-01ef-4f30-bfb1-26a294fe6802',
    失败: 'e1289900-ec83-4af0-8914-1ad62c137758',
    排位获得新段位: '68c79389-ecb5-42ad-8d92-aeb9896e1dee',
    水果喷射: '3539227d-582e-4e8a-a809-2abac473552a',
    水果消失: 'b4afdfd9-2983-4a6f-8764-73605f9cb959',
    水果消除bgm: '69713f90-6603-4186-854b-cbff46f8e7a7',
    水果消除关卡bgm: '7d90d1f4-7cbc-49b6-8e05-b1873e3a9ca4',
    水果落地: 'ecf570a5-3282-43b1-b6f5-4f46776249bf',
    汽车鸣笛: '266f139f-4a09-48ef-acc5-d112115b2d60',
    点击水果: 'd0f5223a-bbce-4312-85a8-f9ffb342378d',
    相同水果碰撞: 'ff8aabf4-8f38-41de-ae64-48489383b600',
    磁铁音效: '1983618b-7d7f-4e29-aed3-e8b70c4875f8',
    胜利: '86cc0981-a2b3-4d95-9b04-a07159545d61',
    胜利后获得蔬菜: 'fb6078eb-f62a-4637-b65d-2be4003bebea',
    装不下啦: '9aca8636-ce59-4954-a3e9-b8c9f9396e16',
    解锁坑位: 'c4cd101e-72e9-4b79-90c2-b734402de5a6',
});

const COMBO_GROUP = '__combo__';
const COMBO_INTERVAL_MS = 3000;
const COMBO_MAX = 5;
const BGM_VOLUME = 0.3;

export class GameAudio {
    private static _ins: GameAudio | null = null;

    public static get ins(): GameAudio {
        if (!GameAudio._ins) GameAudio._ins = new GameAudio();
        return GameAudio._ins;
    }

    /** 音效总开关（原版 GbzDataManager.game_sound，设置层接入后可切换）。 */
    public soundOn = true;
    /** 音乐总开关（原版 GbzDataManager.game_music）。 */
    public musicOn = true;

    private readonly clips = new Map<string, AudioClip>();
    private readonly loading = new Map<string, Promise<AudioClip | null>>();
    private readonly playCounts = new Map<string, number>();
    private sfxSource: AudioSource | null = null;
    private bgmSource: AudioSource | null = null;
    private bgmKey: string | null = null;
    private comboIndex = 0;
    private lastComboTime = 0;

    private constructor() {
        const scene = director.getScene();
        if (!scene) return;
        const root = new Node('__GameAudio__');
        scene.addChild(root);
        director.addPersistRootNode(root);
        this.sfxSource = root.addComponent(AudioSource);
        this.bgmSource = root.addComponent(AudioSource);
        // 原版 pauseBGM/resumeBGM：切后台暂停 BGM，回前台恢复。
        game.on(Game.EVENT_HIDE, this.pauseBGM, this);
        game.on(Game.EVENT_SHOW, this.resumeBGM, this);
    }

    /** 预加载音频（默认加载全部 23 个短音效，BGM 在首次播放时加载）。 */
    public preload(keys?: readonly string[]): Promise<void> {
        const targets = keys ?? Object.keys(CLIP_UUID);
        return Promise.all(targets.map(key => this.loadClip(key).catch(() => null))).then(() => undefined);
    }

    /** Loading 阶段预加载：除两首 BGM 外的全部短音效。 */
    public preloadSfx(): Promise<void> {
        const keys = Object.keys(CLIP_UUID).filter(key => key !== '水果消除bgm' && key !== '水果消除关卡bgm');
        return this.preload(keys);
    }

    private loadClip(key: string): Promise<AudioClip | null> {
        const cached = this.clips.get(key);
        if (cached) return Promise.resolve(cached);
        const pending = this.loading.get(key);
        if (pending) return pending;
        const uuid = CLIP_UUID[key];
        if (!uuid) return Promise.resolve(null);
        const promise = new Promise<AudioClip | null>(resolve => {
            assetManager.loadAny(uuid, (err, clip: AudioClip) => {
                this.loading.delete(key);
                if (err || !clip) {
                    resolve(null);
                    return;
                }
                this.clips.set(key, clip);
                resolve(clip);
            });
        });
        this.loading.set(key, promise);
        return promise;
    }

    /**
     * 播放一次性音效。
     * @param key ENUM_CLIP 名（即音频文件名，不含扩展名）。
     * @param maxConcurrent 同组 1 个 clip 时长窗口内的最大并发数（原版参数 i）。
     * @param group 限流组，默认与 key 相同；连击音共用独立组。
     */
    public play(key: string, maxConcurrent = 1, group: string = key): void {
        if (!this.soundOn || !this.sfxSource) return;
        const current = this.playCounts.get(group) ?? 0;
        if (current >= maxConcurrent) return;
        this.playCounts.set(group, current + 1);
        void this.loadClip(key).then(clip => {
            if (!clip || !this.soundOn || !this.sfxSource) {
                this.releaseGroup(group);
                return;
            }
            this.sfxSource.playOneShot(clip, 1);
            // 原版按 clip.duration 释放并发额度；缺失时长时兜底 1s。
            const duration = Math.max(0.05, clip.getDuration() || 1);
            setTimeout(() => this.releaseGroup(group), duration * 1000);
        });
    }

    private releaseGroup(group: string): void {
        const count = this.playCounts.get(group) ?? 1;
        if (count <= 1) this.playCounts.delete(group);
        else this.playCounts.set(group, count - 1);
    }

    /**
     * 原版 playComboSound：3s 内每次消除连击序号 +1（1~5 循环），
     * 播 xiaochu_n，独立限流组、并发上限 5。
     */
    public playCombo(): void {
        if (!this.soundOn) return;
        const now = Date.now();
        if (now - this.lastComboTime <= COMBO_INTERVAL_MS) {
            this.comboIndex += 1;
            if (this.comboIndex > COMBO_MAX) this.comboIndex = 1;
        } else {
            this.comboIndex = 1;
        }
        this.lastComboTime = now;
        this.play(`xiaochu_${this.comboIndex}`, COMBO_MAX, COMBO_GROUP);
    }

    /** 原版 playBGM：常驻 AudioSource 循环播放，同名不重新开始。 */
    public playBGM(key: string): void {
        if (!this.musicOn || !this.bgmSource || this.bgmKey === key) return;
        this.bgmKey = key;
        void this.loadClip(key).then(clip => {
            if (!clip || !this.bgmSource || !this.musicOn || this.bgmKey !== key) return;
            this.bgmSource.stop();
            this.bgmSource.clip = clip;
            this.bgmSource.loop = true;
            this.bgmSource.volume = BGM_VOLUME;
            this.bgmSource.play();
        });
    }

    public stopBGM(): void {
        this.bgmKey = null;
        this.bgmSource?.stop();
    }

    public pauseBGM(): void {
        if (this.bgmSource?.playing) this.bgmSource.pause();
    }

    public resumeBGM(): void {
        if (this.musicOn && this.bgmSource && !this.bgmSource.playing) this.bgmSource.play();
    }
}
