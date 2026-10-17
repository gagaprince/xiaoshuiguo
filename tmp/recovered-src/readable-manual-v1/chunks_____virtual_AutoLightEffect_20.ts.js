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
    f = to;
  return function () {
    var f,
      h,
      v = to[5],
      l = "setters",
      b = "execute";
    return Pu(f = {}, "setters", 0), Pu(f, "execute", 0), (h = f)["setters"] = [function (t) {
      var a = to;
      n = t["applyDecoratedDescriptor"], r = t["inheritsLoose"], i = t["initializerDefineProperty"], e = t["assertThisInitialized"];
    }, function (t) {
      var n = to,
        r = n[6];
      a = t["cclegacy"], u = t["_decorator"], s = t["Material"], o = t["tween"], c = t["Component"];
    }], h["execute"] = function () {
      var f,
        h,
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
        _,
        M,
        S = to,
        A = "_RF",
        C = "AutoLightEffect",
        x = "prototype",
        T = "configurable",
        L = "enumerable",
        I = "writable",
        R = "initializer";
      a["_RF"]["push"]({}, "514ee+7mfpPzaXWM1+0QdHi", "AutoLightEffect%20", void 0), b = u["ccclass"], d = u["property"], t("AutoLightEffect", (k = b("AutoLightEffect"), m = d(s), k((y = n((g = function (t) {
        var n,
          a = to;
        return n = function () {
          for (var n, r, a = to, u = a[4], s = (n = arguments)["length"], o = new Array(s), c = 0; c < s; c++) o[c] = n[c];
          return r = t["call"]["apply"](t, [this]["concat"](o)) || this, i(r, "targetMaterial", y, e(r)), i(r, "appearTime", w, e(r)), i(r, "disappearTime", _, e(r)), i(r, "sweepTime", M, e(r)), r;
        }, r(n, t), n["prototype"]["start"] = function () {
          var t,
            n,
            r = to,
            i = r[7],
            e = r[3],
            a = "targetMaterial",
            u = "setProperty",
            s = "apply",
            c = "to";
          this["targetMaterial"]["setProperty"]("fadeInOut", 0), this["targetMaterial"]["setProperty"]("speed", 0), t = function () {
            var t,
              n = to,
              r = n[3];
            return (t = function () {
              var t,
                n,
                r = to,
                i = "fadeInOut",
                e = "speed";
              return Pu(t = {}, "fadeInOut", 0), Pu(t, "speed", 0), (n = t)["fadeInOut"] = 0, n["speed"] = 0, n;
            }["apply"]())["fadeInOut"] = 0, t["speed"] = 0, t;
          }["apply"](), n = this["targetMaterial"], o(t)["to"](this["appearTime"], function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "fadeInOut";
              return (t = Pu({}, "fadeInOut", 0))["fadeInOut"] = 0, t;
            }["apply"]())["fadeInOut"] = 1, t;
          }["apply"](), function () {
            var r,
              i = to;
            return (r = function () {
              var t,
                n = "onUpdate";
              return (t = Pu({}, "onUpdate", 0))["onUpdate"] = 0, t;
            }["apply"]())["onUpdate"] = function () {
              var r = to,
                i = "fadeInOut";
              n["setProperty"]("fadeInOut", t["fadeInOut"]);
            }, r;
          }["apply"]())["to"](this["disappearTime"], function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "fadeInOut";
              return (t = Pu({}, "fadeInOut", 0))["fadeInOut"] = 0, t;
            }["apply"]())["fadeInOut"] = 0, t;
          }["apply"](), function () {
            var r,
              i = to;
            return (r = function () {
              var t,
                n = "onUpdate";
              return (t = Pu({}, "onUpdate", 0))["onUpdate"] = 0, t;
            }["apply"]())["onUpdate"] = function () {
              var r = to,
                i = "fadeInOut";
              n["setProperty"]("fadeInOut", t["fadeInOut"]);
            }, r;
          }["apply"]())["to"](this["sweepTime"], function () {
            var t,
              n = to[3];
            return (t = function () {
              var t,
                n = "speed";
              return (t = Pu({}, "speed", 0))["speed"] = 0, t;
            }["apply"]())["speed"] = 1, t;
          }["apply"](), function () {
            var r,
              i = to;
            return (r = function () {
              var t,
                n = "onUpdate";
              return (t = Pu({}, "onUpdate", 0))["onUpdate"] = 0, t;
            }["apply"]())["onUpdate"] = function () {
              var r = to,
                i = "speed";
              n["setProperty"]("speed", t["speed"]);
            }, r;
          }["apply"]())["start"]();
        }, n;
      }(c))["prototype"], "targetMaterial", [m], (Pu(f = {}, "configurable", !0), Pu(f, "enumerable", !0), Pu(f, "writable", !0), Pu(f, "initializer", function () {
        return null;
      }), f)), w = n(g["prototype"], "appearTime", [d], (Pu(h = {}, "configurable", !0), Pu(h, "enumerable", !0), Pu(h, "writable", !0), Pu(h, "initializer", function () {
        return 1;
      }), h)), _ = n(g["prototype"], "disappearTime", [d], (Pu(v = {}, "configurable", !0), Pu(v, "enumerable", !0), Pu(v, "writable", !0), Pu(v, "initializer", function () {
        return 1;
      }), v)), M = n(g["prototype"], "sweepTime", [d], (Pu(l = {}, "configurable", !0), Pu(l, "enumerable", !0), Pu(l, "writable", !0), Pu(l, "initializer", function () {
        return 2;
      }), l)), p = g)) || p)), a["_RF"]["pop"]();
    }, h;
  }["bind"](this)["apply"]();
});