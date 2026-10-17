(function (t) {
  var inheritsLoose, cclegacy, _decorator, RigidBody2D, CircleCollider2D, ERigidBody2DType, Label, math, Tween, Component, CalculatedInfo, ReferenceLayMgr, GameMgr, GbzPoolManager;
  return function () {
    var d, k;
    return Pu(d = {}, "setters", 0), Pu(d, "execute", 0), (k = d).setters = [function (t) {
      inheritsLoose = t["inheritsLoose"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], RigidBody2D = t["RigidBody2D"], CircleCollider2D = t["CircleCollider2D"], ERigidBody2DType = t["ERigidBody2DType"], Label = t["Label"], math = t["math"], Tween = t["Tween"], Component = t["Component"];
    }, function (t) {
      CalculatedInfo = t["default"];
    }, function (t) {
      ReferenceLayMgr = t["default"];
    }, function (t) {
      GameMgr = t["default"];
    }, function (t) {
      GbzPoolManager = t["default"];
    }], k.execute = function () {
      var d, k;
      cclegacy._RF["push"]({}, "a2e1eTGSSZHyI7JJkoNfs7j", "HoleComp", void 0), d = _decorator["ccclass"], _decorator["property"], t("HoleComp", d("HoleComp")(k = function (t) {
        var r, i;
        return inheritsLoose(i = function () {
          for (var n, r, u = (n = arguments)["length"], s = new Array(u), o = 0; o < u; o++) s[o] = n[o];
          return (r = t["call"]["apply"](t, [this]["concat"](s)) || this)["ri"] = null, r["circle"] = null, r["fruitComp"] = null, r["holeCount"] = null, r["holeLa"] = null, r["curHoleFruitTyes"] = [], r["isUpdate"] = !1, r;
        }, t), (r = i["prototype"])["init"] = function (t, n, r) {
          var i;
          this.ri = this.node.getComponent(RigidBody2D), this.circle = this.node.getComponent(CircleCollider2D), this["isUpdate"] = !1, this.ri["type"] = ERigidBody2DType["Static"], this.circle["enabled"] = !0, this.node["setPosition"](t.x, t.y), this["fruitComp"] = n, this["curHoleFruitTyes"] = r, i = GbzPoolManager["ins"]["getPrefab"]("holeCount"), GameMgr["instance"]["numRoot"]["addChild"](i), this.holeCount = i, this["holeLa"] = this.holeCount["children"][0].getComponent(Label), this["upHoleLa"](), this["upHoleLaPos"]();
        }, r["upInfo"] = function () {
          this["isUpdate"] && this.fruitComp && this.isValid && this["curHoleFruitTyes"]["length"] > 0 && this.fruitComp && this.fruitComp.isValid && (this["upHoleLaPos"](), math["Vec3"]["distance"](this.node.position, this.fruitComp.node.position) >= 80 && this["genFruit"]());
        }, r["upHoleLaPos"] = function () {
          var t;
          t = math["v2"](this.node.x, this.node.y), this["holeCount"]["setPosition"](t.x + 20, t.y - 20);
        }, r["genFruit"] = function () {
          var t, n;
          (this["isUpdate"] = !1, this.fruitComp && (this.fruitComp["holeComp"] = null, this.fruitComp["holeCompBind"] = null, this.fruitComp = null), this.curHoleFruitTyes.length > 0) && (t = this.curHoleFruitTyes["shift"](), n = ReferenceLayMgr["inst"]["getPt"](t)["scale"], this.fruitComp = GameMgr.instance["createFruitNodes"](GameMgr.instance["fruits"], new CalculatedInfo(t, math["v2"](this.node.x, this.node.y), 0, 46, n), !0, this, null, 1), this["upHoleLa"]());
          this.curHoleFruitTyes.length <= 0 && this["recycle"]();
        }, r["upHoleLa"] = function () {
          this["holeLa"]["string"] = this["curHoleFruitTyes"]["length"]["toString"]();
        }, r["checkRecycle"] = function () {
          this["curHoleFruitTyes"]["length"] <= 0 && this["recycle"]();
        }, r["recycle"] = function (t) {
          void 0 === t && (t = !0), Tween["stopAllByTarget"](this.node), this["unscheduleAllCallbacks"](), this["isUpdate"] = !1, t && GameMgr["instance"]["holeSplice"](this), this.fruitComp && (this.fruitComp["holeComp"] = null, this.fruitComp["holeCompBind"] = null, this.fruitComp = null), this.holeCount && (this.holeCount.removeFromParent(), GbzPoolManager.ins.putNode(this.holeCount), this["holeLa"] = null, this.holeCount = null), this["circle"]["enabled"] = !1, this.node.removeFromParent(), GbzPoolManager.ins.putNode(this.node);
        }, i;
      }(Component)) || k), cclegacy._RF["pop"]();
    }, k;
  }["bind"](this)["apply"]();
});