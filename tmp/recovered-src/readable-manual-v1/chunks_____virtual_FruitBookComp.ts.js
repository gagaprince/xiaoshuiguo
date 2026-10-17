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
    b,
    d,
    k,
    m,
    p,
    g,
    y = to;
  return function () {
    var y,
      w,
      _ = to[5],
      M = "setters",
      S = "execute";
    return Pu(y = {}, "setters", 0), Pu(y, "execute", 0), (w = y)["setters"] = [function (t) {
      var a = to;
      n = t["applyDecoratedDescriptor"], r = t["inheritsLoose"], i = t["initializerDefineProperty"], e = t["assertThisInitialized"];
    }, function (t) {
      var n = to,
        r = n[3],
        i = n[2];
      a = t["cclegacy"], u = t["_decorator"], s = t["Sprite"], o = t["Label"], c = t["Node"], f = t["Tween"], h = t["math"], v = t["tween"], l = t["UIOpacity"], b = t["color"];
    }, function (t) {
      d = t["default"];
    }, function (t) {
      k = t["default"];
    }, function (t) {
      m = t["default"];
    }, function (t) {
      p = t["default"];
    }, function (t) {
      g = t["ENUM_Theme_Sprites_Sub"];
    }], w["execute"] = function () {
      var y,
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
        G,
        O,
        F,
        B,
        z,
        U,
        H,
        V = to,
        W = V[5],
        J = V[3],
        j = V[4],
        q = "_RF",
        K = "FruitBookComp",
        Y = "prototype",
        X = "configurable",
        Z = "enumerable",
        Q = "writable",
        $ = "initializer";
      a["_RF"]["push"]({}, "28ebf3XjF1IfIgnSzzCjMhD", "FruitBookComp", void 0), x = u["ccclass"], C = u["property"], t("default", (T = x("FruitBookComp"), L = C(s), I = C(o), R = C(s), E = C(o), D = C(c), N = C(c), T((O = n((G = function (t) {
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
          return s = t["call"]["apply"](t, [this]["concat"](c)) || this, i(s, "fruit", O, e(s)), i(s, "fruitName", F, e(s)), i(s, "fruitSprite", B, e(s)), i(s, "noNum", z, e(s)), i(s, "newTip", U, e(s)), i(s, "parent", H, e(s)), s["index"] = -1, s;
        }, t), (n = a["prototype"])["onEnable"] = function () {
          var t = to;
          -1 != this["index"] && this["refreshPro"]();
        }, n["refreshPro"] = function () {
          var t,
            n,
            r,
            i,
            e,
            a = to,
            u = ro,
            s = a[10],
            o = a[3],
            c = a[4],
            p = 255,
            y = "index",
            w = "cityUnlockData",
            _ = "fruitName",
            M = "string",
            S = "ins",
            A = "fruit",
            C = "noNum",
            x = "parent",
            T = "game_level",
            L = "fruitSprite",
            I = "color",
            R = "opacity",
            E = "node",
            D = "active",
            N = "newTip";
          e = this, r = this["index"] + 1, n = d["cityUnlockData"][this["index"]][0], this["fruitName"]["string"] = n, i = g[d["cityUnlockData"][this["index"]][1]], m["ins"]["setSpriteFrameAsync"](this["fruit"], i["bundle"], n, i["path"] + Et + n + "/spriteFrame"), this["noNum"]["string"] = "No." + r, f["stopAllByTarget"](this["parent"]), this["parent"]["scale"] = h["v3"](0, 0, 0), this["scheduleOnce"](function () {
            var t = to,
              n = "apply";
            v(e["parent"])["to"](.5, function () {
              var t,
                n = to,
                r = n[3];
              return (t = function () {
                var t,
                  n = "scale";
                return (t = Pu({}, "scale", 0))["scale"] = 0, t;
              }["apply"]())["scale"] = h["v3"](.9, .9, .9), t;
            }["apply"](), function () {
              var t,
                n = to;
              return (t = function () {
                var t,
                  n = "easing";
                return (t = Pu({}, "easing", 0))["easing"] = 0, t;
              }["apply"]())["easing"] = "backOut", t;
            }["apply"]())["call"](function () {
              var t = to;
              e["parent"]["scale"] = h["v3"](.9, .9, .9);
            })["start"]();
          }, 0), t = this["fruit"]["getComponent"](l) || this["fruit"]["addComponent"](l), r < k["ins"]["game_level"] ? (this["fruitSprite"]["color"] = b(255, 255, 255), t["opacity"] = 255, this["fruitName"]["node"]["active"] = !0, this["noNum"]["node"]["active"] = !0) : (this["fruitSprite"]["color"] = b(0, 0, 0), t["opacity"] = 100, this["fruitName"]["node"]["active"] = !1, this["noNum"]["node"]["active"] = !1), r < k["ins"]["game_level"] && r >= k["ins"]["fruitBookLastLevel"] ? this["newTip"]["active"] = !0 : this["newTip"]["active"] = !1;
        }, n["onItemRender"] = function (t) {
          var n = to;
          this["index"] = t, this["refreshPro"]();
        }, a;
      }(p))["prototype"], "fruit", [L], (Pu(y = {}, "configurable", !0), Pu(y, "enumerable", !0), Pu(y, "writable", !0), Pu(y, "initializer", function () {
        return null;
      }), y)), F = n(G["prototype"], "fruitName", [I], (Pu(w = {}, "configurable", !0), Pu(w, "enumerable", !0), Pu(w, "writable", !0), Pu(w, "initializer", function () {
        return null;
      }), w)), B = n(G["prototype"], "fruitSprite", [R], (Pu(_ = {}, "configurable", !0), Pu(_, "enumerable", !0), Pu(_, "writable", !0), Pu(_, "initializer", function () {
        return null;
      }), _)), z = n(G["prototype"], "noNum", [E], (Pu(M = {}, "configurable", !0), Pu(M, "enumerable", !0), Pu(M, "writable", !0), Pu(M, "initializer", function () {
        return null;
      }), M)), U = n(G["prototype"], "newTip", [D], (Pu(S = {}, "configurable", !0), Pu(S, "enumerable", !0), Pu(S, "writable", !0), Pu(S, "initializer", function () {
        return null;
      }), S)), H = n(G["prototype"], "parent", [N], (Pu(A = {}, "configurable", !0), Pu(A, "enumerable", !0), Pu(A, "writable", !0), Pu(A, "initializer", function () {
        return null;
      }), A)), P = G)) || P)), a["_RF"]["pop"]();
    }, w;
  }["bind"](this)["apply"]();
});