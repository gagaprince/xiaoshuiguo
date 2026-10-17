(function (t) {
  var applyDecoratedDescriptor, inheritsLoose, initializerDefineProperty, assertThisInitialized, cclegacy, _decorator, Prefab, CCInteger, Component;
  return function () {
    var f, h;
    return Pu(f = {}, "setters", 0), Pu(f, "execute", 0), (h = f).setters = [function (t) {
      applyDecoratedDescriptor = t["applyDecoratedDescriptor"], inheritsLoose = t["inheritsLoose"], initializerDefineProperty = t["initializerDefineProperty"], assertThisInitialized = t["assertThisInitialized"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], Prefab = t["Prefab"], CCInteger = t["CCInteger"], Component = t["Component"];
    }], h.execute = function () {
      var f, h, v, l, b, d, k, m, p, g, y, w, _, M, S;
      cclegacy._RF["push"]({}, "5a1307lnl5GiY1U+r4sHG9t", "GameCreatJS", void 0), l = _decorator["ccclass"], b = _decorator["property"], t("default", (d = l("GameCreatJS"), k = b(Prefab), m = b(CCInteger), p = b(CCInteger), d(((S = function (t) {
        var n, a;
        return inheritsLoose(a = function () {
          for (var n, r, f = (n = arguments)["length"], h = new Array(f), v = 0; v < f; v++) h[v] = n[v];
          return (r = t["call"]["apply"](t, [this]["concat"](h)) || this)["dragFruit"] = null, r["editorRoot"] = null, r["btnPlay"] = null, r["btnLoad"] = null, r["btnSet"] = null, initializerDefineProperty(r, "fruitPrefab", w, assertThisInitialized(r)), initializerDefineProperty(r, "levelCount", _, assertThisInitialized(r)), initializerDefineProperty(r, "arrangeType", M, assertThisInitialized(r)), r["dragFruitNode"] = null, r["delete"] = null, r;
        }, t), (n = a["prototype"])["onLoad"] = function () {}, n["moveEditor"] = function (t) {}, n["creatFruit"] = function (t) {}, n["stop"] = function () {}, a["labfun"] = function (t) {}, n["loadJson"] = function () {}, n["getFruit"] = function (t, n) {}, n["exportFile"] = function (t, n) {}, n["saveJS"] = function () {}, n["playTest"] = function () {}, a;
      }(Component))["labFruit"] = null, w = applyDecoratedDescriptor((y = S).prototype, "fruitPrefab", [k], (Pu(f = {}, "configurable", !0), Pu(f, "enumerable", !0), Pu(f, "writable", !0), Pu(f, "initializer", function () {
        return [];
      }), f)), _ = applyDecoratedDescriptor(y.prototype, "levelCount", [m], (Pu(h = {}, "configurable", !0), Pu(h, "enumerable", !0), Pu(h, "writable", !0), Pu(h, "initializer", function () {
        return 1;
      }), h)), M = applyDecoratedDescriptor(y.prototype, "arrangeType", [p], (Pu(v = {}, "configurable", !0), Pu(v, "enumerable", !0), Pu(v, "writable", !0), Pu(v, "initializer", function () {
        return 1;
      }), v)), g = y)) || g)), cclegacy._RF["pop"]();
    }, h;
  }["bind"](this)["apply"]();
});