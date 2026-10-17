(function (t) {
  var inheritsLoose, cclegacy, _decorator, find, gameMsg, GbzAudioManager, GbzDataManager, GbzInstance, GbzSdkManager, SOUtil, ENUM_CLIP, ENUM_UI, GbzBaselayer;
  return function () {
    var b, d;
    return Pu(b = {}, "setters", 0), Pu(b, "execute", 0), (d = b).setters = [function (t) {
      inheritsLoose = t["inheritsLoose"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], find = t["find"];
    }, function (t) {
      gameMsg = t["gameMsg"];
    }, function (t) {
      GbzAudioManager = t["default"];
    }, function (t) {
      GbzDataManager = t["default"];
    }, function (t) {
      GbzInstance = t["default"];
    }, function (t) {
      GbzSdkManager = t["default"];
    }, function (t) {
      SOUtil = t["default"];
    }, function (t) {
      ENUM_CLIP = t["ENUM_CLIP"], ENUM_UI = t["ENUM_UI"];
    }, function (t) {
      GbzBaselayer = t["default"];
    }], d.execute = function () {
      var b, d;
      cclegacy._RF["push"]({}, "e03cc5PeeZMUav4h4jw9/Zo", "GbzSettingLayer", void 0), b = _decorator["ccclass"], _decorator["property"], t("default", b("GbzSettingLayer")(d = function (t) {
        var r, i;
        return inheritsLoose(i = function () {
          for (var n, r, o = (n = arguments)["length"], c = new Array(o), f = 0; f < o; f++) c[f] = n[f];
          return (r = t["call"]["apply"](t, [this]["concat"](c)) || this)["panel"] = null, r["btn_music"] = null, r["btn_sound"] = null, r["btn_vibrate"] = null, r["btn_close"] = null, r["btn_zhuxiao"] = null, r;
        }, t), (r = i["prototype"])["onLoad"] = function () {
          this.panel = find("style/panel", this.node), this.btn_music = find("buttons/btn_music", this.panel), this.btn_music.on("click", this["onMusic"], this), this.btn_sound = find("buttons/btn_sound", this.panel), this.btn_sound.on("click", this["onSound"], this), this.btn_vibrate = find("buttons/btn_vibrate", this.panel), this.btn_vibrate.on("click", this["onVibrate"], this), this.btn_close = find("btn_close", this.panel), this.btn_close.on("click", this.onClose, this), this.btn_zhuxiao = find("buttons/btn_zhuxiao", this.panel), this.btn_zhuxiao.on("click", this["onZhuxiao"], this), find("bgshade", this.node).on("click", this.onClose, this);
        }, r["onDestroy"] = function () {
          this["btn_music"].off("click", this["onMusic"], this), this["btn_sound"].off("click", this["onSound"], this), this["btn_close"].off("click", this.onClose, this), find("bgshade", this["node"]).off("click", this.onClose, this);
        }, r["onEnable"] = function () {
          this["rendor"](), GbzSdkManager.ins["showInter"](), GbzSdkManager.ins["hideGameClubButton"]();
        }, r["onDisable"] = function () {
          GbzSdkManager["ins"]["showGameClubButton"](), SOUtil["emit"](gameMsg["backInHome"]);
        }, r["rendor"] = function () {
          this.btn_music.getChildByName("on").active = GbzDataManager.ins.game_music, this.btn_music.getChildByName("off").active = !GbzDataManager.ins.game_music, this.btn_sound.getChildByName("on").active = GbzDataManager.ins.game_sound, this.btn_sound.getChildByName("off").active = !GbzDataManager.ins.game_sound, this.btn_vibrate.getChildByName("on").active = GbzDataManager.ins.game_vibrate, this.btn_vibrate.getChildByName("off").active = !GbzDataManager.ins.game_vibrate;
        }, r["onClose"] = function () {
          GbzAudioManager["ins"]["play"](ENUM_CLIP["GAME_CLICK"]), GbzInstance.uiMgr.toggle(ENUM_UI["LAYER_SETTING"], !1), GbzInstance.uiMgr.toggle(ENUM_UI["LAYER_MENU"]);
        }, r["onSound"] = function () {
          GbzAudioManager.ins["play"](ENUM_CLIP["GAME_CLICK"]), GbzDataManager.ins.game_sound = !GbzDataManager.ins.game_sound, GbzDataManager.ins["store"](), this["rendor"]();
        }, r["onVibrate"] = function () {
          GbzAudioManager.ins["play"](ENUM_CLIP["GAME_CLICK"]), GbzDataManager.ins.game_vibrate = !GbzDataManager.ins.game_vibrate, GbzDataManager.ins["store"](), this["rendor"]();
        }, r["onMusic"] = function () {
          GbzAudioManager.ins["play"](ENUM_CLIP["GAME_CLICK"]), GbzDataManager.ins.game_music = !GbzDataManager.ins.game_music, GbzDataManager.ins["store"](), GbzDataManager.ins.game_music ? GbzInstance["uiMgr"]["hasActive"](ENUM_UI["LAYER_MAIN"]) ? GbzAudioManager.ins.playBGM(ENUM_CLIP["GAME_PLAYBGM"]) : GbzAudioManager.ins.playBGM(ENUM_CLIP["GAME_BGM"]) : GbzAudioManager.ins["stopBGM"](), this["rendor"]();
        }, r["onZhuxiao"] = function () {
          GbzAudioManager.ins["play"](ENUM_CLIP["GAME_CLICK"]), GbzInstance.uiMgr.toggle(ENUM_UI["LAYER_SETTING"], !1), GbzInstance.uiMgr.toggle(ENUM_UI["LAYER_MENU"]), GbzSdkManager.ins["platform"]()["platformNotAgree"]();
        }, r["onShowYinsi"] = function () {
          GbzAudioManager["ins"]["play"](ENUM_CLIP["GAME_CLICK"]);
        }, i;
      }(GbzBaselayer)) || d), cclegacy._RF["pop"]();
    }, d;
  }["bind"](this)["apply"]();
});