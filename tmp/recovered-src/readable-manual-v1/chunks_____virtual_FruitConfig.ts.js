(function (t) {
  var n;
  return function () {
    var r,
      i,
      e = to[5],
      a = "setters",
      u = "execute";
    return Pu(r = {}, "setters", 0), Pu(r, "execute", 0), (i = r)["setters"] = [function (t) {
      n = t["cclegacy"];
    }], i["execute"] = function () {
      var r,
        i = to,
        e = "_RF",
        a = "FruitConfig",
        u = "apply";
      n["_RF"]["push"]({}, "c9328VJBTZKDKNXQfsrk2ST", "FruitConfig", void 0), (r = t("FruitConfig", function () {}))["MoveDirection"] = function () {
        var t,
          n = to,
          r = n[3],
          i = n[2];
        return (t = function () {
          var t,
            n,
            r = to,
            i = r[2],
            e = "NONE",
            a = "DOWN",
            u = "RIGHT",
            s = "LEFT";
          return Pu(t = {}, "NONE", 0), Pu(t, "DOWN", 0), Pu(t, "RIGHT", 0), Pu(t, "LEFT", 0), (n = t)["NONE"] = 0, n["DOWN"] = 0, n["RIGHT"] = 0, n["LEFT"] = 0, n;
        }["apply"]())["NONE"] = 0, t["DOWN"] = 1, t["RIGHT"] = 2, t["LEFT"] = 3, t;
      }["apply"](), r["RB_GROUPS"] = function () {
        var t,
          n = to,
          r = ro,
          i = n[3],
          e = n[2];
        return (t = function () {
          var t,
            n,
            r = to,
            i = r[2],
            e = "DEFAULT",
            a = "fruit",
            u = "wall",
            s = "obst",
            o = "clickFruit",
            c = "guardrail";
          return Pu(t = {}, "DEFAULT", 0), Pu(t, "fruit", 0), Pu(t, "wall", 0), Pu(t, "obst", 0), Pu(t, "clickFruit", 0), Pu(t, "guardrail", 0), (n = t)["DEFAULT"] = 0, n["fruit"] = 0, n["wall"] = 0, n["obst"] = 0, n["clickFruit"] = 0, n["guardrail"] = 0, n;
        }["apply"]())["DEFAULT"] = 1, t["fruit"] = 2, t["wall"] = 4, t["obst"] = 8, t["clickFruit"] = 16, t["guardrail"] = 32, t;
      }["apply"](), n["_RF"]["pop"]();
    }, i;
  }["apply"]();
});