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
    }], d["execute"] = function () {
      var b,
        d,
        k,
        m = to,
        p = m[5],
        g = "_RF",
        y = "GbzTTAddtableLayer";
      r["_RF"]["push"]({}, "72816oqm65Nk612deOWBd6+", "GbzTTAddtableLayer", void 0), b = i["ccclass"], i["property"], t("default", b("GbzTTAddtableLayer")(((k = function (t) {
        var r,
          i,
          l = to,
          b = l[5];
        return n(i = function () {
          for (var n, r, i = to, e = i[4], a = (n = arguments)["length"], u = new Array(a), s = 0; s < a; s++) u[s] = n[s];
          return (r = t["call"]["apply"](t, [this]["concat"](u)) || this)["btnClose"] = null, r["img"] = null, r;
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
          t = this["node"]["getChildByName"]("style")["getChildByName"]("panel")["getChildByName"]("bg"), i["btnIn"] = t["getChildByName"]("btnIn"), this["img"] = t["getChildByName"]("img"), this["btnClose"] = t["getChildByName"]("btnClose"), this["btnClose"]["on"]("click", this["onClose"], this), i["btnIn"]["on"]("click", this["onBtnIn"], this);
        }, r["onEnable"] = function () {
          var t = to,
            n = ro,
            r = t[2],
            o = t[1],
            v = t[4],
            l = t[3],
            b = 255,
            d = "ins",
            k = "img",
            m = "getComponent",
            p = "spriteFrame",
            g = "getRes",
            y = "Sprite",
            w = "secondary",
            _ = "btnIn",
            M = "opacity",
            S = "color";
          this["shadow"](this["node"]), s["ins"]["onGetTTShortcutRwd"] ? (this["img"]["getComponent"](e)["spriteFrame"] = c["ins"]["getRes"](f["Sprite"], "secondary", "已领取"), i["btnIn"]["opacity"] = 150, i["btnIn"]["color"] = a(0, 0, 0), i["btnIn"]["off"]("click", this["onBtnIn"], this), i["btnIn"]["getComponent"](u)["interactable"] = !1) : (this["img"]["getComponent"](e)["spriteFrame"] = c["ins"]["getRes"](f["Sprite"], "secondary", "添加桌面"), h["ins"]["checkShortcut"](this["img"]), i["btnIn"]["opacity"] = 255, i["btnIn"]["color"] = a(255, 255, 255));
        }, r["start"] = function () {}, r["onBtnIn"] = function () {
          var t = to,
            n = t[9],
            r = t[1],
            e = "uiMgr",
            a = "toggle";
          i["isOnAdd"] ? (o["uiMgr"]["toggle"](v["LAYER_ShowGetRew"], !0), o["uiMgr"]["toggle"](v["LAYER_TTADD"], !1)) : h["ins"]["addShortcut"](this["img"]);
        }, r["onClose"] = function () {
          var t = to;
          o["uiMgr"]["toggle"](v["LAYER_TTADD"], !1);
        }, i;
      }(l))["btnIn"] = null, k["isOnAdd"] = !1, d = k)) || d), r["_RF"]["pop"]();
    }, d;
  }["bind"](this)["apply"]();
});