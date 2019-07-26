var t = getApp();

Page({
    data: {
        details: {}
    },
    onLoad: function(t) {
        this.getDetail(t.id);
    },
    onShow: function() {
        t.loadFontFace();
    },
    getDetail: function(a) {
        var e = this;
        t.request({
            url: "points/detail",
            data: {
                id: a
            },
            success: function(t) {
                0 == t.err && e.setData({
                    details: t.res
                });
            }
        });
    },
    acceptHandler: function(a) {
        var e = this;
        wx.showLoading(), a && t.request({
            url: "points/accept",
            data: {
                id: e.data.details.id
            },
            success: function(t) {
                0 == t.err && (wx.showToast({
                    title: "领取成功"
                }), e.setData({
                    details: t.res
                }));
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    }
});