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
    p,
    g,
    y = to;
  return function () {
    var y,
      w,
      _ = to[5],
      M = "setters",
      S = "execute";
    return Pu(y = {}, "setters", 0), Pu(y, "execute", 0), (w = y)["setters"] = [function (t) {
      n = t["inheritsLoose"];
    }, function (t) {
      var n = to,
        c = n[2],
        f = n[3];
      r = t["cclegacy"], i = t["_decorator"], e = t["find"], a = t["Label"], u = t["UIOpacity"], s = t["tween"], o = t["math"];
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
    }, function (t) {
      p = t["default"];
    }, function (t) {
      g = t["Log"];
    }], w["execute"] = function () {
      var y,
        w,
        _ = to,
        M = _[5],
        S = "_RF",
        A = "GbzPropSpecialLayer";
      r["_RF"]["push"]({}, "ec8b0A5Y65HabydgRKe8uoD", "GbzPropSpecialLayer", void 0), y = i["ccclass"], i["property"], t("default", y("GbzPropSpecialLayer")(w = function (t) {
        var r,
          i,
          p = to,
          y = p[2];
        return n(i = function () {
          for (var n, r, i = to, e = i[4], a = i[3], u = (n = arguments)["length"], s = new Array(u), o = 0; o < u; o++) s[o] = n[o];
          return (r = t["call"]["apply"](t, [this]["concat"](s)) || this)["panel_"] = void 0, r["btnClose"] = void 0, r["propIcons"] = [], r["titleNodes"] = [], r["videobtn_get"] = void 0, r["dirLa"] = void 0, r["bg"] = void 0, r["type_"] = 0, r;
        }, t), (r = i["prototype"])["onLoad"] = function () {
          var t = to,
            n = t[9],
            r = t[10],
            i = t[5],
            u = t[0],
            s = "panel_",
            o = "node",
            c = "btnClose",
            f = "propIcons",
            h = "titleNodes",
            v = "videobtn_get",
            l = "on",
            b = "click",
            d = "bg";
          this["panel_"] = e("style/panel", this["node"]), this["btnClose"] = e("bg/btnClose", this["panel_"]), this["propIcons"][0] = e("bg/propIcon0", this["panel_"]), this["propIcons"][1] = e("bg/propIcon1", this["panel_"]), this["titleNodes"][0] = e("bg/titleLa0", this["panel_"]), this["titleNodes"][1] = e("bg/titleLa1", this["panel_"]), this["titleNodes"][2] = e("bg/titleLa2", this["panel_"]), this["videobtn_get"] = e("bg/videobtn_get", this["panel_"]), this["dirLa"] = e("bg/dirLa", this["panel_"])["getComponent"](a), this["btnClose"]["on"]("click", this["onClose"], this), this["videobtn_get"]["on"]("click", this["videoClick"], this), this["bg"] = e("bgshade", this["node"]), g(this["bg"]);
        }, r["onEnable"] = function () {
          var t = to;
          this["zoom"](this["panel_"]);
        }, r["show"] = function (n) {
          var r = to,
            i = r[2],
            e = r[4],
            a = r[3],
            u = "type_",
            s = "titleNodes",
            o = "propIcons",
            c = "active",
            f = "dirLa",
            h = "string";
          t["prototype"]["show"]["call"](this, n), this["type_"] = n;
          for (var v = 0; v < this["titleNodes"]["length"]; v++) this["propIcons"][v] && (this["propIcons"][v]["active"] = !1), this["titleNodes"][v]["active"] = !1;
          switch (this["type_"]) {
            case 0:
              this["propIcons"][0]["active"] = !0, this["titleNodes"][0]["active"] = !0, this["dirLa"]["string"] = "解锁所有槽位";
              break;
            case 1:
              this["propIcons"][1]["active"] = !0, this["titleNodes"][1]["active"] = !0, this["dirLa"]["string"] = "消除多组水果";
              break;
            case 2:
              this["propIcons"][0]["active"] = !0, this["titleNodes"][2]["active"] = !0, this["dirLa"]["string"] = "解锁一个槽位";
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
              a = n[10],
              u = n[1],
              s = "instance",
              o = "node",
              c = "startViewTime",
              v = "ins",
              b = "status",
              p = "RUN";
            if (l["instance"] && l["instance"]["node"] && l["instance"]["node"]["active"] && h["gameMgr"]["gameState"] == d["isPlaying"]) switch (h["uiMgr"]["toggle"](k["LAYER_Prop_Special"], !1), t["type_"]) {
              case 0:
                l["instance"]["breakAllWall"](), l["instance"]["startViewTime"](), f["ins"]["status"] = m["RUN"];
                break;
              case 1:
                f["ins"]["status"] = m["UNRUN"], l["instance"]["btnRemoveFun"](6, function () {
                  var t = to,
                    n = t[1];
                  f["ins"]["status"] = m["RUN"], l["instance"]["startViewTime"]();
                });
                break;
              case 2:
                l["instance"]["breakSingleWall"](), l["instance"]["startViewTime"](), f["ins"]["status"] = m["RUN"];
            }
          }, function (t) {}, "特殊道具", this, !0);
        }, r["onClose"] = function () {
          var t = to;
          c["ins"]["play"](b["GAME_CLICK"]), h["uiMgr"]["toggle"](k["LAYER_Prop_Special"], !1), l["instance"]["startViewTime"]();
        }, r["zoom"] = function (t, n) {
          var r,
            i,
            e,
            a,
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
            y = "then",
            w = "call";
          (r = this, void 0 === n && (n = !0), n) ? (t["setScale"](0, 0, 0), g(this["bg"]), (e = this["bg"]["getComponent"](u) || this["bg"]["addComponent"](u))["opacity"] = 0, s(e)["to"](.3, function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "opacity";
              return (t = Pu({}, "opacity", 0))["opacity"] = 0, t;
            }["apply"]())["opacity"] = 200, t;
          }["apply"]())["start"](), i = s(t)["to"](.2, function () {
            var t,
              n = to,
              r = n[3];
            return (t = function () {
              var t,
                n = "scale";
              return (t = Pu({}, "scale", 0))["scale"] = 0, t;
            }["apply"]())["scale"] = o["v3"](1, 1, 1), t;
          }["apply"](), function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "easing";
              return (t = Pu({}, "easing", 0))["easing"] = 0, t;
            }["apply"]())["easing"] = "backOut", t;
          }["apply"]()), s(t)["then"](i)["call"](function () {
            var t = "zoomCallback";
            r["zoomCallback"] && r["zoomCallback"]();
          })["start"]()) : (t["setScale"](1, 1, 1), a = s(t)["to"](.2, function () {
            var t,
              n = to,
              r = n[3];
            return (t = function () {
              var t,
                n = "scale";
              return (t = Pu({}, "scale", 0))["scale"] = 0, t;
            }["apply"]())["scale"] = o["v3"](0, 0, 0), t;
          }["apply"](), function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "easing";
              return (t = Pu({}, "easing", 0))["easing"] = 0, t;
            }["apply"]())["easing"] = "backOut", t;
          }["apply"]()), s(t)["then"](a)["call"](function () {
            var t = "zoomCallback";
            r["zoomCallback"] && r["zoomCallback"]();
          })["start"]());
        }, i;
      }(p)) || w), r["_RF"]["pop"]();
    }, w;
  }["bind"](this)["apply"]();
});