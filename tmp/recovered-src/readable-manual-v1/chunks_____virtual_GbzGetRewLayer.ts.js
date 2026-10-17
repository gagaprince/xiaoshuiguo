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
      var n = to;
      v = t["ENUM_CLIP"], l = t["ENUM_UI"];
    }, function (t) {
      b = t["default"];
    }, function (t) {
      d = t["default"];
    }, function (t) {
      k = t["default"];
    }, function (t) {
      m = t["default"];
    }, null], g["execute"] = function () {
      var p,
        g,
        y = to,
        w = y[5],
        _ = "_RF",
        M = "GbzGetRewLayer";
      r["_RF"]["push"]({}, "86443jbBh1HRrRCVgHLxLg+", "GbzGetRewLayer", void 0), p = i["ccclass"], i["property"], t("default", p("GbzGetRewLayer")(g = function (t) {
        var r,
          i,
          b = to,
          p = b[7];
        return n(i = function () {
          for (var n, r, i = to, e = i[4], a = i[3], u = (n = arguments)["length"], s = new Array(u), o = 0; o < u; o++) s[o] = n[o];
          return (r = t["call"]["apply"](t, [this]["concat"](s)) || this)["panel"] = null, r["btn_get"] = null, r;
        }, t), (r = i["prototype"])["onLoad"] = function () {
          var t = to,
            n = t[3],
            r = "panel",
            i = "btn_get";
          this["panel"] = e("style/panel", this["node"]), this["btn_get"] = e("btn_get", this["panel"]), this["btn_get"]["on"]("click", this["onGet"], this);
        }, r["onEnable"] = function () {
          var t = to;
          this["shadow"](this["panel"]);
        }, r["onDestroy"] = function () {
          var t = to,
            n = t[3];
          this["btn_get"]["off"]("click", this["onGet"], this);
        }, r["onGet"] = function () {
          var t,
            n,
            r = to,
            i = r[2],
            e = r[8],
            b = r[4],
            p = r[5],
            g = r[6],
            y = r[9],
            w = r[10],
            _ = r[3],
            M = "ins",
            S = "uiMgr",
            A = "onGetTTShortcutRwd",
            C = "addProp",
            x = "onGetTTSideBarRwd",
            T = "onGetTTRequestcutRwd",
            L = "to",
            I = "apply";
          o["ins"]["play"](v["GAME_CLICK"]), f["uiMgr"]["toggle"](l["LAYER_ShowGetRew"], !1), d["isOnAdd"] && !c["ins"]["onGetTTShortcutRwd"] && (c["ins"]["onGetTTShortcutRwd"] = !0, c["ins"]["addProp"](0, 2)), k["isOnShow"] && !c["ins"]["onGetTTSideBarRwd"] && (c["ins"]["onGetTTSideBarRwd"] = !0, c["ins"]["addProp"](0, 2)), m["isOnRequest"] && !c["ins"]["onGetTTRequestcutRwd"] && (c["ins"]["onGetTTRequestcutRwd"] = !0, c["ins"]["addProp"](0, 2)), (n = h["ins"]["getNode"]("getItemTip"))["parent"] = f["uiMgr"]["getLayer"](l["LAYER_MENU"])["node"], t = n["getComponent"](a) || n["addComponent"](a), n["setPosition"](0, 0), u(n)["parallel"](u(n)["to"](1, function () {
            var t,
              r = to;
            return (t = function () {
              var t,
                n = "position";
              return (t = Pu({}, "position", 0))["position"] = 0, t;
            }["apply"]())["position"] = new s["Vec3"](0, n[St] + 100, 0), t;
          }["apply"]()), u(t)["to"](1, function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "opacity";
              return (t = Pu({}, "opacity", 0))["opacity"] = 0, t;
            }["apply"]())["opacity"] = 100, t;
          }["apply"]()))["call"](function () {
            n["destroy"]();
          })["start"]();
        }, i;
      }(b)) || g), r["_RF"]["pop"]();
    }, g;
  }["bind"](this)["apply"]();
});