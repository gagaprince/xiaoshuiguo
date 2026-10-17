(function (t) {
  var applyDecoratedDescriptor, inheritsLoose, initializerDefineProperty, assertThisInitialized, cclegacy, _decorator, SpriteFrame, Sprite, Component, globalxz, SOUtil;
  return function () {
    var v, l;
    return Pu(v = {}, "setters", 0), Pu(v, "execute", 0), (l = v).setters = [function (t) {
      applyDecoratedDescriptor = t["applyDecoratedDescriptor"], inheritsLoose = t["inheritsLoose"], initializerDefineProperty = t["initializerDefineProperty"], assertThisInitialized = t["assertThisInitialized"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], SpriteFrame = t["SpriteFrame"], Sprite = t["Sprite"], Component = t["Component"];
    }, function (t) {
      globalxz = t["globalxz"];
    }, function (t) {
      SOUtil = t["default"];
    }], l.execute = function () {
      var v, l, b, d, k, m, p, g, y, w, _;
      cclegacy._RF["push"]({}, "11693VhkEJPOrhUFuX9JSB1", "logoCom", void 0), d = _decorator["ccclass"], b = _decorator["property"], t("default", (k = d("LogoCom"), m = b(SpriteFrame), p = b(Sprite), k((w = applyDecoratedDescriptor((y = function (t) {
        var n, a;
        return inheritsLoose(a = function () {
          for (var n, r, c = (n = arguments)["length"], f = new Array(c), h = 0; h < c; h++) f[h] = n[h];
          return r = t["call"].apply(t, [this]["concat"](f)) || this, initializerDefineProperty(r, "logoFrames", w, assertThisInitialized(r)), initializerDefineProperty(r, "icon", _, assertThisInitialized(r)), r["indexs"] = function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "消个水果", 0), Pu(t, "闯关乐消除", 0), Pu(t, "解压水果消", 0), (n = t)["消个水果"] = 0, n["闯关乐消除"] = 0, n["解压水果消"] = 0, n;
            }["apply"]())["消个水果"] = 0, t["闯关乐消除"] = 1, t["解压水果消"] = 2, t;
          }.apply(), r;
        }, t), (n = a["prototype"])["onEnable"] = function () {
          this["onRefreshUI"]();
        }, n["onRefreshUI"] = function () {
          var t, n, r;
          (n = this, t = globalxz["logo"]) && null != (r = this["indexs"][t]) && (this["icon"]["spriteFrame"] = this["logoFrames"][r], this["scheduleOnce"](function () {
            SOUtil["SetSpriteSizeWidth"](n["icon"], 520);
          }));
        }, a;
      }(Component)).prototype, "logoFrames", [m], (Pu(v = {}, "configurable", !0), Pu(v, "enumerable", !0), Pu(v, "writable", !0), Pu(v, "initializer", function () {
        return [];
      }), v)), _ = applyDecoratedDescriptor(y.prototype, "icon", [p], (Pu(l = {}, "configurable", !0), Pu(l, "enumerable", !0), Pu(l, "writable", !0), Pu(l, "initializer", function () {
        return null;
      }), l)), g = y)) || g)), cclegacy._RF["pop"]();
    }, l;
  }["bind"](this)["apply"]();
});