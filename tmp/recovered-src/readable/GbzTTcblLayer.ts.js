(function (t) {
  var inheritsLoose, cclegacy, _decorator, Sprite, color, Button, GbzDataManager, GbzInstance, GbzResManager, ResType, GbzSdkManager, ENUM_UI, GbzBaselayer;
  return function () {
    var b, d;
    return Pu(b = {}, "setters", 0), Pu(b, "execute", 0), (d = b).setters = [function (t) {
      inheritsLoose = t["inheritsLoose"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], Sprite = t["Sprite"], color = t["color"], Button = t["Button"];
    }, function (t) {
      GbzDataManager = t["default"];
    }, function (t) {
      GbzInstance = t["default"];
    }, function (t) {
      GbzResManager = t["default"], ResType = t["ResType"];
    }, function (t) {
      GbzSdkManager = t["default"];
    }, function (t) {
      ENUM_UI = t["ENUM_UI"];
    }, function (t) {
      GbzBaselayer = t["default"];
    }, null], d.execute = function () {
      var b, d, k;
      cclegacy._RF["push"]({}, "15fef17wSlEuaIhCJ1iB0D9", "GbzTTcblLayer", void 0), b = _decorator["ccclass"], _decorator["property"], t("default", b("GbzTTcblLayer")(((k = function (t) {
        var r, i;
        return inheritsLoose(i = function () {
          for (var n, r, a = (n = arguments)["length"], u = new Array(a), s = 0; s < a; s++) u[s] = n[s];
          return (r = t["call"]["apply"](t, [this]["concat"](u)) || this)["btnClose"] = null, r;
        }, t), (r = i["prototype"])["onLoad"] = function () {
          var t;
          t = this["node"].getChildByName("style").getChildByName("panel").getChildByName("bg"), i.btnIn = t.getChildByName("btnIn"), i.img = t.getChildByName("img"), this.btnClose = t.getChildByName("btnClose"), this.btnClose.on("click", this["onClose"], this), i.btnIn.on("click", this["onBtnIn"], this);
        }, r["onEnable"] = function () {
          this["shadow"](this["node"]), GbzDataManager.ins["onGetTTSideBarRwd"] ? (i["img"].getComponent(Sprite)["spriteFrame"] = GbzResManager.ins["getRes"](ResType["Sprite"], "secondary", "已领取"), i.btnIn.opacity = 150, i.btnIn.color = color(0, 0, 0), i.btnIn["off"]("click", this["onBtnIn"], this), i.btnIn.getComponent(Button)["interactable"] = !1) : (i.btnIn.opacity = 255, i.btnIn.color = color(255, 255, 255), GbzSdkManager.ins["onShow"]());
        }, r["start"] = function () {}, r["onBtnIn"] = function () {
          i["isOnShow"] ? (GbzInstance.uiMgr.toggle(ENUM_UI["LAYER_ShowGetRew"], !0), GbzInstance.uiMgr.toggle(ENUM_UI["LAYER_TTCBL"], !1)) : GbzSdkManager["ins"]["navigateToScene"]();
        }, i["changeImg"] = function (t) {
          i["img"]["getComponent"](Sprite)["spriteFrame"] = t ? GbzResManager.ins.getRes(ResType.Sprite, "secondary", "获得奖励") : GbzResManager.ins.getRes(ResType.Sprite, "secondary", "进入侧边栏");
        }, r["onClose"] = function () {
          GbzInstance["uiMgr"]["toggle"](ENUM_UI["LAYER_TTCBL"], !1);
        }, i;
      }(GbzBaselayer))["btnIn"] = null, k["img"] = null, k["isOnShow"] = !1, d = k)) || d), cclegacy._RF["pop"]();
    }, d;
  }["bind"](this)["apply"]();
});