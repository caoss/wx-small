var t = getApp();

Page({
    data: {
        stats: {}
    },
    onLoad: function(t) {},
    onShow: function() {
        this.getStats();
    },
    getStats: function() {
        var e = this;
        wx.showLoading(), t.request({
            url: "tourGroup/admin/stats",
            success: function(t) {
                0 == t.err && e.setData({
                    stats: t.res
                });
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    checkGroupStatus: function(t) {
        var e = t && t.currentTarget.dataset.verified;
        wx.navigateTo({
            url: "/pages/console/group/index?verified=" + e
        });
    },
    checkGuideStatus: function(t) {
        var e = t && t.currentTarget.dataset.verified;
        wx.navigateTo({
            url: "/pages/console/guide/index?verified=" + e
        });
    }
});