(function (t) {
  var applyDecoratedDescriptor, inheritsLoose, initializerDefineProperty, assertThisInitialized, asyncToGenerator, cclegacy, _decorator, Node, color, Component;
  return function () {
    var h, v;
    return Pu(h = {}, "setters", 0), Pu(h, "execute", 0), (v = h).setters = [function (t) {
      applyDecoratedDescriptor = t["applyDecoratedDescriptor"], inheritsLoose = t["inheritsLoose"], initializerDefineProperty = t["initializerDefineProperty"], assertThisInitialized = t["assertThisInitialized"], asyncToGenerator = t["asyncToGenerator"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], Node = t["Node"], color = t["color"], Component = t["Component"];
    }], v.execute = function () {
      var h, v, l, b, d, k, m, p, g, y, w, _, M, S, A, C, x;
      cclegacy._RF["push"]({}, "b96e9BmCXNALrx20vaqoefV", "TestMgr", void 0), k = _decorator["ccclass"], d = _decorator["property"], t("default", (m = k("TestMgr"), p = d(Node), g = d(Node), y = d(Node), w = d(Node), m((S = applyDecoratedDescriptor((M = function (t) {
        var n, u;
        return u = function () {
          for (var n, r, s = (n = arguments)["length"], o = new Array(s), c = 0; c < s; c++) o[c] = n[c];
          return r = t["call"]["apply"](t, [this]["concat"](o)) || this, initializerDefineProperty(r, "finger", S, assertThisInitialized(r)), initializerDefineProperty(r, "genBtn", A, assertThisInitialized(r)), initializerDefineProperty(r, "furitNodes_", C, assertThisInitialized(r)), initializerDefineProperty(r, "effPr_", x, assertThisInitialized(r)), r;
        }, inheritsLoose(u, t), (n = u["prototype"])["onLoad"] = function () {
          var t;
          return t = asyncToGenerator(Nu().mark(function t() {
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                case "end":
                  return t.stop();
              }
            }, t);
          })), function () {
            var n;
            return n = arguments, t["apply"](this, n);
          };
        }(), n["touchClick"] = function (t) {}, n["showEff"] = function (t, n) {}, n["GetQuatForV3"] = function (t) {}, n["openFps"] = function () {}, n["setStatsColor"] = function (t, n) {
          void 0 === t && (t = cc["Color"]["WHITE"]), void 0 === n && (n = color(0, 0, 0, 150));
        }, u;
      }(Component)).prototype, "finger", [p], (Pu(h = {}, "configurable", !0), Pu(h, "enumerable", !0), Pu(h, "writable", !0), Pu(h, "initializer", function () {
        return null;
      }), h)), A = applyDecoratedDescriptor(M.prototype, "genBtn", [g], (Pu(v = {}, "configurable", !0), Pu(v, "enumerable", !0), Pu(v, "writable", !0), Pu(v, "initializer", function () {
        return null;
      }), v)), C = applyDecoratedDescriptor(M.prototype, "furitNodes_", [y], (Pu(l = {}, "configurable", !0), Pu(l, "enumerable", !0), Pu(l, "writable", !0), Pu(l, "initializer", function () {
        return null;
      }), l)), x = applyDecoratedDescriptor(M.prototype, "effPr_", [w], (Pu(b = {}, "configurable", !0), Pu(b, "enumerable", !0), Pu(b, "writable", !0), Pu(b, "initializer", function () {
        return null;
      }), b)), _ = M)) || _)), cclegacy._RF["pop"]();
    }, v;
  }["bind"](this)["apply"]();
});