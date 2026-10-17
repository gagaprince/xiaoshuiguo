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
    m = to;
  return function () {
    var m,
      p,
      g = to[5],
      y = "setters",
      w = "execute";
    return Pu(m = {}, "setters", 0), Pu(m, "execute", 0), (p = m)["setters"] = [function (t) {
      n = t["inheritsLoose"];
    }, function (t) {
      var n = to;
      r = t["cclegacy"], i = t["_decorator"], e = t["find"], a = t["Label"];
    }, function (t) {
      u = t["default"];
    }, function (t) {
      s = t["default"];
    }, function (t) {
      o = t["default"];
    }, function (t) {
      c = t["default"];
    }, function (t) {
      f = t["reporter"];
    }, function (t) {
      h = t["default"];
    }, function (t) {
      var n = to;
      v = t["ENUM_UI"], l = t["ENUM_CLIP"], b = t["ENUM_GAME_STATE"], d = t["ENUM_STATUS"];
    }, function (t) {
      k = t["default"];
    }], p["execute"] = function () {
      var m,
        p,
        g = to,
        y = "_RF",
        w = "GbzResurgenceLayer";
      r["_RF"]["push"]({}, "4ff01AYmhNCV5aw24pCz3Q8", "GbzResurgenceLayer", void 0), m = i["ccclass"], i["property"], t("GbzResurgenceLayer", m("GbzResurgenceLayer")(p = function (t) {
        var r,
          i,
          k = to,
          m = k[4],
          p = k[6];
        return n(i = function () {
          for (var n, r, i = to, e = i[4], a = i[3], u = (n = arguments)["length"], s = new Array(u), o = 0; o < u; o++) s[o] = n[o];
          return (r = t["call"]["apply"](t, [this]["concat"](s)) || this)["panel"] = null, r["btn_relive"] = null, r["btn_close"] = null, r["labNum"] = void 0, r;
        }, t), (r = i["prototype"])["onLoad"] = function () {
          var t,
            n = to,
            r = n[6],
            i = n[3],
            u = "panel",
            s = "getChildByName",
            o = "btn_relive",
            c = "on",
            f = "click",
            h = "labNum";
          this["panel"] = e("style/panel", this["node"]), t = this["panel"]["getChildByName"]("Bg"), this["btn_relive"] = t["getChildByName"]("btn_relive"), this["btn_relive"]["on"]("click", this["onRelive"], this), e("btn_close", t)["on"]("click", this["onClose"], this), this["labNum"] = t["getChildByName"]("labInfos")["getChildByName"]("labNum")["getComponent"](a);
        }, r["onClose"] = function () {
          var t = to,
            n = "uiMgr",
            r = "toggle";
          h["instance"]["reliveCount"] = 0, o["uiMgr"]["toggle"](v["LAYER_LOSE_FULL"], !0), o["uiMgr"]["toggle"](v["GbzResurgenceLayer"], !1);
        }, r["onEnable"] = function () {
          var t = to,
            n = t[4],
            r = t[6];
          this["labNum"]["string"] = h["instance"]["fruitRemnantNum"]["toString"]();
        }, r["update"] = function (t) {}, r["onRelive"] = function () {
          var t = to,
            n = t[7],
            r = "ins",
            i = "VideoType";
          u["ins"]["play"](l["GAME_CLICK"]), 1 === c["ins"]["VideoType"]() ? c["ins"]["showVideo"](function () {
            var t = to,
              n = t[7],
              r = t[4],
              i = t[9],
              e = "instance";
            o["gameMgr"]["gameState"] != b["isHome"] && (f["reportAdRwd"]("复活"), o["uiMgr"]["toggle"](v["GbzResurgenceLayer"], !1), h["instance"]["reliveCount"]--, h["instance"]["reviveFun"]());
          }, function (t) {}, "复活", this) : 2 === c["ins"]["VideoType"]() && (o["uiMgr"]["toggle"](v["GbzResurgenceLayer"], !1), this["scheduleOnce"](function () {
            var t = to,
              n = t[1];
            s["ins"]["status"] = d["RUN"];
          }, .1), h["instance"]["reviveFun"]());
        }, i;
      }(k)) || p), r["_RF"]["pop"]();
    }, p;
  }["bind"](this)["apply"]();
});