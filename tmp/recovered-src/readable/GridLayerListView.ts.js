(function (t) {
  var inheritsLoose, cclegacy, _decorator, ScrollView, UITransform, Node, Widget, math, warn, GridListView;
  return function () {
    var h, v;
    return Pu(h = {}, "setters", 0), Pu(h, "execute", 0), (v = h).setters = [function (t) {
      inheritsLoose = t["inheritsLoose"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], ScrollView = t["ScrollView"], UITransform = t["UITransform"], Node = t["Node"], Widget = t["Widget"], math = t["math"], warn = t["warn"];
    }, function (t) {
      GridListView = t["default"];
    }], v.execute = function () {
      var h, v, l;
      cclegacy._RF["push"]({}, "9d992VDm1FECo27GTxJW4Cj", "GridLayerListView", void 0), h = _decorator["ccclass"], _decorator["property"], v = _decorator["requireComponent"], t("default", h("GridLayerListView")(l = v(ScrollView)(l = function (t) {
        var r, i;
        return inheritsLoose(i = function () {
          for (var n, r, u = (n = arguments)["length"], s = new Array(u), o = 0; o < u; o++) s[o] = n[o];
          return (r = t["call"]["apply"](t, [this]["concat"](s)) || this)["contents"] = [], r["root"] = null, r;
        }, t), (r = i["prototype"])["init"] = function () {
          this["initParam"](), this["initContent"](), this["addItems"]();
        }, r["setLayer"] = function (t, n) {
          t.getComponent(UITransform).width = n.getComponent(UITransform).width, t.getComponent(UITransform).height = n.getComponent(UITransform).height, t.getComponent(UITransform).anchorX = n.getComponent(UITransform).anchorX, t.getComponent(UITransform).anchorY = n.getComponent(UITransform).anchorY;
        }, r["initContent"] = function () {
          var t;
          if (t = this["content"], 0 == this.contents.length) {
            var m, p, g;
            g = (m = this["getItem"]()).children.length, (p = new Node()).name = m.name, p.getComponent(UITransform) || p.addComponent(UITransform), this.setLayer(p, t), this.root = p, t.addChild(p);
            for (var y = 0; y < g; y++) {
              var w;
              (w = new Node()).name = m.children[y].name, w.getComponent(UITransform) || w.addComponent(UITransform), this.setLayer(w, t), t.addChild(w), this.contents[y] = w;
            }
            this["putItem"](m);
          } else {
            var _;
            _ = this.root, this.setLayer(_, t);
            for (var M = 0; M < this.contents.length; M++) {
              var S;
              S = this.contents[M], this.setLayer(S, t);
            }
          }
        }, r["setItemPosition"] = function (t, n, r) {
          var i;
          if (t["setPosition"](n, r), i = t["list"]) for (var a = 0; a < i["length"]; a++) {
            var u, s;
            (s = (u = i[a])["initPos"]) && (u.x = n + s.x, u.y = r + s.y);
          }
        }, r["setItemPositionX"] = function (t, n) {
          var r;
          if (t.x = n, r = t["list"]) for (var e = 0; e < r["length"]; e++) {
            var a, u;
            (u = (a = r[e])["initPos"]) && (a.x = n + u.x);
          }
        }, r["setItemPositionY"] = function (t, n) {
          var r;
          if (t.y = n, r = t["list"]) for (var e = 0; e < r["length"]; e++) {
            var a, u;
            (u = (a = r[e])["initPos"]) && (a.y = n + u.y);
          }
        }, r["setItemActive"] = function (t, n) {
          var r;
          if (t.active = n, r = t["list"]) for (var a = 0; a < r["length"]; a++) r[a].active = n;
        }, r["addChild"] = function (t) {
          if (t.parent) this["setItemActive"](t, !0);else {
            var h;
            if (h = t.children.length, t.list = [], h > 0) for (var v = 0, l = t.children; l.length > 0;) {
              var b;
              if (!(b = l[0])) {
                warn(" element is null ", v);
                break;
              }
              b["getComponent"](Widget) && b["removeComponent"](Widget), b.parent = this["contents"][v], b["initPos"] = math["v2"](b.x, b.y), t.list["push"](b), v++;
            }
            t.parent = this["root"];
          }
        }, i;
      }(GridListView)) || l) || l), cclegacy._RF["pop"]();
    }, v;
  }["bind"](this)["apply"]();
});