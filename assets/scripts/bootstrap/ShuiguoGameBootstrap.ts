import { _decorator, Component } from 'cc';
import { LoadingState } from '../core/LoadingState';
import { GameNavigator } from '../nav/GameNavigator';
import { LevelLaunchConfig } from '../level/LevelLaunchConfig';
import { GameAudio } from '../audio/GameAudio';

const { ccclass, property } = _decorator;

/**
 * 游戏启动流程（原版 GbzIndex.start 的最小重建版本）。
 *
 * 当前流程：Loading 进度条自推进 -> 执行加载任务（暂为空，后续填充资源预加载）
 * -> 由 GameNavigator 在 Stage 下挂首页 -> loadingRate 置 1，加载页自行隐藏露出首页。
 *
 * 与原版一致：首页先在加载遮罩下方准备好，再把 loading_rate 置 1。
 */
@ccclass('ShuiguoGameBootstrap')
export class ShuiguoGameBootstrap extends Component {
    /** 开发期最小加载展示时长（秒），接入真实资源加载后可设为 0 */
    @property
    public minLoadingTime = 1;

    /**
     * 加载任务列表，后续把资源预加载填充到这里。
     * 任务为普通函数，可返回 Promise；0~99% 的进度表现由进度条渐近公式驱动。
     */
    private loadingTasks: Array<() => Promise<void> | void> = [
        // 第 14 步：Loading 阶段预加载全部短音效（BGM 进首页/关卡时懒加载）。
        () => GameAudio.ins.preloadSfx(),
    ];

    public async start(): Promise<void> {
        LoadingState.ins.loadingRate = 0;

        const beginAt = Date.now();
        await this.runLoadingTasks();
        await this.ensureMinLoadingTime(beginAt);

        const navigator = this.getComponent(GameNavigator);
        if (navigator && LevelLaunchConfig.options.autoEnterLevel) {
            navigator.showLevel();
        } else {
            navigator?.showHome();
        }

        LoadingState.ins.loadingRate = 1;
    }

    private async runLoadingTasks(): Promise<void> {
        for (const task of this.loadingTasks) {
            await task();
        }
    }

    private async ensureMinLoadingTime(beginAt: number): Promise<void> {
        if (this.minLoadingTime <= 0) return;
        const elapsed = (Date.now() - beginAt) / 1000;
        const restMs = (this.minLoadingTime - elapsed) * 1000;
        if (restMs > 0) await new Promise<void>(resolve => this.scheduleOnce(resolve, restMs / 1000));
    }
}
