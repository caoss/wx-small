var t = getApp();

Page({
    data: {
        isShow: !1,
        list: [],
        hasMore: !0,
        page: 1,
        isLoading: !1,
        info: null,
        isFirstLoad: !0
    },
    onLoad: function(a) {
        a.type && this.setData({
            type: a.type
        }), this.getInfo(), this.getLog(), this.setData({
            navHeight: t.globalData.navBarHeight
        });
    },
    onReachBottom: function() {
        this.getLog();
    },
    getInfo: function() {
        var a = this;
        t.request({
            url: "tourGroup/guide/kpiInfo",
            success: function(t) {
                0 === t.err && a.setData({
                    info: t.res
                });
            }
        });
    },
    getLog: function() {
        var a = this;
        !this.data.isLoading && this.data.hasMore && (this.setData({
            isLoading: !0
        }), wx.showLoading(), t.request({
            url: "tourGroup/guide/kpiLog",
            data: {
                page: a.data.page
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