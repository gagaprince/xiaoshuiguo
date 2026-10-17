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
      f = t["default"];
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
        M,
        S,
        A,
        C = to,
        x = C[2],
        T = C[6],
        L = "_RF",
        I = "BgCtrCom",
        R = "prototype",
        E = "configurable",
        D = "enumerable",
        N = "writable",
        P = "initializer";
      a["_RF"]["push"]({}, "6ad69nt3wRDApprbpdjggrp", "BgCtrCom", void 0), k = u["ccclass"], d = u["property"], t("BgCtrCom", (m = k("BgCtrCom"), p = d(s), g = d(s), y = d(o), m((M = n((_ = function (t) {
        var n,
          a = to;
        return r(n = function () {
          for (var n, r, a = to, u = a[4], s = a[2], o = a[3], c = (n = arguments)["length"], f = new Array(c), h = 0; h < c; h++) f[h] = n[h];
          return r = t["call"]["apply"](t, [this]["concat"](f)) || this, i(r, "bfSp", M, e(r)), i(r, "bfSp2", S, e(r)), i(r, "bgNode", A, e(r)), r;
        }, t), n["prototype"]["onEnable"] = function () {
          var t,
            n,
            r = to,
            i = r[1],
            e = r[9],
            a = r[3];
          n = f["ins"]["game_level"], h["Ins"]()["isShowNewBg"](), t = Math["floor"](n / 10) % 4, this["bgNode"]["spriteFrame"] = this["bfSp2"][t];
        }, n;
      }(c))["prototype"], "bfSp", [p], (Pu(v = {}, "configurable", !0), Pu(v, "enumerable", !0), Pu(v, "writable", !0), Pu(v, "initializer", function () {
        return [];
      }), v)), S = n(_["prototype"], "bfSp2", [g], (Pu(l = {}, "configurable", !0), Pu(l, "enumerable", !0), Pu(l, "writable", !0), Pu(l, "initializer", function () {
        return [];
      }), l)), A = n(_["prototype"], "bgNode", [y], (Pu(b = {}, "configurable", !0), Pu(b, "enumerable", !0), Pu(b, "writable", !0), Pu(b, "initializer", null), b)), w = _)) || w)), a["_RF"]["pop"]();
    }, l;
  }["bind"](this)["apply"]();
});