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
    b = to,
    d = 1;
  return function () {
    var b,
      k,
      m = to[5],
      p = "setters",
      g = "execute";
    return 0, Pu(b = {}, "setters", 0), Pu(b, "execute", 0), (k = b)["setters"] = [function (t) {
      n = t["createClass"];
    }, function (t) {
      var n = to,
        b = n[6],
        d = n[3],
        k = n[4],
        m = n[2];
      r = t["cclegacy"], i = t["color"], e = t["director"], a = t["Canvas"], u = t["UITransform"], s = t["Node"], o = t["Layers"], c = t["Label"], f = t["Graphics"], h = t["UIOpacity"], v = t["tween"], l = t["math"];
    }], k["execute"] = function () {
      var b = to,
        k = b[2],
        m = "_RF";
      r["_RF"]["push"]({}, "2c30esmzUVMSbo3h4LMUgQv", "GbzToastManager", void 0), t("default", function () {
        var t,
          r = to,
          b = r[2];
        return (t = function () {})["getIns"] = function () {
          var n = "_ins";
          return null === this["_ins"] && (this["_ins"] = new t()), this["_ins"];
        }, t["prototype"]["show"] = function (t, n) {
          for (var r, b, k, m, p, g, y, w, _, M, S, A, C, x, T, L, I = to, R = ro, E = I[3], D = I[2], N = I[4], P = I[6], G = I[0], O = I[13], F = I[11], B = I[10], z = 20, U = 102, H = "getComponent", V = "height", W = "fontSize", J = "apply", j = "length", q = "arc", K = "width", Y = "PI", X = "lineTo", Z = "addChild", Q = "CENTER", $ = "node", tt = "addComponent", nt = 0, rt = 1; nt < 11;) switch (++nt, rt) {
            case 9:
              L["layer"] = o["Enum"]["UI_2D"], rt = 5;
              break;
            case 0:
              S["getComponent"](u)["height"] = m["fontSize"] * b, rt = 10;
              break;
            case 8:
              v(L)["sequence"](v(L)["by"](k, function () {
                var t,
                  n = to;
                return (t = function () {
                  var t,
                    n = "position";
                  return (t = Pu({}, "position", 0))["position"] = 0, t;
                }["apply"]())["position"] = l["v3"](0, 0, 0), t;
              }["apply"]()), v(A)["to"](.3, function () {
                var t,
                  n = to;
                return (t = function () {
                  var t,
                    n = "opacity";
                  return (t = Pu({}, "opacity", 0))["opacity"] = 0, t;
                }["apply"]())["opacity"] = 0, t;
              }["apply"]()), v()["call"](function () {
                L["destroy"]();
              }))["start"](), rt = 1;
              break;
            case 4:
              b = 1 + ~~(t["length"] * m["fontSize"] / (3 * p / 5)), rt = 0;
              break;
            case 7:
              M["arc"](-S["getComponent"](u)["width"] / 2, 0, S["getComponent"](u)["height"] / 2 + 20, .5 * Math["PI"], 1.5 * Math["PI"], !0), M["lineTo"](S["getComponent"](u)["width"] / 2, -(S["getComponent"](u)["height"] / 2 + 20)), M["arc"](S["getComponent"](u)["width"] / 2, 0, S["getComponent"](u)["height"] / 2 + 20, 1.5 * Math["PI"], .5 * Math["PI"], !0), M["lineTo"](-S["getComponent"](u)["width"] / 2, S["getComponent"](u)["height"] / 2 + 20), M["fillColor"] = g, M["fill"](), L["addChild"](S), "CENTER" === r ? (L[St] = 0, L[At] = 0) : "TOP" === r ? L[St] = L[St] + C / 5 * 2 : "BOTTOM" === r && (L[St] = L[St] - C / 5 * 2), w["node"]["addChild"](L), rt = 2;
              break;
            case 10:
              M = L["addComponent"](f), rt = 7;
              break;
            case 1:
              void 0 === t && (t = ""), rt = 3;
              break;
            case 5:
              m = (S = new s())["addComponent"](c), rt = 6;
              break;
            case 2:
              A = L["getComponent"](h) || L["addComponent"](h), rt = 8;
              break;
            case 6:
              m["horizontalAlign"] = c["HorizontalAlign"]["CENTER"], m["verticalAlign"] = c["VerticalAlign"]["CENTER"], m["fontSize"] = 30, m["string"] = t, t["length"] * m["fontSize"] > 3 * p / 5 ? (S["getComponent"](u)["width"] = 3 * p / 5, m["overflow"] = c["Overflow"]["RESIZE_HEIGHT"]) : S["getComponent"](u)["width"] = t["length"] * m["fontSize"], rt = 4;
              break;
            case 3:
              r = void 0 === (T = (x = void 0 === n ? {} : n)["gravity"]) ? "CENTER" : T, k = void 0 === (_ = x["duration"]) ? 1 : _, g = void 0 === (y = x["bg_color"]) ? i(102, 102, 102, 200) : y, p = (w = e["getScene"]()["getComponentInChildren"](a))["node"]["getComponent"](u)["width"], C = w["node"]["getComponent"](u)["height"], L = new s(), rt = 9;
          }
        }, n(t, null, [function () {
          var t,
            n = to,
            r = n[1];
          return (t = function () {
            var t,
              n,
              r = to[1],
              i = "key",
              e = "get";
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t)["key"] = 0, n["get"] = 0, n;
          }["apply"]())["key"] = "ins", t["get"] = function () {
            return this["getIns"]();
          }, t;
        }["bind"](this)["apply"]()]), t;
      }())["_ins"] = null, r["_RF"]["pop"]();
    }, k;
  }["bind"](this)["apply"]();
});