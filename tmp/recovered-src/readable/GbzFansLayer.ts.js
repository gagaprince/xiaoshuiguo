(function (t) {
  var inheritsLoose, cclegacy, _decorator, Node, assetManager, SpriteFrame, Texture2D, Sprite, UITransform, math, GbzInstance, GbzSdkManager, ENUM_UI, GbzBaselayer, globalxz;
  return function () {
    var k, m;
    return Pu(k = {}, "setters", 0), Pu(k, "execute", 0), (m = k).setters = [function (t) {
      inheritsLoose = t["inheritsLoose"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], Node = t["Node"], assetManager = t["assetManager"], SpriteFrame = t["SpriteFrame"], Texture2D = t["Texture2D"], Sprite = t["Sprite"], UITransform = t["UITransform"], math = t["math"];
    }, null, function (t) {
      GbzInstance = t["default"];
    }, function (t) {
      GbzSdkManager = t["default"];
    }, function (t) {
      ENUM_UI = t["ENUM_UI"];
    }, function (t) {
      GbzBaselayer = t["default"];
    }, function (t) {
      globalxz = t["globalxz"];
    }], m.execute = function () {
      var k, m;
      cclegacy._RF["push"]({}, "adf6dj1TWpAlLArjFGnbJXf", "GbzFansLayer", void 0), k = _decorator["ccclass"], _decorator["property"], t("default", k("GbzFansLayer")(m = function (t) {
        var r, i;
        return inheritsLoose(i = function () {
          for (var n, r, u = (n = arguments)["length"], s = new Array(u), o = 0; o < u; o++) s[o] = n[o];
          return (r = t["call"]["apply"](t, [this]["concat"](s)) || this)["erwei"] = void 0, r["btnClose"] = void 0, r;
        }, t), (r = i["prototype"])["onLoad"] = function () {
          var t;
          t = this["node"].getChildByName("style").getChildByName("panel").getChildByName("bg"), this.btnClose = t.getChildByName("btnClose"), this.btnClose.on("click", this["onClose"], this), this.erwei = t.getChildByName("er"), this["loadQRCode"](), this.erwei.on(Node["EventType"]["TOUCH_START"], this["scande"], this);
        }, r["start"] = function () {}, r["scande"] = function () {
          GbzSdkManager["ins"]["scande"](globalxz["fansqUrl"]);
        }, r["loadQRCode"] = function () {
          var t, n;
          t = this, n = globalxz["fansqUrl"], assetManager["loadRemote"](n, function (n, r) {
            var i, e, a;
            n || (a = new SpriteFrame(), (i = new Texture2D())["image"] = r, a["texture"] = i, (e = t.erwei.getComponent(Sprite)) && (e["spriteFrame"] = a, t.erwei.getComponent(UITransform)["width"] = 500, t.erwei.getComponent(UITransform)["height"] = 500));
          });
        }, r["adjustQRCodeSize"] = function (t) {
          var n, r, i, e, a, u, s;
          s = this.erwei["getComponent"](UITransform)["contentSize"], a = (i = t["spriteFrame"]["texture"]).width, u = i.height, e = s.width / a, n = s.height / u, r = Math["min"](e, n), this.erwei["scale"] = math["v3"](r, r, r);
        }, r["onClose"] = function () {
          GbzInstance["uiMgr"]["toggle"](ENUM_UI["LAYER_Fans"], !1);
        }, i;
      }(GbzBaselayer)) || m), cclegacy._RF["pop"]();
    }, m;
  }["bind"](this)["apply"]();
});