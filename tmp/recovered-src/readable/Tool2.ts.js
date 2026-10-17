(function (t) {
  var cclegacy, UITransform, math;
  return function () {
    var e, a;
    return Pu(e = {}, "setters", 0), Pu(e, "execute", 0), (a = e).setters = [function (t) {
      cclegacy = t["cclegacy"], UITransform = t["UITransform"], math = t["math"];
    }], a.execute = function () {
      cclegacy._RF["push"]({}, "c3434dZ9dRA66I3mfTTJ9/S", "Tool2", void 0), t("default", function () {
        var t;
        return (t = function () {})["convetOtherNodeSpace"] = function (t, n) {
          var r;
          return t && n ? (r = this["localConvertWorldPoint"](t), this["worldConvertLocalPoint"](n, r)) : null;
        }, t["convetOtherNodeSpaceAR"] = function (t, n) {
          var r;
          return t && n ? (r = this["localConvertWorldPointAR"](t), this["worldConvertLocalPointAR"](n, r)) : null;
        }, t["localConvertWorldPointAR"] = function (t) {
          return t ? t["getComponent"](UITransform)["convertToWorldSpaceAR"](math["v3"](0, 0, 0)) : null;
        }, t["localConvertWorldPoint"] = function (t) {
          return t ? t["getComponent"](UITransform)["convertToWorldSpace"](math["v2"](0, 0)) : null;
        }, t["worldConvertLocalPointAR"] = function (t, n) {
          return t ? t["getComponent"](UITransform)["convertToNodeSpaceAR"](n) : null;
        }, t["worldConvertLocalPoint"] = function (t, n) {
          return t ? t["getComponent"](UITransform)["convertToNodeSpace"](n) : null;
        }, t["VectorCalculationAngle"] = function (t) {
          return 180 * -t["signAngle"](math["v2"](1, 0)) / Math["PI"];
        }, t["reflectionVector"] = function (t, n) {
          var r, i;
          return i = n, (r = t)["subtract"](i["multiplyScalar"](2 * r["dot"](i)));
        }, t["getAspect"] = function (t, n) {
          var r, e, a;
          return a = 0, r = math.v2(t.x, t.y), e = math.v2(n.x, n.y), r.x > e.x ? a = 1 : r.x < e.x && (a = 2), a;
        }, t;
      }()), cclegacy._RF["pop"]();
    }, a;
  }["bind"](this)["apply"]();
});