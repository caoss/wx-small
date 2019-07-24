var e = require("../../libs/wechat-weapp-mobx/observer").observer;

getApp();

Page(e({
    props: {
        homeStore: require("../../store/index.js").homeStore
    },
    data: {
        nullHouse: !1
    },
    onLoad: function(e) {},
    onUnload: function() {},
    copylink: function(e) {
        wx.setClipboardData({
            data: "https://neets.cc/jdd-download/?id=jdd/recovery_release"
        }), this.setData({
            nullHouse: !1
        });
    },
    showPop: function() {
        this.setData({
            nullHouse: !0
        });
    },
    outbank: function() {
        this.setData({
            nullHouse: !1
        });
    }
}));