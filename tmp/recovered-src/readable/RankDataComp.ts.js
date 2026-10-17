(function (t) {
  var applyDecoratedDescriptor, inheritsLoose, initializerDefineProperty, assertThisInitialized, cclegacy, _decorator, Sprite, Label, GbzDataManager, GbzResManager, ResType, ScrollListItem;
  return function () {
    var l, b;
    return Pu(l = {}, "setters", 0), Pu(l, "execute", 0), (b = l).setters = [function (t) {
      applyDecoratedDescriptor = t["applyDecoratedDescriptor"], inheritsLoose = t["inheritsLoose"], initializerDefineProperty = t["initializerDefineProperty"], assertThisInitialized = t["assertThisInitialized"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], Sprite = t["Sprite"], Label = t["Label"];
    }, function (t) {
      GbzDataManager = t["default"];
    }, function (t) {
      GbzResManager = t["default"], ResType = t["ResType"];
    }, function (t) {
      ScrollListItem = t["default"];
    }], b.execute = function () {
      var l, b, d, k, m, p, g, y, w, _, M, S, A, C, x, T, L, I, R, E, D, N, P;
      cclegacy._RF["push"]({}, "f80feq1W+9MarJkC21+SmQM", "RankDataComp", void 0), y = _decorator["ccclass"], g = _decorator["property"], t("RankDataComp", (w = y("RankDataComp"), _ = g(Sprite), M = g(Label), S = g(Sprite), A = g(Label), C = g(Label), x = g(Sprite), w((I = applyDecoratedDescriptor((L = function (t) {
        var n, a;
        return inheritsLoose(a = function () {
          for (var n, r, c = (n = arguments)["length"], f = new Array(c), h = 0; h < c; h++) f[h] = n[h];
          return r = t["call"]["apply"](t, [this]["concat"](f)) || this, initializerDefineProperty(r, "rankImg", I, assertThisInitialized(r)), initializerDefineProperty(r, "labRank", R, assertThisInitialized(r)), initializerDefineProperty(r, "headImg", E, assertThisInitialized(r)), initializerDefineProperty(r, "userName", D, assertThisInitialized(r)), initializerDefineProperty(r, "level", N, assertThisInitialized(r)), initializerDefineProperty(r, "parentSprite", P, assertThisInitialized(r)), r["index"] = -1, r;
        }, t), (n = a["prototype"])["onEnable"] = function () {
          -1 != this["index"] && this["refreshPro"]();
        }, n["refreshPro"] = function () {
          var t, n, r, i, e, a, u;
          (e = this.index + 1, i = (r = GbzDataManager.ins["rankWordDate"][this.index]).userName, n = r.headImg, a = r.level, t = r["isPlayer"], GbzResManager.ins["setSpriteFrameAsync"](this.headImg, "fruits", n, "水果图标/" + n + "/spriteFrame"), this["parentSprite"].spriteFrame = t ? GbzResManager.ins.getRes(ResType.Sprite, "secondary", "z自己") : GbzResManager.ins.getRes(ResType.Sprite, "secondary", "别人"), this.userName.string = i, this.level.string = a + Pr, e < 4) ? (this.labRank.node.active = !1, this.rankImg.node.active = !0, u = "第一", 1 == e && (u = "第一"), 2 == e && (u = "第二"), 3 == e && (u = "第三"), this.rankImg.spriteFrame = GbzResManager.ins.getRes(ResType.Sprite, "secondary", u)) : (this.labRank.node.active = !0, this.rankImg.node.active = !1, this.labRank.string = e["toString"]());
        }, n["onItemRender"] = function (t) {
          this["index"] = t, this["refreshPro"]();
        }, n["update"] = function (t) {}, a;
      }(ScrollListItem)).prototype, "rankImg", [_], (Pu(l = {}, "configurable", !0), Pu(l, "enumerable", !0), Pu(l, "writable", !0), Pu(l, "initializer", function () {
        return null;
      }), l)), R = applyDecoratedDescriptor(L.prototype, "labRank", [M], (Pu(b = {}, "configurable", !0), Pu(b, "enumerable", !0), Pu(b, "writable", !0), Pu(b, "initializer", function () {
        return null;
      }), b)), E = applyDecoratedDescriptor(L.prototype, "headImg", [S], (Pu(d = {}, "configurable", !0), Pu(d, "enumerable", !0), Pu(d, "writable", !0), Pu(d, "initializer", function () {
        return null;
      }), d)), D = applyDecoratedDescriptor(L.prototype, "userName", [A], (Pu(k = {}, "configurable", !0), Pu(k, "enumerable", !0), Pu(k, "writable", !0), Pu(k, "initializer", function () {
        return null;
      }), k)), N = applyDecoratedDescriptor(L.prototype, "level", [C], (Pu(m = {}, "configurable", !0), Pu(m, "enumerable", !0), Pu(m, "writable", !0), Pu(m, "initializer", function () {
        return null;
      }), m)), P = applyDecoratedDescriptor(L.prototype, "parentSprite", [x], (Pu(p = {}, "configurable", !0), Pu(p, "enumerable", !0), Pu(p, "writable", !0), Pu(p, "initializer", function () {
        return null;
      }), p)), T = L)) || T)), cclegacy._RF["pop"]();
    }, b;
  }["bind"](this)["apply"]();
});