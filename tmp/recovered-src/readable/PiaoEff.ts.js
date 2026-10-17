(function (t) {
  var applyDecoratedDescriptor, inheritsLoose, initializerDefineProperty, assertThisInitialized, cclegacy, _decorator, ParticleSystem2D, SpriteFrame, Component, GbzDataManager;
  return function () {
    var h, v;
    return Pu(h = {}, "setters", 0), Pu(h, "execute", 0), (v = h).setters = [function (t) {
      applyDecoratedDescriptor = t["applyDecoratedDescriptor"], inheritsLoose = t["inheritsLoose"], initializerDefineProperty = t["initializerDefineProperty"], assertThisInitialized = t["assertThisInitialized"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], ParticleSystem2D = t["ParticleSystem2D"], SpriteFrame = t["SpriteFrame"], Component = t["Component"];
    }, function (t) {
      GbzDataManager = t["default"];
    }, null], v.execute = function () {
      var h, v, l, b, d, k, m, p, g, y, w;
      cclegacy._RF["push"]({}, "e450e6NuSBPTbiyX+vYS/8K", "PiaoEff", void 0), l = _decorator["ccclass"], b = _decorator["property"], t("PiaoEff", (d = l("PiaoEff"), k = b(ParticleSystem2D), m = b(SpriteFrame), d((y = applyDecoratedDescriptor((g = function (t) {
        var n;
        return inheritsLoose(n = function () {
          for (var n, r, o = (n = arguments)["length"], c = new Array(o), f = 0; f < o; f++) c[f] = n[f];
          return r = t["call"]["apply"](t, [this]["concat"](c)) || this, initializerDefineProperty(r, "piaoEff", y, assertThisInitialized(r)), initializerDefineProperty(r, "srps", w, assertThisInitialized(r)), r;
        }, t), n["prototype"]["onEnable"] = function () {
          var t, n;
          t = GbzDataManager["ins"]["game_level"], n = Math["floor"](t / 10) % 4, this["piaoEff"]["spriteFrame"] = this["srps"][n];
        }, n;
      }(Component)).prototype, "piaoEff", [k], (Pu(h = {}, "configurable", !0), Pu(h, "enumerable", !0), Pu(h, "writable", !0), Pu(h, "initializer", function () {
        return null;
      }), h)), w = applyDecoratedDescriptor(g.prototype, "srps", [m], (Pu(v = {}, "configurable", !0), Pu(v, "enumerable", !0), Pu(v, "writable", !0), Pu(v, "initializer", function () {
        return [];
      }), v)), p = g)) || p)), cclegacy._RF["pop"]();
    }, v;
  }["bind"](this)["apply"]();
});