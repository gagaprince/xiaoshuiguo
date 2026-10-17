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
        y = "GbzTTRequestLayer";
      r["_RF"]["push"]({}, "e4a90zCL7NLYL5+0IubBWYJ", "GbzTTRequestLayer", void 0), b = i["ccclass"], i["property"], t("default", b("GbzTTRequestLayer")(((k = function (t) {
        var r,
          i,
          l = to,
          b = l[5];
        return n(i = function () {
          for (var n, r, i = to, e = i[4], a = i[3], u = (n = arguments)["length"], s = new Array(u), o = 0; o < u; o++) s[o] = n[o];
          return (r = t["call"]["apply"](t, [this]["concat"](s)) || this)["btnClose"] = null, r["btnIn"] = null, r["img"] = null, r;
        }, t), (r = i["prototype"])["onLoad"] = function () {
          var t,
            n = to,
            r = n[3],
            i = n[5],
            e = "getChildByName",
            a = "btnIn",
            u = "img",
            s = "btnClose",
            o = "on",
            c = "click";
          t = this["node"]["getChildByName"]("style")["getChildByName"]("panel")["getChildByName"]("bg"), this["btnIn"] = t["getChildByName"]("btnIn"), this["img"] = t["getChildByName"]("img"), this["btnClose"] = t["getChildByName"]("btnClose"), this["btnClose"]["on"]("click", this["onClose"], this), this["btnIn"]["on"]("click", this["onBtnIn"], this);
        }, r["onEnable"] = function () {
          var t = to,
            n = ro,
            r = t[1],
            i = t[4],
            o = t[3],
            v = 255,
            l = "ins",
            b = "img",
            d = "getComponent",
            k = "spriteFrame",
            m = "getRes",
            p = "Sprite",
            g = "secondary",
            y = "btnIn",
            w = "opacity",
            _ = "color";
          this["shadow"](this["node"]), s["ins"]["onGetTTRequestcutRwd"] ? (this["img"]["getComponent"](e)["spriteFrame"] = c["ins"]["getRes"](f["Sprite"], "secondary", "已领取"), this["btnIn"]["opacity"] = 150, this["btnIn"]["color"] = a(0, 0, 0), this["btnIn"]["off"]("click", this["onBtnIn"], this), this["btnIn"]["getComponent"](u)["interactable"] = !1) : (this["img"]["getComponent"](e)["spriteFrame"] = c["ins"]["getRes"](f["Sprite"], "secondary", "去订阅"), h["ins"]["ttcheckFeedSubscribeStatus"](this["img"]), this["btnIn"]["opacity"] = 255, this["btnIn"]["color"] = a(255, 255, 255));
        }, r["start"] = function () {}, r["onBtnIn"] = function () {
          var t = to,
            n = t[1],
            r = "uiMgr",
            e = "toggle";
          i["isOnRequest"] ? (o["uiMgr"]["toggle"](v["LAYER_ShowGetRew"], !0), o["uiMgr"]["toggle"](v["LAYER_REQUEST"], !1)) : h["ins"]["ttrequestFeedSubscribe"](this["img"]);
        }, r["onClose"] = function () {
          var t = to;
          o["uiMgr"]["toggle"](v["LAYER_REQUEST"], !1);
        }, i;
      }(l))["isOnRequest"] = !1, d = k)) || d), r["_RF"]["pop"]();
    }, d;
  }["bind"](this)["apply"]();
});