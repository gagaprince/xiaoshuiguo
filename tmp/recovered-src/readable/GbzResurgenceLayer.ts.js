(function (t) {
  var inheritsLoose, cclegacy, _decorator, find, Label, GbzAudioManager, GbzDataManager, GbzInstance, GbzSdkManager, reporter, GameMgr, ENUM_UI, ENUM_CLIP, ENUM_GAME_STATE, ENUM_STATUS, GbzBaselayer;
  return function () {
    var m, p;
    return Pu(m = {}, "setters", 0), Pu(m, "execute", 0), (p = m).setters = [function (t) {
      inheritsLoose = t["inheritsLoose"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], find = t["find"], Label = t["Label"];
    }, function (t) {
      GbzAudioManager = t["default"];
    }, function (t) {
      GbzDataManager = t["default"];
    }, function (t) {
      GbzInstance = t["default"];
    }, function (t) {
      GbzSdkManager = t["default"];
    }, function (t) {
      reporter = t["reporter"];
    }, function (t) {
      GameMgr = t["default"];
    }, function (t) {
      ENUM_UI = t["ENUM_UI"], ENUM_CLIP = t["ENUM_CLIP"], ENUM_GAME_STATE = t["ENUM_GAME_STATE"], ENUM_STATUS = t["ENUM_STATUS"];
    }, function (t) {
      GbzBaselayer = t["default"];
    }], p.execute = function () {
      var m, p;
      cclegacy._RF["push"]({}, "4ff01AYmhNCV5aw24pCz3Q8", "GbzResurgenceLayer", void 0), m = _decorator["ccclass"], _decorator["property"], t("GbzResurgenceLayer", m("GbzResurgenceLayer")(p = function (t) {
        var r, i;
        return inheritsLoose(i = function () {
          for (var n, r, u = (n = arguments)["length"], s = new Array(u), o = 0; o < u; o++) s[o] = n[o];
          return (r = t["call"]["apply"](t, [this]["concat"](s)) || this)["panel"] = null, r["btn_relive"] = null, r["btn_close"] = null, r["labNum"] = void 0, r;
        }, t), (r = i["prototype"])["onLoad"] = function () {
          var t;
          this.panel = find("style/panel", this["node"]), t = this.panel.getChildByName("Bg"), this.btn_relive = t.getChildByName("btn_relive"), this.btn_relive.on("click", this["onRelive"], this), find("btn_close", t).on("click", this["onClose"], this), this.labNum = t.getChildByName("labInfos").getChildByName("labNum")["getComponent"](Label);
        }, r["onClose"] = function () {
          GameMgr["instance"]["reliveCount"] = 0, GbzInstance.uiMgr.toggle(ENUM_UI["LAYER_LOSE_FULL"], !0), GbzInstance.uiMgr.toggle(ENUM_UI["GbzResurgenceLayer"], !1);
        }, r["onEnable"] = function () {
          this["labNum"]["string"] = GameMgr["instance"]["fruitRemnantNum"]["toString"]();
        }, r["update"] = function (t) {}, r["onRelive"] = function () {
          GbzAudioManager.ins["play"](ENUM_CLIP["GAME_CLICK"]), 1 === GbzSdkManager.ins.VideoType() ? GbzSdkManager.ins["showVideo"](function () {
            GbzInstance["gameMgr"]["gameState"] != ENUM_GAME_STATE["isHome"] && (reporter["reportAdRwd"]("复活"), GbzInstance["uiMgr"]["toggle"](ENUM_UI["GbzResurgenceLayer"], !1), GameMgr.instance["reliveCount"]--, GameMgr.instance["reviveFun"]());
          }, function (t) {}, "复活", this) : 2 === GbzSdkManager.ins.VideoType() && (GbzInstance["uiMgr"]["toggle"](ENUM_UI["GbzResurgenceLayer"], !1), this["scheduleOnce"](function () {
            GbzDataManager["ins"]["status"] = ENUM_STATUS["RUN"];
          }, .1), GameMgr["instance"]["reviveFun"]());
        }, i;
      }(GbzBaselayer)) || p), cclegacy._RF["pop"]();
    }, p;
  }["bind"](this)["apply"]();
});