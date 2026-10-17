(function (t) {
  var n,
    r,
    i,
    e,
    a,
    u,
    s,
    o,
    c,
    f,
    h,
    v,
    l,
    b,
    d,
    k,
    m,
    p = to;
  return function () {
    var p,
      g,
      y = to[5],
      w = "setters",
      _ = "execute";
    return Pu(p = {}, "setters", 0), Pu(p, "execute", 0), (g = p)["setters"] = [function (t) {
      n = t["inheritsLoose"];
    }, function (t) {
      var n = to,
        o = n[2];
      r = t["cclegacy"], i = t["_decorator"], e = t["find"], a = t["UIOpacity"], u = t["tween"], s = t["math"];
    }, function (t) {
      o = t["default"];
    }, function (t) {
      c = t["default"];
    }, function (t) {
      f = t["default"];
    }, function (t) {
      h = t["default"];
    }, function (t) {
      v = t["default"];
    }, function (t) {
      l = t["default"];
    }, function (t) {
      var n = to;
      b = t["ENUM_CLIP"], d = t["ENUM_GAME_STATE"], k = t["ENUM_UI"], m = t["ENUM_STATUS"];
    }], g["execute"] = function () {
      var p,
        g,
        y = to,
        w = "_RF",
        _ = "GbzGetItemLayer";
      r["_RF"]["push"]({}, "d967aFPMNhB3rcoIZERodNW", "GbzGetItemLayer", void 0), p = i["ccclass"], i["property"], t("GbzGetItemLayer", p("GbzGetItemLayer")(g = function (t) {
        var r,
          i,
          o = to,
          p = o[2];
        return n(i = function () {
          for (var n, r, i = to, e = i[4], a = i[3], u = i[7], s = (n = arguments)["length"], o = new Array(s), c = 0; c < s; c++) o[c] = n[c];
          return (r = t["call"]["apply"](t, [this]["concat"](o)) || this)["panel_"] = void 0, r["btnClose"] = void 0, r["propIcons"] = [], r["titleNodes"] = [], r["propInfos"] = [], r["videobtn_get"] = void 0, r["bg"] = void 0, r["type_"] = 0, r["_gbzMainLayer"] = void 0, r;
        }, t), (r = i["prototype"])["onLoad"] = function () {
          var t = to,
            n = t[9],
            r = t[10],
            i = t[5],
            a = t[7],
            u = "panel_",
            s = "node",
            o = "btnClose",
            c = "propIcons",
            f = "titleNodes",
            h = "propInfos",
            v = "videobtn_get",
            l = "on",
            b = "click";
          this["panel_"] = e("style/panel", this["node"]), this["btnClose"] = e("bg/btnClose", this["panel_"]), this["propIcons"][0] = e("bg/propIcon0", this["panel_"]), this["propIcons"][1] = e("bg/propIcon1", this["panel_"]), this["titleNodes"][0] = e("bg/titleLa0", this["panel_"]), this["titleNodes"][1] = e("bg/titleLa1", this["panel_"]), this["propInfos"][0] = e("bg/propInfo0", this["panel_"]), this["propInfos"][1] = e("bg/propInfo1", this["panel_"]), this["videobtn_get"] = e("bg/videobtn_get", this["panel_"]), this["btnClose"]["on"]("click", this["onClose"], this), this["videobtn_get"]["on"]("click", this["videoClick"], this), this["bg"] = e("bgshade", this["node"]);
        }, r["onEnable"] = function () {
          var t = to;
          this["zoom"](this["panel_"]);
        }, r["show"] = function (n) {
          var r = to,
            i = r[2],
            e = r[11],
            a = r[7],
            u = "type_",
            s = "titleNodes",
            o = "propIcons",
            c = "active",
            f = "propInfos";
          t["prototype"]["show"]["call"](this, n), this["type_"] = n["index"], this["_gbzMainLayer"] = n["_GbzMainLayer"];
          for (var h = 0; h < this["titleNodes"]["length"]; h++) this["propIcons"][h] && (this["propIcons"][h]["active"] = !1), this["titleNodes"][h]["active"] = !1, this["propInfos"][h]["active"] = !1;
          switch (this["type_"]) {
            case 0:
              this["propIcons"][0]["active"] = !0, this["titleNodes"][0]["active"] = !0, this["propInfos"][0]["active"] = !0;
              break;
            case 1:
              this["propIcons"][1]["active"] = !0, this["titleNodes"][1]["active"] = !0, this["propInfos"][1]["active"] = !0;
          }
        }, r["videoClick"] = function () {
          var t,
            n = to,
            r = n[2],
            i = "ins";
          t = this, c["ins"]["play"](b["GAME_CLICK"]), v["ins"]["showVideo"](function () {
            var n = to,
              r = n[4],
              i = n[7],
              e = n[3],
              a = "instance",
              u = "node",
              s = "gameMgr",
              o = "ins",
              c = "status",
              v = "UNRUN",
              b = "itemADCounts",
              p = "_gbzMainLayer",
              g = "refreshSkillBtn";
            if (l["instance"] && l["instance"]["node"] && l["instance"]["node"]["active"] && h["gameMgr"]["gameState"] == d["isPlaying"]) switch (h["uiMgr"]["toggle"](k["GbzGetItemLayer"], !1), t["type_"]) {
              case 0:
                f["ins"]["status"] = m["UNRUN"], h["gameMgr"]["itemADCounts"][0]--, t["_gbzMainLayer"]["refreshSkillBtn"](), l["instance"]["btnRemoveFun"](1, function () {
                  var t = to,
                    n = "ins";
                  f["ins"]["status"] = m["RUN"], l["instance"]["startViewTime"](), f["ins"]["skillIndex"] = -1;
                });
                break;
              case 1:
                f["ins"]["status"] = m["UNRUN"], h["gameMgr"]["itemADCounts"][1]--, t["_gbzMainLayer"]["refreshSkillBtn"](), l["instance"]["btnDisturbFun"](function () {
                  var t = to,
                    n = "ins";
                  f["ins"]["status"] = m["RUN"], l["instance"]["startViewTime"](), f["ins"]["skillIndex"] = -1;
                });
            }
          }, function (t) {}, "特殊道具", this, !0);
        }, r["onClose"] = function () {
          var t = to;
          c["ins"]["play"](b["GAME_CLICK"]), h["uiMgr"]["toggle"](k["GbzGetItemLayer"], !1), l["instance"]["startViewTime"]();
        }, r["zoom"] = function (t, n) {
          var r,
            i,
            e,
            o,
            c = to,
            f = c[10],
            h = c[0],
            v = c[3],
            l = c[2],
            b = "setScale",
            d = "bg",
            k = "to",
            m = "apply",
            p = "start",
            g = "then",
            y = "call";
          (r = this, void 0 === n && (n = !0), n) ? (t["setScale"](0, 0, 0), (i = this["bg"]["getComponent"](a) || this["bg"]["addComponent"](a))["opacity"] = 0, u(i)["to"](.3, function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "opacity";
              return (t = Pu({}, "opacity", 0))["opacity"] = 0, t;
            }["apply"]())["opacity"] = 200, t;
          }["apply"]())["start"](), e = u(t)["to"](.2, function () {
            var t,
              n = to,
              r = n[3];
            return (t = function () {
              var t,
                n = "scale";
              return (t = Pu({}, "scale", 0))["scale"] = 0, t;
            }["apply"]())["scale"] = s["v3"](1, 1, 1), t;
          }["apply"](), function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "easing";
              return (t = Pu({}, "easing", 0))["easing"] = 0, t;
            }["apply"]())["easing"] = "backOut", t;
          }["apply"]()), u(t)["then"](e)["call"](function () {
            var t = "zoomCallback";
            r["zoomCallback"] && r["zoomCallback"]();
          })["start"]()) : (t["setScale"](1, 1, 1), o = u(t)["to"](.2, function () {
            var t,
              n = to,
              r = n[3];
            return (t = function () {
              var t,
                n = "scale";
              return (t = Pu({}, "scale", 0))["scale"] = 0, t;
            }["apply"]())["scale"] = s["v3"](0, 0, 0), t;
          }["apply"](), function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "easing";
              return (t = Pu({}, "easing", 0))["easing"] = 0, t;
            }["apply"]())["easing"] = "backOut", t;
          }["apply"]()), u(t)["then"](o)["call"](function () {
            var t = "zoomCallback";
            r["zoomCallback"] && r["zoomCallback"]();
          })["start"]());
        }, i;
      }(o)) || g), r["_RF"]["pop"]();
    }, g;
  }["bind"](this)["apply"]();
});