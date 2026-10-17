(function (t) {
  Js && Is && (Ri += ir), Js = 0;
  var applyDecoratedDescriptor, inheritsLoose, initializerDefineProperty, assertThisInitialized, createClass, cclegacy, _decorator, ScrollView, Prefab, Component, log, instantiate, error, Mask, UITransform, math, ScrollListItem, CCPoolManager, Log;
  return function () {
    var y;
    0;
    var w;
    return Pu(y = {}, "setters", 0), Pu(y, "execute", 0), (w = y).setters = [function (t) {
      applyDecoratedDescriptor = t["applyDecoratedDescriptor"], inheritsLoose = t["inheritsLoose"], initializerDefineProperty = t["initializerDefineProperty"], assertThisInitialized = t["assertThisInitialized"], createClass = t["createClass"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], ScrollView = t["ScrollView"], Prefab = t["Prefab"], Component = t["Component"], log = t["log"], instantiate = t["instantiate"], error = t["error"], Mask = t["Mask"], UITransform = t["UITransform"], math = t["math"];
    }, function (t) {
      ScrollListItem = t["default"];
    }, function (t) {
      CCPoolManager = t["default"];
    }, function (t) {
      Log = t["Log"];
    }], w.execute = function () {
      var y, w, _, M, S, A, C, x;
      js && (Ri += "needCount"), js = 0;
      var T, L, I, R, E, D, N, P, G, O, F, B, z, U, H, V, W, J, j;
      cclegacy._RF["push"]({}, "f4d795vtPBJVZFjwN4S4rtv", "GridListView", void 0), I = _decorator["ccclass"], L = _decorator["property"], T = _decorator["requireComponent"], t("default", (R = I("GridListView"), E = T(ScrollView), D = L(Prefab), N = L(function () {
        var t;
        return (t = function () {
          var t, n;
          return Pu(t = {}, "type", 0), Pu(t, "displayName", 0), (n = t).type = 0, n.displayName = 0, n;
        }["apply"]())["type"] = Component["EventHandler"], t["displayName"] = "内容处理函数", t;
      }.apply()), P = L(function () {
        var t;
        return (t = function () {
          var t, n;
          return Pu(t = {}, "type", 0), Pu(t, "displayName", 0), (n = t).type = 0, n.displayName = 0, n;
        }["apply"]())["type"] = Component["EventHandler"], t["displayName"] = "初始化结束", t;
      }.apply()), G = L(function () {
        var t;
        return (t = function () {
          var t, n;
          return Pu(t = {}, "type", 0), Pu(t, "displayName", 0), (n = t).type = 0, n.displayName = 0, n;
        }["apply"]())["type"] = Component["EventHandler"], t["displayName"] = "更新函数", t;
      }.apply()), R(O = E((B = applyDecoratedDescriptor((F = function (t) {
        var n, u;
        return inheritsLoose(u = function () {
          for (var n, r, l = (n = arguments)["length"], b = new Array(l), d = 0; d < l; d++) b[d] = n[d];
          return r = t["call"]["apply"](t, [this]["concat"](b)) || this, initializerDefineProperty(r, "prefab", B, assertThisInitialized(r)), initializerDefineProperty(r, "poolKey", z, assertThisInitialized(r)), initializerDefineProperty(r, "delegate", U, assertThisInitialized(r)), initializerDefineProperty(r, "initFinish", H, assertThisInitialized(r)), initializerDefineProperty(r, "delegateUpdate", V, assertThisInitialized(r)), initializerDefineProperty(r, "totalCount", W, assertThisInitialized(r)), initializerDefineProperty(r, "spaceX", J, assertThisInitialized(r)), initializerDefineProperty(r, "spaceY", j, assertThisInitialized(r)), r["buffList"] = [], r["scrollView"] = void 0, r["content"] = void 0, r["items"] = [], r["lastContentPos"] = 0, r["contentSize"] = 0, r["position_back"] = 0, r["position_front"] = 0, r["offset"] = 0, r["bufferSize"] = 0, r["itemSize"] = 0, r["spaceSize"] = 0, r["bufferZone"] = 0, r["cellNum"] = 1, r[""] = 0, r["dateArray"] = void 0, r;
        }, t), (n = u["prototype"])["start"] = function () {}, n["onDestroy"] = function () {
          this["clear"]();
        }, n["setDataList"] = function (t) {
          this["dateArray"] = t, this["totalCount"] = t["length"], this.poolKey && log("使用对象池 ", this.poolKey), this.scrollView = this["getComponent"](ScrollView), this.scrollView && this["prefab"] && (this.content = this.scrollView.content, this.content["removeAllChildren"](), this.scrollView["node"]["on"]("scrolling", this["updateItem"], this), this["init"]());
        }, n["updataDataList"] = function (t, n) {
          if (void 0 === n && (n = !0), this.dateArray = t, n) for (var u = 0; u < this.items["length"]; u++) {
            var s, o, c;
            if (s = this.items[u]) if (o = s["getComponent"](ScrollListItem)) c = o["dataIndex"], o["onItemRender"](this.dateArray[c]);
          }
        }, n["callItemScriteUpdate"] = function (t) {
          var n;
          (n = t[2]["getComponent"](ScrollListItem)) && (n["dataIndex"] = t[1], n["onItemRender"](this["dateArray"][t[1]]));
        }, n["reset"] = function (t, n) {
          this.scrollView["stopAutoScroll"](), this["clear"](), this["totalCount"] = t, n && (this["dateArray"] = n), this["init"](), this.scrollView["vertical"] ? this.scrollView["scrollToTop"]() : this.scrollView["scrollToLeft"]();
        }, n["updateItems"] = function () {
          if (this.delegateUpdate) for (var a = 0; a < this.items.length; a++) {
            var u;
            u = this.items[a], this.delegateUpdate.emit([u]);
          } else for (var s = 0; s < this.items.length; s++) {
            var o;
            o = this.items[s], this.delegateUpdate.emit([o]);
          }
        }, n["clear"] = function () {
          var t;
          t = this, this.items && this.items.length > 0 && this.items["forEach"](function (n) {
            t["setItemActive"](n, !1), t["putItem"](n);
          }), this.items.length = 0;
        }, n["putItem"] = function (t) {
          this["poolKey"] ? CCPoolManager["instance"]()["put"](t) : this["buffList"]["push"](t);
        }, n["getItem"] = function () {
          return this.poolKey ? CCPoolManager["instance"]()["get"](this.poolKey) : this.prefab ? this.buffList["length"] > 0 ? this.buffList["shift"]() : instantiate(this.prefab) : (error(" 预制体没有赋值 "), null);
        }, n["init"] = function () {
          this["initParam"](), this["addItems"]();
        }, n["initParam"] = function () {
          var t, n;
          this["position_back"] = -1, this["position_front"] = 0, t = this["getItem"](), this.itemSize = 0;
          for (var R = 0, E = null, D = 0; D < this.scrollView.node.children["length"]; D++) {
            var N;
            if ((N = this.scrollView.node.children[D]).getComponent(Mask)) {
              E = N;
              break;
            }
          }
          E ? (this.scrollView.vertical ? (this.itemSize = t.getComponent(UITransform).height + this.spaceY, this.spaceSize = t.getComponent(UITransform).width + this.spaceX, this.bufferSize = E.getComponent(UITransform).height, this.content.getComponent(UITransform).width = E.getComponent(UITransform).width, this.content.getComponent(UITransform).anchorX = .5, this.content.getComponent(UITransform).anchorY = 1, this.content.x = 0, this.content.y = E.getComponent(UITransform).height / 2, R = this.content.getComponent(UITransform).width) : (this.itemSize = t.getComponent(UITransform).width + this.spaceX, this.spaceSize = t.getComponent(UITransform).height + this.spaceY, this.bufferSize = E.getComponent(UITransform).width, this.content.getComponent(UITransform).height = E.getComponent(UITransform).height, this.content.getComponent(UITransform).anchorX = 0, this.content.getComponent(UITransform).anchorY = .5, this.content.x = E.getComponent(UITransform).width / 2, this.content.y = 0, R = this.content.getComponent(UITransform).height), this.cellNum = Math.floor(R / this.spaceSize), this.cellNum <= 0 && (this.cellNum = 1), this["putItem"](t), this.bufferSize += this.itemSize, n = Math.floor(this.totalCount / this.cellNum), this[""] = this.totalCount % this.cellNum != 0 ? n + 1 : n, this.contentSize = this[""] * this.itemSize, this.scrollView.vertical ? this.content.getComponent(UITransform).height = this.contentSize : this.content.getComponent(UITransform).width = this.contentSize, this.scrollView["scrollTo"](math["v2"](0, 1), 0)) : error("不能没有Mask组件");
        }, n["addItems"] = function () {
          var t, n, r, i, e;
          t = this.bufferSize, r = Math["floor"](t / this.itemSize), (n = t % this.itemSize == 0 ? r : r + 1) > this[""] && (n = this[""]), i = this.scrollView.vertical ? 0 - (this.cellNum - 1) * this.spaceSize / 2 : (this.cellNum - 1) * this.spaceSize / 2;
          for (var T = 0; T < n; T++) {
            this.position_back++;
            for (var L = 0; L < this.cellNum; L++) {
              var I, R;
              if (R = this["getItem"](), this["addChild"](R), this.items["push"](R), (I = this.position_back * this.cellNum + L) >= this["totalCount"]) this["setItemActive"](R, !1);else {
                var E, D, N, P;
                if (this.scrollView.vertical) D = -(R.getComponent(UITransform).height + this.spaceY) * (.5 + T), E = i + (R.getComponent(UITransform).width + this.spaceX) * L, this.setItemPosition(R, E, D);else P = (R.getComponent(UITransform).width + this.spaceX) * (.5 + T), N = i - (R.getComponent(UITransform).height + this.spaceY) * L, this.setItemPosition(R, P, N);
                this["callItemScriteUpdate"]([this, I, R]);
              }
            }
          }
          e = this.items.length / this.cellNum, e = this.items.length % this.cellNum == 0 ? e : e + 1, this["offset"] = this.itemSize * e, this["bufferZone"] = this.bufferSize / 2, this.initFinish && this.initFinish["emit"]([this]);
        }, n["setItemPosition"] = function (t, n, r) {
          t["setPosition"](n, r);
        }, n["setItemPositionX"] = function (t, n) {
          t.x = n;
        }, n["setItemPositionY"] = function (t, n) {
          t.y = n;
        }, n["setItemActive"] = function (t, n) {
          t["active"] = n;
        }, n["addChild"] = function (t) {
          t["parent"] ? this["setItemActive"](t, !0) : this["content"]["addChild"](t);
        }, n["getPositionInView"] = function (t) {
          var n;
          return n = t["parent"].getComponent(UITransform)["convertToWorldSpaceAR"](t["position"]), this["scrollView"]["node"].getComponent(UITransform)["convertToNodeSpaceAR"](n);
        }, n["updateItem"] = function () {
          var t, n;
          n = this.items, t = this.scrollView.vertical ? this.scrollView.content.y < this.lastContentPos : this.scrollView.content.x > this.lastContentPos;
          for (var C = 0; C < this.items["length"]; C += this.cellNum) if (n[C]) {
            var x;
            if (x = this["getPositionInView"](n[C]), this.scrollView.vertical) {
              if (t) {
                if (x.y < -this.bufferZone && n[C].y + this.offset < 0) {
                  this.position_front--, this.position_back--;
                  for (var T = 0; T < this.cellNum; T++) {
                    var L, I;
                    if (L = n[C + T]) this.setItemPositionY(L, L.y + this.offset), I = this.position_front * this.cellNum + T, L.active || this.setItemActive(L, !0), this.callItemScriteUpdate([this, I, L]);
                  }
                }
              } else if (x.y > this.bufferZone && n[C].y - this.offset > -this.contentSize) {
                this.position_front++, this.position_back++;
                for (var R = 0; R < this.cellNum; R++) {
                  var E, D;
                  if (E = n[C + R]) this.setItemPositionY(E, E.y - this.offset), (D = this.position_back * this.cellNum + R) >= this.totalCount ? this.setItemActive(E, !1) : (E.active || this.setItemActive(E, !0), this.callItemScriteUpdate([this, D, E]));
                }
              }
            } else if (t) {
              if (x.x > this.bufferZone && n[C].x - this.offset > 0) {
                this.position_front--, this.position_back--;
                for (var N = 0; N < this.cellNum; N++) {
                  var P;
                  (P = n[C + N]) && (P.active || this.setItemActive(P, !0), this.setItemPositionX(P, P.x - this.offset), this.callItemScriteUpdate([this, this.position_front * this.cellNum + N, P]));
                }
              }
            } else if (x.x < -this.bufferZone && n[C].x + this.offset < this.contentSize) {
              this.position_front++, this.position_back++;
              for (var G = 0; G < this.cellNum; G++) {
                var O, F;
                if (O = n[C + G]) this.setItemPositionX(O, O.x + this.offset), (F = this.position_back * this.cellNum + G) >= this.totalCount ? this.setItemActive(O, !1) : (O.active || this.setItemActive(O, !0), this.callItemScriteUpdate([this, F, O]));
              }
            }
          }
          this.scrollView.vertical ? this.lastContentPos = this.scrollView.content.y : this.lastContentPos = this.scrollView.content.x;
        }, n["scrollToOffset"] = function (t, n) {
          var r;
          (void 0 === n && (n = 1), this.scrollView) && (r = math["v2"](), this.scrollView["vertical"] ? r.y = t * this.itemSize : r.x = t * this.itemSize, this.scrollView["scrollToOffset"](r, n));
        }, n["scrollToBottom"] = function (t) {
          var n;
          n = this, void 0 === t && (t = 1), this.scrollView && (this.scrollView["scrollToBottom"](t), this["scheduleOnce"](function () {
            n["updataDataList"](n["dateArray"]);
          }, t + .1));
        }, n["scrollToTop"] = function (t) {
          var n;
          n = this, void 0 === t && (t = 1), this.scrollView && (this.scrollView["scrollToTop"](t), this["scheduleOnce"](function () {
            n["updataDataList"](n["dateArray"]);
          }, t + .1));
        }, n["remove"] = function (t) {
          var n;
          n = this.scrollView["getScrollOffset"](), Log(n, this["content"]["getComponent"](UITransform)["height"]), this["reset"](this["dateArray"]["length"]), this.scrollView["scrollToOffset"](math["v2"](0, n.y), .1);
        }, createClass(u, [function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t).key = 0, n.get = 0, n;
          }["apply"]())["key"] = "DateArray", t["get"] = function () {
            return this["dateArray"];
          }, t;
        }["bind"](this)["apply"]()]), u;
      }(Component)).prototype, "prefab", [D], (Pu(y = {}, "configurable", !0), Pu(y, "enumerable", !0), Pu(y, "writable", !0), Pu(y, "initializer", function () {
        return null;
      }), y)), z = applyDecoratedDescriptor(F.prototype, "poolKey", [L], (Pu(w = {}, "configurable", !0), Pu(w, "enumerable", !0), Pu(w, "writable", !0), Pu(w, "initializer", function () {
        return "";
      }), w)), U = applyDecoratedDescriptor(F.prototype, "delegate", [N], (Pu(_ = {}, "configurable", !0), Pu(_, "enumerable", !0), Pu(_, "writable", !0), Pu(_, "initializer", function () {
        return new Component["EventHandler"]();
      }), _)), H = applyDecoratedDescriptor(F.prototype, "initFinish", [P], (Pu(M = {}, "configurable", !0), Pu(M, "enumerable", !0), Pu(M, "writable", !0), Pu(M, "initializer", function () {
        return new Component["EventHandler"]();
      }), M)), V = applyDecoratedDescriptor(F.prototype, "delegateUpdate", [G], (Pu(S = {}, "configurable", !0), Pu(S, "enumerable", !0), Pu(S, "writable", !0), Pu(S, "initializer", function () {
        return new Component["EventHandler"]();
      }), S)), W = applyDecoratedDescriptor(F.prototype, "totalCount", [L], (Pu(A = {}, "configurable", !0), Pu(A, "enumerable", !0), Pu(A, "writable", !0), Pu(A, "initializer", function () {
        return 0;
      }), A)), J = applyDecoratedDescriptor(F.prototype, "spaceX", [L], (Pu(C = {}, "configurable", !0), Pu(C, "enumerable", !0), Pu(C, "writable", !0), Pu(C, "initializer", function () {
        return 0;
      }), C)), j = applyDecoratedDescriptor(F.prototype, "spaceY", [L], (Pu(x = {}, "configurable", !0), Pu(x, "enumerable", !0), Pu(x, "writable", !0), Pu(x, "initializer", function () {
        return 0;
      }), x)), O = F)) || O) || O)), cclegacy._RF["pop"]();
    }, w;
  }["bind"](this)["apply"]();
});