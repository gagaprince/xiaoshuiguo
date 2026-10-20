export const RANK_HEAD_ICON_UUID: Readonly<Record<string, string>> = Object.freeze({
    "西瓜": "0f8f8520-df86-4755-aee0-49a4491dee3f@f9941",
    "火龙果": "b99e45af-5d34-4910-ae6f-c04b0dda29f0@f9941",
    "包菜": "c162744a-5c50-4ba0-81db-7f98910cf028@f9941",
    "葡萄": "2e065fcf-d42b-495a-a465-c447dd3f424c@f9941",
    "桃子": "b8fa1d3b-cc53-487d-8e00-94b456eb3a13@f9941",
    "香蕉": "37bb25af-ded6-453d-9292-a003377100cd@f9941",
    "西红柿": "d103637c-87be-444f-90a9-10e7084d1973@f9941",
    "车厘子": "a56a3941-12d9-4d71-90fa-5ddf570e029c@f9941",
    "草莓": "b240d402-503e-4953-9c79-095ebb23635b@f9941",
    "柠檬": "28e84532-7bb0-49aa-8de4-6a4f8fb411b1@f9941",
    "石榴": "821439c0-ff20-4688-ba43-e6a62ea1cd38@f9941",
    "蓝莓": "efbedac3-2ba0-4c4e-b2e2-e2daa75ad782@f9941",
    "榴莲": "31fe3d24-643c-4cf1-bdc2-dd80f6bf85e0@f9941",
    "桂圆": "412a63a3-65a8-4664-b1c8-e05a43b0ba08@f9941",
    "柿子": "cda3ab98-53c8-4c54-999f-8168db3588c4@f9941",
    "茄子": "34c939fe-d1d3-4b0e-9f36-5ab772271656@f9941",
    "芒果": "76be71b0-d12f-4db5-839a-645e7e5a8d27@f9941",
    "树莓": "6e9f6b0c-b317-40c7-a23c-74f84679cbaf@f9941",
    "橘子": "1bfa22b7-0f2f-4137-8d6a-d97d5fbf4d19@f9941",
    "冬枣": "bc53ed13-afa5-4408-bd6d-3b755992ff85@f9941",
    "杨梅": "b0f3f6ae-b28b-4db1-9e21-b27975d01db2@f9941",
    "红甘蓝": "f7783fce-f693-4da4-9015-a0256081983f@f9941",
    "花菜": "f366f771-ad32-4d39-b1f5-47a11f86086c@f9941",
    "山竹": "e3d6782b-4c69-44f3-8558-f4dffd5356ec@f9941",
    "人参果": "d4f47a61-40cd-44f3-b3c0-e14bed77f36d@f9941",
    "椰子": "4db068cf-c326-4ff8-bf36-7e2050d5886a@f9941",
    "哈密瓜": "2eb80340-1915-4cb0-88bf-814b70190894@f9941",
    "贝贝南瓜": "d89e859a-4cf4-4bbc-8757-01b104a23058@f9941",
});

/** 世界榜头像名 -> SpriteFrame UUID（fruits/水果图标）。 */
export class RankHeadIcons {
    public static uuid(name: string): string | null {
        return RANK_HEAD_ICON_UUID[name] || null;
    }
}
