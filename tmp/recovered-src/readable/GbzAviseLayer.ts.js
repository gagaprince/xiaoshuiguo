(function (t) {
  var inheritsLoose, cclegacy, _decorator, EditBox, Label, Node, GbzInstance, GbzSdkManager, SOUtil, ENUM_UI, GbzBaselayer;
  return function () {
    var v, l;
    return Pu(v = {}, "setters", 0), Pu(v, "execute", 0), (l = v).setters = [function (t) {
      inheritsLoose = t["inheritsLoose"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], EditBox = t["EditBox"], Label = t["Label"], Node = t["Node"];
    }, function (t) {
      GbzInstance = t["default"];
    }, function (t) {
      GbzSdkManager = t["default"];
    }, function (t) {
      SOUtil = t["default"];
    }, function (t) {
      ENUM_UI = t["ENUM_UI"];
    }, null, function (t) {
      GbzBaselayer = t["default"];
    }], l.execute = function () {
      var v, l;
      cclegacy._RF["push"]({}, "dbb58wIh1lA1LX7NIY8fsHK", "GbzAviseLayer", void 0), v = _decorator["ccclass"], _decorator["property"], t("default", v("GbzAviseLayer")(l = function (t) {
        var r, i;
        return inheritsLoose(i = function () {
          for (var n, r, c = (n = arguments)["length"], f = new Array(c), h = 0; h < c; h++) f[h] = n[h];
          return (r = t["call"]["apply"](t, [this]["concat"](f)) || this)["btnClose"] = null, r["btn_submit"] = null, r["editBox"] = null, r["maxLength"] = 100, r["minLength"] = 1, r["numLab"] = null, r["btns"] = null, r["adviseType"] = 0, r["feedback_type"] = 0, r["feedback_content"] = "", r["isIn"] = !1, r;
        }, t), (r = i["prototype"])["onLoad"] = function () {
          var t, n;
          n = this, t = this.node.getChildByName("style").getChildByName("panel").getChildByName("bg"), this.btnClose = t.getChildByName("btnClose"), this.btnClose.on("click", this["onClose"], this), this.btn_submit = t.getChildByName("btn_submit"), this.btn_submit.on("click", this["onSubmit"], this), this.editBox = t.getChildByName("editBox").getComponent(EditBox), this.btns = t.getChildByName("btns");
          for (var y = function (t) {
              n["btns"]["children"][t]["on"](Node["EventType"]["TOUCH_START"], function (r) {
                n["onButtonTouched"](t);
              }, n);
            }, w = 0; w < this.btns["children"]["length"]; w++) y(w);
          this.editBox.node.on("editing-did-ended", this.onEditEnd, this), this.editBox.node.on("editing-return", this.onEditEnd, this), this.editBox.node.on("text-changed", this["onTextChanged"], this), this.numLab = t.getChildByName("numLab").getComponent(Label);
        }, r["onEnable"] = function () {
          this["isIn"] = !1, this["feedback_content"] = "", this["editBox"]["string"] = "", this["onButtonTouched"](this["feedback_type"]);
        }, r["onTextChanged"] = function (t) {
          var n;
          (n = t.string).length > this["maxLength"] ? SOUtil["strTipLab"]("超出字数", ENUM_UI["LAYER_Advise"], 200, 50) : this["numLab"].string = n.length + "/100";
        }, r["onButtonTouched"] = function (t) {
          for (var a = 0; a < this.btns.children["length"]; a++) {
            var u;
            (u = this.btns.children[a].children[0]) && (u["active"] = a === t);
          }
          this["feedback_type"] = t;
        }, r["onSubmit"] = function () {
          if (this.feedback_content["length"] < 10) SOUtil.strTipLab("字数不少于10", ENUM_UI.LAYER_Advise, 200, 40);else {
            if (this.isIn) return;
            if (this.isIn = !0, GbzInstance.gameMgr.adviseTime - GbzInstance.gameMgr.lastSubmitTime < 1800 && GbzInstance.gameMgr.lastSubmitTime > 0) return void SOUtil.strTipLab("30分钟内只能提交一次", ENUM_UI.LAYER_Advise, 300, 40);
            GbzInstance.gameMgr.lastSubmitTime = GbzInstance.gameMgr.adviseTime, SOUtil.strTipLab("提交成功", ENUM_UI.LAYER_Advise, 200, 40), this["editBox"]["string"] = "", GbzSdkManager["ins"]["loginFeedback"](this["feedback_type"], this.feedback_content), this["scheduleOnce"](function () {
              GbzInstance["uiMgr"]["toggle"](ENUM_UI["LAYER_Advise"], !1);
            }, 1);
          }
        }, r["onEditEnd"] = function (t) {
          var n;
          n = t["string"], this["feedback_content"] = n;
        }, r["onClose"] = function () {
          GbzInstance["uiMgr"]["toggle"](ENUM_UI["LAYER_Advise"], !1);
        }, i;
      }(GbzBaselayer)) || l), cclegacy._RF["pop"]();
    }, l;
  }["bind"](this)["apply"]();
});