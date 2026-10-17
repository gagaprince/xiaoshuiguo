(function (t) {
  var n,
    r,
    i,
    e = to;
  return function () {
    var e,
      a,
      u = to[5],
      s = "setters",
      o = "execute";
    return Pu(e = {}, "setters", 0), Pu(e, "execute", 0), (a = e)["setters"] = [function (t) {
      var e = to;
      n = t["cclegacy"], r = t["UITransform"], i = t["math"];
    }], a["execute"] = function () {
      var e = to,
        a = "_RF";
      n["_RF"]["push"]({}, "c3434dZ9dRA66I3mfTTJ9/S", "Tool2", void 0), t("default", function () {
        var t,
          n = to,
          e = n[20],
          a = n[22];
        return (t = function () {})["convetOtherNodeSpace"] = function (t, n) {
          var r,
            i = to[20];
          return t && n ? (r = this["localConvertWorldPoint"](t), this["worldConvertLocalPoint"](n, r)) : null;
        }, t["convetOtherNodeSpaceAR"] = function (t, n) {
          var r,
            i = to[22];
          return t && n ? (r = this["localConvertWorldPointAR"](t), this["worldConvertLocalPointAR"](n, r)) : null;
        }, t["localConvertWorldPointAR"] = function (t) {
          var n = to;
          return t ? t["getComponent"](r)["convertToWorldSpaceAR"](i["v3"](0, 0, 0)) : null;
        }, t["localConvertWorldPoint"] = function (t) {
          var n = to;
          return t ? t["getComponent"](r)["convertToWorldSpace"](i["v2"](0, 0)) : null;
        }, t["worldConvertLocalPointAR"] = function (t, n) {
          var i = to;
          return t ? t["getComponent"](r)["convertToNodeSpaceAR"](n) : null;
        }, t["worldConvertLocalPoint"] = function (t, n) {
          var i = to;
          return t ? t["getComponent"](r)["convertToNodeSpace"](n) : null;
        }, t["VectorCalculationAngle"] = function (t) {
          var n = to,
            r = n[0];
          return 180 * -t["signAngle"](i["v2"](1, 0)) / Math["PI"];
        }, t["reflectionVector"] = function (t, n) {
          var r,
            i,
            e = to;
          return i = n, (r = t)["subtract"](i["multiplyScalar"](2 * r["dot"](i)));
        }, t["getAspect"] = function (t, n) {
          var r,
            e,
            a,
            u = "v2";
          return a = 0, r = i["v2"](t[At], t[St]), e = i["v2"](n[At], n[St]), r[At] > e[At] ? a = 1 : r[At] < e[At] && (a = 2), a;
        }, t;
      }()), n["_RF"]["pop"]();
    }, a;
  }["bind"](this)["apply"]();
});