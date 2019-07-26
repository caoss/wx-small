var t = getApp();

Page({
    data: {
        list: [],
        page: 1,
        hasMore: !0,
        loadingLock: !1,
        tabs: [ {
            id: 1,
            name: "已通过"
        }, {
            id: 0,
            name: "待审核"
        }, {
            id: -1,
            name: "未通过"
        } ],
        currentIndex: 0,
        currentType: 1
    },
    onLoad: function(t) {
        t.verified && this.setData({
            currentIndex: this.data.tabs.findIndex(function(e) {
                return e.id == t.verified;
            })
        }), this.setData({
            currentType: this.data.tabs[this.data.currentIndex].id
        }), this.getList(!0);
    },
    onPullDownRefresh: function() {
        this.getList(!0);
    },
    onReachBottom: function() {
        this.getList();
    },
    tabChangeHandler: function(t) {
        t && this.setData({
            currentType: this.data.tabs[t.detail.index].id
        }), this.getList(!0);
    },
    newGroupListener: function() {
        this.setData({
            currentType: 0,
            currentIndex: 1
        }), this.getList(!0), wx.showToast({
            title: "提交成功"
        });
    },
    getList: function(e) {
        var a = this;
        e && this.setData({
            page: 1,
            hasMore: !0
        }), !this.data.loadingLock && this.data.hasMore && (this.setData({
            loadingLock: !0
        }), wx.showLoading(), t.request({
            url: "tourGroup/guide/groupList",
            data: {
                page: this.data.page,
                is_verified: this.data.currentType
            },
            success: function(t) {
                0 == t.err && a.setData({
                    list: 1 == a.data.page ? t.res.list : a.data.list.concat(t.res.list),
                    page: t.res.nextPage,
                    hasMore: t.res.hasMore
                });
            },
            complete: function() {
                a.setData({
                    loadingLock: !1
                }), wx.hideLoading(), wx.stopPullDownRefresh();
            }
        }));
    }
});