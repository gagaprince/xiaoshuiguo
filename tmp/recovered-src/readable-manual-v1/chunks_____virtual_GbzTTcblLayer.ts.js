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
    b = to;
  return function () {
    var b,
      d,
      k = to[5],
      m = "setters",
      p = "execute";
    return Pu(b = {}, "setters", 0), Pu(b, "execute", 0), (d = b)["setters"] = [function (t) {
      n = t["inheritsLoose"];
    }, function (t) {
      var n = to,
        s = n[4];
      r = t["cclegacy"], i = t["_decorator"], e = t["Sprite"], a = t["color"], u = t["Button"];
    }, function (t) {
      s = t["default"];
    }, function (t) {
      o = t["default"];
    }, function (t) {
      var n = to[5];
      c = t["default"], f = t["ResType"];
    }, function (t) {
      h = t["default"];
    }, function (t) {
      v = t["ENUM_UI"];
    }, function (t) {
      l = t["default"];
    }, null], d["execute"] = function () {
      var b,
        d,
        k,
        m = to,
        p = m[1],
        g = m[5],
        y = m[6],
        w = "_RF",
        _ = "GbzTTcblLayer";
      r["_RF"]["push"]({}, "15fef17wSlEuaIhCJ1iB0D9", "GbzTTcblLayer", void 0), b = i["ccclass"], i["property"], t("default", b("GbzTTcblLayer")(((k = function (t) {
        var r,
          i,
          l = to,
          b = l[7],
          d = l[5];
        return n(i = function () {
          for (var n, r, i = to, e = i[4], a = (n = arguments)["length"], u = new Array(a), s = 0; s < a; s++) u[s] = n[s];
          return (r = t["call"]["apply"](t, [this]["concat"](u)) || this)["btnClose"] = null, r;
        }, t), (r = i["prototype"])["onLoad"] = function () {
          var t,
            n = to,
            r = n[3],
            e = n[5],
            a = "getChildByName",
            u = "btnIn",
            s = "img",
            o = "btnClose",
            c = "on",
            f = "click";
          t = this["node"]["getChildByName"]("style")["getChildByName"]("panel")["getChildByName"]("bg"), i["btnIn"] = t["getChildByName"]("btnIn"), i["img"] = t["getChildByName"]("img"), this["btnClose"] = t["getChildByName"]("btnClose"), this["btnClose"]["on"]("click", this["onClose"], this), i["btnIn"]["on"]("click", this["onBtnIn"], this);
        }, r["onEnable"] = function () {
          var t = to,
            n = ro,
            r = t[4],
            o = t[1],
            v = t[3],
            l = 255,
            b = "ins",
            d = "getComponent",
            k = "btnIn",
            m = "opacity",
            p = "color";
          this["shadow"](this["node"]), s["ins"]["onGetTTSideBarRwd"] ? (i["img"]["getComponent"](e)["spriteFrame"] = c["ins"]["getRes"](f["Sprite"], "secondary", "已领取"), i["btnIn"]["opacity"] = 150, i["btnIn"]["color"] = a(0, 0, 0), i["btnIn"]["off"]("click", this["onBtnIn"], this), i["btnIn"]["getComponent"](u)["interactable"] = !1) : (i["btnIn"]["opacity"] = 255, i["btnIn"]["color"] = a(255, 255, 255), h["ins"]["onShow"]());
        }, r["start"] = function () {}, r["onBtnIn"] = function () {
          var t = to,
            n = "uiMgr",
            r = "toggle";
          i["isOnShow"] ? (o["uiMgr"]["toggle"](v["LAYER_ShowGetRew"], !0), o["uiMgr"]["toggle"](v["LAYER_TTCBL"], !1)) : h["ins"]["navigateToScene"]();
        }, i["changeImg"] = function (t) {
          var n = to,
            r = n[4],
            a = "ins",
            u = "getRes",
            s = "Sprite",
            o = "secondary";
          i["img"]["getComponent"](e)["spriteFrame"] = t ? c["ins"]["getRes"](f["Sprite"], "secondary", "获得奖励") : c["ins"]["getRes"](f["Sprite"], "secondary", "进入侧边栏");
        }, r["onClose"] = function () {
          var t = to;
          o["uiMgr"]["toggle"](v["LAYER_TTCBL"], !1);
        }, i;
      }(l))["btnIn"] = null, k["img"] = null, k["isOnShow"] = !1, d = k)) || d), r["_RF"]["pop"]();
    }, d;
  }["bind"](this)["apply"]();
});