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
    A = to;
  return function () {
    var A,
      C,
      x = to[5],
      T = "setters",
      L = "execute";
    return Pu(A = {}, "setters", 0), Pu(A, "execute", 0), (C = A)["setters"] = [function (t) {
      n = t["createForOfIteratorHelperLoose"];
    }, function (t) {
      var n = to,
        m = n[2],
        p = n[4],
        g = n[9],
        y = n[3],
        w = n[7];
      r = t["cclegacy"], i = t["math"], e = t["Sprite"], a = t["UITransform"], u = t["screen"], s = t["view"], o = t["find"], c = t["tween"], f = t["Animation"], h = t["Texture2D"], v = t["SpriteFrame"], l = t["Node"], b = t["Label"], d = t["color"], k = t["UIOpacity"];
    }, function (t) {
      m = t["default"];
    }, function (t) {
      p = t["EventDispatcher"];
    }, function (t) {
      g = t["toXY"];
    }, function (t) {
      y = t["default"];
    }, function (t) {
      w = t["default"];
    }, function (t) {
      var n = to[5];
      _ = t["default"], M = t["ResType"];
    }, function (t) {
      S = t["default"];
    }, null], C["execute"] = function () {
      var A = to,
        C = "_RF";
      r["_RF"]["push"]({}, "896ecNg16hAz4aUghuhjl5O", "SOUtil", void 0), t("default", function () {
        var t,
          r = to,
          p = r[10],
          A = r[4],
          C = r[9],
          x = r[7],
          T = r[20],
          L = r[22],
          I = r[14];
        return (t = function () {})["emit"] = function (t, n) {
          var r = to;
          this["_eventListener"]["emit"](t, n);
        }, t["on"] = function (t, n, r, i) {
          var e = to;
          this["_eventListener"]["on"](t, n, r, i);
        }, t["offAllCaller"] = function (t) {
          var n = to;
          this["_eventListener"]["offAllCaller"](t);
        }, t["off"] = function (t, n, r) {
          var i = to;
          this["_eventListener"]["off"](t, n, r);
        }, t["offAll"] = function (t) {
          var n = to;
          this["_eventListener"]["offAll"](t);
        }, t["clamp"] = function (t, n, r) {
          return t > r ? r : t < n ? n : t;
        }, t["getRandomArray"] = function (t, n, r) {
          var i,
            e,
            a,
            u = to,
            s = "length",
            o = "push";
          if (!(t instanceof Array)) return [];
          for (i = [], n = (e = t["length"]) < n ? e : n; i["length"] < n;) {
            var c;
            (c = t[0, a = e - 1, Math["floor"](Math["random"]() * (a - 0 + 1) + 0)]) && (r ? i["indexOf"](c) < 0 && i["push"](c) : i["push"](c));
          }
          return i;
        }, t["getRandomIntInclusive"] = function (t, n) {
          var r = to,
            i = "floor";
          return t = Math["ceil"](t), n = Math["floor"](n), Math["floor"](Math["random"]() * (n - t + 1)) + t;
        }, t["random"] = function (t, n) {
          var r = to;
          return Math["floor"](Math["random"]() * (n - t + 1) + t);
        }, t["randomFloat"] = function (t, n) {
          var r,
            i = to,
            e = "random";
          return r = Math["random"]() * (n - t + 1) + t, r = this["clamp"](r, t, n), Math["random"]() * (n - t) + t;
        }, t["randomNum"] = function (t, n) {
          var r,
            i,
            e = to;
          return i = n - t, (r = Math["round"](Math["random"]() * i + t)) >= n && (r = n), r <= t && (r = t), r;
        }, t["getCenter"] = function (t, n) {
          var r,
            i = to[1];
          return r = Math["min"](t, n), Math["max"](t, n) - r + r;
        }, t["getRandomArr"] = function (t) {
          var n,
            r,
            i = to;
          for (n = new Array(), r = 0; r < t["length"]; r++) n[r] = t[r];
          return n["sort"](function () {
            return .5 - Math["random"]();
          }), n;
        }, t["convetOtherNodeSpace"] = function (t, n) {
          var r,
            i = to[20];
          return t && n ? (r = this["localConvertWorldPoint"](t), this["worldConvertLocalPoint"](n, r)) : null;
        }, t["convetOtherNodeSpaceAR"] = function (t, n) {
          var r,
            i = to[22];
          return t && n ? (r = this["localConvertWorldPointAR"](t), this["worldConvertLocalPointAR"](n, r)) : null;
        }, t["localConvertWorldPointAR"] = function (t) {
          var n = to;
          return t ? t["convertToWorldSpaceAR"](i["v3"](0, 0, 0)) : null;
        }, t["localConvertWorldPoint"] = function (t) {
          var n = to;
          return t ? t["convertToWorldSpace"](i["v2"](0, 0)) : null;
        }, t["worldConvertLocalPointAR"] = function (t, n) {
          return t ? t["convertToNodeSpaceAR"](n) : null;
        }, t["worldConvertLocalPoint"] = function (t, n) {
          return t ? t["convertToNodeSpace"](n) : null;
        }, t["setSpriteGray"] = function (t, r, i) {
          var a,
            u = to;
          (a = t["getComponent"](e)) && (a["grayscale"] = r);
          for (var s, o = n(t["children"]); !(s = o())["done"];) {
            var c;
            c = s["value"], this["setSpriteGray"](c, r);
          }
        }, t["httpRequest"] = function (t, n, r, i) {
          var e,
            a = to,
            u = a[2],
            s = a[7],
            o = a[14];
          void 0 === i && (i = "POST"), (e = new XMLHttpRequest())["onreadystatechange"] = function () {
            var t = to;
            if (4 === e["readyState"]) if (200 === e["status"]) try {
              var n;
              n = JSON["parse"](e["responseText"]), r && r(n);
            } catch (t) {
              r && r(null);
            } else r && r(null);
          }, e["onerror"] = function (t) {
            r && r(null);
          }, e["ontimeout"] = function (t) {
            r && r(null);
          }, e["open"](i, t, !0), e["setRequestHeader"]("Content-Type", "application/json"), e["send"](JSON["stringify"](n));
        }, t["isSameDay"] = function (t) {
          var n,
            r,
            i = to,
            e = "getFullYear",
            a = "getMonth",
            u = "getDate";
          return !!t && (n = new Date(t), r = new Date(), n["getFullYear"]() === r["getFullYear"]() && n["getMonth"]() === r["getMonth"]() && n["getDate"]() === r["getDate"]());
        }, t["SetSpriteSizeWidth"] = function (t, n) {
          var r,
            i,
            e,
            u = to,
            s = "spriteFrame",
            o = "getOriginalSize";
          t && t["spriteFrame"] && (i = (r = t["spriteFrame"])["getOriginalSize"]()["width"], e = r["getOriginalSize"]()["height"] * (n / i), t["node"]["getComponent"](a)["setContentSize"](n, e));
        }, t["SetSpriteSizeHeight"] = function (t, n) {
          var r,
            i,
            e = to,
            u = "spriteFrame",
            s = "getOriginalSize";
          t && t["spriteFrame"] && (i = (r = t["spriteFrame"])["getOriginalSize"]()["width"] * (n / r["getOriginalSize"]()["height"]), t["node"]["getComponent"](a)["setContentSize"](i, n));
        }, t["computWxPosition"] = function (t, n) {
          var r,
            i,
            e,
            o,
            c = to,
            f = c[10],
            h = "height",
            v = "width";
          return o = function () {
            var t,
              n = to,
              r = n[3];
            return (t = function () {
              var t,
                n,
                r = to,
                i = "left",
                e = "top",
                a = "width",
                u = "height";
              return Pu(t = {}, "left", 0), Pu(t, "top", 0), Pu(t, "width", 0), Pu(t, "height", 0), (n = t)["left"] = 0, n["top"] = 0, n["width"] = 0, n["height"] = 0, n;
            }["apply"]())["left"] = 0, t["top"] = 0, t["width"] = 0, t["height"] = 0, t;
          }["apply"](), r = t["getComponent"](a)["getBoundingBoxToWorld"](), e = u["devicePixelRatio"], i = s["getScaleX"]() / e, o["left"] = r[At] * i, o["top"] = n["screenHeight"] - (r[St] + r["height"]) * i, o["width"] = r["width"] * i, o["height"] = r["height"] * i, o;
        }, t["showFlyGold"] = function (n, r, e) {
          var a,
            u,
            s,
            f,
            h,
            v,
            l = to,
            b = ro,
            d = l[5],
            k = l[6],
            m = l[0],
            p = l[3],
            y = 70,
            _ = "v3",
            M = "add",
            A = "RandIncludeAll",
            C = "to",
            x = "apply",
            T = "start";
          f = o("Canvas/UI"), s = w["ins"]["getNode"]("flyGold", f), u = g(n, f), a = g(r, f), s["position"] = i["v3"](u), h = i["v3"]((a[At] + u[At]) / 2, (a[St] + u[St]) / 2, 0)["add"](i["v3"](0, S["RandIncludeAll"](-100, -150), 0)), v = a["add"](i["v3"](S["RandIncludeAll"](30, 70), S["RandIncludeAll"](-70, -120), 0)), s["angle"] = 0, c(s)["parallel"](c(s)["to"](e, function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "position";
              return (t = Pu({}, "position", 0))["position"] = 0, t;
            }["apply"]())["position"] = i["v3"](a), t;
          }["apply"](), function () {
            var n,
              r = to;
            return (n = function () {
              var t,
                n = "onUpdate";
              return (t = Pu({}, "onUpdate", 0))["onUpdate"] = 0, t;
            }["apply"]())["onUpdate"] = function (n, r) {
              var e,
                u = to;
              e = new i["Vec3"](), t["quadraticBezier"](h, v, a, r, e), n["setPosition"](e);
            }, n;
          }["apply"]()), c(s)["to"](e, function () {
            var t,
              n = to[3];
            return (t = function () {
              var t,
                n = "angle";
              return (t = Pu({}, "angle", 0))["angle"] = 0, t;
            }["apply"]())["angle"] = -360, t;
          }["apply"]())["start"]())["call"](function () {
            var t = to;
            w["ins"]["putNode"](s);
          })["start"]();
        }, t["quadraticBezier"] = function (t, n, r, i, e) {
          var a;
          a = 1 - i, e[At] = a * a * t[At] + 2 * i * a * n[At] + i * i * r[At], e[St] = a * a * t[St] + 2 * i * a * n[St] + i * i * r[St], e[Qe] = a * a * t[Qe] + 2 * i * a * n[Qe] + i * i * r[Qe];
        }, t["showFlyObj"] = function (t, n, r, e, a, u) {
          var s,
            f,
            h,
            v,
            l = to,
            b = ro,
            d = l[3],
            k = l[0],
            m = 70,
            p = "v3",
            y = "v2",
            _ = "add",
            M = "RandIncludeAll";
          f = o("Canvas/UI"), v = w["ins"]["getNode"](t, f), a && a(v), s = g(n, f), h = g(r, f), v["position"] = i["v3"](s), i["v2"]((h[At] + s[At]) / 2, (h[St] + s[St]) / 2)["add"](i["v2"](0, S["RandIncludeAll"](-100, -150))), h["add"](i["v3"](S["RandIncludeAll"](30, 70), S["RandIncludeAll"](-70, -120), 0)), v["angle"] = 0, c(v)["to"](e, function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "position";
              return (t = Pu({}, "position", 0))["position"] = 0, t;
            }["apply"]())["position"] = i["v3"](h), t;
          }["apply"]())["call"](function () {
            var t = to;
            w["ins"]["putNode"](v), u && u();
          })["start"]();
        }, t["showLabelUp"] = function (t, n) {
          var r,
            e,
            a,
            u = to,
            s = u[5];
          e = o("Canvas/UI"), (r = w["ins"]["getNode"]("labelUp", e))["getComponent"](m)["SetData"](n), a = g(t, e), r["position"] = i["v3"](a);
        }, t["showBoomEff"] = function (t) {
          var n,
            r,
            e,
            a = to,
            u = a[5];
          n = o("Canvas/UI"), (r = w["ins"]["getNode"]("boomEff", n))["getComponent"](f)["play"](), e = g(t, n), r["position"] = i["v3"](e);
        }, t["getBound"] = function (t) {
          var n = to;
          return t ? t["getComponent"](a)["getBoundingBoxToWorld"]() : null;
        }, t["updateAvatar"] = function (t, n) {
          var r,
            i = to,
            e = "wx";
          window["wx"] && ((r = window["wx"]["createImage"]())["onload"] = function () {
            var t,
              i = to,
              e = "spriteFrame";
            (t = new h())["image"] = r, n && (n["spriteFrame"] = new v(), n["spriteFrame"]["texture"] = t);
          }, r["src"] = t);
        }, t["strTipLab"] = function (t, n, r, e) {
          var u,
            s,
            o,
            f,
            h = to,
            v = ro,
            m = h[3],
            p = h[6],
            g = h[2],
            w = h[10],
            _ = h[4],
            M = h[13],
            S = "addComponent",
            A = "getComponent",
            C = "to",
            x = "apply";
          f = y["uiMgr"]["getLayer"](n)["node"], (o = (s = new l("DynamicLabel"))["addComponent"](b))["string"] = t, o["fontSize"] = e, o["lineHeight"] = e + 5, o["horizontalAlign"] = b["HorizontalAlign"]["CENTER"], o["isBold"] = !0, s["getComponent"](a)["width"] = r, s["getComponent"](a)["height"] = 40, s["setPosition"](0, -100), o["outlineColor"] = d(0, 0, 0), o["outlineWidth"] = 1, o["enableOutline"] = !0, f["addChild"](s), u = s["getComponent"](k) || s["addComponent"](k), c(s)["parallel"](c(u)["to"](.8, function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "opacity";
              return (t = Pu({}, "opacity", 0))["opacity"] = 0, t;
            }["apply"]())["opacity"] = 100, t;
          }["apply"]()), c(s)["to"](.8, function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "position";
              return (t = Pu({}, "position", 0))["position"] = 0, t;
            }["apply"]())["position"] = new i["Vec3"](s[At], s[St] + 200), t;
          }["apply"]()))["call"](function () {
            s["destroy"]();
          })["start"]();
        }, t["randomRange"] = function (t, n, r) {
          var i = to,
            e = "floor",
            a = "random";
          return void 0 === r && (r = !0), r ? (t = Math["ceil"](t), n = Math["floor"](n), Math["floor"](Math["random"]() * (n - t + 1)) + t) : Math["random"]() * (n - t) + t;
        }, t["convertTimeString"] = function (t) {
          var n,
            r,
            i,
            e,
            a = to,
            u = 60,
            s = "floor";
          return e = Math["floor"](t / 60), r = Math["floor"](e / 10), i = e % 10, n = Math["floor"](t % 60), r + "" + i + xt + (n < 10 ? it + n : n + "");
        }, t["imgEff"] = function (t, n, r, u, s, o) {
          var f,
            h,
            v,
            b,
            d,
            k,
            m,
            p,
            g = to,
            y = ro,
            w = g[1],
            S = g[4],
            A = g[2],
            C = g[6],
            x = g[3],
            T = 100,
            L = "getComponent",
            I = "convertToWorldSpaceAR",
            R = "Vec3",
            E = "ZERO",
            D = "convertToNodeSpaceAR",
            N = "random",
            P = "to",
            G = "apply";
          (d = new l("img"))["addComponent"](e)["spriteFrame"] = _["ins"]["getRes"](M["Sprite"], "game", t), s["addChild"](d), h = n["getComponent"](a)["convertToWorldSpaceAR"](i["Vec3"]["ZERO"]), v = r["getComponent"](a)["convertToWorldSpaceAR"](i["Vec3"]["ZERO"]), m = s["getComponent"](a)["convertToNodeSpaceAR"](h), b = s["getComponent"](a)["convertToNodeSpaceAR"](v), d["position"] = m, k = 100 * (Math["random"]() - .5), f = 100 * (Math["random"]() - .5), p = i["v3"](m[At] + k, m[St] + f, m[Qe]), c(d)["to"](.2 * u, function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "position";
              return (t = Pu({}, "position", 0))["position"] = 0, t;
            }["apply"]())["position"] = p, t;
          }["apply"](), function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "easing";
              return (t = Pu({}, "easing", 0))["easing"] = 0, t;
            }["apply"]())["easing"] = "quadOut", t;
          }["apply"]())["to"](.8 * u, function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "position";
              return (t = Pu({}, "position", 0))["position"] = 0, t;
            }["apply"]())["position"] = b, t;
          }["apply"](), function () {
            var t,
              n = to,
              r = n[4];
            return (t = function () {
              var t,
                n = "easing";
              return (t = Pu({}, "easing", 0))["easing"] = 0, t;
            }["apply"]())["easing"] = "backIn", t;
          }["apply"]())["delay"](.01)["call"](function () {
            d["destroy"](), o && o();
          })["start"]();
        }, t["strTipLabUseItem"] = function (t, n, r, e) {
          var u,
            s,
            o,
            f,
            h = to,
            v = h[10],
            m = h[4],
            p = h[6],
            g = h[13],
            y = h[3],
            w = "addComponent",
            _ = "getComponent",
            M = "to",
            S = "apply";
          s = n, (o = (u = new l("DynamicLabel"))["addComponent"](b))["string"] = t, o["fontSize"] = e, o["lineHeight"] = e + 5, o["horizontalAlign"] = b["HorizontalAlign"]["CENTER"], o["isBold"] = !0, u["getComponent"](a)["width"] = r, u["getComponent"](a)["height"] = 40, u["setPosition"](0, 0), o["outlineColor"] = d(0, 0, 0), o["outlineWidth"] = 1, o["enableOutline"] = !0, s["addChild"](u), f = u["getComponent"](k) || u["addComponent"](k), c(u)["parallel"](c(f)["to"](.8, function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "opacity";
              return (t = Pu({}, "opacity", 0))["opacity"] = 0, t;
            }["apply"]())["opacity"] = 100, t;
          }["apply"]()), c(u)["to"](.8, function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "position";
              return (t = Pu({}, "position", 0))["position"] = 0, t;
            }["apply"]())["position"] = new i["Vec3"](u[At], u[St] + 200), t;
          }["apply"]()))["call"](function () {
            u["destroy"]();
          })["start"]();
        }, t["shuffleArray"] = function (t) {
          for (var n = to, r = n[3], i = n[4], e = t["slice"](), a = e["length"] - 1; a > 0; a--) {
            var u, s;
            u = [e[s = Math["floor"](Math["random"]() * (a + 1))], e[a]], e[a] = u[0], e[s] = u[1];
          }
          return e;
        }, t;
      }())["_eventListener"] = new p(), r["_RF"]["pop"]();
    }, C;
  }["bind"](this)["apply"]();
});