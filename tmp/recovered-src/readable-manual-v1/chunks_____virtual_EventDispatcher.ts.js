(function (t) {
  var n,
    r,
    i,
    e = to;
  return function () {
    var e,
      a,
      u = to[5],
      s = "setters",
      o = "execute";
    return Pu(e = {}, "setters", 0), Pu(e, "execute", 0), (a = e)["setters"] = [function (t) {
      n = t["inheritsLoose"];
    }, function (t) {
      r = t["cclegacy"];
    }, function (t) {
      i = t["Handler"];
    }], a["execute"] = function () {
      var e = to,
        a = e[3],
        u = "_RF",
        s = "EventDispatcher";
      As && (Ao = 8);
      var o = Ao;
      r["_RF"]["push"]({}, "14a36Ji0zNFoqxXDy36Rvip", "EventDispatcher", void 0), t("EventDispatcher", function () {
        var t,
          n,
          r = to,
          i = r[2],
          e = r[10];
        return (t = (n = function () {
          this["_events"] = void 0;
        })["prototype"])["hasListener"] = function (t) {
          var n = "_events";
          return !(!this["_events"] || !this["_events"][t]);
        }, t["emit"] = function (t, n) {
          var r,
            i = to,
            e = i[5],
            a = "_events",
            u = "run",
            s = "once",
            o = "runWith",
            c = "length";
          if (void 0 === n && (n = null), !this["_events"] || !this["_events"][t]) return !1;
          if ((r = this["_events"][t])["run"]) r["once"] && delete this._events[t], null != n ? r["runWith"](n) : r["run"]();else {
            for (var f = 0, h = r["length"]; f < h; f++) {
              var v;
              (v = r[f]) && (null != n ? v["runWith"](n) : v["run"]()), v && !v["once"] || (r["splice"](f, 1), f--, h--);
            }
            0 === r["length"] && this["_events"] && delete this._events[t];
          }
          return !0;
        }, t["on"] = function (t, n, r, i) {
          return void 0 === i && (i = null), this["_createListener"](t, r, n, i, !1);
        }, t["once"] = function (t, n, r, i) {
          return void 0 === i && (i = null), this["_createListener"](t, r, n, i, !0);
        }, t["_createListener"] = function (t, n, r, i, e, a) {
          var u,
            s,
            o = to,
            f = o[1],
            h = "_events";
          return void 0 === a && (a = !0), a && this["off"](t, n, r, e), s = c["create"](n || this, r, i, e), this["_events"] || (this["_events"] = {}), (u = this["_events"])[t] ? u[t]["run"] ? u[t] = [u[t], s] : u[t]["push"](s) : u[t] = s, this;
        }, t["off"] = function (t, n, r, i) {
          var e,
            a = to,
            u = a[5],
            s = a[4],
            o = "_events",
            c = "caller",
            f = "method",
            h = "once",
            v = "recover";
          if (void 0 === i && (i = !1), !this["_events"] || !this["_events"][t]) return this;
          if (null != (e = this["_events"][t])) if (e["run"]) r && e["caller"] !== r || null != n && e["method"] !== n || i && !e["once"] || (delete this._events[t], e["recover"]());else {
            for (var l = 0, b = 0, d = e["length"]; b < d; b++) {
              var k;
              (k = e[b]) ? !k || r && k["caller"] !== r || null != n && k["method"] !== n || i && !k["once"] || (l++, e[b] = null, k["recover"]()) : l++;
            }
            l === d && delete this._events[t];
          }
          return this;
        }, t["offAll"] = function (t) {
          var n,
            r = to,
            i = "_events",
            e = "_recoverHandlers";
          if (void 0 === t && (t = null), !(n = this["_events"])) return this;
          if (t) this["_recoverHandlers"](n[t]), delete n[t];else {
            for (var a in n) this["_recoverHandlers"](n[a]);
            this["_events"] = null;
          }
          return this;
        }, t["offAllCaller"] = function (t) {
          var n = to,
            r = "_events";
          if (t && this["_events"]) for (var i in this["_events"]) this["off"](i, t, null);
          return this;
        }, t["_recoverHandlers"] = function (t) {
          var n = to,
            r = "recover";
          if (t) if (t["run"]) t["recover"]();else for (var i = t["length"] - 1; i > -1; i--) t[i] && (t[i]["recover"](), t[i] = null);
        }, t["isMouseEvent"] = function (t) {
          return n["MOUSE_EVENTS"][t] || !1;
        }, n;
      }())["MOUSE_EVENTS"] = function () {
        var t,
          n,
          r = to,
          i = ro,
          e = r[7],
          a = r[3],
          u = Gu(xo);
        try {
          for (u.s(); !(n = u.n()).done;) {
            switch (n.value) {
              case 0:
                t["mousemove"] = !0;
                break;
              case 1:
                return t;
              case 2:
                t["mouseup"] = !0;
                break;
              case 3:
                t["doubleclick"] = !0;
                break;
              case 4:
                t["mouseover"] = !0;
                break;
              case 5:
                t["rightclick"] = !0;
                break;
              case 6:
                t["click"] = !0;
                break;
              case 7:
                t["rightmousedown"] = !0;
                break;
              case 8:
                t["mouseout"] = !0;
                break;
              case 9:
                t["rightmouseup"] = !0;
                break;
              case 10:
                t = function () {
                  for (var t, n, r = to, i = ro, e = r[7], a = 11, u = "mouseup", s = "mousemove", c = "rightmousedown", f = "rightmouseup", h = "rightclick", v = "mousedown", l = "mouseover", b = "mouseout", d = "click", k = "doubleclick", m = 0, p = o; m < 12;) switch (++m, p) {
                    case 4:
                      n["mouseup"] = 0, p = 2;
                      break;
                    case 2:
                      n["mousemove"] = 0, p = 7;
                      break;
                    case 0:
                      return n;
                    case 3:
                      n["rightmousedown"] = 0, p = 6;
                      break;
                    case 8:
                      Pu(t = {}, "rightmousedown", 0), Pu(t, "rightmouseup", 0), Pu(t, "rightclick", 0), Pu(t, "mousedown", 0), Pu(t, "mouseup", 0), Pu(t, "mousemove", 0), Pu(t, "mouseover", 0), Pu(t, "mouseout", 0), Pu(t, "click", 0), Pu(t, "doubleclick", 0), n = t, p = 3;
                      break;
                    case 11:
                      n["mouseout"] = 0, p = 9;
                      break;
                    case 5:
                      n["mousedown"] = 0, p = 4;
                      break;
                    case 10:
                      n["doubleclick"] = 0, p = 0;
                      break;
                    case 1:
                      n["rightclick"] = 0, p = 5;
                      break;
                    case 9:
                      n["click"] = 0, p = 10;
                      break;
                    case 6:
                      n["rightmouseup"] = 0, p = 1;
                      break;
                    case 7:
                      n["mouseover"] = 0, p = 11;
                  }
                }["apply"]();
                break;
              case 11:
                t["mousedown"] = !0;
            }
          }
        } catch (t) {
          u.e(t);
        } finally {
          u.f();
        }
      }["apply"]();
      var c = function (t) {
        var r,
          i = to;
        return r = function (t) {
          function n(n, r, i, e) {
            return t.apply(this, arguments);
          }
          return n.toString = function () {
            return t.toString();
          }, n;
        }(function (n, r, i, e) {
          return t["call"](this, n, r, i, e) || this;
        }), n(r, t), r["prototype"]["recover"] = function () {
          var t = to,
            n = t[3],
            i = "_id";
          this["_id"] > 0 && (this["_id"] = 0, r["_pool"]["push"](this["clear"]()));
        }, r["create"] = function (t, n, i, e) {
          var a = to,
            u = "_pool";
          return void 0 === i && (i = null), void 0 === e && (e = !0), r["_pool"]["length"] ? r["_pool"]["pop"]()["setTo"](t, n, i, e) : new r(t, n, i, e);
        }, r;
      }(i);
      c["_pool"] = [], r["_RF"]["pop"]();
    }, a;
  }["bind"](this)["apply"]();
});