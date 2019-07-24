require("./utils/ald-stat.js"), require("./utils/md5.js"), require("./server/StatisticsLogic.js");

var a = require("./server/BarrageLogic.js"), t = require("./server/BarrageInfo.js");

require("./utils/CommonHelper.js");

App({
    onLaunch: function() {
        var t = this, e = this;
        wx.getSystemInfo({
            success: function(a) {
                e.globalData.systemInfo = a;
            }
        }), e.globalData.logic = new a.Logic(), e.globalData.logic.init(), wx.getSystemInfo({
            success: function(a) {
                console.log(a.system), t.globalData.model2 = a.model, t.globalData.dev = a.system, 
                t.globalData.windowHeight = a.windowHeight, t.globalData.statusBarHeight = 2 * a.statusBarHeight, 
                t.globalData.wW = 2 * a.windowWidth, t.globalData.wH = 2 * a.windowHeight, -1 != a.system.indexOf("Android") && (console.log("安卓"), 
                t.globalData.device = 2), -1 != a.system.indexOf("iOS") && (console.log("IOS"), 
                t.globalData.device = 1), -1 != a.model.indexOf("iPhone X") && (t.globalData.model = 1);
            }
        });
    },
    setBarrageType: function(a) {
        this.globalData.barrageType = a;
    },
    getBarrageType: function() {
        return this.globalData.barrageType;
    },
    globalData: {
        webUrl: "",
        userInfo: null,
        statusBarHeight: 0,
        wW: 0,
        wH: 0,
        device: 0,
        model: 0,
        loginState: !1,
        systemInfo: null,
        logic: null,
        barrageType: t.BarrageType.NORMAL,
        otherPathToNoraml: []
    },
    getLogic: function() {
        return this.globalData.logic;
    },
    getSystemInfo: function() {
        return this.globalData.systemInfo;
    },
    setOtherPathToNoramlText: function(a, t) {
        this.globalData.otherPathToNoraml[a] = t;
    },
    getOtherPathToNoramlText: function(a) {
        return this.globalData.otherPathToNoraml[a];
    }
});