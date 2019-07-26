var t = getApp();

Page({
    data: {
        isShow: !1,
        list: [],
        hasMore: !0,
        page: 1,
        isLoading: !1,
        info: {}
    },
    onLoad: function() {
        this.getLog();
    },
    onShow: function() {},
    onReachBottom: function() {
        this.getLog();
    },
    pointClickHandler: function(t) {
        this.setData({
            isShow: !0,
            info: t && t.currentTarget.dataset.info
        });
    },
    modalClickHandler: function(t) {
        t.detail.confirm;
        this.setData({
            isShow: !1
        });
    },
    getLog: function() {
        var a = this;
        !this.data.isLoading && this.data.hasMore && (this.setData({
            isLoading: !0
        }), wx.showLoading(), t.request({
            url: "points/getLog",
            data: {
                page: a.data.page,
                type: "receive"
            },
            success: function(t) {
                0 === t.err && a.setData({
                    list: t.res.list,
                    hasMore: t.res.hasMore,
                    nextPage: t.res.nextPage,
                    isLoading: !1
                });
            },
            complete: function() {
                wx.hideLoading();
            }
        }));
    }
});