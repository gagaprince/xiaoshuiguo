(function (t) {
  var inheritsLoose, asyncToGenerator, cclegacy, _decorator, find, GbzAudioManager, GbzDataManager, GbzInstance, GbzSdkManager, reporter, GameMgr, ENUM_CLIP, ENUM_STATUS, ENUM_UI, GbzBaselayer, WxIAAMgr;
  return function () {
    var m, p;
    return Pu(m = {}, "setters", 0), Pu(m, "execute", 0), (p = m).setters = [function (t) {
      inheritsLoose = t["inheritsLoose"], asyncToGenerator = t["asyncToGenerator"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], find = t["find"];
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
      ENUM_CLIP = t["ENUM_CLIP"], ENUM_STATUS = t["ENUM_STATUS"], ENUM_UI = t["ENUM_UI"];
    }, function (t) {
      GbzBaselayer = t["default"];
    }, function (t) {
      WxIAAMgr = t["default"];
    }], p.execute = function () {
      var m, p;
      cclegacy._RF["push"]({}, "0253cfZpsZMxrm9b6MPXhSY", "GbzExitLayer", void 0), m = _decorator["ccclass"], _decorator["property"], t("default", m("GbzExitLayer")(p = function (t) {
        var i, e;
        return inheritsLoose(e = function () {
          for (var n, r, s = (n = arguments)["length"], o = new Array(s), c = 0; c < s; c++) o[c] = n[c];
          return (r = t["call"]["apply"](t, [this]["concat"](o)) || this)["panel"] = null, r["btn_submit"] = null, r["btn_music"] = null, r["btn_sound"] = null, r["btn_vibrate"] = null, r["btn_close"] = null, r["btn_share"] = null, r;
        }, t), (i = e["prototype"])["onLoad"] = function () {
          this.panel = find("style/panel", this.node), this.btn_submit = find("buttons2/btn_submit", this.panel), this.btn_submit.on("click", this["onSubmit"], this), this.btn_music = find("buttons/btn_music", this.panel), this.btn_music.on("click", this["onMusic"], this), this.btn_sound = find("buttons/btn_sound", this.panel), this.btn_sound.on("click", this["onSound"], this), this.btn_vibrate = find("buttons/btn_vibrate", this.panel), this.btn_vibrate.on("click", this["onVibrate"], this), this.btn_close = find("btn_close", this.panel), this.btn_close.on("click", this.onClose, this), find("bgshade", this.node).on("click", this.onClose, this);
        }, i["onDestroy"] = function () {
          this["btn_submit"].off("click", this["onSubmit"], this), this["btn_close"].off("click", this.onClose, this), this["btn_share"].off("click", this["onShare"], this), find("bgshade", this["node"]).off("click", this.onClose, this);
        }, i["onEnable"] = function () {
          this["shadow"](this["panel"]), this["rendor"](), GameMgr["instance"]["stopGame"]();
        }, i["onDisable"] = function () {
          GameMgr["instance"]["resumGame"]();
        }, i["rendor"] = function () {
          this.btn_music.getChildByName("on").active = GbzDataManager.ins.game_music, this.btn_music.getChildByName("off").active = !GbzDataManager.ins.game_music, this.btn_sound.getChildByName("on").active = GbzDataManager.ins.game_sound, this.btn_sound.getChildByName("off").active = !GbzDataManager.ins.game_sound, this.btn_vibrate.getChildByName("on").active = GbzDataManager.ins.game_vibrate, this.btn_vibrate.getChildByName("off").active = !GbzDataManager.ins.game_vibrate;
        }, i["onSubmit"] = function () {
          var t;
          t = Math["floor"](100 * GameMgr.instance["fillImg"]["fillRange"]), WxIAAMgr["inst"]["Level_Exit"](GbzDataManager.ins["fakeGame_level"], GameMgr.instance["getPr"]()), reporter["reportGameLose"](t), GbzAudioManager.ins["play"](ENUM_CLIP["GAME_CLICK"]), GbzDataManager.ins["status"] = ENUM_STATUS["UNRUN"], GbzInstance.uiMgr.toggle(ENUM_UI["LAYER_MAIN"], !1), GbzInstance.uiMgr.toggle(ENUM_UI["LAYER_EXIT"], !1), GbzInstance.uiMgr.toggle(ENUM_UI["LAYER_MENU"]);
        }, i["onClose"] = function () {
          GbzAudioManager["ins"]["play"](ENUM_CLIP["GAME_CLICK"]), GbzInstance["uiMgr"]["toggle"](ENUM_UI["LAYER_EXIT"], !1);
        }, i["onShare"] = function () {
          GbzAudioManager.ins["play"](ENUM_CLIP["GAME_CLICK"]), GbzSdkManager.ins["platform"]() && GbzSdkManager.ins["activeShare"]();
        }, i["onSound"] = function () {
          GbzAudioManager.ins["play"](ENUM_CLIP["GAME_CLICK"]), GbzDataManager.ins.game_sound = !GbzDataManager.ins.game_sound, GbzDataManager.ins["store"](), this["rendor"]();
        }, i["onVibrate"] = function () {
          GbzAudioManager.ins["play"](ENUM_CLIP["GAME_CLICK"]), GbzDataManager.ins.game_vibrate = !GbzDataManager.ins.game_vibrate, GbzDataManager.ins["store"](), this["rendor"]();
        }, i["onMusic"] = function () {
          GbzAudioManager.ins["play"](ENUM_CLIP["GAME_CLICK"]), GbzDataManager.ins.game_music = !GbzDataManager.ins.game_music, GbzDataManager.ins["store"](), GbzDataManager.ins.game_music ? GbzInstance["uiMgr"]["hasActive"](ENUM_UI["LAYER_MAIN"]) ? GbzAudioManager.ins.playBGM(ENUM_CLIP["GAME_PLAYBGM"]) : GbzAudioManager.ins.playBGM(ENUM_CLIP["GAME_BGM"]) : GbzAudioManager.ins["stopBGM"](), this["rendor"]();
        }, i["onRestart"] = function () {
          var t;
          return t = asyncToGenerator(Nu().mark(function t() {
            var n, r, i, e, a, c, l, d, m;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return r = (n = to)[2], i = n[8], e = n[3], a = n[5], c = n[12], l = n[1][0], d = n[6][0], GbzAudioManager[l][r[10]](ENUM_CLIP[i[6]]), m = Math[e[3]](100 * GameMgr[d][a[27]][n[7][47]]), reporter[c[43]](m), GbzInstance[e[8]][n[4][11]](ENUM_UI[i[57]], !1), t.next = 7, GbzInstance[a[64]][n[0][28]]();
                case 7:
                  GbzInstance[a[6]][a[173]](), WxIAAMgr[r[4]][i[120]](GbzDataManager[l][c[1]], GameMgr[d][e[94]]());
                case 9:
                case "end":
                  return t.stop();
              }
            }, t);
          })), function () {
            var n;
            return n = arguments, t["apply"](this, n);
          };
        }(), e;
      }(GbzBaselayer)) || p), cclegacy._RF["pop"]();
    }, p;
  }["bind"](this)["apply"]();
});