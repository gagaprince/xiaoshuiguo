(function (t) {
  var applyDecoratedDescriptor, inheritsLoose, initializerDefineProperty, assertThisInitialized, cclegacy, _decorator, Node, view, UITransform, tween, math, Layers, RigidBody2D, ERigidBody2DType, CircleCollider2D, PolygonCollider2D, Component, GbzAudioManager, GbzDataManager, GbzInstance, GbzPoolManager, GbzSdkManager, GameMgr, ENUM_UI, ENUM_CLIP, FruitConfig;
  return function () {
    var x, T;
    return Pu(x = {}, "setters", 0), Pu(x, "execute", 0), (T = x).setters = [function (t) {
      applyDecoratedDescriptor = t["applyDecoratedDescriptor"], inheritsLoose = t["inheritsLoose"], initializerDefineProperty = t["initializerDefineProperty"], assertThisInitialized = t["assertThisInitialized"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], Node = t["Node"], view = t["view"], UITransform = t["UITransform"], tween = t["tween"], math = t["math"], Layers = t["Layers"], RigidBody2D = t["RigidBody2D"], ERigidBody2DType = t["ERigidBody2DType"], CircleCollider2D = t["CircleCollider2D"], PolygonCollider2D = t["PolygonCollider2D"], Component = t["Component"];
    }, function (t) {
      GbzAudioManager = t["default"];
    }, function (t) {
      GbzDataManager = t["default"];
    }, function (t) {
      GbzInstance = t["default"];
    }, function (t) {
      GbzPoolManager = t["default"];
    }, function (t) {
      GbzSdkManager = t["default"];
    }, function (t) {
      GameMgr = t["default"];
    }, function (t) {
      ENUM_UI = t["ENUM_UI"], ENUM_CLIP = t["ENUM_CLIP"];
    }, function (t) {
      FruitConfig = t["FruitConfig"];
    }], T.execute = function () {
      var x, T, L, I, R, E, D, N;
      cclegacy._RF["push"]({}, "262778VlvxPEKK1dLw7LFiu", "GbzFruitDownLayer", void 0), T = _decorator["ccclass"], L = _decorator["property"], t("default", (I = T("GbzFruitDownLayer"), R = L(Node), I((N = applyDecoratedDescriptor((D = function (t) {
        var n, a;
        return inheritsLoose(a = function () {
          for (var n, r, h = (n = arguments)["length"], v = new Array(h), l = 0; l < h; l++) v[l] = n[l];
          return r = t["call"]["apply"](t, [this]["concat"](v)) || this, initializerDefineProperty(r, "createPoint", N, assertThisInitialized(r)), r["radius"] = 200, r["curThemeType"] = void 0, r["fruitcomList"] = [], r["clickSoundInterval"] = 30, r["lastClickSoundTime"] = 0, r["polygonInfo"] = new Map(), r;
        }, t), (n = a["prototype"])["onEnable"] = function () {
          var t;
          this["curThemeType"] = GbzDataManager["ins"]["useSkinId"], t = view["getVisibleSize"](), this.node["getComponent"](UITransform)["setContentSize"](t), this.node["setPosition"](0, -t["height"]);
        }, n["showAni"] = function (t) {
          var n;
          n = this, GameMgr.instance && (GameMgr.instance["floor"]["active"] = !1), this["lastClickSoundTime"] = 0, tween(this["node"])["to"](.3, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, St, 0)).y = 0, t;
            }["apply"]()).y = 0, t;
          }["apply"]())["call"](function () {
            n["onCreateFuitAll"](t);
          })["start"]();
        }, n["setfruitScale"] = function (t) {
          return 0 == GameMgr.instance.curThemeType && t ? t["scale"] : 2 == GameMgr.instance.curThemeType || 5 == GameMgr.instance.curThemeType ? .68 : .65;
        }, n["onCreateFuitAll"] = function (t) {
          var n, r, i;
          n = this, r = 0, i = setInterval(function () {
            var e, a, u, s;
            return r >= t["length"] ? (clearInterval(i), void n.onAniEnd()) : (u = t[r], a = n["createFruitNodes"](u), n["tryPlayCreateSound"](), n["changeToCircle"](a), s = math["v2"](Math.random() * n.radius - n.radius / 2, Math.random() * n.radius - n.radius / 2), a["setPosition"](s.x, s.y), e = n["setfruitScale"](u), a["setScale"](0, 0, 0), tween(a)["to"](.3, function () {
              var t;
              return (t = function () {
                var t;
                return (t = Pu({}, "scale", 0)).scale = 0, t;
              }["apply"]())["scale"] = math["v3"](e, e, e), t;
            }["apply"]())["start"](), n["fruitcomList"]["push"](a), GbzSdkManager["ins"]["vibrateShort"](null), ++r >= 100 ? (clearInterval(i), void n.onAniEnd()) : void 0);
          }, 30);
        }, n["onAniEnd"] = function () {
          GbzInstance["gameMgr"]["onGameOver"](ENUM_UI["LAYER_WIN"], function () {});
        }, n["createFruitNodes"] = function (t) {
          var n, r, i;
          return i = this["getNodeName"]() + t["fruitType"], (n = GbzPoolManager["ins"]["getNode"](i))["layer"] = Layers["Enum"]["DEFAULT"], this["createPoint"]["addChild"](n), (r = n["getComponent"](RigidBody2D) || n["addComponent"](RigidBody2D))["group"] = FruitConfig["RB_GROUPS"]["clickFruit"], r["type"] = ERigidBody2DType["Dynamic"], r["gravityScale"] = 13, n;
        }, n["getNodeName"] = function () {
          switch (this["curThemeType"]) {
            case 0:
              return "fruit";
            case 1:
              return "sweet";
            case 2:
              return "vegetable";
            case 3:
              return "animal";
            case 4:
              return "sea";
            case 5:
              return "candy";
            default:
              return "fruit";
          }
        }, n["recycleFruit"] = function () {
          for (var y = 0; y < this.fruitcomList["length"]; y++) {
            var _, M, S, A, C;
            if (_ = this.fruitcomList[y], this.polygonInfo["has"](_)) C = this.polygonInfo["get"](_), S = _.getComponent(CircleCollider2D), (A = _.getComponent(PolygonCollider2D)) || (A = _["addComponent"](PolygonCollider2D)), A["offset"] = C["bindOffset"], A["points"] = C["bindPoints"], A["enabled"] = !0, S["destroy"]();
            (M = _.getComponent(RigidBody2D))["gravityScale"] = 0, M["allowSleep"] = !0, M["bullet"] = !1, M["angularVelocity"] = 0, M["linearVelocity"] = math["v2"](0, 0), M["angularDamping"] = 0, M["linearDamping"] = 0, M["enabledContactListener"] = !1, M["type"] = ERigidBody2DType["Static"], GbzPoolManager["ins"]["putNode"](_), this.node.getChildByName("walls").getChildByName("left").active = !1, this.node.getChildByName("walls").getChildByName("right").active = !1;
          }
        }, n["changeToCircle"] = function (t) {
          var n, r, i, e;
          (i = null, n = t.getComponent(CircleCollider2D), r = t.getComponent(PolygonCollider2D)) && (e = function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "bindOffset", 0), Pu(t, "bindPoints", 0), (n = t).bindOffset = 0, n.bindPoints = 0, n;
            }["apply"]())["bindOffset"] = r["offset"]["clone"](), t["bindPoints"] = r["points"]["concat"](), t;
          }.apply(), r.enabled = !1, r["destroy"](), this["polygonInfo"]["set"](t, e));
          (i = n || t["addComponent"](CircleCollider2D)).enabled = !0, i["radius"] = this["getMaxRadius"](t), i["friction"] = .05, i["restitution"] = 0, i["sensor"] = !1, i.apply();
        }, n["getMaxRadius"] = function (t) {
          return Math["max"](t.getComponent(UITransform)["width"] / 2, t.getComponent(UITransform)["height"] / 2);
        }, n["tryPlayCreateSound"] = function () {
          var t;
          (t = Date["now"]()) - this.lastClickSoundTime >= this["clickSoundInterval"] && (this.lastClickSoundTime = t, GbzAudioManager["ins"]["play"](ENUM_CLIP["GAME_SPRAY"], !1, 5));
        }, a;
      }(Component))["prototype"], "createPoint", [R], (Pu(x = {}, "configurable", !0), Pu(x, "enumerable", !0), Pu(x, "writable", !0), Pu(x, "initializer", function () {
        return null;
      }), x)), E = D)) || E)), cclegacy._RF["pop"]();
    }, T;
  }["bind"](this)["apply"]();
});