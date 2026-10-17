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
    k = to;
  return function () {
    var k,
      m,
      p = to[5],
      g = "setters",
      y = "execute";
    return Pu(k = {}, "setters", 0), Pu(k, "execute", 0), (m = k)["setters"] = [function (t) {
      n = t["inheritsLoose"];
    }, function (t) {
      var n = to,
        h = n[2],
        v = n[9];
      r = t["cclegacy"], i = t["_decorator"], e = t["Node"], a = t["assetManager"], u = t["SpriteFrame"], s = t["Texture2D"], o = t["Sprite"], c = t["UITransform"], f = t["math"];
    }, null, function (t) {
      h = t["default"];
    }, function (t) {
      v = t["default"];
    }, function (t) {
      l = t["ENUM_UI"];
    }, function (t) {
      b = t["default"];
    }, function (t) {
      d = t["globalxz"];
    }], m["execute"] = function () {
      var k,
        m,
        p = to,
        g = p[5],
        y = "_RF",
        w = "GbzFansLayer";
      r["_RF"]["push"]({}, "adf6dj1TWpAlLArjFGnbJXf", "GbzFansLayer", void 0), k = i["ccclass"], i["property"], t("default", k("GbzFansLayer")(m = function (t) {
        var r,
          i,
          b = to,
          k = b[4];
        return n(i = function () {
          for (var n, r, i = to, e = i[4], a = i[3], u = (n = arguments)["length"], s = new Array(u), o = 0; o < u; o++) s[o] = n[o];
          return (r = t["call"]["apply"](t, [this]["concat"](s)) || this)["erwei"] = void 0, r["btnClose"] = void 0, r;
        }, t), (r = i["prototype"])["onLoad"] = function () {
          var t,
            n = to,
            r = n[3],
            i = n[0],
            a = "getChildByName",
            u = "btnClose",
            s = "on",
            o = "erwei";
          t = this["node"]["getChildByName"]("style")["getChildByName"]("panel")["getChildByName"]("bg"), this["btnClose"] = t["getChildByName"]("btnClose"), this["btnClose"]["on"]("click", this["onClose"], this), this["erwei"] = t["getChildByName"]("er"), this["loadQRCode"](), this["erwei"]["on"](e["EventType"]["TOUCH_START"], this["scande"], this);
        }, r["start"] = function () {}, r["scande"] = function () {
          var t = to;
          v["ins"]["scande"](d["fansqUrl"]);
        }, r["loadQRCode"] = function () {
          var t,
            n,
            r = to;
          t = this, n = d["fansqUrl"], a["loadRemote"](n, function (n, r) {
            var i,
              e,
              a,
              f = to,
              h = ro,
              v = f[3],
              l = 500,
              b = "erwei",
              d = "getComponent";
            n || (a = new u(), (i = new s())["image"] = r, a["texture"] = i, (e = t["erwei"]["getComponent"](o)) && (e["spriteFrame"] = a, t["erwei"]["getComponent"](c)["width"] = 500, t["erwei"]["getComponent"](c)["height"] = 500));
          });
        }, r["adjustQRCodeSize"] = function (t) {
          var n,
            r,
            i,
            e,
            a,
            u,
            s,
            o = to,
            h = o[9],
            v = o[3],
            l = "erwei",
            b = "width",
            d = "height";
          s = this["erwei"]["getComponent"](c)["contentSize"], a = (i = t["spriteFrame"]["texture"])["width"], u = i["height"], e = s["width"] / a, n = s["height"] / u, r = Math["min"](e, n), this["erwei"]["scale"] = f["v3"](r, r, r);
        }, r["onClose"] = function () {
          var t = to;
          h["uiMgr"]["toggle"](l["LAYER_Fans"], !1);
        }, i;
      }(b)) || m), r["_RF"]["pop"]();
    }, m;
  }["bind"](this)["apply"]();
});