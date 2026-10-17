(function (t) {
  var applyDecoratedDescriptor, inheritsLoose, initializerDefineProperty, assertThisInitialized, createForOfIteratorHelperLoose, cclegacy, _decorator, Material, Node, Graphics, math, Widget, BoxCollider2D, Label, Sprite, PhysicsSystem2D, EPhysics2DDrawFlags, ERigidBody2DType, UIOpacity, tween, UITransform, RigidBody2D, Vec2, Tween, color, Vec3, ParticleSystem2D, PolygonCollider2D, view, Component, FruitComp, HoleComp, ReferenceMgr, GbzFruitDownLayer, ReferenceLayMgr, FruitConfig, CalculatedInfo, GbzDataManager, LocalData, ENUM_GAME_STATE, ENUM_STATUS, ENUM_UI, ENUM_CLIP, ENUM_Theme_Sprites_Sub, GbzMainLayer, GbzInstance, GbzPoolManager, SOUtil, GbzSdkManager, GbzResManager, ResType, reporter, PkManager, GbzAudioManager, Tool2, CityConfig, JointGearMgr, ScoreLvMgr, gameMsg, LayoutRectSafe, ViewFPS, Log, ChuiziCom, WxIAAMgr;
  return function () {
    var ht, vt;
    return Pu(ht = {}, "setters", 0), Pu(ht, "execute", 0), (vt = ht).setters = [function (t) {
      applyDecoratedDescriptor = t["applyDecoratedDescriptor"], inheritsLoose = t["inheritsLoose"], initializerDefineProperty = t["initializerDefineProperty"], assertThisInitialized = t["assertThisInitialized"], createForOfIteratorHelperLoose = t["createForOfIteratorHelperLoose"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], Material = t["Material"], Node = t["Node"], Graphics = t["Graphics"], math = t["math"], Widget = t["Widget"], BoxCollider2D = t["BoxCollider2D"], Label = t["Label"], Sprite = t["Sprite"], PhysicsSystem2D = t["PhysicsSystem2D"], EPhysics2DDrawFlags = t["EPhysics2DDrawFlags"], ERigidBody2DType = t["ERigidBody2DType"], UIOpacity = t["UIOpacity"], tween = t["tween"], UITransform = t["UITransform"], RigidBody2D = t["RigidBody2D"], Vec2 = t["Vec2"], Tween = t["Tween"], color = t["color"], Vec3 = t["Vec3"], ParticleSystem2D = t["ParticleSystem2D"], PolygonCollider2D = t["PolygonCollider2D"], view = t["view"], Component = t["Component"];
    }, function (t) {
      FruitComp = t["FruitComp"];
    }, function (t) {
      HoleComp = t["HoleComp"];
    }, function (t) {
      ReferenceMgr = t["default"];
    }, function (t) {
      GbzFruitDownLayer = t["default"];
    }, function (t) {
      ReferenceLayMgr = t["default"];
    }, function (t) {
      FruitConfig = t["FruitConfig"];
    }, function (t) {
      CalculatedInfo = t["default"];
    }, function (t) {
      GbzDataManager = t["default"];
    }, function (t) {
      LocalData = t["LocalData"];
    }, function (t) {
      ENUM_GAME_STATE = t["ENUM_GAME_STATE"], ENUM_STATUS = t["ENUM_STATUS"], ENUM_UI = t["ENUM_UI"], ENUM_CLIP = t["ENUM_CLIP"], ENUM_Theme_Sprites_Sub = t["ENUM_Theme_Sprites_Sub"];
    }, function (t) {
      GbzMainLayer = t["default"];
    }, function (t) {
      GbzInstance = t["default"];
    }, function (t) {
      GbzPoolManager = t["default"];
    }, function (t) {
      SOUtil = t["default"];
    }, function (t) {
      GbzSdkManager = t["default"];
    }, function (t) {
      GbzResManager = t["default"], ResType = t["ResType"];
    }, function (t) {
      reporter = t["reporter"];
    }, function (t) {
      PkManager = t["default"];
    }, function (t) {
      GbzAudioManager = t["default"];
    }, function (t) {
      Tool2 = t["default"];
    }, function (t) {
      CityConfig = t["default"];
    }, function (t) {
      JointGearMgr = t["default"];
    }, function (t) {
      ScoreLvMgr = t["default"];
    }, function (t) {
      gameMsg = t["gameMsg"];
    }, function (t) {
      LayoutRectSafe = t["default"];
    }, function (t) {
      ViewFPS = t["default"];
    }, function (t) {
      Log = t["Log"];
    }, function (t) {
      ChuiziCom = t["ChuiziCom"];
    }, function (t) {
      WxIAAMgr = t["default"];
    }], vt.execute = function () {
      var ht, vt, lt, bt, dt, kt, mt, pt, gt, yt, wt, _t, Mt, Ct, xt, Lt, It, Rt, Dt, Nt, Pt, Gt, Ot, Ft, Bt, zt, Ut, Ht, Vt, Wt, Jt, jt, qt, Kt, Yt, Xt, Zt, Qt, $t;
      cclegacy._RF["push"]({}, "d2634BH/IBDuqK7wdEJOpTl", "GameMgr", void 0), _t = _decorator["ccclass"], Mt = _decorator["property"], t("default", (Ct = _t("GameMgr"), xt = Mt(Material), Lt = Mt(Material), It = Mt(Material), Rt = Mt(Node), Dt = Mt(Node), Nt = Mt(Node), Pt = Mt(Node), Gt = Mt(Node), Ot = Mt(Graphics), Ft = Mt(JointGearMgr), Bt = Mt(GbzFruitDownLayer), Ct((($t = function (t) {
        var n, u;
        return inheritsLoose(u = function () {
          for (var n, r, S = (n = arguments)["length"], A = new Array(S), C = 0; C < S; C++) A[C] = n[C];
          return (r = t["call"].apply(t, [this]["concat"](A)) || this)["reliveCount"] = 1, r["fruitsInSlotComp"] = [], r["fruitsComp"] = [], r["iceComps"] = [], r["holeComps"] = [], r["labFruit"] = void 0, r["labProgress"] = void 0, r["fillImg"] = void 0, r["fillBg"] = void 0, r["basket"] = void 0, r["boundaryLine"] = void 0, r["btnFirstWall"] = void 0, r["btnSecondWall"] = void 0, r["slotsNum"] = 3, r["colorLimit"] = 3, r["dirtectionTip"] = null, r["levelBg"] = void 0, initializerDefineProperty(r, "materialAttacked", Ht, assertThisInitialized(r)), initializerDefineProperty(r, "normalMaterial", Vt, assertThisInitialized(r)), initializerDefineProperty(r, "lightMaterial", Wt, assertThisInitialized(r)), r["curThemeType"] = 2, r["fruitTotalNum"] = 40, r["fruitRemnantNum"] = 200, r["leaderTip"] = null, r["firstLevelIDS"] = [[9, 9, 9, 9], [1, 1, 1, 1], [2, 2, 2, 2]], r["firstLevelBg"] = null, r["finger"] = null, r["canCheck"] = null, r["leftWall"] = null, r["rightWall"] = null, r["topWall"] = null, r["bottomWall"] = null, r["floor"] = null, r["middleBox"] = null, r["policeLineFruit"] = null, r["lastTouchFruit"] = [], r["line"] = void 0, r["arrangeType"] = 1, r["baseY"] = 120, initializerDefineProperty(r, "obstaclesRoot", Jt, assertThisInitialized(r)), initializerDefineProperty(r, "stakeRoot", jt, assertThisInitialized(r)), initializerDefineProperty(r, "fruits", qt, assertThisInitialized(r)), initializerDefineProperty(r, "numRoot", Kt, assertThisInitialized(r)), initializerDefineProperty(r, "effsRoot", Yt, assertThisInitialized(r)), initializerDefineProperty(r, "jointGraphics", Xt, assertThisInitialized(r)), initializerDefineProperty(r, "jointGearMgr", Zt, assertThisInitialized(r)), r["isDowning"] = !1, r["activeTween"] = !1, r["currentLevel"] = 1, r["fruitConfig"] = null, r["fruitsIDS"] = [], initializerDefineProperty(r, "FruitDownLayer", Qt, assertThisInitialized(r)), r["isSpecialProp_"] = !1, r["getedFruitList"] = [], r["bgMoveDis"] = math["v2"](0, 0), r["gameRoot"] = void 0, r["lastTouchFruitComp"] = function () {
            var t, n;
            return Pu(t = {}, "fruitComp", 0), Pu(t, "isDown", 0), (n = t).fruitComp = null, n.isDown = !1, n;
          }.apply(), r["clickCount"] = 0, r["moveDistance"] = 7, r["isBreaking"] = !1, r["isIceTip"] = !1, r["time_"] = 0, r["totalTime_"] = .2, r["stoneStrJs"] = "水果解锁砖", r["stoneStr"] = "水果砖", r["dirImgStr"] = ["xiangxia大", "向右大", "向左大", "中间大", "雪花大", "未知", "黑洞"], r["dirLabStr"] = ["从上往下移动", "从左往右移动", "从右往左移动", "从两侧往中间移动", "通过消除解锁冰冻水果", "掉落解锁未知水果", "黑洞内有多个水果"], r["lastReportedProgress"] = 0, r["viewTime_"] = 0, r["viewMaxTime_"] = 25, r;
        }, t), (n = u["prototype"])["onLoad"] = function () {
          var t;
          ViewFPS.getInstance() && ViewFPS.getInstance()["checkLowFps"](), this.gameRoot = this.node.getChildByName("game"), this.node.getComponent(Widget)["updateAlignment"](), this.node["getComponentsInChildren"](Widget)["forEach"](function (t) {
            t["updateAlignment"]();
          }), this["showGameMoveAni"](!0), t = this.gameRoot.getChildByName("walls"), this.line = t.getChildByName("line"), this["leftWall"] = t.getChildByName("left"), this["rightWall"] = t.getChildByName("right"), this["topWall"] = t.getChildByName("top"), this["bottomWall"] = t.getChildByName("bottom"), this.floor = t.getChildByName("floor"), this.middleBox = t.getChildByName("middleBox").getComponent(BoxCollider2D), this.middleBox.node["active"] = !1, this.labFruit = this.gameRoot.getChildByName("fruitTextBg").getChildByName("labFruit").getComponent(Label), this["basket"] = this.gameRoot.getChildByName("basket01"), this.btnFirstWall = t.getChildByName("btnFirstWall"), this.btnSecondWall = t.getChildByName("btnSecondWall"), this.leaderTip = this.gameRoot.getChildByName("leaderTip"), this.fillImg = this.gameRoot.getChildByName("progressBg").getChildByName("fillImg").getComponent(Sprite), this.fillBg = this.gameRoot.getChildByName("progressBg").getChildByName("fillBg").getComponent(Sprite), this.labProgress = this.gameRoot.getChildByName("progressBg").getChildByName("labProgress").getComponent(Label), this.canCheck = t.getChildByName("canCheck"), this.boundaryLine = this.gameRoot.getChildByName("boundaryLine"), this.dirtectionTip = this.gameRoot.getChildByName("dirtectionTip"), this["firstLevelBg"] = this.gameRoot.getChildByName("firstLevel"), this.levelBg = this.gameRoot.getChildByName("levelBg"), this.btnFirstWall["on"](Node["EventType"]["TOUCH_END"], this["breakWall"], this), this["setPysicsMgr"](!0), this["setEnabledAccumulator"](!0), u.instance || (u.instance = this);
        }, n["setPysicsMgr"] = function (t) {
          PhysicsSystem2D["instance"]["enable"] = t;
        }, n["setCollisionMgr"] = function (t) {}, n["setEnabledAccumulator"] = function (t) {
          PhysicsSystem2D["instance"];
        }, n["openPhysicsDebug"] = function () {
          PhysicsSystem2D["instance"]["debugDrawFlags"] = EPhysics2DDrawFlags["Shape"];
        }, n["start"] = function () {
          var t;
          t = this, GbzInstance["gameMgr"]["gameState"] = ENUM_GAME_STATE["isPlaying"], Log("```````````````````````````````", GbzDataManager.ins.fakeGame_level), this["boundaryLine"]["getComponent"](Widget)["updateAlignment"](), this["dirtectionTip"].active = !1, this["levelBg"]["getChildByName"]("img").active = !1, this["isSpecialProp_"] = GbzDataManager.ins.fakeGame_level > 1 && LocalData["inst"]["getUndergoLv"](), this["reliveCount"] = 1, GbzDataManager.ins["skillIndex"] = -1, this["curThemeType"] = GbzDataManager.ins["useSkinId"], GbzMainLayer["_GbzMainLayer"]["refesh"](), GbzDataManager.ins["status"] = ENUM_STATUS["UNRUN"], this["colorLoop"](), this["changeThemeBG"](), this["getImgFill"](), this["initLevel"](function (n) {
            var r;
            t["init"](), r = 0, n && (t["blitzkrieg"](), r = .5), t["scheduleOnce"](function () {
              t["isSpecialProp_"] && GbzInstance["uiMgr"]["toggle"](ENUM_UI["LAYER_Prop_Special"], !0, null, Math["random"]() > .5 ? 1 : 0);
            }, r);
          });
        }, n["initLevel"] = function (t) {
          var n;
          if (n = this, this["bgMoveDis"]["set"](math["v2"](0, 0)), ScoreLvMgr.inst["resetSlotItemPopuped"](), this["gameRoot"].y = 0, this["showGameMoveAni"](!0), this.node["getComponent"](Widget)["updateAlignment"](), this.node["getComponentsInChildren"](Widget)["forEach"](function (t) {
            t["updateAlignment"]();
          }), this["getedFruitList"] = [], this["setCollisionMgr"](!1), this.middleBox.node.active = !1, this.currentLevel = GbzDataManager.ins["game_level"], WxIAAMgr.inst["Level_Enter"](GbzDataManager.ins["fakeGame_level"]), 1 == this.currentLevel) this.arrangeType = 1, this["clickCount"] = 0, this.fruitTotalNum = 12, this.fruitRemnantNum = this.fruitTotalNum, this.updateFruitText(!0), this.setTip(), this.initWall(0), this["firstLevel"](function () {
            for (var u in n["setCollisionMgr"](!0), t && t(), n["hideWall"](), n.fruitsComp) n.fruitsComp[u]["setRigType"](ERigidBody2DType["Static"]);
            SOUtil["emit"](gameMsg["CreateFruitEd"]), WxIAAMgr["inst"]["TutorialStart"]();
          });else {
            var U, H;
            switch (H = ReferenceLayMgr.inst["genLvMapData"](this.currentLevel, this["boundaryLine"].y, this["stakeRoot"], this["obstaclesRoot"]), this.fruitConfig = H["info"], this.fruitConfig.moveDir) {
              case FruitConfig.MoveDirection["NONE"]:
                this.arrangeType = 0;
                break;
              case FruitConfig.MoveDirection["DOWN"]:
                this.arrangeType = 1;
                break;
              case FruitConfig.MoveDirection["RIGHT"]:
                this.arrangeType = 2;
                break;
              case FruitConfig.MoveDirection["LEFT"]:
                this.arrangeType = 3;
            }
            this.initWall(this.fruitConfig.moveDir), this.fruitConfig.woodenObs > 0 && (6 == this.fruitConfig.woodenObs ? this["setLeftAndRightBoxWidth"](345) : 2 == this.fruitConfig.woodenObs && (this.middleBox.node["setPosition"](0, 100), this.middleBox.node.active = !0)), this.fruitTotalNum = H["totalNum"], this.fruitRemnantNum = this.fruitTotalNum, this.updateFruitText(!0), this.setTip(), U = function () {
              ReferenceLayMgr["inst"]["genLvMap"](function () {
                n["scheduleOnce"](function () {
                  n.fruitConfig.woodenObs > 0 && (6 == n.fruitConfig.woodenObs ? n["setLeftAndRightBoxWidth"](200) : 2 == n.fruitConfig.woodenObs && (n["middleBox"]["node"]["active"] = !1)), n["sortFruit"](), n.jointGearMgr["init"](n["jointGraphics"]), n.jointGearMgr["mapCreateJoint"](n["fruitsComp"], n.fruitConfig["itemConnet"], function () {
                    n["scheduleOnce"](function () {
                      n["setCollisionMgr"](!0), GbzMainLayer["_GbzMainLayer"]["showlightning"](function (n) {
                        t && t(n);
                      });
                    }, 0), n["hideWall"]();
                  }), n["hideWall"]();
                }, 1), SOUtil["emit"](gameMsg["CreateFruitEd"]);
              });
            }, 2 == this.currentLevel ? GbzMainLayer._GbzMainLayer.showAnim(0, function () {
              U();
            }) : (U(), GbzMainLayer._GbzMainLayer.showAnim(1, function () {
              n["arrangeType"] > 1 && (n["levelBg"]["getChildByName"]("img")["active"] = !0);
            }, this.arrangeType, this["levelBg"]["getChildByName"]("img")));
          }
        }, n["sortFruit"] = function () {
          switch (this["fruitConfig"]["moveDir"]) {
            case FruitConfig.MoveDirection["NONE"]:
            case FruitConfig.MoveDirection["DOWN"]:
              this.fruitsComp.sort(function (t, n) {
                var r, i, e, a;
                return (null != (r = null == (i = t.node) ? void 0 : i.y) ? r : 0) - (null != (e = null == (a = n.node) ? void 0 : a.y) ? e : 0);
              });
              break;
            case FruitConfig.MoveDirection["RIGHT"]:
              this.fruitsComp.sort(function (t, n) {
                var r, i, e, a, u;
                return r = null != (i = null == (u = t.node) ? void 0 : u.x) ? i : 0, (null != (a = null == (e = n.node) ? void 0 : e.x) ? a : 0) - r;
              });
              break;
            case FruitConfig.MoveDirection["LEFT"]:
              this.fruitsComp.sort(function (t, n) {
                var r, i, e, a;
                return (null != (r = null == (i = t.node) ? void 0 : i.x) ? r : 0) - (null != (e = null == (a = n.node) ? void 0 : a.x) ? e : 0);
              });
          }
        }, n["init"] = function () {
          var t;
          t = this, 1 == this.arrangeType && (this["fruitDown"](), this["schedule"](function () {
            t["fruitDown"]();
          }, 1)), 2 != this.arrangeType && 3 != this.arrangeType || this["fruitMove"](!0), this["dirtectionTip"]["active"] = !1, GbzDataManager["ins"]["status"] = ENUM_STATUS["RUN"], this["lineOpacity"]();
        }, n["lineOpacity"] = function () {
          var t;
          this["arrangeType"] > 1 && ((t = this.line["getComponent"](UIOpacity) || this.line["addComponent"](UIOpacity))["opacity"] = 0, tween(t)["repeat"](3, tween(t).to(.5, function () {
            var t;
            return (t = Pu({}, "opacity", 0)).opacity = 255, t;
          }.apply()).to(.5, function () {
            var t;
            return (t = Pu({}, "opacity", 0)).opacity = 50, t;
          }.apply())).to(.5, function () {
            var t;
            return (t = Pu({}, "opacity", 0)).opacity = 0, t;
          }.apply())["start"]());
        }, n["setLeftAndRightBoxWidth"] = function (t) {
          var n, r;
          r = this["leftWall"].getComponent(BoxCollider2D), n = this["rightWall"].getComponent(BoxCollider2D), r.size.width = t, n.size.width = t, r.apply(), n.apply();
        }, n["initWall"] = function (t) {
          switch (this.leftWall.active = !1, this.rightWall.active = !1, this.topWall.active = !1, this.bottomWall.active = !0, this.bottomWall.getComponent(Widget)["updateAlignment"](), this.leftWall.setPosition(-this.node.getComponent(UITransform).width / 2 - 100, 0), this.rightWall.setPosition(this.node.getComponent(UITransform).width / 2 + 100, 0), this["arrangeType"]) {
            case 0:
              this.rightWall.getComponent(RigidBody2D).group = FruitConfig.RB_GROUPS.DEFAULT, this.leftWall.getComponent(RigidBody2D).group = FruitConfig.RB_GROUPS.DEFAULT, this.line.active = !1, this.leftWall.active = !0, this.rightWall.active = !0, this.topWall.active = !0, this.bottomWall.active = !0;
            case 1:
              this.rightWall.getComponent(RigidBody2D).group = FruitConfig.RB_GROUPS.DEFAULT, this.leftWall.getComponent(RigidBody2D).group = FruitConfig.RB_GROUPS.DEFAULT, this.line.active = !1, this.leftWall.active = !0, this.rightWall.active = !0;
              break;
            case 2:
              this.line.active = !0, this.line.x = this.node.getComponent(UITransform).width / 2 - 70, this.rightWall.getComponent(RigidBody2D).group = FruitConfig.RB_GROUPS.DEFAULT, this.rightWall.active = !0, this.leftWall.getComponent(RigidBody2D).group = FruitConfig.RB_GROUPS.guardrail, this.leftWall.active = !0, this.topWall.active = !0, this.bottomWall.active = !0;
              break;
            case 3:
              this.line.active = !0, this.line.x = -this.node.getComponent(UITransform).width / 2 + 70, this.leftWall.getComponent(RigidBody2D).group = FruitConfig.RB_GROUPS.DEFAULT, this.leftWall.active = !0, this.rightWall.getComponent(RigidBody2D).group = FruitConfig.RB_GROUPS.guardrail, this.rightWall.active = !0, this.topWall.active = !0, this.bottomWall.active = !0;
              break;
            case 4:
              this.rightWall.getComponent(RigidBody2D).group = FruitConfig.RB_GROUPS.DEFAULT, this.leftWall.getComponent(RigidBody2D).group = FruitConfig.RB_GROUPS.DEFAULT, this.leftWall.active = !0, this.rightWall.active = !0, this.line.active = !0, this.line.x = 0;
          }
        }, n["hideWall"] = function () {
          1 == this["arrangeType"] && (this["topWall"].active = !1), this["bottomWall"].active = !1;
        }, n["firstLevel"] = function (t) {
          var n, r, i, e;
          n = this, GbzDataManager.ins["status"] = ENUM_STATUS["UNRUN"], e = this.node["getComponent"](UITransform)["height"] / 2 + 500, this.firstLevelBg.children[0], r = this.firstLevelBg.children[1], i = this.firstLevelBg.children[2], r.setPosition(r.x, e), i.setPosition(i.x, e);
          for (var p = [], g = 0; g < this.firstLevelBg.children.length; g++) {
            for (var y = this.firstLevelBg.children[g], _ = [], S = 0; S < y.children.length; S++) {
              var A;
              A = y.children[S], _.push(new Vec2(A.x, A.y));
            }
            p.push(_);
          }
          this.finger = GbzPoolManager.ins["getPrefab"]("finger"), this.node["addChild"](this.finger), this["opacityTween"](this.finger), this.finger["active"] = !1;
          for (var C = function (r) {
              for (var e = n["firstLevelBg"]["children"][r], a = function (i) {
                  var o = ReferenceLayMgr["inst"]["getPt"](n.firstLevelIDS[r][i]);
                  n["createFruitNodes"](e, new CalculatedInfo(n.firstLevelIDS[r][i], p[r][i], 0, o["radius"], o["scale"]), !1, null, function () {
                    r == n["firstLevelBg"]["children"].length - 1 && i == n["firstLevelIDS"][r].length - 1 && (n["setFinger"](0, 0, 4, !0), n["scheduleOnce"](function () {
                      GbzDataManager["ins"]["status"] = ENUM_STATUS["RUN"], t() && t();
                    }, .3));
                  });
                }, u = 0; u < n["firstLevelIDS"][r]["length"]; u++) a(u);
            }, x = 0; x < this.firstLevelBg.children.length; x++) C(x);
        }, n["showLeader"] = function () {
          var t;
          if (t = this, 1 == GbzDataManager.ins["game_level"] && GbzDataManager.ins["status"] != ENUM_STATUS["UNRUN"]) switch (this.clickCount++, this.clickCount) {
            case 1:
              this.setFinger(0, 1, 5, !0), WxIAAMgr.inst.Tutorial_Finish();
              break;
            case 2:
              this.setFinger(0, 1, 4, !1), this["leaderTip"]["active"] = !0, this.setFinger(0, 1, 5, !1), this["scheduleOnce"](function () {
                t["leaderTip"]["active"] = !1;
              }, 2);
              break;
            case 4:
              this["firsrLevelRound2"](), WxIAAMgr.inst.Tutorial_Finish();
          }
        }, n["firsrLevelRound2"] = function () {
          for (var a = this.firstLevelBg.children[0], u = 1; u < this.firstLevelBg.children["length"]; u++) {
            var s, o;
            o = this.firstLevelBg.children[u], s = new math["Vec3"](o.x, a.y), tween(o)["to"](2, function () {
              var t;
              return (t = Pu({}, "position", 0)).position = s, t;
            }["apply"]())["call"](function () {})["start"]();
          }
        }, n["setFinger"] = function (t, n, r, i) {
          var e, a, u;
          a = this.firstLevelBg.children[t].children[n], this.finger.active = i, e = (u = this.firstLevelBg.children[t].children[r]) && u.isValid ? u.getComponent(FruitComp) : null, a && e && e.isValid && !e["isTouch"] ? (this.finger["setPosition"](a.x, a.y + a["parent"].y), this.firstLevelBg.children[t].children[r].getComponent(FruitComp)["isCanTouch"] = !0) : this.finger.active = !1;
        }, n["opacityTween"] = function (t) {
          tween(t).to(.5, function () {
            var t;
            return (t = Pu({}, "scale", 0)).scale = math["v3"](.7, .7, .7), t;
          }.apply()).to(.5, function () {
            var t;
            return (t = Pu({}, "scale", 0)).scale = math["v3"](.8, .8, .8), t;
          }.apply())["union"]()["repeatForever"]()["start"]();
        }, n["createFruitNodes"] = function (t, n, r, i, e, a) {
          var u, s, o, c;
          return o = this, void 0 === a && (a = 0), s = this["getNodeName"]() + n["fruitType"], c = GbzPoolManager["ins"]["getNode"](s), t["addChild"](c), u = c["getComponent"](FruitComp) || c["addComponent"](FruitComp), 0 == a ? u["init"](n, r, i, function (t) {
            null != t && (t instanceof HoleComp ? o["holeComps"].push(t) : t instanceof FruitComp && o["iceComps"].push(t)), e && e();
          }) : u["init2"](n, r, i, function (t) {
            null != t && (t instanceof HoleComp ? o["holeComps"].push(t) : t instanceof FruitComp && o["iceComps"].push(t)), e && e();
          }), this["fruitsComp"]["push"](u), u;
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
        }, n["getMinDistance"] = function () {
          for (var e = 500, a = 5000, u = 0; u < this.fruitsComp["length"]; u++) {
            var s, o;
            if (!(s = this.fruitsComp[u])["isTouch"]) (o = Math["abs"](s.node.x - this["line"].x)) < a && (a = o, e = s.node.x);
          }
          return [a, e];
        }, n["fruitDown"] = function () {
          var t;
          if (t = this, 1 != GbzDataManager["ins"]["game_level"] && 1 == this["arrangeType"] && !this.isDowning) {
            this.node["getComponent"](UITransform);
            for (var k = this["boundaryLine"].y + 10, m = 50000, p = -50000, g = this.fruitsComp.length - 1; g >= 0; g--) {
              var _, M;
              if ((_ = this.fruitsComp[g]) && (!_ || _.node["isValid"]) && !_.isTouch) (M = _.node.y) < m && (m = M), M > p && (p = M);
            }
            var S;
            if (!(p < ReferenceMgr["inst"]["gameH"] / 2 - 250)) if ((S = m - k) > 20) {
              var A, C;
              (C = S / 600) < .4 && (C = .4), this.isDowning = !0, this["bgMoveDis"].y -= S;
              for (var x = [], T = 0; T < this.fruitsComp.length; T++) {
                var L;
                (L = this.fruitsComp[T]).isTouch || x["push"](function () {
                  var t, n;
                  return Pu(t = {}, "fruit", 0), Pu(t, "origX", 0), Pu(t, "origY", 0), (n = t).fruit = L, n.origX = L.node.position.x, n.origY = L.node.position.y, n;
                }.apply());
              }
              if (A = function () {
                var t;
                return (t = Pu({}, "offset", 0)).offset = 0, t;
              }.apply(), tween(A)["to"](C, function () {
                var t;
                return (t = Pu({}, "offset", 0)).offset = S, t;
              }.apply(), function () {
                var t;
                return (t = Pu({}, "onUpdate", 0)).onUpdate = function () {
                  for (var e = A["offset"], a = 0, u = x; a < u["length"]; a++) {
                    var s;
                    (s = u[a]).fruit["isValid"] && s.fruit["node"]["setPosition"](s["origX"], s["origY"] - e, 0);
                  }
                }, t;
              }.apply())["start"](), this.obstaclesRoot.children.length > 0) for (var I = function () {
                  var i = t["obstaclesRoot"]["children"][R];
                  i && i["isValid"] && tween(i)["to"](C, function () {
                    var r = Pu({}, "position", 0);
                    return r.position = math["v3"](i.position.x, i.position.y - S, 0), r;
                  }["apply"]())["call"](function () {
                    i && i["isValid"] && i["position"].y <= t["boundaryLine"].y && (i["removeFromParent"](), GbzPoolManager["ins"]["putNode"](i));
                  })["start"]();
                }, R = this.obstaclesRoot.children.length - 1; R >= 0; R--) I();
              this["scheduleOnce"](function () {
                t["isDowning"] = !1, SOUtil["emit"](gameMsg["moveFruitAll"], -S);
              }, C + .2);
            }
          }
        }, n["fruitMove"] = function (t) {
          var n, r, i, e;
          (n = this, this["isDowning"] || this["arrangeType"] <= 1) || (e = this["moveDistance"], r = this["getMinDistance"]()[0], i = function () {
            var r;
            if (Tween["stopAllByTag"](1), n["isDowning"] = !0, (r = e / 1050) < .15 && (r = .15), n["scheduleOnce"](function () {
              n["isDowning"] = !1;
            }, r), 4 != n.arrangeType) {
              var b;
              t || (r = .1), e = 2 == n.arrangeType ? e : -e, n["bgMoveDis"].x += e;
              for (var d = [], k = 0; k < n.fruitsComp.length; k++) {
                var m;
                (m = n.fruitsComp[k])["isTouch"] || d["push"](function () {
                  var t, n;
                  return Pu(t = {}, "fruit", 0), Pu(t, "origX", 0), Pu(t, "origY", 0), (n = t).fruit = m, n.origX = m.node.position.x, n.origY = m.node.position.y, n;
                }.apply());
              }
              b = function () {
                var t;
                return (t = Pu({}, "offset", 0)).offset = 0, t;
              }.apply(), tween(b)["to"](r, function () {
                var t;
                return (t = Pu({}, "offset", 0)).offset = e, t;
              }.apply(), function () {
                var t;
                return (t = Pu({}, "onUpdate", 0)).onUpdate = function () {
                  for (var e = b["offset"], a = 0, u = d; a < u["length"]; a++) {
                    var s;
                    (s = u[a]).fruit["isValid"] && s.fruit["node"]["setPosition"](s["origX"] + e, s["origY"], 0);
                  }
                }, t;
              }.apply())["tag"](1)["call"](function () {
                for (var r = 0, i = d; r < i["length"]; r++) {
                  var e;
                  (e = i[r]).fruit["isValid"] && e.fruit["checkBound"]();
                }
              })["start"]();
            } else for (var p = function () {
                var u = n["fruitsComp"][g];
                if (u["isTouch"]) return 1;
                var s = u.node.x > 0 ? -e : e;
                tween(u.node)["to"](r, function () {
                  var i = Pu({}, "position", 0);
                  return i.position = new math["Vec3"](u.node.x + s, u.node.y, 0), i;
                }["apply"]())["tag"](1)["call"](function () {
                  u["checkBound"]();
                })["start"]();
              }, g = 0; g < n.fruitsComp.length; g++) p();
          }, t ? r > this.baseY && (e = r - this.baseY, this["scheduleOnce"](function () {
            Tween["stopAllByTag"](1), i();
          }, .1)) : i());
        }, n["colorLoop"] = function () {
          this["unschedule"](this.fruitColorTween), this["schedule"](this.fruitColorTween, 3);
        }, n["fruitColorTween"] = function () {
          if (GbzDataManager["ins"]["status"] != ENUM_STATUS["UNRUN"] && !(this.fruitsInSlotComp.length < this["colorLimit"])) {
            Tween["stopAllByTag"](2);
            for (var o = 0; o < this.fruitsInSlotComp.length; o++) {
              var c, f;
              if (c = this.fruitsInSlotComp[o]["node"]) f = c["getComponent"](Sprite), tween(f).to(.5, function () {
                var t;
                return (t = Pu({}, "color", 0)).color = color(255, 0, 0, 255), t;
              }.apply(), function () {
                var t;
                return (t = Pu({}, "easing", 0)).easing = "sineIn", t;
              }.apply()).to(.5, function () {
                var t;
                return (t = Pu({}, "color", 0)).color = color(255, 255, 255, 255), t;
              }.apply(), function () {
                var t;
                return (t = Pu({}, "easing", 0)).easing = "sineOut", t;
              }.apply())["tag"](2)["start"]();
            }
          }
        }, n["breakWall"] = function (t) {
          var n;
          n = this, GbzDataManager.ins["status"] != ENUM_STATUS["UNRUN"] ? this["slotsNum"] < 4 ? GbzSdkManager.ins.showVideo(function () {
            GbzInstance["gameMgr"]["gameState"] == ENUM_GAME_STATE["isPlaying"] && (n["slotsNum"]++, n["colorLimit"]++, n.btnFirstWall ? (n.btnFirstWall["off"](Node.EventType.TOUCH_END, n.breakWall, n), n["playChuiziEff"](n.btnFirstWall, function () {
              n["offButton"](n.btnFirstWall), n["creatBoxBoom"](n.btnFirstWall), n.btnFirstWall["destroy"](), n.btnFirstWall = null, n.btnSecondWall["on"](Node["EventType"]["TOUCH_END"], n["breakWall"], n), n.btnSecondWall["getComponent"](Sprite)["spriteFrame"] = GbzResManager["ins"]["getRes"](ResType["Sprite"], "game", n["stoneStrJs"]), n.btnSecondWall.children[0].active = !0, n.btnSecondWall.children[1].active = !0;
            })) : (n.btnSecondWall["on"](Node.EventType.TOUCH_END, n.breakWall, n), n.btnSecondWall["getComponent"](Sprite)["spriteFrame"] = GbzResManager.ins["getRes"](ResType["Sprite"], "game", n["stoneStrJs"]), n.btnSecondWall.children[0].active = !0, n.btnSecondWall.children[1].active = !0), reporter["reportAdRwd"]("空位"), GbzDataManager.ins["status"] = ENUM_STATUS["RUN"]);
          }, function () {}, "空位", this, !0) : GbzSdkManager.ins.showVideo(function () {
            GbzInstance["gameMgr"]["gameState"] == ENUM_GAME_STATE["isPlaying"] && (n["slotsNum"]++, n["colorLimit"]++, n.btnSecondWall && (n.btnSecondWall["off"](Node["EventType"]["TOUCH_END"], n["breakWall"], n), n["playChuiziEff"](n.btnSecondWall, function () {
              n["offButton"](n.btnSecondWall), n["creatBoxBoom"](n.btnSecondWall), n.btnSecondWall["destroy"](), n.btnSecondWall = null;
            })), GbzDataManager["ins"]["status"] = ENUM_STATUS["RUN"], reporter["reportAdRwd"]("空位"));
          }, function () {}, "空位", this, !0) : 0 == GbzDataManager.ins.skillIndex ? SOUtil.strTipLab("消除中", ENUM_UI.LAYER_MAIN, 200, 35) : 1 == GbzDataManager.ins.skillIndex && SOUtil.strTipLab("刷新中", ENUM_UI.LAYER_MAIN, 200, 35);
        }, n["offButton"] = function (t) {
          t["off"](Node["EventType"]["TOUCH_END"], this["breakWall"], this);
        }, n["breakAllWall"] = function () {
          var t, n;
          n = this, t = function () {
            n["isValid"] && (n.btnFirstWall && (n.slotsNum++, n.colorLimit++, n.btnFirstWall.off(Node.EventType.TOUCH_END, n.breakWall, n), n.offButton(n.btnFirstWall), n.creatBoxBoom(n.btnFirstWall), n.btnFirstWall.destroy(), n.btnFirstWall = null), n.btnSecondWall && (n.slotsNum++, n.colorLimit++, n.btnSecondWall.off(Node.EventType.TOUCH_END, n.breakWall, n), n.offButton(n.btnSecondWall), n.creatBoxBoom(n.btnSecondWall), n.btnSecondWall.destroy(), n.btnSecondWall = null));
          }, this.btnFirstWall && this.btnSecondWall ? this.playChuiziEff(this.btnFirstWall, t, new Vec3(0, -50, 0)) : this.btnFirstWall ? this.playChuiziEff(this.btnFirstWall, t) : this.playChuiziEff(this.btnSecondWall, t);
        }, n["breakSingleWall"] = function () {
          var t;
          if (t = this, this.btnFirstWall) return this.slotsNum++, this.colorLimit++, this.btnFirstWall.off(Node.EventType.TOUCH_END, this.breakWall, this), void this.playChuiziEff(this.btnFirstWall, function () {
            t["offButton"](t.btnFirstWall), t["creatBoxBoom"](t.btnFirstWall), t.btnFirstWall["destroy"](), t.btnFirstWall = null, t.btnSecondWall["on"](Node["EventType"]["TOUCH_END"], t["breakWall"], t), t.btnSecondWall["getComponent"](Sprite)["spriteFrame"] = GbzResManager["ins"]["getRes"](ResType["Sprite"], "game", t["stoneStrJs"]), t.btnSecondWall.children[0].active = !0, t.btnSecondWall.children[1].active = !0;
          });
          this.btnSecondWall && (this.slotsNum++, this.colorLimit++, this.btnSecondWall.off(Node.EventType.TOUCH_END, this.breakWall, this), this.playChuiziEff(this.btnSecondWall, function () {
            t["offButton"](t.btnSecondWall), t["creatBoxBoom"](t.btnSecondWall), t.btnSecondWall["destroy"](), t.btnSecondWall = null;
          }));
        }, n["fruitTween"] = function (t, n, r) {
          var i, e, a, u;
          (i = this, void 0 === r && (r = !1), e = t["node"]) ? (e["getComponent"](Sprite)["color"] = color(255, 255, 255), this["hightLight"](e), u = e["scale"].x, a = u + .1, this.fruitSplice(t), Tween["stopAllByTarget"](e), tween(e).to(.12, function () {
            var t;
            return (t = Pu({}, "scale", 0)).scale = math["v3"](a, a, a), t;
          }.apply()).to(.12, function () {
            var t;
            return (t = Pu({}, "scale", 0)).scale = math["v3"](u, u, u), t;
          }.apply()).call(function () {
            e["scale"] = math["v3"](u, u, u), i["showFruitEff"](t["node"], ReferenceLayMgr["inst"]["getEliminateColor"](t["ID"]));
          }).start(), tween(e)["delay"](.24).to(.2, function () {
            var t, n;
            return Pu(t = {}, "position", 0), Pu(t, "scale", 0), (n = t).position = math.v3(e.x, e.y + 50, 0), n.scale = math.v3(a, a, a), n;
          }.apply(), function () {
            var t;
            return (t = Pu({}, "easing", 0)).easing = "quadOut", t;
          }.apply()).call(function () {
            n && n();
          }).to(.4, function () {
            var t;
            return (t = Pu({}, "position", 0)).position = math["v3"](this.basket.x, this.basket.y, 0), t;
          }["bind"](this).apply(), function () {
            var t;
            return (t = Pu({}, "easing", 0)).easing = "quadIn", t;
          }.apply()).call(function () {
            i["basketTween"](), GbzAudioManager["ins"]["play"](ENUM_CLIP["btn_Remove"], !1, 1), i["updateFruitText"](), i.fruitMove(!0), i.fruitMove(!1), i["recycleFruit"](t), i["getedFruitList"]["push"](t["calculatedInfo_"]), i["breakIceFun"](), r && i["bottomFruitAnim"](), i["checkSlotLose"]();
          }).start()) : this.fruitSplice(t);
        }, n["recycleFruit"] = function (t) {
          t["recycleSelf"]();
        }, n["starTween"] = function (t) {
          var n, r, i, e, a;
          e = this, this["activeTween"] = !0, n = 150 * (Math.random() - .5), r = 80 * Math.random(), (a = GbzPoolManager.ins["getNode"]("star", this.node))["getComponent"](ParticleSystem2D)["resetSystem"](), a["children"][0]["active"] = !0, a["setPosition"](t.node.x, t.node.y), i = new math["Vec3"](this.fillImg.node.parent.x, this.fillImg.node.y + this.fillImg.node.parent.y, 0), tween(a).to(.3, function () {
            var i, e;
            return Pu(i = {}, "position", 0), Pu(i, "scale", 0), (e = i).position = new math["Vec3"](t.node.x + n, t.node.y + r, 0), e.scale = math["v3"](1.3, 1.3, 1.3), e;
          }.apply()).to(.8, function () {
            var t, n;
            return Pu(t = {}, "position", 0), Pu(t, "scale", 0), (n = t).position = i, n.scale = math["v3"](0, 0, 0), n;
          }.apply(), function () {
            var t;
            return (t = Pu({}, "easing", 0)).easing = "backIn", t;
          }.apply())["call"](function () {
            a["children"][0]["active"] = !1, a["getComponent"](ParticleSystem2D)["stopSystem"](), e["scheduleOnce"](function () {
              GbzPoolManager["ins"]["putNode"](a);
            }, 1), e["fillLight"]();
          })["start"](), GbzAudioManager.ins["play"](ENUM_CLIP["btn_Remove"]);
        }, n["fillLight"] = function () {
          var t, n;
          t = this, this.fillBg.color.clone(), n = this.fillImg.color.clone(), this.fillBg.color = color(255, 255, 255, 255), this.fillImg.color = color(255, 255, 255, 255), this["scheduleOnce"](function () {
            t.fillBg.isValid && (t.fillBg.color = color(139, 139, 139, 255)), t.fillImg.isValid && (t.fillImg.color = n), t["activeTween"] = !1, t["updateFruitText"]();
          }, .2);
        }, n["basketTween"] = function () {
          var t, n;
          n = this.gameRoot.getChildByName("basket02"), t = this.gameRoot.getChildByName("basket01"), tween(n).to(.15, function () {
            var t;
            return (t = Pu({}, "scale", 0)).scale = math["v3"](1.2, 1.2, 1.2), t;
          }.apply()).to(.15, function () {
            var t;
            return (t = Pu({}, "scale", 0)).scale = math["v3"](1, 1, 1), t;
          }.apply()).start(), tween(t).to(.15, function () {
            var t;
            return (t = Pu({}, "scale", 0)).scale = math["v3"](1.2, 1.2, 1.2), t;
          }.apply()).to(.15, function () {
            var t;
            return (t = Pu({}, "scale", 0)).scale = math["v3"](1, 1, 1), t;
          }.apply()).start();
        }, n["fruitSplice"] = function (t) {
          var n, r, i;
          i = this.fruitsInSlotComp.indexOf(t), n = this.fruitsComp.indexOf(t), -1 != i && this.fruitsInSlotComp.splice(i, 1), -1 != n && this.fruitsComp.splice(n, 1), -1 != (r = this.iceComps.indexOf(t)) && this.iceComps.splice(r, 1);
        }, n["holeSplice"] = function (t) {
          var n;
          -1 != (n = this.holeComps["indexOf"](t)) && this.holeComps["splice"](n, 1);
        }, n["addInSlotFruit"] = function (t) {
          -1 == this.fruitsInSlotComp["indexOf"](t) && (t.isInSlot || (t.isInSlot = !0, this.fruitsInSlotComp["push"](t), this.fruitsInSlotComp["length"] >= this["colorLimit"] ? (this["fruitColorTween"](), this["unschedule"](this.checkLose), this.checkLose(), this.checkSlotLose()) : this.checkSlotLose()));
        }, n["checkSlotLose"] = function () {
          if (GbzDataManager["ins"]["status"] == ENUM_STATUS["UNRUN"]) return !1;
          if (this["holeComps"].length > 0) return !1;
          if (0 === this.fruitsInSlotComp.length) return !1;
          if (this.fruitsInSlotComp.length >= this["slotsNum"] && !this["canMatchInSlot"]()) {
            for (var v, l = !1, b = createForOfIteratorHelperLoose(this.fruitsComp); !(v = b()).done;) {
              var d;
              if (!(d = v.value).isInSlot) {
                for (var k, m = createForOfIteratorHelperLoose(this.fruitsInSlotComp); !(k = m()).done;) {
                  var p;
                  if (p = k.value, d.ID === p.ID) {
                    l = !0;
                    break;
                  }
                }
                if (l) break;
              }
            }
            if (!l) for (var g = 0; g < this.fruitsComp.length; g++) if (!this.fruitsComp[g].isInSlot) {
              for (var y = g + 1; y < this.fruitsComp.length; y++) if (!this.fruitsComp[y].isInSlot && this.fruitsComp[g].ID === this.fruitsComp[y].ID) {
                l = !0;
                break;
              }
              if (l) break;
            }
            if (!l) return this.overFun("消不掉啦"), !0;
          }
          if (this.fruitsComp.length != this.fruitsInSlotComp.length) return !1;
          for (var w in this.fruitsComp) if (!this.fruitsComp[w]["isTouch"]) return !1;
          return this.overFun("消不掉啦"), !1;
        }, n["canMatchInSlot"] = function () {
          for (var e = 0; e < this.fruitsInSlotComp.length; e++) for (var a = e + 1; a < this.fruitsInSlotComp.length; a++) if (this.fruitsInSlotComp[e].ID === this.fruitsInSlotComp[a].ID) return !0;
          return !1;
        }, n["debounceCheckLose"] = function () {
          this["unschedule"](this.checkLose), this["scheduleOnce"](this.checkLose, .2);
        }, n["checkLose"] = function () {
          var t, n;
          if ((t = this, GbzDataManager["ins"]["status"] != ENUM_STATUS["UNRUN"]) && (n = this.fruitsInSlotComp.length, this["checkPro50UeseProp"](), n > this["slotsNum"])) {
            this["overFun"]("装不下啦"), Tween["stopAllByTag"](2);
            for (var a = function () {
                var r = t["fruitsInSlotComp"][u];
                t["scheduleOnce"](function () {
                  r["setRigType"](ERigidBody2DType["Static"]), r["node"]["getComponent"](Sprite)["color"] = color(100, 100, 100);
                }, 0);
              }, u = 0; u < this.fruitsInSlotComp.length; u++) a();
          }
        }, n["bottomFruitAnim"] = function () {
          var t, n;
          (t = null, this["fruitsComp"]["length"] <= 0 || GbzDataManager["ins"]["status"] == ENUM_STATUS["UNRUN"] || 1 == this["currentLevel"] || (0 != this.arrangeType && 1 != this.arrangeType || (t = this["getBottomFruit"](10000, function (t, n) {
            return t.y < n;
          })), !t)) || (n = t["node"]["getComponent"](Sprite), tween(n).to(.6, function () {
            var t;
            return (t = Pu({}, "color", 0)).color = color(80, 80, 80, 255), t;
          }.apply()).to(.6, function () {
            var t;
            return (t = Pu({}, "color", 0)).color = color(255, 255, 255, 255), t;
          }.apply())["start"]());
        }, n["getBottomFruit"] = function (t, n) {
          for (var a = null, u = t, s = 0; s < this.fruitsComp["length"]; s++) {
            var o;
            (o = this.fruitsComp[s])["isTouch"] || 0 != o["fruitType"] || n(o.node, u) && (u = o.node.y, a = o);
          }
          return a;
        }, n["stopGame"] = function () {
          var t;
          t = this, GbzDataManager["ins"]["status"] = ENUM_STATUS["UNRUN"];
          for (var i = function () {
              var r = t["fruitsComp"][e];
              t["scheduleOnce"](function () {
                r["setRigType"](ERigidBody2DType["Static"]);
              });
            }, e = 0; e < this["fruitsComp"]["length"]; e++) i();
        }, n["resumGame"] = function () {
          var t;
          t = this, GbzDataManager["ins"]["status"] = ENUM_STATUS["RUN"], this["checkWin"](), this["checkLose"]();
          for (var e = function () {
              var r = t["fruitsComp"][a];
              r["isTouch"] && t["scheduleOnce"](function () {
                r["setRigType"](ERigidBody2DType["Dynamic"], r["gravityScale"], !0);
              });
            }, a = 0; a < this["fruitsComp"]["length"]; a++) e();
        }, n["checkWin"] = function () {
          GbzDataManager["ins"]["status"] != ENUM_STATUS["UNRUN"] && this["fruitRemnantNum"] <= 0 && (GbzInstance["gameMgr"]["gameState"] = ENUM_GAME_STATE["isPaused"], this["winFun"]());
        }, n["overFun"] = function (t) {
          LocalData["inst"]["setUndergoLv"](!0), this["fullTip"](t), this["closeViewTime"](), GbzInstance.gameMgr["gameState"] = ENUM_GAME_STATE["isOver"], GbzInstance.gameMgr["onGameOver"](ENUM_UI["LAYER_LOSE_FULL"]);
        }, n["winFun"] = function (t) {
          if (void 0 === t && (t = !1), PkManager["ins"]["addScore"](PkManager["SCORE_CLEAR"]), LocalData.inst["setUndergoLv"](!1), this["topWall"].active = !1, this["closeViewTime"](), ScoreLvMgr.inst["resetForNewLevel"](), t) for (var d, k = []["concat"](this["fruitsComp"]), m = createForOfIteratorHelperLoose(k); !(d = m())["done"];) {
            var p;
            p = d["value"], this.getedFruitList["push"](p["calculatedInfo_"]), this["recycleFruit"](p);
          }
          GbzInstance["uiMgr"]["toggle"](ENUM_UI["LAYER_MAIN"], !1), this["showGameMoveAni"](), this.FruitDownLayer["node"].active = !0, this.FruitDownLayer["showAni"](this.getedFruitList), this["recycle"]();
        }, n["btnRemoveFun"] = function (t, n, r) {
          var i;
          if (i = this, void 0 === r && (r = !1), 0 != this["fruitsComp"]["length"]) {
            var h, v, l, b, d, k;
            if (this["closeViewTime"](), this["sortFruit"](), this.isDowning = !0, h = new Set(), l = 0, function () {
              var n, r, e;
              if (n = function (n) {
                var r;
                return l >= t || !h.has(n) && !!(r = i["getMatchFruit"](n)) && !h.has(r) && (h.add(n), h.add(r), ++l >= t);
              }, i.fruitsInSlotComp["length"] > 0) for (var m, p = [].concat(i.fruitsInSlotComp)["reverse"](), g = createForOfIteratorHelperLoose(p); !(m = g()).done && !n(m.value););else if (e = i["fruitsComp"]["filter"](function (t) {
                return t["ID"] > 0 && 0 === t["fruitType"] && !t["holeComp"];
              }), r = SOUtil["shuffleArray"]([].concat(e)), 1 == t) {
                if (1 == i.arrangeType) {
                  for (var y, w = r[0].node.y, _ = r[0], M = createForOfIteratorHelperLoose(r); !(y = M()).done;) {
                    var S;
                    (S = y.value).node.y < w && (w = S.node.y, _ = S);
                  }
                  n(_);
                } else if (3 == i.arrangeType) {
                  for (var A, C = r[0].node.x, x = r[0], T = createForOfIteratorHelperLoose(r); !(A = T()).done;) {
                    var L;
                    (L = A.value).node.x < C && (C = L.node.x, x = L);
                  }
                  n(x);
                } else if (2 == i.arrangeType) {
                  for (var I, R = r[0].node.x, E = r[0], D = createForOfIteratorHelperLoose(r); !(I = D()).done;) {
                    var N;
                    (N = I.value).node.x > R && (R = N.node.x, E = N);
                  }
                  n(E);
                } else for (var P, G = createForOfIteratorHelperLoose(r); !(P = G()).done && !n(P.value););
              } else for (var O, F = createForOfIteratorHelperLoose(r); !(O = F()).done && !n(O.value););
            }(), function () {
              if (!(l >= t)) for (var f = i.fruitsInSlotComp["length"] - 1; f >= 0; f--) {
                var v;
                if (v = i.fruitsInSlotComp[f], !h["has"](v)) for (var b, d = createForOfIteratorHelperLoose(i["holeComps"]); !(b = d())["done"];) {
                  var k, m;
                  if (-1 !== (m = (k = b["value"]).curHoleFruitTyes["indexOf"](v["ID"]))) return k.curHoleFruitTyes["splice"](m, 1), k["upHoleLa"](), k["checkRecycle"](), h["add"](v), i["fillLight"](), void l++;
                }
              }
            }(), d = 2 * t, h.size > d) k = Array["from"](h)["slice"](0, d), h["clear"](), k.forEach(function (t) {
              return h["add"](t);
            });
            if (0 === h.size) return this.isDowning = !1, this["startViewTime"](), void (n && n());
            for (var m = 0; m < l; m++) this["onEliminatePair"]();
            v = 0, b = h.size, h.forEach(function (t) {
              t["hideCollider"](), t["isTouch"] = !0, r && t["streakFun"](), i["fruitTween"](t, function () {
                ++v >= b && (n && n(), i["startViewTime"](), i["isDowning"] = !1, 1 === i.arrangeType ? i["fruitDown"]() : 2 !== i.arrangeType && 3 !== i.arrangeType || i["fruitMove"](!0));
              });
            });
          }
        }, n["onEliminatePair"] = function () {
          PkManager["ins"]["addScore"](PkManager["SCORE_ELIMINATE"]);
        }, n["getMatchFruit"] = function (t) {
          for (var n, r, i, M = [], S = [], A = [], C = [], x = [], T = createForOfIteratorHelperLoose(this["fruitsComp"]); !(i = T())["done"];) {
            var L;
            (L = i["value"]) === t || L["isCollider"] || L.ID !== t.ID || (0 === L.fruitType ? L.isJoint ? S.push(L) : L.holeComp && 0 !== L.node["scale"].x ? A.push(L) : M.push(L) : 1 === L.fruitType ? C.push(L) : 2 === L.fruitType && x.push(L));
          }
          return r = null, (n = M["concat"](S)).length > 0 ? (this.eliminateDataSort(n, !0), r = n[0], this.jointGearMgr.removeRopeByFruit(r.node), r.hideCollider()) : A.length > 0 ? (this.eliminateDataSort(A), (r = A[0]).hideCollider(), r.holeComp["genFruit"]()) : C.length > 0 ? (this.eliminateDataSort(C), (r = C[0]).hideCollider(), r.unlockFruit()) : x.length > 0 && (this.eliminateDataSort(x), (r = x[0]).hideCollider(), r.unlockFruit()), r && t.isJoint && this.jointGearMgr.removeRopeByFruit(t.node), r;
        }, n["eliminateDataSort"] = function (t, n) {
          var r;
          r = this, void 0 === n && (n = !1), ReferenceLayMgr["inst"]["bubbleSort"](t, function (t, i) {
            var e;
            return !(!i.isTouch || !n) || (0 == r.arrangeType || 1 == r.arrangeType ? i.node.y < t.node.y : (2 == r.arrangeType || 3 == r.arrangeType) && (e = i.node.x, n ? !t.isTouch && e > -ReferenceMgr.inst.halfGameW && e < ReferenceMgr.inst.halfGameW : e > -ReferenceMgr.inst.halfGameW && e < ReferenceMgr.inst.halfGameW));
          });
        }, n["btnDisturbFun"] = function (t) {
          var n, r, i, e, a, u, s;
          if (e = this, this["isDowning"] = !0, this["setCollisionMgr"](!1), this["closeViewTime"](), (i = this.jointGearMgr["ConnectNum"]) > 0 && this.jointGearMgr["recycle"](), a = function () {
            e["sortFruit"](), e["jointGearMgr"]["shuffleCreateJoint"](i, e["fruitsComp"], function () {
              e["setCollisionMgr"](!0), e["isDowning"] = !1, t && t(), e["startViewTime"]();
            });
          }, n = this["fruitsComp"]["filter"](function (t) {
            return !(t["isCollider"] || t["isInSlot"] || 0 != t.fruitType && 2 != t.fruitType || t["holeComp"] || t["isCanCheck"]);
          }), r = [], n.length > 0) for (var p = 0; p < n.length; p++) r["push"](function () {
            var t, r;
            return Pu(t = {}, "pos", 0), Pu(t, "holeCompBind", 0), (r = t).pos = n[p]["node"]["position"]["clone"](), r.holeCompBind = n[p].holeCompBind, r;
          }["apply"]()), n[p].holeCompBind = null;
          if (2 == r.length) s = r[0].holeCompBind, u = r[1].holeCompBind, n[0].holeCompBind = u, n[1].holeCompBind = s, u && u.fruitComp && (u.fruitComp = n[0]), s && s.fruitComp && (s.fruitComp = n[1]), n[0].movePos(null, r[1].pos), n[1].movePos(null, r[0].pos, function () {
            a();
          });else if (r.length > 2) {
            ReferenceLayMgr["inst"]["shuffleArray"](r);
            for (var g = 0, y = function () {
                var u = n[w];
                u.holeCompBind = r[w].holeCompBind, u.holeCompBind && u.holeCompBind.fruitComp && (u.holeCompBind.fruitComp = u), u["movePos"](null, r[w]["pos"], function () {
                  u["checkBound"](), ++g == n["length"] && a();
                });
              }, w = 0; w < n.length; w++) y();
          } else a();
        }, n["reviveFun"] = function () {
          var t;
          if (t = this, this["isValid"] && GbzInstance["gameMgr"]["gameState"] != ENUM_GAME_STATE["isPlaying"]) {
            var o, c, f, v;
            this["isDowning"] = !0, GbzDataManager["ins"]["status"] = ENUM_STATUS["UNRUN"];
            for (var l = this.fruitsComp.filter(function (n) {
                return !n["isCollider"] && !n["isInSlot"] && !n["isCanCheck"] && !n["isColliderLR"] && !n["holeComp"] && t["isOnScreen"](n.node.x, n.node.y);
              }), b = 0; b < l.length; b++) l[b]["setRigType"](ERigidBody2DType["Dynamic"], 0, !1);
            f = this.fruitsComp.filter(function (t) {
              return t["isTouch"];
            }), v = f["reduce"](function (t, n) {
              return t.node.y < n.node.y ? t : n;
            }), o = f.length, c = [], function () {
              for (var s = 0, b = o - (v ? 1 : 0), k = function () {
                  var k = m;
                  if (v == f[m]) return 1;
                  var g = f[k];
                  -1 != t.fruitsInSlotComp.indexOf(g) && t.fruitsInSlotComp["splice"](t.fruitsInSlotComp.indexOf(g), 1);
                  var y = function () {
                    var t,
                      a = (Pu(t = {}, "pos", 0), Pu(t, "radius", 0), t);
                    return a.pos = math["v2"](g.downOrgPos.x, g.downOrgPos.y), a.radius = g.radius, a;
                  }["apply"]();
                  if (-1 != c.indexOf(g) || g["isHolePos"] && !g["holeCompBind"] || g["isAutoDrop"]) {
                    var w = t["getSafePos"](l);
                    y.pos = math["v2"](w.x, w.y);
                  }
                  g["fruitRigidbody"]["group"] = FruitConfig["RB_GROUPS"]["fruit"], g["movePos"](0, math["v3"](y.pos.x, y.pos.y), function () {
                    g["fruitReset"](), ++s == b && t["scheduleOnce"](function () {
                      for (var a = 0; a < l["length"]; a++) {
                        var u = l[a];
                        v != u && u["setRigType"](ERigidBody2DType["Static"]);
                      }
                      GbzDataManager["ins"]["status"] = ENUM_STATUS["RUN"], GbzInstance["gameMgr"]["gameState"] = ENUM_GAME_STATE["isPlaying"], t["isDowning"] = !1, t["startViewTime"]();
                    });
                  }, .5, .4);
                }, m = 0; m < o; m++) k();
              if (t.fruitsInSlotComp.length > 0) for (var g = 0; g < t.fruitsInSlotComp.length; g++) {
                var y, w;
                (y = (w = t.fruitsInSlotComp[g])["node"]["getComponent"](Sprite)) && (y["color"] = color(255, 255, 255, 255)), w["setRigType"](ERigidBody2DType["Dynamic"], w["gravityScale"]);
              }
            }();
          }
        }, n["isOnScreen"] = function (t, n) {
          return !(t >= ReferenceMgr.inst.halfGameW + 100 || t <= -ReferenceMgr.inst.halfGameW - 100 || n >= ReferenceMgr.inst["halfGameH"] + 100);
        }, n["getNewPos"] = function (t, n) {
          var r, i, e, a, u, s, o;
          if (a = this, e = -300, i = 300, s = this["boundaryLine"].y + 50, o = ReferenceMgr.inst.halfGameH - 80, 2 == this.arrangeType ? (i = this.line.x - 100, o = ReferenceMgr.inst.halfGameH - 150) : 3 == this.arrangeType && (e = this.line.x + 100, o = ReferenceMgr.inst.halfGameH - 150), !(r = function (r) {
            for (var f = [], v = a["fruitsComp"]["filter"](function (t) {
                return t != n && !t["isCollider"] && !t["isInSlot"] && !t["isCanCheck"] && a["isOnScreen"](t.node.x, t.node.y);
              }), l = 0; l < v.length; l++) {
              var b, d;
              d = v[l]["node"]["position"], b = v[l].radius, f["push"](function () {
                var t, n;
                return Pu(t = {}, "pos", 0), Pu(t, "radius", 0), (n = t).pos = math["v2"](d.x, d.y), n.radius = b, n;
              }["apply"]());
            }
            f = f["concat"](t);
            for (var k = 0; k < f.length; k++) {
              var m;
              if (m = f[k], Vec2["distance"](r, m["pos"]) < m.radius) return !1;
            }
            return !0;
          })(u = math.v2(ReferenceMgr.inst.RandomInt(e, i), ReferenceMgr.inst.RandomInt(s, o)))) {
            u = null;
            for (var E = 0; E < 100 && !r(u = math.v2(ReferenceMgr.inst.RandomInt(e, i), ReferenceMgr.inst.RandomInt(s, o))); E++) u = null;
          }
          if (!u) {
            for (var N = this["fruitsComp"]["filter"](function (t) {
                return t != n && !t["isCollider"] && !t["isInSlot"] && !t["isCanCheck"] && a["isOnScreen"](t.node.x, t.node.y);
              }), P = [], G = 0; G < N.length; G++) {
              var O, F, B, z, U;
              if (z = (O = N[G]["node"])["getComponent"](UITransform), F = z["width"] / 2 * O.scale.x, B = z["height"] / 2 * O.scale.y, O.x + F < i && O.x - F > e && O.y + B < o && O.y - B > s) U = math.v2(O.x, O.y), Math.random() < .5 ? Math.random() < .5 ? U.x += F : U.x -= F : Math.random() < .5 ? U.y += B : U.y -= B, P["push"](function () {
                var t, n;
                return Pu(t = {}, "pos", 0), Pu(t, "radius", 0), (n = t).pos = U, n.radius = Math["min"](F, B), n;
              }.apply());
            }
            u = P[ReferenceMgr.inst.RandomInt(0, P.length - 1)]["pos"];
          }
          return u || (u = math.v2(ReferenceMgr.inst.RandomInt(e, i), ReferenceMgr.inst.RandomInt(s, o))), function () {
            var t, r;
            return Pu(t = {}, "pos", 0), Pu(t, "radius", 0), (r = t).pos = u, r.radius = n.radius, r;
          }.apply();
        }, n["creatBoxBoom"] = function (t) {
          GbzAudioManager.ins["play"](ENUM_CLIP["breakWall"]), GbzPoolManager.ins["getNode"]("boxBoom", this["gameRoot"]["getChildByName"]("walls"), new math["Vec3"](t.x, t.y));
        }, n["hightLight"] = function (t) {
          var n;
          (n = t["getComponent"](Sprite)) && (n["customMaterial"] = this["materialAttacked"], this["scheduleOnce"](function () {
            n["isValid"] && (n["customMaterial"] = null);
          }, .24));
        }, n["showFruitEff"] = function (t, n) {
          var r;
          r = this, void 0 === n && (n = 0);
          for (var a = Tool2["convetOtherNodeSpaceAR"](t, this["effsRoot"]), u = ReferenceMgr["inst"]["RandomInt"](8, 12), s = function () {
              for (var S = GbzPoolManager["ins"]["getNode"]("effPr"), A = 0; A < S.children["length"]; A++) S.children[A].active = A == n;
              S.active = !0, r["effsRoot"]["addChild"](S), S["setPosition"](math.v3(a.x + ReferenceMgr.inst.randomN(-50, 50), a.y + ReferenceMgr.inst.randomN(-50, 50))), S["setScale"](math.v3(.69, .69, .69)["multiplyScalar"](ReferenceMgr.inst.randomN(1, 2))), S["angle"] = 0;
              var C = ReferenceMgr.inst.randomN(55, 95),
                x = ReferenceMgr.inst["GetQuatForV3"](ReferenceMgr.inst["RandomAngle"]()),
                T = new math.Vec3(1, 0, 0);
              math.Vec3["transformQuat"](T, T, x);
              var L = ReferenceMgr.inst.randomN(55, 95),
                I = L / C;
              tween(S).by(I, function () {
                var r = Pu({}, "position", 0);
                return r.position = math["v3"](T.x * L, T.y * L, 0), r;
              }.apply(), function () {
                var r = Pu({}, "easing", 0);
                return r.easing = "sineOut", r;
              }.apply())["call"](function () {
                S["active"] = !1, S["removeFromParent"](), GbzPoolManager["ins"]["putNode"](S);
              }).start(), tween(S)["parallel"](tween(S).by(I, function () {
                var i = Pu({}, "angle", 0);
                return i.angle = ReferenceMgr["inst"]["randomN"](260, 300), i;
              }.apply()), tween(S)["to"](I, function () {
                var r = Pu({}, "scale", 0);
                return r.scale = math["v3"](0, 0, 0), r;
              }.apply())).start();
            }, o = 0; o < u; o++) s();
        }, n["breakIceFun"] = function () {
          var t;
          if (t = this, !(this.iceComps.length <= 0 || this.isBreaking)) {
            this.isBreaking = !0;
            for (var a = 0; a < this.iceComps.length; a++) this.iceComps[a]["iceBox"]();
            this["scheduleOnce"](function () {
              t["isBreaking"] = !1;
            }, .01);
          }
        }, n["iceTip"] = function () {
          this.isIceTip || (this.isIceTip = !0, this["fullTip"]("未解冻"));
        }, n["update"] = function (t) {
          if (this.node.active && (this["jointGearMgr"]["upDrawRope"](), GbzDataManager["ins"]["status"] != ENUM_STATUS["UNRUN"] && this.node.active && (this.time_ += .02, this.time_ >= this["totalTime_"]))) {
            if (this.time_ = 0, this.holeComps.length > 0) for (var g = 0; g < this.holeComps.length; g++) {
              var y;
              (y = this.holeComps[g]) && y["upInfo"]();
            }
            for (var w = [], _ = 0; _ < this.fruitsComp.length; _++) {
              var M;
              (M = this.fruitsComp[_])["isTouch"] && !M["isInSlot"] && M["isColliderLR"] && w.push(M);
            }
            if (w.length > 1) {
              for (var S, A = [], C = createForOfIteratorHelperLoose(w); !(S = C())["done"];) {
                var x, T;
                (x = (T = S["value"])["fruitRigidbody"]) && x["linearVelocity"].length() < 100 && A.push(T);
              }
              if (A.length > 1) for (var L = A[0], I = 1; I < A.length; I++) A[I].node.position.y < L.node.position.y && (L = A[I]);
            }
            ViewFPS.getInstance() && ViewFPS.getInstance()["checkHighFps"]();
          }
        }, n["onDisable"] = function () {
          this["recycle"](), u["instance"] = null;
        }, n["recycle"] = function () {
          this["closeViewTime"](), this["jointGearMgr"].recycle(), this["unscheduleAllCallbacks"](), this["setCollisionMgr"](!1);
          for (var k = this.fruitsComp.length - 1; k >= 0; k--) {
            var m;
            (m = this.fruitsComp[k]) && m["recycleSelf"]();
          }
          for (var p = this.holeComps.length - 1; p >= 0; p--) {
            var g;
            (g = this.holeComps[p]) && g.recycle(!1);
          }
          for (var y = this.obstaclesRoot.children.length - 1; y >= 0; y--) {
            var w;
            (w = this.obstaclesRoot.children[y]) && (w.removeFromParent(), GbzPoolManager.ins.putNode(w));
          }
          for (var _ = this.stakeRoot.children.length - 1; _ >= 0; _--) {
            var M;
            (M = this.stakeRoot.children[_]) && (M.removeFromParent(), GbzPoolManager.ins.putNode(M));
          }
          for (var A = this.effsRoot.children.length - 1; A >= 0; A--) {
            var C;
            (C = this.effsRoot.children[A]) && (Tween["stopAllByTarget"](C), C.removeFromParent(), GbzPoolManager.ins.putNode(C));
          }
          this["fruitsIDS"] = [], this.fruitsComp = [], this.holeComps = [], this["iceComps"] = [], this["fruitsInSlotComp"] = [];
        }, n["getImgFill"] = function () {
          var t, n, r, i, e, a, u;
          switch (e = this, (r = (0 === (n = (i = GbzDataManager.ins.fakeGame_level || 1) % 27) ? 27 : n) - 1) < 0 && (r = 0), Math["floor"]((i - 1) / 27) + 1) {
            case 0:
              GbzInstance.gameMgr.fruitStr[r % GbzInstance.gameMgr.fruitStr.length];
              break;
            case 1:
              GbzInstance.gameMgr.sweetStr[r % GbzInstance.gameMgr.sweetStr.length];
              break;
            case 2:
              GbzInstance.gameMgr.vegetableStr[r % GbzInstance.gameMgr.vegetableStr.length];
              break;
            case 3:
              GbzInstance.gameMgr.animalsStr[r % GbzInstance.gameMgr.animalsStr.length];
              break;
            case 4:
              GbzInstance.gameMgr.seaAnimalStr[r % GbzInstance.gameMgr.seaAnimalStr.length];
              break;
            case 5:
              GbzInstance.gameMgr.candyStr[r % GbzInstance.gameMgr.candyStr.length];
              break;
            default:
              GbzInstance.gameMgr.fruitStr[r % GbzInstance.gameMgr.sweetStr.length];
          }
          t = (GbzDataManager.ins.fakeGame_level - 1) % (CityConfig.cityUnlockData.length - 1), this["gameRoot"]["getChildByName"]("progressBg")["active"] = !0, a = CityConfig.cityUnlockData[t][0], u = ENUM_Theme_Sprites_Sub[CityConfig.cityUnlockData[t][1]], GbzResManager.ins.setSpriteFrameAsync(this["fillBg"], u.bundle, a, u.path + Et + a + "/spriteFrame", function (t) {
            SOUtil["SetSpriteSizeHeight"](e["fillBg"], 78);
          }), GbzResManager.ins.setSpriteFrameAsync(this["fillImg"], u.bundle, a, u.path + Et + a + "/spriteFrame", function (t) {
            SOUtil["SetSpriteSizeHeight"](e["fillImg"], 78);
          });
        }, n["changeThemeBG"] = function () {}, n["setTip"] = function () {
          var t, n, r;
          r = (t = this.levelBg.getChildByName("labLevel").getComponent(Label))["node"]["children"][0].getComponent(Label), t.string = "第 " + GbzDataManager.ins.fakeGame_level + " 关", r.string = CityConfig["getCurCitySimpleName"](GbzDataManager.ins.fakeGame_level) + Tt + CityConfig["getCurlvName"](GbzDataManager.ins.fakeGame_level), (n = this.levelBg.getChildByName("img"))["active"] = !1, this.arrangeType > 0 && (n.getComponent(Sprite)["spriteFrame"] = GbzResManager.ins["getRes"](ResType["Sprite"], "game", ["xiangxia", "向右", "向左", "中间", "小雪", "未知", "黑洞"][this.arrangeType - 1]), this["scheduleOnce"](function () {
            SOUtil["SetSpriteSizeWidth"](n["getComponent"](Sprite), 50);
          }, 0));
        }, n["dirTipFun"] = function (t) {
          var n, r, i, e;
          this.dirtectionTip["setPosition"](0, this.levelBg.y - 300), (e = this.levelBg.getChildByName("img"))["active"] = !1, i = this.dirtectionTip.getComponent(UIOpacity) || this.dirtectionTip["addComponent"](UIOpacity), tween().target(i).to(.5, function () {
            var t;
            return (t = Pu({}, "opacity", 0)).opacity = 255, t;
          }.apply())["delay"](.7)["parallel"](tween().target(this.dirtectionTip).to(.7, function () {
            var t, n;
            return Pu(t = {}, "position", 0), Pu(t, "scale", 0), (n = t).position = new math["Vec3"](100, this["levelBg"].y, 0), n.scale = math["v3"](0, 0, 0), n;
          }["bind"](this).apply(), function () {
            var t;
            return (t = Pu({}, "easing", 0)).easing = "backIn", t;
          }.apply()), tween().target(i).to(.7, function () {
            var t;
            return (t = Pu({}, "opacity", 0)).opacity = 0, t;
          }.apply(), function () {
            var t;
            return (t = Pu({}, "easing", 0)).easing = "backIn", t;
          }.apply()))["call"](function () {
            e["active"] = !0, t && t();
          })["start"](), n = this.dirtectionTip.getChildByName("dirImg"), r = this.dirtectionTip.getChildByName("dirLab").getComponent(Label), this.arrangeType > 0 ? (r.string = this.dirLabStr[this.arrangeType - 1], n.getComponent(Sprite).spriteFrame = GbzResManager.ins.getRes(ResType.Sprite, "game", this.dirImgStr[this.arrangeType - 1])) : (this.fruitConfig["iceCount"] > 0 && (n.getComponent(Sprite).spriteFrame = GbzResManager.ins.getRes(ResType.Sprite, "game", this.dirImgStr[4]), r.string = this.dirLabStr[4]), this.fruitConfig["randomBox"] > 0 && (n.getComponent(Sprite).spriteFrame = GbzResManager.ins.getRes(ResType.Sprite, "game", this.dirImgStr[5]), r.string = this.dirLabStr[5]), this.fruitConfig["holeItemTypeArr"]["length"] > 0 && (n.getComponent(Sprite).spriteFrame = GbzResManager.ins.getRes(ResType.Sprite, "game", this.dirImgStr[6]), n.getComponent(UITransform)["width"] *= 1.5, n.getComponent(UITransform)["height"] *= 1.5, r.string = this.dirLabStr[6]));
        }, n["fullTip"] = function (t) {
          var n, r, i;
          r = (i = this["gameRoot"]["getChildByName"]("full"))["children"][0].getComponent(Label), n = i.getComponent(UIOpacity) || i["addComponent"](UIOpacity), r["string"] = t, Tween["stopAllByTarget"](i), tween(n)["to"](.3, function () {
            var t;
            return (t = Pu({}, "opacity", 0)).opacity = 255, t;
          }["apply"]())["call"](function () {
            tween(i)["repeat"](2, tween(i).to(.1, function () {
              var t;
              return (t = Pu({}, "angle", 0)).angle = 10, t;
            }.apply()).to(.1, function () {
              var t;
              return (t = Pu({}, "angle", 0)).angle = 0, t;
            }.apply()).to(.1, function () {
              var t;
              return (t = Pu({}, "angle", 0)).angle = -10, t;
            }.apply()).to(.1, function () {
              var t;
              return (t = Pu({}, "angle", 0)).angle = 0, t;
            }.apply()))["delay"](.5)["call"](function () {
              tween(n)["to"](.3, function () {
                var t;
                return (t = Pu({}, "opacity", 0)).opacity = 0, t;
              }["apply"]())["start"]();
            })["start"]();
          })["start"]();
        }, n["updateFruitText"] = function (t) {
          var n, r;
          (void 0 === t && (t = !1), t) ? (this.labFruit.string = this.fruitRemnantNum.toString(), n = (this.fruitTotalNum - this.fruitRemnantNum) / this.fruitTotalNum, this.fillImg.spriteFrame && (this.fillImg.fillRange = n), this.labProgress.string = (100 * n).toFixed(0) + " %") : (this.fruitRemnantNum--, this.labFruit.string = this.fruitRemnantNum.toString(), r = (this.fruitTotalNum - this.fruitRemnantNum) / this.fruitTotalNum, this.fillImg.spriteFrame && (this.fillImg.fillRange = r), this.labProgress.string = (100 * r).toFixed(0) + " %", this["activeTween"] || this["checkWin"](), this["progressFun"](r));
        }, n["progressFun"] = function (t) {
          var n;
          (n = Math.floor(100 * t)) % 10 == 0 && n !== this.lastReportedProgress && (Math.floor(this["fruitRemnantNum"] / 2), this.lastReportedProgress = n);
        }, n["startViewTime"] = function () {
          this["isSpecialProp_"];
        }, n["resetViewTimeNum"] = function () {}, n["recoverViewTime"] = function () {}, n["closeViewTime"] = function () {}, n["addViewTime"] = function () {}, n["showGameMoveAni"] = function (t) {
          var n, r, i, e, a, u;
          (n = this, void 0 === t && (t = !1), t) ? (this.gameRoot.getChildByName("walls").getChildByName("dropLeft").active = !0, this.gameRoot.getChildByName("walls").getChildByName("dropRight").active = !0, this.gameRoot.getChildByName("walls").getChildByName("wall").active = !0, (r = this.gameRoot.getChildByName("walls").getChildByName("btnFirstWall")) && (r.active = !0), (i = this.gameRoot.getChildByName("walls").getChildByName("btnSecondWall")) && (i.active = !0), this.gameRoot.getChildByName("basket01").active = !0) : (this.gameRoot.getChildByName("walls").getChildByName("dropLeft").active = !1, this.gameRoot.getChildByName("walls").getChildByName("dropRight").active = !1, this.gameRoot.getChildByName("walls").getChildByName("wall").active = !0, this.gameRoot.getChildByName("walls").getChildByName("wall")["getComponent"](PolygonCollider2D)["enabled"] = !1, (a = this.gameRoot.getChildByName("walls").getChildByName("btnFirstWall")) && (a.active = !1), (e = this.gameRoot.getChildByName("walls").getChildByName("btnSecondWall")) && (e.active = !1), u = view["getVisibleSize"](), tween(this.gameRoot)["to"](.3, function () {
            var t;
            return (t = Pu({}, St, 0)).y = u["height"], t;
          }["apply"]())["call"](function () {
            n["gameRoot"]["getChildByName"]("basket01")["active"] = !1;
          })["start"]());
        }, n["recycleDownFruit"] = function () {
          this["FruitDownLayer"]["recycleFruit"]();
        }, n["blitzkrieg"] = function () {
          GbzAudioManager["ins"]["play"](ENUM_CLIP["lei"]);
          for (var f = Math["floor"](this.fruitsComp.length / 13), h = [], v = 0; v < f; v++) {
            for (var l = ReferenceMgr.inst.RandomInt(20, this.fruitsComp.length - 1); h["includes"](l) || this.fruitsComp[l]["node"]["position"].y < 300;) l = ReferenceMgr.inst.RandomInt(20, this.fruitsComp.length - 1);
            h["push"](l), this.fruitsComp[l]["electricShock"]();
          }
        }, n["checkPro50UeseProp"] = function () {
          var t, n, r;
          (t = this, 1 != this["currentLevel"]) && (r = this.lastTouchFruit["length"] < 2 ? .5 : this.lastTouchFruit[0] && this.lastTouchFruit[1] && this.lastTouchFruit[0].ID == this.lastTouchFruit[1].ID ? 1.5 : .5, n = function () {
            var n;
            if (t["isValid"] && GbzDataManager["ins"]["status"] != ENUM_STATUS["UNRUN"] && (n = t.fruitsInSlotComp.length, t.policeLineFruit = t.fruitsInSlotComp[t.fruitsInSlotComp.length - 1], n == t["slotsNum"])) {
              var f;
              if (!t["btnFirstWall"] && !t["btnSecondWall"]) return;
              f = (t.fruitTotalNum - t["fruitRemnantNum"]) / t.fruitTotalNum, ScoreLvMgr.inst["canPopupSlotItem"](f) && (ScoreLvMgr.inst["markSlotItemPopuped"](), GbzInstance["uiMgr"]["toggle"](ENUM_UI["LAYER_Prop_Special"], !0, null, 2)), t.policeLineFruit = null;
            }
          }, this["scheduleOnce"](function () {
            t["isValid"] && (2 == t.lastTouchFruit["length"] && t.lastTouchFruit[0] && t.lastTouchFruit[1] && t.lastTouchFruit[0].ID == t.lastTouchFruit[1].ID ? t["scheduleOnce"](function () {
              n();
            }, 1) : n());
          }, r));
        }, n["addTouchFruit"] = function (t) {
          this.lastTouchFruit["includes"](t) || (this.lastTouchFruit["length"] < 2 || this.lastTouchFruit["shift"](), this.lastTouchFruit["push"](t));
        }, n["getSafePos"] = function (t) {
          var n, r, i;
          return i = function () {
            var t, n;
            return Pu(t = {}, "xMin", 0), Pu(t, "xMax", 0), Pu(t, "yMin", 0), Pu(t, "yMax", 0), (n = t).xMin = 3 == this.arrangeType ? -200 : -300, n.xMax = 2 == this.arrangeType ? 200 : 300, n.yMin = this["boundaryLine"].y, n.yMax = ReferenceMgr["inst"]["halfGameH"], n;
          }["bind"](this).apply(), r = t["map"](function (t) {
            return function () {
              var n, r;
              return Pu(n = {}, "position", 0), Pu(n, "radius", 0), (r = n).position = t["node"].position, r.radius = t.radius, r;
            }["apply"]();
          }), 0 == t["length"] ? math.v2(ReferenceMgr.inst.RandomInt(-300, 300), ReferenceMgr.inst.RandomInt(200, 500)) : ((n = LayoutRectSafe.inst["findSafePosition"](i, r, t[0]["radius"] || 50, function () {
            var t, n;
            return Pu(t = {}, "margin", 0), Pu(t, "preferY", 0), Pu(t, "safeMargin", 0), Pu(t, "fallbackMode", 0), (n = t).margin = .8, n.preferY = 0, n.safeMargin = 15, n.fallbackMode = "random", n;
          }.apply())) || (n = math.v2(ReferenceMgr.inst.RandomInt(-300, 300), ReferenceMgr.inst.RandomInt(200, 500))), n);
        }, n["playChuiziEff"] = function (t, n, r) {
          var i;
          void 0 === r && (r = new Vec3(0, 0, 0)), (i = GbzPoolManager["ins"]["getNode"]("chuizi")) && (this["node"]["addChild"](i), i["setPosition"](t["position"]["add"](r)), i["active"] = !0, i["getComponent"](ChuiziCom)["playHammer"](n));
        }, n["setLastTouchFruit"] = function (t, n) {
          n ? this.lastTouchFruitComp.fruitComp != t || this.lastTouchFruitComp.isDown || (this.lastTouchFruitComp.isDown = !0, this["fruitMove"](!0)) : (this.lastTouchFruitComp.fruitComp = t, this.lastTouchFruitComp.isDown = !1);
        }, n["getPr"] = function () {
          var t;
          return t = (this.fruitTotalNum - this["fruitRemnantNum"]) / this.fruitTotalNum, parseFloat(t["toFixed"](2));
        }, u;
      }(Component))["instance"] = void 0, Ht = applyDecoratedDescriptor((Ut = $t).prototype, "materialAttacked", [xt], (Pu(ht = {}, "configurable", !0), Pu(ht, "enumerable", !0), Pu(ht, "writable", !0), Pu(ht, "initializer", function () {
        return null;
      }), ht)), Vt = applyDecoratedDescriptor(Ut.prototype, "normalMaterial", [Lt], (Pu(vt = {}, "configurable", !0), Pu(vt, "enumerable", !0), Pu(vt, "writable", !0), Pu(vt, "initializer", function () {
        return null;
      }), vt)), Wt = applyDecoratedDescriptor(Ut.prototype, "lightMaterial", [It], (Pu(lt = {}, "configurable", !0), Pu(lt, "enumerable", !0), Pu(lt, "writable", !0), Pu(lt, "initializer", function () {
        return null;
      }), lt)), Jt = applyDecoratedDescriptor(Ut.prototype, "obstaclesRoot", [Rt], (Pu(bt = {}, "configurable", !0), Pu(bt, "enumerable", !0), Pu(bt, "writable", !0), Pu(bt, "initializer", function () {
        return null;
      }), bt)), jt = applyDecoratedDescriptor(Ut.prototype, "stakeRoot", [Dt], (Pu(dt = {}, "configurable", !0), Pu(dt, "enumerable", !0), Pu(dt, "writable", !0), Pu(dt, "initializer", function () {
        return null;
      }), dt)), qt = applyDecoratedDescriptor(Ut.prototype, "fruits", [Nt], (Pu(kt = {}, "configurable", !0), Pu(kt, "enumerable", !0), Pu(kt, "writable", !0), Pu(kt, "initializer", function () {
        return null;
      }), kt)), Kt = applyDecoratedDescriptor(Ut.prototype, "numRoot", [Pt], (Pu(mt = {}, "configurable", !0), Pu(mt, "enumerable", !0), Pu(mt, "writable", !0), Pu(mt, "initializer", function () {
        return null;
      }), mt)), Yt = applyDecoratedDescriptor(Ut.prototype, "effsRoot", [Gt], (Pu(pt = {}, "configurable", !0), Pu(pt, "enumerable", !0), Pu(pt, "writable", !0), Pu(pt, "initializer", function () {
        return null;
      }), pt)), Xt = applyDecoratedDescriptor(Ut.prototype, "jointGraphics", [Ot], (Pu(gt = {}, "configurable", !0), Pu(gt, "enumerable", !0), Pu(gt, "writable", !0), Pu(gt, "initializer", function () {
        return null;
      }), gt)), Zt = applyDecoratedDescriptor(Ut.prototype, "jointGearMgr", [Ft], (Pu(yt = {}, "configurable", !0), Pu(yt, "enumerable", !0), Pu(yt, "writable", !0), Pu(yt, "initializer", function () {
        return null;
      }), yt)), Qt = applyDecoratedDescriptor(Ut.prototype, "FruitDownLayer", [Bt], (Pu(wt = {}, "configurable", !0), Pu(wt, "enumerable", !0), Pu(wt, "writable", !0), Pu(wt, "initializer", function () {
        return null;
      }), wt)), zt = Ut)) || zt)), cclegacy._RF["pop"]();
    }, vt;
  }["bind"](this)["apply"]();
});