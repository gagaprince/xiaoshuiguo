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
      n = t["inheritsLoose"];
    }, function (t) {
      var n = to;
      r = t["cclegacy"], i = t["_decorator"], e = t["EditBox"], a = t["Label"], u = t["Node"];
    }, function (t) {
      s = t["default"];
    }, function (t) {
      o = t["default"];
    }, function (t) {
      c = t["default"];
    }, function (t) {
      f = t["ENUM_UI"];
    }, null, function (t) {
      h = t["default"];
    }], l["execute"] = function () {
      var v,
        l,
        b = to,
        d = b[5],
        k = "_RF",
        m = "GbzAviseLayer";
      r["_RF"]["push"]({}, "dbb58wIh1lA1LX7NIY8fsHK", "GbzAviseLayer", void 0), v = i["ccclass"], i["property"], t("default", v("GbzAviseLayer")(l = function (t) {
        var r,
          i,
          h = to,
          v = h[7],
          l = h[6];
        return n(i = function () {
          for (var n, r, i = to, e = ro, a = i[4], u = i[2], s = i[8], o = i[7], c = (n = arguments)["length"], f = new Array(c), h = 0; h < c; h++) f[h] = n[h];
          return (r = t["call"]["apply"](t, [this]["concat"](f)) || this)["btnClose"] = null, r["btn_submit"] = null, r["editBox"] = null, r["maxLength"] = 100, r["minLength"] = 1, r["numLab"] = null, r["btns"] = null, r["adviseType"] = 0, r["feedback_type"] = 0, r["feedback_content"] = "", r["isIn"] = !1, r;
        }, t), (r = i["prototype"])["onLoad"] = function () {
          var t,
            n,
            r = to,
            i = r[3],
            s = r[6],
            o = r[2],
            c = "node",
            f = "getChildByName",
            h = "btnClose",
            v = "on",
            l = "click",
            b = "btn_submit",
            d = "editBox",
            k = "getComponent",
            m = "btns",
            p = "onEditEnd",
            g = "numLab";
          n = this, t = this["node"]["getChildByName"]("style")["getChildByName"]("panel")["getChildByName"]("bg"), this["btnClose"] = t["getChildByName"]("btnClose"), this["btnClose"]["on"]("click", this["onClose"], this), this["btn_submit"] = t["getChildByName"]("btn_submit"), this["btn_submit"]["on"]("click", this["onSubmit"], this), this["editBox"] = t["getChildByName"]("editBox")["getComponent"](e), this["btns"] = t["getChildByName"]("btns");
          for (var y = function (t) {
              var r = to;
              n["btns"]["children"][t]["on"](u["EventType"]["TOUCH_START"], function (r) {
                n["onButtonTouched"](t);
              }, n);
            }, w = 0; w < this["btns"]["children"]["length"]; w++) y(w);
          this["editBox"]["node"]["on"]("editing-did-ended", this["onEditEnd"], this), this["editBox"]["node"]["on"]("editing-return", this["onEditEnd"], this), this["editBox"]["node"]["on"]("text-changed", this["onTextChanged"], this), this["numLab"] = t["getChildByName"]("numLab")["getComponent"](a);
        }, r["onEnable"] = function () {
          var t = to;
          this["isIn"] = !1, this["feedback_content"] = "", this["editBox"]["string"] = "", this["onButtonTouched"](this["feedback_type"]);
        }, r["onTextChanged"] = function (t) {
          var n,
            r = to,
            i = ro,
            e = r[7],
            a = r[2],
            u = r[4],
            s = "string",
            o = "length";
          (n = t["string"])["length"] > this["maxLength"] ? c["strTipLab"]("超出字数", f["LAYER_Advise"], 200, 50) : this["numLab"]["string"] = n["length"] + "/100";
        }, r["onButtonTouched"] = function (t) {
          for (var n = to, r = n[4], i = "btns", e = "children", a = 0; a < this["btns"]["children"]["length"]; a++) {
            var u;
            (u = this["btns"]["children"][a]["children"][0]) && (u["active"] = a === t);
          }
          this["feedback_type"] = t;
        }, r["onSubmit"] = function () {
          var t = to,
            n = ro,
            r = t[4],
            i = t[5],
            e = t[11],
            a = 200,
            u = 40,
            h = "feedback_content",
            v = "strTipLab",
            l = "LAYER_Advise",
            b = "isIn",
            d = "gameMgr",
            k = "adviseTime",
            m = "lastSubmitTime";
          if (this["feedback_content"]["length"] < 10) c["strTipLab"]("字数不少于10", f["LAYER_Advise"], 200, 40);else {
            if (this["isIn"]) return;
            if (this["isIn"] = !0, s["gameMgr"]["adviseTime"] - s["gameMgr"]["lastSubmitTime"] < 1800 && s["gameMgr"]["lastSubmitTime"] > 0) return void c["strTipLab"]("30分钟内只能提交一次", f["LAYER_Advise"], 300, 40);
            s["gameMgr"]["lastSubmitTime"] = s["gameMgr"]["adviseTime"], c["strTipLab"]("提交成功", f["LAYER_Advise"], 200, 40), this["editBox"]["string"] = "", o["ins"]["loginFeedback"](this["feedback_type"], this["feedback_content"]), this["scheduleOnce"](function () {
              var t = to;
              s["uiMgr"]["toggle"](f["LAYER_Advise"], !1);
            }, 1);
          }
        }, r["onEditEnd"] = function (t) {
          var n,
            r = to;
          n = t["string"], this["feedback_content"] = n;
        }, r["onClose"] = function () {
          var t = to;
          s["uiMgr"]["toggle"](f["LAYER_Advise"], !1);
        }, i;
      }(h)) || l), r["_RF"]["pop"]();
    }, l;
  }["bind"](this)["apply"]();
});