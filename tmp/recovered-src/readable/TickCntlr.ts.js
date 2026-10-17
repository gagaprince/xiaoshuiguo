(function (t) {
  var inheritsLoose, cclegacy, Node, director, Component, reporter;
  return function () {
    var s, o;
    return Pu(s = {}, "setters", 0), Pu(s, "execute", 0), (o = s).setters = [function (t) {
      inheritsLoose = t["inheritsLoose"];
    }, function (t) {
      cclegacy = t["cclegacy"], Node = t["Node"], director = t["director"], Component = t["Component"];
    }, function (t) {
      reporter = t["reporter"];
    }], o.execute = function () {
      cclegacy._RF["push"]({}, "4e70dHng9VPdq11Wr0GiT+y", "TickCntlr", void 0), t("tickUpdate", "tickUpdate"), t("tickSec", "tickSec"), t("default", function (t) {
        var r, a;
        return inheritsLoose(a = function () {
          for (var n, r, u = (n = arguments)["length"], s = new Array(u), o = 0; o < u; o++) s[o] = n[o];
          return (r = t["call"]["apply"](t, [this]["concat"](s)) || this)["startTime"] = void 0, r["time"] = void 0, r;
        }, t), a["ins"] = function () {
          var t;
          this._ins || ((t = new Node())["name"] = "TickCntlr", director["addPersistRootNode"](t), this._ins = t["addComponent"](a));
          return this._ins;
        }, (r = a["prototype"])["start"] = function () {
          this["startTime"] = Date["now"](), this["time"] = 0, this["schedule"](this["onTickSec"], 1);
        }, r["onTickSec"] = function () {
          this["time"]++, reporter["onTickSec"]();
        }, a;
      }(Component))["_ins"] = void 0, cclegacy._RF["pop"]();
    }, o;
  }["bind"](this)["apply"]();
});