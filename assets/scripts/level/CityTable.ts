/**
 * 第 14 步·子任务 3/4：原版 CityConfig 的城市顺序数据。
 *
 * 汽车过场标牌与胜利层城市进度使用：常规表 e（100 城）+ 季节表 a（100 城），
 * 共 200 关循环。每条 [省名, 简称, 城市数]，数据从反混淆 CityConfig.ts.js 提取。
 */
const E_TABLE: ReadonlyArray<readonly [string, string, number]> = [
    ['广东省', '广东', 3],
    ['山东省', '山东', 3],
    ['河南省', '河南', 3],
    ['江苏省', '江苏', 3],
    ['四川省', '四川', 3],
    ['河北省', '河北', 3],
    ['浙江省', '浙江', 3],
    ['湖南省', '湖南', 3],
    ['安徽省', '安徽', 3],
    ['湖北省', '湖北', 2],
    ['广西壮族自治区', '广西', 3],
    ['云南省', '云南', 2],
    ['江西省', '江西', 3],
    ['福建省', '福建', 3],
    ['辽宁省', '辽宁', 4],
    ['陕西省', '陕西', 3],
    ['贵州省', '贵州', 3],
    ['山西省', '山西', 3],
    ['重庆市', '重庆', 3],
    ['黑龙江省', '黑龙江', 3],
    ['新疆维吾尔自治区', '新疆', 3],
    ['上海市', '上海', 3],
    ['甘肃省', '甘肃', 3],
    ['内蒙古自治区', '内蒙古', 3],
    ['重庆市', '重庆', 3],
    ['吉林省', '吉林', 2],
    ['北京市', '北京', 3],
    ['天津市', '天津', 3],
    ['海南省', '海南', 3],
    ['香港特别行政区', '香港', 3],
    ['宁夏回族自治区', '宁夏', 3],
    ['青海省', '青海', 3],
    ['西藏自治区', '西藏', 3],
    ['澳门特别行政区', '澳门', 3],
];

const A_TABLE: ReadonlyArray<readonly [string, string, number]> = [
    ['广东省', '广东', 3],
    ['山东省', '山东', 3],
    ['河南省', '河南', 3],
    ['江苏省', '江苏', 3],
    ['四川省', '四川', 3],
    ['河北省', '河北', 3],
    ['浙江省', '浙江', 3],
    ['湖南省', '湖南', 3],
    ['安徽省', '安徽', 3],
    ['湖北省', '湖北', 2],
    ['广西壮族自治区', '广西', 3],
    ['云南省', '云南', 2],
    ['江西省', '江西', 3],
    ['福建省', '福建', 3],
    ['辽宁省', '辽宁', 4],
    ['陕西省', '陕西', 3],
    ['贵州省', '贵州', 3],
    ['山西省', '山西', 3],
    ['重庆市', '重庆', 3],
    ['黑龙江省', '黑龙江', 3],
    ['新疆维吾尔自治区', '新疆', 3],
    ['上海市', '上海', 3],
    ['甘肃省', '甘肃', 3],
    ['内蒙古自治区', '内蒙古', 3],
    ['重庆市', '重庆', 3],
    ['吉林省', '吉林', 2],
    ['北京市', '北京', 3],
    ['天津市', '天津', 3],
    ['海南省', '海南', 3],
    ['香港特别行政区', '香港', 3],
    ['宁夏回族自治区', '宁夏', 3],
    ['青海省', '青海', 3],
    ['西藏自治区', '西藏', 3],
    ['澳门特别行政区', '澳门', 3],
];

const TOTAL_CITIES = 200;

export interface CityProgress {
    /** 当前关在本省内的 1-based 序号（getCityCurProgress）。 */
    cur: number;
    /** 本省总关卡数（getCityTotalProgress）。 */
    total: number;
    /** 距下一省还剩几关（getLvDiffNum）。 */
    diff: number;
    /** 下一省简称（getNextCityName）。 */
    nextSimple: string;
}

export class CityTable {
    private static readonly ALL: ReadonlyArray<readonly [string, string, number]> =
        [...E_TABLE, ...A_TABLE];

    /**
     * 原版 CityConfig.getCurCityName(t)：1-based 序号 t 命中的省份全名；
     * t 对 200 取模（0 视为 200），查不到返回空串。
     */
    public static getCityName(oneBasedIndex: number): string {
        let t = CityTable.normalize(oneBasedIndex);
        for (const entry of CityTable.ALL) {
            if (t <= entry[2]) return entry[0];
            t -= entry[2];
        }
        return '';
    }

    /** 原版胜利层进度组：省内序号/总数/距下一省关数/下一省简称。 */
    public static getProgress(oneBasedIndex: number): CityProgress {
        let t = CityTable.normalize(oneBasedIndex);
        const all = CityTable.ALL;
        for (let i = 0; i < all.length; i += 1) {
            const entry = all[i];
            if (t <= entry[2]) {
                return {
                    cur: t,
                    total: entry[2],
                    diff: entry[2] - t,
                    nextSimple: all[(i + 1) % all.length][1],
                };
            }
            t -= entry[2];
        }
        return { cur: 1, total: 1, diff: 0, nextSimple: all[0][1] };
    }

    private static normalize(oneBasedIndex: number): number {
        let t = oneBasedIndex % TOTAL_CITIES;
        if (t <= 0) t = TOTAL_CITIES;
        return t;
    }
}
