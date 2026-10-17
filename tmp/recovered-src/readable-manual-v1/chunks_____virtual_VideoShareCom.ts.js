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
      a = t["cclegacy"], u = t["_decorator"], s = t["Sprite"], o = t["Component"];
    }, function (t) {
      c = t["gameMsg"];
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
        M = to,
        S = M[2],
        A = M[5],
        C = M[6],
        x = "_RF",
        T = "VideoShareCom",
        L = "prototype",
        I = "configurable",
        R = "enumerable",
        E = "writable",
        D = "initializer";
      a["_RF"]["push"]({}, "f5322BTOHxO4pccMz2DMzcP", "VideoShareCom", void 0), b = u["ccclass"], d = u["property"], t("default", (k = b("VideoShareCom"), m = d(s), p = d(Number), k((w = n((y = function (t) {
        var n,
          a,
          u = to,
          s = u[7];
        return r(a = function () {
          for (var n, r, a = to, u = a[4], s = a[2], o = (n = arguments)["length"], c = new Array(o), f = 0; f < o; f++) c[f] = n[f];
          return r = t["call"]["apply"](t, [this]["concat"](c)) || this, i(r, "icon", w, e(r)), i(r, "sp_width", _, e(r)), r;
        }, t), (n = a["prototype"])["onEnable"] = function () {
          var t = to,
            n = "onRefreshUI";
          h["on"](c["shareClick"], this["onRefreshUI"], this), this["onRefreshUI"]();
        }, n["onDisable"] = function () {
          var t = to;
          h["off"](c["shareClick"], this["onRefreshUI"], this);
        }, n["onRefreshUI"] = function () {
          var t = to;
          f["ins"]["setVideoImgSprite"](this["icon"], this["sp_width"]);
        }, a;
      }(o))["prototype"], "icon", [m], (Pu(v = {}, "configurable", !0), Pu(v, "enumerable", !0), Pu(v, "writable", !0), Pu(v, "initializer", function () {
        return null;
      }), v)), _ = n(y["prototype"], "sp_width", [p], (Pu(l = {}, "configurable", !0), Pu(l, "enumerable", !0), Pu(l, "writable", !0), Pu(l, "initializer", function () {
        return -1;
      }), l)), g = y)) || g)), a["_RF"]["pop"]();
    }, l;
  }["bind"](this)["apply"]();
});