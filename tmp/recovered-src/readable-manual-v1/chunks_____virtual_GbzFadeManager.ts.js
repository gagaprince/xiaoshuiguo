(function (t) {
  var n,
    r,
    i,
    e,
    a,
    u,
    s,
    o = to;
  return function () {
    var o,
      c,
      f = to[5],
      h = "setters",
      v = "execute";
    return Pu(o = {}, "setters", 0), Pu(o, "execute", 0), (c = o)["setters"] = [function (t) {
      n = t["inheritsLoose"];
    }, function (t) {
      var n = to,
        s = n[7];
      r = t["cclegacy"], i = t["_decorator"], e = t["UIOpacity"], a = t["tween"], u = t["Component"];
    }, function (t) {
      s = t["default"];
    }], c["execute"] = function () {
      var o,
        c,
        f = to,
        h = f[5],
        v = "_RF";
      r["_RF"]["push"]({}, "b95ecbzeLNL74WI7+VKg9n8", "GbzFadeManager", void 0), o = i["ccclass"], i["property"], t("default", o(c = function (t) {
        var r,
          i,
          u = to;
        return n(i = function () {
          var n;
          return n = arguments, t["apply"](this, n) || this;
        }, t), (r = i["prototype"])["onLoad"] = function () {
          var t = to;
          this["node"]["active"] = !1, s["setFadeMgr"](this);
        }, r["in"] = function (t) {
          var n;
          return n = this, void 0 === t && (t = .19), new Promise(function (r) {
            var i,
              u = to,
              s = u[3],
              o = "node";
            n["node"]["active"] = !0, (i = n["node"]["getComponent"](e)) && (i["opacity"] = 0, a(i)["to"](t, function () {
              var t,
                n = to;
              return (t = function () {
                var t,
                  n = "opacity";
                return (t = Pu({}, "opacity", 0))["opacity"] = 0, t;
              }["apply"]())["opacity"] = 255, t;
            }["apply"]())["call"](function () {
              r(null);
            })["start"]());
          });
        }, r["out"] = function (t) {
          var n;
          return n = this, void 0 === t && (t = .19), new Promise(function (r) {
            var i,
              u = to,
              s = u[3],
              o = "node";
            n["node"]["active"] = !0, (i = n["node"]["getComponent"](e)) && (i["opacity"] = 255, a(i)["to"](t, function () {
              var t,
                n = to;
              return (t = function () {
                var t,
                  n = "opacity";
                return (t = Pu({}, "opacity", 0))["opacity"] = 0, t;
              }["apply"]())["opacity"] = 0, t;
            }["apply"]())["call"](function () {
              var t = to;
              n["node"]["active"] = !1, r(null);
            })["start"]());
          });
        }, i;
      }(u)) || c), r["_RF"]["pop"]();
    }, c;
  }["bind"](this)["apply"]();
});