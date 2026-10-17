(function (t) {
  var inheritsLoose, asyncToGenerator, cclegacy, _decorator, Component, ENUM_UIReload, ENUM_UI, ENUM_RES_SECONDARY, gameMsg, SOUtil, GbzInstance, GbzPoolManager, GbzResManager;
  return function () {
    var b, d;
    return Pu(b = {}, "setters", 0), Pu(b, "execute", 0), (d = b).setters = [function (t) {
      inheritsLoose = t["inheritsLoose"], asyncToGenerator = t["asyncToGenerator"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], Component = t["Component"];
    }, function (t) {
      ENUM_UIReload = t["ENUM_UIReload"], ENUM_UI = t["ENUM_UI"], ENUM_RES_SECONDARY = t["ENUM_RES_SECONDARY"];
    }, function (t) {
      gameMsg = t["gameMsg"];
    }, function (t) {
      SOUtil = t["default"];
    }, function (t) {
      GbzInstance = t["default"];
    }, function (t) {
      GbzPoolManager = t["default"];
    }, function (t) {
      GbzResManager = t["default"];
    }, null], d.execute = function () {
      var b, d;
      cclegacy._RF["push"]({}, "67bf2VPib9B17El63LDib8u", "GbzUIManager", void 0), b = _decorator["ccclass"], _decorator["property"], t("default", b(d = function (t) {
        var i, e;
        return inheritsLoose(e = function () {
          for (var n, r, s = (n = arguments)["length"], o = new Array(s), c = 0; c < s; c++) o[c] = n[c];
          return (r = t["call"]["apply"](t, [this]["concat"](o)) || this)["uiMap"] = new Map(), r["isGameReloaded"] = !1, r["isHomeReloaded"] = !1, r["isAllReloaded"] = !1, r;
        }, t), (i = e["prototype"])["onLoad"] = function () {
          this["isGameReloaded"] = !1, this["isHomeReloaded"] = !1, this["isAllReloaded"] = !1, SOUtil["on"](gameMsg["lStartLoadAllBackUI"], this["backAllLoad"], this), GbzInstance["setUIMgr"](this);
        }, i["init"] = function () {
          for (var e in ENUM_UIReload) {
            var a;
            (a = GbzPoolManager["ins"]["getNode"](ENUM_UIReload[e], this["node"])) && !this.uiMap["has"](ENUM_UIReload[e]) && (a["active"] = !1, a.getComponent(ENUM_UIReload[e]) || a["addComponent"](ENUM_UIReload[e]), this.uiMap["set"](ENUM_UIReload[e], a.getComponent(ENUM_UIReload[e])));
          }
        }, i["backGameLoad"] = function () {
          var t;
          return t = asyncToGenerator(Nu().mark(function t() {
            var n, r, i, e, a, u, c, f, h, b, d, k, m, p, g;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (r = (n = to)[4], i = n[1], e = n[2], a = n[8], u = n[12][49], c = n[1][0], f = n[3][39], h = n[10][0], this[u]) {
                    t.next = 13;
                    break;
                  }
                  this[u] = !0, d = [ENUM_RES_SECONDARY[2], ENUM_RES_SECONDARY[3]], k = 0;
                case 4:
                  if (!(k < d[r[0]])) {
                    t.next = 11;
                    break;
                  }
                  return m = d[k], t.next = 8, GbzResManager[c][e[24]](m);
                case 8:
                  k++, t.next = 4;
                  break;
                case 11:
                  for (p in b = [ENUM_UI[a[57]], ENUM_UI[n[13][11]], ENUM_UI[n[16][15]], ENUM_UI[a[189]], ENUM_UI[n[7][70]]]) this[f][i[17]](b[p]) || (g = GbzPoolManager[c][n[5][13]](b[p], this[e[0]])) && (g[r[2]] = !1, g[h](b[p]) || g[n[10][5]](b[p]), this[f][i[6]](b[p], g[h](b[p])));
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
          return t = asyncToGenerator(Nu().mark(function t() {
            var n, r, i, e, a, u, c, f, h, b, d, k, m, p, g, y, w;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (r = (n = to)[4], i = n[1], e = n[2], a = n[10], u = n[11], c = n[9], f = n[12][50], h = n[1][0], b = n[3][39], d = n[10][0], this[f]) {
                    t.next = 13;
                    break;
                  }
                  this[f] = !0, m = [ENUM_RES_SECONDARY[0], ENUM_RES_SECONDARY[1]], p = 0;
                case 4:
                  if (!(p < m[r[0]])) {
                    t.next = 11;
                    break;
                  }
                  return g = m[p], t.next = 8, GbzResManager[h][e[24]](g);
                case 8:
                  p++, t.next = 4;
                  break;
                case 11:
                  for (y in k = [ENUM_UI[a[39]], ENUM_UI[n[8][88]], ENUM_UI[n[14][14]], ENUM_UI[u[43]], ENUM_UI[c[127]], ENUM_UI[c[128]], ENUM_UI[c[129]], ENUM_UI[u[85]]]) this[b][i[17]](k[y]) || (w = GbzPoolManager[h][n[5][13]](k[y], this[e[0]])) && (w[r[2]] = !1, w[d](k[y]) || w[a[5]](k[y]), this[b][i[6]](k[y], w[d](k[y])));
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
          return t = asyncToGenerator(Nu().mark(function t() {
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
                  if (!(h < ENUM_RES_SECONDARY[r[0]])) {
                    t.next = 10;
                    break;
                  }
                  return b = ENUM_RES_SECONDARY[h], t.next = 7, GbzResManager[u][e[24]](b);
                case 7:
                  h++, t.next = 3;
                  break;
                case 10:
                  for (d in ENUM_UI) this[c][i[17]](ENUM_UI[d]) || (k = GbzPoolManager[u][n[5][13]](ENUM_UI[d], this[e[0]])) && (k[r[2]] = !1, k[f](ENUM_UI[d]) || k[n[10][5]](ENUM_UI[d]), this[c][i[6]](ENUM_UI[d], k[f](ENUM_UI[d])));
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
          var e;
          if (void 0 === n && (n = !0), this.uiMap["has"](t)) return e = this.uiMap["get"](t), n ? e["show"](i) : e["hide"](), r && r(), e;
        }, i["isShow"] = function (t) {
          return !!this.uiMap["has"](t) && this.uiMap["get"](t)["node"]["active"];
        }, i["hasActive"] = function (t) {
          return !!this.uiMap["has"](t) && this.uiMap["get"](t)["node"]["active"];
        }, i["getLayer"] = function (t) {
          var n;
          if (n = this["uiMap"]["get"](t)) return n;
        }, e;
      }(Component)) || d), cclegacy._RF["pop"]();
    }, d;
  }["bind"](this)["apply"]();
});