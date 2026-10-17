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
    }], d.execute = function () {
      var b, d, k;
      cclegacy._RF["push"]({}, "e4a90zCL7NLYL5+0IubBWYJ", "GbzTTRequestLayer", void 0), b = _decorator["ccclass"], _decorator["property"], t("default", b("GbzTTRequestLayer")(((k = function (t) {
        var r, i;
        return inheritsLoose(i = function () {
          for (var n, r, u = (n = arguments)["length"], s = new Array(u), o = 0; o < u; o++) s[o] = n[o];
          return (r = t["call"]["apply"](t, [this]["concat"](s)) || this)["btnClose"] = null, r["btnIn"] = null, r["img"] = null, r;
        }, t), (r = i["prototype"])["onLoad"] = function () {
          var t;
          t = this["node"].getChildByName("style").getChildByName("panel").getChildByName("bg"), this.btnIn = t.getChildByName("btnIn"), this.img = t.getChildByName("img"), this.btnClose = t.getChildByName("btnClose"), this.btnClose.on("click", this["onClose"], this), this.btnIn.on("click", this["onBtnIn"], this);
        }, r["onEnable"] = function () {
          this["shadow"](this["node"]), GbzDataManager.ins["onGetTTRequestcutRwd"] ? (this.img.getComponent(Sprite).spriteFrame = GbzResManager.ins.getRes(ResType.Sprite, "secondary", "已领取"), this.btnIn.opacity = 150, this.btnIn.color = color(0, 0, 0), this.btnIn["off"]("click", this["onBtnIn"], this), this.btnIn.getComponent(Button)["interactable"] = !1) : (this.img.getComponent(Sprite).spriteFrame = GbzResManager.ins.getRes(ResType.Sprite, "secondary", "去订阅"), GbzSdkManager.ins["ttcheckFeedSubscribeStatus"](this.img), this.btnIn.opacity = 255, this.btnIn.color = color(255, 255, 255));
        }, r["start"] = function () {}, r["onBtnIn"] = function () {
          i["isOnRequest"] ? (GbzInstance.uiMgr.toggle(ENUM_UI["LAYER_ShowGetRew"], !0), GbzInstance.uiMgr.toggle(ENUM_UI["LAYER_REQUEST"], !1)) : GbzSdkManager["ins"]["ttrequestFeedSubscribe"](this["img"]);
        }, r["onClose"] = function () {
          GbzInstance["uiMgr"]["toggle"](ENUM_UI["LAYER_REQUEST"], !1);
        }, i;
      }(GbzBaselayer))["isOnRequest"] = !1, d = k)) || d), cclegacy._RF["pop"]();
    }, d;
  }["bind"](this)["apply"]();
});