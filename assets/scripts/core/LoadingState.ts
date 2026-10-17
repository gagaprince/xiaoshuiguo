/**
 * 加载进度状态（临时单例）。
 * 对应原版 GbzDataManager.ins.loading_rate，待 GbzDataManager 重建后并入其中。
 * 原版只有两个写入点：启动时 0，资源与首页准备完成后 1；
 * 0~1 之间的进度条表现由 GbzLoadingLayer 自身的渐近公式驱动。
 */
export class LoadingState {
    private static _ins: LoadingState | null = null;

    public static get ins(): LoadingState {
        if (!this._ins) this._ins = new LoadingState();
        return this._ins;
    }

    public loadingRate = 0;
}
