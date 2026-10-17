(function (t) {
  var createForOfIteratorHelperLoose, createClass, cclegacy, math;
  return function () {
    var a, u;
    return Pu(a = {}, "setters", 0), Pu(a, "execute", 0), (u = a).setters = [function (t) {
      createForOfIteratorHelperLoose = t["createForOfIteratorHelperLoose"], createClass = t["createClass"];
    }, function (t) {
      cclegacy = t["cclegacy"], math = t["math"];
    }, null], u.execute = function () {
      cclegacy._RF["push"]({}, "5907663yQJJTI0B3dKE8H3f", "LayoutRectSafe", void 0), t("default", function () {
        var t, i;
        return (t = (i = function () {})["prototype"])["findSafePosition"] = function (t, n, r, i) {
          var a, u, s, o, c, f, h, v, l, b, d, k, m, p;
          if (void 0 === i && (i = {}), f = (m = i)["margin"], a = void 0 === f ? 1.28 : f, v = m["maxAttempts"], p = void 0 === v ? 280 : v, c = void 0 === (u = m["preferY"]) ? 0 : u, h = m["safeMargin"], l = void 0 === h ? 12 : h, o = void 0 === (d = m["fallbackMode"]) ? "repulsion" : d, b = void 0 === (k = m["fallbackStrategy"]) ? "repulsion" : k, (s = function () {
            var n;
            return (n = function () {
              var t, n;
              return Pu(t = {}, "xMin", 0), Pu(t, "xMax", 0), Pu(t, "yMin", 0), Pu(t, "yMax", 0), (n = t).xMin = 0, n.xMax = 0, n.yMin = 0, n.yMax = 0, n;
            }["apply"]()).xMin = t.xMin + r + l, n.xMax = t.xMax - r - l, n.yMin = t.yMin + r + l, n.yMax = t.yMax - r - l, n;
          }.apply()).xMin >= s.xMax || s.yMin >= s.yMax) return this._getFallbackPosition(t, n, r, o, c, b);
          for (var E = 0, D = [function () {
              var r = function () {
                var t,
                  e = (Pu(t = {}, "marginMul", 0), Pu(t, "tries", 0), t);
                return e.marginMul = 0, e.tries = 0, e;
              }["apply"]();
              return r["marginMul"] = a, r["tries"] = Math["floor"](.55 * p), r;
            }.apply(), function () {
              var r = function () {
                var t,
                  e = (Pu(t = {}, "marginMul", 0), Pu(t, "tries", 0), t);
                return e.marginMul = 0, e.tries = 0, e;
              }["apply"]();
              return r["marginMul"] = .86 * a, r["tries"] = Math["floor"](.3 * p), r;
            }.apply(), function () {
              var r = function () {
                var t,
                  e = (Pu(t = {}, "marginMul", 0), Pu(t, "tries", 0), t);
                return e.marginMul = 0, e.tries = 0, e;
              }["apply"]();
              return r["marginMul"] = 1.1, r["tries"] = Math["floor"](.15 * p), r;
            }.apply()]; E < D["length"]; E++) for (var N = D[E], P = 0; P < N["tries"]; P++) {
            var G, O, F, B, z;
            if (G = s.xMin + Math.random() * (s.xMax - s.xMin), O = void 0, c > 0) z = Math["max"](c - .28 * (t.yMax - t.yMin), s.yMin), B = Math["min"](c + .65 * (t.yMax - t.yMin), s.yMax), O = z + Math.random() * (B - z);else O = s.yMin + Math.random() * (s.yMax - s.yMin);
            if (F = math["v2"](G, O), this["_isPositionSafe"](F, n, r, N["marginMul"])) return F;
          }
          return this._getFallbackPosition(t, n, r, o, c, b);
        }, t["_isPositionSafe"] = function (t, r, i, a) {
          for (var u, f = createForOfIteratorHelperLoose(r); !(u = f())["done"];) {
            var h;
            if (h = u["value"], math["Vec2"]["distance"](t, h["position"]) < (i + h["radius"]) * a) return !1;
          }
          return !0;
        }, t["_getFallbackPosition"] = function (t, n, r, i, a, u) {
          var s, o, c, f, h, v;
          if (void 0 === u && (u = "repulsion"), o = t.xMin + r + 12, h = t.xMax - r - 12, c = t.yMin + r + 12, v = (f = t.yMax - r - 12) - c, (s = h - o) <= 0 || v <= 0) return math.v2(.5 * (t.xMin + t.xMax), a > 0 ? a : .6 * (t.yMax + t.yMin));
          switch (i) {
            case "null":
              return null;
            case "random":
              return math.v2(o + Math.random() * s, c + Math.random() * v);
            case "center":
              return math.v2(.5 * (t.xMin + t.xMax), a > 0 ? a : .6 * (t.yMax + t.yMin));
            case "repulsion":
            default:
              if (0 === n.length) return math.v2(.5 * (t.xMin + t.xMax), a > 0 ? a : .65 * t.yMax);
              var E = n[Math.floor(Math.random() * n.length)],
                D = math.v2(2 * Math.random() - 1, .9 * Math.random() + .4)["normalize"](),
                N = Math.max(3.2 * r, 90),
                P = E.position.x + D.x * N,
                G = E.position.y + D.y * N;
              if (P = Math.max(o, Math.min(h, P)), G = Math.max(c, Math.min(f, G)), this._isPositionSafe(math.v2(P, G), n, r, 1.6)) return math.v2(P, G);
          }
          switch (u) {
            case "perimeterFirst":
              var O,
                F,
                B = Math.min(.25 * s, .25 * v, 80);
              switch (Math.floor(4 * Math.random())) {
                case 0:
                  O = o + Math.random() * s, F = f - Math.random() * B;
                  break;
                case 1:
                  O = o + Math.random() * s, F = c + Math.random() * B;
                  break;
                case 2:
                  O = o + Math.random() * B, F = c + Math.random() * v;
                  break;
                case 3:
                  O = h - Math.random() * B, F = c + Math.random() * v;
              }
              var z = math.v2(O, F);
              return this._isPositionSafe(z, n, r, 1.4) ? z : math.v2(o + Math.random() * s, c + Math.random() * v);
            case "centerFirst":
              var U = o + .3 * s,
                H = h - .3 * s,
                V = c + .3 * v,
                W = f - .3 * v;
              return math.v2(U + Math.random() * (H - U), V + Math.random() * (W - V));
            case "random":
            default:
              return math.v2(o + Math.random() * s, c + Math.random() * v);
          }
        }, createClass(i, null, [function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t).key = 0, n.get = 0, n;
          }["apply"]())["key"] = "inst", t["get"] = function () {
            return null == this._instance && (this._instance = new i()), this._instance;
          }, t;
        }["bind"](this)["apply"]()]), i;
      }())["_instance"] = null, cclegacy._RF["pop"]();
    }, u;
  }["bind"](this)["apply"]();
});