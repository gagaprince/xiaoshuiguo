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
    h = to;
  return function () {
    var h,
      v,
      l = to[5],
      b = "setters",
      d = "execute";
    return Pu(h = {}, "setters", 0), Pu(h, "execute", 0), (v = h)["setters"] = [function (t) {
      n = t["inheritsLoose"];
    }, function (t) {
      var n = to,
        f = n[8],
        h = n[2];
      r = t["cclegacy"], i = t["_decorator"], e = t["ScrollView"], a = t["UITransform"], u = t["Node"], s = t["Widget"], o = t["math"], c = t["warn"];
    }, function (t) {
      f = t["default"];
    }], v["execute"] = function () {
      var h,
        v,
        l,
        b = to,
        d = b[5],
        k = "_RF",
        m = "GridLayerListView";
      r["_RF"]["push"]({}, "9d992VDm1FECo27GTxJW4Cj", "GridLayerListView", void 0), h = i["ccclass"], i["property"], v = i["requireComponent"], t("default", h("GridLayerListView")(l = v(e)(l = function (t) {
        var r,
          i,
          e = to,
          f = e[6],
          h = e[14];
        return n(i = function () {
          for (var n, r, i = to, e = i[4], a = i[2], u = (n = arguments)["length"], s = new Array(u), o = 0; o < u; o++) s[o] = n[o];
          return (r = t["call"]["apply"](t, [this]["concat"](s)) || this)["contents"] = [], r["root"] = null, r;
        }, t), (r = i["prototype"])["init"] = function () {
          var t = to;
          this["initParam"](), this["initContent"](), this["addItems"]();
        }, r["setLayer"] = function (t, n) {
          var r = to,
            i = r[5],
            e = "getComponent",
            u = "width",
            s = "height",
            o = "anchorX",
            c = "anchorY";
          t["getComponent"](a)["width"] = n["getComponent"](a)["width"], t["getComponent"](a)["height"] = n["getComponent"](a)["height"], t["getComponent"](a)["anchorX"] = n["getComponent"](a)["anchorX"], t["getComponent"](a)["anchorY"] = n["getComponent"](a)["anchorY"];
        }, r["initContent"] = function () {
          var t,
            n = to,
            r = n[5],
            i = n[6],
            e = n[2],
            s = n[10],
            o = "contents",
            c = "length",
            f = "children",
            h = "name",
            v = "getComponent",
            l = "addComponent",
            b = "setLayer",
            d = "root",
            k = "addChild";
          if (t = this["content"], 0 == this["contents"]["length"]) {
            var m, p, g;
            g = (m = this["getItem"]())["children"]["length"], (p = new u())["name"] = m["name"], p["getComponent"](a) || p["addComponent"](a), this["setLayer"](p, t), this["root"] = p, t["addChild"](p);
            for (var y = 0; y < g; y++) {
              var w;
              (w = new u())["name"] = m["children"][y]["name"], w["getComponent"](a) || w["addComponent"](a), this["setLayer"](w, t), t["addChild"](w), this["contents"][y] = w;
            }
            this["putItem"](m);
          } else {
            var _;
            _ = this["root"], this["setLayer"](_, t);
            for (var M = 0; M < this["contents"]["length"]; M++) {
              var S;
              S = this["contents"][M], this["setLayer"](S, t);
            }
          }
        }, r["setItemPosition"] = function (t, n, r) {
          var i,
            e = to;
          if (t["setPosition"](n, r), i = t["list"]) for (var a = 0; a < i["length"]; a++) {
            var u, s;
            (s = (u = i[a])["initPos"]) && (u[At] = n + s[At], u[St] = r + s[St]);
          }
        }, r["setItemPositionX"] = function (t, n) {
          var r,
            i = to;
          if (t[At] = n, r = t["list"]) for (var e = 0; e < r["length"]; e++) {
            var a, u;
            (u = (a = r[e])["initPos"]) && (a[At] = n + u[At]);
          }
        }, r["setItemPositionY"] = function (t, n) {
          var r,
            i = to;
          if (t[St] = n, r = t["list"]) for (var e = 0; e < r["length"]; e++) {
            var a, u;
            (u = (a = r[e])["initPos"]) && (a[St] = n + u[St]);
          }
        }, r["setItemActive"] = function (t, n) {
          var r,
            i = to,
            e = "active";
          if (t["active"] = n, r = t["list"]) for (var a = 0; a < r["length"]; a++) r[a]["active"] = n;
        }, r["addChild"] = function (t) {
          var n = to,
            r = n[2],
            i = n[4],
            e = "parent",
            a = "children",
            u = "length",
            f = "list";
          if (t["parent"]) this["setItemActive"](t, !0);else {
            var h;
            if (h = t["children"]["length"], t["list"] = [], h > 0) for (var v = 0, l = t["children"]; l["length"] > 0;) {
              var b;
              if (!(b = l[0])) {
                c(" element is null ", v);
                break;
              }
              b["getComponent"](s) && b["removeComponent"](s), b["parent"] = this["contents"][v], b["initPos"] = o["v2"](b[At], b[St]), t["list"]["push"](b), v++;
            }
            t["parent"] = this["root"];
          }
        }, i;
      }(f)) || l) || l), r["_RF"]["pop"]();
    }, v;
  }["bind"](this)["apply"]();
});