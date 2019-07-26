var t = getApp();

Page({
    data: {
        list: [],
        page: 1,
        hasMore: !0,
        loadingLock: !1
    },
    onLoad: function(t) {},
    onShow: function() {
        this.getList(!0);
    },
    onPullDownRefresh: function() {
        this.getList(!0);
    },
    onReachBottom: function() {
        this.getList();
    },
    getList: function(a) {
        var s = this;
        a && this.setData({
            page: 1,
            hasMore: !0
        }), !this.data.loadingLock && this.data.hasMore && (this.setData({
            loadingLock: !0
        }), t.request({
            url: "tourGroup/user/groupList",
            data: {
                page: this.data.page
            },
            success: function(t) {
                0 == t.err && s.setData({
                    list: 1 == s.data.page ? t.res.list : s.data.list.concat(t.res.list),
                    page: t.res.nextPage,
                    hasMore: t.res.hasMore
                });
            },
            complete: function() {
                s.setData({
                    loadingLock: !1
                }), wx.stopPullDownRefresh();
            }
        }));
    },
    getScanner: function() {
        wx.scanCode({
            success: function(t) {
                var a = t.result.split(":");
                wx.navigateTo({
                    url: "/pages/user/group/index?group_id=" + a[1]
                });
            }
        });
    }
});