function t() {
    var t = wx.getStorageSync("systemInfoV2");
    return void 0 === t || void 0 === t.updata || void 0 === t.IOS ? (t = wx.getSystemInfoSync(), 
    t.IOS = !1, t.updata = !0, t.system = t.system.toLowerCase(), t.system.indexOf("ios") > -1 && (t.IOS = !0), 
    n.isNull(t.statusBarHeight) ? t.statusBarHeight = 40 : t.statusBarHeight = 750 * t.statusBarHeight / t.windowWidth, 
    console.log("windowWidth:" + t.windowWidth + " windowHeight" + t.windowHeight + " statusBarHeight:" + t.statusBarHeight + "rpx pixelRatio:" + t.pixelRatio), 
    wx.setStorageSync("systemInfoV2", t), t) : t;
}

function e(t, e) {
    t = t.split("."), e = e.split(".");
    for (var n = Math.max(t.length, e.length); t.length < n; ) t.push("0");
    for (;e.length < n; ) e.push("0");
    for (var i = 0; i < n; i++) {
        var r = parseInt(t[i]), o = parseInt(e[i]);
        if (r > o) return 1;
        if (r < o) return -1;
    }
    return 0;
}

var n = require("CommonHelper.js");

module.exports = {
    systemInfo: t,
    ScreenOn: function() {
        wx.setKeepScreenOn && wx.setKeepScreenOn({
            keepScreenOn: !0
        });
    },
    getStatusBarHeight: function() {
        return t().statusBarHeight;
    },
    getWindowSize: function() {
        var t = t();
        return {
            width: t().windowWidth,
            height: t().windowHeight
        };
    },
    getWindowWidth: function() {
        return t().windowWidth;
    },
    getWindowHeight: function() {
        return t().windowHeight;
    },
    rpx2px: function(e) {
        return e * t().windowWidth / 750;
    },
    curVersionBiggerThan: function(t) {
        return 1 == e(wx.getSystemInfoSync().SDKVersion, t);
    }
};