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
    f,
    h,
    v = to;
  return function () {
    var v,
      l,
      b = to[5],
      d = "setters",
      k = "execute";
    return Pu(v = {}, "setters", 0), Pu(v, "execute", 0), (l = v)["setters"] = [function (t) {
      var a = to;
      n = t["applyDecoratedDescriptor"], r = t["inheritsLoose"], i = t["initializerDefineProperty"], e = t["assertThisInitialized"];
    }, function (t) {
      var n = to;
      a = t["cclegacy"], u = t["_decorator"], s = t["Node"], o = t["UITransform"], c = t["Label"];
    }, function (t) {
      f = t["default"];
    }, function (t) {
      h = t["default"];
    }], l["execute"] = function () {
      var v,
        l,
        b,
        d,
        k,
        m,
        p,
        g,
        y = to,
        w = y[2],
        _ = y[5],
        M = y[6],
        S = "_RF",
        A = "GbzLoadingLayer";
      a["_RF"]["push"]({}, "bdfdd713--e66-3-43-95-b-add-e06292781271", "GbzLoadingLayer", void 0), l = u["ccclass"], b = u["property"], t("default", (d = l("GbzLoadingLayer"), k = b(s), d((g = n((p = function (t) {
        var n,
          a,
          u = to;
        return r(a = function () {
          for (var n, r, a = to, u = ro, s = a[4], o = a[2], c = a[5], f = (n = arguments)["length"], h = new Array(f), v = 0; v < f; v++) h[v] = n[v];
          return r = t["call"]["apply"](t, [this]["concat"](h)) || this, i(r, "fill", g, e(r)), r["time"] = 0, r["intTime"] = void 0, r["fillPro"] = 0, r["fillMaxWidth"] = 578, r["labPro"] = null, r["isHide"] = !1, r;
        }, t), (n = a["prototype"])["start"] = function () {
          var t = to,
            n = "fill",
            r = "getComponent",
            i = "labPro";
          this["fill"]["getComponent"](o)["width"] = 0, this["intTime"] = Date["now"](), this["labPro"] = this["fill"]["parent"]["getChildByName"]("labPro")["getComponent"](c);
        }, n["update"] = function (t) {
          var n = to,
            r = n[2],
            i = n[4],
            e = n[10],
            a = "fill",
            u = "time",
            s = "ins",
            c = "loading_rate",
            h = "fillPro",
            v = "getComponent",
            l = "width";
          this["fill"] && this["node"]["active"] && (this["time"] += t, f["ins"]["loading_rate"] > 0 && f["ins"]["loading_rate"] > this["fillPro"] ? this["fillPro"] = f["ins"]["loading_rate"] : this["fillPro"] = Math["max"](this["fillPro"], this["time"] / 2 * (1 - this["fillPro"])), this["fillPro"] >= .99 && (this["fillPro"] = .99), this["fill"]["getComponent"](o)["width"] = this["fillPro"] * this["fillMaxWidth"], this["labPro"]["string"] = Math["floor"](100 * this["fillPro"]) + pt, this["fill"]["children"][0][At] = this["fill"]["getComponent"](o)["width"], f["ins"]["loading_rate"] >= 1 && this["hide"]());
        }, a;
      }(h))["prototype"], "fill", [k], (Pu(v = {}, "configurable", !0), Pu(v, "enumerable", !0), Pu(v, "writable", !0), Pu(v, "initializer", function () {
        return null;
      }), v)), m = p)) || m)), a["_RF"]["pop"]();
    }, l;
  }["bind"](this)["apply"]();
});