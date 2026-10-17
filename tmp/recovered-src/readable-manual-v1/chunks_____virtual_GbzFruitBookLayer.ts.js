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
      var a = to;
      n = t["applyDecoratedDescriptor"], r = t["inheritsLoose"], i = t["initializerDefineProperty"], e = t["assertThisInitialized"];
    }, function (t) {
      var n = to;
      a = t["cclegacy"], u = t["_decorator"], s = t["find"], o = t["Label"];
    }, function (t) {
      c = t["default"];
    }, function (t) {
      f = t["default"];
    }, function (t) {
      h = t["default"];
    }, function (t) {
      v = t["default"];
    }, function (t) {
      var n = to;
      l = t["ENUM_CLIP"], b = t["ENUM_UI"];
    }, function (t) {
      d = t["default"];
    }, function (t) {
      k = t["default"];
    }], p["execute"] = function () {
      var m,
        p,
        g,
        y,
        w,
        _,
        M,
        S,
        A = to,
        C = A[2],
        x = A[5],
        T = A[6],
        L = "_RF",
        I = "GbzFruitBookLayer";
      a["_RF"]["push"]({}, "0c5bbRGoUZPKoZmi32gUXh2", "GbzFruitBookLayer", void 0), g = u["ccclass"], p = u["property"], t("default", (y = g("GbzFruitBookLayer"), w = p(v), y((S = n((M = function (t) {
        var n,
          a,
          u = to,
          d = u[7],
          m = u[4];
        return r(a = function () {
          for (var n, r, a = to, u = ro, s = a[4], o = a[2], c = a[3], f = a[8], h = a[6], v = a[7], l = (n = arguments)["length"], b = new Array(l), d = 0; d < l; d++) b[d] = n[d];
          return r = t["call"]["apply"](t, [this]["concat"](b)) || this, i(r, "list", S, e(r)), r["once"] = !0, r["lastPaintIndex"] = 0, r["panel"] = null, r["content"] = null, r["btnBgshade"] = void 0, r["curLevel"] = 0, r["lastLevel"] = 0, r["btn_Close"] = null, r["allNum"] = 175, r["levelLable"] = null, r["allLable"] = null, r["targetNode"] = void 0, r;
        }, t), (n = a["prototype"])["onLoad"] = function () {
          var t,
            n = to,
            r = n[3],
            i = n[2],
            e = "panel",
            a = "node",
            u = "list",
            c = "getChildByName",
            f = "getComponent",
            h = "allLable",
            l = "btn_Close",
            b = "btnBgshade",
            d = "on",
            k = "click",
            m = "onClose";
          this["panel"] = s("style/panel", this["node"]), this["list"] = this["panel"]["getChildByName"]("list")["getComponent"](v), t = this["panel"]["getChildByName"]("layoutPro"), this["levelLable"] = t["getChildByName"]("level")["getComponent"](o), this["allLable"] = t["getChildByName"]("allLable")["getComponent"](o), this["panel"]["getChildByName"]("viewPort"), this["btn_Close"] = this["panel"]["getChildByName"]("btn_Close"), this["btnBgshade"] = this["node"]["getChildByName"]("btnBgshade"), this["btnBgshade"]["on"]("click", this["onClose"], this), this["btn_Close"]["on"]("click", this["onClose"], this);
        }, n["onEnable"] = function () {
          var t,
            n = to,
            r = ro,
            i = n[6],
            e = n[8],
            a = 175,
            u = "ins",
            s = "curLevel",
            o = "string";
          k["ins"]["hideGameClubButton"](), this["curLevel"] = f["ins"]["game_level"], (t = this["curLevel"] - 1) >= 175 && (t = 175), this["levelLable"]["string"] = t["toString"](), this["allLable"]["string"] = Et + this["allNum"];
        }, n["onDisable"] = function () {
          var t = to,
            n = "ins",
            r = "fruitBookLastLevel",
            i = "game_level";
          f["ins"]["fruitBookLastLevel"] = f["ins"]["game_level"], f["ins"]["store"](), this["targetNode"]["active"] = f["ins"]["fruitBookLastLevel"] < f["ins"]["game_level"];
        }, n["onClose"] = function () {
          var t = to,
            n = "ins";
          c["ins"]["play"](l["GAME_CLICK"]), h["uiMgr"]["toggle"](b["FruitBookLayer"], !1), k["ins"]["showGameClubButton"]();
        }, n["show"] = function (n) {
          var r = to,
            i = r[2],
            e = r[4],
            a = "once",
            u = "allNum",
            s = "push",
            o = "list",
            c = "reset",
            f = "length";
          if (t["prototype"]["show"]["call"](this, n), this["targetNode"] = n, this["node"]["active"] = !0, this["once"]) {
            this["once"] = !1;
            for (var h = [], v = 0; v < this["allNum"]; v++) h["push"](v);
            this["list"]["setDataList"](h), this["list"]["reset"](h["length"], h);
          } else {
            for (var l = [], b = 0; b < this["allNum"]; b++) l["push"](b);
            this["list"]["reset"](l["length"], l);
          }
        }, n["onDestroy"] = function () {
          var t = to,
            n = "off",
            r = "click",
            i = "onClose";
          this["btn_Close"]["off"]("click", this["onClose"], this), this["btnBgshade"]["off"]("click", this["onClose"], this);
        }, n["update"] = function (t) {}, a;
      }(d))["prototype"], "list", [w], (Pu(m = {}, "configurable", !0), Pu(m, "enumerable", !0), Pu(m, "writable", !0), Pu(m, "initializer", function () {
        return null;
      }), m)), _ = M)) || _)), a["_RF"]["pop"]();
    }, p;
  }["bind"](this)["apply"]();
});