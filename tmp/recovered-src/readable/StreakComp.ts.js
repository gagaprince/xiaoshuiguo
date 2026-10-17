(function (t) {
  var inheritsLoose, cclegacy, _decorator, RigidBody2D, Component, FruitConfig;
  return function () {
    var s, o;
    return Pu(s = {}, "setters", 0), Pu(s, "execute", 0), (o = s).setters = [function (t) {
      inheritsLoose = t["inheritsLoose"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], RigidBody2D = t["RigidBody2D"], Component = t["Component"];
    }, function (t) {
      FruitConfig = t["FruitConfig"];
    }], o.execute = function () {
      var s, o;
      cclegacy._RF["push"]({}, "98cf5ooMiFFJ4OFVNmM14Oy", "StreakComp", void 0), s = _decorator["ccclass"], _decorator["property"], t("StreakComp", s("StreakComp")(o = function (t) {
        var r, i;
        return inheritsLoose(i = function () {
          for (var n, r, u = (n = arguments)["length"], s = new Array(u), o = 0; o < u; o++) s[o] = n[o];
          return (r = t["call"]["apply"](t, [this]["concat"](s)) || this)["targetNode"] = void 0, r["tick"] = 0, r;
        }, t), (r = i["prototype"])["init"] = function (t) {
          this["targetNode"] = t, this["node"]["getComponent"](RigidBody2D)["group"] = FruitConfig["RB_GROUPS"]["wall"];
        }, r["onLoad"] = function () {}, r["start"] = function () {
          var t;
          t = this, this["scheduleOnce"](function () {
            t["node"]["destroy"]();
          }, 3);
        }, r["update"] = function (t) {
          this.tick++, this.tick % 3 == 0 && this.targetNode.isValid && this.isValid && this["node"]["setPosition"](this.targetNode.x, this.targetNode.y);
        }, i;
      }(Component)) || o), cclegacy._RF["pop"]();
    }, o;
  }["bind"](this)["apply"]();
});