(function (t) {
  var inheritsLoose, cclegacy, _decorator, tween, math, UIOpacity, Component;
  return function () {
    var o, c;
    return Pu(o = {}, "setters", 0), Pu(o, "execute", 0), (c = o).setters = [function (t) {
      inheritsLoose = t["inheritsLoose"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], tween = t["tween"], math = t["math"], UIOpacity = t["UIOpacity"], Component = t["Component"];
    }], c.execute = function () {
      var o, c;
      cclegacy._RF["push"]({}, "5e53dba57RP2YRbDtfDJQBt", "GbzBaselayer", void 0), o = _decorator["ccclass"], _decorator["property"], t("default", o("GbzBaselayer")(c = function (t) {
        var r, i;
        return inheritsLoose(i = function () {
          for (var n, r, a = (n = arguments)["length"], u = new Array(a), s = 0; s < a; s++) u[s] = n[s];
          return (r = t["call"]["apply"](t, [this]["concat"](u)) || this)["zoomCallback"] = void 0, r;
        }, t), (r = i["prototype"])["show"] = function (t) {
          this["node"]["active"] = !0;
        }, r["hide"] = function () {
          this["node"]["active"] = !1;
        }, r["zoom"] = function (t, n) {
          var r, i, u;
          (r = this, void 0 === n && (n = !0), n) ? (t.setScale(1.5, 1.5, 1.5), i = tween(t).to(.2, math.v3(1, 1, 1)), tween(t).then(i).call(function () {
            r.zoomCallback && r.zoomCallback();
          }).start()) : (t.setScale(.5, .5, .5), u = tween(t).to(.2, math.v3(1, 1, 1)), tween(t).then(u).call(function () {
            r.zoomCallback && r.zoomCallback();
          }).start());
        }, r["shadow"] = function (t) {
          var n;
          (n = t["getComponent"](UIOpacity) || t["addComponent"](UIOpacity))["opacity"] = 50, tween(n)["to"](.25, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "opacity", 0)).opacity = 0, t;
            }["apply"]())["opacity"] = 255, t;
          }["apply"]())["start"]();
        }, i;
      }(Component)) || c), cclegacy._RF["pop"]();
    }, c;
  }["bind"](this)["apply"]();
});