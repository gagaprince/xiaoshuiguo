import { assetManager, Prefab } from 'cc';
import { FRUIT_PREFAB_UUID } from './FruitPrefabMap';

/**
 * 水果预制体最终加载失败时的替身类型。
 * 必须选第一关教学硬依赖、工程内必然存在的类型（firstLevelIDS 使用 1/2/9），
 * 它若也加载失败说明资源系统整体不可用，无可挽回。
 */
const FALLBACK_FRUIT_TYPE = 1;
/** 首次加载失败后的重试间隔（ms）；覆盖偶发 IO/解压缩失败。 */
const LOAD_RETRY_DELAYS = [150, 350] as const;

/**
 * 第 4 步：水果预制体加载与实例供应。
 *
 * - 预制体按 UUID 懒加载并缓存（水果在主包 assets/fruits 下，无独立 bundle）。
 * - 单个预制体加载失败先重试；仍失败则用 FALLBACK_FRUIT_TYPE 的预制体兜底，
 *   保证关卡数据里的每个水果都有实体（否则剩余目标永远清不到 0，关卡无法通关，
 *   尾号 0 黑洞关还会因实体与数据索引错位导致锚点错乱）。
 *   兜底实例的 FruitEntity.fruitType 仍是真实类型，配对/进篮/计数逻辑不受影响，
 *   仅贴图显示为替身；FruitFactory 只负责供砖，类型语义由调用方保留。
 * - acquire 直接 instantiate；release 当前直接销毁。
 *   接口按对象池形态预留，后续高数量关卡（如第 2 关 174 个）再补回池逻辑。
 */
export class FruitFactory {
    private readonly prefabs = new Map<number, Prefab>();
    private readonly loading = new Map<number, Promise<Prefab>>();
    /** 已告警过的替身类型，避免同类型刷屏。 */
    private readonly substituted = new Set<number>();

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

        const promise = this.loadWithRetry(uuid).then(
            asset => {
                this.prefabs.set(type, asset);
                this.loading.delete(type);
                return asset;
            },
            err => {
                this.loading.delete(type);
                throw err;
            },
        );
        this.loading.set(type, promise);
        return promise;
    }

    /** loadAny 的单次 Promise 封装。 */
    private loadOnce(uuid: string): Promise<Prefab> {
        return new Promise<Prefab>((resolve, reject) => {
            assetManager.loadAny(uuid, (err, asset: Prefab) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(asset);
            });
        });
    }

    /** 按 LOAD_RETRY_DELAYS 间隔重试；全部失败抛出最后一次错误。 */
    private async loadWithRetry(uuid: string): Promise<Prefab> {
        let lastError: unknown = null;
        for (let attempt = 0; attempt <= LOAD_RETRY_DELAYS.length; attempt += 1) {
            try {
                return await this.loadOnce(uuid);
            } catch (err) {
                lastError = err;
                if (attempt < LOAD_RETRY_DELAYS.length) {
                    await new Promise<void>(resolve => setTimeout(resolve, LOAD_RETRY_DELAYS[attempt]));
                }
            }
        }
        throw lastError instanceof Error ? lastError : new Error(String(lastError));
    }

    public async acquire(type: number): Promise<Prefab> {
        try {
            return this.prefabs.get(type) ?? await this.loadPrefab(type);
        } catch (err) {
            if (type === FALLBACK_FRUIT_TYPE) throw err;
            if (!this.substituted.has(type)) {
                this.substituted.add(type);
                console.warn(
                    `[FruitFactory] fruit${type} prefab unavailable after retries;`
                    + ` substituting fruit${FALLBACK_FRUIT_TYPE} visual so the level stays completable`,
                    err,
                );
            }
            return this.prefabs.get(FALLBACK_FRUIT_TYPE) ?? await this.loadPrefab(FALLBACK_FRUIT_TYPE);
        }
    }

    /** 当前为直接销毁；后续可平滑替换为回收进池。 */
    public release(): void {
        // 节点由调用方 destroy；这里保留池接口位。
    }
}
