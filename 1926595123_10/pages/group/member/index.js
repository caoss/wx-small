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
        }), this.setData({
            groupId: t.group_id
        }), this.getMemberList(t.group_id);
    },
    onReachBottom: function() {
        this.data.hasMore && this.getMemberList(this.data.page);
    },
    getMemberList: function(e) {
        var i = this;
        wx.showLoading(), t.request({
            url: "tourGroup/guide/groupMemberList",
            data: {
                page: this.data.page,
                group_id: e,
                is_verified: this.data.tabs[this.data.currentIndex].id
            },
            success: function(t) {
                if (0 == t.err) {
                    var e = t.res;
                    i.setData({
                        list: i.data.list.concat(e.list),
                        page: e.nextPage,
                        hasMore: e.hasMore,
                        hasSelected: i.data.list.some(function(t) {
                            return t.active;
                        })
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
            currentIndex: t.detail.index,
            currentType: this.data.tabs[t.detail.index].id
        }), this.getMemberList(this.data.groupId);
    },
    applyVerifiedHandler: function(e) {
        var i = this, a = e.currentTarget.dataset.verified, r = this.data.list.filter(function(t) {
            return t.active;
        });
        if (!r.length) return !1;
        wx.showLoading(), t.request({
            url: "tourGroup/guide/verifyMember",
            data: {
                application_ids: r.map(function(t) {
                    return t.id;
                }),
                is_verified: a
            },
            success: function(t) {
                0 == t.err && (wx.showToast({
                    title: "操作成功"
                }), i.setData({
                    list: [],
                    page: 1,
                    hasMore: !0
                }), i.getMemberList(i.data.groupId));
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
        1 !== i.is_invited && (i.active = !i.active, this.setData({
            list: this.data.list,
            hasSelected: this.data.list.some(function(t) {
                return t.active;
            }),
            chooseAll: this.data.list.every(function(t) {
                return t.active;
            })
        }));
    },
    chooseToggleHandler: function() {
        var t = this;
        this.setData({
            list: this.data.list.map(function(e) {
                return e.active = !t.data.chooseAll, e;
            }),
            chooseAll: !this.data.chooseAll
        });
    }
});