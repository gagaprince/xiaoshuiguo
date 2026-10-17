(function (t) {
  var inheritsLoose, cclegacy, _decorator, Component;
  return function () {
    var a, u;
    return Pu(a = {}, "setters", 0), Pu(a, "execute", 0), (u = a).setters = [function (t) {
      inheritsLoose = t["inheritsLoose"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], Component = t["Component"];
    }], u.execute = function () {
      var a, u;
      cclegacy._RF["push"]({}, "35bd5+7fYhOja80EYdgkeuB", "DragFruit", void 0), a = _decorator["ccclass"], _decorator["property"], t("default", a("DragFruit")(u = function (t) {
        var r, i;
        return inheritsLoose(i = function () {
          for (var n, r, u = (n = arguments)["length"], s = new Array(u), o = 0; o < u; o++) s[o] = n[o];
          return (r = t["call"]["apply"](t, [this]["concat"](s)) || this)["editorRoot"] = null, r["edgeThreshold"] = 50, r["cameraMoveSpeed"] = 5, r["delete"] = null, r["labFruit"] = null, r;
        }, t), (r = i["prototype"])["onLoad"] = function () {}, r["moveFruit"] = function (t) {}, r["stop"] = function () {}, r["onDestroy"] = function () {}, r["start"] = function () {}, i;
      }(Component)) || u), cclegacy._RF["pop"]();
    }, u;
  }["bind"](this)["apply"]();
});