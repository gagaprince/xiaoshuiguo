(function (t) {
  var n,
    r = to;
  return function () {
    var r,
      i,
      e = to[5],
      a = "setters",
      u = "execute";
    return Pu(r = {}, "setters", 0), Pu(r, "execute", 0), (i = r)["setters"] = [function (t) {
      n = t["cclegacy"];
    }], i["execute"] = function () {
      var r = to,
        i = "_RF";
      n["_RF"]["push"]({}, "36265G80BJCQ53Psks9UD9D", "CalculatedInfo", void 0), t("default", function (t, n, r, i, e, a, u) {
        var s = to,
          o = s[7],
          c = "fruitType",
          f = "pos",
          h = "type",
          v = "holeFruitTyes",
          l = "unlockNum",
          b = "radius",
          d = "scale";
        void 0 === i && (i = 0), void 0 === e && (e = 0), void 0 === u && (u = 0), this["fruitType"] = void 0, this["pos"] = void 0, this["type"] = void 0, this["holeFruitTyes"] = void 0, this["unlockNum"] = void 0, this["radius"] = void 0, this["scale"] = void 0, this["fruitType"] = t, this["pos"] = n, this["type"] = r, this["radius"] = i, this["scale"] = e, this["holeFruitTyes"] = a, this["unlockNum"] = u;
      }), n["_RF"]["pop"]();
    }, i;
  }["bind"](this)["apply"]();
});