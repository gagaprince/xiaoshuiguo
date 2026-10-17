(function (t) {
  var n,
    r,
    i,
    e,
    a,
    u,
    s,
    o,
    c,
    f,
    h,
    v,
    l = to;
  return function () {
    var l,
      b,
      d = to[5],
      k = "setters",
      m = "execute";
    return Pu(l = {}, "setters", 0), Pu(l, "execute", 0), (b = l)["setters"] = [function (t) {
      var a = to;
      n = t["applyDecoratedDescriptor"], r = t["inheritsLoose"], i = t["initializerDefineProperty"], e = t["assertThisInitialized"];
    }, function (t) {
      var n = to,
        r = n[2];
      a = t["cclegacy"], u = t["_decorator"], s = t["Node"], o = t["math"], c = t["tween"], f = t["Component"];
    }, function (t) {
      h = t["default"];
    }, function (t) {
      v = t["default"];
    }], b["execute"] = function () {
      var l,
        b,
        d,
        k,
        m,
        p,
        g,
        y,
        w = to,
        _ = w[6],
        M = w[5],
        S = "_RF",
        A = "CloudMgr";
      a["_RF"]["push"]({}, "0ff578h29lFgpVQKY68qLZB", "CloudMgr", void 0), b = u["ccclass"], d = u["property"], t("default", (k = b("CloudMgr"), m = d(s), k((y = n((g = function (t) {
        var n,
          a,
          u = to;
        return a = function () {
          for (var n, r, a = to, u = a[4], s = (n = arguments)["length"], o = new Array(s), c = 0; c < s; c++) o[c] = n[c];
          return r = t["call"]["apply"](t, [this]["concat"](o)) || this, i(r, "bg", y, e(r)), r["createTimer"] = 0, r;
        }, r(a, t), (n = a["prototype"])["insCloud"] = function () {
          var t,
            n,
            r,
            i,
            e = to,
            a = ro,
            u = e[3],
            s = e[7],
            f = e[0],
            l = e[6],
            b = "inst",
            d = "v3",
            k = "randomN";
          r = h["ins"]["getNode"]("cloud" + v["inst"]["RandomInt"](1, 4)), this["bg"]["addChild"](r), r["setPosition"](o["v3"](v["inst"]["halfGameW"] + 340, v["inst"]["randomN"](91, 560), 0)), n = v["inst"]["randomN"](.5, .8), r["setScale"](o["v3"](n, n, 1)), r["angle"] = 0, i = v["inst"]["randomN"](42, 56), t = 1278 / i, r[St] = i, c(r)["by"](t, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, At, 0))[At] = 0, t;
            }["apply"]())[At] = -1278, t;
          }["apply"]())["call"](function (t) {
            var n = to;
            h["ins"]["putNode"](r);
          })["start"]();
        }, n["update"] = function (t) {
          var n = to,
            r = "createTimer";
          this["createTimer"] -= t, this["createTimer"] <= 0 && (this["createTimer"] = v["inst"]["randomN"](10, 15), this["insCloud"]());
        }, a;
      }(f))["prototype"], "bg", [m], (Pu(l = {}, "configurable", !0), Pu(l, "enumerable", !0), Pu(l, "writable", !0), Pu(l, "initializer", function () {
        return null;
      }), l)), p = g)) || p)), a["_RF"]["pop"]();
    }, b;
  }["bind"](this)["apply"]();
});