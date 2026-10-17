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
    v = to;
  return function () {
    var v,
      l,
      b = to[5],
      d = "setters",
      k = "execute";
    return Pu(v = {}, "setters", 0), Pu(v, "execute", 0), (l = v)["setters"] = [function (t) {
      var a = to;
      n = t["applyDecoratedDescriptor"], r = t["inheritsLoose"], i = t["initializerDefineProperty"], e = t["assertThisInitialized"];
    }, function (t) {
      var n = to;
      a = t["cclegacy"], u = t["_decorator"], s = t["SpriteFrame"], o = t["Sprite"], c = t["Component"];
    }, function (t) {
      f = t["globalxz"];
    }, function (t) {
      h = t["default"];
    }], l["execute"] = function () {
      var v,
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
        M = to,
        S = M[2],
        A = M[5],
        C = "_RF",
        x = "prototype",
        T = "configurable",
        L = "enumerable",
        I = "writable",
        R = "initializer";
      a["_RF"]["push"]({}, "11693VhkEJPOrhUFuX9JSB1", "logoCom", void 0), d = u["ccclass"], b = u["property"], t("default", (k = d("LogoCom"), m = b(s), p = b(o), k((w = n((y = function (t) {
        var n,
          a,
          u = to;
        return r(a = function () {
          for (var n, r, a = to, u = a[4], s = a[2], o = "apply", c = (n = arguments)["length"], f = new Array(c), h = 0; h < c; h++) f[h] = n[h];
          return r = t["call"]["apply"](t, [this]["concat"](f)) || this, i(r, "logoFrames", w, e(r)), i(r, "icon", _, e(r)), r["indexs"] = function () {
            var t,
              n = to,
              r = n[3];
            return (t = function () {
              var t,
                n,
                r = to,
                i = r[3],
                e = "消个水果",
                a = "闯关乐消除",
                u = "解压水果消";
              return Pu(t = {}, "消个水果", 0), Pu(t, "闯关乐消除", 0), Pu(t, "解压水果消", 0), (n = t)["消个水果"] = 0, n["闯关乐消除"] = 0, n["解压水果消"] = 0, n;
            }["apply"]())["消个水果"] = 0, t["闯关乐消除"] = 1, t["解压水果消"] = 2, t;
          }["apply"](), r;
        }, t), (n = a["prototype"])["onEnable"] = function () {
          this["onRefreshUI"]();
        }, n["onRefreshUI"] = function () {
          var t,
            n,
            r,
            i = to,
            e = i[2];
          (n = this, t = f["logo"]) && null != (r = this["indexs"][t]) && (this["icon"]["spriteFrame"] = this["logoFrames"][r], this["scheduleOnce"](function () {
            var t = to;
            h["SetSpriteSizeWidth"](n["icon"], 520);
          }));
        }, a;
      }(c))["prototype"], "logoFrames", [m], (Pu(v = {}, "configurable", !0), Pu(v, "enumerable", !0), Pu(v, "writable", !0), Pu(v, "initializer", function () {
        return [];
      }), v)), _ = n(y["prototype"], "icon", [p], (Pu(l = {}, "configurable", !0), Pu(l, "enumerable", !0), Pu(l, "writable", !0), Pu(l, "initializer", function () {
        return null;
      }), l)), g = y)) || g)), a["_RF"]["pop"]();
    }, l;
  }["bind"](this)["apply"]();
});