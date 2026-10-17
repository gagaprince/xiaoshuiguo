(function (t) {
  var inheritsLoose, cclegacy, _decorator, find, UIOpacity, tween, math, GbzAudioManager, GbzDataManager, GbzInstance, GbzPoolManager, ENUM_CLIP, ENUM_UI, GbzBaselayer, GbzTTAddtableLayer, GbzTTcblLayer, GbzTTRequestLayer;
  return function () {
    var p, g;
    return Pu(p = {}, "setters", 0), Pu(p, "execute", 0), (g = p).setters = [function (t) {
      inheritsLoose = t["inheritsLoose"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], find = t["find"], UIOpacity = t["UIOpacity"], tween = t["tween"], math = t["math"];
    }, function (t) {
      GbzAudioManager = t["default"];
    }, function (t) {
      GbzDataManager = t["default"];
    }, function (t) {
      GbzInstance = t["default"];
    }, function (t) {
      GbzPoolManager = t["default"];
    }, function (t) {
      ENUM_CLIP = t["ENUM_CLIP"], ENUM_UI = t["ENUM_UI"];
    }, function (t) {
      GbzBaselayer = t["default"];
    }, function (t) {
      GbzTTAddtableLayer = t["default"];
    }, function (t) {
      GbzTTcblLayer = t["default"];
    }, function (t) {
      GbzTTRequestLayer = t["default"];
    }, null], g.execute = function () {
      var p, g;
      cclegacy._RF["push"]({}, "86443jbBh1HRrRCVgHLxLg+", "GbzGetRewLayer", void 0), p = _decorator["ccclass"], _decorator["property"], t("default", p("GbzGetRewLayer")(g = function (t) {
        var r, i;
        return inheritsLoose(i = function () {
          for (var n, r, u = (n = arguments)["length"], s = new Array(u), o = 0; o < u; o++) s[o] = n[o];
          return (r = t["call"]["apply"](t, [this]["concat"](s)) || this)["panel"] = null, r["btn_get"] = null, r;
        }, t), (r = i["prototype"])["onLoad"] = function () {
          this.panel = find("style/panel", this["node"]), this.btn_get = find("btn_get", this.panel), this.btn_get["on"]("click", this["onGet"], this);
        }, r["onEnable"] = function () {
          this["shadow"](this["panel"]);
        }, r["onDestroy"] = function () {
          this["btn_get"]["off"]("click", this["onGet"], this);
        }, r["onGet"] = function () {
          var t, n;
          GbzAudioManager.ins["play"](ENUM_CLIP["GAME_CLICK"]), GbzInstance.uiMgr["toggle"](ENUM_UI["LAYER_ShowGetRew"], !1), GbzTTAddtableLayer["isOnAdd"] && !GbzDataManager.ins.onGetTTShortcutRwd && (GbzDataManager.ins.onGetTTShortcutRwd = !0, GbzDataManager.ins.addProp(0, 2)), GbzTTcblLayer["isOnShow"] && !GbzDataManager.ins.onGetTTSideBarRwd && (GbzDataManager.ins.onGetTTSideBarRwd = !0, GbzDataManager.ins.addProp(0, 2)), GbzTTRequestLayer["isOnRequest"] && !GbzDataManager.ins.onGetTTRequestcutRwd && (GbzDataManager.ins.onGetTTRequestcutRwd = !0, GbzDataManager.ins.addProp(0, 2)), (n = GbzPoolManager.ins["getNode"]("getItemTip"))["parent"] = GbzInstance.uiMgr["getLayer"](ENUM_UI["LAYER_MENU"])["node"], t = n["getComponent"](UIOpacity) || n["addComponent"](UIOpacity), n["setPosition"](0, 0), tween(n)["parallel"](tween(n).to(1, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "position", 0)).position = 0, t;
            }["apply"]())["position"] = new math["Vec3"](0, n.y + 100, 0), t;
          }.apply()), tween(t).to(1, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "opacity", 0)).opacity = 0, t;
            }["apply"]())["opacity"] = 100, t;
          }.apply()))["call"](function () {
            n["destroy"]();
          })["start"]();
        }, i;
      }(GbzBaselayer)) || g), cclegacy._RF["pop"]();
    }, g;
  }["bind"](this)["apply"]();
});