(function (t) {
  var applyDecoratedDescriptor, inheritsLoose, initializerDefineProperty, assertThisInitialized, cclegacy, _decorator, Node, UITransform, Label, GbzDataManager, GbzBaselayer;
  return function () {
    var v, l;
    return Pu(v = {}, "setters", 0), Pu(v, "execute", 0), (l = v).setters = [function (t) {
      applyDecoratedDescriptor = t["applyDecoratedDescriptor"], inheritsLoose = t["inheritsLoose"], initializerDefineProperty = t["initializerDefineProperty"], assertThisInitialized = t["assertThisInitialized"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], Node = t["Node"], UITransform = t["UITransform"], Label = t["Label"];
    }, function (t) {
      GbzDataManager = t["default"];
    }, function (t) {
      GbzBaselayer = t["default"];
    }], l.execute = function () {
      var v, l, b, d, k, m, p, g;
      cclegacy._RF["push"]({}, "bdfdd713--e66-3-43-95-b-add-e06292781271", "GbzLoadingLayer", void 0), l = _decorator["ccclass"], b = _decorator["property"], t("default", (d = l("GbzLoadingLayer"), k = b(Node), d((g = applyDecoratedDescriptor((p = function (t) {
        var n, a;
        return inheritsLoose(a = function () {
          for (var n, r, f = (n = arguments)["length"], h = new Array(f), v = 0; v < f; v++) h[v] = n[v];
          return r = t["call"]["apply"](t, [this]["concat"](h)) || this, initializerDefineProperty(r, "fill", g, assertThisInitialized(r)), r["time"] = 0, r["intTime"] = void 0, r["fillPro"] = 0, r["fillMaxWidth"] = 578, r["labPro"] = null, r["isHide"] = !1, r;
        }, t), (n = a["prototype"])["start"] = function () {
          this.fill.getComponent(UITransform)["width"] = 0, this["intTime"] = Date["now"](), this.labPro = this.fill["parent"]["getChildByName"]("labPro").getComponent(Label);
        }, n["update"] = function (t) {
          this.fill && this["node"]["active"] && (this.time += t, GbzDataManager.ins.loading_rate > 0 && GbzDataManager.ins.loading_rate > this.fillPro ? this.fillPro = GbzDataManager.ins.loading_rate : this.fillPro = Math["max"](this.fillPro, this.time / 2 * (1 - this.fillPro)), this.fillPro >= .99 && (this.fillPro = .99), this.fill.getComponent(UITransform).width = this.fillPro * this["fillMaxWidth"], this["labPro"]["string"] = Math["floor"](100 * this.fillPro) + pt, this.fill["children"][0].x = this.fill.getComponent(UITransform).width, GbzDataManager.ins.loading_rate >= 1 && this["hide"]());
        }, a;
      }(GbzBaselayer))["prototype"], "fill", [k], (Pu(v = {}, "configurable", !0), Pu(v, "enumerable", !0), Pu(v, "writable", !0), Pu(v, "initializer", function () {
        return null;
      }), v)), m = p)) || m)), cclegacy._RF["pop"]();
    }, l;
  }["bind"](this)["apply"]();
});