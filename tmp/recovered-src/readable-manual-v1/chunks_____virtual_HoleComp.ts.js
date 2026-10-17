(function (t) {
  var n,
    r,
    i,
    e,
    a,
    u,
    s,
    o,
    c,
    f,
    h,
    v,
    l,
    b,
    d = to;
  return function () {
    var d,
      k,
      m = to[5],
      p = "setters",
      g = "execute";
    return Pu(d = {}, "setters", 0), Pu(d, "execute", 0), (k = d)["setters"] = [function (t) {
      n = t["inheritsLoose"];
    }, function (t) {
      var n = to,
        h = n[14],
        v = n[3];
      r = t["cclegacy"], i = t["_decorator"], e = t["RigidBody2D"], a = t["CircleCollider2D"], u = t["ERigidBody2DType"], s = t["Label"], o = t["math"], c = t["Tween"], f = t["Component"];
    }, function (t) {
      h = t["default"];
    }, function (t) {
      v = t["default"];
    }, function (t) {
      l = t["default"];
    }, function (t) {
      b = t["default"];
    }], k["execute"] = function () {
      var d,
        k,
        m = to,
        p = "_RF",
        g = "HoleComp";
      r["_RF"]["push"]({}, "a2e1eTGSSZHyI7JJkoNfs7j", "HoleComp", void 0), d = i["ccclass"], i["property"], t("HoleComp", d("HoleComp")(k = function (t) {
        var r,
          i,
          f = to,
          d = f[6];
        return n(i = function () {
          for (var n, r, i = to, e = i[4], a = i[7], u = (n = arguments)["length"], s = new Array(u), o = 0; o < u; o++) s[o] = n[o];
          return (r = t["call"]["apply"](t, [this]["concat"](s)) || this)["ri"] = null, r["circle"] = null, r["fruitComp"] = null, r["holeCount"] = null, r["holeLa"] = null, r["curHoleFruitTyes"] = [], r["isUpdate"] = !1, r;
        }, t), (r = i["prototype"])["init"] = function (t, n, r) {
          var i,
            o = to,
            c = o[4],
            f = o[6],
            h = o[5],
            v = o[9],
            d = o[7],
            k = "ri",
            m = "node",
            p = "getComponent",
            g = "circle",
            y = "holeCount";
          this["ri"] = this["node"]["getComponent"](e), this["circle"] = this["node"]["getComponent"](a), this["isUpdate"] = !1, this["ri"]["type"] = u["Static"], this["circle"]["enabled"] = !0, this["node"]["setPosition"](t[At], t[St]), this["fruitComp"] = n, this["curHoleFruitTyes"] = r, i = b["ins"]["getPrefab"]("holeCount"), l["instance"]["numRoot"]["addChild"](i), this["holeCount"] = i, this["holeLa"] = this["holeCount"]["children"][0]["getComponent"](s), this["upHoleLa"](), this["upHoleLaPos"]();
        }, r["upInfo"] = function () {
          var t = to,
            n = t[6],
            r = "fruitComp",
            i = "isValid",
            e = "node",
            a = "position";
          this["isUpdate"] && this["fruitComp"] && this["isValid"] && this["curHoleFruitTyes"]["length"] > 0 && this["fruitComp"] && this["fruitComp"]["isValid"] && (this["upHoleLaPos"](), o["Vec3"]["distance"](this["node"]["position"], this["fruitComp"]["node"]["position"]) >= 80 && this["genFruit"]());
        }, r["upHoleLaPos"] = function () {
          var t,
            n = to,
            r = 20,
            i = "node";
          t = o["v2"](this["node"][At], this["node"][St]), this["holeCount"]["setPosition"](t[At] + 20, t[St] - 20);
        }, r["genFruit"] = function () {
          var t,
            n,
            r = to,
            i = r[6],
            e = r[3],
            a = "fruitComp",
            u = "curHoleFruitTyes",
            s = "length",
            c = "instance",
            f = "node";
          (this["isUpdate"] = !1, this["fruitComp"] && (this["fruitComp"]["holeComp"] = null, this["fruitComp"]["holeCompBind"] = null, this["fruitComp"] = null), this["curHoleFruitTyes"]["length"] > 0) && (t = this["curHoleFruitTyes"]["shift"](), n = v["inst"]["getPt"](t)["scale"], this["fruitComp"] = l["instance"]["createFruitNodes"](l["instance"]["fruits"], new h(t, o["v2"](this["node"][At], this["node"][St]), 0, 46, n), !0, this, null, 1), this["upHoleLa"]());
          this["curHoleFruitTyes"]["length"] <= 0 && this["recycle"]();
        }, r["upHoleLa"] = function () {
          var t = to,
            n = t[4];
          this["holeLa"]["string"] = this["curHoleFruitTyes"]["length"]["toString"]();
        }, r["checkRecycle"] = function () {
          var t = to;
          this["curHoleFruitTyes"]["length"] <= 0 && this["recycle"]();
        }, r["recycle"] = function (t) {
          var n = to,
            r = n[6],
            i = n[4],
            e = n[7],
            a = "node",
            u = "fruitComp",
            s = "holeCount",
            o = "removeFromParent",
            f = "ins",
            h = "putNode";
          void 0 === t && (t = !0), c["stopAllByTarget"](this["node"]), this["unscheduleAllCallbacks"](), this["isUpdate"] = !1, t && l["instance"]["holeSplice"](this), this["fruitComp"] && (this["fruitComp"]["holeComp"] = null, this["fruitComp"]["holeCompBind"] = null, this["fruitComp"] = null), this["holeCount"] && (this["holeCount"]["removeFromParent"](), b["ins"]["putNode"](this["holeCount"]), this["holeLa"] = null, this["holeCount"] = null), this["circle"]["enabled"] = !1, this["node"]["removeFromParent"](), b["ins"]["putNode"](this["node"]);
        }, i;
      }(f)) || k), r["_RF"]["pop"]();
    }, k;
  }["bind"](this)["apply"]();
});