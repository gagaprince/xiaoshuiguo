(function (t) {
  var inheritsLoose, asyncToGenerator, cclegacy, _decorator, find, Label, Button, tween, math, color, GbzAudioManager, GbzDataManager, GbzInstance, GbzSdkManager, GbzToastManager, reporter, GameMgr, ENUM_STATUS, ENUM_UI, ENUM_CLIP, GbzBaselayer, WxIAAMgr, Log;
  return function () {
    var S, A;
    return Pu(S = {}, "setters", 0), Pu(S, "execute", 0), (A = S).setters = [function (t) {
      inheritsLoose = t["inheritsLoose"], asyncToGenerator = t["asyncToGenerator"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], find = t["find"], Label = t["Label"], Button = t["Button"], tween = t["tween"], math = t["math"], color = t["color"];
    }, function (t) {
      GbzAudioManager = t["default"];
    }, function (t) {
      GbzDataManager = t["default"];
    }, function (t) {
      GbzInstance = t["default"];
    }, function (t) {
      GbzSdkManager = t["default"];
    }, function (t) {
      GbzToastManager = t["default"];
    }, function (t) {
      reporter = t["reporter"];
    }, function (t) {
      GameMgr = t["default"];
    }, function (t) {
      ENUM_STATUS = t["ENUM_STATUS"], ENUM_UI = t["ENUM_UI"], ENUM_CLIP = t["ENUM_CLIP"];
    }, function (t) {
      GbzBaselayer = t["default"];
    }, function (t) {
      WxIAAMgr = t["default"];
    }, function (t) {
      Log = t["Log"];
    }], A.execute = function () {
      var S, A;
      cclegacy._RF["push"]({}, "453102MJiZGvpbon5n4Q3/F", "GbzLoseFullLayer", void 0), S = _decorator["ccclass"], _decorator["property"], t("default", S("GbzLoseFullLayer")(A = function (t) {
        var i, e;
        return inheritsLoose(e = function () {
          for (var n, r, s = (n = arguments)["length"], o = new Array(s), c = 0; c < s; c++) o[c] = n[c];
          return (r = t["call"]["apply"](t, [this]["concat"](o)) || this)["panel"] = null, r["lose_panel"] = null, r["btn_restart"] = null, r["btn_back"] = null, r["btn_close"] = null, r["btnShare"] = null, r["labNum"] = void 0, r["labChallenge"] = void 0, r;
        }, t), (i = e["prototype"])["onLoad"] = function () {
          this.panel = find("style/panel", this.node), this.lose_panel = find("style/lose_panel", this.node), find("btn_close2", this.panel).on("click", this["onClose"], this), this.btn_restart = find("btn_restart", this.lose_panel), this.btn_restart.on("click", this["onRestart"], this), this.btn_back = find("btn_back", this.lose_panel), this.btn_back.on("click", this["onBackHome"], this), this.labNum = this.panel.getChildByName("labInfos").getChildByName("labNum").getComponent(Label), this["labChallenge"] = this.lose_panel.getChildByName("labs").getChildByName("challengeCount").getComponent(Label), this.btnShare = find("btnShare", this.lose_panel), this.btnShare.on("click", this["onShare"], this);
        }, i["onDestroy"] = function () {
          this["btn_restart"].off("click", this["onRestart"], this), this["btn_back"].off("click", this["onBackHome"], this);
        }, i["onEnable"] = function () {
          var t;
          GbzDataManager["ins"]["status"] = ENUM_STATUS["UNRUN"], this["labNum"]["string"] = GameMgr.instance["fruitRemnantNum"]["toString"](), this["btn_restart"]["getComponent"](Button)["enabled"] = !0, (t = this["node"]["getChildByName"]("img")) && t["destroy"](), this["panel"].active = !0, this["lose_panel"].active = !1, GameMgr.instance["reliveCount"] > 0 ? (GbzInstance.uiMgr.toggle(ENUM_UI["LAYER_LOSE_FULL"], !1), GbzInstance.uiMgr.toggle(ENUM_UI["GbzResurgenceLayer"], !0)) : this["onClose"]();
        }, i["panelTween"] = function (t) {
          for (var a = 0; a < t.children["length"]; a++) {
            var u, s;
            (u = t.children[a])["setScale"](0, 0, 0), Log(u["scale"]), s = .2 * a, tween(u)["delay"](s)["to"](.5, function () {
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
            }.apply())["call"](function () {})["start"]();
          }
        }, i["losePanelTween"] = function () {
          for (var n = this, r = function () {
              var e = n["panel"]["children"][i];
              e["setScale"](0, 0, 0);
              var a = .2 * i;
              n["scheduleOnce"](function () {
                tween(e)["to"](.5, function () {
                  var r = function () {
                    var n = Pu({}, "scale", 0);
                    return n.scale = 0, n;
                  }["apply"]();
                  return r["scale"] = math["v3"](1, 1, 1), r;
                }.apply(), function () {
                  var n = function () {
                    var n = Pu({}, "easing", 0);
                    return n.easing = 0, n;
                  }["apply"]();
                  return n["easing"] = "backOut", n;
                }.apply())["start"]();
              }, a);
            }, i = 1; i < this["lose_panel"]["children"]["length"]; i++) r();
        }, i["onDisable"] = function () {
          this["btn_back"].scale = math.v3(0, 0, 0), this["btn_restart"].scale = math.v3(0, 0, 0);
        }, i["onRestart"] = function () {
          var t;
          return t = asyncToGenerator(Nu().mark(function t() {
            var n, r, i;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return r = (n = to)[9], i = n[5], GbzAudioManager[n[1][0]][n[2][10]](ENUM_CLIP[n[8][6]]), this[r[44]][n[10][0]](Button)[i[19]] = !1, t.next = 5, GbzInstance[i[64]][n[0][28]]();
                case 5:
                  GbzInstance[n[3][8]][n[4][11]](ENUM_UI[n[13][11]], !1), GbzInstance[i[6]][r[49]]();
                case 7:
                case "end":
                  return t.stop();
              }
            }, t, this);
          })), function () {
            var n;
            return n = arguments, t["apply"](this, n);
          };
        }(), i["onClose"] = function () {
          var t;
          WxIAAMgr["inst"]["Level_Lose"](GbzDataManager.ins["fakeGame_level"], GameMgr.instance["getPr"]()), GbzAudioManager.ins.play(ENUM_CLIP["GAME_LOSE"]), this["panelTween"](this.lose_panel), GbzDataManager.ins.challengeCount++, this["labChallenge"]["string"] = GbzDataManager.ins.challengeCount["toString"](), GbzDataManager.ins["store"](), this["panel"].active = !1, this["shadow"](this.lose_panel), this.lose_panel.active = !0, GbzAudioManager.ins.play(ENUM_CLIP["GAME_CLICK"]), t = Math["floor"](100 * GameMgr.instance["fillImg"]["fillRange"]), reporter["reportGameLose"](t), GbzDataManager.ins["uploadLocalToServer"]();
        }, i["onBackHome"] = function () {
          GbzAudioManager.ins["play"](ENUM_CLIP["GAME_CLICK"]), GbzDataManager.ins["status"] = ENUM_STATUS["UNRUN"], GbzInstance.uiMgr.toggle(ENUM_UI["LAYER_MAIN"], !1), GbzInstance.uiMgr.toggle(ENUM_UI["LAYER_LOSE_FULL"], !1), GbzInstance.uiMgr.toggle(ENUM_UI["LAYER_MENU"]);
        }, i["onShare"] = function () {
          GbzAudioManager.ins["play"](ENUM_CLIP["GAME_CLICK"]), GbzSdkManager.ins["platform"]() ? GbzSdkManager.ins["activeShare"]() : GbzToastManager.ins["show"]("仅支持小游戏平台", function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "gravity", 0), Pu(t, "bg_color", 0), (n = t).gravity = 0, n.bg_color = 0, n;
            }["apply"]())["gravity"] = "TOP", t["bg_color"] = color(102, 202, 28, 255), t;
          }["apply"]());
        }, e;
      }(GbzBaselayer)) || A), cclegacy._RF["pop"]();
    }, A;
  }["bind"](this)["apply"]();
});