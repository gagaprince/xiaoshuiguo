import { assetManager, Prefab } from 'cc';

/**
 * 第 11 步：非水果机关预制体（obs1/2/3、stake、blackBox）的 UUID 与缓存加载。
 * 资源均在主包 assets/game/prefab/game 下，无独立 bundle，用 loadAny 按 UUID 加载。
 */
export const MECHANIC_PREFAB_UUID = Object.freeze({
    obs1: '3480488c-86b0-4ec3-813a-6d5509b25746',
    obs2: '5f42149f-dbac-4125-a7c8-2c146d0146fa',
    obs3: 'bfef0df9-aca8-4f9b-9d53-f3cf60584c9a',
    stake: '52edd66d-4a44-49a8-bf9b-5ab8c2ed5833',
    blackBox: '149a15cb-297a-44b7-8384-93db1cb2e1ec',
    iceLab: 'c16c5ea1-6941-4297-aa51-850165f412a2',
    holeBg: 'd5a734ea-cc94-448e-80dc-9389bddf0953',
    holeCount: '901aa9a3-fbf4-4f1b-99b0-c8f2ad67f17d',
    jointPoint: '6bebd4ab-6f1f-490a-96e2-fd8ee338d648',
} as const);

export type MechanicPrefabKey = keyof typeof MECHANIC_PREFAB_UUID;

export class MechanicPrefabs {
    private readonly cache = new Map<MechanicPrefabKey, Prefab>();
    private readonly loading = new Map<MechanicPrefabKey, Promise<Prefab>>();

    /** 预加载若干机关预制体；单个失败不阻断其余资源。 */
    public preload(keys: Iterable<MechanicPrefabKey>): Promise<void> {
        return Promise
            .all(Array.from(new Set(Array.from(keys))).map(key => this.load(key).catch(() => null)))
            .then(() => undefined);
    }

    public load(key: MechanicPrefabKey): Promise<Prefab> {
        const cached = this.cache.get(key);
        if (cached) return Promise.resolve(cached);
        const pending = this.loading.get(key);
        if (pending) return pending;

        const promise = new Promise<Prefab>((resolve, reject) => {
            assetManager.loadAny(MECHANIC_PREFAB_UUID[key], (err, asset: Prefab) => {
                this.loading.delete(key);
                if (err) {
                    reject(err);
                    return;
                }
                this.cache.set(key, asset);
                resolve(asset);
            });
        });
        this.loading.set(key, promise);
        return promise;
    }

    public async acquire(key: MechanicPrefabKey): Promise<Prefab> {
        return this.cache.get(key) ?? this.load(key);
    }
}
