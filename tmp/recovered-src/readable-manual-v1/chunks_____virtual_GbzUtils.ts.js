(function (t) {
  var n = to[3];
  Fu(155 / 3) >= Fu(Bu((Ou(3) + Ou(ts) + Ou(hs)) / 3)) && (Oo = [4, 0, 2, 9, 3, 7, 10, 1, 5, 8, 6]);
  var r,
    i,
    e,
    a = Oo["slice"](0);
  return function () {
    var n,
      u,
      s = to[5],
      o = "setters",
      c = "execute";
    return Pu(n = {}, "setters", 0), Pu(n, "execute", 0), (u = n)["setters"] = [function (t) {
      var n = to;
      r = t["cclegacy"], i = t["math"], e = t["UITransform"];
    }], u["execute"] = function () {
      var n = to,
        u = n[3],
        s = "_RF",
        o = [5, 3, 6, 0, 9, 2, 10, 4, 7, 1, 8]["slice"](0);
      t(function () {
        var t,
          n,
          r = to,
          u = r[8],
          s = r[16],
          c = r[9],
          f = Gu(a);
        try {
          for (f.s(); !(n = f.n()).done;) {
            switch (n.value) {
              case 0:
                t["arrQuChong"] = function (t) {
                  for (var n = to, r = [], i = 0; i < t["length"]; i++) {
                    var e;
                    e = t[i], r["includes"](e) || r["push"](e);
                  }
                  return r;
                };
                break;
              case 1:
                t["takeValueFromArray"] = function (t, n, r) {
                  var i = to,
                    e = i[4];
                  void 0 === r && (r = 3);
                  for (var a = [], u = 0, s = 0; s < t["length"]; s++) t[s] === n && u < r && (a["push"](t["splice"](s, 1)[0]), u++, s--);
                  return a;
                };
                break;
              case 2:
                t["countGameLevelData"] = function (t) {
                  var n;
                  return n = {}, t["forEach"](function (t) {
                    n[t] = (n[t] || 0) + 1;
                  }), n;
                };
                break;
              case 3:
                t["getDistance"] = function (t, n) {
                  var r,
                    e = to;
                  return r = i["v2"](t[At] - n[At], t[St] - n[St]), Math["sqrt"](r[At] * r[At] + r[St] * r[St]);
                };
                break;
              case 4:
                t = function () {
                  var t,
                    n,
                    r,
                    i = to,
                    e = i[8],
                    a = i[16],
                    u = i[9],
                    s = "getDiffArr",
                    c = "toXY",
                    f = "getNumFromStr",
                    h = "arrQuChong",
                    v = "takeValueFromArray",
                    l = "countGameLevelData",
                    b = "getDistance",
                    d = "random",
                    k = "timerFormat",
                    m = Gu(o);
                  try {
                    for (m.s(); !(r = m.n()).done;) {
                      switch (r.value) {
                        case 0:
                          n["getDiffArr"] = 0;
                          break;
                        case 1:
                          n["toXY"] = 0;
                          break;
                        case 2:
                          n["getNumFromStr"] = 0;
                          break;
                        case 3:
                          n["arrQuChong"] = 0;
                          break;
                        case 4:
                          n["takeValueFromArray"] = 0;
                          break;
                        case 5:
                          Pu(t = {}, "arrQuChong", 0), Pu(t, "countGameLevelData", 0), Pu(t, "getDiffArr", 0), Pu(t, "getDistance", 0), Pu(t, "getNumFromStr", 0), Pu(t, "random", 0), Pu(t, "takeValueFromArray", 0), Pu(t, "timerFormat", 0), Pu(t, "toXY", 0), n = t;
                          break;
                        case 6:
                          n["countGameLevelData"] = 0;
                          break;
                        case 7:
                          n["timerFormat"] = 0;
                          break;
                        case 8:
                          return n;
                        case 9:
                          n["getDistance"] = 0;
                          break;
                        case 10:
                          n["random"] = 0;
                      }
                    }
                  } catch (t) {
                    m.e(t);
                  } finally {
                    m.f();
                  }
                }["apply"]();
                break;
              case 5:
                t["timerFormat"] = function (t, n) {
                  var r,
                    i = to,
                    e = ro,
                    a = 3600,
                    u = 60,
                    s = "parseInt",
                    o = "replace";
                  return void 0 === n && (n = "h:i:s"), t = Number(t), (r = {})[Ht] = Number["parseInt"](String(t / 3600)), r[Vt] = Number["parseInt"](String((t - 3600 * r[Ht]) / 60)), r[bi] = Number["parseInt"](String(t - 3600 * r[Ht] - 60 * r[Vt])), r[Ht] < 10 && (r[Ht] = it + r[Ht]), r[Vt] < 10 && (r[Vt] = it + r[Vt]), r[bi] < 10 && (r[bi] = it + r[bi]), n["replace"](Ht, r[Ht])["replace"](Vt, r[Vt])["replace"](bi, r[bi]);
                };
                break;
              case 6:
                return t;
              case 7:
                t["getNumFromStr"] = function (t) {
                  var n = to;
                  return t["match"](/\d+/g)["map"](Number)[0];
                };
                break;
              case 8:
                t["toXY"] = function (t, n, r) {
                  var a,
                    u = to,
                    s = "getComponent";
                  return void 0 === r && (r = i["v3"](0, 0, 0)), a = t["getComponent"](e)["convertToWorldSpaceAR"](r), n["getComponent"](e)["convertToNodeSpaceAR"](a);
                };
                break;
              case 9:
                t["getDiffArr"] = function (t, n) {
                  return t["filter"](function (t) {
                    return !n["includes"](t);
                  });
                };
                break;
              case 10:
                t["random"] = function (t, n) {
                  var r = to;
                  return Math["floor"](Math["random"]() * (n - t + 1)) + t;
                };
            }
          }
        } catch (t) {
          f.e(t);
        } finally {
          f.f();
        }
      }["apply"]()), r["_RF"]["push"]({}, "95f86NK+rFG2YDQCu58XETZ", "GbzUtils", void 0), r["_RF"]["pop"]();
    }, u;
  }["apply"]();
});