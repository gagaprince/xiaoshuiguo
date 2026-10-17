(function (t) {
  var createForOfIteratorHelperLoose, createClass, cclegacy, math, tween, FruitConfig, CalculatedInfo, GridManager, ReferenceMgr, GbzPoolManager, GbzDataManager, GameMgr, Log;
  return function () {
    var b, d;
    return Pu(b = {}, "setters", 0), Pu(b, "execute", 0), (d = b).setters = [function (t) {
      createForOfIteratorHelperLoose = t["createForOfIteratorHelperLoose"], createClass = t["createClass"];
    }, function (t) {
      cclegacy = t["cclegacy"], math = t["math"], tween = t["tween"];
    }, function (t) {
      FruitConfig = t["FruitConfig"];
    }, function (t) {
      CalculatedInfo = t["default"];
    }, function (t) {
      GridManager = t["default"];
    }, function (t) {
      ReferenceMgr = t["default"];
    }, function (t) {
      GbzPoolManager = t["default"];
    }, function (t) {
      GbzDataManager = t["default"];
    }, function (t) {
      GameMgr = t["default"];
    }, function (t) {
      Log = t["Log"];
    }], d.execute = function () {
      var y = [24],
        w = 3;
      y = [3, 1, 26, 10, 7, 0, 22, 29, 15, 16, 9, 19, 24, 5, 20, 18, 14, 6, 23, 21, 30, 28, 4, 25, 8, 2, 11, 27, 17, 13, 12], Uu(2 * Ou(zu(9800))) <= Uu(Ou(11930) + Ou(8570)) && (w += 13);
      var _ = y["slice"](0);
      cclegacy._RF["push"]({}, "63c68ZPv5tIRqcJmT2E6U1v", "ReferenceLayMgr", void 0), t("default", function () {
        var t, i;
        return (t = (i = function () {
          this["parts"] = [], this["calculatedInfo"] = [], this["_cMoveDir"] = void 0, this["_cMinY"] = 0, this["_cMaxY"] = 0, this["_cMinX"] = 0, this["_cMaxX"] = 0, this["_bottomY"] = 0, this["itemRadius"] = 55, this["pt"] = function () {
            var t,
              n,
              r,
              A = Gu(_);
            try {
              for (A.s(); !(r = A.n()).done;) {
                switch (r.value) {
                  case 0:
                    n[4] = function () {
                      var t;
                      return (t = function () {
                        var t, n;
                        return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                      }["apply"]())["radius"] = 35.1, t["scale"] = 1, t["particleType"] = 3, t;
                    }.apply();
                    break;
                  case 1:
                    n[0] = function () {
                      var t;
                      return (t = function () {
                        var t, n;
                        return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                      }["apply"]())["radius"] = 46, t["scale"] = 1, t["particleType"] = 1, t;
                    }.apply();
                    break;
                  case 2:
                    n[24] = function () {
                      var t;
                      return (t = function () {
                        var t, n;
                        return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                      }["apply"]())["radius"] = 36.4, t["scale"] = 1, t["particleType"] = 2, t;
                    }.apply();
                    break;
                  case 3:
                    Pu(t = {}, 0, 0), Pu(t, 1, 0), Pu(t, 2, 0), Pu(t, 3, 0), Pu(t, 4, 0), Pu(t, 5, 0), Pu(t, 6, 0), Pu(t, 7, 0), Pu(t, 8, 0), Pu(t, 9, 0), Pu(t, 10, 0), Pu(t, 11, 0), Pu(t, 12, 0), Pu(t, 13, 0), Pu(t, 14, 0), Pu(t, 15, 0), Pu(t, 16, 0), Pu(t, 17, 0), Pu(t, 18, 0), Pu(t, 19, 0), Pu(t, 20, 0), Pu(t, 21, 0), Pu(t, 22, 0), Pu(t, 23, 0), Pu(t, 24, 0), Pu(t, 25, 0), Pu(t, 26, 0), Pu(t, 27, 0), Pu(t, 28, 0), n = t;
                    break;
                  case 4:
                    n[21] = function () {
                      var t;
                      return (t = function () {
                        var t, n;
                        return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                      }["apply"]())["radius"] = 35.75, t["scale"] = 1, t["particleType"] = 6, t;
                    }.apply();
                    break;
                  case 5:
                    n[12] = function () {
                      var t;
                      return (t = function () {
                        var t, n;
                        return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                      }["apply"]())["radius"] = 34.125, t["scale"] = 1, t["particleType"] = 4, t;
                    }.apply();
                    break;
                  case 6:
                    n[16] = function () {
                      var t;
                      return (t = function () {
                        var t, n;
                        return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                      }["apply"]())["radius"] = 33.15, t["scale"] = 1, t["particleType"] = 6, t;
                    }.apply();
                    break;
                  case 7:
                    n[3] = function () {
                      var t;
                      return (t = function () {
                        var t, n;
                        return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                      }["apply"]())["radius"] = .65 * 109 / 2, t["scale"] = 1, t["particleType"] = 1, t;
                    }.apply();
                    break;
                  case 8:
                    n[23] = function () {
                      var t;
                      return (t = function () {
                        var t, n;
                        return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                      }["apply"]())["radius"] = 33.15, t["scale"] = 1, t["particleType"] = 5, t;
                    }.apply();
                    break;
                  case 9:
                    n[9] = function () {
                      var t;
                      return (t = function () {
                        var t, n;
                        return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                      }["apply"]())["radius"] = 36.4, t["scale"] = 1, t["particleType"] = 2, t;
                    }.apply();
                    break;
                  case 10:
                    n[2] = function () {
                      var t;
                      return (t = function () {
                        var t, n;
                        return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                      }["apply"]())["radius"] = 30.225, t["scale"] = 1, t["particleType"] = 2, t;
                    }.apply();
                    break;
                  case 11:
                    n[25] = function () {
                      var t;
                      return (t = function () {
                        var t, n;
                        return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                      }["apply"]())["radius"] = .65 * 114 / 2, t["scale"] = 1, t["particleType"] = 6, t;
                    }.apply();
                    break;
                  case 12:
                    return n;
                  case 13:
                    n[28] = function () {
                      var t;
                      return (t = function () {
                        var t, n;
                        return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                      }["apply"]())["radius"] = 32.5, t["scale"] = 1, t["particleType"] = 2, t;
                    }.apply();
                    break;
                  case 14:
                    n[15] = function () {
                      var t;
                      return (t = function () {
                        var t, n;
                        return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                      }["apply"]())["radius"] = 36.725, t["scale"] = 1, t["particleType"] = 2, t;
                    }.apply();
                    break;
                  case 15:
                    n[7] = function () {
                      var t;
                      return (t = function () {
                        var t, n;
                        return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                      }["apply"]())["radius"] = 35.75, t["scale"] = 1, t["particleType"] = 2, t;
                    }.apply();
                    break;
                  case 16:
                    n[8] = function () {
                      var t;
                      return (t = function () {
                        var t, n;
                        return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                      }["apply"]())["radius"] = 34.45, t["scale"] = 1, t["particleType"] = 2, t;
                    }.apply();
                    break;
                  case 17:
                    n[27] = function () {
                      var t;
                      return (t = function () {
                        var t, n;
                        return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                      }["apply"]())["radius"] = 39, t["scale"] = 1, t["particleType"] = 5, t;
                    }.apply();
                    break;
                  case 18:
                    n[14] = function () {
                      var t;
                      return (t = function () {
                        var t, n;
                        return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                      }["apply"]())["radius"] = .65 * 114 / 2, t["scale"] = 1, t["particleType"] = 1, t;
                    }.apply();
                    break;
                  case 19:
                    n[10] = function () {
                      var t;
                      return (t = function () {
                        var t, n;
                        return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                      }["apply"]())["radius"] = 36.4, t["scale"] = 1, t["particleType"] = 6, t;
                    }.apply();
                    break;
                  case 20:
                    n[13] = function () {
                      var t;
                      return (t = function () {
                        var t, n;
                        return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                      }["apply"]())["radius"] = 39, t["scale"] = 1, t["particleType"] = 6, t;
                    }.apply();
                    break;
                  case 21:
                    n[18] = function () {
                      var t;
                      return (t = function () {
                        var t, n;
                        return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                      }["apply"]())["radius"] = 30.55, t["scale"] = 1, t["particleType"] = 2, t;
                    }.apply();
                    break;
                  case 22:
                    n[5] = function () {
                      var t;
                      return (t = function () {
                        var t, n;
                        return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                      }["apply"]())["radius"] = 34.775, t["scale"] = 1, t["particleType"] = 2, t;
                    }.apply();
                    break;
                  case 23:
                    n[17] = function () {
                      var t;
                      return (t = function () {
                        var t, n;
                        return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                      }["apply"]())["radius"] = 38.025, t["scale"] = 1, t["particleType"] = 1, t;
                    }.apply();
                    break;
                  case 24:
                    n[11] = function () {
                      var t;
                      return (t = function () {
                        var t, n;
                        return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                      }["apply"]())["radius"] = .65 * 104 / 2, t["scale"] = 1, t["particleType"] = 1, t;
                    }.apply();
                    break;
                  case 25:
                    n[22] = function () {
                      var t;
                      return (t = function () {
                        var t, n;
                        return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                      }["apply"]())["radius"] = 34.775, t["scale"] = 1, t["particleType"] = 2, t;
                    }.apply();
                    break;
                  case 26:
                    n[1] = function () {
                      var t;
                      return (t = function () {
                        var t, n;
                        return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                      }["apply"]())["radius"] = 37.375, t["scale"] = 1, t["particleType"] = 5, t;
                    }.apply();
                    break;
                  case 27:
                    n[26] = function () {
                      var t;
                      return (t = function () {
                        var t, n;
                        return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                      }["apply"]())["radius"] = .65 * 104 / 2, t["scale"] = 1, t["particleType"] = 2, t;
                    }.apply();
                    break;
                  case 28:
                    n[20] = function () {
                      var t;
                      return (t = function () {
                        var t, n;
                        return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                      }["apply"]())["radius"] = .65 * 104 / 2, t["scale"] = 1, t["particleType"] = 6, t;
                    }.apply();
                    break;
                  case 29:
                    n[6] = function () {
                      var t;
                      return (t = function () {
                        var t, n;
                        return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                      }["apply"]())["radius"] = 36.4, t["scale"] = 1, t["particleType"] = 6, t;
                    }.apply();
                    break;
                  case 30:
                    n[19] = function () {
                      var t;
                      return (t = function () {
                        var t, n;
                        return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                      }["apply"]())["radius"] = 36.075, t["scale"] = 1, t["particleType"] = 5, t;
                    }.apply();
                }
              }
            } catch (t) {
              A.e(t);
            } finally {
              A.f();
            }
          }.apply(), this["originalPt"] = function () {
            for (var t, n, D = 0, N = w; D < 37;) switch (++D, N) {
              case 20:
                n[32] = function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                  }["apply"]())["radius"] = 89, t["scale"] = .77 * .9 * .695, t["particleType"] = 4, t;
                }.apply(), N = 27;
                break;
              case 26:
                n[0] = function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                  }["apply"]())["radius"] = 92, t["scale"] = 1, t["particleType"] = 1, t;
                }.apply(), N = 31;
                break;
              case 1:
                n[10] = function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                  }["apply"]())["radius"] = 72, t["scale"] = .56295, t["particleType"] = 4, t;
                }.apply(), N = 18;
                break;
              case 7:
                n[29] = function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                  }["apply"]())["radius"] = 89, t["scale"] = .77 * .9 * .695, t["particleType"] = 4, t;
                }.apply(), N = 28;
                break;
              case 30:
                n[31] = function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                  }["apply"]())["radius"] = 85, t["scale"] = .8 * .9 * .695, t["particleType"] = 6, t;
                }.apply(), N = 20;
                break;
              case 21:
                n[19] = function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                  }["apply"]())["radius"] = 75, t["scale"] = .519165, t["particleType"] = 6, t;
                }.apply(), N = 32;
                break;
              case 14:
                n[66] = function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                  }["apply"]())["radius"] = 236, t["scale"] = .17375, t["particleType"] = 1, t;
                }.apply(), N = 6;
                break;
              case 9:
                n[3] = function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                  }["apply"]())["radius"] = 78, t["scale"] = .8 * .9 * .695, t["particleType"] = 3, t;
                }.apply(), N = 8;
                break;
              case 13:
                n[8] = function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                  }["apply"]())["radius"] = 75, t["scale"] = .8 * .9 * .695, t["particleType"] = 0, t;
                }.apply(), N = 12;
                break;
              case 2:
                n[27] = function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                  }["apply"]())["radius"] = 82, t["scale"] = .51291, t["particleType"] = 3, t;
                }.apply(), N = 23;
                break;
              case 15:
                n[14] = function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                  }["apply"]())["radius"] = 85, t["scale"] = .8 * .9 * .695, t["particleType"] = 4, t;
                }.apply(), N = 36;
                break;
              case 11:
                n[6] = function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                  }["apply"]())["radius"] = 75, t["scale"] = .56295, t["particleType"] = 4, t;
                }.apply(), N = 22;
                break;
              case 31:
                n[1] = function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                  }["apply"]())["radius"] = 77, t["scale"] = .51291, t["particleType"] = 3, t;
                }.apply(), N = 34;
                break;
              case 16:
                Pu(t = {}, 0, 0), Pu(t, 1, 0), Pu(t, 2, 0), Pu(t, 3, 0), Pu(t, 4, 0), Pu(t, 5, 0), Pu(t, 6, 0), Pu(t, 7, 0), Pu(t, 8, 0), Pu(t, 9, 0), Pu(t, 10, 0), Pu(t, 11, 0), Pu(t, 12, 0), Pu(t, 13, 0), Pu(t, 14, 0), Pu(t, 15, 0), Pu(t, 16, 0), Pu(t, 17, 0), Pu(t, 18, 0), Pu(t, 19, 0), Pu(t, 20, 0), Pu(t, 21, 0), Pu(t, 22, 0), Pu(t, 23, 0), Pu(t, 24, 0), Pu(t, 25, 0), Pu(t, 26, 0), Pu(t, 27, 0), Pu(t, 28, 0), Pu(t, 29, 0), Pu(t, 30, 0), Pu(t, 31, 0), Pu(t, 32, 0), Pu(t, 33, 0), Pu(t, 66, 0), n = t, N = 26;
                break;
              case 3:
                n[22] = function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                  }["apply"]())["radius"] = 80, t["scale"] = .51291, t["particleType"] = 2, t;
                }.apply(), N = 35;
                break;
              case 0:
                n[13] = function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                  }["apply"]())["radius"] = 81.5, t["scale"] = .51291, t["particleType"] = 6, t;
                }.apply(), N = 15;
                break;
              case 24:
                n[16] = function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                  }["apply"]())["radius"] = 77, t["scale"] = .531675, t["particleType"] = 2, t;
                }.apply(), N = 29;
                break;
              case 4:
                n[5] = function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                  }["apply"]())["radius"] = 75, t["scale"] = .531675, t["particleType"] = 0, t;
                }.apply(), N = 11;
                break;
              case 12:
                n[9] = function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                  }["apply"]())["radius"] = 67.6, t["scale"] = .531675, t["particleType"] = 0, t;
                }.apply(), N = 1;
                break;
              case 19:
                n[18] = function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                  }["apply"]())["radius"] = 85, t["scale"] = .8 * .9 * .695, t["particleType"] = 0, t;
                }.apply(), N = 21;
                break;
              case 18:
                n[11] = function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                  }["apply"]())["radius"] = 70, t["scale"] = .52542, t["particleType"] = 0, t;
                }.apply(), N = 25;
                break;
              case 22:
                n[7] = function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                  }["apply"]())["radius"] = 75, t["scale"] = .531675, t["particleType"] = 0, t;
                }.apply(), N = 13;
                break;
              case 6:
                return n;
              case 34:
                n[2] = function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                  }["apply"]())["radius"] = 80, t["scale"] = .47538, t["particleType"] = 0, t;
                }.apply(), N = 9;
                break;
              case 29:
                n[17] = function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                  }["apply"]())["radius"] = 82.7, t["scale"] = .519165, t["particleType"] = 4, t;
                }.apply(), N = 19;
                break;
              case 27:
                n[33] = function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                  }["apply"]())["radius"] = 89, t["scale"] = .48789, t["particleType"] = 0, t;
                }.apply(), N = 14;
                break;
              case 10:
                n[25] = function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                  }["apply"]())["radius"] = 82, t["scale"] = .51291, t["particleType"] = 4, t;
                }.apply(), N = 17;
                break;
              case 36:
                n[15] = function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                  }["apply"]())["radius"] = 72, t["scale"] = .56295, t["particleType"] = 6, t;
                }.apply(), N = 24;
                break;
              case 17:
                n[26] = function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                  }["apply"]())["radius"] = 82, t["scale"] = .51291, t["particleType"] = 1, t;
                }.apply(), N = 2;
                break;
              case 25:
                n[12] = function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                  }["apply"]())["radius"] = 75, t["scale"] = .531675, t["particleType"] = 5, t;
                }.apply(), N = 0;
                break;
              case 23:
                n[28] = function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                  }["apply"]())["radius"] = 80, t["scale"] = .51291, t["particleType"] = 1, t;
                }.apply(), N = 7;
                break;
              case 28:
                n[30] = function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                  }["apply"]())["radius"] = 85, t["scale"] = .77 * .9 * .695, t["particleType"] = 5, t;
                }.apply(), N = 30;
                break;
              case 35:
                n[23] = function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                  }["apply"]())["radius"] = 82.7, t["scale"] = .47538, t["particleType"] = 3, t;
                }.apply(), N = 5;
                break;
              case 32:
                n[20] = function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                  }["apply"]())["radius"] = 64.5, t["scale"] = .6255, t["particleType"] = 3, t;
                }.apply(), N = 33;
                break;
              case 8:
                n[4] = function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                  }["apply"]())["radius"] = 78, t["scale"] = .4785075, t["particleType"] = 2, t;
                }.apply(), N = 4;
                break;
              case 33:
                n[21] = function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                  }["apply"]())["radius"] = 85, t["scale"] = .8 * .9 * .695, t["particleType"] = 0, t;
                }.apply(), N = 3;
                break;
              case 5:
                n[24] = function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "radius", 0), Pu(t, "scale", 0), Pu(t, "particleType", 0), (n = t).radius = 0, n.scale = 0, n.particleType = 0, n;
                  }["apply"]())["radius"] = 85.6, t["scale"] = .77 * .9 * .695, t["particleType"] = 2, t;
                }.apply(), N = 10;
            }
          }.apply();
        })["prototype"])["genLvMapData"] = function (t, r, i, h) {
          var v, b, d, k, m, p;
          if (k = this, this["_cMinY"] = 0, this._cMaxY = 0, this["_cMinX"] = 0, this["_cMaxX"] = 0, this["_bottomY"] = r, this.calculatedInfo = [], d = ReferenceMgr.inst["initLvCfg"](t), v = d["typeArr"], m = d["countArr"], this["_cMoveDir"] = d["moveDir"], this["initPart"](d["scaleExp"]), p = 83, d["itemLayout"]) {
            var mt, pt, gt, yt;
            if (mt = 42, 0 == (pt = (t - 6) % 40) ? GridManager.inst["InitPart"](7, mt, 0, p, p, ReferenceMgr.inst.stopDownY) : 10 === pt ? (mt = 45, GridManager.inst["InitPart2"](7, mt, 0, p, p, ReferenceMgr.inst.stopDownY)) : 20 === pt ? (mt = 48, GridManager.inst["InitPart7"](7, mt, 0, p, p, ReferenceMgr.inst.stopDownY)) : 30 === pt && (mt = 89, GridManager.inst["InitPart8"](7, mt, 0, p, p, ReferenceMgr.inst.stopDownY)), yt = GridManager.inst["GetParts"](), gt = 130, t > 10 && t < 30) gt = 182 + 20 * Math.floor((t - 10) / 10);else if (t > 30 && t < 100) {
              var wt;
              wt = Math.floor((t - 30) / 5), gt = Math.min(238, 210 + 2 * wt);
            } else if (t >= 100) {
              var _t;
              _t = Math.floor((t - 100) / 10), gt = Math.min(268, 238 + 2 * _t);
            }
            for (var Mt = [], At = [], Ct = Math.floor(gt / 3), xt = 22 + Math.min(11, Math.floor(t / 10)); gt > 0;) {
              var Tt, Lt, It;
              Lt = Ct > 0 ? Mt : At, It = Ct > 0 ? 11 : xt, Tt = ReferenceMgr.inst.RandomInt(1, It), Lt.push(Tt, Tt), Ct > 0 && (Ct -= 2), gt -= 2;
            }
            this.shuffleArray(Mt), this.shuffleArray(At);
            for (var Rt, Et = createForOfIteratorHelperLoose(yt); !(Rt = Et()).done;) {
              var Dt;
              if (Dt = Rt.value, !Mt.length && !At.length) break;
              for (var Nt, Pt = createForOfIteratorHelperLoose(Dt); !(Nt = Pt()).done;) {
                var Gt, Ot, Ft;
                if (Ot = Nt.value, !(Ft = Mt.length ? Mt.shift() : At.shift())) break;
                Gt = this.getPt(Ft), this.calculatedInfo.push(new CalculatedInfo(Ft, Ot["position"], 0, Gt.radius, Gt.scale)), Ot["have"] = !0;
              }
            }
            if (d.randomBox > 0) for (var Bt = []; d.randomBox > 0;) {
              var zt;
              zt = ReferenceMgr.inst.RandomInt(0, this.calculatedInfo.length - 1), -1 == Bt.indexOf(zt) && (d.randomBox--, this.calculatedInfo[zt].type = 2, Bt.push(zt));
            }
          } else {
            if (d.woodenObs > 0) for (var Ut = 0; Ut < d.woodenObs; Ut++) {
              var Ht;
              Ht = GbzPoolManager.ins.getNode("stake"), i["addChild"](Ht), 6 == d.woodenObs ? Ht.setPosition(math.v3(Ut % 2 == 0 ? ReferenceMgr.inst.halfGameW : -ReferenceMgr.inst.halfGameW, 100 + 278 * Math.floor(Ut / 2))) : 2 == d.woodenObs ? Ht.setPosition(math.v3(0, 150 + 278 * Ut)) : 4 == d.woodenObs && Ht.setPosition(math.v3(Ut < 1 ? -270 : 270, 350)), Ht["setScale"](0, 0, 0), tween(Ht).to(.8, function () {
                var t;
                return (t = Pu({}, "scale", 0)).scale = math["v3"](1, 1, 1), t;
              }.apply()).start();
            }
            for (var Vt = function (n) {
                var E = v[n],
                  D = m[n],
                  N = 0;
                D["forEach"](function (t) {
                  N += t;
                });
                var P = N * Math["PI"] * k.itemRadius * k.itemRadius * d.scaleExp,
                  G = ReferenceMgr["inst"];
                switch (d.moveDir) {
                  case FruitConfig.MoveDirection["DOWN"]:
                    k._cMinY = 0 === k._cMaxY ? k._bottomY : k._cMaxY, k._cMaxY = k._cMinY + P / G.gameW;
                    break;
                  case FruitConfig.MoveDirection["RIGHT"]:
                    k._cMaxX = 0 === k._cMinX ? -G.halfGameW - 70 : k._cMinX, k._cMinX = k._cMaxX - P / (G.halfGameH - G.stopDownY - 50);
                    break;
                  case FruitConfig.MoveDirection["LEFT"]:
                    k._cMinX = 0 === k._cMaxX ? G.halfGameW + 70 : k._cMaxX, k._cMaxX = k._cMinX + P / (G.halfGameH - G.stopDownY - 50);
                    break;
                  case FruitConfig.MoveDirection["NONE"]:
                    k._cMinY = 0 === k._cMaxY ? k._bottomY : k._cMaxY, 1 === v.length ? k._cMaxY = G.halfGameH - 140 : k._cMaxY = Math["min"](k._cMinY + P / G.gameW, G.halfGameH - 140);
                }
                Log(d.moveDir), k["initItems"](t, E, D, d.scaleExp, d.moveDir, d["itemLayout"], d["holeItemTypeArr"].length);
              }, Wt = 0; Wt < v.length; Wt++) Vt(Wt);
            if (d.randomBox > 0) for (var Jt = []; d.randomBox > 0;) {
              var jt;
              jt = ReferenceMgr.inst.RandomInt(0, this.calculatedInfo.length - 1), -1 == Jt.indexOf(jt) && (d.randomBox--, this.calculatedInfo[jt].type = 2, Jt.push(jt));
            }
            if (d.holeItemTypeArr.length > 0) {
              Log("黑洞", d.holeItemTypeArr);
              for (var qt = 0; qt < d.holeItemTypeArr.length; qt++) {
                var Kt, Yt;
                Yt = d.holeItemTypeArr[qt], Kt = this.getPt(0), this.calculatedInfo[qt].type = 3, this.calculatedInfo[qt].radius = Kt.radius, this.calculatedInfo[qt]["holeFruitTyes"] = Yt;
              }
            }
            if (d.obsCount > 0) for (var Xt = (this._cMaxY - (880 - ReferenceMgr.inst.halfGameH)) / d.obsCount, Zt = 880 - ReferenceMgr.inst.halfGameH + Xt / 2, Qt = 0; Qt < d.obsCount; Qt++) {
              var $t, tn;
              tn = ReferenceMgr.inst.RandomInt(1, 3), $t = GbzPoolManager.ins.getNode("obs" + tn), h["insertChild"]($t, 1), $t.setPosition(math.v3(this["randomN"](-208, 208), Zt)), $t.scale = math.v3(0, 0, 0), tween($t).to(.8, function () {
                var t;
                return (t = Pu({}, "scale", 0)).scale = math["v3"](1, 1, 1), t;
              }.apply()).start(), Zt += Xt;
            }
            if (d.iceCount > 0) {
              for (var nn = [], rn = 30; rn < this.calculatedInfo.length; rn++) this.calculatedInfo[rn].pos.y <= this._cMaxY - 400 && nn.push(rn);
              if (nn.length > 0) for (var en = 0; en < d.iceCount && !(nn.length <= 0); en++) {
                var an, un, sn, on;
                an = nn[on = ReferenceMgr.inst.RandomInt(0, nn.length - 1)], nn["splice"](on, 1), un = this.calculatedInfo[an].pos, sn = Math.floor(Math["abs"](un.y - ReferenceMgr.inst.stopDownY) / (this._cMaxY - ReferenceMgr.inst.stopDownY) * this.calculatedInfo.length * .5) + ReferenceMgr.inst.RandomInt(0, 5), this.calculatedInfo[an].type = 1, this.calculatedInfo[an]["unlockNum"] = sn;
              }
            }
          }
          if (b = this.calculatedInfo.length, d.holeItemTypeArr.length) for (var cn = 0; cn < d.holeItemTypeArr.length; cn++) b += d.holeItemTypeArr[cn].length;
          return function () {
            var t, n;
            return Pu(t = {}, "info", 0), Pu(t, "totalNum", 0), (n = t).info = d, n.totalNum = b, n;
          }.apply();
        }, t["genLvMap"] = function (t) {
          for (var r = this, i = function (n) {
              GameMgr.instance["createFruitNodes"](GameMgr.instance["fruits"], r["calculatedInfo"][n], !0, null, function () {
                n == r["calculatedInfo"]["length"] - 1 && t && t();
              });
            }, e = 0; e < this["calculatedInfo"]["length"]; e++) i(e);
        }, t["initItems"] = function (t, n, r, i, a, o, c) {
          switch (void 0 === c && (c = -1), a) {
            case FruitConfig.MoveDirection["DOWN"]:
              for (var D = [], N = 0; N < n.length; N++) for (var P = n[N], G = r[N], O = 0; O < G; O++) D.push(P);
              this.shuffleArray(D);
              for (var F = 0; F < D.length; F++) {
                for (var B, z = D[F], U = this.getPt(z), H = 0; 0 === this.parts[H].length;) H++;
                B = this.getPos(this.calculatedInfo, U.radius * U.scale, 0, i), this.calculatedInfo.push(new CalculatedInfo(z, B, 0, U.radius, U.scale));
              }
              break;
            case FruitConfig.MoveDirection["RIGHT"]:
              for (var V = [], W = 0; W < n.length; W++) for (var J = n[W], j = r[W], q = 0; q < j; q++) V.push(J);
              this.shuffleArray(V);
              for (var K = 0; K < V.length; K++) {
                for (var Y, X = V[K], Z = this.getPt(X), Q = 0; 0 === this.parts[Q].length;) Q++;
                Y = this["getPos2"](Z.radius * Z.scale, 0, i, Q, Q), this.calculatedInfo.push(new CalculatedInfo(X, Y, 0, Z.radius, Z.scale));
              }
              break;
            case FruitConfig.MoveDirection["LEFT"]:
              for (var $ = [], tt = 0; tt < n.length; tt++) for (var nt = n[tt], rt = r[tt], it = 0; it < rt; it++) $.push(nt);
              this.shuffleArray($);
              for (var et = 0; et < $.length; et++) {
                for (var at, ut = $[et], st = this.getPt(ut), ot = 0; 0 === this.parts[ot].length;) ot++;
                at = this["getPos3"](st.radius * st.scale, 0, i, ot, ot), this.calculatedInfo.push(new CalculatedInfo(ut, at, 0, st.radius, st.scale));
              }
              break;
            case FruitConfig.MoveDirection["NONE"]:
              for (var ct = [], ft = 0; ft < n.length; ft++) for (var ht = n[ft], vt = r[ft], lt = 0; lt < vt; lt++) ct.push(ht);
              this.shuffleArray(ct);
              var bt = [];
              if (2 == c) bt.push(math.v2(-270, 400)), bt.push(math.v2(270, 400));else if (3 == c) {
                var dt;
                2 == (dt = t / 10 % 10) ? (bt.push(math.v2(-270, 180)), bt.push(math.v2(270, 180)), bt.push(math.v2(0, 450))) : 3 == dt ? (bt.push(math.v2(-270, 450)), bt.push(math.v2(270, 450)), bt.push(math.v2(0, 180))) : 4 == dt ? (bt.push(math.v2(0, 130)), bt.push(math.v2(0, 400)), bt.push(math.v2(0, 670))) : 5 == dt ? (bt.push(math.v2(-270, 400)), bt.push(math.v2(270, 400)), bt.push(math.v2(0, 400))) : 6 == dt ? (bt.push(math.v2(-270, 130)), bt.push(math.v2(270, 670)), bt.push(math.v2(0, 400))) : 7 == dt && (bt.push(math.v2(-270, 670)), bt.push(math.v2(270, 130)), bt.push(math.v2(0, 400)));
              } else if (4 == c) {
                var kt;
                8 == (kt = t / 10 % 10) ? (bt.push(math.v2(-270, 400)), bt.push(math.v2(270, 400)), bt.push(math.v2(0, 400)), bt.push(math.v2(0, 130))) : 9 == kt ? (bt.push(math.v2(-270, 400)), bt.push(math.v2(270, 400)), bt.push(math.v2(0, 670)), bt.push(math.v2(0, 130))) : 0 == kt && (bt.push(math.v2(-270, 670)), bt.push(math.v2(270, 670)), bt.push(math.v2(0, 400)), bt.push(math.v2(0, 130)));
              }
              for (var mt = 0; mt < ct.length; mt++) {
                var pt, gt, yt;
                if (gt = ct[mt], pt = this.getPt(gt), this.calculatedInfo.length < c) bt[mt].x *= .695, bt[mt].y *= .695, this.calculatedInfo.push(new CalculatedInfo(gt, bt[mt], 0, pt.radius, pt.scale));else yt = this.getPos(this.calculatedInfo, pt.radius * pt.scale, 0, i), this.calculatedInfo.push(new CalculatedInfo(gt, yt, 0, pt.radius, pt.scale));
              }
          }
        }, t["getPos"] = function (t, n, r, i) {
          void 0 === i && (i = 1.25);
          for (var d = ReferenceMgr.inst["halfGameW"], k = -d + n + 7, m = d - n - 7, p = 0, g = [function () {
              var t,
                a = (Pu(t = {}, "margin", 0), Pu(t, "maxTries", 0), t);
              return a.margin = i, a.maxTries = 120, a;
            }.apply(), function () {
              var t,
                a = (Pu(t = {}, "margin", 0), Pu(t, "maxTries", 0), t);
              return a.margin = .85 * i, a.maxTries = 80, a;
            }.apply(), function () {
              var t,
                e = (Pu(t = {}, "margin", 0), Pu(t, "maxTries", 0), t);
              return e.margin = 1.05, e.maxTries = 50, e;
            }.apply()]; p < g["length"]; p++) for (var y = g[p], w = 0; w < y["maxTries"];) {
            var _, M, S, A, C;
            if (w++, C = this.randomN(k, m), _ = this._cMinY, S = this._cMaxY, r > 0 && (_ = Math["max"](r - .3 * ReferenceMgr.inst.halfGameH, this._cMinY), S = Math["min"](r + .7 * ReferenceMgr.inst.halfGameH, this._cMaxY)), M = this.randomN(_, S), A = math["v2"](C, M), this["_isPos"](A, t, n, y["margin"])) return A;
          }
          return this["_smartFallbackPos"](t, n, r);
        }, t["_isPos"] = function (t, r, i, a) {
          for (var u, f = createForOfIteratorHelperLoose(r); !(u = f())["done"];) {
            var h, v;
            if (v = (h = u["value"])["radius"] * h["scale"], math["Vec2"]["distance"](t, h["pos"]) < (i + v) * a) return !1;
          }
          return !0;
        }, t["_smartFallbackPos"] = function (t, n, r) {
          var i, a, u, s, o, f, h;
          return 0 === t.length ? math.v2(this.randomN(-ReferenceMgr.inst.halfGameW + n + 10, ReferenceMgr.inst.halfGameW - n - 10), this.randomN(this._cMinY + 10, this._cMaxY - 10)) : (u = t[Math["floor"](Math["random"]() * t.length)], a = math.v2(this.randomN(-1, 1), this.randomN(0, 1))["normalize"](), f = Math.max(2.5 * n, 80), i = math.v2(u.pos.x + a.x * f, u.pos.y + a.y * f), s = ReferenceMgr.inst.halfGameW, o = Math.max(-s + n + 10, Math.min(s - n - 10, i.x)), h = r > 0 ? Math.max(r - 100, Math.min(r + 150, i.y)) : Math.max(this._cMinY + 20, Math.min(this._cMaxY - 20, i.y)), math.v2(o, h));
        }, t["getPos2"] = function (t, n, r, i, a) {
          for (var u, s, L = this, I = null, R = math["v2"](0, 0), E = 0; s = t, 0 == (u = R).x && 0 == u.y || u.y - s < L._bottomY + 70 || u.y + s >= ReferenceMgr.inst.halfGameH - 165 || u.x < L._cMinX + s || u.x > L._cMaxX - s;) {
            var D, N, P;
            if (D = ReferenceMgr.inst.RandomInt(i, a), (N = this.parts[D]) && N.length > 0) {
              if ((I = N[P = ReferenceMgr.inst.RandomInt(0, N.length - 1)]).count >= I["maxCount"]) this.parts[D]["splice"](P, 1);else if (R.x = I.pos.x + this.randomN(-I.width / 2, I.width / 2), R.y = I.pos.y + this.randomN(-I.height / 2, I.height / 2), ++E >= 5000) {
                R.x = this.randomN(this._cMinX + t, this._cMaxX - t), R.y = this.randomN(this._bottomY + 70 + t, ReferenceMgr.inst.halfGameH - 165 - t);
                break;
              }
            } else i++, a++;
          }
          return I && I.count++, R;
        }, t["getPos3"] = function (t, n, r, i, a) {
          for (var u, s, L = this, I = null, R = math["v2"](0, 0), E = 0; s = t, 0 == (u = R).x && 0 == u.y || u.y - s <= L._bottomY + 70 || u.y + s >= ReferenceMgr.inst.halfGameH - 165 || u.x > L._cMaxX - s || u.x < L._cMinX + s;) {
            var D, N, P;
            if (D = ReferenceMgr.inst.RandomInt(i, a), (N = this.parts[D]) && N.length > 0) {
              if ((I = N[P = ReferenceMgr.inst.RandomInt(0, N.length - 1)]).count >= I["maxCount"]) this.parts[D]["splice"](P, 1);else if (R.x = I.pos.x + this.randomN(-I.width / 2, I.width / 2), R.y = I.pos.y + this.randomN(-I.height / 2, I.height / 2), ++E >= 5000) {
                R.x = this.randomN(this._cMinX + t, this._cMaxX - t), R.y = this.randomN(this._bottomY + 70 + t, ReferenceMgr.inst.halfGameH - 165 - t);
                break;
              }
            } else i++, a++;
          }
          return I && I.count++, R;
        }, t["initPart"] = function (t) {
          var n, r, i, a;
          switch (this.parts = [], a = ReferenceMgr.inst["gameW"] / 4, i = (ReferenceMgr.inst["halfGameH"] - 290 - ReferenceMgr.inst.stopDownY + 50) / 4, n = [], r = [], this["_cMoveDir"]) {
            case FruitConfig.MoveDirection["DOWN"]:
              n = [-ReferenceMgr.inst.halfGameW + a / 2, -ReferenceMgr.inst.halfGameW + 3 * a / 2, ReferenceMgr.inst.halfGameW - 3 * a / 2, ReferenceMgr.inst.halfGameW - a / 2], r = [ReferenceMgr.inst.stopDownY + 150, ReferenceMgr.inst.stopDownY - 50, ReferenceMgr.inst.stopDownY - 50, ReferenceMgr.inst.stopDownY + 150];
              for (var T = Math.ceil(Math.ceil(a * a / (this.itemRadius * Math.PI * this.itemRadius)) / t), L = 0; L < 20; L++) {
                for (var I = [], R = 0; R < n.length; R++) {
                  var E, D, N;
                  E = n[R], N = r[R] + a * L, D = function () {
                    var t, n;
                    return Pu(t = {}, "pos", 0), Pu(t, "width", 0), Pu(t, "height", 0), Pu(t, "count", 0), Pu(t, "maxCount", 0), (n = t).pos = math["v2"](E, N), n.width = a, n.height = a, n.count = 0, n.maxCount = T, n;
                  }.apply(), I.push(D);
                }
                this.parts.push(I);
              }
              break;
            case FruitConfig.MoveDirection["RIGHT"]:
              r = [this._bottomY - 50 + i / 2, this._bottomY - 50 + 3 * i / 2, this._bottomY - 50 + 5 * i / 2, this._bottomY - 50 + 7 * i / 2];
              for (var P = Math["floor"](Math.ceil(i * i / (this.itemRadius * Math.PI * this.itemRadius)) / t) + 1, G = 0; G < 40; G++) {
                for (var O = [], F = 0; F < r.length; F++) {
                  var B, z, U;
                  z = -ReferenceMgr.inst.halfGameW - 2 * i * (G + 1), U = r[F], B = function () {
                    var t, n;
                    return Pu(t = {}, "pos", 0), Pu(t, "width", 0), Pu(t, "height", 0), Pu(t, "count", 0), Pu(t, "maxCount", 0), (n = t).pos = math["v2"](z, U), n.width = 2 * i, n.height = i, n.count = 0, n.maxCount = P, n;
                  }.apply(), O.push(B);
                }
                this.parts.push(O);
              }
              break;
            case FruitConfig.MoveDirection["LEFT"]:
              r = [this._bottomY - 50 + i / 2, this._bottomY - 50 + 3 * i / 2, this._bottomY - 50 + 5 * i / 2, this._bottomY - 50 + 7 * i / 2];
              for (var H = Math.ceil(Math.ceil(i * i / (this.itemRadius * Math.PI * this.itemRadius)) / t) + 1, V = 0; V < 40; V++) {
                for (var W = [], J = 0; J < r.length; J++) {
                  var j, q, K;
                  j = ReferenceMgr.inst.halfGameW + 2 * i * (V + 1), K = r[J], q = function () {
                    var t, n;
                    return Pu(t = {}, "pos", 0), Pu(t, "width", 0), Pu(t, "height", 0), Pu(t, "count", 0), Pu(t, "maxCount", 0), (n = t).pos = math["v2"](j, K), n.width = 2 * i, n.height = i, n.count = 0, n.maxCount = H, n;
                  }.apply(), W.push(q);
                }
                this.parts.push(W);
              }
              break;
            case FruitConfig.MoveDirection["NONE"]:
              n = [-ReferenceMgr.inst.halfGameW + a / 2, -ReferenceMgr.inst.halfGameW + 3 * a / 2, ReferenceMgr.inst.halfGameW - 3 * a / 2, ReferenceMgr.inst.halfGameW - a / 2], r = [ReferenceMgr.inst.stopDownY + i / 2, ReferenceMgr.inst.stopDownY, ReferenceMgr.inst.stopDownY, ReferenceMgr.inst.stopDownY + i / 2];
              for (var Y = 0; Y < 4; Y++) {
                for (var X = r[Y] + i * Y, Z = [], Q = 0; Q < n.length; Q++) {
                  var $, tt;
                  tt = n[Q], $ = function () {
                    var n, r;
                    return Pu(n = {}, "pos", 0), Pu(n, "width", 0), Pu(n, "height", 0), Pu(n, "count", 0), Pu(n, "maxCount", 0), (r = n).pos = math["v2"](tt, X), r.width = a, r.height = i, r.count = 0, r.maxCount = ReferenceMgr["inst"]["RandomInt"](3, 4) / t, r;
                  }.apply(), Z.push($);
                }
                this.parts.push(Z);
              }
          }
        }, t["shuffleArray"] = function (t) {
          for (var r = t["length"] - 1; r > 0; r--) {
            var i, e;
            i = [t[e = this["random"](0, r)], t[r]], t[r] = i[0], t[e] = i[1];
          }
        }, t["random"] = function (t, n, r) {
          return void 0 === r && (r = !0), r ? t + Math["floor"](Math.random() * (n - t + 1)) : Math.random() * (n - t) + t;
        }, t["randomN"] = function (t, n) {
          return Math["random"]() * (n - t) + t;
        }, t["bubbleSort"] = function (t, n) {
          for (var r = t["length"] - 1, i = 0; i < r; i++) {
            for (var e = !1, a = 0; a < r - i; a++) if (n(t[a], t[a + 1])) {
              var u;
              u = t[a], t[a] = t[a + 1], t[a + 1] = u, e = !0;
            }
            if (!e) break;
          }
          return t;
        }, t["getPt"] = function (t) {
          return 0 == GbzDataManager["ins"]["useSkinId"] ? this["originalPt"][t] : this["pt"][t];
        }, t["getEliminateColor"] = function (t) {
          var n;
          return 0 == GbzDataManager["ins"]["useSkinId"] && (n = this["originalPt"][t]) ? n["particleType"] : 2;
        }, createClass(i, null, [function () {
          var t, n;
          return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t).key = "inst", n.get = function () {
            return this._inst || (ReferenceMgr["inst"]["init"](), this._inst = new i()), this._inst;
          }, n;
        }["bind"](this)["apply"]()]), i;
      }())["_inst"] = null, cclegacy._RF["pop"]();
    }, d;
  }["bind"](this)["apply"]();
});