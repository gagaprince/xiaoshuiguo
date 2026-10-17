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
    y,
    w,
    _,
    M,
    S,
    A,
    C,
    x = to;
  return function () {
    var x,
      T,
      L = to[5],
      I = "setters",
      R = "execute";
    return Pu(x = {}, "setters", 0), Pu(x, "execute", 0), (T = x)["setters"] = [function (t) {
      var a = to;
      n = t["applyDecoratedDescriptor"], r = t["inheritsLoose"], i = t["initializerDefineProperty"], e = t["assertThisInitialized"];
    }, function (t) {
      var n = to,
        r = n[2],
        i = n[9],
        e = n[14];
      a = t["cclegacy"], u = t["_decorator"], s = t["Node"], o = t["view"], c = t["UITransform"], f = t["tween"], h = t["math"], v = t["Layers"], l = t["RigidBody2D"], b = t["ERigidBody2DType"], d = t["CircleCollider2D"], k = t["PolygonCollider2D"], m = t["Component"];
    }, function (t) {
      p = t["default"];
    }, function (t) {
      g = t["default"];
    }, function (t) {
      y = t["default"];
    }, function (t) {
      w = t["default"];
    }, function (t) {
      _ = t["default"];
    }, function (t) {
      M = t["default"];
    }, function (t) {
      var n = to;
      S = t["ENUM_UI"], A = t["ENUM_CLIP"];
    }, function (t) {
      C = t["FruitConfig"];
    }], T["execute"] = function () {
      var x,
        T,
        L,
        I,
        R,
        E,
        D,
        N,
        P = to,
        G = P[5],
        O = P[6],
        F = P[9],
        B = "_RF",
        z = "GbzFruitDownLayer";
      a["_RF"]["push"]({}, "262778VlvxPEKK1dLw7LFiu", "GbzFruitDownLayer", void 0), T = u["ccclass"], L = u["property"], t("default", (I = T("GbzFruitDownLayer"), R = L(s), I((N = n((D = function (t) {
        var n,
          a,
          u = to,
          s = u[6],
          m = u[10];
        return r(a = function () {
          for (var n, r, a = to, u = ro, s = a[4], o = a[9], c = a[10], f = a[16], h = (n = arguments)["length"], v = new Array(h), l = 0; l < h; l++) v[l] = n[l];
          return r = t["call"]["apply"](t, [this]["concat"](v)) || this, i(r, "createPoint", N, e(r)), r["radius"] = 200, r["curThemeType"] = void 0, r["fruitcomList"] = [], r["clickSoundInterval"] = 30, r["lastClickSoundTime"] = 0, r["polygonInfo"] = new Map(), r;
        }, t), (n = a["prototype"])["onEnable"] = function () {
          var t,
            n = to,
            r = n[10],
            i = n[12],
            e = "node";
          this["curThemeType"] = g["ins"]["useSkinId"], t = o["getVisibleSize"](), this["node"]["getComponent"](c)["setContentSize"](t), this["node"]["setPosition"](0, -t["height"]);
        }, n["showAni"] = function (t) {
          var n,
            r = to,
            i = r[3],
            e = r[2],
            a = "instance";
          n = this, M["instance"] && (M["instance"]["floor"]["active"] = !1), this["lastClickSoundTime"] = 0, f(this["node"])["to"](.3, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, St, 0))[St] = 0, t;
            }["apply"]())[St] = 0, t;
          }["apply"]())["call"](function () {
            n["onCreateFuitAll"](t);
          })["start"]();
        }, n["setfruitScale"] = function (t) {
          var n = to,
            r = "instance",
            i = "curThemeType";
          return 0 == M["instance"]["curThemeType"] && t ? t["scale"] : 2 == M["instance"]["curThemeType"] || 5 == M["instance"]["curThemeType"] ? .68 : .65;
        }, n["onCreateFuitAll"] = function (t) {
          var n, r, i;
          n = this, r = 0, i = setInterval(function () {
            var e,
              a,
              u,
              s,
              o = to,
              c = o[0],
              v = o[3],
              l = o[10],
              b = o[4],
              d = "onAniEnd",
              k = "random",
              m = "radius";
            return r >= t["length"] ? (clearInterval(i), void n["onAniEnd"]()) : (u = t[r], a = n["createFruitNodes"](u), n["tryPlayCreateSound"](), n["changeToCircle"](a), s = h["v2"](Math["random"]() * n["radius"] - n["radius"] / 2, Math["random"]() * n["radius"] - n["radius"] / 2), a["setPosition"](s[At], s[St]), e = n["setfruitScale"](u), a["setScale"](0, 0, 0), f(a)["to"](.3, function () {
              var t,
                n = to,
                r = n[3];
              return (t = function () {
                var t,
                  n = "scale";
                return (t = Pu({}, "scale", 0))["scale"] = 0, t;
              }["apply"]())["scale"] = h["v3"](e, e, e), t;
            }["apply"]())["start"](), n["fruitcomList"]["push"](a), _["ins"]["vibrateShort"](null), ++r >= 100 ? (clearInterval(i), void n["onAniEnd"]()) : void 0);
          }, 30);
        }, n["onAniEnd"] = function () {
          var t = to;
          y["gameMgr"]["onGameOver"](S["LAYER_WIN"], function () {});
        }, n["createFruitNodes"] = function (t) {
          var n,
            r,
            i,
            e = to,
            a = e[9],
            u = e[7],
            s = e[5],
            o = e[3],
            c = e[2],
            f = e[10];
          return i = this["getNodeName"]() + t["fruitType"], (n = w["ins"]["getNode"](i))["layer"] = v["Enum"]["DEFAULT"], this["createPoint"]["addChild"](n), (r = n["getComponent"](l) || n["addComponent"](l))["group"] = C["RB_GROUPS"]["clickFruit"], r["type"] = b["Dynamic"], r["gravityScale"] = 13, n;
        }, n["getNodeName"] = function () {
          var t = to,
            n = t[3],
            r = "fruit";
          switch (this["curThemeType"]) {
            case 0:
              return "fruit";
            case 1:
              return "sweet";
            case 2:
              return "vegetable";
            case 3:
              return "animal";
            case 4:
              return "sea";
            case 5:
              return "candy";
            default:
              return "fruit";
          }
        }, n["recycleFruit"] = function () {
          for (var t = to, n = t[10], r = t[4], i = t[1], e = t[8], a = t[5], u = t[12], s = t[2], o = "fruitcomList", c = "polygonInfo", f = "getComponent", v = "node", m = "getChildByName", p = "walls", g = "active", y = 0; y < this["fruitcomList"]["length"]; y++) {
            var _, M, S, A, C;
            if (_ = this["fruitcomList"][y], this["polygonInfo"]["has"](_)) C = this["polygonInfo"]["get"](_), S = _["getComponent"](d), (A = _["getComponent"](k)) || (A = _["addComponent"](k)), A["offset"] = C["bindOffset"], A["points"] = C["bindPoints"], A["enabled"] = !0, S["destroy"]();
            (M = _["getComponent"](l))["gravityScale"] = 0, M["allowSleep"] = !0, M["bullet"] = !1, M["angularVelocity"] = 0, M["linearVelocity"] = h["v2"](0, 0), M["angularDamping"] = 0, M["linearDamping"] = 0, M["enabledContactListener"] = !1, M["type"] = b["Static"], w["ins"]["putNode"](_), this["node"]["getChildByName"]("walls")["getChildByName"]("left")["active"] = !1, this["node"]["getChildByName"]("walls")["getChildByName"]("right")["active"] = !1;
          }
        }, n["changeToCircle"] = function (t) {
          var n,
            r,
            i,
            e,
            a = to,
            u = a[10],
            s = a[9],
            o = a[4],
            c = "getComponent",
            f = "apply",
            h = "enabled";
          (i = null, n = t["getComponent"](d), r = t["getComponent"](k)) && (e = function () {
            var t,
              n = to,
              i = n[3],
              e = n[8],
              a = n[4];
            return (t = function () {
              var t,
                n,
                r = to[8],
                i = "bindOffset",
                e = "bindPoints";
              return Pu(t = {}, "bindOffset", 0), Pu(t, "bindPoints", 0), (n = t)["bindOffset"] = 0, n["bindPoints"] = 0, n;
            }["apply"]())["bindOffset"] = r["offset"]["clone"](), t["bindPoints"] = r["points"]["concat"](), t;
          }["apply"](), r["enabled"] = !1, r["destroy"](), this["polygonInfo"]["set"](t, e));
          (i = n || t["addComponent"](d))["enabled"] = !0, i["radius"] = this["getMaxRadius"](t), i["friction"] = .05, i["restitution"] = 0, i["sensor"] = !1, i["apply"]();
        }, n["getMaxRadius"] = function (t) {
          var n = to,
            r = "getComponent";
          return Math["max"](t["getComponent"](c)["width"] / 2, t["getComponent"](c)["height"] / 2);
        }, n["tryPlayCreateSound"] = function () {
          var t,
            n = to,
            r = n[1],
            i = "lastClickSoundTime";
          (t = Date["now"]()) - this["lastClickSoundTime"] >= this["clickSoundInterval"] && (this["lastClickSoundTime"] = t, p["ins"]["play"](A["GAME_SPRAY"], !1, 5));
        }, a;
      }(m))["prototype"], "createPoint", [R], (Pu(x = {}, "configurable", !0), Pu(x, "enumerable", !0), Pu(x, "writable", !0), Pu(x, "initializer", function () {
        return null;
      }), x)), E = D)) || E)), a["_RF"]["pop"]();
    }, T;
  }["bind"](this)["apply"]();
});