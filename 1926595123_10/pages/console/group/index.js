var t = getApp();

Page({
    data: {
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
        currentType: 1,
        groupId: "",
        currentUserId: "",
        page: 1,
        hasMore: !0,
        list: []
    },
    onLoad: function(t) {
        t.verified && this.setData({
            currentType: t.verified,
            currentIndex: this.data.tabs.findIndex(function(e) {
                return e.id == t.verified;
            })
        });
    },
    onShow: function() {
        this.setData({
            page: 1
        }), this.getGroupList();
    },
    onReachBottom: function() {
        this.data.hasMore && this.getGroupList();
    },
    getGroupList: function() {
        var e = this;
        wx.showLoading(), t.request({
            url: "tourGroup/admin/groupList",
            data: {
                page: this.data.page,
                is_verified: this.data.tabs[this.data.currentIndex].id
            },
            success: function(t) {
                if (0 == t.err) {
                    var i = t.res;
                    e.setData({
                        list: 1 == e.data.page ? i.list : e.data.list.concat(i.list),
                        page: i.nextPage,
                        hasMore: i.hasMore
                    });
                }
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    tabChangeHandler: function(t) {
        this.setData({
            list: [],
            page: 1,
            hasMore: !0,
            currentIndex: t.detail.index,
            currentType: this.data.tabs[t.detail.index].id
        }), this.getGroupList();
    },
    applyVerifiedHandler: function(e) {
        var i = this, a = e.currentTarget.dataset.verified, n = this.data.list.filter(function(t) {
            return t.active;
        });
        if (n.length) return !1;
        wx.showLoading(), t.request({
            url: "tourGroup/admin/groupVerify",
            data: {
                group_ids: n.map(function(t) {
                    return t.id;
                }),
                is_verified: a
            },
            success: function(t) {
                0 == t.err && (wx.showToast({
                    title: "操作成功"
                }), i.getGroupList());
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    chooseHandler: function(t) {
        var e = t.currentTarget.dataset.id, i = (t.currentTarget.dataset.index, this.data.list.find(function(t) {
            return t.id === e;
        }));
        i.active = !i.active, this.setData({
            list: this.data.list,
            chooseAll: this.data.list.every(function(t) {
                return t.active;
            })
        });
    },
    chooseAllHandler: function() {
        this.setData({
            list: this.data.list.map(function(t) {
                return t.active = !0, t;
            }),
            chooseAll: !0
        });
    },
    cancelChooseAllHandler: function() {
        this.setData({
            list: this.data.list.map(function(t) {
                return t.active = !1, t;
            }),
            chooseAll: !1
        });
    }
});