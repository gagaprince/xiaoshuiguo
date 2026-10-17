(function (t) {
  var inheritsLoose, cclegacy, _decorator, find, Sprite, RichText, Tween, UITransform, tween, math, color, CityConfig, GbzAudioManager, GbzDataManager, GbzInstance, GbzResManager, GbzSdkManager, GbzToastManager, GameMgr, ENUM_Theme_Sprites_Sub, ENUM_CLIP, ENUM_UI, GbzBaselayer, Log;
  return function () {
    var A, C;
    return Pu(A = {}, "setters", 0), Pu(A, "execute", 0), (C = A).setters = [function (t) {
      inheritsLoose = t["inheritsLoose"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], find = t["find"], Sprite = t["Sprite"], RichText = t["RichText"], Tween = t["Tween"], UITransform = t["UITransform"], tween = t["tween"], math = t["math"], color = t["color"];
    }, function (t) {
      CityConfig = t["default"];
    }, function (t) {
      GbzAudioManager = t["default"];
    }, function (t) {
      GbzDataManager = t["default"];
    }, function (t) {
      GbzInstance = t["default"];
    }, function (t) {
      GbzResManager = t["default"];
    }, function (t) {
      GbzSdkManager = t["default"];
    }, function (t) {
      GbzToastManager = t["default"];
    }, function (t) {
      GameMgr = t["default"];
    }, function (t) {
      ENUM_Theme_Sprites_Sub = t["ENUM_Theme_Sprites_Sub"], ENUM_CLIP = t["ENUM_CLIP"], ENUM_UI = t["ENUM_UI"];
    }, function (t) {
      GbzBaselayer = t["default"];
    }, function (t) {
      Log = t["Log"];
    }], C.execute = function () {
      var A, C;
      cclegacy._RF["push"]({}, "198aaN23dBAaL62KzMHr32p", "GbzWin2Layer", void 0), A = _decorator["ccclass"], _decorator["property"], t("default", A("GbzWin2Layer")(C = function (t) {
        var r, i;
        return inheritsLoose(i = function () {
          for (var n, r, c = (n = arguments)["length"], f = new Array(c), h = 0; h < c; h++) f[h] = n[h];
          return (r = t["call"]["apply"](t, [this]["concat"](f)) || this)["panel"] = null, r["aniPanel"] = null, r["icon"] = null, r["title"] = null, r["guang"] = null, r["info"] = null, r["proBg"] = null, r["btnshare"] = null, r["buttons"] = null, r["proBg_fill"] = null, r["lv"] = null, r["carNode"] = null, r["targetPro"] = 0, r["nowPro"] = 1, r["btnShare"] = null, r;
        }, t), (r = i["prototype"])["onLoad"] = function () {
          this.panel = find("style/panel", this.node), this["aniPanel"] = find("style/aniPanel", this.node), this.title = this.panel.getChildByName("title"), this.guang = this.panel.getChildByName("guang"), this.icon = this.guang.getChildByName("icon").getComponent(Sprite), this.info = this.panel.getChildByName("info"), this.proBg = this.panel.getChildByName("proBg"), this.btnshare = this.panel.getChildByName("btnshare"), this.buttons = this.panel.getChildByName("buttons").getChildByName("btn_restart"), this.proBg_fill = this.proBg.getChildByName("proBg_fill").getComponent(Sprite), this.lv = this.proBg.getChildByName("lv").getComponent(RichText), this["carNode"] = this.proBg.getChildByName("car"), this["btnShare"] = this.panel.getChildByName("btnshare");
        }, r["onEnable"] = function () {
          var t, n, r;
          this["losePanelTween"](), this["buttons"].on("click", this["onClickButtons"], this), this["btnShare"].on("click", this["onShare"], this), n = (GbzDataManager.ins.fakeGame_level - 2) % (CityConfig.cityUnlockData.length - 1), Log(n, GbzDataManager.ins.fakeGame_level - 2, CityConfig.cityUnlockData.length - 1), t = CityConfig.cityUnlockData[n][0], r = ENUM_Theme_Sprites_Sub[CityConfig.cityUnlockData[n][1]], GbzResManager.ins["setSpriteFrameAsync"](this["icon"], r["bundle"], t, r["path"] + Et + t + "/spriteFrame"), GbzDataManager.ins["challengeCount"] = 0, GbzDataManager.ins["uploadLocalToServer"](!0), GbzDataManager.ins["store"]();
        }, r["onDisable"] = function () {
          Tween.stopAllByTarget(this["node"]), Tween.stopAllByTarget(this["title"]), Tween.stopAllByTarget(this["guang"]), Tween.stopAllByTarget(this["info"]), Tween.stopAllByTarget(this["proBg"]), Tween.stopAllByTarget(this["btnshare"]), Tween.stopAllByTarget(this.buttons), Tween.stopAllByTarget(this["proBg_fill"]), Tween.stopAllByTarget(this["carNode"]), this.buttons.off("click", this["onClickButtons"], this), this["btnShare"].off("click", this["onShare"], this);
        }, r["onClickButtons"] = function () {
          GbzAudioManager["ins"]["play"](ENUM_CLIP["GAME_CLICK"]), GbzInstance.uiMgr.toggle(ENUM_UI["LAYER_WIN"], !1), GbzInstance.uiMgr.toggle(ENUM_UI["CarMoveLayer"]), GameMgr["instance"]["recycleDownFruit"]();
        }, r["losePanelTween"] = function () {
          var t, n, r, i, e;
          i = this, this.buttons["angle"] = 0, Log(GbzDataManager.ins.fakeGame_level), n = CityConfig["getCityTotalProgress"](GbzDataManager.ins.fakeGame_level - 1), t = CityConfig["getCityCurProgress"](GbzDataManager.ins.fakeGame_level - 1), this.nowPro = (t - 1) / n, this["targetPro"] = t / n, this["carNode"].x = .5 * -this.proBg.getComponent(UITransform).width + this.proBg.getComponent(UITransform).width * this.nowPro, this["proBg_fill"]["fillRange"] = this.nowPro, r = CityConfig["getLvDiffNum"](GbzDataManager.ins.fakeGame_level - 1), e = CityConfig["getNextCityName"](GbzDataManager.ins.fakeGame_level - 1), this["lv"]["string"] = 0 == r ? ki + e + "</color></b></outline>" : mi + r + pi + e + "</color></b></outline>", this["title"].setScale(0, 0, 0), this["guang"].setScale(0, 0, 0), this["info"].setScale(0, 0, 0), this.proBg.setScale(0, 0, 0), this["btnshare"].setScale(0, 0, 0), this.buttons.setScale(0, 0, 0), tween(this["node"]).call(function () {
            tween(i["title"])["to"](.5, function () {
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
            }.apply())["start"]();
          }).delay(.5).call(function () {
            tween(i["guang"]).to(.5, function () {
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
            }.apply()).start(), tween(i["info"]).to(.5, function () {
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
            }.apply()).start();
          }).delay(.5).call(function () {
            tween(i["proBg"]).to(.5, function () {
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
            }.apply()).start(), tween(i["proBg_fill"]).to(1, function () {
              var t;
              return (t = function () {
                var t;
                return (t = Pu({}, "fillRange", 0)).fillRange = 0, t;
              }["apply"]())["fillRange"] = i["targetPro"], t;
            }.apply()).start(), tween(i["carNode"]).to(1, function () {
              var t;
              return (t = function () {
                var t;
                return (t = Pu({}, At, 0)).x = 0, t;
              }["apply"]()).x = .5 * -i.proBg.getComponent(UITransform).width + i.proBg.getComponent(UITransform).width * i["targetPro"], t;
            }.apply()).start();
          }).delay(1).call(function () {
            tween(i["btnshare"])["to"](.5, function () {
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
            }.apply())["start"]();
          }).delay(.5).delay(.2).call(function () {
            tween(i["buttons"])["to"](.5, function () {
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
            }.apply())["start"]();
          }).delay(.5).call(function () {
            !function t() {
              tween(i["buttons"]).to(.2, function () {
                var t;
                return (t = function () {
                  var t;
                  return (t = Pu({}, "angle", 0)).angle = 0, t;
                }["apply"]())["angle"] = 18, t;
              }.apply()).to(.2, function () {
                var t;
                return (t = function () {
                  var t;
                  return (t = Pu({}, "angle", 0)).angle = 0, t;
                }["apply"]())["angle"] = -18, t;
              }.apply()).to(.2, function () {
                var t;
                return (t = function () {
                  var t;
                  return (t = Pu({}, "angle", 0)).angle = 0, t;
                }["apply"]())["angle"] = 18, t;
              }.apply()).to(.2, function () {
                var t;
                return (t = function () {
                  var t;
                  return (t = Pu({}, "angle", 0)).angle = 0, t;
                }["apply"]())["angle"] = -18, t;
              }.apply()).to(.2, function () {
                var t;
                return (t = function () {
                  var t;
                  return (t = Pu({}, "angle", 0)).angle = 0, t;
                }["apply"]())["angle"] = 0, t;
              }.apply())["delay"](2)["call"](t)["start"]();
            }();
          })["start"]();
        }, r["onShare"] = function () {
          GbzAudioManager.ins["play"](ENUM_CLIP["GAME_CLICK"]), GbzSdkManager.ins["platform"]() ? GbzSdkManager.ins["activeShare"]() : GbzToastManager.ins["show"]("仅支持小游戏平台", function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "gravity", 0), Pu(t, "bg_color", 0), (n = t).gravity = 0, n.bg_color = 0, n;
            }["apply"]())["gravity"] = "TOP", t["bg_color"] = color(102, 202, 28, 255), t;
          }["apply"]());
        }, i;
      }(GbzBaselayer)) || C), cclegacy._RF["pop"]();
    }, C;
  }["bind"](this)["apply"]();
});