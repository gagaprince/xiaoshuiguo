(function (t) {
  var inheritsLoose, cclegacy, _decorator, math, find, input, Input, EditBox, Label, UIOpacity, view, Tween, tween, Animation, gameMsg, GbzAudioManager, PropType, GbzDataManager, GbzInstance, GbzPoolManager, GbzSdkManager, GbzToastManager, SOUtil, Tool2, GameMgr, ENUM_CLIP, ENUM_STATUS, ENUM_UI, GbzBaselayer, ReferenceMgr, LevelConfig, Log;
  return function () {
    var D, N;
    return Pu(D = {}, "setters", 0), Pu(D, "execute", 0), (N = D).setters = [function (t) {
      inheritsLoose = t["inheritsLoose"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], math = t["math"], find = t["find"], input = t["input"], Input = t["Input"], EditBox = t["EditBox"], Label = t["Label"], UIOpacity = t["UIOpacity"], view = t["view"], Tween = t["Tween"], tween = t["tween"], Animation = t["Animation"];
    }, function (t) {
      gameMsg = t["gameMsg"];
    }, function (t) {
      GbzAudioManager = t["default"];
    }, function (t) {
      PropType = t["PropType"], GbzDataManager = t["default"];
    }, function (t) {
      GbzInstance = t["default"];
    }, function (t) {
      GbzPoolManager = t["default"];
    }, function (t) {
      GbzSdkManager = t["default"];
    }, function (t) {
      GbzToastManager = t["default"];
    }, function (t) {
      SOUtil = t["default"];
    }, function (t) {
      Tool2 = t["default"];
    }, function (t) {
      GameMgr = t["default"];
    }, function (t) {
      ENUM_CLIP = t["ENUM_CLIP"], ENUM_STATUS = t["ENUM_STATUS"], ENUM_UI = t["ENUM_UI"];
    }, function (t) {
      GbzBaselayer = t["default"];
    }, function (t) {
      ReferenceMgr = t["default"];
    }, function (t) {
      LevelConfig = t["default"];
    }, function (t) {
      Log = t["Log"];
    }], N.execute = function () {
      var D, N, P;
      cclegacy._RF["push"]({}, "7c330JdxoVKRZpHO2ppqzfY", "GbzMainLayer", void 0), D = _decorator["ccclass"], _decorator["property"], t("default", D("GbzMainLayer")(((P = function (t) {
        var r, i;
        return inheritsLoose(i = function () {
          for (var n, r, s = (n = arguments)["length"], o = new Array(s), c = 0; c < s; c++) o[c] = n[c];
          return (r = t["call"]["apply"](t, [this]["concat"](o)) || this)["btn_exit"] = null, r["skills"] = null, r["loseCounts"] = 0, r["btnType"] = [PropType["removeFruit"], PropType["disturbFruit"]], r["btn_Win"] = null, r["jumpLv"] = null, r["animNodes"] = null, r["_skillClickHandlers"] = [], r["lightningNode"] = null, r["linearDamping"] = void 0, r;
        }, t), (r = i["prototype"])["yure"] = function () {
          var t;
          t = GbzPoolManager.ins.getNode("flash", this.node), GbzPoolManager.ins.getNode("ice", this.node)["scale"] = math["v3"](0), t["setPosition"](0, -1000), this["scheduleOnce"](function () {
            t["destroy"]();
          }, 3);
        }, r["refesh"] = function () {
          this["animNodes"]["active"] = !1, GbzInstance["gameMgr"]["itemADCounts"] = [4, 4], this["refreshSkillBtn"]();
        }, r["onLoad"] = function () {
          SOUtil["emit"](gameMsg["lStartLoadGameBackUI"]), i._GbzMainLayer || (i._GbzMainLayer = this), this.btn_exit = find("btn_exit", this.node), this.btn_exit.on("click", this["onExit"], this), this.btn_Win = this.node.getChildByName("btn_Win"), this.btn_Win.on("click", this["btnWinFun"], this), this.jumpLv = this.node.getChildByName("jumpLv"), this.animNodes = find("animNodes", this.node), this.animNodes.active = !1, this.lightningNode = find("lightningNode", this.node), this.lightningNode.active = !1, input.on(Input.EventType["TOUCH_START"], this.touchClick, this), input.on(Input.EventType["TOUCH_END"], this.touchClick, this), GbzSdkManager["_ins"].platformApi ? GbzSdkManager["ins"].platformApi["freead"] ? (this.btn_Win.active = !0, this.jumpLv.active = !0) : (this.btn_Win.active = !1, this.jumpLv.active = !1) : (this.btn_Win.active = !0, this.jumpLv.active = !0), this.linearDamping = find("linearDamping", this.node)["getComponent"](EditBox), find("btn", this.linearDamping.node).on("click", this["editorBoxChange"], this), this.jumpLv.getChildByName("btn_cf1").on("click", this["onBtnCf1"], this), this.jumpLv.getChildByName("btn_cf2").on("click", this["onBtnCf2"], this), this.jumpLv.getChildByName("btn_cf3").on("click", this["onBtnCf3"], this);
        }, r["onBtnCf1"] = function () {
          LevelConfig["getIns"]()["InitCf"](1), GbzToastManager["ins"]["show"]("切换配置为原版");
        }, r["onBtnCf2"] = function () {
          LevelConfig["getIns"]()["InitCf"](2), GbzToastManager["ins"]["show"]("切换配置为简单");
        }, r["onBtnCf3"] = function () {
          LevelConfig["getIns"]()["InitCf"](3), GbzToastManager["ins"]["show"]("切换配置为困难");
        }, r["editorBoxChange"] = function () {
          GbzDataManager.ins.linearDamping = parseFloat(this.linearDamping["string"]) || 0, Log(GbzDataManager.ins.linearDamping), SOUtil["emit"](gameMsg["changelinearDamping"]);
        }, r["onEnable"] = function () {
          var t;
          t = this, this.skills = find("skills", this["node"]), this.skills.active = !0, find("Canvas/MAIN/Stage").active = !0, this["refesh"](), this["rendorCurrentLevel"](), GbzAudioManager["ins"]["playBGM"](ENUM_CLIP["GAME_PLAYBGM"]), this.skills["children"]["forEach"](function (n, r) {
            var i;
            i = function () {
              t["onSkillClick"](r);
            }, t["_skillClickHandlers"][r] = i, n["on"]("click", i);
          });
        }, r["onDisable"] = function () {
          var t, n;
          n = this, GbzAudioManager["ins"]["playBGM"](ENUM_CLIP["GAME_BGM"]), (t = this["node"]["getChildByName"]("DynamicLabel")) && t["destroy"](), this["skills"]["children"]["forEach"](function (t, r) {
            var i;
            (i = n["_skillClickHandlers"][r]) && t["off"]("click", i);
          }), this["_skillClickHandlers"]["length"] = 0;
        }, r["btnWinFun"] = function () {
          GbzDataManager["ins"]["status"] != ENUM_STATUS["UNRUN"] && GameMgr.instance && GameMgr.instance["winFun"](!0);
        }, r["onDestroy"] = function () {
          input.off(Input.EventType["TOUCH_START"], this.touchClick, this), input.off(Input.EventType["TOUCH_END"], this.touchClick, this), this["btn_exit"].off("click", this["onExit"], this), this["btn_Win"].off("click", this["btnWinFun"], this);
        }, r["onExit"] = function () {
          GbzDataManager.ins["status"] != ENUM_STATUS["UNRUN"] && (GbzAudioManager.ins["play"](ENUM_CLIP["GAME_CLICK"]), GbzInstance["uiMgr"]["toggle"](ENUM_UI["LAYER_EXIT"]));
        }, r["refreshSkillBtn"] = function () {
          for (var k = 0; k < this.skills.children["length"]; k++) {
            var m, y, w, _;
            if (m = this.skills.children[k], y = GbzDataManager["ins"]["getPropNum"](this.btnType[k]), Log(this.btnType[k]), y > 0) m.getChildByName("ad").active = !1, (w = m.getChildByName("propNumLbl")).active = !0, w.getComponent(Label)["string"] = At + y["toString"]();else m.getChildByName("ad").active = !0, _ = m.getComponent(UIOpacity) || m["addComponent"](UIOpacity), m.getChildByName("propNumLbl").active = !1, GbzInstance["gameMgr"]["itemADCounts"][this.btnType[k]] > 0 ? (_.opacity = 255, m.getChildByName("ad").active = !0) : (_.opacity = 125, m.getChildByName("ad").active = !1);
          }
        }, r["onSkillClick"] = function (t) {
          var n;
          (this.refreshSkillBtn(), GbzDataManager.ins["status"] != ENUM_STATUS["UNRUN"]) ? (GbzAudioManager.ins["play"](ENUM_CLIP["GAME_CLICK"]), GbzDataManager.ins.skillIndex = t, n = GbzDataManager.ins["getPropNum"](this.btnType[t]), GbzInstance.gameMgr["itemADCounts"][this.btnType[t]] < 1 || (n > 0 ? (GbzDataManager.ins["addProp"](this.btnType[t], -1), GbzInstance.gameMgr["onGameSkill"](), this.refreshSkillBtn()) : 1 != GbzDataManager.ins["game_level"] ? GbzInstance["uiMgr"]["toggle"](ENUM_UI["GbzGetItemLayer"], !0, null, function () {
            var n;
            return (n = function () {
              var t, n;
              return Pu(t = {}, "index", 0), Pu(t, "_GbzMainLayer", 0), (n = t).index = 0, n._GbzMainLayer = 0, n;
            }["apply"]())["index"] = t, n["_GbzMainLayer"] = this, n;
          }["bind"](this)["apply"]()) : SOUtil.strTipLab("第二关使用", ENUM_UI.LAYER_MAIN, 200, 35))) : 0 == GbzDataManager.ins.skillIndex ? SOUtil.strTipLab("消除中", ENUM_UI.LAYER_MAIN, 200, 35) : 1 == GbzDataManager.ins.skillIndex && SOUtil.strTipLab("刷新中", ENUM_UI.LAYER_MAIN, 200, 35);
        }, r["rendorCurrentLevel"] = function () {}, r["touchClick"] = function (t) {
          GameMgr.instance && GameMgr.instance["resetViewTimeNum"]();
        }, r["showAnim"] = function (t, n, r, i) {
          var a, u, s, o, f, b;
          if (a = this, this.animNodes.active = !0, s = this.animNodes.getChildByName("animbg"), o = this.animNodes.getChildByName("animNode0"), u = this.animNodes.getChildByName("animNode1"), s.active = !0, o.active = !1, u.active = !1, 0 == t) f = view["getVisibleSize"]()["width"], o.active = !0, o.x = -f / 2 - 200, b = f / 2 + 200, Tween.stopAllByTarget(o), tween(o).to(.5, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, At, 0)).x = 0, t;
            }["apply"]()).x = 0, t;
          }.apply())["delay"](1.5).to(.5, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, At, 0)).x = 0, t;
            }["apply"]()).x = b, t;
          }.apply()).call(function () {
            a["animNodes"]["active"] = !1, n && n();
          }).start();else if (1 == t) if (2 == r || 3 == r) {
            var E, D, N;
            u.active = !0, (N = u.getChildByName("icons"))["scale"] = math["v3"](1.5, 1.5, 1.5), N["angle"] = 0, N["setPosition"](0, 40), N.active = !0;
            for (var P = 0; P < N.children["length"]; P++) N.children[P].active = !1;
            (D = u.getChildByName("dir")["getComponent"](Label))["node"].active = !0, 2 == r ? (D.string = "从左往右移动", N.children[2].active = !0) : 3 == r && (D.string = "从右往左移动", N.children[1].active = !0), E = Tool2["convetOtherNodeSpaceAR"](i, u), Tween.stopAllByTarget(N), tween(N).to(.1, function () {
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
              }["apply"]())["angle"] = 0, t;
            }.apply())["union"]()["repeat"](3).call(function () {
              N["angle"] = 0, D["node"].active = !1, s.active = !1, tween(N)["to"](.5, function () {
                var t;
                return (t = function () {
                  var t, n;
                  return Pu(t = {}, "position", 0), Pu(t, "scale", 0), (n = t).position = 0, n.scale = 0, n;
                }["apply"]())["position"] = E, t["scale"] = math["v3"](1, 1, 1), t;
              }["apply"]())["call"](function () {
                N.active = !1, a["animNodes"].active = !1, n && n();
              })["start"]();
            }).start();
          } else this.animNodes.active = !1, n && n();
        }, r["showlightning"] = function (t) {
          var n, r, i, e;
          (n = this, GbzDataManager["ins"]["fakeGame_level"] % 10 == 1 && 1 == ReferenceMgr["inst"]["curTheme"]) ? (this.lightningNode["active"] = !0, r = (i = this.lightningNode["getChildByName"]("anim")).getComponent(Animation), (e = i.getComponent(UIOpacity) || i["addComponent"](UIOpacity))["opacity"] = 100, r["play"]("anim"), tween(e)["to"](.2, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "opacity", 0)).opacity = 0, t;
            }["apply"]())["opacity"] = 255, t;
          }["apply"]())["delay"](.3)["call"](function () {
            n["lightningNode"]["active"] = !1, t && t(!0);
          })["start"]()) : t && t(!1);
        }, i;
      }(GbzBaselayer))["levelBg"] = void 0, P["_GbzMainLayer"] = void 0, N = P)) || N), cclegacy._RF["pop"]();
    }, N;
  }["bind"](this)["apply"]();
});