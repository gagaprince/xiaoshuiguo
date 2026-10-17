(function (t) {
  var inheritsLoose, cclegacy, _decorator, UIOpacity, tween, Component, GbzInstance;
  return function () {
    var o, c;
    return Pu(o = {}, "setters", 0), Pu(o, "execute", 0), (c = o).setters = [function (t) {
      inheritsLoose = t["inheritsLoose"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], UIOpacity = t["UIOpacity"], tween = t["tween"], Component = t["Component"];
    }, function (t) {
      GbzInstance = t["default"];
    }], c.execute = function () {
      var o, c;
      cclegacy._RF["push"]({}, "b95ecbzeLNL74WI7+VKg9n8", "GbzFadeManager", void 0), o = _decorator["ccclass"], _decorator["property"], t("default", o(c = function (t) {
        var r, i;
        return inheritsLoose(i = function () {
          var n;
          return n = arguments, t["apply"](this, n) || this;
        }, t), (r = i["prototype"])["onLoad"] = function () {
          this["node"]["active"] = !1, GbzInstance["setFadeMgr"](this);
        }, r["in"] = function (t) {
          var n;
          return n = this, void 0 === t && (t = .19), new Promise(function (r) {
            var i;
            n.node["active"] = !0, (i = n.node["getComponent"](UIOpacity)) && (i["opacity"] = 0, tween(i)["to"](t, function () {
              var t;
              return (t = function () {
                var t;
                return (t = Pu({}, "opacity", 0)).opacity = 0, t;
              }["apply"]())["opacity"] = 255, t;
            }["apply"]())["call"](function () {
              r(null);
            })["start"]());
          });
        }, r["out"] = function (t) {
          var n;
          return n = this, void 0 === t && (t = .19), new Promise(function (r) {
            var i;
            n.node["active"] = !0, (i = n.node["getComponent"](UIOpacity)) && (i["opacity"] = 255, tween(i)["to"](t, function () {
              var t;
              return (t = function () {
                var t;
                return (t = Pu({}, "opacity", 0)).opacity = 0, t;
              }["apply"]())["opacity"] = 0, t;
            }["apply"]())["call"](function () {
              n["node"]["active"] = !1, r(null);
            })["start"]());
          });
        }, i;
      }(Component)) || c), cclegacy._RF["pop"]();
    }, c;
  }["bind"](this)["apply"]();
});