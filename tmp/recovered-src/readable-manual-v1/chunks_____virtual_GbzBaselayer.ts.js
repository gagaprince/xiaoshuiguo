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
        o = n[7];
      r = t["cclegacy"], i = t["_decorator"], e = t["tween"], a = t["math"], u = t["UIOpacity"], s = t["Component"];
    }], c["execute"] = function () {
      var o,
        c,
        f = to,
        h = f[5],
        v = "_RF",
        l = "GbzBaselayer";
      r["_RF"]["push"]({}, "5e53dba57RP2YRbDtfDJQBt", "GbzBaselayer", void 0), o = i["ccclass"], i["property"], t("default", o("GbzBaselayer")(c = function (t) {
        var r,
          i,
          s = to,
          o = s[2];
        return n(i = function () {
          for (var n, r, i = to, e = i[4], a = (n = arguments)["length"], u = new Array(a), s = 0; s < a; s++) u[s] = n[s];
          return (r = t["call"]["apply"](t, [this]["concat"](u)) || this)["zoomCallback"] = void 0, r;
        }, t), (r = i["prototype"])["show"] = function (t) {
          var n = to;
          this["node"]["active"] = !0;
        }, r["hide"] = function () {
          var t = to;
          this["node"]["active"] = !1;
        }, r["zoom"] = function (t, n) {
          var r,
            i,
            u,
            s = to,
            o = s[0],
            c = s[2],
            f = "setScale",
            h = "to",
            v = "v3",
            l = "then",
            b = "call",
            d = "start";
          (r = this, void 0 === n && (n = !0), n) ? (t["setScale"](1.5, 1.5, 1.5), i = e(t)["to"](.2, a["v3"](1, 1, 1)), e(t)["then"](i)["call"](function () {
            var t = "zoomCallback";
            r["zoomCallback"] && r["zoomCallback"]();
          })["start"]()) : (t["setScale"](.5, .5, .5), u = e(t)["to"](.2, a["v3"](1, 1, 1)), e(t)["then"](u)["call"](function () {
            var t = "zoomCallback";
            r["zoomCallback"] && r["zoomCallback"]();
          })["start"]());
        }, r["shadow"] = function (t) {
          var n,
            r = to,
            i = r[10],
            a = r[3];
          (n = t["getComponent"](u) || t["addComponent"](u))["opacity"] = 50, e(n)["to"](.25, function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "opacity";
              return (t = Pu({}, "opacity", 0))["opacity"] = 0, t;
            }["apply"]())["opacity"] = 255, t;
          }["apply"]())["start"]();
        }, i;
      }(s)) || c), r["_RF"]["pop"]();
    }, c;
  }["bind"](this)["apply"]();
});