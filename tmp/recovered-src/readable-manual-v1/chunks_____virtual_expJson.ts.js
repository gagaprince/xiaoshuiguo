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
    f = to;
  return function () {
    var f,
      h = to,
      v = ro,
      l = h[5],
      b = "setters",
      d = "execute";
    Ns && (yo = 0), ls && (Mo = [2, 14, 8, 0, 6, 7, 1, 12, 10, 5, 13, 9, 3, 11, 4]);
    var k,
      m = yo,
      p = Mo["slice"](0);
    return Pu(f = {}, "setters", 0), Pu(f, "execute", 0), (k = f)["setters"] = [function (t) {
      var a = to;
      n = t["applyDecoratedDescriptor"], r = t["inheritsLoose"], i = t["initializerDefineProperty"], e = t["assertThisInitialized"];
    }, function (t) {
      var n = to,
        r = n[7];
      a = t["cclegacy"], u = t["_decorator"], s = t["CCInteger"], o = t["Component"];
    }, null, function (t) {
      c = t["default"];
    }, null], k["execute"] = function () {
      var f,
        h = to,
        v = ro,
        l = h[2],
        b = h[3],
        d = h[5],
        k = h[6],
        g = h[10],
        y = 13,
        w = 14,
        _ = 12,
        M = 11,
        S = "_RF",
        A = "expJson";
      Mo["sort"]();
      var C = [10, 7, 13, 14, 1, 12, 0, 2, 5, 9, 11, 3, 6, 4, 8];
      Cs && (wo = [10, 12, 9, 14, 5, 6, 3, 1, 7, 11, 8, 16, 2, 0, 4, 15, 13]), Cs && ko(C, 6, 13), ks && ko(C, 0, 1), Ds && ko(C, 9, 6);
      var x,
        T,
        L,
        I,
        R,
        E,
        D,
        N = wo["slice"](0);
      a["_RF"]["push"]({}, "6bc54al2YpPu7IDmmJOWzxV", "expJson", void 0), T = u["ccclass"], x = u["property"], t("default", (L = T("expJson"), I = x(function () {
        var t,
          n = to;
        return (t = function () {
          var t,
            n,
            r = to,
            i = "type",
            e = "tooltip",
            a = "displayName";
          return Pu(t = {}, "type", 0), Pu(t, "tooltip", 0), Pu(t, "displayName", 0), (n = t)["type"] = 0, n["tooltip"] = 0, n["displayName"] = 0, n;
        }["apply"]())["type"] = [s], t["tooltip"] = "列宽度设置（像素）", t["displayName"] = "列宽度", t;
      }["apply"]()), L((D = n((E = function (t) {
        var n,
          a,
          u = to,
          s = u[15],
          o = u[20],
          f = u[14],
          h = u[9],
          v = u[12];
        return a = function () {
          for (var n, r, a = to, u = ro, s = a[4], o = a[7], c = (n = arguments)["length"], f = new Array(c), h = 0; h < c; h++) f[h] = n[h];
          return (r = t["call"]["apply"](t, [this]["concat"](f)) || this)["excelData"] = [], i(r, "columnWidths", D, e(r)), r["rowHeight"] = 30, r["headerRowHeight"] = 40, r["fileName"] = "关卡数据_1-200关", r["ruleDescriptions"] = [Kt, "1. 特殊水果不参与区间比例计算，采用直接随机抽取方式生成。", "2. 黑洞最多生成 4 个，位置为固定配置；根据关卡编号对 10 取余，从对应的坐标组中选取。", "3. 问号水果采用纯随机方式抽取生成。", Yt, Xt], r["holeFruitRule"] = Zt, r;
        }, r(a, t), (n = a["prototype"])["onLoad"] = function () {
          this["loadAllLevelsData"]();
        }, n["loadAllLevelsData"] = function () {
          var t = to,
            n = ro,
            r = t[7],
            i = "addEmptyRow";
          this["validateColumnSettings"](), this["excelData"] = [function () {
            for (var t, n = to, r = ro, i = n[2], e = n[4], a = 16, u = 11, s = 15, o = 12, c = 14, f = 13, h = "黑洞数量(动态数据仅供参考)", v = "黑洞补充", l = "规则说明", b = "冰冻水果数量", d = "水果类型", k = "问号水果数量", p = "区间水果数量", g = "障碍物数量", y = "缩放参数", w = "移动朝向", _ = "特殊水果数量", M = "关卡编号", S = "水果布局", A = "区间水果数量(详细)", C = "总数量", x = 0, T = m; x < 17;) switch (++x, T) {
              case 0:
                t = function () {
                  var t,
                    n,
                    r = to,
                    i = ro,
                    e = r[2],
                    a = r[4],
                    u = "缩放参数",
                    s = "区间水果数量(详细)",
                    o = "冰冻水果数量",
                    c = "区间水果数量",
                    f = "规则说明",
                    h = "总数量",
                    v = "水果类型",
                    l = "特殊水果数量",
                    b = "问号水果数量",
                    d = "水果布局",
                    k = "关卡编号",
                    m = "移动朝向",
                    p = "黑洞数量(动态数据仅供参考)",
                    g = "障碍物数量",
                    y = "黑洞补充",
                    w = Gu(N);
                  try {
                    for (w.s(); !(n = w.n()).done;) {
                      var _,
                        M = n.value;
                      if (-1 == M) ;else if (0 == M) {
                        t["缩放参数"] = 0;
                        continue;
                      }
                      if (1 != M) {
                        if (2 != M) {
                          if (3 != M) {
                            if (4 != M) {
                              if (5 != M) {
                                if (6 != M) {
                                  if (7 != M) {
                                    if (8 != M) {
                                      if (9 != M) {
                                        if (10 != M) {
                                          if (11 != M) {
                                            if (12 != M) {
                                              if (13 == M) return t;
                                              14 != M ? 15 != M ? 16 != M || (t["障碍物数量"] = 0) : t["黑洞补充"] = 0 : t["移动朝向"] = 0;
                                            } else t["关卡编号"] = 0;
                                          } else t["黑洞数量(动态数据仅供参考)"] = 0;
                                        } else Pu(_ = {}, "关卡编号", 0), Pu(_, "水果布局", 0), Pu(_, "移动朝向", 0), Pu(_, "总数量", 0), Pu(_, "水果类型", 0), Pu(_, "区间水果数量", 0), Pu(_, "区间水果数量(详细)", 0), Pu(_, "特殊水果数量", 0), Pu(_, "黑洞数量(动态数据仅供参考)", 0), Pu(_, "问号水果数量", 0), Pu(_, "障碍物数量", 0), Pu(_, "冰冻水果数量", 0), Pu(_, "缩放参数", 0), Pu(_, "规则说明", 0), Pu(_, "黑洞补充", 0), t = _;
                                      } else t["水果布局"] = 0;
                                    } else t["问号水果数量"] = 0;
                                  } else t["特殊水果数量"] = 0;
                                } else t["水果类型"] = 0;
                              } else t["总数量"] = 0;
                            } else t["规则说明"] = 0;
                          } else t["区间水果数量"] = 0;
                        } else t["冰冻水果数量"] = 0;
                      } else t["区间水果数量(详细)"] = 0;
                    }
                  } catch (t) {
                    w.e(t);
                  } finally {
                    w.f();
                  }
                }["apply"](), T = 16;
                break;
              case 5:
                t["黑洞数量(动态数据仅供参考)"] = "黑洞数量(动态数据仅供参考)", T = 9;
                break;
              case 7:
                t["黑洞补充"] = "黑洞补充", T = 11;
                break;
              case 6:
                t["规则说明"] = "规则说明", T = 7;
                break;
              case 15:
                t["冰冻水果数量"] = "冰冻水果数量", T = 4;
                break;
              case 12:
                t["水果类型"] = "水果类型", T = 10;
                break;
              case 9:
                t["问号水果数量"] = "问号水果数量", T = 14;
                break;
              case 10:
                t["区间水果数量"] = "区间水果数量", T = 1;
                break;
              case 14:
                t["障碍物数量"] = "障碍物数量", T = 15;
                break;
              case 4:
                t["缩放参数"] = "缩放参数", T = 6;
                break;
              case 13:
                t["移动朝向"] = "移动朝向", T = 3;
                break;
              case 8:
                t["特殊水果数量"] = "特殊水果数量", T = 5;
                break;
              case 16:
                t["关卡编号"] = "关卡编号", T = 2;
                break;
              case 11:
                return t;
              case 2:
                t["水果布局"] = "水果布局", T = 13;
                break;
              case 1:
                t["区间水果数量(详细)"] = "区间水果数量(详细)", T = 8;
                break;
              case 3:
                t["总数量"] = "总数量", T = 12;
            }
          }["apply"]()];
          for (var e = 1; e <= 201; e++) try {
            var a;
            (a = c["inst"]["initLvCfg"](e)) ? this["processLevelData"](e, a) : this["addEmptyRow"](e);
          } catch (t) {
            this["addEmptyRow"](e);
          }
          this["exportToHtmlWithExcelButton"]();
        }, n["validateColumnSettings"] = function () {
          var t = to,
            n = ro,
            r = 14,
            i = "columnWidths",
            e = "length";
          if (this["columnWidths"]["length"] < 14) for (var a = this["columnWidths"]["length"]; a < 14; a++) this["columnWidths"]["push"](100);else this["columnWidths"]["length"] > 14 && (this["columnWidths"] = this["columnWidths"]["slice"](0, 14));
        }, n["processLevelData"] = function (t, n) {
          var r,
            i,
            e = to,
            a = e[4],
            u = e[2],
            s = "countArr",
            o = 0;
          if (Uu(2 * Ou(zu(4946))) <= Uu(Ou(11765) + Ou(2564)) && (o += 0), Fu(187 / 3) < Fu(Bu((Ou(96) + Ou(8) + Ou(83)) / 3)) && (o += 0), i = 0, n["countArr"]) for (var c in n["countArr"]) {
            var f;
            if ((f = n["countArr"][c]) && "object" == Du(f)) for (var h in f) {
              var v;
              v = f[h], "number" == Du(v) && (i += v);
            }
          }
          r = function () {
            var r,
              e,
              a = to,
              u = ro,
              s = a[2],
              c = a[8],
              f = a[6],
              h = a[4],
              v = a[13],
              l = a[3],
              b = a[5],
              d = a[12],
              k = "countArr",
              m = "holeFruitRule",
              p = "split",
              g = "length",
              y = "ruleDescriptions",
              w = Gu(_o);
            try {
              for (w.s(); !(e = w.n()).done;) {
                var _ = e.value;
                if (-1 == _) ;else {
                  if (0 == _) {
                    r["关卡编号"] = t;
                    continue;
                  }
                  if (1 == _) {
                    r["缩放参数"] = n["instensity"] || n["scaleExp"] || 0;
                    continue;
                  }
                  if (2 == _) {
                    r["区间水果数量"] = this["formatCountArr2"](n["countArr"]);
                    continue;
                  }
                  if (3 == _) {
                    r = function () {
                      for (var t, n, r = to, i = ro, e = r[4], a = r[2], u = 15, s = 11, c = 13, f = 14, h = 16, v = 12, l = "黑洞数量(动态数据仅供参考)", b = "障碍物数量", d = "问号水果数量", k = "区间水果数量", m = "关卡编号", p = "移动朝向", g = "水果布局", y = "总数量", w = "水果类型", _ = "区间水果数量(详细)", M = "特殊水果数量", S = "冰冻水果数量", A = "缩放参数", C = "规则说明", x = "黑洞补充", T = 0, L = o; T < 17;) switch (++T, L) {
                        case 10:
                          n["黑洞数量(动态数据仅供参考)"] = 0, L = 15;
                          break;
                        case 1:
                          n["障碍物数量"] = 0, L = 11;
                          break;
                        case 15:
                          n["问号水果数量"] = 0, L = 1;
                          break;
                        case 8:
                          n["区间水果数量"] = 0, L = 3;
                          break;
                        case 0:
                          Pu(t = {}, "关卡编号", 0), Pu(t, "移动朝向", 0), Pu(t, "水果布局", 0), Pu(t, "总数量", 0), Pu(t, "水果类型", 0), Pu(t, "区间水果数量", 0), Pu(t, "区间水果数量(详细)", 0), Pu(t, "特殊水果数量", 0), Pu(t, "黑洞数量(动态数据仅供参考)", 0), Pu(t, "问号水果数量", 0), Pu(t, "障碍物数量", 0), Pu(t, "冰冻水果数量", 0), Pu(t, "缩放参数", 0), Pu(t, "规则说明", 0), Pu(t, "黑洞补充", 0), n = t, L = 9;
                          break;
                        case 4:
                          n["水果类型"] = 0, L = 8;
                          break;
                        case 13:
                          n["规则说明"] = 0, L = 14;
                          break;
                        case 16:
                          n["总数量"] = 0, L = 4;
                          break;
                        case 9:
                          n["关卡编号"] = 0, L = 6;
                          break;
                        case 5:
                          n["特殊水果数量"] = 0, L = 10;
                          break;
                        case 12:
                          n["缩放参数"] = 0, L = 13;
                          break;
                        case 14:
                          n["黑洞补充"] = 0, L = 7;
                          break;
                        case 11:
                          n["冰冻水果数量"] = 0, L = 12;
                          break;
                        case 3:
                          n["区间水果数量(详细)"] = 0, L = 5;
                          break;
                        case 2:
                          n["水果布局"] = 0, L = 16;
                          break;
                        case 7:
                          return n;
                        case 6:
                          n["移动朝向"] = 0, L = 2;
                      }
                    }["apply"]();
                    continue;
                  }
                  if (4 == _) {
                    r["冰冻水果数量"] = n["iceCount"] || 0;
                    continue;
                  }
                  if (5 == _) {
                    r["水果类型"] = this["formatArray"](n["typeArr"]);
                    continue;
                  }
                }
                if (6 != _) {
                  if (7 != _) {
                    if (8 != _) {
                      if (9 != _) {
                        if (10 != _) {
                          if (11 == _) return r;
                          12 != _ ? 13 != _ ? 14 != _ ? 15 != _ ? 16 != _ || (r["障碍物数量"] = n["obsCount"] || 0) : r["区间水果数量(详细)"] = this["formatCountArr"](n["countArr"]) : r["总数量"] = i : r["特殊水果数量"] = n["specialCount"] || 0 : r["问号水果数量"] = n["randomBox"] || 0;
                        } else r["规则说明"] = t <= this["ruleDescriptions"]["length"] ? this["ruleDescriptions"][t - 1] : "";
                      } else r["水果布局"] = this["getitemLayoutText"](n["itemLayout"]);
                    } else r["黑洞补充"] = t <= this["holeFruitRule"]["split"](Qt)["length"] ? this["holeFruitRule"]["split"](Qt)[t - 1] : "";
                  } else r["黑洞数量(动态数据仅供参考)"] = this["formatGHoleArray"](n["holeItemTypeArr"]) || 0;
                } else r["移动朝向"] = this["getMoveDirText"](n["moveDir"]);
              }
            } catch (t) {
              w.e(t);
            } finally {
              w.f();
            }
          }["bind"](this)["apply"](), this["excelData"]["push"](r);
        }, n["addEmptyRow"] = function (t) {
          var n,
            r = to,
            i = "ruleDescriptions",
            e = "规则说明";
          n = function () {
            for (var n, r = to, i = ro, e = r[2], a = r[3], u = r[4], s = 0, o = C; s < o.length; s++) {
              var c = o[s];
              if (-1 == c) ;else if (0 == c) {
                n["缩放参数"] = 0;
                continue;
              }
              if (1 != c) {
                if (2 != c) {
                  if (3 != c) {
                    if (4 != c) {
                      if (5 != c) {
                        if (6 != c) {
                          if (7 != c) {
                            if (8 == c) return n;
                            9 != c ? 10 != c ? 11 != c ? 12 != c ? 13 != c ? 14 != c || (n["水果布局"] = "") : n["移动朝向"] = "" : n["水果类型"] = "" : n["问号水果数量"] = 0 : n["关卡编号"] = t : n["黑洞数量(动态数据仅供参考)"] = 0;
                          } else n = function () {
                            var t,
                              n,
                              r = to,
                              i = ro,
                              e = r[2],
                              a = r[4],
                              u = "水果布局",
                              s = "区间水果数量",
                              o = "关卡编号",
                              c = "移动朝向",
                              f = "总数量",
                              h = "水果类型",
                              v = "区间水果数量(详细)",
                              l = "特殊水果数量",
                              b = "黑洞数量(动态数据仅供参考)",
                              d = "问号水果数量",
                              k = "障碍物数量",
                              m = "冰冻水果数量",
                              g = "缩放参数",
                              y = Gu(p);
                            try {
                              for (y.s(); !(n = y.n()).done;) {
                                var w = n.value;
                                if (-1 == w) ;else {
                                  if (0 == w) {
                                    t["水果布局"] = 0;
                                    continue;
                                  }
                                  if (1 == w) {
                                    t["区间水果数量"] = 0;
                                    continue;
                                  }
                                  if (2 == w) {
                                    var _;
                                    Pu(_ = {}, "关卡编号", 0), Pu(_, "移动朝向", 0), Pu(_, "水果布局", 0), Pu(_, "总数量", 0), Pu(_, "水果类型", 0), Pu(_, "区间水果数量", 0), Pu(_, "区间水果数量(详细)", 0), Pu(_, "特殊水果数量", 0), Pu(_, "黑洞数量(动态数据仅供参考)", 0), Pu(_, "问号水果数量", 0), Pu(_, "障碍物数量", 0), Pu(_, "冰冻水果数量", 0), Pu(_, "缩放参数", 0), t = _;
                                    continue;
                                  }
                                  if (3 == w) {
                                    t["冰冻水果数量"] = 0;
                                    continue;
                                  }
                                  if (4 == w) return t;
                                  if (5 == w) {
                                    t["黑洞数量(动态数据仅供参考)"] = 0;
                                    continue;
                                  }
                                  if (6 == w) {
                                    t["总数量"] = 0;
                                    continue;
                                  }
                                  if (7 == w) {
                                    t["水果类型"] = 0;
                                    continue;
                                  }
                                  if (8 == w) {
                                    t["移动朝向"] = 0;
                                    continue;
                                  }
                                  if (9 == w) {
                                    t["障碍物数量"] = 0;
                                    continue;
                                  }
                                  if (10 == w) {
                                    t["特殊水果数量"] = 0;
                                    continue;
                                  }
                                  if (11 == w) {
                                    t["缩放参数"] = 0;
                                    continue;
                                  }
                                  if (12 == w) {
                                    t["区间水果数量(详细)"] = 0;
                                    continue;
                                  }
                                  if (13 == w) {
                                    t["问号水果数量"] = 0;
                                    continue;
                                  }
                                }
                                14 != w || (t["关卡编号"] = 0);
                              }
                            } catch (t) {
                              y.e(t);
                            } finally {
                              y.f();
                            }
                          }["apply"]();
                        } else n["冰冻水果数量"] = 0;
                      } else n["特殊水果数量"] = 0;
                    } else n["区间水果数量"] = "";
                  } else n["障碍物数量"] = 0;
                } else n["区间水果数量(详细)"] = "";
              } else n["总数量"] = 0;
            }
          }["apply"](), t <= this["ruleDescriptions"]["length"] ? n["规则说明"] = this["ruleDescriptions"][t - 1] : n["规则说明"] = "", this["excelData"]["push"](n);
        }, n["formatArray"] = function (t) {
          var n = to;
          return t && Array["isArray"](t) ? t["map"](function (t) {
            return t["length"];
          })["join"]($t) : "";
        }, n["formatGHoleArray"] = function (t) {
          var n = to;
          return t && Array["isArray"](t) ? t["map"](function (t) {
            return t["length"];
          })["join"]($t) : "";
        }, n["formatCountArr"] = function (t) {
          var n = to;
          return t ? Object["values"](t)["map"](function (t) {
            var n = to,
              r = n[4];
            return "object" == Du(t) ? tn + Object["values"](t)["join"]($t) + nn : "";
          })["join"](Qt) : "";
        }, n["formatCountArr2"] = function (t) {
          var n = to;
          return t ? Object["values"](t)["map"](function (t) {
            var n = to[4];
            return "object" == Du(t) ? Object["values"](t)["reduce"](function (t, n) {
              return t + n;
            }, 0) : 0;
          })["join"]($t) : "";
        }, n["getitemLayoutText"] = function (t) {
          return t ? "网格" : "";
        }, n["getMoveDirText"] = function (t) {
          var n = to[1];
          switch (t) {
            case 0:
              return rn;
            case 1:
              return "上到下";
            case 2:
              return "左到右";
            case 3:
              return "右到左";
            default:
              return "未知(" + t + en;
          }
        }, n["getFullRuleDescription"] = function () {
          var t = to;
          return an + this["ruleDescriptions"]["join"](Qt);
        }, n["exportToHtmlWithExcelButton"] = function () {
          var t,
            n,
            r,
            i = to,
            e = i[5],
            a = i[10],
            u = i[4],
            s = i[3],
            o = "excelData",
            c = "length",
            f = "fileName";
          t = this, n = Object["keys"](this["excelData"][0]), r = un, r += "<style>", r += sn, r += on, r += cn, r += fn, r += "tr:nth-child(even) { background-color: #f2f2f2; }", r += "tr:hover { background-color: #ddd; }", r += ".rule-cell { white-space: pre-wrap; }", r += hn, r += "#exportBtn:hover { background-color: #45a049; }", r += vn, r += "</style>", r += ln, r += "</head><body>", r += "<h2>关卡数据导出 (" + new Date()["toLocaleDateString"]() + ")</h2>", r += "<div class=\"info-box\">", r += "<p>共 " + (this["excelData"]["length"] - 1) + " 个关卡数据</p>", r += "<p>规则分布：前6关各显示一条规则，第7关显示完整规则，其他关无规则</p>", r += "</div>", r += "<button id=\"exportBtn\">导出 Excel 文件</button>", r += "<table id=\"levelTable\"><thead><tr>", n["forEach"](function (n, i) {
            var e = to;
            r += "<th style=\"width:" + (t["columnWidths"][i] || 100) + "px; height:" + t["headerRowHeight"] + "px\">" + n + "</th>";
          }), r += "</tr></thead><tbody>";
          for (var h = function () {
              var i = to,
                e = ro,
                a = i[2],
                u = "rowHeight",
                s = "规则说明",
                o = "length",
                c = t["excelData"][v],
                f = t["rowHeight"];
              c["规则说明"] && c["规则说明"]["length"] > 100 && (f = Math["max"](t["rowHeight"], 20 * Math["ceil"](c["规则说明"]["length"] / 50))), r += "<tr style=\"height:" + f + "px\">", n["forEach"](function (n) {
                var i = to,
                  e = i[2],
                  a = void 0 !== c[n] ? c[n] : "",
                  u = "规则说明" === n ? " class=\"rule-cell\"" : "",
                  s = t["escapeHtml"](a)["replace"](/\n/g, "<br>");
                r += "<td" + u + bn + s + "</td>";
              }), r += "</tr>";
            }, v = 1; v < this["excelData"]["length"]; v++) h();
          r += "</tbody></table>", r += kn + JSON["stringify"](this["columnWidths"]) + mn + this["fileName"] + pn, r += "</body></html>", this["downloadHtmlTable"](r, this["fileName"] + ".html");
        }, n["escapeHtml"] = function (t) {
          var n = to,
            r = n[2],
            i = n[4],
            e = "replace";
          return null == t ? "" : String(t)["replace"](/&/g, "&amp;")["replace"](/</g, "&lt;")["replace"](/>/g, "&gt;")["replace"](/"/g, "&quot;")["replace"](/'/g, "&#039;");
        }, n["downloadHtmlTable"] = function (t, n) {
          var r,
            i,
            e = to,
            a = e[3],
            u = e[13],
            s = e[9],
            o = e[2],
            c = "href",
            f = "body";
          r = new Blob([t], function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "type";
              return (t = Pu({}, "type", 0))["type"] = 0, t;
            }["apply"]())["type"] = "text/html;charset=utf-8", t;
          }["apply"]()), (i = document["createElement"](Gt))["href"] = URL["createObjectURL"](r), i["download"] = n, document["body"]["appendChild"](i), i["click"](), document["body"]["removeChild"](i), URL["revokeObjectURL"](i["href"]);
        }, a;
      }(o))["prototype"], "columnWidths", [I], (Pu(f = {}, "configurable", !0), Pu(f, "enumerable", !0), Pu(f, "writable", !0), Pu(f, "initializer", function () {
        var t = ro,
          n = 80,
          r = 60;
        return [80, 60, 60, 60, 80, 100, 120, 80, 80, 80, 80, 80, 80, 300];
      }), f)), R = E)) || R)), a["_RF"]["pop"]();
    }, k;
  }["bind"](this)["apply"]();
});