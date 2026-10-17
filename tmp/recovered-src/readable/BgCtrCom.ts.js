(function (t) {
  var applyDecoratedDescriptor, inheritsLoose, initializerDefineProperty, assertThisInitialized, cclegacy, _decorator, SpriteFrame, Sprite, Component, GbzDataManager, AbMgr;
  return function () {
    var v, l;
    return Pu(v = {}, "setters", 0), Pu(v, "execute", 0), (l = v).setters = [function (t) {
      applyDecoratedDescriptor = t["applyDecoratedDescriptor"], inheritsLoose = t["inheritsLoose"], initializerDefineProperty = t["initializerDefineProperty"], assertThisInitialized = t["assertThisInitialized"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], SpriteFrame = t["SpriteFrame"], Sprite = t["Sprite"], Component = t["Component"];
    }, function (t) {
      GbzDataManager = t["default"];
    }, function (t) {
      AbMgr = t["default"];
    }], l.execute = function () {
      var v, l, b, d, k, m, p, g, y, w, _, M, S, A;
      cclegacy._RF["push"]({}, "6ad69nt3wRDApprbpdjggrp", "BgCtrCom", void 0), k = _decorator["ccclass"], d = _decorator["property"], t("BgCtrCom", (m = k("BgCtrCom"), p = d(SpriteFrame), g = d(SpriteFrame), y = d(Sprite), m((M = applyDecoratedDescriptor((_ = function (t) {
        var n;
        return inheritsLoose(n = function () {
          for (var n, r, c = (n = arguments)["length"], f = new Array(c), h = 0; h < c; h++) f[h] = n[h];
          return r = t["call"]["apply"](t, [this]["concat"](f)) || this, initializerDefineProperty(r, "bfSp", M, assertThisInitialized(r)), initializerDefineProperty(r, "bfSp2", S, assertThisInitialized(r)), initializerDefineProperty(r, "bgNode", A, assertThisInitialized(r)), r;
        }, t), n["prototype"]["onEnable"] = function () {
          var t, n;
          n = GbzDataManager["ins"]["game_level"], AbMgr["Ins"]()["isShowNewBg"](), t = Math["floor"](n / 10) % 4, this["bgNode"]["spriteFrame"] = this["bfSp2"][t];
        }, n;
      }(Component)).prototype, "bfSp", [p], (Pu(v = {}, "configurable", !0), Pu(v, "enumerable", !0), Pu(v, "writable", !0), Pu(v, "initializer", function () {
        return [];
      }), v)), S = applyDecoratedDescriptor(_.prototype, "bfSp2", [g], (Pu(l = {}, "configurable", !0), Pu(l, "enumerable", !0), Pu(l, "writable", !0), Pu(l, "initializer", function () {
        return [];
      }), l)), A = applyDecoratedDescriptor(_.prototype, "bgNode", [y], (Pu(b = {}, "configurable", !0), Pu(b, "enumerable", !0), Pu(b, "writable", !0), Pu(b, "initializer", null), b)), w = _)) || w)), cclegacy._RF["pop"]();
    }, l;
  }["bind"](this)["apply"]();
});