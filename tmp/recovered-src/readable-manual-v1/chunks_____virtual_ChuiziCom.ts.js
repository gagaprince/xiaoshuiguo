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
      a = t["cclegacy"], u = t["_decorator"], s = t["Node"], o = t["ParticleSystem2D"], c = t["tween"], f = t["Quat"], h = t["Component"];
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
        w,
        _,
        M,
        S = to,
        A = S[1],
        C = S[7],
        x = "_RF",
        T = "ChuiziCom",
        L = "prototype",
        I = "configurable",
        R = "enumerable",
        E = "writable",
        D = "initializer";
      a["_RF"]["push"]({}, "acf520OJytAxa5ekqX+w531", "ChuiziCom", void 0), d = u["ccclass"], k = u["property"], t("ChuiziCom", (m = d("ChuiziCom"), p = k(s), g = k(o), m((_ = n((w = function (t) {
        var n,
          a,
          u = to,
          s = u[8];
        return a = function () {
          for (var n, r, a = to, u = a[4], s = (n = arguments)["length"], o = new Array(s), c = 0; c < s; c++) o[c] = n[c];
          return r = t["call"]["apply"](t, [this]["concat"](o)) || this, i(r, "nodeChuizi", _, e(r)), i(r, "eff", M, e(r)), r;
        }, r(a, t), (n = a["prototype"])["playHammer"] = function (t) {
          var n,
            r = to,
            i = r[3],
            e = "nodeChuizi",
            a = "to",
            u = "apply";
          n = this, this["nodeChuizi"] && (this["nodeChuizi"]["active"] = !0, this["nodeChuizi"]["setRotationFromEuler"](0, 0, 0), c(this["nodeChuizi"])["delay"](.5)["to"](.08, function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "rotation";
              return (t = Pu({}, "rotation", 0))["rotation"] = 0, t;
            }["apply"]())["rotation"] = f["fromEuler"](new f(), 0, 0, -10), t;
          }["apply"](), function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "easing";
              return (t = Pu({}, "easing", 0))["easing"] = 0, t;
            }["apply"]())["easing"] = "quadOut", t;
          }["apply"]())["to"](.18, function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "rotation";
              return (t = Pu({}, "rotation", 0))["rotation"] = 0, t;
            }["apply"]())["rotation"] = f["fromEuler"](new f(), 0, 0, 45), t;
          }["apply"](), function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "easing";
              return (t = Pu({}, "easing", 0))["easing"] = 0, t;
            }["apply"]())["easing"] = "backOut", t;
          }["apply"]())["call"](function () {
            var r = to,
              i = r[8];
            n["nodeChuizi"]["active"] = !1, null == t || t(), n["playEffect"]();
          })["start"]());
        }, n["playEffect"] = function () {
          var t,
            n = to,
            r = "eff";
          t = this, this["eff"] ? (this["eff"]["resetSystem"](), this["scheduleOnce"](function () {
            t["onEffectFinish"]();
          }, 2)) : this["onEffectFinish"]();
        }, n["onEffectFinish"] = function () {
          var t = to,
            n = t[5];
          this["isValid"] && v["ins"]["putNode"](this["node"]);
        }, a;
      }(h))["prototype"], "nodeChuizi", [p], (Pu(l = {}, "configurable", !0), Pu(l, "enumerable", !0), Pu(l, "writable", !0), Pu(l, "initializer", function () {
        return null;
      }), l)), M = n(w["prototype"], "eff", [g], (Pu(b = {}, "configurable", !0), Pu(b, "enumerable", !0), Pu(b, "writable", !0), Pu(b, "initializer", function () {
        return null;
      }), b)), y = w)) || y)), a["_RF"]["pop"]();
    }, b;
  }["bind"](this)["apply"]();
});