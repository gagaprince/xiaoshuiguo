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
      var i = to;
      n = t["inheritsLoose"], r = t["asyncToGenerator"];
    }, function (t) {
      var n = to;
      i = t["cclegacy"], e = t["_decorator"], a = t["find"];
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
      v = t["ENUM_CLIP"], l = t["ENUM_STATUS"], b = t["ENUM_UI"];
    }, function (t) {
      d = t["default"];
    }, function (t) {
      k = t["default"];
    }], p["execute"] = function () {
      var m,
        p,
        g = to,
        y = g[5],
        w = "_RF",
        _ = "GbzExitLayer";
      i["_RF"]["push"]({}, "0253cfZpsZMxrm9b6MPXhSY", "GbzExitLayer", void 0), m = e["ccclass"], e["property"], t("default", m("GbzExitLayer")(p = function (t) {
        var i,
          e,
          d = to,
          m = d[7],
          p = d[4],
          g = d[6],
          y = d[5];
        return n(e = function () {
          for (var n, r, i = to, e = i[4], a = i[3], u = i[7], s = (n = arguments)["length"], o = new Array(s), c = 0; c < s; c++) o[c] = n[c];
          return (r = t["call"]["apply"](t, [this]["concat"](o)) || this)["panel"] = null, r["btn_submit"] = null, r["btn_music"] = null, r["btn_sound"] = null, r["btn_vibrate"] = null, r["btn_close"] = null, r["btn_share"] = null, r;
        }, t), (i = e["prototype"])["onLoad"] = function () {
          var t = to,
            n = t[17],
            r = t[15],
            i = t[5],
            e = t[3],
            u = t[7],
            s = "panel",
            o = "node",
            c = "btn_submit",
            f = "on",
            h = "click",
            v = "btn_music",
            l = "btn_sound",
            b = "btn_vibrate",
            d = "btn_close",
            k = "onClose";
          this["panel"] = a("style/panel", this["node"]), this["btn_submit"] = a("buttons2/btn_submit", this["panel"]), this["btn_submit"]["on"]("click", this["onSubmit"], this), this["btn_music"] = a("buttons/btn_music", this["panel"]), this["btn_music"]["on"]("click", this["onMusic"], this), this["btn_sound"] = a("buttons/btn_sound", this["panel"]), this["btn_sound"]["on"]("click", this["onSound"], this), this["btn_vibrate"] = a("buttons/btn_vibrate", this["panel"]), this["btn_vibrate"]["on"]("click", this["onVibrate"], this), this["btn_close"] = a("btn_close", this["panel"]), this["btn_close"]["on"]("click", this["onClose"], this), a("bgshade", this["node"])["on"]("click", this["onClose"], this);
        }, i["onDestroy"] = function () {
          var t = to,
            n = t[7],
            r = t[5],
            i = "off",
            e = "click",
            u = "onClose";
          this["btn_submit"]["off"]("click", this["onSubmit"], this), this["btn_close"]["off"]("click", this["onClose"], this), this["btn_share"]["off"]("click", this["onShare"], this), a("bgshade", this["node"])["off"]("click", this["onClose"], this);
        }, i["onEnable"] = function () {
          var t = to,
            n = t[4],
            r = t[6];
          this["shadow"](this["panel"]), this["rendor"](), h["instance"]["stopGame"]();
        }, i["onDisable"] = function () {
          var t = to;
          h["instance"]["resumGame"]();
        }, i["rendor"] = function () {
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
        }, i["onSubmit"] = function () {
          var t,
            n = to,
            r = n[3],
            i = n[2],
            e = n[8],
            a = n[12],
            c = "instance",
            d = "ins",
            m = "uiMgr",
            p = "toggle";
          t = Math["floor"](100 * h["instance"]["fillImg"]["fillRange"]), k["inst"]["Level_Exit"](s["ins"]["fakeGame_level"], h["instance"]["getPr"]()), f["reportGameLose"](t), u["ins"]["play"](v["GAME_CLICK"]), s["ins"]["status"] = l["UNRUN"], o["uiMgr"]["toggle"](b["LAYER_MAIN"], !1), o["uiMgr"]["toggle"](b["LAYER_EXIT"], !1), o["uiMgr"]["toggle"](b["LAYER_MENU"]);
        }, i["onClose"] = function () {
          var t = to,
            n = t[8];
          u["ins"]["play"](v["GAME_CLICK"]), o["uiMgr"]["toggle"](b["LAYER_EXIT"], !1);
        }, i["onShare"] = function () {
          var t = to,
            n = "ins";
          u["ins"]["play"](v["GAME_CLICK"]), c["ins"]["platform"]() && c["ins"]["activeShare"]();
        }, i["onSound"] = function () {
          var t = to,
            n = "ins",
            r = "game_sound";
          u["ins"]["play"](v["GAME_CLICK"]), s["ins"]["game_sound"] = !s["ins"]["game_sound"], s["ins"]["store"](), this["rendor"]();
        }, i["onVibrate"] = function () {
          var t = to,
            n = "ins",
            r = "game_vibrate";
          u["ins"]["play"](v["GAME_CLICK"]), s["ins"]["game_vibrate"] = !s["ins"]["game_vibrate"], s["ins"]["store"](), this["rendor"]();
        }, i["onMusic"] = function () {
          var t = to,
            n = t[8],
            r = t[3],
            i = "ins",
            e = "game_music",
            a = "playBGM";
          u["ins"]["play"](v["GAME_CLICK"]), s["ins"]["game_music"] = !s["ins"]["game_music"], s["ins"]["store"](), s["ins"]["game_music"] ? o["uiMgr"]["hasActive"](b["LAYER_MAIN"]) ? u["ins"]["playBGM"](v["GAME_PLAYBGM"]) : u["ins"]["playBGM"](v["GAME_BGM"]) : u["ins"]["stopBGM"](), this["rendor"]();
        }, i["onRestart"] = function () {
          var t;
          return t = r(Nu().mark(function t() {
            var n, r, i, e, a, c, l, d, m;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return r = (n = to)[2], i = n[8], e = n[3], a = n[5], c = n[12], l = n[1][0], d = n[6][0], u[l][r[10]](v[i[6]]), m = Math[e[3]](100 * h[d][a[27]][n[7][47]]), f[c[43]](m), o[e[8]][n[4][11]](b[i[57]], !1), t.next = 7, o[a[64]][n[0][28]]();
                case 7:
                  o[a[6]][a[173]](), k[r[4]][i[120]](s[l][c[1]], h[d][e[94]]());
                case 9:
                case "end":
                  return t.stop();
              }
            }, t);
          })), function () {
            var n;
            return n = arguments, t["apply"](this, n);
          };
        }(), e;
      }(d)) || p), i["_RF"]["pop"]();
    }, p;
  }["bind"](this)["apply"]();
});