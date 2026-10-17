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
      var n = to;
      r = t["cclegacy"], i = t["_decorator"], e = t["find"];
    }, function (t) {
      a = t["gameMsg"];
    }, function (t) {
      u = t["default"];
    }, function (t) {
      s = t["default"];
    }, function (t) {
      o = t["default"];
    }, function (t) {
      c = t["default"];
    }, function (t) {
      f = t["default"];
    }, function (t) {
      var n = to;
      h = t["ENUM_CLIP"], v = t["ENUM_UI"];
    }, function (t) {
      l = t["default"];
    }], d["execute"] = function () {
      var b,
        d,
        k = to,
        m = k[5],
        p = "_RF",
        g = "GbzSettingLayer";
      r["_RF"]["push"]({}, "e03cc5PeeZMUav4h4jw9/Zo", "GbzSettingLayer", void 0), b = i["ccclass"], i["property"], t("default", b("GbzSettingLayer")(d = function (t) {
        var r,
          i,
          l = to,
          b = l[7],
          d = l[4],
          k = l[5];
        return n(i = function () {
          for (var n, r, i = to, e = i[4], a = i[3], u = i[7], s = i[9], o = (n = arguments)["length"], c = new Array(o), f = 0; f < o; f++) c[f] = n[f];
          return (r = t["call"]["apply"](t, [this]["concat"](c)) || this)["panel"] = null, r["btn_music"] = null, r["btn_sound"] = null, r["btn_vibrate"] = null, r["btn_close"] = null, r["btn_zhuxiao"] = null, r;
        }, t), (r = i["prototype"])["onLoad"] = function () {
          var t = to,
            n = t[7],
            r = t[15],
            i = t[5],
            a = t[17],
            u = t[3],
            s = t[9],
            o = "panel",
            c = "node",
            f = "btn_music",
            h = "on",
            v = "click",
            l = "btn_sound",
            b = "btn_vibrate",
            d = "btn_close",
            k = "onClose",
            m = "btn_zhuxiao";
          this["panel"] = e("style/panel", this["node"]), this["btn_music"] = e("buttons/btn_music", this["panel"]), this["btn_music"]["on"]("click", this["onMusic"], this), this["btn_sound"] = e("buttons/btn_sound", this["panel"]), this["btn_sound"]["on"]("click", this["onSound"], this), this["btn_vibrate"] = e("buttons/btn_vibrate", this["panel"]), this["btn_vibrate"]["on"]("click", this["onVibrate"], this), this["btn_close"] = e("btn_close", this["panel"]), this["btn_close"]["on"]("click", this["onClose"], this), this["btn_zhuxiao"] = e("buttons/btn_zhuxiao", this["panel"]), this["btn_zhuxiao"]["on"]("click", this["onZhuxiao"], this), e("bgshade", this["node"])["on"]("click", this["onClose"], this);
        }, r["onDestroy"] = function () {
          var t = to,
            n = t[7],
            r = t[5],
            i = "off",
            a = "click",
            u = "onClose";
          this["btn_music"]["off"]("click", this["onMusic"], this), this["btn_sound"]["off"]("click", this["onSound"], this), this["btn_close"]["off"]("click", this["onClose"], this), e("bgshade", this["node"])["off"]("click", this["onClose"], this);
        }, r["onEnable"] = function () {
          var t = to,
            n = "ins";
          this["rendor"](), c["ins"]["showInter"](), c["ins"]["hideGameClubButton"]();
        }, r["onDisable"] = function () {
          var t = to;
          c["ins"]["showGameClubButton"](), f["emit"](a["backInHome"]);
        }, r["rendor"] = function () {
          var t = to,
            n = t[7],
            r = t[1],
            i = t[8],
            e = "btn_music",
            a = "getChildByName",
            u = "on",
            o = "active",
            c = "ins",
            f = "game_music",
            h = "off",
            v = "btn_sound",
            l = "game_sound",
            b = "btn_vibrate",
            d = "game_vibrate";
          this["btn_music"]["getChildByName"]("on")["active"] = s["ins"]["game_music"], this["btn_music"]["getChildByName"]("off")["active"] = !s["ins"]["game_music"], this["btn_sound"]["getChildByName"]("on")["active"] = s["ins"]["game_sound"], this["btn_sound"]["getChildByName"]("off")["active"] = !s["ins"]["game_sound"], this["btn_vibrate"]["getChildByName"]("on")["active"] = s["ins"]["game_vibrate"], this["btn_vibrate"]["getChildByName"]("off")["active"] = !s["ins"]["game_vibrate"];
        }, r["onClose"] = function () {
          var t = to,
            n = t[8],
            r = "uiMgr",
            i = "toggle";
          u["ins"]["play"](h["GAME_CLICK"]), o["uiMgr"]["toggle"](v["LAYER_SETTING"], !1), o["uiMgr"]["toggle"](v["LAYER_MENU"]);
        }, r["onSound"] = function () {
          var t = to,
            n = "ins",
            r = "game_sound";
          u["ins"]["play"](h["GAME_CLICK"]), s["ins"]["game_sound"] = !s["ins"]["game_sound"], s["ins"]["store"](), this["rendor"]();
        }, r["onVibrate"] = function () {
          var t = to,
            n = "ins",
            r = "game_vibrate";
          u["ins"]["play"](h["GAME_CLICK"]), s["ins"]["game_vibrate"] = !s["ins"]["game_vibrate"], s["ins"]["store"](), this["rendor"]();
        }, r["onMusic"] = function () {
          var t = to,
            n = t[8],
            r = t[3],
            i = "ins",
            e = "game_music",
            a = "playBGM";
          u["ins"]["play"](h["GAME_CLICK"]), s["ins"]["game_music"] = !s["ins"]["game_music"], s["ins"]["store"](), s["ins"]["game_music"] ? o["uiMgr"]["hasActive"](v["LAYER_MAIN"]) ? u["ins"]["playBGM"](h["GAME_PLAYBGM"]) : u["ins"]["playBGM"](h["GAME_BGM"]) : u["ins"]["stopBGM"](), this["rendor"]();
        }, r["onZhuxiao"] = function () {
          var t = to,
            n = t[8],
            r = "ins",
            i = "uiMgr",
            e = "toggle";
          u["ins"]["play"](h["GAME_CLICK"]), o["uiMgr"]["toggle"](v["LAYER_SETTING"], !1), o["uiMgr"]["toggle"](v["LAYER_MENU"]), c["ins"]["platform"]()["platformNotAgree"]();
        }, r["onShowYinsi"] = function () {
          var t = to;
          u["ins"]["play"](h["GAME_CLICK"]);
        }, i;
      }(l)) || d), r["_RF"]["pop"]();
    }, d;
  }["bind"](this)["apply"]();
});