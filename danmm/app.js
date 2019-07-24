require("./utils/ald-stat.js");

var e = require("./server/StatisticsLogic.js"), r = require("./server/BarrageLogic.js"), t = require("./server/BarrageInfo.js"), o = require("./utils/CommonHelper.js");

App({
    globalData: {
        userInfo: null,
        loginState: !1,
        systemInfo: null,
        logic: null,
        barrageType: t.BarrageType.NORMAL,
        otherPathToNoraml: []
    },
    setBarrageType: function(e) {
        this.globalData.barrageType = e;
    },
    getBarrageType: function() {
        return this.globalData.barrageType;
    },
    onLaunch: function(e) {
        var t = this;
        wx.getSystemInfo({
            success: function(e) {
                t.globalData.systemInfo = e;
            }
        }), t.globalData.logic = new r.Logic(), t.globalData.logic.init(this);
    },
    getLogic: function() {
        return this.globalData.logic;
    },
    getSystemInfo: function() {
        return this.globalData.systemInfo;
    },
    setOtherPathToNoramlText: function(e, r) {
        this.globalData.otherPathToNoraml[e] = r;
    },
    getOtherPathToNoramlText: function(e) {
        return this.globalData.otherPathToNoraml[e];
    },
    onShow: function(r) {
        o.isNull(r) || 1037 != r.scene || (o.isNull(r.referrerInfo) ? console.log("other app open this app,other appId is null scene:" + r.scene) : (console.log("other app open this app,other appId:" + r.referrerInfo.appId), 
        e.reportSourceRecordCome(r.referrerInfo.appId, this)));
    }
});