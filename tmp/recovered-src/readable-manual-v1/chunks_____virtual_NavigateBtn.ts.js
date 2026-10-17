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
    l,
    b = to;
  return function () {
    var b,
      d,
      k = to[5],
      m = "setters",
      p = "execute";
    return Pu(b = {}, "setters", 0), Pu(b, "execute", 0), (d = b)["setters"] = [function (t) {
      var a = to;
      n = t["applyDecoratedDescriptor"], r = t["inheritsLoose"], i = t["initializerDefineProperty"], e = t["assertThisInitialized"];
    }, function (t) {
      var n = to;
      a = t["cclegacy"], u = t["_decorator"], s = t["Sprite"], o = t["Label"], c = t["assetManager"], f = t["SpriteFrame"], h = t["Component"];
    }, function (t) {
      v = t["default"];
    }, function (t) {
      l = t["Log"];
    }], d["execute"] = function () {
      var b,
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
        A = to,
        C = A[2],
        x = A[5],
        T = A[9],
        L = "_RF",
        I = "NavigateBtn",
        R = "prototype",
        E = "configurable",
        D = "enumerable",
        N = "writable",
        P = "initializer";
      a["_RF"]["push"]({}, "ba107pYm49Ip6YO7m8Ipz8k", "NavigateBtn", void 0), m = u["ccclass"], k = u["property"], t("default", (p = m("NavigateBtn"), g = k(s), y = k(o), p((M = n((_ = function (t) {
        var n,
          a,
          u = to;
        return r(a = function () {
          var n,
            r = to,
            a = r[4],
            u = r[2];
          n = arguments;
          for (var s, o = n["length"], c = new Array(o), f = 0; f < o; f++) c[f] = n[f];
          return s = t["call"]["apply"](t, [this]["concat"](c)) || this, i(s, "icon", M, e(s)), i(s, "nameLbl", S, e(s)), s;
        }, t), (n = a["prototype"])["start"] = function () {
          var t,
            n,
            r,
            i = to,
            e = i[4],
            a = "navigateAppName",
            u = "navigateAppIconUrl";
          t = this, r = !1, (n = v["ins"])["navigateMiniOpen"] && n["navigateAppid"] && n["navigateAppName"] && n["navigateAppIconUrl"] && (r = !0, this["nameLbl"]["string"] = n["navigateAppName"], c["loadRemote"](n["navigateAppIconUrl"], function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "ext";
              return (t = Pu({}, "ext", 0))["ext"] = 0, t;
            }["apply"]())["ext"] = ".png", t;
          }["apply"](), function (n, r) {
            var i,
              e = to;
            n || ((i = new f())["texture"] = r, t["icon"]["spriteFrame"] = i);
          })), r || (this["node"]["active"] = !1);
        }, n["onClick"] = function () {
          var t = to,
            n = "ins";
          l("跳转参数", v["ins"]["navigateAppid"], v["ins"]["navigateAppPath"]), window["wx"]["navigateToMiniProgram"](function () {
            var t,
              n = to,
              r = n[3],
              i = "ins";
            return (t = function () {
              var t,
                n,
                r = to,
                i = "appId",
                e = "path";
              return Pu(t = {}, "appId", 0), Pu(t, "path", 0), (n = t)["appId"] = 0, n["path"] = 0, n;
            }["apply"]())["appId"] = v["ins"]["navigateAppid"], t["path"] = v["ins"]["navigateAppPath"], t;
          }["apply"]());
        }, a;
      }(h))["prototype"], "icon", [g], (Pu(b = {}, "configurable", !0), Pu(b, "enumerable", !0), Pu(b, "writable", !0), Pu(b, "initializer", function () {
        return null;
      }), b)), S = n(_["prototype"], "nameLbl", [y], (Pu(d = {}, "configurable", !0), Pu(d, "enumerable", !0), Pu(d, "writable", !0), Pu(d, "initializer", function () {
        return null;
      }), d)), w = _)) || w)), a["_RF"]["pop"]();
    }, d;
  }["bind"](this)["apply"]();
});