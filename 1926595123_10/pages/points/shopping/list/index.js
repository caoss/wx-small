var t = getApp();

Page({
    data: {
        isShow: !1,
        list: [],
        hasMore: !0,
        page: 1,
        isLoading: !1,
        info: {},
        isFirstLoad: !0,
        type: "transfer"
    },
    onLoad: function(t) {
        t.type && this.setData({
            type: t.type
        }), this.getLog();
    },
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
                type: a.data.type
            },
            success: function(t) {
                0 === t.err && a.setData({
                    list: a.data.list.concat(t.res.list),
                    hasMore: t.res.hasMore,
                    page: t.res.nextPage,
                    isLoading: !1,
                    isFirstLoad: !1
                });
            },
            complete: function() {
                wx.hideLoading();
            }
        }));
    }
});