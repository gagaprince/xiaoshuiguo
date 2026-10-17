(function (t) {
  var createClass,
    cclegacy,
    view,
    math,
    o = (tc = [2, 9, 8, 3, 11, 10, 1, 6, 7, 5, 4, 12, 0])["slice"](0);
  return function () {
    var a, u;
    return Gs && tc["pop"](), Pu(a = {}, "setters", 0), Pu(a, "execute", 0), (u = a).setters = [function (t) {
      createClass = t["createClass"];
    }, function (t) {
      cclegacy = t["cclegacy"], view = t["view"], math = t["math"];
    }, null], u.execute = function () {
      var a;
      cclegacy._RF["push"]({}, "a0041p7ElxMVbhEYQYoOnLB", "LayoutIMy", void 0), a = t(Ce, function () {
        var t;
        return (t = function () {
          var t, n;
          return Pu(t = {}, "NONE", 0), Pu(t, "DOWN", 0), Pu(t, "RIGHT", 0), Pu(t, "LEFT", 0), Pu(t, "INWARD", 0), (n = t).NONE = 0, n.DOWN = 0, n.RIGHT = 0, n.LEFT = 0, n.INWARD = 0, n;
        }["apply"]())["NONE"] = 0, t["DOWN"] = 1, t["RIGHT"] = 2, t["LEFT"] = 3, t["INWARD"] = 4, t;
      }["apply"]()), t("default", function () {
        var t,
          r,
          b = [11, 9, 1, 6, 5, 0, 8, 7, 4, 12, 10, 2, 3];
        return ms && $o(b, 11, 3), Ps && $o(b, 9, 8), (t = (r = function () {
          this["halfGameWidth"] = void 0, this["halfGameHeight"] = void 0, this["gameWidth"] = void 0, this["gameHeight"] = void 0, this["curLvMinY"] = 0, this["curLvMaxY"] = 0, this["curLvMaxX"] = 0, this["curLvMinX"] = 0, this["stopFruitDownY"] = 0, this["curLvMoveDir"] = void 0, this.l = void 0, this["scaleExp"] = 1, this["grids"] = [], this["gameLevel"] = void 0, this["createdList"] = [];
        })["prototype"])["getPosList"] = function () {
          return this["createdList"];
        }, t["oinInit"] = function (t, n) {
          var e, u;
          r.instance["curLvMinY"] = 0, r.instance["curLvMaxY"] = 0, r.instance["curLvMaxX"] = 0, r.instance["curLvMinX"] = 0, r.instance.stopFruitDownY = 0, r.instance["grids"] = [], r.instance["createdList"] = [], r.instance["gameLevel"] = t, u = n || r.instance["initLvConfig"](t), r.instance.gameWidth = view.getVisibleSize()["width"], r.instance.gameHeight = view.getVisibleSize()["height"], r.instance["halfGameWidth"] = r.instance.gameWidth / 2, r.instance.halfGameHeight = r.instance.gameHeight / 2, r.instance.stopFruitDownY = 750 - r.instance.halfGameHeight, r.instance["curLvMoveDir"] = u["moveDir"], e = u["typeArr"], r.instance["initGrid"](t);
          for (var w = function () {
              var L = e[_],
                I = u.countArr[_],
                R = 0;
              I["forEach"](function (t) {
                R += t;
              });
              var E = 50,
                D = R * Math.PI * E * E * u.scaleExp;
              switch (u.moveDir) {
                case a["DOWN"]:
                  E = 48, D = R * Math.PI * E * E * u.scaleExp, r.instance.curLvMinY = 0 == r.instance.curLvMaxY ? r.instance.halfGameHeight : r.instance.curLvMaxY, r.instance.curLvMaxY = r.instance.curLvMinY + D / r.instance.gameWidth;
                  break;
                case a["RIGHT"]:
                  E = 55, D = R * Math.PI * E * E * u.scaleExp, r.instance.curLvMaxX = 0 == r.instance.curLvMinX ? -r.instance.halfGameWidth - 200 : r.instance.curLvMinX, r.instance.curLvMinX = r.instance.curLvMaxX - D / (r.instance.halfGameHeight - r.instance.stopFruitDownY - 50);
                  break;
                case a["LEFT"]:
                  E = 55, D = R * Math.PI * E * E * u.scaleExp, r.instance.curLvMinX = 0 == r.instance.curLvMaxX ? r.instance.halfGameWidth + 200 : r.instance.curLvMaxX, r.instance.curLvMaxX = r.instance.curLvMinX + D / (r.instance.halfGameHeight - r.instance.stopFruitDownY - 50);
                  break;
                case a["NONE"]:
                  r.instance.curLvMinY = 0 == r.instance.curLvMaxY ? 880 - r.instance.halfGameHeight : r.instance.curLvMaxY, 1 == e.length ? r.instance.curLvMaxY = r.instance.halfGameHeight - 200 : r.instance.curLvMaxY = Math["min"](r.instance.curLvMinY + D / r.instance.gameWidth, r.instance.halfGameHeight - 200);
              }
              r.instance["initFruits"](L, u.countArr[_], u.scaleExp, u.moveDir, u["itemLayout"], u["holeItemTypeArr"].length);
            }, _ = 0; _ < e["length"]; _++) w();
        }, t["initFruits"] = function (t, n, i, u, s, o) {
          var c;
          void 0 === o && (o = -1);
          for (var R = [], E = 0; E < t.length; E++) for (var D = 0; D < n[E]; D++) R.push(t[E]);
          switch (r.instance["shuffleArray"](R), c = [], u) {
            case a["DOWN"]:
              for (var N = 0; N < R.length; N++) {
                for (var P, G = 0; 0 === r.instance.grids[G].length;) G++;
                P = r.instance.getLegalPos(40, 0, i, G, G), r.instance.createdList.push(function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "position", 0), (n = t).radius = 0, n.position = 0, n;
                  }["apply"]())["radius"] = 40, t["position"] = P, t;
                }.apply()), c.push(P);
              }
              break;
            case a["RIGHT"]:
              for (var O = 0; O < R.length; O++) {
                for (var F, B = 0; 0 === r.instance.grids[B].length;) B++;
                F = r.instance["getLegalPos2"](40, 0, i, B, B), r.instance.createdList.push(function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "position", 0), (n = t).radius = 0, n.position = 0, n;
                  }["apply"]())["radius"] = 40, t["position"] = F, t;
                }.apply()), c.push(F);
              }
              break;
            case a["LEFT"]:
              for (var z = 0; z < R.length; z++) {
                for (var U, H = 0; 0 === r.instance.grids[H].length;) H++;
                U = r.instance["getLegalPos3"](40, 0, i, H, H), r.instance.createdList.push(function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "position", 0), (n = t).radius = 0, n.position = 0, n;
                  }["apply"]())["radius"] = 40, t["position"] = U, t;
                }.apply()), c.push(U);
              }
              break;
            case a["NONE"]:
              var V = [];
              if (2 === o) V.push(math.v3(-270, 400, 0), math.v3(270, 400, 0));else if (3 === o) {
                var W;
                2 === (W = r.instance["gameLevel"] / 10 % 10) ? V.push(math.v3(-270, 180, 0), math.v3(270, 180, 0), math.v3(0, 450, 0)) : 3 === W ? V.push(math.v3(-270, 450, 0), math.v3(270, 450, 0), math.v3(0, 180, 0)) : 4 === W ? V.push(math.v3(0, 130, 0), math.v3(0, 400, 0), math.v3(0, 670, 0)) : 5 === W ? V.push(math.v3(-270, 400, 0), math.v3(270, 400, 0), math.v3(0, 400, 0)) : 6 === W ? V.push(math.v3(-270, 130, 0), math.v3(270, 670, 0), math.v3(0, 400, 0)) : 7 === W && V.push(math.v3(-270, 670, 0), math.v3(270, 130, 0), math.v3(0, 400, 0));
              }
              for (var J = 0; J < R.length; J++) if (J < V.length) c.push(V[J]);else {
                var j;
                j = r.instance.getLegalPos(40, 0, i, 0, r.instance.grids.length - 1), r.instance.createdList.push(function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "position", 0), (n = t).radius = 0, n.position = 0, n;
                  }["apply"]())["radius"] = 40, t["position"] = j, t;
                }.apply()), c.push(j);
              }
          }
          return c;
        }, t["random"] = function (t, n, r) {
          return void 0 === r && (r = !0), r ? t + Math["floor"](Math.random() * (n - t + 1)) : Math.random() * (n - t) + t;
        }, t["shuffleArray"] = function (t) {
          for (var r = t["length"] - 1; r > 0; r--) {
            var i, e;
            i = [t[e = this["random"](0, r)], t[r]], t[r] = i[0], t[e] = i[1];
          }
          return t;
        }, t["RandomInt"] = function (t, n) {
          return Math["floor"](Math["random"]() * (n - t + 1)) + t;
        }, t["randomN"] = function (t, n) {
          return Math["random"]() * (n - t) + t;
        }, t["initLvConfig"] = function (t) {
          var n, i, e, u;
          (n = function () {
            var t,
              n,
              f = Gu(o);
            try {
              for (f.s(); !(n = f.n()).done;) {
                switch (n.value) {
                  case 0:
                    return t;
                  case 1:
                    t["itemConnet"] = !1;
                    break;
                  case 2:
                    t = function () {
                      for (var t, g = 0, y = b; g < y.length; g++) {
                        var w,
                          _ = y[g];
                        if (-1 == _) ;else {
                          if (0 == _) {
                            t.itemLayout = 0;
                            continue;
                          }
                          if (1 == _) {
                            t.countArr = 0;
                            continue;
                          }
                          if (2 == _) {
                            t.scaleExp = 0;
                            continue;
                          }
                          if (3 == _) return t;
                          if (4 == _) {
                            t.woodenObs = 0;
                            continue;
                          }
                          if (5 == _) {
                            t.moveDir = 0;
                            continue;
                          }
                          if (6 == _) {
                            t.iceCount = 0;
                            continue;
                          }
                          if (7 == _) {
                            t.holeItemTypeArr = 0;
                            continue;
                          }
                          if (8 == _) {
                            t.itemConnet = 0;
                            continue;
                          }
                        }
                        if (9 != _) {
                          if (10 != _) {
                            if (11 != _) 12 != _ || (t.randomBox = 0);else Pu(w = {}, "typeArr", 0), Pu(w, "countArr", 0), Pu(w, "scaleExp", 0), Pu(w, "moveDir", 0), Pu(w, "itemLayout", 0), Pu(w, "itemConnet", 0), Pu(w, "holeItemTypeArr", 0), Pu(w, "randomBox", 0), Pu(w, "woodenObs", 0), Pu(w, "obsCount", 0), Pu(w, "iceCount", 0), t = w;
                          } else t.obsCount = 0;
                        } else t.typeArr = 0;
                      }
                    }["apply"]();
                    break;
                  case 3:
                    t["scaleExp"] = 1;
                    break;
                  case 4:
                    t["obsCount"] = 0;
                    break;
                  case 5:
                    t["woodenObs"] = 0;
                    break;
                  case 6:
                    t["holeItemTypeArr"] = [];
                    break;
                  case 7:
                    t["randomBox"] = 0;
                    break;
                  case 8:
                    t["countArr"] = [];
                    break;
                  case 9:
                    t["typeArr"] = [];
                    break;
                  case 10:
                    t["itemLayout"] = !1;
                    break;
                  case 11:
                    t["moveDir"] = a["NONE"];
                    break;
                  case 12:
                    t["iceCount"] = 0;
                }
              }
            } catch (t) {
              f.e(t);
            } finally {
              f.f();
            }
          }["apply"]())["moveDir"] = a["DOWN"], i = 238, e = 268, t % 10 == 2 && (n["scaleExp"] = .9, n.woodenObs = 6, Math.floor(t / 10) % 2 == 0 && (n.woodenObs = 2), i = 228, e = 248), u = 100, t < 10 ? u += 10 * (t - 3) : t > 10 && t < 30 ? u = 172 + 2 * (t - 11) : t > 30 && t < 100 ? u = Math.min(i, 210 + 2 * Math.floor((t - 30) / 5)) : t >= 100 && (u = Math.min(e, 238 + 2 * Math.floor((t - 100) / 10)));
          for (var S = Math.floor(.1 * u), A = Math.floor(.5 * u), C = 0, x = 0; x < 3; x++) {
            var T, L, I;
            I = [], L = [], T = 6 + 8 * x, 2 === x && (T += Math.min(11, Math.floor(t / 10)));
            for (var R = 1; R <= T && !(C >= u); R++) {
              var E;
              I.push(R), E = 2, x > 1 && (E *= r.instance.RandomInt(1, 2)), C += E, L.push(E);
            }
            if (0 === x) for (; C < S;) I.push(r.instance.RandomInt(1, T)), C += 2, L.push(2);
            if (1 === x) for (; C < A;) I.push(r.instance.RandomInt(1, T)), C += 2, L.push(2);
            if (2 === x) for (; C < u;) I.push(r.instance.RandomInt(1, T)), C += 2, L.push(2);
            n["typeArr"].push(I), n["countArr"].push(L);
          }
          return n;
        }, t["initGrid"] = function (t) {
          var n, i, u, s;
          switch (r.instance.grids = [], i = r.instance["gameWidth"] / 4, n = (r.instance["halfGameHeight"] - 300 - r.instance.stopFruitDownY) / 4, s = [], u = [], r.instance["curLvMoveDir"]) {
            case a["DOWN"]:
              s = [-r.instance.halfGameWidth + i / 2, -r.instance.halfGameWidth + 3 * i / 2, r.instance.halfGameWidth - 3 * i / 2, r.instance.halfGameWidth - i / 2], u = [r.instance.stopFruitDownY + 150, r.instance.stopFruitDownY - 50, r.instance.stopFruitDownY - 50, r.instance.stopFruitDownY + 150];
              for (var x = Math.ceil(Math.ceil(i * i / (80 * Math.PI * 80)) / t), T = 0; T < 20; T++) {
                for (var L = [], I = 0; I < s.length; I++) {
                  var R, E, D;
                  D = s[I], R = u[I] + i * T, E = function () {
                    var t;
                    return (t = function () {
                      var t, n;
                      return Pu(t = {}, "pos", 0), Pu(t, "width", 0), Pu(t, "height", 0), Pu(t, "count", 0), Pu(t, "maxCount", 0), (n = t).pos = 0, n.width = 0, n.height = 0, n.count = 0, n.maxCount = 0, n;
                    }["apply"]())["pos"] = math["v2"](D, R), t["width"] = i, t["height"] = i, t["count"] = 0, t["maxCount"] = x, t;
                  }.apply(), L.push(E);
                }
                r.instance.grids.push(L);
              }
              break;
            case a["RIGHT"]:
              var N = -70;
              u = [r.instance.stopFruitDownY - N + n / 2, r.instance.stopFruitDownY - N + 3 * n / 2, r.instance.stopFruitDownY - N + 5 * n / 2, r.instance.stopFruitDownY - N + 7 * n / 2];
              for (var P = Math["floor"](Math.ceil(n * n / (60 * Math.PI * 60)) / t) + 1, G = 0; G < 40; G++) {
                for (var O = [], F = 0; F < u.length; F++) {
                  var B, z, U;
                  U = -r.instance.halfGameWidth - 2 * n * (G + 1), z = u[F], B = function () {
                    var t;
                    return (t = function () {
                      var t, n;
                      return Pu(t = {}, "pos", 0), Pu(t, "width", 0), Pu(t, "height", 0), Pu(t, "count", 0), Pu(t, "maxCount", 0), (n = t).pos = 0, n.width = 0, n.height = 0, n.count = 0, n.maxCount = 0, n;
                    }["apply"]())["pos"] = math["v2"](U, z), t["width"] = 2 * n, t["height"] = n, t["count"] = 0, t["maxCount"] = P, t;
                  }.apply(), O.push(B);
                }
                r.instance.grids.push(O);
              }
              break;
            case a["LEFT"]:
              u = [r.instance.stopFruitDownY - 50 + n / 2, r.instance.stopFruitDownY - 50 + 3 * n / 2, r.instance.stopFruitDownY - 50 + 5 * n / 2, r.instance.stopFruitDownY - 50 + 7 * n / 2];
              for (var H = Math.ceil(Math.ceil(n * n / (70 * Math.PI * 70)) / t) + 1, V = 0; V < 40; V++) {
                for (var W = [], J = 0; J < u.length; J++) {
                  var j, q, K;
                  K = r.instance.halfGameWidth + 2 * n * (V + 1), j = u[J], q = function () {
                    var t;
                    return (t = function () {
                      var t, n;
                      return Pu(t = {}, "pos", 0), Pu(t, "width", 0), Pu(t, "height", 0), Pu(t, "count", 0), Pu(t, "maxCount", 0), (n = t).pos = 0, n.width = 0, n.height = 0, n.count = 0, n.maxCount = 0, n;
                    }["apply"]())["pos"] = math["v2"](K, j), t["width"] = 2 * n, t["height"] = n, t["count"] = 0, t["maxCount"] = H, t;
                  }.apply(), W.push(q);
                }
                r.instance.grids.push(W);
              }
              break;
            case a["NONE"]:
              s = [-r.instance.halfGameWidth + i / 2, -r.instance.halfGameWidth + 3 * i / 2, r.instance.halfGameWidth - 3 * i / 2, r.instance.halfGameWidth - i / 2], u = [r.instance.stopFruitDownY + n / 2, r.instance.stopFruitDownY, r.instance.stopFruitDownY, r.instance.stopFruitDownY + n / 2];
              for (var Y = 0; Y < 4; Y++) {
                for (var X = u[Y] + n * Y, Z = [], Q = 0; Q < s.length; Q++) {
                  var $, tt;
                  tt = s[Q], $ = function () {
                    var a;
                    return (a = function () {
                      var t, n;
                      return Pu(t = {}, "pos", 0), Pu(t, "width", 0), Pu(t, "height", 0), Pu(t, "count", 0), Pu(t, "maxCount", 0), (n = t).pos = 0, n.width = 0, n.height = 0, n.count = 0, n.maxCount = 0, n;
                    }["apply"]())["pos"] = math["v2"](tt, X), a["width"] = i, a["height"] = n, a["count"] = 0, a["maxCount"] = r["instance"]["RandomInt"](3, 4) / t, a;
                  }.apply(), Z.push($);
                }
                r.instance.grids.push(Z);
              }
          }
        }, t["getLegalPos"] = function (t, n, i, a, u) {
          void 0 === i && (i = 1);
          for (var k = math["v3"](0, 0, 0), m = function (t, n) {
              if (0 === t.x && 0 === t.y) return !1;
              if (t.x - n <= -r.instance.halfGameWidth || t.x + n >= r.instance.halfGameWidth) return !1;
              if (t.y < r.instance["curLvMinY"]) return !1;
              if (t.y > r.instance["curLvMaxY"]) return !1;
              for (var v = 0; v < r.instance.createdList["length"] - 1; v++) {
                var l = r.instance.createdList[v],
                  b = l["radius"];
                if (math["Vec3"]["distance"](t, l["position"]) < (n + b) * i) return !1;
              }
              return !0;
            }, p = 0; !m(k, t);) {
            var g, y;
            if (k.x = r.instance.randomN(-r.instance.halfGameWidth + t + 10, r.instance.halfGameWidth - t - 10), n > 0) g = Math["max"](n - r.instance.halfGameHeight, r.instance.curLvMinY), y = n + r.instance.halfGameHeight, k.y = r.instance.randomN(g, y > r.instance.curLvMaxY ? r.instance.curLvMaxY : y);else k.y = r.instance.randomN(r.instance.curLvMinY, r.instance.curLvMaxY);
            if (++p >= 5000) {
              k.y = r.instance.randomN(r.instance.curLvMinY, r.instance.curLvMaxY);
              break;
            }
          }
          return k;
        }, t["getLegalPos2"] = function (t, n, i, a, u) {
          for (var s, o, c, L = math["v3"](0, 0, 0), I = 0; c = t, 0 === (o = L).x && 0 === o.y || o.y - c <= r.instance.stopFruitDownY + 50 || o.y + c >= r.instance.halfGameHeight - 150 || o.x < r.instance.curLvMinX;) {
            var R, E, D;
            if (E = r.instance.RandomInt(a, u), 0 !== (R = r.instance["grids"][E]).length) {
              if ((s = R[D = r.instance.RandomInt(0, R.length - 1)]).count >= s["maxCount"] ? R["splice"](D, 1) : (L.x = s.pos.x + r.instance.randomN(-s.width / 2, s.width / 2), L.y = s.pos.y + r.instance.randomN(-s.height / 2, s.height / 2)), ++I >= 5000) {
                L.x = r.instance.randomN(r.instance.curLvMinX, r.instance["curLvMaxX"]), L.y = r.instance.randomN(r.instance.stopFruitDownY + 50 + t, r.instance.halfGameHeight - 150 - t);
                break;
              }
            } else a++, u++;
          }
          return s && s.count++, L;
        }, t["getLegalPos3"] = function (t, n, i, a, u) {
          for (var s, o, c, T = math["v3"](0, 0), L = 0; c = t, 0 === (o = T).x && 0 === o.y || o.y - c <= r.instance.stopFruitDownY + 50 || o.y + c >= r.instance.halfGameHeight - 250 || o.x > r.instance.curLvMaxX;) {
            var I, R, E;
            if (I = r.instance.RandomInt(a, u), 0 !== (R = r.instance["grids"][I]).length) {
              if ((s = R[E = r.instance.RandomInt(0, R.length - 1)]).count >= s["maxCount"] ? R["splice"](E, 1) : (T.x = s.pos.x + r.instance.randomN(-s.width / 2, s.width / 2), T.y = s.pos.y + r.instance.randomN(-s.height / 2, s.height / 2)), ++L >= 5000) {
                T.x = r.instance.randomN(r.instance["curLvMinX"], r.instance.curLvMaxX), T.y = r.instance.randomN(r.instance.stopFruitDownY + 50 + t, r.instance.halfGameHeight - 200 - t);
                break;
              }
            } else a++, u++;
          }
          return s && s.count++, T;
        }, createClass(r, null, [function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t).key = 0, n.get = 0, n;
          }["apply"]())["key"] = "instance", t["get"] = function () {
            return null == this._instance && (this._instance = new r()), this._instance;
          }, t;
        }["bind"](this)["apply"]()]), r;
      }())["_instance"] = null, cclegacy._RF["pop"]();
    }, u;
  }["bind"](this)["apply"]();
});