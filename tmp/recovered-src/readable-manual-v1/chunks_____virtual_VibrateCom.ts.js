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
      var n = to,
        r = n[6];
      a = t["cclegacy"], u = t["_decorator"], s = t["CCString"], o = t["Component"];
    }, function (t) {
      c = t["Log"];
    }, function (t) {
      f = t["default"];
    }], v["execute"] = function () {
      var h,
        v,
        l,
        b,
        d,
        k,
        m,
        p,
        g = to,
        y = g[5],
        w = g[6],
        _ = g[10],
        M = "_RF",
        S = "VibrateCom";
      a["_RF"]["push"]({}, "43bb6fKayNBYbX8U1vE9wAT", "VibrateCom", void 0), l = u["ccclass"], v = u["property"], t("default", (b = l("VibrateCom"), d = v(s), b((p = n((m = function (t) {
        var n,
          a,
          u = to;
        return a = function () {
          for (var n, r, a = to, u = a[4], s = (n = arguments)["length"], o = new Array(s), c = 0; c < s; c++) o[c] = n[c];
          return r = t["call"]["apply"](t, [this]["concat"](o)) || this, i(r, "virbrateMode", p, e(r)), r;
        }, r(a, t), (n = a["prototype"])["onEnable"] = function () {
          var t = to;
          this["node"]["on"]("click", this["Vibrate"], this);
        }, n["Vibrate"] = function () {
          var t = to,
            n = t[3],
            r = "ins",
            i = "uiVibrateOpen";
          c("UI震！ ", f["ins"]["uiVibrateOpen"]), f["ins"]["uiVibrateOpen"] && f["ins"]["vibrateShort"](function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "type";
              return (t = Pu({}, "type", 0))["type"] = 0, t;
            }["apply"]())["type"] = this["virbrateMode"], t;
          }["bind"](this)["apply"]());
        }, a;
      }(o))["prototype"], "virbrateMode", [d], (Pu(h = {}, "configurable", !0), Pu(h, "enumerable", !0), Pu(h, "writable", !0), Pu(h, "initializer", function () {
        return "medium";
      }), h)), k = m)) || k)), a["_RF"]["pop"]();
    }, v;
  }["bind"](this)["apply"]();
});