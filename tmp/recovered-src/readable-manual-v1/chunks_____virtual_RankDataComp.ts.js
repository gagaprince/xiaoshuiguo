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
      a = t["cclegacy"], u = t["_decorator"], s = t["Sprite"], o = t["Label"];
    }, function (t) {
      c = t["default"];
    }, function (t) {
      var n = to[5];
      f = t["default"], h = t["ResType"];
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
        D,
        N,
        P,
        G = to,
        O = G[5],
        F = G[6],
        B = G[10],
        z = "_RF",
        U = "RankDataComp",
        H = "prototype",
        V = "configurable",
        W = "enumerable",
        J = "writable",
        j = "initializer";
      a["_RF"]["push"]({}, "f80feq1W+9MarJkC21+SmQM", "RankDataComp", void 0), y = u["ccclass"], g = u["property"], t("RankDataComp", (w = y("RankDataComp"), _ = g(s), M = g(o), S = g(s), A = g(o), C = g(o), x = g(s), w((I = n((L = function (t) {
        var n,
          a,
          u = to;
        return r(a = function () {
          for (var n, r, a = to, u = a[4], s = a[3], o = a[5], c = (n = arguments)["length"], f = new Array(c), h = 0; h < c; h++) f[h] = n[h];
          return r = t["call"]["apply"](t, [this]["concat"](f)) || this, i(r, "rankImg", I, e(r)), i(r, "labRank", R, e(r)), i(r, "headImg", E, e(r)), i(r, "userName", D, e(r)), i(r, "level", N, e(r)), i(r, "parentSprite", P, e(r)), r["index"] = -1, r;
        }, t), (n = a["prototype"])["onEnable"] = function () {
          var t = to;
          -1 != this["index"] && this["refreshPro"]();
        }, n["refreshPro"] = function () {
          var t,
            n,
            r,
            i,
            e,
            a,
            u,
            s = to,
            o = s[10],
            v = s[6],
            l = s[0],
            b = s[3],
            d = s[5],
            k = s[4],
            m = "index",
            p = "ins",
            g = "userName",
            y = "headImg",
            w = "level",
            _ = "spriteFrame",
            M = "getRes",
            S = "Sprite",
            A = "secondary",
            C = "string",
            x = "labRank",
            T = "node",
            L = "active",
            I = "rankImg",
            R = "第一";
          (e = this["index"] + 1, i = (r = c["ins"]["rankWordDate"][this["index"]])["userName"], n = r["headImg"], a = r["level"], t = r["isPlayer"], f["ins"]["setSpriteFrameAsync"](this["headImg"], "fruits", n, "水果图标/" + n + "/spriteFrame"), this["parentSprite"]["spriteFrame"] = t ? f["ins"]["getRes"](h["Sprite"], "secondary", "z自己") : f["ins"]["getRes"](h["Sprite"], "secondary", "别人"), this["userName"]["string"] = i, this["level"]["string"] = a + Pr, e < 4) ? (this["labRank"]["node"]["active"] = !1, this["rankImg"]["node"]["active"] = !0, u = "第一", 1 == e && (u = "第一"), 2 == e && (u = "第二"), 3 == e && (u = "第三"), this["rankImg"]["spriteFrame"] = f["ins"]["getRes"](h["Sprite"], "secondary", u)) : (this["labRank"]["node"]["active"] = !0, this["rankImg"]["node"]["active"] = !1, this["labRank"]["string"] = e["toString"]());
        }, n["onItemRender"] = function (t) {
          var n = to;
          this["index"] = t, this["refreshPro"]();
        }, n["update"] = function (t) {}, a;
      }(v))["prototype"], "rankImg", [_], (Pu(l = {}, "configurable", !0), Pu(l, "enumerable", !0), Pu(l, "writable", !0), Pu(l, "initializer", function () {
        return null;
      }), l)), R = n(L["prototype"], "labRank", [M], (Pu(b = {}, "configurable", !0), Pu(b, "enumerable", !0), Pu(b, "writable", !0), Pu(b, "initializer", function () {
        return null;
      }), b)), E = n(L["prototype"], "headImg", [S], (Pu(d = {}, "configurable", !0), Pu(d, "enumerable", !0), Pu(d, "writable", !0), Pu(d, "initializer", function () {
        return null;
      }), d)), D = n(L["prototype"], "userName", [A], (Pu(k = {}, "configurable", !0), Pu(k, "enumerable", !0), Pu(k, "writable", !0), Pu(k, "initializer", function () {
        return null;
      }), k)), N = n(L["prototype"], "level", [C], (Pu(m = {}, "configurable", !0), Pu(m, "enumerable", !0), Pu(m, "writable", !0), Pu(m, "initializer", function () {
        return null;
      }), m)), P = n(L["prototype"], "parentSprite", [x], (Pu(p = {}, "configurable", !0), Pu(p, "enumerable", !0), Pu(p, "writable", !0), Pu(p, "initializer", function () {
        return null;
      }), p)), T = L)) || T)), a["_RF"]["pop"]();
    }, b;
  }["bind"](this)["apply"]();
});