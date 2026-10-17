import { assetManager, Prefab } from 'cc';
import { FRUIT_PREFAB_UUID } from './FruitPrefabMap';

/**
 * 第 4 步：水果预制体加载与实例供应。
 *
 * - 预制体按 UUID 懒加载并缓存（水果在主包 assets/fruits 下，无独立 bundle）。
 * - acquire 直接 instantiate；release 当前直接销毁。
 *   接口按对象池形态预留，后续高数量关卡（如第 2 关 174 个）再补回池逻辑。
 */
export class FruitFactory {
    private readonly prefabs = new Map<number, Prefab>();
    private readonly loading = new Map<number, Promise<Prefab>>();

    public preload(types: Iterable<number>): Promise<void> {
        const unique = Array.from(new Set(Array.from(types)));
        // 单个预制体缺失不应阻断整关生成：失败的类型在 acquire 时会再次尝试并告警。
        return Promise
            .all(unique.map(type => this.loadPrefab(type).catch(() => null)))
            .then(() => undefined);
    }

    /** 加载某类型预制体；并发调用共享同一个 Promise。 */
    public loadPrefab(type: number): Promise<Prefab> {
        const cached = this.prefabs.get(type);
        if (cached) return Promise.resolve(cached);

        const pending = this.loading.get(type);
        if (pending) return pending;

        const uuid = FRUIT_PREFAB_UUID[type];
        if (!uuid) return Promise.reject(new Error(`unknown fruit type: ${type}`));

        const promise = new Promise<Prefab>((resolve, reject) => {
            assetManager.loadAny(uuid, (err, asset: Prefab) => {
                this.loading.delete(type);
                if (err) {
                    reject(err);
                    return;
                }
                this.prefabs.set(type, asset);
                resolve(asset);
            });
        });
        this.loading.set(type, promise);
        return promise;
    }

    public async acquire(type: number): Promise<Prefab> {
        const prefab = this.prefabs.get(type) ?? await this.loadPrefab(type);
        return prefab;
    }

    /** 当前为直接销毁；后续可平滑替换为回收进池。 */
    public release(): void {
        // 节点由调用方 destroy；这里保留池接口位。
    }
}
