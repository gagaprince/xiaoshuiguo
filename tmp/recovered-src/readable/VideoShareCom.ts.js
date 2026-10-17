(function (t) {
  var applyDecoratedDescriptor, inheritsLoose, initializerDefineProperty, assertThisInitialized, cclegacy, _decorator, Sprite, Component, gameMsg, GbzDataManager, SOUtil;
  return function () {
    var v, l;
    return Pu(v = {}, "setters", 0), Pu(v, "execute", 0), (l = v).setters = [function (t) {
      applyDecoratedDescriptor = t["applyDecoratedDescriptor"], inheritsLoose = t["inheritsLoose"], initializerDefineProperty = t["initializerDefineProperty"], assertThisInitialized = t["assertThisInitialized"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], Sprite = t["Sprite"], Component = t["Component"];
    }, function (t) {
      gameMsg = t["gameMsg"];
    }, function (t) {
      GbzDataManager = t["default"];
    }, function (t) {
      SOUtil = t["default"];
    }], l.execute = function () {
      var v, l, b, d, k, m, p, g, y, w, _;
      cclegacy._RF["push"]({}, "f5322BTOHxO4pccMz2DMzcP", "VideoShareCom", void 0), b = _decorator["ccclass"], d = _decorator["property"], t("default", (k = b("VideoShareCom"), m = d(Sprite), p = d(Number), k((w = applyDecoratedDescriptor((y = function (t) {
        var n, a;
        return inheritsLoose(a = function () {
          for (var n, r, o = (n = arguments)["length"], c = new Array(o), f = 0; f < o; f++) c[f] = n[f];
          return r = t["call"]["apply"](t, [this]["concat"](c)) || this, initializerDefineProperty(r, "icon", w, assertThisInitialized(r)), initializerDefineProperty(r, "sp_width", _, assertThisInitialized(r)), r;
        }, t), (n = a["prototype"])["onEnable"] = function () {
          SOUtil["on"](gameMsg["shareClick"], this.onRefreshUI, this), this.onRefreshUI();
        }, n["onDisable"] = function () {
          SOUtil["off"](gameMsg["shareClick"], this["onRefreshUI"], this);
        }, n["onRefreshUI"] = function () {
          GbzDataManager["ins"]["setVideoImgSprite"](this["icon"], this["sp_width"]);
        }, a;
      }(Component)).prototype, "icon", [m], (Pu(v = {}, "configurable", !0), Pu(v, "enumerable", !0), Pu(v, "writable", !0), Pu(v, "initializer", function () {
        return null;
      }), v)), _ = applyDecoratedDescriptor(y.prototype, "sp_width", [p], (Pu(l = {}, "configurable", !0), Pu(l, "enumerable", !0), Pu(l, "writable", !0), Pu(l, "initializer", function () {
        return -1;
      }), l)), g = y)) || g)), cclegacy._RF["pop"]();
    }, l;
  }["bind"](this)["apply"]();
});