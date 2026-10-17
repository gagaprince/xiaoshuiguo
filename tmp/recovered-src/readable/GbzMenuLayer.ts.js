(function (t) {
  var inheritsLoose, asyncToGenerator, cclegacy, _decorator, find, Widget, UITransform, v3, tween, Sprite, Label, Button, sys, color, gameMsg, GbzAudioManager, GbzDataManager, GbzInstance, GbzPoolManager, GbzSdkManager, SOUtil, ENUM_CLIP, ENUM_UI, ENUM_GAME_STATE, GbzBaselayer, GbzToastManager, WxIAAMgr, Log;
  return function () {
    var L, I;
    return Pu(L = {}, "setters", 0), Pu(L, "execute", 0), (I = L).setters = [function (t) {
      inheritsLoose = t["inheritsLoose"], asyncToGenerator = t["asyncToGenerator"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], find = t["find"], Widget = t["Widget"], UITransform = t["UITransform"], v3 = t["v3"], tween = t["tween"], Sprite = t["Sprite"], Label = t["Label"], Button = t["Button"], sys = t["sys"], color = t["color"];
    }, function (t) {
      gameMsg = t["gameMsg"];
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
      SOUtil = t["default"];
    }, function (t) {
      ENUM_CLIP = t["ENUM_CLIP"], ENUM_UI = t["ENUM_UI"], ENUM_GAME_STATE = t["ENUM_GAME_STATE"];
    }, function (t) {
      GbzBaselayer = t["default"];
    }, function (t) {
      GbzToastManager = t["default"];
    }, function (t) {
      WxIAAMgr = t["default"];
    }, function (t) {
      Log = t["Log"];
    }], I.execute = function () {
      var L, I;
      cclegacy._RF["push"]({}, "6cd43MVVK5NNY+5UtqwDA2W", "GbzMenuLayer", void 0), L = _decorator["ccclass"], _decorator["property"], t("default", L("GbzMenuLayer")(I = function (t) {
        var i, e;
        return inheritsLoose(e = function () {
          for (var n, r, v = (n = arguments)["length"], l = new Array(v), b = 0; b < v; b++) l[b] = n[b];
          return (r = t["call"]["apply"](t, [this]["concat"](l)) || this)["btn_start"] = null, r["btn_setting"] = null, r["btn_sub"] = null, r["btn_Theme"] = null, r["btn_request"] = null, r["inTime"] = 0, r["btn_cbl"] = null, r["btn_addShortcut"] = null, r["btn_advise"] = null, r["btn_fans"] = null, r["btn_fruitBook"] = null, r["btn_gameClub"] = null, r["btn_Service"] = null, r["btn_rank"] = null, r["btn_share"] = null, r["logoNode"] = void 0, r["mainBtn"] = void 0, r["_logoInitPos"] = null, r["_mainBtnInitPos"] = null, r["_fruitBookInitPos"] = null, r["_fansInitPos"] = null, r["_gameClubInitPos"] = null, r["_serviceInitPos"] = null, r["_rankInitPos"] = null, r["_settingInitPos"] = null, r["_shareInitPos"] = null, r;
        }, t), (i = e["prototype"])["onLoad"] = function () {
          var t;
          t = this, this.btn_start = find("main/btn_start", this.node), this.btn_start.on("click", this["onStart"], this), this.btn_setting = find("btn_setting", this.node), this.btn_setting.on("click", this["onSetting"], this), this.btn_Theme = find("btn_Theme", this.node), this.btn_Theme.on("click", this["openTheme"], this), this.btn_cbl = this.node.getChildByName("btn_cbl"), this.btn_cbl.on("click", this["openTTCbl"], this), this.btn_addShortcut = this.node.getChildByName("btn_addShortcut"), this.btn_addShortcut.on("click", this["openTTADD"], this), this.btn_request = this.node.getChildByName("btn_request"), this.btn_request.on("click", this["openTTRequest"], this), this.btn_advise = this.node.getChildByName("btn_advise"), this.btn_advise.on("click", this["openAdvise"], this), this.btn_fans = this.node.getChildByName("btn_fans"), this.btn_fans.on("click", this["openFans"], this), this.btn_fruitBook = this.node.getChildByName("btn_fruitBook"), this.btn_fruitBook.on("click", this["openFruitBook"], this), this.btn_Service = this.node.getChildByName("btn_Service"), this.btn_Service.on("click", this["openWXService"], this), this.btn_rank = this.node.getChildByName("btn_rank"), this.btn_rank.on("click", this["openRankLayer"], this), this.btn_share = this.node.getChildByName("btn_share"), this.btn_share.on("click", this["openShare"], this), this.btn_gameClub = this.node.getChildByName("btn_gameClub"), this["scheduleOnce"](function () {
            GbzSdkManager["ins"]["createGameClubButton"](t["btn_gameClub"]);
          }, 2.5), this.logoNode = this.node.getChildByName("bg_notice"), this.mainBtn = this.node.getChildByName("main"), SOUtil["emit"](gameMsg["lStartLoadHomeBackUI"]), this.logoNode.getComponent(Widget)["updateAlignment"](), this.logoNode.getComponent(Widget)["enabled"] = !1, this["_logoInitPos"] = this.logoNode.position.clone(), this["_mainBtnInitPos"] = this.mainBtn.position.clone(), this["_fruitBookInitPos"] = this.btn_fruitBook.position.clone(), this["_fansInitPos"] = this.btn_fans.position.clone(), this["_gameClubInitPos"] = this.btn_gameClub.position.clone(), this["_serviceInitPos"] = this.btn_Service.position.clone(), this["_rankInitPos"] = this.btn_rank.position.clone(), this["_settingInitPos"] = this.btn_setting.position.clone(), this["_shareInitPos"] = this.btn_share.position.clone(), this["setMainBtnPos"]();
        }, i["setMainBtnPos"] = function () {
          var t;
          this.node.getComponent(Widget)["updateAlignment"](), this.logoNode["setPosition"](this["_logoInitPos"].x, this.node.getComponent(UITransform).height / 2 + this.logoNode.getComponent(UITransform).height + 50), (t = this.mainBtn.getComponent(Widget)) && (t["enabled"] = !1), this.mainBtn["scale"] = v3(0, 0, 0), this.btnsSetPos(this["btn_fruitBook"], this["_fruitBookInitPos"], !0), this.btnsSetPos(this["btn_fans"], this["_fansInitPos"], !0), this.btnsSetPos(this["btn_Service"], this["_serviceInitPos"], !0), this.btnsSetPos(this["btn_share"], this["_shareInitPos"], !1), this.btnsSetPos(this["btn_rank"], this["_rankInitPos"], !1), this.btnsSetPos(this["btn_gameClub"], this["_gameClubInitPos"], !0), this.btnsSetPos(this["btn_setting"], this["_settingInitPos"], !0);
        }, i["btnsSetPos"] = function (t, n, r) {
          var i, e;
          (e = t.getComponent(Widget)) && (e["enabled"] = !1), i = r ? -1 : 1, t["setPosition"](this["node"].getComponent(UITransform)["width"] / 2 * i + 100 * i, n.y);
        }, i["fruitBookShow"] = function () {
          this.btn_fruitBook["children"][0]["active"] = GbzDataManager.ins["fruitBookLastLevel"] < GbzDataManager.ins["game_level"], tween(this.btn_fruitBook).delay(1.2).to(1, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "position", 0)).position = 0, t;
            }["apply"]())["position"] = this["_fruitBookInitPos"], t;
          }.bind(this).apply(), function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "easing", 0)).easing = 0, t;
            }["apply"]())["easing"] = "backOut", t;
          }.apply()).start(), tween(this["btn_Service"]).delay(1.2).to(1, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "position", 0)).position = 0, t;
            }["apply"]())["position"] = this["_serviceInitPos"], t;
          }.bind(this).apply(), function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "easing", 0)).easing = 0, t;
            }["apply"]())["easing"] = "backOut", t;
          }.apply()).start(), tween(this["btn_fans"]).delay(1.8).to(1, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "position", 0)).position = 0, t;
            }["apply"]())["position"] = this["_fansInitPos"], t;
          }.bind(this).apply(), function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "easing", 0)).easing = 0, t;
            }["apply"]())["easing"] = "backOut", t;
          }.apply()).start(), tween(this["btn_gameClub"]).delay(1.5).to(1, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "position", 0)).position = 0, t;
            }["apply"]())["position"] = this["_gameClubInitPos"], t;
          }.bind(this).apply(), function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "easing", 0)).easing = 0, t;
            }["apply"]())["easing"] = "backOut", t;
          }.apply()).call(function () {
            GbzSdkManager["ins"]["showGameClubButton"]();
          }).start(), tween(this["btn_rank"]).delay(1.8).to(1, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "position", 0)).position = 0, t;
            }["apply"]())["position"] = this["_rankInitPos"], t;
          }.bind(this).apply(), function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "easing", 0)).easing = 0, t;
            }["apply"]())["easing"] = "backOut", t;
          }.apply()).start(), tween(this["btn_setting"]).delay(1.8).to(1, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "position", 0)).position = 0, t;
            }["apply"]())["position"] = this["_settingInitPos"], t;
          }.bind(this).apply(), function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "easing", 0)).easing = 0, t;
            }["apply"]())["easing"] = "backOut", t;
          }.apply()).start(), tween(this["btn_share"]).delay(1.5).to(1, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "position", 0)).position = 0, t;
            }["apply"]())["position"] = this["_shareInitPos"], t;
          }.bind(this).apply(), function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "easing", 0)).easing = 0, t;
            }["apply"]())["easing"] = "backOut", t;
          }.apply()).call(function () {
            GbzSdkManager["ins"]["showGameClubButton"]();
          }).start(), tween(this["logoNode"]).to(.8, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "position", 0)).position = 0, t;
            }["apply"]())["position"] = this["_logoInitPos"], t;
          }.bind(this).apply(), function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "easing", 0)).easing = 0, t;
            }["apply"]())["easing"] = "backOut", t;
          }.apply()).start(), tween(this["mainBtn"]).delay(.7).to(.8, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "scale", 0)).scale = 0, t;
            }["apply"]())["scale"] = v3(1, 1, 1), t;
          }.apply(), function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "easing", 0)).easing = 0, t;
            }["apply"]())["easing"] = "backOut", t;
          }.apply()).start();
        }, i["openWXService"] = function () {
          GbzAudioManager.ins["play"](ENUM_CLIP["GAME_CLICK"]), GbzSdkManager.ins["openCustomerServiceConversation"]();
        }, i["openFruitBook"] = function () {
          GbzAudioManager["ins"]["play"](ENUM_CLIP["GAME_CLICK"]), GbzInstance["uiMgr"]["toggle"](ENUM_UI["FruitBookLayer"], !0, null, this["btn_fruitBook"]["children"][0]);
        }, i["openRankLayer"] = function () {
          WxIAAMgr["inst"]["RankList_Enter"](), GbzAudioManager["ins"]["play"](ENUM_CLIP["GAME_CLICK"]), GbzInstance["uiMgr"]["toggle"](ENUM_UI["GbzRankLayer"], !0);
        }, i["creatorPool"] = function () {
          for (var n = this, r = 0; r < 30; r++) for (var i = function () {
              var i = "fruit" + (r + 1),
                e = GbzPoolManager["ins"]["getNode"](i);
              n["scheduleOnce"](function () {
                GbzPoolManager["ins"]["putNode"](e);
              }, .5);
            }, e = 0; e < 20; e++) i();
        }, i["onEnable"] = function () {
          var t, n, r;
          WxIAAMgr["inst"]["HomePage_View"](), t = this["btn_fruitBook"]["children"][2].getComponent(Sprite), (r = (GbzDataManager.ins.game_level - 1) / 175) >= 1 && (r = 1), t["fillRange"] = r, GbzInstance.gameMgr["gameState"] = ENUM_GAME_STATE["isHome"], this["setMainBtnPos"](), this["scheduleOnce"](this["fruitBookShow"], .5), GbzAudioManager.ins["playBGM"](ENUM_CLIP["GAME_BGM"]), this["inTime"] = Date["now"](), find("Canvas/MAIN/Stage").active = !1, SOUtil["on"](gameMsg["backInHome"], this["onCominHomew"], this), GbzInstance.gameMgr.levelComp && (GbzInstance.gameMgr.levelComp.active = !1), n = this.btn_start.getChildByName("level").getChildByName("labLevel").getComponent(Label), Log(Nr + GbzDataManager.ins.fakeGame_level + Pr), Log("数据表第" + GbzDataManager.ins.game_level + Pr), n["string"] = GbzDataManager.ins.fakeGame_level["toString"](), this["checktt"](), GbzSdkManager.ins["ttcanluse"](this["btn_request"]), this.btn_start.getComponent(Button)["enabled"] = !0, this["themeTip"]();
        }, i["openAdvise"] = function () {}, i["themeTip"] = function () {
          var t;
          t = parseInt(sys["localStorage"]["getItem"]("isThemeTip")), this["btn_Theme"]["children"][0]["active"] = 1 == t;
        }, i["openTheme"] = function () {
          GbzAudioManager["ins"]["play"](ENUM_CLIP["GAME_CLICK"]), this["btn_Theme"]["children"][0]["active"] = !1, sys["localStorage"]["setItem"]("isThemeTip", 2);
        }, i["openFans"] = function () {
          GbzInstance["uiMgr"]["toggle"](ENUM_UI["LAYER_Fans"], !0);
        }, i["openTTCbl"] = function () {}, i["openTTADD"] = function () {}, i["openTTRequest"] = function () {}, i["checktt"] = function () {
          GbzSdkManager["ins"]["ttcheckScene"](this["btn_cbl"]);
        }, i["onDisable"] = function () {
          GbzSdkManager["ins"]["hideGameClubButton"](), SOUtil["off"](gameMsg["backInHome"], this["onCominHomew"], this);
        }, i["onDestroy"] = function () {
          this["btn_start"].off("click", this["onStart"], this), this["btn_setting"].off("click", this["onSetting"], this), this["btn_Theme"].off("click", this["openTheme"], this), this["btn_request"].off("click", this["openTTRequest"], this), this["btn_advise"].off("click", this["openAdvise"], this), this["btn_fans"].off("click", this["openFans"], this), this["btn_fruitBook"].off("click", this["openFruitBook"], this), this["btn_Service"].off("click", this["openWXService"], this), this["btn_rank"].off("click", this["openRankLayer"], this);
        }, i["start"] = function () {}, i["onStart"] = function () {
          var t;
          return t = asyncToGenerator(Nu().mark(function t() {
            var n, r, i, e, a;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return r = (n = to)[5], i = n[8], e = n[3][8], a = n[4][11], this[n[7][86]][n[10][0]](Button)[r[19]] = !1, GbzAudioManager[n[1][0]][n[2][10]](ENUM_CLIP[i[6]]), t.next = 5, GbzInstance[r[64]][n[0][28]]();
                case 5:
                  GbzInstance[e][a](ENUM_UI[i[22]], !1), GbzInstance[e][a](ENUM_UI[i[15]]), GbzInstance[r[6]][n[9][49]]();
                case 8:
                case "end":
                  return t.stop();
              }
            }, t, this);
          })), function () {
            var n;
            return n = arguments, t["apply"](this, n);
          };
        }(), i["onSetting"] = function () {
          GbzAudioManager["ins"]["play"](ENUM_CLIP["GAME_CLICK"]), GbzInstance["uiMgr"]["toggle"](ENUM_UI["LAYER_SETTING"]);
        }, i["openShare"] = function () {
          GbzAudioManager.ins["play"](ENUM_CLIP["GAME_CLICK"]), GbzSdkManager.ins["platform"]() ? GbzSdkManager.ins["activeShare"]() : GbzToastManager.ins["show"]("仅支持小游戏平台", function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "gravity", 0), Pu(t, "bg_color", 0), (n = t).gravity = 0, n.bg_color = 0, n;
            }["apply"]())["gravity"] = "TOP", t["bg_color"] = color(102, 202, 28, 255), t;
          }["apply"]());
        }, i["onCominHomew"] = function () {
          this["inTime"] = Date["now"]();
        }, i["isClick"] = function () {
          var t;
          return (t = Date["now"]()) - this.inTime > 500 && (this.inTime = t, !0);
        }, e;
      }(GbzBaselayer)) || I), cclegacy._RF["pop"]();
    }, I;
  }["bind"](this)["apply"]();
});