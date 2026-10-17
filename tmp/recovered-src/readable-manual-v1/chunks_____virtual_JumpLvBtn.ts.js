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
      var n = to;
      a = t["cclegacy"], u = t["_decorator"], s = t["Button"], o = t["EditBox"], c = t["Node"], f = t["Component"];
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
        w,
        _,
        M,
        S,
        A,
        C,
        x,
        T,
        L,
        I,
        R,
        E,
        D = to,
        N = D[1],
        P = D[5],
        G = D[6],
        O = D[7],
        F = "_RF",
        B = "JumpLvBtn",
        z = "prototype",
        U = "configurable",
        H = "enumerable",
        V = "writable",
        W = "initializer";
      a["_RF"]["push"]({}, "5f7f5WXEYpORp6URYlj+aHC", "JumpLvBtn", void 0), g = u["ccclass"], p = u["property"], t("default", (y = g("JumpLvBtn"), w = p(s), _ = p(s), M = p(s), S = p(o), A = p(c), y((T = n((x = function (t) {
        var n,
          a,
          u = to,
          s = u[7],
          o = u[4];
        return r(a = function () {
          for (var n, r, a = to, u = a[4], s = a[5], o = (n = arguments)["length"], c = new Array(o), f = 0; f < o; f++) c[f] = n[f];
          return r = t["call"]["apply"](t, [this]["concat"](c)) || this, i(r, "btnOpen", T, e(r)), i(r, "btnClose", L, e(r)), i(r, "btnJump", I, e(r)), i(r, "editBox", R, e(r)), i(r, "pan", E, e(r)), r;
        }, t), (n = a["prototype"])["onEnable"] = function () {
          var t = to,
            n = t[5],
            r = t[4],
            i = "node",
            e = "on",
            a = "click";
          this["btnOpen"]["node"]["on"]("click", this["onShow"], this), this["btnJump"]["node"]["on"]("click", this["onJump"], this), this["btnClose"]["node"]["on"]("click", this["onClose"], this);
        }, n["onDisable"] = function () {
          var t = to,
            n = t[5],
            r = t[4],
            i = "node",
            e = "off",
            a = "click";
          this["btnOpen"]["node"]["off"]("click", this["onShow"], this), this["btnJump"]["node"]["off"]("click", this["onJump"], this), this["btnClose"]["node"]["off"]("click", this["onClose"], this);
        }, n["onClose"] = function () {
          var t = to;
          this["pan"]["active"] = !1;
        }, n["onShow"] = function () {
          var t = to;
          this["pan"]["active"] = !0;
        }, n["onJump"] = function () {
          var t,
            n = to,
            r = n[5];
          (t = parseInt(this["editBox"]["string"])) && (h["ins"]["SetCurLv"](t), v["gameMgr"]["onGameStart"]());
        }, a;
      }(f))["prototype"], "btnOpen", [w], (Pu(l = {}, "configurable", !0), Pu(l, "enumerable", !0), Pu(l, "writable", !0), Pu(l, "initializer", function () {
        return null;
      }), l)), L = n(x["prototype"], "btnClose", [_], (Pu(b = {}, "configurable", !0), Pu(b, "enumerable", !0), Pu(b, "writable", !0), Pu(b, "initializer", function () {
        return null;
      }), b)), I = n(x["prototype"], "btnJump", [M], (Pu(d = {}, "configurable", !0), Pu(d, "enumerable", !0), Pu(d, "writable", !0), Pu(d, "initializer", function () {
        return null;
      }), d)), R = n(x["prototype"], "editBox", [S], (Pu(k = {}, "configurable", !0), Pu(k, "enumerable", !0), Pu(k, "writable", !0), Pu(k, "initializer", function () {
        return null;
      }), k)), E = n(x["prototype"], "pan", [A], (Pu(m = {}, "configurable", !0), Pu(m, "enumerable", !0), Pu(m, "writable", !0), Pu(m, "initializer", function () {
        return null;
      }), m)), C = x)) || C)), a["_RF"]["pop"]();
    }, b;
  }["bind"](this)["apply"]();
});