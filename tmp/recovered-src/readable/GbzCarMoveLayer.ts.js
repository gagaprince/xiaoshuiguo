(function (t) {
  var inheritsLoose, cclegacy, _decorator, Label, tween, math, CityConfig, GbzAudioManager, GbzDataManager, GbzInstance, ENUM_CLIP, ENUM_UI, GbzBaselayer, Log;
  return function () {
    var d, k;
    return Pu(d = {}, "setters", 0), Pu(d, "execute", 0), (k = d).setters = [function (t) {
      inheritsLoose = t["inheritsLoose"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], Label = t["Label"], tween = t["tween"], math = t["math"];
    }, function (t) {
      CityConfig = t["default"];
    }, function (t) {
      GbzAudioManager = t["default"];
    }, function (t) {
      GbzDataManager = t["default"];
    }, function (t) {
      GbzInstance = t["default"];
    }, function (t) {
      ENUM_CLIP = t["ENUM_CLIP"], ENUM_UI = t["ENUM_UI"];
    }, function (t) {
      GbzBaselayer = t["default"];
    }, function (t) {
      Log = t["Log"];
    }], k.execute = function () {
      var d, k;
      cclegacy._RF["push"]({}, "4a3a4GyhVdCTJtcJ+yZHpTy", "GbzCarMoveLayer", void 0), d = _decorator["ccclass"], _decorator["property"], t("default", d("GbzCarMoveLayer")(k = function (t) {
        var r, i;
        return inheritsLoose(i = function () {
          for (var n, r, s = (n = arguments)["length"], o = new Array(s), c = 0; c < s; c++) o[c] = n[c];
          return (r = t["call"]["apply"](t, [this]["concat"](o)) || this)["aniPanel"] = null, r["shanNode"] = null, r["caoNode"] = null, r["carNode"] = null, r["lv"] = null, r["startPoint"] = null, r["endPoint"] = null, r["inited"] = !1, r;
        }, t), (r = i["prototype"])["onLoad"] = function () {
          this["initCom"]();
        }, r["initCom"] = function () {
          this.inited || (this.inited = !0, this["shanNode"] = this.node.getChildByName("shan"), this.caoNode = this.node.getChildByName("cao"), this["carNode"] = this.node.getChildByName("car"), this.lv = this.caoNode.getChildByName("zhanpai").getChildByName("lv")["getComponent"](Label), this["startPoint"] = this.node.getChildByName("carStart"), this["endPoint"] = this.node.getChildByName("carEnd"));
        }, r["onEnable"] = function () {
          this["losePanelTween"]();
        }, r["onDisable"] = function () {}, r["losePanelTween"] = function () {
          this["initCom"](), Log(GbzDataManager.ins.fakeGame_level), this["lv"]["string"] = CityConfig["getCurCityName"](GbzDataManager.ins.fakeGame_level - 1);
          for (var C = 0; C < this.shanNode.children.length; C++) {
            var x, T;
            (T = this.shanNode.children[C]).setScale(0, 0, 0), x = .2 * C, tween(T).delay(x).to(.5, function () {
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
            }.apply()).call(function () {}).start();
          }
          for (var L = 0; L < this.caoNode.children.length; L++) {
            var I, R;
            (I = this.caoNode.children[L]).setScale(0, 0, 0), R = .2 * L, tween(I).delay(R).to(.5, function () {
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
            }.apply()).call(function () {}).start();
          }
          this.carNode.x = this["startPoint"]["position"].x, this["scheduleOnce"](function () {
            GbzAudioManager["ins"]["play"](ENUM_CLIP["GAME_CAR"]);
          }, 1), tween(this.carNode).delay(1).to(2, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, At, 0)).x = 0, t;
            }["apply"]()).x = this["endPoint"]["position"].x, t;
          }["bind"](this).apply()).call(function () {
            GbzInstance.uiMgr.toggle(ENUM_UI["CarMoveLayer"], !1), GbzInstance.uiMgr.toggle(ENUM_UI["LAYER_MAIN"], !1), GbzInstance["gameMgr"]["onGameStart"]();
          }).start();
        }, i;
      }(GbzBaselayer)) || k), cclegacy._RF["pop"]();
    }, k;
  }["bind"](this)["apply"]();
});