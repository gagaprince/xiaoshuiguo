(function (t) {
  Fu(155 / 3) >= Fu(Bu((Ou(3) + Ou(ts) + Ou(hs)) / 3)) && (Oo = [4, 0, 2, 9, 3, 7, 10, 1, 5, 8, 6]);
  var cclegacy,
    math,
    UITransform,
    a = Oo["slice"](0);
  return function () {
    var n, u;
    return Pu(n = {}, "setters", 0), Pu(n, "execute", 0), (u = n).setters = [function (t) {
      cclegacy = t["cclegacy"], math = t["math"], UITransform = t["UITransform"];
    }], u.execute = function () {
      var o = [5, 3, 6, 0, 9, 2, 10, 4, 7, 1, 8]["slice"](0);
      t(function () {
        var t,
          n,
          f = Gu(a);
        try {
          for (f.s(); !(n = f.n()).done;) {
            switch (n.value) {
              case 0:
                t["arrQuChong"] = function (t) {
                  for (var r = [], i = 0; i < t["length"]; i++) {
                    var e;
                    e = t[i], r["includes"](e) || r["push"](e);
                  }
                  return r;
                };
                break;
              case 1:
                t["takeValueFromArray"] = function (t, n, r) {
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
                  var r;
                  return r = math["v2"](t.x - n.x, t.y - n.y), Math["sqrt"](r.x * r.x + r.y * r.y);
                };
                break;
              case 4:
                t = function () {
                  var t,
                    n,
                    r,
                    m = Gu(o);
                  try {
                    for (m.s(); !(r = m.n()).done;) {
                      switch (r.value) {
                        case 0:
                          n.getDiffArr = 0;
                          break;
                        case 1:
                          n.toXY = 0;
                          break;
                        case 2:
                          n.getNumFromStr = 0;
                          break;
                        case 3:
                          n.arrQuChong = 0;
                          break;
                        case 4:
                          n.takeValueFromArray = 0;
                          break;
                        case 5:
                          Pu(t = {}, "arrQuChong", 0), Pu(t, "countGameLevelData", 0), Pu(t, "getDiffArr", 0), Pu(t, "getDistance", 0), Pu(t, "getNumFromStr", 0), Pu(t, "random", 0), Pu(t, "takeValueFromArray", 0), Pu(t, "timerFormat", 0), Pu(t, "toXY", 0), n = t;
                          break;
                        case 6:
                          n.countGameLevelData = 0;
                          break;
                        case 7:
                          n.timerFormat = 0;
                          break;
                        case 8:
                          return n;
                        case 9:
                          n.getDistance = 0;
                          break;
                        case 10:
                          n.random = 0;
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
                  var r;
                  return void 0 === n && (n = "h:i:s"), t = Number(t), (r = {}).h = Number.parseInt(String(t / 3600)), r.i = Number.parseInt(String((t - 3600 * r.h) / 60)), r.s = Number.parseInt(String(t - 3600 * r.h - 60 * r.i)), r.h < 10 && (r.h = it + r.h), r.i < 10 && (r.i = it + r.i), r.s < 10 && (r.s = it + r.s), n.replace(Ht, r.h).replace(Vt, r.i).replace(bi, r.s);
                };
                break;
              case 6:
                return t;
              case 7:
                t["getNumFromStr"] = function (t) {
                  return t["match"](/\d+/g)["map"](Number)[0];
                };
                break;
              case 8:
                t["toXY"] = function (t, n, r) {
                  var a;
                  return void 0 === r && (r = math["v3"](0, 0, 0)), a = t.getComponent(UITransform)["convertToWorldSpaceAR"](r), n.getComponent(UITransform)["convertToNodeSpaceAR"](a);
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
                  return Math["floor"](Math["random"]() * (n - t + 1)) + t;
                };
            }
          }
        } catch (t) {
          f.e(t);
        } finally {
          f.f();
        }
      }["apply"]()), cclegacy._RF["push"]({}, "95f86NK+rFG2YDQCu58XETZ", "GbzUtils", void 0), cclegacy._RF["pop"]();
    }, u;
  }["apply"]();
});