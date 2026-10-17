(function (t) {
  var inheritsLoose, cclegacy, _decorator, find, UIOpacity, tween, math, GbzBaselayer, GbzAudioManager, GbzDataManager, GbzInstance, GbzSdkManager, GameMgr, ENUM_CLIP, ENUM_GAME_STATE, ENUM_UI, ENUM_STATUS;
  return function () {
    var p, g;
    return Pu(p = {}, "setters", 0), Pu(p, "execute", 0), (g = p).setters = [function (t) {
      inheritsLoose = t["inheritsLoose"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], find = t["find"], UIOpacity = t["UIOpacity"], tween = t["tween"], math = t["math"];
    }, function (t) {
      GbzBaselayer = t["default"];
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
    }], g.execute = function () {
      var p, g;
      cclegacy._RF["push"]({}, "d967aFPMNhB3rcoIZERodNW", "GbzGetItemLayer", void 0), p = _decorator["ccclass"], _decorator["property"], t("GbzGetItemLayer", p("GbzGetItemLayer")(g = function (t) {
        var r, i;
        return inheritsLoose(i = function () {
          for (var n, r, s = (n = arguments)["length"], o = new Array(s), c = 0; c < s; c++) o[c] = n[c];
          return (r = t["call"]["apply"](t, [this]["concat"](o)) || this)["panel_"] = void 0, r["btnClose"] = void 0, r["propIcons"] = [], r["titleNodes"] = [], r["propInfos"] = [], r["videobtn_get"] = void 0, r["bg"] = void 0, r["type_"] = 0, r["_gbzMainLayer"] = void 0, r;
        }, t), (r = i["prototype"])["onLoad"] = function () {
          this.panel_ = find("style/panel", this.node), this.btnClose = find("bg/btnClose", this.panel_), this.propIcons[0] = find("bg/propIcon0", this.panel_), this.propIcons[1] = find("bg/propIcon1", this.panel_), this.titleNodes[0] = find("bg/titleLa0", this.panel_), this.titleNodes[1] = find("bg/titleLa1", this.panel_), this.propInfos[0] = find("bg/propInfo0", this.panel_), this.propInfos[1] = find("bg/propInfo1", this.panel_), this.videobtn_get = find("bg/videobtn_get", this.panel_), this.btnClose.on("click", this["onClose"], this), this.videobtn_get.on("click", this["videoClick"], this), this["bg"] = find("bgshade", this.node);
        }, r["onEnable"] = function () {
          this["zoom"](this["panel_"]);
        }, r["show"] = function (n) {
          t["prototype"]["show"]["call"](this, n), this.type_ = n["index"], this["_gbzMainLayer"] = n["_GbzMainLayer"];
          for (var h = 0; h < this.titleNodes["length"]; h++) this.propIcons[h] && (this.propIcons[h].active = !1), this.titleNodes[h].active = !1, this.propInfos[h].active = !1;
          switch (this.type_) {
            case 0:
              this.propIcons[0].active = !0, this.titleNodes[0].active = !0, this.propInfos[0].active = !0;
              break;
            case 1:
              this.propIcons[1].active = !0, this.titleNodes[1].active = !0, this.propInfos[1].active = !0;
          }
        }, r["videoClick"] = function () {
          var t;
          t = this, GbzAudioManager.ins["play"](ENUM_CLIP["GAME_CLICK"]), GbzSdkManager.ins["showVideo"](function () {
            if (GameMgr.instance && GameMgr.instance.node && GameMgr.instance.node["active"] && GbzInstance.gameMgr["gameState"] == ENUM_GAME_STATE["isPlaying"]) switch (GbzInstance["uiMgr"]["toggle"](ENUM_UI["GbzGetItemLayer"], !1), t["type_"]) {
              case 0:
                GbzDataManager.ins.status = ENUM_STATUS.UNRUN, GbzInstance.gameMgr.itemADCounts[0]--, t._gbzMainLayer.refreshSkillBtn(), GameMgr.instance["btnRemoveFun"](1, function () {
                  GbzDataManager.ins["status"] = ENUM_STATUS["RUN"], GameMgr["instance"]["startViewTime"](), GbzDataManager.ins["skillIndex"] = -1;
                });
                break;
              case 1:
                GbzDataManager.ins.status = ENUM_STATUS.UNRUN, GbzInstance.gameMgr.itemADCounts[1]--, t._gbzMainLayer.refreshSkillBtn(), GameMgr.instance["btnDisturbFun"](function () {
                  GbzDataManager.ins["status"] = ENUM_STATUS["RUN"], GameMgr["instance"]["startViewTime"](), GbzDataManager.ins["skillIndex"] = -1;
                });
            }
          }, function (t) {}, "特殊道具", this, !0);
        }, r["onClose"] = function () {
          GbzAudioManager["ins"]["play"](ENUM_CLIP["GAME_CLICK"]), GbzInstance["uiMgr"]["toggle"](ENUM_UI["GbzGetItemLayer"], !1), GameMgr["instance"]["startViewTime"]();
        }, r["zoom"] = function (t, n) {
          var r, i, e, o;
          (r = this, void 0 === n && (n = !0), n) ? (t.setScale(0, 0, 0), (i = this.bg["getComponent"](UIOpacity) || this.bg["addComponent"](UIOpacity))["opacity"] = 0, tween(i).to(.3, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "opacity", 0)).opacity = 0, t;
            }["apply"]())["opacity"] = 200, t;
          }.apply()).start(), e = tween(t).to(.2, function () {
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
          }.apply()), tween(t).then(e).call(function () {
            r.zoomCallback && r.zoomCallback();
          }).start()) : (t.setScale(1, 1, 1), o = tween(t).to(.2, function () {
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
          }.apply()), tween(t).then(o).call(function () {
            r.zoomCallback && r.zoomCallback();
          }).start());
        }, i;
      }(GbzBaselayer)) || g), cclegacy._RF["pop"]();
    }, g;
  }["bind"](this)["apply"]();
});