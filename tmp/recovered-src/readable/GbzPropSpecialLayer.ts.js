(function (t) {
  var inheritsLoose, cclegacy, _decorator, find, Label, UIOpacity, tween, math, GbzAudioManager, GbzDataManager, GbzInstance, GbzSdkManager, GameMgr, ENUM_CLIP, ENUM_GAME_STATE, ENUM_UI, ENUM_STATUS, GbzBaselayer, Log;
  return function () {
    var y, w;
    return Pu(y = {}, "setters", 0), Pu(y, "execute", 0), (w = y).setters = [function (t) {
      inheritsLoose = t["inheritsLoose"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], find = t["find"], Label = t["Label"], UIOpacity = t["UIOpacity"], tween = t["tween"], math = t["math"];
    }, function (t) {
      GbzAudioManager = t["default"];
    }, function (t) {
      GbzDataManager = t["default"];
    }, function (t) {
      GbzInstance = t["default"];
    }, function (t) {
      GbzSdkManager = t["default"];
    }, function (t) {
      GameMgr = t["default"];
    }, function (t) {
      ENUM_CLIP = t["ENUM_CLIP"], ENUM_GAME_STATE = t["ENUM_GAME_STATE"], ENUM_UI = t["ENUM_UI"], ENUM_STATUS = t["ENUM_STATUS"];
    }, function (t) {
      GbzBaselayer = t["default"];
    }, function (t) {
      Log = t["Log"];
    }], w.execute = function () {
      var y, w;
      cclegacy._RF["push"]({}, "ec8b0A5Y65HabydgRKe8uoD", "GbzPropSpecialLayer", void 0), y = _decorator["ccclass"], _decorator["property"], t("default", y("GbzPropSpecialLayer")(w = function (t) {
        var r, i;
        return inheritsLoose(i = function () {
          for (var n, r, u = (n = arguments)["length"], s = new Array(u), o = 0; o < u; o++) s[o] = n[o];
          return (r = t["call"]["apply"](t, [this]["concat"](s)) || this)["panel_"] = void 0, r["btnClose"] = void 0, r["propIcons"] = [], r["titleNodes"] = [], r["videobtn_get"] = void 0, r["dirLa"] = void 0, r["bg"] = void 0, r["type_"] = 0, r;
        }, t), (r = i["prototype"])["onLoad"] = function () {
          this.panel_ = find("style/panel", this.node), this.btnClose = find("bg/btnClose", this.panel_), this.propIcons[0] = find("bg/propIcon0", this.panel_), this.propIcons[1] = find("bg/propIcon1", this.panel_), this.titleNodes[0] = find("bg/titleLa0", this.panel_), this.titleNodes[1] = find("bg/titleLa1", this.panel_), this.titleNodes[2] = find("bg/titleLa2", this.panel_), this.videobtn_get = find("bg/videobtn_get", this.panel_), this["dirLa"] = find("bg/dirLa", this.panel_)["getComponent"](Label), this.btnClose.on("click", this["onClose"], this), this.videobtn_get.on("click", this["videoClick"], this), this.bg = find("bgshade", this.node), Log(this.bg);
        }, r["onEnable"] = function () {
          this["zoom"](this["panel_"]);
        }, r["show"] = function (n) {
          t["prototype"]["show"]["call"](this, n), this.type_ = n;
          for (var v = 0; v < this.titleNodes["length"]; v++) this.propIcons[v] && (this.propIcons[v].active = !1), this.titleNodes[v].active = !1;
          switch (this.type_) {
            case 0:
              this.propIcons[0].active = !0, this.titleNodes[0].active = !0, this.dirLa.string = "解锁所有槽位";
              break;
            case 1:
              this.propIcons[1].active = !0, this.titleNodes[1].active = !0, this.dirLa.string = "消除多组水果";
              break;
            case 2:
              this.propIcons[0].active = !0, this.titleNodes[2].active = !0, this.dirLa.string = "解锁一个槽位";
          }
        }, r["videoClick"] = function () {
          var t;
          t = this, GbzAudioManager.ins["play"](ENUM_CLIP["GAME_CLICK"]), GbzSdkManager.ins["showVideo"](function () {
            if (GameMgr.instance && GameMgr.instance.node && GameMgr.instance.node["active"] && GbzInstance["gameMgr"]["gameState"] == ENUM_GAME_STATE["isPlaying"]) switch (GbzInstance["uiMgr"]["toggle"](ENUM_UI["LAYER_Prop_Special"], !1), t["type_"]) {
              case 0:
                GameMgr.instance["breakAllWall"](), GameMgr.instance.startViewTime(), GbzDataManager.ins.status = ENUM_STATUS.RUN;
                break;
              case 1:
                GbzDataManager.ins.status = ENUM_STATUS["UNRUN"], GameMgr.instance["btnRemoveFun"](6, function () {
                  GbzDataManager["ins"]["status"] = ENUM_STATUS["RUN"], GameMgr["instance"]["startViewTime"]();
                });
                break;
              case 2:
                GameMgr.instance["breakSingleWall"](), GameMgr.instance.startViewTime(), GbzDataManager.ins.status = ENUM_STATUS.RUN;
            }
          }, function (t) {}, "特殊道具", this, !0);
        }, r["onClose"] = function () {
          GbzAudioManager["ins"]["play"](ENUM_CLIP["GAME_CLICK"]), GbzInstance["uiMgr"]["toggle"](ENUM_UI["LAYER_Prop_Special"], !1), GameMgr["instance"]["startViewTime"]();
        }, r["zoom"] = function (t, n) {
          var r, i, e, a;
          (r = this, void 0 === n && (n = !0), n) ? (t.setScale(0, 0, 0), Log(this.bg), (e = this.bg["getComponent"](UIOpacity) || this.bg["addComponent"](UIOpacity))["opacity"] = 0, tween(e).to(.3, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "opacity", 0)).opacity = 0, t;
            }["apply"]())["opacity"] = 200, t;
          }.apply()).start(), i = tween(t).to(.2, function () {
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
          }.apply()), tween(t).then(i).call(function () {
            r.zoomCallback && r.zoomCallback();
          }).start()) : (t.setScale(1, 1, 1), a = tween(t).to(.2, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "scale", 0)).scale = 0, t;
            }["apply"]())["scale"] = math["v3"](0, 0, 0), t;
          }.apply(), function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "easing", 0)).easing = 0, t;
            }["apply"]())["easing"] = "backOut", t;
          }.apply()), tween(t).then(a).call(function () {
            r.zoomCallback && r.zoomCallback();
          }).start());
        }, i;
      }(GbzBaselayer)) || w), cclegacy._RF["pop"]();
    }, w;
  }["bind"](this)["apply"]();
});