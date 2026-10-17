(function (t) {
  var n,
    r,
    i,
    e,
    a = to;
  return function () {
    var a,
      u,
      s = to[5],
      o = "setters",
      c = "execute";
    return Pu(a = {}, "setters", 0), Pu(a, "execute", 0), (u = a)["setters"] = [function (t) {
      n = t["createClass"];
    }, function (t) {
      var n = to;
      r = t["cclegacy"], i = t["math"];
    }, function (t) {
      e = t["default"];
    }], u["execute"] = function () {
      var a,
        u = to,
        s = u[5],
        o = "_RF";
      r["_RF"]["push"]({}, "1092cQW53FOl5JQMe6u+gle", "GridManager", void 0), a = t("refPart", function (t, n, r, i) {
        var e = to,
          a = e[1],
          u = e[2],
          s = "col",
          o = "row",
          c = "type",
          f = "have",
          h = "position",
          v = "stack";
        void 0 === i && (i = null), this["col"] = void 0, this["row"] = void 0, this["type"] = void 0, this["have"] = void 0, this["bg"] = void 0, this["position"] = void 0, this["stack"] = void 0, i || (i = []), this["col"] = t, this["row"] = n, this["position"] = r, this["have"] = !1, this["type"] = i, this["stack"] = null;
      }), t("default", function () {
        var t,
          r,
          u = to,
          s = u[7],
          o = u[6];
        return (t = (r = function () {
          this["part"] = [];
        })["prototype"])["InitPart"] = function (t, n, r, e, a, u) {
          var s = to,
            o = s[2],
            c = "part",
            f = "v2",
            h = "push";
          void 0 === u && (u = 0), this["part"] = [];
          for (var v = 0; v < n; v++) {
            var l, b;
            b = [], l = t, v % 2 == 0 && (l = t - 1);
            for (var d = i["v2"](-(l - 1) / 2 * (e + r), u + v * (a + r)), k = 0; k < l; k++) {
              var m, p;
              m = i["v2"](d[At] + k * (e + r), d[St]), p = this["NewOnePart"](v, k, m), b["push"](p);
            }
            this["part"]["push"](b);
          }
        }, t["InitPart2"] = function (t, n, r, a, u, s) {
          var o = to,
            c = o[2],
            f = "part",
            h = "v2",
            v = "push";
          void 0 === s && (s = 0), this["part"] = [];
          for (var l = 0, b = !1, d = 0; d < n; d++) {
            var k, m, p;
            k = [], p = t, m = a * l / 2, b ? l-- : l++, 4 === l ? b = !0 : 0 === l && (b = !1);
            for (var g = i["v2"](a / 2 - (e["inst"]["halfGameW"] - 5) + m, s + d * (u + r)), y = 0; y < p; y++) {
              var w, _;
              w = i["v2"](g[At] + y * (a + r), g[St]), _ = this["NewOnePart"](d, y, w), k["push"](_);
            }
            this["part"]["push"](k);
          }
        }, t["InitPart7"] = function (t, n, r, e, a, u) {
          var s = to,
            o = s[2],
            c = "part",
            f = "v2",
            h = "push";
          void 0 === u && (u = 0), this["part"] = [];
          for (var v = 0, l = 7, b = 1, d = 0, k = i["v2"](0, 0), m = 0; m < n; m++) {
            var p;
            p = [], 0 === v && b++, 6 === l && d++, k = i["v2"](-((m % 2 != 0 ? t - 1 : t) - 1) / 2 * (e + r), u + m * (a + r));
            for (var g = v; g < l; g++) {
              var y, w;
              w = i["v2"](k[At] + g * (e + r), k[St]), y = this["NewOnePart"](m, g, w), p["push"](y);
            }
            this["part"]["push"](p), 1 === v && (v = 0), 3 === b && (v = 1, b = 0), 7 === l && (l = 6), 3 === d && (l = 7, d = 0);
          }
        }, t["InitPart8"] = function (t, n, r, a, u, s) {
          var o = to,
            c = o[2],
            f = "part",
            h = "inst",
            v = "RandomInt",
            l = "v2",
            b = "push";
          void 0 === s && (s = 0), this["part"] = [];
          for (var d = t, k = 0; k < n; k++) {
            var m;
            m = [], d = 0 === k ? t : k % 2 != 0 ? t - 1 - 2 * e["inst"]["RandomInt"](0, 1) : t - 2 * e["inst"]["RandomInt"](0, 2);
            for (var p = i["v2"](-(d - 1) / 2 * (a + r), s + k * (u + r)), g = 0; g < d; g++) {
              var y, w;
              y = i["v2"](p[At] + g * (a + r), p[St]), w = this["NewOnePart"](k, g, y), m["push"](w);
            }
            this["part"]["push"](m);
          }
        }, t["GetParts"] = function () {
          return this["part"];
        }, t["NewOnePart"] = function (t, n, r) {
          return new a(t, n, r);
        }, n(r, null, [function () {
          var t,
            n = to,
            i = n[1];
          return (t = function () {
            var t,
              n,
              r = to[1],
              i = "key",
              e = "get";
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t)["key"] = 0, n["get"] = 0, n;
          }["apply"]())["key"] = "inst", t["get"] = function () {
            var t = "_inst";
            return this["_inst"] || (this["_inst"] = new r()), this["_inst"];
          }, t;
        }["bind"](this)["apply"]()]), r;
      }())["_inst"] = null, r["_RF"]["pop"]();
    }, u;
  }["bind"](this)["apply"]();
});