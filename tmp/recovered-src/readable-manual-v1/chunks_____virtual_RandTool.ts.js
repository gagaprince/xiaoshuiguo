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
      n = t["createForOfIteratorHelperLoose"];
    }, function (t) {
      var n = to;
      r = t["cclegacy"], i = t["color"];
    }, function (t) {
      e = t["default"];
    }], u["execute"] = function () {
      var a = to,
        u = "_RF";
      r["_RF"]["push"]({}, "1eb62NLT9NKcqi4uXgrDyzG", "RandTool", void 0), t("default", function () {
        var t,
          r = to,
          a = r[12];
        return (t = function () {})["RandNumber"] = function (t, n) {
          var r = to;
          return Math["floor"](Math["random"]() * (n - t - 1)) + t + 1;
        }, t["RandIncludeMin"] = function (t, n) {
          var r = to;
          return Math["floor"](Math["random"]() * (n - t)) + t;
        }, t["RandIncludeMax"] = function (t, n) {
          var r = to;
          return Math["floor"](Math["random"]() * (n - t)) + t + 1;
        }, t["RandIncludeAll"] = function (t, n) {
          var r = to;
          return Math["floor"](Math["random"]() * (n - t + 1)) + t;
        }, t["RandPlusOrMinus"] = function () {
          return 0 == t["RandIncludeAll"](0, 1) ? -1 : 1;
        }, t["RandPlusOrMinusAsBool"] = function () {
          return 0 !== t["RandIncludeAll"](0, 1);
        }, t["RandArray"] = function (t) {
          var n = to;
          return !!(t && t["length"] > 0) && (t["sort"](function () {
            return .5 - Math["random"]();
          }), !0);
        }, t["GetRandColor"] = function (n) {
          var r,
            e,
            a,
            u = to,
            s = 255,
            o = "RandIncludeAll";
          return void 0 === n && (n = 255), r = t["RandIncludeAll"](0, 255), a = t["RandIncludeAll"](0, 255), e = t["RandIncludeAll"](0, 255), i(r, a, e, n);
        }, t["GetArrayRandIndex"] = function (n) {
          var r = to,
            i = "length";
          return null == n || n["length"] <= 0 ? -1 : 0 === n["length"] ? 0 : t["RandIncludeMin"](0, n["length"]);
        }, t["GetRandDataInArray"] = function (r, i) {
          var e = to,
            a = "push";
          if (r["length"] <= i) return r;
          for (var u, s = [], o = n(r); !(u = o())["done"];) {
            var c;
            c = u["value"], s["push"](c);
          }
          t["RandArray"](s);
          for (var f = [], h = 0; h < i; h++) f["push"](s[h]);
          return f;
        }, t["GetLotteryResult"] = function (r) {
          var i = to,
            a = i[3],
            u = i[1],
            o = "length",
            c = "Min",
            f = "Max",
            h = "Index";
          if (null === r) return -1;
          if (r["length"] <= 0) return -1;
          for (var v = 0, l = new e(), b = 0; b < r["length"]; b++) {
            var d;
            (d = new s())["Min"] = v, v = r[b]["Ratio"] + v, d["Max"] = v, d["Index"] = b, l["add"](d);
          }
          for (var k, m = t["RandIncludeMin"](0, v), p = n(l); !(k = p())["done"];) {
            var g;
            if (m >= (g = k["value"])["Min"] && m < g["Max"]) return g["Index"];
          }
          return -1;
        }, t;
      }()), t("RandResultData", function (t, n) {
        var r = to,
          i = "Key",
          e = "Ratio";
        this["Key"] = void 0, this["Ratio"] = void 0, this["Key"] = t, this["Ratio"] = n;
      });
      var s = t("RandAreaData", function () {
        var t = to,
          n = t[1];
        this["Min"] = void 0, this["Max"] = void 0, this["Index"] = void 0;
      });
      r["_RF"]["pop"]();
    }, u;
  }["bind"](this)["apply"]();
});