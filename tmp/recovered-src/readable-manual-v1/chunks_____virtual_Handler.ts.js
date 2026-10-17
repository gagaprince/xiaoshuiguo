(function (t) {
  var n,
    r = to;
  return function () {
    var r,
      i,
      e = to[5],
      a = "setters",
      u = "execute";
    return Pu(r = {}, "setters", 0), Pu(r, "execute", 0), (i = r)["setters"] = [function (t) {
      n = t["cclegacy"];
    }], i["execute"] = function () {
      var r,
        i = to,
        e = i[2],
        a = "_RF",
        u = "Handler";
      n["_RF"]["push"]({}, "660f9dYosVK94gn+yW59a0L", "Handler", void 0), (r = t("Handler", function () {
        var t,
          n,
          r = to,
          i = r[3],
          e = r[5];
        return n = function (t, n, r, i) {
          var e = to,
            a = e[4],
            u = e[2];
          void 0 === t && (t = null), void 0 === n && (n = null), void 0 === r && (r = null), void 0 === i && (i = !1), this["caller"] = void 0, this["method"] = void 0, this["args"] = void 0, this["once"] = !1, this["_id"] = 0, this["setTo"](t, n, r, i);
        }, (t = n["prototype"])["setTo"] = function (t, r, i, e) {
          var a = to,
            u = a[2],
            s = a[4];
          return void 0 === e && (e = !1), this["_id"] = n["_gid"]++, this["caller"] = t, this["method"] = r, this["args"] = i, this["once"] = e, this;
        }, t["run"] = function () {
          var t,
            n,
            r = to,
            i = r[2],
            e = "method",
            a = "_id";
          return null == this["method"] ? null : (t = this["_id"], n = this["method"]["apply"](this["caller"], this["args"]), this["_id"] === t && this["once"] && this["recover"](), n);
        }, t["runWith"] = function (t) {
          var n,
            r,
            i = to,
            e = i[2],
            a = i[5],
            u = i[4],
            s = "method",
            o = "_id",
            c = "apply",
            f = "caller",
            h = "args";
          return null == this["method"] ? null : (r = this["_id"], n = null == t ? this["method"]["apply"](this["caller"], this["args"]) : this["args"] || t["unshift"] ? this["args"] ? this["method"]["apply"](this["caller"], this["args"]["concat"](t)) : this["method"]["apply"](this["caller"], t) : this["method"]["call"](this["caller"], t), this["_id"] === r && this["once"] && this["recover"](), n);
        }, t["clear"] = function () {
          var t = to,
            n = t[4];
          return this["caller"] = null, this["method"] = null, this["args"] = null, this;
        }, t["recover"] = function () {
          var t = to,
            r = t[3],
            i = "_id";
          this["_id"] > 0 && (this["_id"] = 0, n["_pool"]["push"](this["clear"]()));
        }, n["create"] = function (t, r, i, e) {
          var a = to,
            u = "_pool";
          return void 0 === i && (i = null), void 0 === e && (e = !0), n["_pool"]["length"] ? n["_pool"]["pop"]()["setTo"](t, r, i, e) : new n(t, r, i, e);
        }, n;
      }()))["_pool"] = [], r["_gid"] = 1, n["_RF"]["pop"]();
    }, i;
  }["bind"](this)["apply"]();
});