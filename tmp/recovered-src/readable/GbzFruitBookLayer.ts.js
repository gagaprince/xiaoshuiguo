(function (t) {
  var applyDecoratedDescriptor, inheritsLoose, initializerDefineProperty, assertThisInitialized, cclegacy, _decorator, find, Label, GbzAudioManager, GbzDataManager, GbzInstance, GridLayerListView, ENUM_CLIP, ENUM_UI, GbzBaselayer, GbzSdkManager;
  return function () {
    var m, p;
    return Pu(m = {}, "setters", 0), Pu(m, "execute", 0), (p = m).setters = [function (t) {
      applyDecoratedDescriptor = t["applyDecoratedDescriptor"], inheritsLoose = t["inheritsLoose"], initializerDefineProperty = t["initializerDefineProperty"], assertThisInitialized = t["assertThisInitialized"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], find = t["find"], Label = t["Label"];
    }, function (t) {
      GbzAudioManager = t["default"];
    }, function (t) {
      GbzDataManager = t["default"];
    }, function (t) {
      GbzInstance = t["default"];
    }, function (t) {
      GridLayerListView = t["default"];
    }, function (t) {
      ENUM_CLIP = t["ENUM_CLIP"], ENUM_UI = t["ENUM_UI"];
    }, function (t) {
      GbzBaselayer = t["default"];
    }, function (t) {
      GbzSdkManager = t["default"];
    }], p.execute = function () {
      var m, p, g, y, w, _, M, S;
      cclegacy._RF["push"]({}, "0c5bbRGoUZPKoZmi32gUXh2", "GbzFruitBookLayer", void 0), g = _decorator["ccclass"], p = _decorator["property"], t("default", (y = g("GbzFruitBookLayer"), w = p(GridLayerListView), y((S = applyDecoratedDescriptor((M = function (t) {
        var n, a;
        return inheritsLoose(a = function () {
          for (var n, r, l = (n = arguments)["length"], b = new Array(l), d = 0; d < l; d++) b[d] = n[d];
          return r = t["call"]["apply"](t, [this]["concat"](b)) || this, initializerDefineProperty(r, "list", S, assertThisInitialized(r)), r["once"] = !0, r["lastPaintIndex"] = 0, r["panel"] = null, r["content"] = null, r["btnBgshade"] = void 0, r["curLevel"] = 0, r["lastLevel"] = 0, r["btn_Close"] = null, r["allNum"] = 175, r["levelLable"] = null, r["allLable"] = null, r["targetNode"] = void 0, r;
        }, t), (n = a["prototype"])["onLoad"] = function () {
          var t;
          this.panel = find("style/panel", this.node), this.list = this.panel.getChildByName("list").getComponent(GridLayerListView), t = this.panel.getChildByName("layoutPro"), this["levelLable"] = t.getChildByName("level").getComponent(Label), this.allLable = t.getChildByName("allLable").getComponent(Label), this.panel.getChildByName("viewPort"), this.btn_Close = this.panel.getChildByName("btn_Close"), this.btnBgshade = this.node.getChildByName("btnBgshade"), this.btnBgshade.on("click", this.onClose, this), this.btn_Close.on("click", this.onClose, this);
        }, n["onEnable"] = function () {
          var t;
          GbzSdkManager.ins["hideGameClubButton"](), this.curLevel = GbzDataManager.ins["game_level"], (t = this.curLevel - 1) >= 175 && (t = 175), this["levelLable"].string = t["toString"](), this["allLable"].string = Et + this["allNum"];
        }, n["onDisable"] = function () {
          GbzDataManager.ins.fruitBookLastLevel = GbzDataManager.ins.game_level, GbzDataManager.ins["store"](), this["targetNode"]["active"] = GbzDataManager.ins.fruitBookLastLevel < GbzDataManager.ins.game_level;
        }, n["onClose"] = function () {
          GbzAudioManager.ins["play"](ENUM_CLIP["GAME_CLICK"]), GbzInstance["uiMgr"]["toggle"](ENUM_UI["FruitBookLayer"], !1), GbzSdkManager.ins["showGameClubButton"]();
        }, n["show"] = function (n) {
          if (t["prototype"]["show"]["call"](this, n), this["targetNode"] = n, this["node"]["active"] = !0, this.once) {
            this.once = !1;
            for (var h = [], v = 0; v < this.allNum; v++) h.push(v);
            this.list["setDataList"](h), this.list.reset(h.length, h);
          } else {
            for (var l = [], b = 0; b < this.allNum; b++) l.push(b);
            this.list.reset(l.length, l);
          }
        }, n["onDestroy"] = function () {
          this["btn_Close"].off("click", this.onClose, this), this["btnBgshade"].off("click", this.onClose, this);
        }, n["update"] = function (t) {}, a;
      }(GbzBaselayer))["prototype"], "list", [w], (Pu(m = {}, "configurable", !0), Pu(m, "enumerable", !0), Pu(m, "writable", !0), Pu(m, "initializer", function () {
        return null;
      }), m)), _ = M)) || _)), cclegacy._RF["pop"]();
    }, p;
  }["bind"](this)["apply"]();
});