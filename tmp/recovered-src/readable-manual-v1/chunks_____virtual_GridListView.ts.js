(function (t) {
  Js && Is && (Ri += ir), Js = 0;
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
    b,
    d,
    k,
    m,
    p,
    g,
    y = to;
  return function () {
    var y;
    0;
    var w,
      _ = to[5],
      M = "setters",
      S = "execute";
    return Pu(y = {}, "setters", 0), Pu(y, "execute", 0), (w = y)["setters"] = [function (t) {
      var u = to;
      n = t["applyDecoratedDescriptor"], r = t["inheritsLoose"], i = t["initializerDefineProperty"], e = t["assertThisInitialized"], a = t["createClass"];
    }, function (t) {
      var n = to,
        r = n[8],
        i = n[9],
        e = n[2];
      u = t["cclegacy"], s = t["_decorator"], o = t["ScrollView"], c = t["Prefab"], f = t["Component"], h = t["log"], v = t["instantiate"], l = t["error"], b = t["Mask"], d = t["UITransform"], k = t["math"];
    }, function (t) {
      m = t["default"];
    }, function (t) {
      p = t["default"];
    }, function (t) {
      g = t["Log"];
    }], w["execute"] = function () {
      var y, w, _, M, S, A, C, x;
      js && (Ri += "needCount"), js = 0;
      var T,
        L,
        I,
        R,
        E,
        D,
        N,
        P,
        G,
        O,
        F,
        B,
        z,
        U,
        H,
        V,
        W,
        J,
        j,
        q = to,
        K = q[5],
        Y = q[6],
        X = q[4],
        Z = q[8],
        Q = q[10],
        $ = "_RF",
        tt = "GridListView",
        nt = "apply",
        rt = "prototype",
        it = "configurable",
        et = "enumerable",
        at = "writable",
        ut = "initializer";
      u["_RF"]["push"]({}, "f4d795vtPBJVZFjwN4S4rtv", "GridListView", void 0), I = s["ccclass"], L = s["property"], T = s["requireComponent"], t("default", (R = I("GridListView"), E = T(o), D = L(c), N = L(function () {
        var t,
          n = to;
        return (t = function () {
          var t,
            n,
            r = to,
            i = "type",
            e = "displayName";
          return Pu(t = {}, "type", 0), Pu(t, "displayName", 0), (n = t)["type"] = 0, n["displayName"] = 0, n;
        }["apply"]())["type"] = f["EventHandler"], t["displayName"] = "内容处理函数", t;
      }["apply"]()), P = L(function () {
        var t,
          n = to,
          r = n[3];
        return (t = function () {
          var t,
            n,
            r = to,
            i = "type",
            e = "displayName";
          return Pu(t = {}, "type", 0), Pu(t, "displayName", 0), (n = t)["type"] = 0, n["displayName"] = 0, n;
        }["apply"]())["type"] = f["EventHandler"], t["displayName"] = "初始化结束", t;
      }["apply"]()), G = L(function () {
        var t,
          n = to,
          r = n[2];
        return (t = function () {
          var t,
            n,
            r = to,
            i = "type",
            e = "displayName";
          return Pu(t = {}, "type", 0), Pu(t, "displayName", 0), (n = t)["type"] = 0, n["displayName"] = 0, n;
        }["apply"]())["type"] = f["EventHandler"], t["displayName"] = "更新函数", t;
      }["apply"]()), R(O = E((B = n((F = function (t) {
        var n,
          u,
          s = to,
          c = s[7],
          f = s[3],
          y = s[9],
          w = s[12],
          _ = s[5],
          M = s[2],
          S = s[6],
          A = s[14];
        return r(u = function () {
          for (var n, r, a = to, u = a[4], s = a[3], o = a[5], c = a[6], f = a[8], h = a[12], v = a[7], l = (n = arguments)["length"], b = new Array(l), d = 0; d < l; d++) b[d] = n[d];
          return r = t["call"]["apply"](t, [this]["concat"](b)) || this, i(r, "prefab", B, e(r)), i(r, "poolKey", z, e(r)), i(r, "delegate", U, e(r)), i(r, "initFinish", H, e(r)), i(r, "delegateUpdate", V, e(r)), i(r, "totalCount", W, e(r)), i(r, "spaceX", J, e(r)), i(r, "spaceY", j, e(r)), r["buffList"] = [], r["scrollView"] = void 0, r["content"] = void 0, r["items"] = [], r["lastContentPos"] = 0, r["contentSize"] = 0, r["position_back"] = 0, r["position_front"] = 0, r["offset"] = 0, r["bufferSize"] = 0, r["itemSize"] = 0, r["spaceSize"] = 0, r["bufferZone"] = 0, r["cellNum"] = 1, r[Ri] = 0, r["dateArray"] = void 0, r;
        }, t), (n = u["prototype"])["start"] = function () {}, n["onDestroy"] = function () {
          this["clear"]();
        }, n["setDataList"] = function (t) {
          var n = to,
            r = n[7],
            i = n[8],
            e = n[4],
            a = n[2],
            u = n[5],
            s = "poolKey",
            c = "scrollView",
            f = "content";
          this["dateArray"] = t, this["totalCount"] = t["length"], this["poolKey"] && h("使用对象池 ", this["poolKey"]), this["scrollView"] = this["getComponent"](o), this["scrollView"] && this["prefab"] && (this["content"] = this["scrollView"]["content"], this["content"]["removeAllChildren"](), this["scrollView"]["node"]["on"]("scrolling", this["updateItem"], this), this["init"]());
        }, n["updataDataList"] = function (t, n) {
          var r = to,
            i = r[10],
            e = "dateArray",
            a = "items";
          if (void 0 === n && (n = !0), this["dateArray"] = t, n) for (var u = 0; u < this["items"]["length"]; u++) {
            var s, o, c;
            if (s = this["items"][u]) if (o = s["getComponent"](m)) c = o["dataIndex"], o["onItemRender"](this["dateArray"][c]);
          }
        }, n["callItemScriteUpdate"] = function (t) {
          var n,
            r = to,
            i = r[10],
            e = r[7];
          (n = t[2]["getComponent"](m)) && (n["dataIndex"] = t[1], n["onItemRender"](this["dateArray"][t[1]]));
        }, n["reset"] = function (t, n) {
          var r = to,
            i = "scrollView";
          this["scrollView"]["stopAutoScroll"](), this["clear"](), this["totalCount"] = t, n && (this["dateArray"] = n), this["init"](), this["scrollView"]["vertical"] ? this["scrollView"]["scrollToTop"]() : this["scrollView"]["scrollToLeft"]();
        }, n["updateItems"] = function () {
          var t = to,
            n = "delegateUpdate",
            r = "items",
            i = "length",
            e = "emit";
          if (this["delegateUpdate"]) for (var a = 0; a < this["items"]["length"]; a++) {
            var u;
            u = this["items"][a], this["delegateUpdate"]["emit"]([u]);
          } else for (var s = 0; s < this["items"]["length"]; s++) {
            var o;
            o = this["items"][s], this["delegateUpdate"]["emit"]([o]);
          }
        }, n["clear"] = function () {
          var t,
            n = to,
            r = "items",
            i = "length";
          t = this, this["items"] && this["items"]["length"] > 0 && this["items"]["forEach"](function (n) {
            var r = to;
            t["setItemActive"](n, !1), t["putItem"](n);
          }), this["items"]["length"] = 0;
        }, n["putItem"] = function (t) {
          var n = to,
            r = n[6];
          this["poolKey"] ? p["instance"]()["put"](t) : this["buffList"]["push"](t);
        }, n["getItem"] = function () {
          var t = to,
            n = "poolKey",
            r = "prefab",
            i = "buffList";
          return this["poolKey"] ? p["instance"]()["get"](this["poolKey"]) : this["prefab"] ? this["buffList"]["length"] > 0 ? this["buffList"]["shift"]() : v(this["prefab"]) : (l(" 预制体没有赋值 "), null);
        }, n["init"] = function () {
          var t = to;
          this["initParam"](), this["addItems"]();
        }, n["initParam"] = function () {
          var t,
            n,
            r = to,
            i = r[5],
            e = r[6],
            a = r[8],
            u = r[4],
            s = r[3],
            o = "itemSize",
            c = "scrollView",
            f = "node",
            h = "children",
            v = "getComponent",
            m = "vertical",
            p = "height",
            g = "spaceY",
            y = "spaceSize",
            w = "width",
            _ = "spaceX",
            M = "bufferSize",
            S = "content",
            A = "anchorX",
            C = "anchorY",
            x = "cellNum",
            T = "floor",
            L = "totalCount",
            I = "contentSize";
          this["position_back"] = -1, this["position_front"] = 0, t = this["getItem"](), this["itemSize"] = 0;
          for (var R = 0, E = null, D = 0; D < this["scrollView"]["node"]["children"]["length"]; D++) {
            var N;
            if ((N = this["scrollView"]["node"]["children"][D])["getComponent"](b)) {
              E = N;
              break;
            }
          }
          E ? (this["scrollView"]["vertical"] ? (this["itemSize"] = t["getComponent"](d)["height"] + this["spaceY"], this["spaceSize"] = t["getComponent"](d)["width"] + this["spaceX"], this["bufferSize"] = E["getComponent"](d)["height"], this["content"]["getComponent"](d)["width"] = E["getComponent"](d)["width"], this["content"]["getComponent"](d)["anchorX"] = .5, this["content"]["getComponent"](d)["anchorY"] = 1, this["content"][At] = 0, this["content"][St] = E["getComponent"](d)["height"] / 2, R = this["content"]["getComponent"](d)["width"]) : (this["itemSize"] = t["getComponent"](d)["width"] + this["spaceX"], this["spaceSize"] = t["getComponent"](d)["height"] + this["spaceY"], this["bufferSize"] = E["getComponent"](d)["width"], this["content"]["getComponent"](d)["height"] = E["getComponent"](d)["height"], this["content"]["getComponent"](d)["anchorX"] = 0, this["content"]["getComponent"](d)["anchorY"] = .5, this["content"][At] = E["getComponent"](d)["width"] / 2, this["content"][St] = 0, R = this["content"]["getComponent"](d)["height"]), this["cellNum"] = Math["floor"](R / this["spaceSize"]), this["cellNum"] <= 0 && (this["cellNum"] = 1), this["putItem"](t), this["bufferSize"] += this["itemSize"], n = Math["floor"](this["totalCount"] / this["cellNum"]), this[Ri] = this["totalCount"] % this["cellNum"] != 0 ? n + 1 : n, this["contentSize"] = this[Ri] * this["itemSize"], this["scrollView"]["vertical"] ? this["content"]["getComponent"](d)["height"] = this["contentSize"] : this["content"]["getComponent"](d)["width"] = this["contentSize"], this["scrollView"]["scrollTo"](k["v2"](0, 1), 0)) : l("不能没有Mask组件");
        }, n["addItems"] = function () {
          var t,
            n,
            r,
            i,
            e,
            a = to,
            u = a[8],
            s = a[2],
            o = a[6],
            c = a[3],
            f = a[4],
            h = "bufferSize",
            v = "itemSize",
            l = "scrollView",
            b = "vertical",
            k = "cellNum",
            m = "spaceSize",
            p = "position_back",
            g = "items",
            y = "getComponent",
            w = "height",
            _ = "spaceY",
            M = "width",
            S = "spaceX",
            A = "setItemPosition",
            C = "length",
            x = "initFinish";
          t = this["bufferSize"], r = Math["floor"](t / this["itemSize"]), (n = t % this["itemSize"] == 0 ? r : r + 1) > this[Ri] && (n = this[Ri]), i = this["scrollView"]["vertical"] ? 0 - (this["cellNum"] - 1) * this["spaceSize"] / 2 : (this["cellNum"] - 1) * this["spaceSize"] / 2;
          for (var T = 0; T < n; T++) {
            this["position_back"]++;
            for (var L = 0; L < this["cellNum"]; L++) {
              var I, R;
              if (R = this["getItem"](), this["addChild"](R), this["items"]["push"](R), (I = this["position_back"] * this["cellNum"] + L) >= this["totalCount"]) this["setItemActive"](R, !1);else {
                var E, D, N, P;
                if (this["scrollView"]["vertical"]) D = -(R["getComponent"](d)["height"] + this["spaceY"]) * (.5 + T), E = i + (R["getComponent"](d)["width"] + this["spaceX"]) * L, this["setItemPosition"](R, E, D);else P = (R["getComponent"](d)["width"] + this["spaceX"]) * (.5 + T), N = i - (R["getComponent"](d)["height"] + this["spaceY"]) * L, this["setItemPosition"](R, P, N);
                this["callItemScriteUpdate"]([this, I, R]);
              }
            }
          }
          e = this["items"]["length"] / this["cellNum"], e = this["items"]["length"] % this["cellNum"] == 0 ? e : e + 1, this["offset"] = this["itemSize"] * e, this["bufferZone"] = this["bufferSize"] / 2, this["initFinish"] && this["initFinish"]["emit"]([this]);
        }, n["setItemPosition"] = function (t, n, r) {
          t["setPosition"](n, r);
        }, n["setItemPositionX"] = function (t, n) {
          t[At] = n;
        }, n["setItemPositionY"] = function (t, n) {
          t[St] = n;
        }, n["setItemActive"] = function (t, n) {
          t["active"] = n;
        }, n["addChild"] = function (t) {
          var n = to;
          t["parent"] ? this["setItemActive"](t, !0) : this["content"]["addChild"](t);
        }, n["getPositionInView"] = function (t) {
          var n,
            r = to,
            i = "getComponent";
          return n = t["parent"]["getComponent"](d)["convertToWorldSpaceAR"](t["position"]), this["scrollView"]["node"]["getComponent"](d)["convertToNodeSpaceAR"](n);
        }, n["updateItem"] = function () {
          var t,
            n,
            r = to,
            i = r[8],
            e = r[5],
            a = r[12],
            u = r[4],
            s = r[11],
            o = r[14],
            c = "items",
            f = "scrollView",
            h = "vertical",
            v = "content",
            l = "lastContentPos",
            b = "cellNum",
            d = "bufferZone",
            k = "offset",
            m = "position_front",
            p = "position_back",
            g = "setItemPositionY",
            y = "active",
            w = "setItemActive",
            _ = "callItemScriteUpdate",
            M = "contentSize",
            S = "totalCount",
            A = "setItemPositionX";
          n = this["items"], t = this["scrollView"]["vertical"] ? this["scrollView"]["content"][St] < this["lastContentPos"] : this["scrollView"]["content"][At] > this["lastContentPos"];
          for (var C = 0; C < this["items"]["length"]; C += this["cellNum"]) if (n[C]) {
            var x;
            if (x = this["getPositionInView"](n[C]), this["scrollView"]["vertical"]) {
              if (t) {
                if (x[St] < -this["bufferZone"] && n[C][St] + this["offset"] < 0) {
                  this["position_front"]--, this["position_back"]--;
                  for (var T = 0; T < this["cellNum"]; T++) {
                    var L, I;
                    if (L = n[C + T]) this["setItemPositionY"](L, L[St] + this["offset"]), I = this["position_front"] * this["cellNum"] + T, L["active"] || this["setItemActive"](L, !0), this["callItemScriteUpdate"]([this, I, L]);
                  }
                }
              } else if (x[St] > this["bufferZone"] && n[C][St] - this["offset"] > -this["contentSize"]) {
                this["position_front"]++, this["position_back"]++;
                for (var R = 0; R < this["cellNum"]; R++) {
                  var E, D;
                  if (E = n[C + R]) this["setItemPositionY"](E, E[St] - this["offset"]), (D = this["position_back"] * this["cellNum"] + R) >= this["totalCount"] ? this["setItemActive"](E, !1) : (E["active"] || this["setItemActive"](E, !0), this["callItemScriteUpdate"]([this, D, E]));
                }
              }
            } else if (t) {
              if (x[At] > this["bufferZone"] && n[C][At] - this["offset"] > 0) {
                this["position_front"]--, this["position_back"]--;
                for (var N = 0; N < this["cellNum"]; N++) {
                  var P;
                  (P = n[C + N]) && (P["active"] || this["setItemActive"](P, !0), this["setItemPositionX"](P, P[At] - this["offset"]), this["callItemScriteUpdate"]([this, this["position_front"] * this["cellNum"] + N, P]));
                }
              }
            } else if (x[At] < -this["bufferZone"] && n[C][At] + this["offset"] < this["contentSize"]) {
              this["position_front"]++, this["position_back"]++;
              for (var G = 0; G < this["cellNum"]; G++) {
                var O, F;
                if (O = n[C + G]) this["setItemPositionX"](O, O[At] + this["offset"]), (F = this["position_back"] * this["cellNum"] + G) >= this["totalCount"] ? this["setItemActive"](O, !1) : (O["active"] || this["setItemActive"](O, !0), this["callItemScriteUpdate"]([this, F, O]));
              }
            }
          }
          this["scrollView"]["vertical"] ? this["lastContentPos"] = this["scrollView"]["content"][St] : this["lastContentPos"] = this["scrollView"]["content"][At];
        }, n["scrollToOffset"] = function (t, n) {
          var r,
            i = to,
            e = "scrollView",
            a = "itemSize";
          (void 0 === n && (n = 1), this["scrollView"]) && (r = k["v2"](), this["scrollView"]["vertical"] ? r[St] = t * this["itemSize"] : r[At] = t * this["itemSize"], this["scrollView"]["scrollToOffset"](r, n));
        }, n["scrollToBottom"] = function (t) {
          var n,
            r = to,
            i = "scrollView";
          n = this, void 0 === t && (t = 1), this["scrollView"] && (this["scrollView"]["scrollToBottom"](t), this["scheduleOnce"](function () {
            var t = to;
            n["updataDataList"](n["dateArray"]);
          }, t + .1));
        }, n["scrollToTop"] = function (t) {
          var n,
            r = to,
            i = "scrollView";
          n = this, void 0 === t && (t = 1), this["scrollView"] && (this["scrollView"]["scrollToTop"](t), this["scheduleOnce"](function () {
            var t = to;
            n["updataDataList"](n["dateArray"]);
          }, t + .1));
        }, n["remove"] = function (t) {
          var n,
            r = to,
            i = r[4],
            e = "scrollView";
          n = this["scrollView"]["getScrollOffset"](), g(n, this["content"]["getComponent"](d)["height"]), this["reset"](this["dateArray"]["length"]), this["scrollView"]["scrollToOffset"](k["v2"](0, n[St]), .1);
        }, a(u, [function () {
          var t,
            n = to,
            r = n[1];
          return (t = function () {
            var t,
              n,
              r = to[1],
              i = "key",
              e = "get";
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t)["key"] = 0, n["get"] = 0, n;
          }["apply"]())["key"] = "DateArray", t["get"] = function () {
            return this["dateArray"];
          }, t;
        }["bind"](this)["apply"]()]), u;
      }(f))["prototype"], "prefab", [D], (Pu(y = {}, "configurable", !0), Pu(y, "enumerable", !0), Pu(y, "writable", !0), Pu(y, "initializer", function () {
        return null;
      }), y)), z = n(F["prototype"], "poolKey", [L], (Pu(w = {}, "configurable", !0), Pu(w, "enumerable", !0), Pu(w, "writable", !0), Pu(w, "initializer", function () {
        return "";
      }), w)), U = n(F["prototype"], "delegate", [N], (Pu(_ = {}, "configurable", !0), Pu(_, "enumerable", !0), Pu(_, "writable", !0), Pu(_, "initializer", function () {
        return new f["EventHandler"]();
      }), _)), H = n(F["prototype"], "initFinish", [P], (Pu(M = {}, "configurable", !0), Pu(M, "enumerable", !0), Pu(M, "writable", !0), Pu(M, "initializer", function () {
        return new f["EventHandler"]();
      }), M)), V = n(F["prototype"], "delegateUpdate", [G], (Pu(S = {}, "configurable", !0), Pu(S, "enumerable", !0), Pu(S, "writable", !0), Pu(S, "initializer", function () {
        return new f["EventHandler"]();
      }), S)), W = n(F["prototype"], "totalCount", [L], (Pu(A = {}, "configurable", !0), Pu(A, "enumerable", !0), Pu(A, "writable", !0), Pu(A, "initializer", function () {
        return 0;
      }), A)), J = n(F["prototype"], "spaceX", [L], (Pu(C = {}, "configurable", !0), Pu(C, "enumerable", !0), Pu(C, "writable", !0), Pu(C, "initializer", function () {
        return 0;
      }), C)), j = n(F["prototype"], "spaceY", [L], (Pu(x = {}, "configurable", !0), Pu(x, "enumerable", !0), Pu(x, "writable", !0), Pu(x, "initializer", function () {
        return 0;
      }), x)), O = F)) || O) || O)), u["_RF"]["pop"]();
    }, w;
  }["bind"](this)["apply"]();
});