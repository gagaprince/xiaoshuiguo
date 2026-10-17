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
      var i = to;
      n = t["inheritsLoose"], r = t["asyncToGenerator"];
    }, function (t) {
      var n = to;
      i = t["cclegacy"], e = t["_decorator"], a = t["Component"];
    }, function (t) {
      var n = to;
      u = t["ENUM_UIReload"], s = t["ENUM_UI"], o = t["ENUM_RES_SECONDARY"];
    }, function (t) {
      c = t["gameMsg"];
    }, function (t) {
      f = t["default"];
    }, function (t) {
      h = t["default"];
    }, function (t) {
      v = t["default"];
    }, function (t) {
      l = t["default"];
    }, null], d["execute"] = function () {
      var b,
        d,
        k = to,
        m = k[5],
        p = "_RF";
      i["_RF"]["push"]({}, "67bf2VPib9B17El63LDib8u", "GbzUIManager", void 0), b = e["ccclass"], e["property"], t("default", b(d = function (t) {
        var i,
          e,
          a = to,
          b = a[7],
          d = a[4],
          k = a[10];
        return n(e = function () {
          for (var n, r, i = to, e = i[4], a = i[3], u = i[12], s = (n = arguments)["length"], o = new Array(s), c = 0; c < s; c++) o[c] = n[c];
          return (r = t["call"]["apply"](t, [this]["concat"](o)) || this)["uiMap"] = new Map(), r["isGameReloaded"] = !1, r["isHomeReloaded"] = !1, r["isAllReloaded"] = !1, r;
        }, t), (i = e["prototype"])["onLoad"] = function () {
          var t = to,
            n = t[12];
          this["isGameReloaded"] = !1, this["isHomeReloaded"] = !1, this["isAllReloaded"] = !1, f["on"](c["lStartLoadAllBackUI"], this["backAllLoad"], this), h["setUIMgr"](this);
        }, i["init"] = function () {
          var t = to,
            n = t[1],
            r = "uiMap",
            i = "getComponent";
          for (var e in u) {
            var a;
            (a = v["ins"]["getNode"](u[e], this["node"])) && !this["uiMap"]["has"](u[e]) && (a["active"] = !1, a["getComponent"](u[e]) || a["addComponent"](u[e]), this["uiMap"]["set"](u[e], a["getComponent"](u[e])));
          }
        }, i["backGameLoad"] = function () {
          var t;
          return t = r(Nu().mark(function t() {
            var n, r, i, e, a, u, c, f, h, b, d, k, m, p, g;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (r = (n = to)[4], i = n[1], e = n[2], a = n[8], u = n[12][49], c = n[1][0], f = n[3][39], h = n[10][0], this[u]) {
                    t.next = 13;
                    break;
                  }
                  this[u] = !0, d = [o[2], o[3]], k = 0;
                case 4:
                  if (!(k < d[r[0]])) {
                    t.next = 11;
                    break;
                  }
                  return m = d[k], t.next = 8, l[c][e[24]](m);
                case 8:
                  k++, t.next = 4;
                  break;
                case 11:
                  for (p in b = [s[a[57]], s[n[13][11]], s[n[16][15]], s[a[189]], s[n[7][70]]]) this[f][i[17]](b[p]) || (g = v[c][n[5][13]](b[p], this[e[0]])) && (g[r[2]] = !1, g[h](b[p]) || g[n[10][5]](b[p]), this[f][i[6]](b[p], g[h](b[p])));
                case 13:
                case "end":
                  return t.stop();
              }
            }, t, this);
          })), function () {
            var n;
            return n = arguments, t["apply"](this, n);
          };
        }(), i["backHomeLoad"] = function () {
          var t;
          return t = r(Nu().mark(function t() {
            var n, r, i, e, a, u, c, f, h, b, d, k, m, p, g, y, w;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (r = (n = to)[4], i = n[1], e = n[2], a = n[10], u = n[11], c = n[9], f = n[12][50], h = n[1][0], b = n[3][39], d = n[10][0], this[f]) {
                    t.next = 13;
                    break;
                  }
                  this[f] = !0, m = [o[0], o[1]], p = 0;
                case 4:
                  if (!(p < m[r[0]])) {
                    t.next = 11;
                    break;
                  }
                  return g = m[p], t.next = 8, l[h][e[24]](g);
                case 8:
                  p++, t.next = 4;
                  break;
                case 11:
                  for (y in k = [s[a[39]], s[n[8][88]], s[n[14][14]], s[u[43]], s[c[127]], s[c[128]], s[c[129]], s[u[85]]]) this[b][i[17]](k[y]) || (w = v[h][n[5][13]](k[y], this[e[0]])) && (w[r[2]] = !1, w[d](k[y]) || w[a[5]](k[y]), this[b][i[6]](k[y], w[d](k[y])));
                case 13:
                case "end":
                  return t.stop();
              }
            }, t, this);
          })), function () {
            var n;
            return n = arguments, t["apply"](this, n);
          };
        }(), i["backAllLoad"] = function () {
          var t;
          return t = r(Nu().mark(function t() {
            var n, r, i, e, a, u, c, f, h, b, d, k;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (r = (n = to)[4], i = n[1], e = n[2], a = n[11][58], u = n[1][0], c = n[3][39], f = n[10][0], this[a]) {
                    t.next = 12;
                    break;
                  }
                  h = 0;
                case 3:
                  if (!(h < o[r[0]])) {
                    t.next = 10;
                    break;
                  }
                  return b = o[h], t.next = 7, l[u][e[24]](b);
                case 7:
                  h++, t.next = 3;
                  break;
                case 10:
                  for (d in s) this[c][i[17]](s[d]) || (k = v[u][n[5][13]](s[d], this[e[0]])) && (k[r[2]] = !1, k[f](s[d]) || k[n[10][5]](s[d]), this[c][i[6]](s[d], k[f](s[d])));
                  this[a] = !0;
                case 12:
                case "end":
                  return t.stop();
              }
            }, t, this);
          })), function () {
            var n;
            return n = arguments, t["apply"](this, n);
          };
        }(), i["toggle"] = function (t, n, r, i) {
          var e,
            a = to,
            u = a[1],
            s = a[2],
            o = "uiMap";
          if (void 0 === n && (n = !0), this["uiMap"]["has"](t)) return e = this["uiMap"]["get"](t), n ? e["show"](i) : e["hide"](), r && r(), e;
        }, i["isShow"] = function (t) {
          var n = to,
            r = n[1],
            i = "uiMap";
          return !!this["uiMap"]["has"](t) && this["uiMap"]["get"](t)["node"]["active"];
        }, i["hasActive"] = function (t) {
          var n = to,
            r = n[1],
            i = "uiMap";
          return !!this["uiMap"]["has"](t) && this["uiMap"]["get"](t)["node"]["active"];
        }, i["getLayer"] = function (t) {
          var n,
            r = to;
          if (n = this["uiMap"]["get"](t)) return n;
        }, e;
      }(a)) || d), i["_RF"]["pop"]();
    }, d;
  }["bind"](this)["apply"]();
});