(function (t) {
  var applyDecoratedDescriptor, inheritsLoose, initializerDefineProperty, assertThisInitialized, cclegacy, _decorator, Node, math, tween, Component, GbzPoolManager, ReferenceMgr;
  return function () {
    var l, b;
    return Pu(l = {}, "setters", 0), Pu(l, "execute", 0), (b = l).setters = [function (t) {
      applyDecoratedDescriptor = t["applyDecoratedDescriptor"], inheritsLoose = t["inheritsLoose"], initializerDefineProperty = t["initializerDefineProperty"], assertThisInitialized = t["assertThisInitialized"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], Node = t["Node"], math = t["math"], tween = t["tween"], Component = t["Component"];
    }, function (t) {
      GbzPoolManager = t["default"];
    }, function (t) {
      ReferenceMgr = t["default"];
    }], b.execute = function () {
      var l, b, d, k, m, p, g, y;
      cclegacy._RF["push"]({}, "0ff578h29lFgpVQKY68qLZB", "CloudMgr", void 0), b = _decorator["ccclass"], d = _decorator["property"], t("default", (k = b("CloudMgr"), m = d(Node), k((y = applyDecoratedDescriptor((g = function (t) {
        var n, a;
        return a = function () {
          for (var n, r, s = (n = arguments)["length"], o = new Array(s), c = 0; c < s; c++) o[c] = n[c];
          return r = t["call"]["apply"](t, [this]["concat"](o)) || this, initializerDefineProperty(r, "bg", y, assertThisInitialized(r)), r["createTimer"] = 0, r;
        }, inheritsLoose(a, t), (n = a["prototype"])["insCloud"] = function () {
          var t, n, r, i;
          r = GbzPoolManager["ins"]["getNode"]("cloud" + ReferenceMgr.inst["RandomInt"](1, 4)), this["bg"]["addChild"](r), r["setPosition"](math.v3(ReferenceMgr.inst["halfGameW"] + 340, ReferenceMgr.inst.randomN(91, 560), 0)), n = ReferenceMgr.inst.randomN(.5, .8), r["setScale"](math.v3(n, n, 1)), r["angle"] = 0, i = ReferenceMgr.inst.randomN(42, 56), t = 1278 / i, r.y = i, tween(r)["by"](t, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, At, 0)).x = 0, t;
            }["apply"]()).x = -1278, t;
          }["apply"]())["call"](function (t) {
            GbzPoolManager["ins"]["putNode"](r);
          })["start"]();
        }, n["update"] = function (t) {
          this.createTimer -= t, this.createTimer <= 0 && (this.createTimer = ReferenceMgr["inst"]["randomN"](10, 15), this["insCloud"]());
        }, a;
      }(Component))["prototype"], "bg", [m], (Pu(l = {}, "configurable", !0), Pu(l, "enumerable", !0), Pu(l, "writable", !0), Pu(l, "initializer", function () {
        return null;
      }), l)), p = g)) || p)), cclegacy._RF["pop"]();
    }, b;
  }["bind"](this)["apply"]();
});