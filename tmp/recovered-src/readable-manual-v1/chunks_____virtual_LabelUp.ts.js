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
        r = n[3],
        i = n[7];
      a = t["cclegacy"], u = t["_decorator"], s = t["Label"], o = t["Tween"], c = t["UIOpacity"], f = t["tween"], h = t["math"], v = t["Component"];
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
        _ = w[5],
        M = w[6],
        S = "_RF",
        A = "LabelUp";
      a["_RF"]["push"]({}, "59f92wAndBC4ZdwRttEdV1b", "LabelUp", void 0), b = u["ccclass"], d = u["property"], t("default", (k = b("LabelUp"), m = d(s), k((y = n((g = function (t) {
        var n,
          a,
          u = to;
        return r(a = function () {
          var n,
            r = to,
            a = r[4],
            u = r[3];
          n = arguments;
          for (var s, o = n["length"], c = new Array(o), f = 0; f < o; f++) c[f] = n[f];
          return s = t["call"]["apply"](t, [this]["concat"](c)) || this, i(s, "label", y, e(s)), s;
        }, t), (n = a["prototype"])["SetData"] = function (t) {
          var n = to;
          this["label"]["string"] = t;
        }, n["onEnable"] = function () {
          var t,
            n,
            r,
            i = to,
            e = i[10],
            a = "node",
            u = "to",
            s = "apply",
            v = "parallel";
          o["stopAllByTarget"](this["node"]), (r = this["node"]["getComponent"](c) || this["node"]["addComponent"](c))["opacity"] = 255, n = f(this["node"])["to"](.1, function () {
            var t,
              n = to,
              r = n[3];
            return (t = function () {
              var t,
                n = "scale";
              return (t = Pu({}, "scale", 0))["scale"] = 0, t;
            }["apply"]())["scale"] = h["v3"](1.5, 1.5, 1.5), t;
          }["apply"]())["to"](.1, function () {
            var t,
              n = to,
              r = n[3];
            return (t = function () {
              var t,
                n = "scale";
              return (t = Pu({}, "scale", 0))["scale"] = 0, t;
            }["apply"]())["scale"] = h["v3"](1, 1, 1), t;
          }["apply"]()), t = f(this["node"])["parallel"](f(this["node"])["by"](.6, function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "position";
              return (t = Pu({}, "position", 0))["position"] = 0, t;
            }["apply"]())["position"] = h["v3"](0, 160, 0), t;
          }["apply"]()), f(r)["to"](.4, function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "opacity";
              return (t = Pu({}, "opacity", 0))["opacity"] = 0, t;
            }["apply"]())["opacity"] = 0, t;
          }["apply"]())), f(this["node"])["parallel"](n, t)["start"]();
        }, a;
      }(v))["prototype"], "label", [m], (Pu(l = {}, "configurable", !0), Pu(l, "enumerable", !0), Pu(l, "writable", !0), Pu(l, "initializer", function () {
        return null;
      }), l)), p = g)) || p)), a["_RF"]["pop"]();
    }, b;
  }["bind"](this)["apply"]();
});