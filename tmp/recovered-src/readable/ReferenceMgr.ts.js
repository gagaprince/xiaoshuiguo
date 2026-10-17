(function (t) {
  var createClass, cclegacy, view, sys, math, Quat, FruitConfig, LevelConfig;
  return function () {
    var c,
      f,
      b = [5, 8, 0, 2, 4, 1, 9, 7, 3, 6];
    return Ms && Tc(b, 1, 5), bs && Tc(b, 9, 7), Fu(51.25) >= Fu(Bu((Ou(10) + Ou(rs) + Ou(88) + Ou(ns)) / 4)) && Tc(b, 8, 5), Pu(c = {}, "setters", 0), Pu(c, "execute", 0), (f = c).setters = [function (t) {
      createClass = t["createClass"];
    }, function (t) {
      cclegacy = t["cclegacy"], view = t["view"], sys = t["sys"], math = t["math"], Quat = t["Quat"];
    }, function (t) {
      FruitConfig = t["FruitConfig"];
    }, function (t) {
      LevelConfig = t["default"];
    }], f.execute = function () {
      var c;
      cclegacy._RF["push"]({}, "3b25a+n9QZLloPCOi2V2rEj", "ReferenceMgr", void 0), c = t("ReferenceLvInfo", function () {
        this["typeArr"] = [], this["countArr"] = [], this["scaleExp"] = 1, this["moveDir"] = FruitConfig["MoveDirection"]["NONE"], this["itemLayout"] = !1, this["itemConnet"] = !1, this["holeItemTypeArr"] = [], this["randomBox"] = 0, this["woodenObs"] = 0, this["obsCount"] = 0, this["iceCount"] = 0;
      }), t("default", function () {
        var t, r;
        return (t = (r = function () {
          this["useSkinId_"] = 0, this["visibleSize_"] = null, this["halfGameH_"] = 0, this["halfGameW_"] = 0, this["stopDownY_"] = 0, this["stopMoveX_"] = 0, this["fallX_"] = 0, this["curTheme_"] = 0;
        })["prototype"])["init"] = function () {
          this.visibleSize_ = view["getVisibleSize"](), this["halfGameH_"] = this.visibleSize_["height"] / 2, this["halfGameW_"] = this.visibleSize_["width"] / 2;
        }, t["initLvCfg"] = function (t) {
          return this["stopMoveX"] = 0, this["fallX"] = 0, this["curTheme_"] = Math["floor"](Math["max"](1, t - 1) / 10 % 4), this["stopDownY_"] = 728 - this["halfGameH"], this["initLvConfig"](t);
        }, t["initLvConfig"] = function (t) {
          var n;
          if ((n = new c()).typeArr = [], n.countArr = [], n.scaleExp = 1, n.moveDir = FruitConfig.MoveDirection.NONE, n.itemLayout = !1, n.itemConnet = !1, n.holeItemTypeArr = [], n.randomBox = 0, n.woodenObs = 0, n.obsCount = 0, n.iceCount = 0, 1 == t) {
            for (var St = [], At = [], Ct = 1; Ct < 2; Ct++) St.push(Ct), At.push(4);
            n.typeArr.push(St), n.countArr.push(At), n.moveDir = FruitConfig.MoveDirection.DOWN;
          } else if (2 == t) {
            if (sys["platform"] == sys["Platform"]["BYTEDANCE_MINI_GAME"]) {
              for (var xt = [], Tt = [], Lt = 1; Lt <= 10; Lt++) xt.push(Lt), Tt.push(4);
              n.typeArr.push(xt), n.countArr.push(Tt), n.moveDir = FruitConfig.MoveDirection.NONE;
            } else {
              for (var It = LevelConfig.getIns().lv2Config["oneCreatreN"], Rt = LevelConfig.getIns().lv2Config["twoCreatreN"], Et = 0, Dt = 0; Dt < 3; Dt++) {
                var Nt, Pt, Gt;
                Gt = [], Pt = [], Nt = LevelConfig.getIns().lv2Config.typeBase + LevelConfig.getIns().lv2Config.typeStage * Dt, 2 === Dt && (Nt += LevelConfig.getIns().lv2Config["lastTypeAdd"]), Nt = this.getMaxType(Nt);
                for (var Ot = 1; Ot <= Nt && Et < LevelConfig.getIns().lv2Config.allCreateN; Ot++) {
                  var Ft;
                  Gt.push(Ot), Ft = 2, Dt > 1 && (Ft *= this.RandomInt(1, LevelConfig.getIns().lv2Config.lastMultiple)), Et += Ft, Pt.push(Ft);
                }
                if (0 === Dt) for (; Et < It;) Gt.push(this.RandomInt(1, Nt)), Et += 2, Pt.push(2);else if (1 === Dt) for (; Et < Rt;) Gt.push(this.RandomInt(1, Nt)), Et += 2, Pt.push(2);else if (2 === Dt) for (; Et < LevelConfig.getIns().lv2Config.allCreateN;) Gt.push(this.RandomInt(1, Nt)), Et += 2, Pt.push(2);
                n.typeArr.push(Gt), n.countArr.push(Pt);
              }
              n.moveDir = FruitConfig.MoveDirection.DOWN;
            }
          } else if (3 == t || t % 10 == 3 || t % 10 == 1 || t > 10 && t % 10 == 2 || 5 == t || t % 10 == 5) {
            var Bt, zt, Ut;
            zt = LevelConfig.getIns().lv2_3_5Config.num100Base1, Bt = LevelConfig.getIns().lv2_3_5Config.num100Base3, t % 10 == 1 && 3 === this.curTheme && (n.obsCount = Math.min(LevelConfig.getIns().lv2_3_5Config["obsMax"], LevelConfig.getIns().lv2_3_5Config["obsBase"] + Math.floor(t / LevelConfig.getIns().lv2_3_5Config["obsAdd"]))), t % 10 == 1 && 2 === this.curTheme && (n.iceCount = Math.min(LevelConfig.getIns().lv2_3_5Config["iceMax"], LevelConfig.getIns().lv2_3_5Config["iceBase"] + Math.floor(t / LevelConfig.getIns().lv2_3_5Config["iceAdd"]))), t % 10 == 2 && (n.scaleExp = .9, n.woodenObs = LevelConfig.getIns().lv2_3_5Config["woodenObsMax"], Math.floor(t / LevelConfig.getIns().lv2_3_5Config["woodenObsEasylv"]) % LevelConfig.getIns().lv2_3_5Config["woodenObsEasyLv2"] == 0 && (n.woodenObs = LevelConfig.getIns().lv2_3_5Config["woodenObsBase"]), zt = LevelConfig.getIns().lv2_3_5Config["num100Base1_2"], Bt = LevelConfig.getIns().lv2_3_5Config["num100Base3_2"]), Ut = LevelConfig.getIns().lv2_3_5Config.num10Base, t < 10 ? Ut += LevelConfig.getIns().lv2_3_5Config["num10Add"] * (t - 3) : t > 10 && t < 30 ? Ut = LevelConfig.getIns().lv2_3_5Config.num30Base + LevelConfig.getIns().lv2_3_5Config.num30Add * (t - 11) : t > 30 && t < 100 ? Ut = Math.min(zt, LevelConfig.getIns().lv2_3_5Config.num100Base2 + LevelConfig.getIns().lv2_3_5Config.num100Add1 * Math.floor((t - 30) / LevelConfig.getIns().lv2_3_5Config.num100reduce1)) : t >= 100 && (Ut = Math.min(Bt, zt + LevelConfig.getIns().lv2_3_5Config.num100Add2 * Math.floor((t - 100) / LevelConfig.getIns().lv2_3_5Config.num100reduce2)));
            for (var Ht = Math.floor(LevelConfig.getIns().lv2_3_5Config.onsNumScale * Ut), Vt = Math.floor(LevelConfig.getIns().lv2_3_5Config.TwoNumScale * Ut), Wt = 0, Jt = 0; Jt < 3; Jt++) {
              var jt, qt, Kt;
              jt = [], qt = [], Kt = LevelConfig.getIns().lv2_3_5Config.typeBase + LevelConfig.getIns().lv2_3_5Config.typeStage * Jt, 2 === Jt && (Kt += Math.min(LevelConfig.getIns().lv2_3_5Config.lastTypeMin, Math.floor(t / LevelConfig.getIns().lv2_3_5Config.lastTypeScale))), Kt = this.getMaxType(Kt);
              for (var Yt = 1; Yt <= Kt && Wt < Ut; Yt++) {
                var Xt;
                jt.push(Yt), Xt = 2, Jt > 1 && (Xt *= this.RandomInt(1, 2)), Wt += Xt, qt.push(Xt);
              }
              if (0 === Jt) for (; Wt < Ht;) jt.push(this.RandomInt(1, Kt)), Wt += 2, qt.push(2);else if (1 === Jt) for (; Wt < Vt;) jt.push(this.RandomInt(1, Kt)), Wt += 2, qt.push(2);else if (2 == Jt) for (; Wt < Ut;) jt.push(this.RandomInt(1, Kt)), Wt += 2, qt.push(2);
              n.typeArr.push(jt), n.countArr.push(qt);
            }
            n.moveDir = FruitConfig.MoveDirection.DOWN;
          } else if (4 == t || t % 10 == 4) {
            var Zt;
            this.stopMoveX = this.halfGameW - 250, this.fallX = this.halfGameW - 100, Zt = LevelConfig.getIns().lv4Config.num10Base, t > 10 && t < 30 ? Zt = LevelConfig.getIns().lv4Config.num30Base + LevelConfig.getIns().lv4Config.num30Add * Math.floor((t - 10) / LevelConfig.getIns().lv4Config.num30reduce) : t > 30 && t < 100 ? Zt = Math.min(LevelConfig.getIns().lv4Config.num100Base1, LevelConfig.getIns().lv4Config.num100Base2 + LevelConfig.getIns().lv4Config.num100Add1 * Math.floor((t - 30) / LevelConfig.getIns().lv4Config.num100reduce1)) : t >= 100 && (Zt = Math.min(LevelConfig.getIns().lv4Config.num100Base3, LevelConfig.getIns().lv4Config.num100Base4 + LevelConfig.getIns().lv4Config.num100Add2 * Math.floor((t - 100) / LevelConfig.getIns().lv4Config.num100reduce2)));
            for (var Qt = Math.floor(LevelConfig.getIns().lv4Config.onsNumScale * Zt), $t = Math.floor(LevelConfig.getIns().lv4Config.TwoNumScale * Zt), tn = 0, nn = 0; nn < 3; nn++) {
              var rn, en, an;
              rn = [], an = [], en = LevelConfig.getIns().lv4Config.typeBase + LevelConfig.getIns().lv4Config.typeStage * nn, 2 == nn && (en += Math.min(LevelConfig.getIns().lv4Config.lastTypeMin, Math.floor(t / LevelConfig.getIns().lv4Config.lastTypeScale))), en = this.getMaxType(en);
              for (var un = 1; un <= en && tn < Zt; un++) {
                var sn;
                rn.push(un), sn = 2, nn > 0 && (sn *= this.RandomInt(1, LevelConfig.getIns().lv4Config.lastMultiple)), tn += sn, an.push(sn);
              }
              if (0 === nn) for (; tn < Qt;) rn.push(this.RandomInt(1, en)), tn += 2, an.push(2);else if (1 == nn) for (; tn < $t;) rn.push(this.RandomInt(1, en)), tn += 2, an.push(2);else if (2 == nn) for (; tn < Zt;) rn.push(this.RandomInt(1, en)), tn += 2, an.push(2);
              n.typeArr.push(rn), n.countArr.push(an);
            }
            n.moveDir = FruitConfig.MoveDirection["RIGHT"];
          } else if (6 == t || t % 10 == 6) n.itemLayout = !0, n.randomBox = Math.min(LevelConfig.getIns().lv6Config.randomMin, LevelConfig.getIns().lv6Config.randomBase + Math.floor(t / LevelConfig.getIns().lv6Config.randomScale)), n.moveDir = FruitConfig.MoveDirection.DOWN;else if (7 == t || t % 10 == 7) {
            var on;
            on = LevelConfig.getIns().lv7Config.num10Base, t > 10 && t < 30 ? on = LevelConfig.getIns().lv7Config.num30Base + LevelConfig.getIns().lv7Config.num30Add * Math.floor((t - 10) / +LevelConfig.getIns().lv7Config.num30reduce) : t > 30 && t < 100 ? on = Math.min(LevelConfig.getIns().lv7Config.num100Base1, LevelConfig.getIns().lv7Config.num100Base2 + LevelConfig.getIns().lv7Config.num100Add1 * Math.floor((t - 30) / LevelConfig.getIns().lv7Config.num100reduce1)) : t >= 100 && (on = Math.min(LevelConfig.getIns().lv7Config.num100Base3, LevelConfig.getIns().lv7Config.num100Base4 + LevelConfig.getIns().lv7Config.num100Add2 * Math.floor((t - 100) / LevelConfig.getIns().lv7Config.num100reduce2)));
            for (var cn = 0, fn = Math.floor(LevelConfig.getIns().lv7Config.onsNumScale * on), hn = Math.floor(LevelConfig.getIns().lv7Config.TwoNumScale * on), vn = 0; vn < 3; vn++) {
              var ln, bn, dn;
              bn = [], ln = [], dn = LevelConfig.getIns().lv7Config.typeBase + LevelConfig.getIns().lv7Config.typeStage * vn, 2 == vn && (dn += Math.min(LevelConfig.getIns().lv7Config.lastTypeMin, Math.floor(t / LevelConfig.getIns().lv7Config.lastTypeScale))), dn = this.getMaxType(dn);
              for (var kn = 1; kn <= dn && cn < on; kn++) {
                var mn;
                bn.push(kn), mn = 2, vn > 0 && (mn *= this.RandomInt(1, LevelConfig.getIns().lv7Config.lastMultiple)), cn += mn, ln.push(mn);
              }
              if (0 == vn) for (; cn < fn;) bn.push(this.RandomInt(1, dn)), cn += 2, ln.push(2);else if (1 == vn) for (; cn < hn;) bn.push(this.RandomInt(1, dn)), cn += 2, ln.push(2);else if (2 == vn) for (; cn < on;) bn.push(this.RandomInt(1, dn)), cn += 2, ln.push(2);
              n.typeArr.push(bn), n.countArr.push(ln);
            }
            n.randomBox = Math.min(LevelConfig.getIns().lv7Config.randomMin, LevelConfig.getIns().lv7Config.randomBase + Math.floor(t / LevelConfig.getIns().lv7Config.randomScale)), n.moveDir = FruitConfig.MoveDirection.DOWN;
          } else if (8 == t || t % 10 == 8) {
            var pn;
            pn = LevelConfig.getIns().lv8Config.num10Base, t > 10 && t < 30 ? pn = LevelConfig.getIns().lv8Config.num30Base + LevelConfig.getIns().lv8Config.num30Add * Math.floor((t - 10) / LevelConfig.getIns().lv8Config.num30reduce) : t > 30 && t < 100 ? pn = Math.min(LevelConfig.getIns().lv8Config.num100Base1, LevelConfig.getIns().lv8Config.num100Base2 + LevelConfig.getIns().lv8Config.num100Add1 * Math.floor((t - 30) / LevelConfig.getIns().lv8Config.num100reduce1)) : t >= 100 && (pn = Math.min(LevelConfig.getIns().lv8Config.num100Base3, LevelConfig.getIns().lv8Config.num100Base4 + LevelConfig.getIns().lv8Config.num100Add2 * Math.floor((t - 100) / LevelConfig.getIns().lv8Config.num100reduce2)));
            for (var gn = Math.floor(LevelConfig.getIns().lv8Config.onsNumScale * pn), yn = Math.floor(LevelConfig.getIns().lv8Config.TwoNumScale * pn), wn = 0, _n = 0; _n < 3; _n++) {
              var Mn, Sn, An;
              An = [], Sn = [], Mn = LevelConfig.getIns().lv8Config.typeBase + LevelConfig.getIns().lv8Config.typeStage * _n, 2 === _n && (Mn += Math.min(LevelConfig.getIns().lv8Config.lastTypeMin, Math.floor(t / LevelConfig.getIns().lv8Config.lastTypeScale))), Mn = this.getMaxType(Mn);
              for (var Cn = 1; Cn <= Mn && pn < wn; Cn++) {
                var xn;
                An.push(Cn), xn = 2, _n > 0 && (xn *= this.RandomInt(1, LevelConfig.getIns().lv8Config.lastMultiple)), wn += xn, Sn.push(xn);
              }
              if (0 == _n) for (; wn < gn;) An.push(this.RandomInt(1, Mn)), wn += 2, Sn.push(2);else if (1 == _n) for (; wn < yn;) An.push(this.RandomInt(1, Mn)), wn += 2, Sn.push(2);else if (2 == _n) for (; wn < pn;) An.push(this.RandomInt(1, Mn)), wn += 2, Sn.push(2);
              n.typeArr.push(An), n.countArr.push(Sn);
            }
            n.itemConnet = !0, n.moveDir = FruitConfig.MoveDirection.DOWN;
          } else if (9 == t || t % 10 == 9) {
            var Tn;
            this.stopMoveX = 250 - this.halfGameW, this.fallX = 100 - this.halfGameW, Tn = LevelConfig.getIns().lv9Config.num10Base, t > 10 && t < 30 ? Tn = LevelConfig.getIns().lv9Config.num30Base + LevelConfig.getIns().lv9Config.num30Add * Math.floor((t - 10) / LevelConfig.getIns().lv9Config.num30reduce) : t > 30 && t < 100 ? Tn = Math.min(LevelConfig.getIns().lv9Config.num100Base1, LevelConfig.getIns().lv9Config.num100Base2 + LevelConfig.getIns().lv9Config.num100Add1 * Math.floor((t - 30) / LevelConfig.getIns().lv9Config.num100reduce1)) : t >= 100 && (Tn = Math.min(LevelConfig.getIns().lv9Config.num100Base3, LevelConfig.getIns().lv9Config.num100Base4 + LevelConfig.getIns().lv9Config.num100Add2 * Math.floor((t - 100) / LevelConfig.getIns().lv9Config.num100reduce2)));
            for (var Ln = Math.floor(LevelConfig.getIns().lv9Config.onsNumScale * Tn), In = Math.floor(LevelConfig.getIns().lv9Config.TwoNumScale * Tn), Rn = 0, En = 0; En < 3; En++) {
              var Dn, Nn, Pn;
              Dn = [], Pn = [], Nn = LevelConfig.getIns().lv9Config.typeBase + LevelConfig.getIns().lv9Config.typeStage * En, 2 === En && (Nn += Math.min(LevelConfig.getIns().lv9Config.lastTypeMin, Math.floor(t / LevelConfig.getIns().lv9Config.lastTypeScale))), Nn = this.getMaxType(Nn);
              for (var Gn = 1; Gn <= Nn && Rn < Tn; Gn++) {
                var On;
                Dn.push(Gn), On = 2, En > 0 && (On *= this.RandomInt(1, LevelConfig.getIns().lv9Config.lastMultiple)), Rn += On, Pn.push(On);
              }
              if (0 == En) for (; Rn < Ln;) Dn.push(this.RandomInt(1, Nn)), Rn += 2, Pn.push(2);else if (1 == En) for (; Rn < In;) Dn.push(this.RandomInt(1, Nn)), Rn += 2, Pn.push(2);else if (2 == En) for (; Rn < Tn;) Dn.push(this.RandomInt(1, Nn)), Rn += 2, Pn.push(2);
              n.typeArr.push(Dn), n.countArr.push(Pn);
            }
            n.moveDir = FruitConfig.MoveDirection["LEFT"];
          } else if (10 == t || t % 10 == 0) for (var Fn, Bn, zn, Un, Hn, Vn = 0, Wn = b; Vn < Wn.length; Vn++) {
            switch (Wn[Vn]) {
              case 0:
                zn = Math["ceil"]((this["halfGameH"] - 190 - this["stopDownY"] + 100) * this["visibleSize"]["width"] / (55 * Math["PI"] * 55)), Un = [], Hn = 0, Fn = Math.min(LevelConfig.getIns().lv10Config["holeBase"] + Math.floor(t / LevelConfig.getIns().lv10Config["holeScale"]), LevelConfig.getIns().lv10Config["holeMax"]);
                break;
              case 1:
                for (var Jn = 0; Jn < Un.length; Jn++) {
                  var jn;
                  jn = this.RandomInt(0, n.holeItemTypeArr.length - 1), n.holeItemTypeArr[jn].push(Un[Jn]);
                }
                break;
              case 2:
                Fn += LevelConfig.getIns().lv10Config["holeAddbase"] * (n.holeItemTypeArr.length - 2);
                break;
              case 3:
                for (var qn = (Fn - Un.length) / 2, Kn = 0; Kn < qn; Kn++) {
                  var Yn;
                  Yn = Xn[this.RandomInt(0, Xn.length - 1)], Un.push(Yn), Un.push(Yn);
                }
                break;
              case 4:
                for (var Xn = this["ranTypeArr"](28), Zn = 0; Zn < 2; Zn++) {
                  for (var Qn = [], $n = [], tr = 0 === Zn ? 0 : 4, nr = 0 === Zn ? 4 : Xn.length, rr = tr; rr < nr && Hn < zn; rr++) {
                    var ir;
                    Qn.push(Xn[rr]), ir = Math["random"]() > .5 ? 2 : 4, 1 === Zn && Un.length < Fn ? (Un.push(Xn[rr]), $n.push(ir - 1), Hn += ir - 1) : ($n.push(ir), Hn += ir), 1 === Zn && rr === nr - 1 && (rr = tr);
                  }
                  n.typeArr.push(Qn), n.countArr.push($n);
                }
                break;
              case 5:
                Bn = t / 10 % 10;
                break;
              case 6:
                for (var er = 0; er < n.holeItemTypeArr.length; er++) n.holeItemTypeArr[er].push(Un["shift"]());
                break;
              case 7:
                n.scaleExp = .9, n.moveDir = FruitConfig.MoveDirection.NONE;
                break;
              case 8:
                n.holeItemTypeArr = 1 == Bn ? [[], []] : Bn >= 2 && Bn <= 7 ? [[], [], []] : [[], [], [], []];
                break;
              case 9:
                Un["sort"](function (t, n) {
                  return t - n;
                });
            }
          }
          return n;
        }, t["getMaxType"] = function (t) {
          return 0 == this["useSkinId"] ? Math.min(33, t) : Math.min(28, t);
        }, t["ranTypeArr"] = function (t) {
          var n;
          n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28], 0 == this["useSkinId"] && (n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]);
          for (var S = n.length - t, A = 0; A < S; A++) {
            var C;
            C = this["RandomInt"](0, n.length - 1), n["splice"](C, 1);
          }
          return n;
        }, t["RandomInt"] = function (t, n) {
          return Math["floor"](Math["random"]() * (n - t + 1)) + t;
        }, t["randomN"] = function (t, n) {
          return Math["random"]() * (n - t) + t;
        }, t["RandomAngle"] = function () {
          return math["v3"](this.randomN(0, 360), this.randomN(0, 360), this.randomN(0, 360));
        }, t["GetQuatForV3"] = function (t) {
          var n;
          return n = new Quat(), Quat["fromEuler"](n, t.x, t.y, t.z), n;
        }, createClass(r, [function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), Pu(t, "set", 0), (n = t).key = 0, n.get = 0, n.set = 0, n;
          }["apply"]())["key"] = "useSkinId", t["get"] = function () {
            return this["useSkinId_"];
          }, t["set"] = function (t) {
            this["useSkinId_"] = t;
          }, t;
        }.bind(this).apply(), function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t).key = 0, n.get = 0, n;
          }["apply"]())["key"] = "visibleSize", t["get"] = function () {
            return this["visibleSize_"];
          }, t;
        }.bind(this).apply(), function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t).key = 0, n.get = 0, n;
          }["apply"]())["key"] = "gameW", t["get"] = function () {
            return this["visibleSize"]["width"];
          }, t;
        }.bind(this).apply(), function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t).key = 0, n.get = 0, n;
          }["apply"]())["key"] = "gameH", t["get"] = function () {
            return this["visibleSize"]["height"];
          }, t;
        }.bind(this).apply(), function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), Pu(t, "set", 0), (n = t).key = 0, n.get = 0, n.set = 0, n;
          }["apply"]())["key"] = "halfGameH", t["get"] = function () {
            return this["halfGameH_"];
          }, t["set"] = function (t) {
            this["halfGameH_"] = t;
          }, t;
        }.bind(this).apply(), function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), Pu(t, "set", 0), (n = t).key = 0, n.get = 0, n.set = 0, n;
          }["apply"]())["key"] = "halfGameW", t["get"] = function () {
            return this["halfGameW_"];
          }, t["set"] = function (t) {
            this["halfGameW_"] = t;
          }, t;
        }.bind(this).apply(), function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), Pu(t, "set", 0), (n = t).key = 0, n.get = 0, n.set = 0, n;
          }["apply"]())["key"] = "stopDownY", t["get"] = function () {
            return this["stopDownY_"];
          }, t["set"] = function (t) {
            this["stopDownY_"] = t;
          }, t;
        }.bind(this).apply(), function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), Pu(t, "set", 0), (n = t).key = 0, n.get = 0, n.set = 0, n;
          }["apply"]())["key"] = "stopMoveX", t["get"] = function () {
            return this["stopMoveX_"];
          }, t["set"] = function (t) {
            this["stopMoveX_"] = t;
          }, t;
        }.bind(this).apply(), function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), Pu(t, "set", 0), (n = t).key = 0, n.get = 0, n.set = 0, n;
          }["apply"]())["key"] = "fallX", t["get"] = function () {
            return this["fallX_"];
          }, t["set"] = function (t) {
            this["fallX_"] = t;
          }, t;
        }.bind(this).apply(), function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), Pu(t, "set", 0), (n = t).key = 0, n.get = 0, n.set = 0, n;
          }["apply"]())["key"] = "curTheme", t["get"] = function () {
            return this["curTheme_"];
          }, t["set"] = function (t) {
            this["curTheme_"] = t;
          }, t;
        }.bind(this).apply()], [function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t).key = 0, n.get = 0, n;
          }["apply"]())["key"] = "inst", t["get"] = function () {
            return this.inst_ || (this.inst_ = new r()), this.inst_;
          }, t;
        }.bind(this).apply()]), r;
      }())["inst_"] = null, cclegacy._RF["pop"]();
    }, f;
  }["bind"](this)["apply"]();
});