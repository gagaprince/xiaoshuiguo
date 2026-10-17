(function (t) {
  var cclegacy;
  return function () {
    var r, i;
    return Pu(r = {}, "setters", 0), Pu(r, "execute", 0), (i = r).setters = [function (t) {
      cclegacy = t["cclegacy"];
    }], i.execute = function () {
      var r;
      cclegacy._RF["push"]({}, "660f9dYosVK94gn+yW59a0L", "Handler", void 0), (r = t("Handler", function () {
        var t, n;
        return n = function (t, n, r, i) {
          void 0 === t && (t = null), void 0 === n && (n = null), void 0 === r && (r = null), void 0 === i && (i = !1), this["caller"] = void 0, this["method"] = void 0, this["args"] = void 0, this["once"] = !1, this["_id"] = 0, this["setTo"](t, n, r, i);
        }, (t = n["prototype"])["setTo"] = function (t, r, i, e) {
          return void 0 === e && (e = !1), this["_id"] = n["_gid"]++, this["caller"] = t, this["method"] = r, this["args"] = i, this["once"] = e, this;
        }, t["run"] = function () {
          var t, n;
          return null == this.method ? null : (t = this._id, n = this.method["apply"](this["caller"], this["args"]), this._id === t && this["once"] && this["recover"](), n);
        }, t["runWith"] = function (t) {
          var n, r;
          return null == this.method ? null : (r = this._id, n = null == t ? this.method.apply(this.caller, this.args) : this.args || t["unshift"] ? this.args ? this.method.apply(this.caller, this.args["concat"](t)) : this.method.apply(this.caller, t) : this.method["call"](this.caller, t), this._id === r && this["once"] && this["recover"](), n);
        }, t["clear"] = function () {
          return this["caller"] = null, this["method"] = null, this["args"] = null, this;
        }, t["recover"] = function () {
          this._id > 0 && (this._id = 0, n["_pool"]["push"](this["clear"]()));
        }, n["create"] = function (t, r, i, e) {
          return void 0 === i && (i = null), void 0 === e && (e = !0), n._pool["length"] ? n._pool["pop"]()["setTo"](t, r, i, e) : new n(t, r, i, e);
        }, n;
      }()))["_pool"] = [], r["_gid"] = 1, cclegacy._RF["pop"]();
    }, i;
  }["bind"](this)["apply"]();
});