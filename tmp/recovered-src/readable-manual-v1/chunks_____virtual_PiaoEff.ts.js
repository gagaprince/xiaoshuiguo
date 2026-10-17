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
    h = to;
  return function () {
    var h,
      v,
      l = to[5],
      b = "setters",
      d = "execute";
    return Pu(h = {}, "setters", 0), Pu(h, "execute", 0), (v = h)["setters"] = [function (t) {
      var a = to;
      n = t["applyDecoratedDescriptor"], r = t["inheritsLoose"], i = t["initializerDefineProperty"], e = t["assertThisInitialized"];
    }, function (t) {
      var n = to;
      a = t["cclegacy"], u = t["_decorator"], s = t["ParticleSystem2D"], o = t["SpriteFrame"], c = t["Component"];
    }, function (t) {
      f = t["default"];
    }, null], v["execute"] = function () {
      var h,
        v,
        l,
        b,
        d,
        k,
        m,
        p,
        g,
        y,
        w,
        _ = to,
        M = _[2],
        S = _[5],
        A = "_RF",
        C = "PiaoEff",
        x = "prototype",
        T = "configurable",
        L = "enumerable",
        I = "writable",
        R = "initializer";
      a["_RF"]["push"]({}, "e450e6NuSBPTbiyX+vYS/8K", "PiaoEff", void 0), l = u["ccclass"], b = u["property"], t("PiaoEff", (d = l("PiaoEff"), k = b(s), m = b(o), d((y = n((g = function (t) {
        var n,
          a = to;
        return r(n = function () {
          for (var n, r, a = to, u = a[4], s = a[2], o = (n = arguments)["length"], c = new Array(o), f = 0; f < o; f++) c[f] = n[f];
          return r = t["call"]["apply"](t, [this]["concat"](c)) || this, i(r, "piaoEff", y, e(r)), i(r, "srps", w, e(r)), r;
        }, t), n["prototype"]["onEnable"] = function () {
          var t,
            n,
            r = to;
          t = f["ins"]["game_level"], n = Math["floor"](t / 10) % 4, this["piaoEff"]["spriteFrame"] = this["srps"][n];
        }, n;
      }(c))["prototype"], "piaoEff", [k], (Pu(h = {}, "configurable", !0), Pu(h, "enumerable", !0), Pu(h, "writable", !0), Pu(h, "initializer", function () {
        return null;
      }), h)), w = n(g["prototype"], "srps", [m], (Pu(v = {}, "configurable", !0), Pu(v, "enumerable", !0), Pu(v, "writable", !0), Pu(v, "initializer", function () {
        return [];
      }), v)), p = g)) || p)), a["_RF"]["pop"]();
    }, v;
  }["bind"](this)["apply"]();
});