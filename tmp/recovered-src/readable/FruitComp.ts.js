(function (t) {
  var inheritsLoose, createClass, cclegacy, _decorator, RigidBody2D, Node, UITransform, UIOpacity, Sprite, color, math, Layers, CircleCollider2D, PolygonCollider2D, ERigidBody2DType, Contact2DType, tween, Label, Tween, ParticleSystem2D, DistanceJoint2D, Component, FruitConfig, StreakComp, HoleComp, GameMgr, GbzPoolManager, GbzDataManager, ENUM_STATUS, ENUM_CLIP, GbzAudioManager, GbzSdkManager, SOUtil, gameMsg, GbzInstance;
  return function () {
    var G, O;
    return Pu(G = {}, "setters", 0), Pu(G, "execute", 0), (O = G).setters = [function (t) {
      inheritsLoose = t["inheritsLoose"], createClass = t["createClass"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], RigidBody2D = t["RigidBody2D"], Node = t["Node"], UITransform = t["UITransform"], UIOpacity = t["UIOpacity"], Sprite = t["Sprite"], color = t["color"], math = t["math"], Layers = t["Layers"], CircleCollider2D = t["CircleCollider2D"], PolygonCollider2D = t["PolygonCollider2D"], ERigidBody2DType = t["ERigidBody2DType"], Contact2DType = t["Contact2DType"], tween = t["tween"], Label = t["Label"], Tween = t["Tween"], ParticleSystem2D = t["ParticleSystem2D"], DistanceJoint2D = t["DistanceJoint2D"], Component = t["Component"];
    }, function (t) {
      FruitConfig = t["FruitConfig"];
    }, function (t) {
      StreakComp = t["StreakComp"];
    }, function (t) {
      HoleComp = t["HoleComp"];
    }, function (t) {
      GameMgr = t["default"];
    }, function (t) {
      GbzPoolManager = t["default"];
    }, function (t) {
      GbzDataManager = t["default"];
    }, function (t) {
      ENUM_STATUS = t["ENUM_STATUS"], ENUM_CLIP = t["ENUM_CLIP"];
    }, function (t) {
      GbzAudioManager = t["default"];
    }, function (t) {
      GbzSdkManager = t["default"];
    }, function (t) {
      SOUtil = t["default"];
    }, function (t) {
      gameMsg = t["gameMsg"];
    }, function (t) {
      GbzInstance = t["default"];
    }], O.execute = function () {
      var G, O;
      cclegacy._RF["push"]({}, "d0cbfZE7HhEdYOVgy/v3E6s", "FruitComp", void 0), G = _decorator["ccclass"], _decorator["property"], t("FruitComp", G("FruitComp")(O = function (t) {
        var i, e;
        return inheritsLoose(e = function () {
          for (var n, r, p = (n = arguments)["length"], g = new Array(p), y = 0; y < p; y++) g[y] = n[y];
          return (r = t["call"]["apply"](t, [this]["concat"](g)) || this)["isCircle"] = !0, r["ID"] = 0, r["fruitRigidbody"] = void 0, r["fruitCollider"] = null, r["squeezeCircle"] = null, r["initCom"] = !1, r["isTouch"] = !1, r["_isInSlot"] = !1, r["isCollider"] = !1, r["isCanTouch"] = !0, r["isShowedlandEff"] = !1, r["inCheckBox"] = !1, r["isCanCheck"] = !1, r["isColliderLR"] = !1, r["isLRAddForce"] = !1, r["isColliderSlotFruit"] = !1, r["iceCounts"] = 30, r["_holeComp"] = null, r["holeCompBind"] = null, r["sizeWH"] = new math["Vec2"](), r["fruitScale"] = .75, r["fruitType"] = 0, r["gravityScale"] = 13, r["restitution"] = 0, r["radius"] = 0, r["lastTime"] = 0, r["cooldown"] = 250, r["fallStartPos_"] = null, r["downOrgPos"] = null, r["isHolePos"] = !1, r["polygonInfo"] = null, r["isNoLg"] = !1, r["hitFruits"] = new Set(), r["originPos"] = math["v3"](), r["hitSoundDistSq"] = 2500, r["disJoint"] = null, r["jointFruit"] = null, r["isAutoDrop"] = !1, r["calculatedInfo_"] = null, r;
        }, t), (i = e["prototype"])["onLoad"] = function () {
          this["getCom"](), this["initParameter"]();
        }, i["onEnable"] = function () {
          SOUtil.on(gameMsg["CreateFruitEd"], this["onCreateFruitEd"], this), SOUtil.on(gameMsg["moveFruitAll"], this["onMoveFruitAll"], this), SOUtil.on(gameMsg["changelinearDamping"], this["onChangeLinearDamping"], this);
        }, i["onDisable"] = function () {
          SOUtil.off(gameMsg["CreateFruitEd"], this["onCreateFruitEd"], this), SOUtil.off(gameMsg["moveFruitAll"], this["onMoveFruitAll"], this), SOUtil.off(gameMsg["changelinearDamping"], this["onChangeLinearDamping"], this);
        }, i["onChangeLinearDamping"] = function () {
          this["fruitRigidbody"].linearDamping = GbzDataManager["ins"].linearDamping;
        }, i["getCom"] = function () {
          this.initCom || (this.initCom = !0, this["fruitRigidbody"] = this.node["getComponent"](RigidBody2D), this.node["on"](Node["EventType"]["TOUCH_START"], this["touchStart"], this));
        }, i["initParameter"] = function (t) {
          void 0 === t && (t = 0), this["hitFruits"]["clear"](), this["isAutoDrop"] = !1, this["isHolePos"] = !1, this["polygonInfo"] = null, this["squeezeCircle"] = null, this["lastTime"] = 0, this["isCanTouch"] = !1, this["isTouch"] = !1, this["isInSlot"] = !1, this["isCollider"] = !1, this["isColliderLR"] = !1, this["isLRAddForce"] = !1, this["isShowedlandEff"] = !1, this["inCheckBox"] = !1, this["isCanCheck"] = !1, this["isColliderSlotFruit"] = !1, this.sizeWH.x = this.node.getComponent(UITransform)["width"], this.sizeWH.y = this.node.getComponent(UITransform)["height"], this.node.getComponent(RigidBody2D)["group"] = FruitConfig["RB_GROUPS"]["fruit"], this.node.getComponent(UIOpacity)["opacity"] = 255, this.node.getComponent(Sprite)["color"] = color(255, 255, 255, 255), this.node["scale"] = new math["Vec3"](t, t, t), this["fallStartPos_"] = null, this["downOrgPos"] = null, this.node["layer"] = Layers["Enum"]["DEFAULT"];
        }, i["onCreateFruitEd"] = function () {}, i["init"] = function (t, n, r, i) {
          var e, a, u;
          (e = this, this.isCircle = -1 == GbzInstance["gameMgr"]["NotCrircles"]["indexOf"](this.node["name"]), this.node.getComponent(Sprite).enabled = !0, this["hitFruits"]["clear"](), this["holeCompBind"] = null, this["isNoLg"] = !1, this["initParameter"](), this.calculatedInfo_ = t, this["setfruitScale"](), this.radius = this.calculatedInfo_.radius, this["holeComp"] = r, this["ID"] = t.fruitType, this.fruitType = t["type"], 1 == this.fruitType && (this["iceCounts"] = t["unlockNum"]), this["downOrgPos"] = math["v2"](t.pos.x, t.pos.y), this["fruitCollider"] = this.node.getComponent(CircleCollider2D) || this.node.getComponent(PolygonCollider2D), this.isCircle) && (a = this.node.getComponent(CircleCollider2D), (u = this.node.getComponent(PolygonCollider2D)) && (this.polygonInfo = function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "bindOffset", 0), Pu(t, "bindPoints", 0), (n = t).bindOffset = 0, n.bindPoints = 0, n;
            }["apply"]())["bindOffset"] = u["offset"]["clone"](), t["bindPoints"] = u["points"]["concat"](), t;
          }.apply(), u.enabled = !1, u["destroy"]()), a ? (this.polygonInfo = function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "bindOffset", 0), Pu(t, "radius", 0), (n = t).bindOffset = 0, n.radius = 0, n;
            }["apply"]())["bindOffset"] = a["offset"]["clone"](), t.radius = a.radius, t;
          }.apply(), this.squeezeCircle = a) : this.squeezeCircle = this.node["addComponent"](CircleCollider2D));
          this.node["setPosition"](t.pos.x, t.pos.y), this["originPos"]["set"](this.node["position"]), this["checkBound"](), this["scheduleOnce"](function () {
            e.squeezeCircle && (e.squeezeCircle["enabled"] = !0, e.squeezeCircle["radius"] = e["getMaxRadius"](), e.squeezeCircle["friction"] = 0, e.squeezeCircle.restitution = e.restitution, e.squeezeCircle["apply"](), e["fruitCollider"] = e.squeezeCircle), e["scheduleOnce"](function () {
              e["setRigType"](ERigidBody2DType["Dynamic"], 0, !1);
            }, 0), e["setFruitType"](), e["anim"](n, function () {
              e["initContactCallBack"](), e["polygonInfo"] = null, 1 == e["fruitType"] ? i && i(e) : 3 == e["calculatedInfo_"]["type"] ? i && i(e["holeComp"]) : i && i();
            }, 1.3);
          }, 0);
        }, i["initContactCallBack"] = function () {
          var t;
          (t = this["fruitCollider"]) && (t.on(Contact2DType["BEGIN_CONTACT"], this["onBeginContact"], this), t.on(Contact2DType["END_CONTACT"], this["onEndContact"], this), t.on(Contact2DType["POST_SOLVE"], this["onPostSolve"], this));
        }, i["activeCircle"] = function (t) {
          var n, r;
          (n = this.node.getComponent(CircleCollider2D), t) ? ((r = this.node.getComponent(PolygonCollider2D)) && (r.enabled = !1, r["destroy"]()), this.squeezeCircle = n || this.node["addComponent"](CircleCollider2D), this.squeezeCircle["radius"] = this["getMaxRadius"](), this.squeezeCircle["friction"] = 0, this.squeezeCircle.restitution = this.restitution, this.squeezeCircle["apply"]()) : this["polygonInfo"] && n && (n.enabled = !1, this.node["removeComponent"](CircleCollider2D));
        }, i["getMaxRadius"] = function () {
          return this["node"]["getComponent"](UITransform)["width"] / 2;
        }, i["init2"] = function (t, n, r, i) {
          var e, a;
          a = this, this["hitFruits"]["clear"](), this["initParameter"](), this["calculatedInfo_"] = t, this["setfruitScale"](), this["holeComp"] = r, this["ID"] = t.fruitType, this.fruitType = t["type"], this["checkBound"](), this["fruitCollider"] = this.node.getComponent(CircleCollider2D) || this.node.getComponent(PolygonCollider2D), this["squeezeCircle"] = null, this["setRigType"](ERigidBody2DType["Static"]), this.node["setPosition"](t.pos.x, t.pos.y), this["originPos"]["set"](this.node["position"]), e = this["fruitScale"] - .1, this.node["scale"] = new math["Vec3"](e, e, e), this["initContactCallBack"](), this["anim"](n, function () {
            a["polygonInfo"] = null, i && i();
          });
        }, i["setfruitScale"] = function () {
          0 == GameMgr.instance.curThemeType ? this.fruitScale = this["calculatedInfo_"]["scale"] : 2 == GameMgr.instance.curThemeType || 5 == GameMgr.instance.curThemeType ? this.fruitScale = .68 : this.fruitScale = .65, this["radius"] = this["node"]["getComponent"](UITransform)["width"] * this.fruitScale / 2;
        }, i["anim"] = function (t, n, r) {
          var i, e;
          e = this, void 0 === r && (r = .8), i = function () {
            var t;
            (e.squeezeCircle && (e.polygonInfo && e.polygonInfo.bindPoints ? (e.node["removeComponent"](CircleCollider2D), e.fruitCollider = e.node["addComponent"](PolygonCollider2D), e.fruitCollider["enabled"] = !0, e.fruitCollider["points"] = e.polygonInfo.bindPoints, e.fruitCollider["offset"] = e.polygonInfo["bindOffset"], e.fruitCollider.apply(), e["fruitRigidbody"]["enabledContactListener"] = !0, e.squeezeCircle = null, e.polygonInfo = null) : e.polygonInfo && e.polygonInfo.radius && (e.squeezeCircle.radius = e.polygonInfo.radius, e.squeezeCircle.apply(), e.polygonInfo = null)), e["setRigType"](ERigidBody2DType["Static"]), 3 != e.fruitType || e.holeComp) || (e.fruitType = 0, t = GbzPoolManager["ins"]["getNode"]("holeBg"), GameMgr["instance"]["fruits"]["insertChild"](t, 0), e.holeComp = t["getComponent"](HoleComp), e.holeComp["init"](math["v2"](e.node.x, e.node.y), e, e["calculatedInfo_"]["holeFruitTyes"]));
            n && n();
          }, t ? (this["holeComp"] ? this.setRigType(ERigidBody2DType["Static"], 0, !1) : this.setRigType(ERigidBody2DType["Dynamic"], 0, !1), tween(this.node)["to"](r, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "scale", 0)).scale = 0, t;
            }["apply"]())["scale"] = math["v3"](this.fruitScale, this.fruitScale, this.fruitScale), t;
          }["bind"](this).apply(), function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "easing", 0)).easing = 0, t;
            }["apply"]())["easing"] = "backOut", t;
          }.apply())["call"](function () {
            e["node"]["scale"] = math["v3"](e.fruitScale, e.fruitScale, e.fruitScale), i();
          })["start"]()) : (this.node["scale"] = math["v3"](this.fruitScale, this.fruitScale, this.fruitScale), i());
        }, i["setFruitType"] = function () {
          var t;
          switch (t = this.node.getComponent(UITransform), this["fruitType"]) {
            case 1:
              var p = GbzPoolManager.ins.getNode("iceLab", this.node),
                g = this.node.getComponent(UITransform);
              p.active = !0;
              var y = t.width / g.width + .15;
              p.scale = math.v3(y, y, y), p.setPosition(0, 0), p["children"][0].angle = -this.node.angle, this["upIceLa"]();
              break;
            case 2:
              var w = GbzPoolManager.ins.getNode("blackBox", this.node);
              this.node.getComponent(UITransform), w.active = !0;
              var _ = .55 / this["fruitScale"];
              w.scale = math.v3(_, _, _), w.setPosition(0, 0), w.angle = -this.node.angle, this.node.getComponent(Sprite)["enabled"] = !1;
          }
        }, i["setRigType"] = function (t, n, r) {
          void 0 === n && (n = 0), void 0 === r && (r = !0), this["isNoLg"] || (this.fruitCollider["sensor"] = !1, this.fruitCollider["density"] = 1, this.fruitCollider["friction"] = 0, this.fruitCollider.restitution = this.restitution, this.fruitCollider["enabled"] = !0, r && this.fruitCollider["apply"](), this.fruitRigidbody["enabledContactListener"] = !0, this.fruitRigidbody["gravityScale"] = n, this.fruitRigidbody["angularVelocity"] = 0, this.fruitRigidbody["linearVelocity"] = math["v2"](0, 0), this.fruitRigidbody["angularDamping"] = 0, this.fruitRigidbody.linearDamping = GbzDataManager["ins"].linearDamping, this.fruitRigidbody["type"] = t, t == ERigidBody2DType["Static"] || t == ERigidBody2DType["Kinematic"] ? (this.fruitRigidbody.allowSleep = !0, this.fruitRigidbody.bullet = !1) : t == ERigidBody2DType["Dynamic"] && (r ? (this.fruitRigidbody.allowSleep = !1, this.fruitRigidbody.bullet = !0) : (this.fruitRigidbody.allowSleep = !0, this.fruitRigidbody.bullet = !1)));
        }, i["hideCollider"] = function (t) {
          var n;
          n = this, this["isNoLg"] || this["scheduleOnce"](function () {
            n.fruitCollider.enabled && (n.fruitCollider["sensor"] = !0, n.fruitCollider.enabled = !1), n.fruitRigidbody && (n.fruitRigidbody["gravityScale"] = 0, n.fruitRigidbody["allowSleep"] = !0, n.fruitRigidbody["bullet"] = !1, n.fruitRigidbody["angularVelocity"] = 0, n.fruitRigidbody["linearVelocity"] = math["v2"](0, 0), n.fruitRigidbody["angularDamping"] = 0, n.fruitRigidbody["linearDamping"] = 0, n.fruitRigidbody["enabledContactListener"] = !1, n.fruitRigidbody["type"] = ERigidBody2DType["Static"]), t && t();
          }, 0);
        }, i["showCollider"] = function () {
          this.fruitCollider = this.node.getComponent(CircleCollider2D) || this.node.getComponent(PolygonCollider2D), this.fruitCollider && (this.fruitCollider["sensor"] = !1, this.fruitCollider["enabled"] = !0), this.fruitRigidbody = this.node.getComponent(RigidBody2D) || this.node.getComponent(RigidBody2D), this.fruitRigidbody && (this.fruitRigidbody["enabledContactListener"] = !0, this.fruitRigidbody["bullet"] = !0, this.fruitRigidbody["type"] = ERigidBody2DType["Dynamic"]), this.fruitRigidbody = null, this.fruitCollider = null;
        }, i["movePos"] = function (t, n, r, i, e, a) {
          var u;
          u = this, void 0 === i && (i = 1), void 0 === e && (e = .4), void 0 === a && (a = !1), this["unscheduleAllCallbacks"](), e <= 0 && (e = .1), this.node.getComponent(UIOpacity)["opacity"] = 255, this.node.getComponent(Sprite)["color"] = color(255, 255, 255, 255), this["hideCollider"](function () {
            i > 0 ? tween(u.node)["to"](i, function () {
              var t;
              return (t = function () {
                var t;
                return (t = Pu({}, "position", 0)).position = 0, t;
              }["apply"]())["position"] = n["clone"](), t;
            }["apply"]())["call"](function () {
              null != t && (u["node"]["scale"] = math["v3"](t, t, t)), u["anim"](!0, function () {
                u["isTouch"] = a, r && r();
              }, e);
            })["start"]() : (u.node["setPosition"](n), null != t && (u.node["scale"] = math["v3"](t, t, t)), u["anim"](!0, function () {
              u["isTouch"] = a, r && r();
            }, e));
          });
        }, i["iceBox"] = function () {
          1 == this["fruitType"] && (this.iceCounts--, this.iceCounts <= 0 ? this["unlockFruit"]() : this["upIceLa"]());
        }, i["unlockFruit"] = function () {
          0 != this.fruitType && (this.fruitType = 0, this["recycleIceAndBlock"](), 1 == this.fruitType && (this["iceCounts"] = 0, GameMgr["instance"]["fruitSplice"](this)));
        }, i["upIceLa"] = function () {
          var t, n;
          t = this, n = this.node.children[0].children[0]["getComponent"](Label), Tween["stopAllByTarget"](n.node), n.node["scale"] = math["v3"](1, 1, 1), tween(n.node).to(.2, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "scale", 0)).scale = 0, t;
            }["apply"]())["scale"] = math["v3"](1.5, 1.5, 1.5), t;
          }.apply(), function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "easing", 0)).easing = 0, t;
            }["apply"]())["easing"] = "backIn", t;
          }.apply()).call(function () {
            n["string"] = t["iceCounts"]["toString"]();
          }).to(.2, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "scale", 0)).scale = 0, t;
            }["apply"]())["scale"] = math["v3"](1, 1, 1), t;
          }.apply(), function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "easing", 0)).easing = 0, t;
            }["apply"]())["easing"] = "backOut", t;
          }.apply()).call(function () {
            n["node"]["scale"] = math["v3"](1, 1, 1);
          })["start"]();
        }, i["checkBound"] = function () {
          var t;
          switch (t = GameMgr.instance.node["getComponent"](UITransform), GameMgr.instance.arrangeType) {
            case 0:
            case 1:
              this.isCanTouch = !0;
              break;
            case 2:
              this.node.x < -t.width / 2 + 30 ? this.black() : this.light();
              break;
            case 3:
              var l = t.width / 2 - 30;
              this.node.x > l ? this.black() : this.light();
              break;
            case 4:
              this.node.x > t.width / 2 - 30 || this.node.x < -t.width / 2 + 30 ? this.black() : this.light();
          }
          GameMgr.instance.arrangeType > 1 && this.isCanTouch && this["fruitDrop"]();
        }, i["fruitDrop"] = function () {
          var t;
          t = GameMgr.instance["line"].x, Math["abs"](t - this["node"].x) < 50 && (this["isTouch"] = !0, this["isAutoDrop"] = !0, this["setRigType"](ERigidBody2DType["Dynamic"], this["gravityScale"]), GameMgr.instance["setLastTouchFruit"](this, !1));
        }, i["touchStart"] = function (t) {
          this["isNoLg"] || GbzDataManager.ins["status"] != ENUM_STATUS["UNRUN"] && (1 != this["fruitType"] ? this["isCanTouch"] && (this.isTouch || (GameMgr.instance["setLastTouchFruit"](this, !1), this["fruitRigidbody"]["group"] = FruitConfig["RB_GROUPS"]["clickFruit"], this["clickTween"](), this.node["setScale"](this.fruitScale, this.fruitScale, this.fruitScale), this.isTouch = !0, this["holeComp"] || (this["fallStartPos_"] = math.v2(this.node.x, this.node.y)), this["downOrgPos"] = math.v2(this.node.x, this.node.y), this["breakHole"](), GameMgr.instance["fruitDown"](), this.node.getComponent(UIOpacity)["opacity"] = 255, this.node.getComponent(Sprite)["color"] = color(255, 255, 255, 255), Tween["stopAllByTarget"](this.node), this["setRigType"](ERigidBody2DType["Dynamic"], this["gravityScale"]), GameMgr.instance["showLeader"](), GbzAudioManager.ins["play"](ENUM_CLIP["btn_FruitClick"]), GameMgr.instance["addTouchFruit"](this))) : GameMgr.instance["iceTip"]());
        }, i["breakHole"] = function () {
          this.holeComp && (this.holeComp["isUpdate"] = !0, this.holeComp = null);
        }, i["fruitReset"] = function () {
          this["initParameter"](this["fruitScale"]), this["setRigType"](ERigidBody2DType["Static"]), this["checkBound"](), this["originPos"]["set"](this["node"]["position"]);
        }, i["update"] = function (t) {
          this["isBind"] || this["isNoLg"] || GbzDataManager["ins"]["status"] != ENUM_STATUS["UNRUN"] && this["isTouch"] && (2 == this["fruitType"] && this.node["children"]["length"] > 0 && this.node.y <= GameMgr.instance.canCheck.y && this["unlockFruit"](), this.node.y <= GameMgr.instance.canCheck.y ? this.isCanCheck = !0 : this.isCanCheck = !1);
        }, i["onPostSolve"] = function (t, n, r) {
          var i;
          this["isBind"] || this["isNoLg"] || GbzDataManager["ins"]["status"] == ENUM_STATUS["UNRUN"] || (i = n["node"], this["checkID"](i), this["checkDropWall"](i));
        }, i["onBeginContact"] = function (t, n, r) {
          if (!this["isBind"] && !this["isNoLg"] && GbzDataManager["ins"]["status"] != ENUM_STATUS["UNRUN"]) switch (n["node"]["name"]) {
            case "canCheck":
              this["inCheckBox"] = !0, this.fruitCollider && (this.fruitCollider["friction"] = .2);
              break;
            case "dropRight":
            case "dropLeft":
              this.fallStartPos_ = null, this.isColliderLR || this["hitPower"](), this["isCanTouch"] && (this.isColliderLR = !0);
              break;
            case "btnFirstWall":
            case "btnSecondWall":
            case "floor":
              this.fallStartPos_ = null;
          }
        }, i["onEndContact"] = function (t, n, r) {
          this["isBind"] || this["isNoLg"] || GbzDataManager["ins"]["status"] != ENUM_STATUS["UNRUN"] && "canCheck" == n["node"]["name"] && (this["inCheckBox"] = !1);
        }, i["checkDropWall"] = function (t) {
          if (!this["isNoLg"] && this["isTouch"] && !this.isLRAddForce && ("dropRight" == t.name || "dropLeft" == t.name)) {
            var g, w, _, M, S, A, C;
            if (GbzAudioManager.ins["play"](ENUM_CLIP["GAME_LAND"], !1, 5), _ = t["angle"] * Math["PI"] / 180, w = -Math["sin"](_), M = -Math["cos"](_), ("dropRight" == t.name && w > 0 || "dropLeft" == t.name && w < 0) && (w = -w), g = 125 + 20 * Math["random"](), new math["Vec2"](w, M)["normalize"]()["multiplyScalar"](g), !this.isShowedlandEff) C = new math["Vec3"](this.node.position.x, this.node.position.y - 60, 0), this.isShowedlandEff = !0, S = Math["floor"](GbzDataManager.ins["game_level"] / 10) % 4, (A = GbzPoolManager.ins["getNode"]("landEff" + S, this.node["parent"], C)) && A["getComponent"](ParticleSystem2D)["resetSystem"]();
            this.isLRAddForce = !0;
          }
        }, i["checkID"] = function (t) {
          var n, r;
          if (n = this, !this["isNoLg"] && GbzDataManager.ins["status"] != ENUM_STATUS["UNRUN"]) if (r = t["getComponent"](e)) {
            var G, O, F, B, z;
            if (O = t["uuid"], (B = (z = this.node["position"]).x - this.originPos.x) * B + (G = z.y - this.originPos.y) * G >= this["hitSoundDistSq"] && !this.hitFruits["has"](O) && (this.hitFruits["add"](O), this["hitPower"](), GbzAudioManager.ins["play"](ENUM_CLIP["GAME_CLICK"])), F = function () {
              n.isCollider || r.isCollider || GbzDataManager.ins["status"] != ENUM_STATUS["UNRUN"] && (n.fruitRigidbody["linearVelocity"] = math["v2"](0, 0), n.fruitRigidbody["angularVelocity"] = 0, n.isCollider = !0, r.isCollider = !0, n.isJoint && GameMgr.instance.jointGearMgr.removeRopeByFruit(n.node), r.isJoint && GameMgr.instance.jointGearMgr.removeRopeByFruit(r.node), n.hideCollider(function () {
                GameMgr["instance"]["fruitTween"](n, null, !0);
              }), r.hideCollider(function () {
                GameMgr["instance"]["fruitTween"](r);
              }), GbzAudioManager.ins["playComboSound"](), GameMgr.instance["lineOpacity"](), GameMgr.instance["setLastTouchFruit"](n, !0), GameMgr.instance["onEliminatePair"]());
            }, this.isCanCheck && r.isCanCheck && this.ID == r.ID) return void F();
            if (!r.isInSlot && !this.isInSlot) return;
            if (this.ID == r.ID && !this.isBind && !r.isBind) return void F();
            if (r.isInSlot && !this.isInSlot && !this.isBind) return this.isColliderSlotFruit || (this.fruitRigidbody["linearVelocity"] = math["v2"](0, 0), this.isColliderSlotFruit = !0), this.fruitRigidbody["angularVelocity"] = 0, this.isJoint && GameMgr.instance.jointGearMgr.removeRopeByFruit(this.node), GameMgr.instance.addInSlotFruit(this), void GameMgr.instance.setLastTouchFruit(this, !0);
          } else switch (t["name"]) {
            case "dropLeft":
            case "dropRight":
              return void GameMgr.instance.setLastTouchFruit(this, !0);
            case "btnFirstWall":
            case "btnSecondWall":
            case "floor":
              return this["unlockFruit"](), this.isJoint && GameMgr.instance.jointGearMgr.removeRopeByFruit(this.node), GameMgr.instance.addInSlotFruit(this), void GameMgr.instance.setLastTouchFruit(this, !0);
          }
        }, i["black"] = function () {
          this["isCanTouch"] = !1, this.node.getComponent(UIOpacity)["opacity"] = 125, this.node.getComponent(Sprite)["color"] = color(65, 65, 65);
        }, i["light"] = function () {
          this["isCanTouch"] = !0, this.node.getComponent(UIOpacity)["opacity"] = 255, this.node.getComponent(Sprite)["color"] = color(255, 255, 255);
        }, i["clickTween"] = function () {
          var t;
          !this["isNoLg"] && this["isTouch"] && (Tween["stopAllByTarget"](this.node), t = this.node["getComponent"](UITransform), tween(t).to(.1, function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "width", 0), Pu(t, "height", 0), (n = t).width = 0, n.height = 0, n;
            }["apply"]())["width"] = .95 * this.sizeWH.x, t["height"] = .95 * this.sizeWH.y, t;
          }.bind(this).apply()).to(.1, function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "width", 0), Pu(t, "height", 0), (n = t).width = 0, n.height = 0, n;
            }["apply"]())["width"] = this.sizeWH.x, t["height"] = this.sizeWH.y, t;
          }.bind(this).apply())["tag"](1)["start"]());
        }, i["recycleSelf"] = function () {
          this["removeJoint"](), this["hitFruits"]["clear"](), GameMgr["instance"]["fruitSplice"](this), Tween["stopAllByTarget"](this.node), this.node["off"](Node["EventType"]["TOUCH_START"], this["touchStart"], this), this["initParameter"](this["fruitScale"]), this["hideCollider"](), this["recycleIceAndBlock"](), this.holeComp && (this.holeComp["recycle"](), this.holeComp = null), this["fruitRigidbody"] = null, this["fruitCollider"] = null, this["squeezeCircle"] = null, this["destroy"](), this.node["removeFromParent"](), GbzPoolManager["ins"]["putNode"](this.node);
        }, i["recycleIceAndBlock"] = function () {
          var t;
          (t = this.node["children"][0]) && (t["removeFromParent"](), GbzPoolManager["ins"]["putNode"](t)), this.node["getComponent"](Sprite)["enabled"] = !0;
        }, i["hitPower"] = function () {
          GbzSdkManager["ins"]["vibrateShort"](null);
        }, i["streakFun"] = function () {
          GbzPoolManager["ins"]["getNode"]("streak", this.node["parent"])["addComponent"](StreakComp)["init"](this.node);
        }, i["initJoint"] = function (t) {
          var n;
          this.disJoint || (this.disJoint = this.node["getComponent"](DistanceJoint2D) || this.node["addComponent"](DistanceJoint2D), this.disJoint["connectedBody"] = t, n = math["Vec2"]["distance"](this.node.getPosition(), t.node.getPosition()), this.disJoint["maxLength"] = n, this.disJoint["apply"]());
        }, i["removeJoint"] = function () {
          this.disJoint && (this["jointFruit"] = null, this.disJoint["connectedBody"] = null, this.disJoint["destroy"](), this.disJoint = null);
        }, i["electricShock"] = function () {
          var t, n;
          n = this, this["fruitRigidbody"]["group"] = FruitConfig["RB_GROUPS"]["clickFruit"], this["isTouch"] = !0, this["holeComp"] || (this["fallStartPos_"] = math["v2"](this.node.x, this.node.y)), this["breakHole"](), (t = this.node["getComponent"](Sprite)) && (t["color"] = color(255, 255, 255, 255)), Tween["stopAllByTarget"](this.node), tween(this.node)["repeat"](1, tween(this.node).to(.1, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "angle", 0)).angle = 0, t;
            }["apply"]())["angle"] = 15, t;
          }.apply()).to(.1, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "angle", 0)).angle = 0, t;
            }["apply"]())["angle"] = -15, t;
          }.apply()).to(.1, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "angle", 0)).angle = 0, t;
            }["apply"]())["angle"] = 15, t;
          }.apply()).to(.1, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "angle", 0)).angle = 0, t;
            }["apply"]())["angle"] = 0, t;
          }.apply()))["call"](function () {
            n["setRigType"](ERigidBody2DType["Dynamic"], n["gravityScale"]);
          })["start"]();
        }, i["onMoveFruitAll"] = function (t) {
          var n;
          this.downOrgPos && (n = this.downOrgPos.y + t, n = Math["max"](n, GameMgr["instance"]["boundaryLine"].y), this.downOrgPos.y = n);
        }, createClass(e, [function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), Pu(t, "set", 0), (n = t).key = 0, n.get = 0, n.set = 0, n;
          }["apply"]())["key"] = "isInSlot", t["get"] = function () {
            return this["_isInSlot"];
          }, t["set"] = function (t) {
            this["_isInSlot"] = t;
          }, t;
        }.bind(this).apply(), function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), Pu(t, "set", 0), (n = t).key = 0, n.get = 0, n.set = 0, n;
          }["apply"]())["key"] = "holeComp", t["get"] = function () {
            return this["_holeComp"];
          }, t["set"] = function (t) {
            this["_holeComp"] = t, t && (this["isHolePos"] = !0, this["holeCompBind"] = t);
          }, t;
        }.bind(this).apply(), function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t).key = 0, n.get = 0, n;
          }["apply"]())["key"] = "isJoint", t["get"] = function () {
            return null != this["disJoint"];
          }, t;
        }.bind(this).apply(), function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t).key = 0, n.get = 0, n;
          }["apply"]())["key"] = "isBind", t["get"] = function () {
            return this.jointFruit && !this.jointFruit["isTouch"] && this["isJoint"];
          }, t;
        }.bind(this).apply()]), e;
      }(Component)) || O), cclegacy._RF["pop"]();
    }, O;
  }["bind"](this)["apply"]();
});