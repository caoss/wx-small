var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../utils/config.js")), a = getApp(), e = (require("../../utils/api.js"), 
require("../../utils/wxRequest.js"), require("../../tradis/tradis.js"));

Page({
    data: {
        navBar: {},
        pageIn: "index",
        gamelist: []
    },
    onLoad: function() {
        this.data.navBar.statusBarHeight = a.globalData.statusBarHeight, this.data.navBar.title = "弹幕文字", 
        this.data.navBar.type = 0, this.setData({
            navBar: this.data.navBar
        }), e.tradis(this), this.fetchAD();
    },
    goDetail: function(t) {
        wx.navigateTo({
            url: "/pages/detail/" + t.currentTarget.dataset.name,
            success: function(e) {
                a.aldstat.sendEvent("点击详情", {
                    "类别": t.currentTarget.dataset.typename
                });
            }
        });
    },
    fetchAD: function() {
        var a = this;
        wx.request({
            url: "https://api.zjjunlv.com/juliang/hot.php?cid=" + t.default.CID,
            success: function(t) {
                200 == t.data.code && a.setData({
                    gamelist: t.data.data
                });
            }
        });
    },
    openGame: function(t) {
        wx.navigateToMiniProgram({
            appId: t.currentTarget.dataset.appid,
            path: t.currentTarget.dataset.path,
            success: function(e) {
                a.aldstat.sendEvent("打开游戏", {
                    name: t.currentTarget.dataset.name
                });
            },
            fail: function(a) {
                console.log(a), wx.previewImage({
                    urls: [ t.currentTarget.dataset.fdimg ]
                });
            }
        });
    }
});