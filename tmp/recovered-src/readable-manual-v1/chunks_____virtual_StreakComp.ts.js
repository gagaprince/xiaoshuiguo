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
      var n = to;
      r = t["cclegacy"], i = t["_decorator"], e = t["RigidBody2D"], a = t["Component"];
    }, function (t) {
      u = t["FruitConfig"];
    }], o["execute"] = function () {
      var s,
        o,
        c = to,
        f = "_RF",
        h = "StreakComp";
      r["_RF"]["push"]({}, "98cf5ooMiFFJ4OFVNmM14Oy", "StreakComp", void 0), s = i["ccclass"], i["property"], t("StreakComp", s("StreakComp")(o = function (t) {
        var r,
          i,
          a = to,
          s = a[4];
        return n(i = function () {
          for (var n, r, i = to, e = i[4], a = i[2], u = (n = arguments)["length"], s = new Array(u), o = 0; o < u; o++) s[o] = n[o];
          return (r = t["call"]["apply"](t, [this]["concat"](s)) || this)["targetNode"] = void 0, r["tick"] = 0, r;
        }, t), (r = i["prototype"])["init"] = function (t) {
          var n = to,
            r = n[2];
          this["targetNode"] = t, this["node"]["getComponent"](e)["group"] = u["RB_GROUPS"]["wall"];
        }, r["onLoad"] = function () {}, r["start"] = function () {
          var t;
          t = this, this["scheduleOnce"](function () {
            var n = to;
            t["node"]["destroy"]();
          }, 3);
        }, r["update"] = function (t) {
          var n = to,
            r = "tick",
            i = "targetNode",
            e = "isValid";
          this["tick"]++, this["tick"] % 3 == 0 && this["targetNode"]["isValid"] && this["isValid"] && this["node"]["setPosition"](this["targetNode"][At], this["targetNode"][St]);
        }, i;
      }(a)) || o), r["_RF"]["pop"]();
    }, o;
  }["bind"](this)["apply"]();
});