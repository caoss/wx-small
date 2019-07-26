var t = getApp();

Page({
    data: {
        list: [],
        hasMore: !0,
        page: 1,
        loadingLock: !1
    },
    onLoad: function(t) {
        this.getList();
    },
    getList: function() {
        var a = this, s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        if (this.data.loadingLock || !this.data.hasMore) return !1;
        this.setData({
            loadingLock: !0
        }), t.request({
            url: "message/list",
            data: {
                page: s
            },
            success: function(t) {
                0 === t.err && a.setData({
                    list: a.data.list.concat(t.res.list),
                    hasMore: t.res.hasMore,
                    page: t.res.nextPage,
                    loadingLock: !1
                });
            }
        });
    },
    onReachBottom: function() {
        this.getList(this.data.page);
    }
});