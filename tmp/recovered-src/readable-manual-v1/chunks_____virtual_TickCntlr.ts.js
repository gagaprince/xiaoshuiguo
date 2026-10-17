(function (t) {
  var n,
    r,
    i,
    e,
    a,
    u,
    s = to;
  return function () {
    var s,
      o,
      c = to[5],
      f = "setters",
      h = "execute";
    return Pu(s = {}, "setters", 0), Pu(s, "execute", 0), (o = s)["setters"] = [function (t) {
      n = t["inheritsLoose"];
    }, function (t) {
      var n = to,
        u = n[6];
      r = t["cclegacy"], i = t["Node"], e = t["director"], a = t["Component"];
    }, function (t) {
      u = t["reporter"];
    }], o["execute"] = function () {
      var s = to,
        o = s[2],
        c = "_RF",
        f = "tickUpdate",
        h = "tickSec";
      r["_RF"]["push"]({}, "4e70dHng9VPdq11Wr0GiT+y", "TickCntlr", void 0), t("tickUpdate", "tickUpdate"), t("tickSec", "tickSec"), t("default", function (t) {
        var r,
          a,
          s = to,
          o = s[7];
        return n(a = function () {
          for (var n, r, i = to, e = i[4], a = i[2], u = (n = arguments)["length"], s = new Array(u), o = 0; o < u; o++) s[o] = n[o];
          return (r = t["call"]["apply"](t, [this]["concat"](s)) || this)["startTime"] = void 0, r["time"] = void 0, r;
        }, t), a["ins"] = function () {
          var t,
            n = to,
            r = "_ins";
          this["_ins"] || ((t = new i())["name"] = "TickCntlr", e["addPersistRootNode"](t), this["_ins"] = t["addComponent"](a));
          return this["_ins"];
        }, (r = a["prototype"])["start"] = function () {
          var t = to,
            n = t[7];
          this["startTime"] = Date["now"](), this["time"] = 0, this["schedule"](this["onTickSec"], 1);
        }, r["onTickSec"] = function () {
          var t = to;
          this["time"]++, u["onTickSec"]();
        }, a;
      }(a))["_ins"] = void 0, r["_RF"]["pop"]();
    }, o;
  }["bind"](this)["apply"]();
});