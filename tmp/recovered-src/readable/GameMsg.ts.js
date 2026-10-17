(function (t) {
  var cclegacy;
  return function () {
    var r, i;
    return Pu(r = {}, "setters", 0), Pu(r, "execute", 0), (i = r).setters = [function (t) {
      cclegacy = t["cclegacy"];
    }], i.execute = function () {
      var r;
      cclegacy._RF["push"]({}, "9caa5Do4HBBgqCpgcMfS41R", "GameMsg", void 0), r = t("default", function () {
        this.canGetTTRwd = "canGetTTRwd", this.onGetTTSideBarRwd = "onGetTTSideBarRwd", this["onGetTTShortcutRwd"] = "onGetTTSideBarRwd", this.onGetWxMyGameIn = "onGetWxMyGameIn", this["lStartLoadGameBackUI"] = "StartLoadGameBackUI", this["lStartLoadHomeBackUI"] = "StartLoadHomeBackUI", this["lStartLoadAllBackUI"] = "StartLoadAllBackUI", this.StopPkAi = "StopPkAi", this.PkTicketNumRefresh = "PkTicketNumRefresh", this.PkPropNumRefresh = "PkPropNumRefresh", this.backInHome = "backInHome", this.joinRoomError = "joinRoomError", this.battleGetUsetInfoEd = "battleGetUsetInfoEd", this.shareClick = "shareClick", this.CreateFruitEd = "CreateFruitEd", this.moveFruitAll = "moveFruitAll", this.changelinearDamping = "changelinearDamping";
      }), t("gameMsg", new r()), cclegacy._RF["pop"]();
    }, i;
  }["bind"](this)["apply"]();
});