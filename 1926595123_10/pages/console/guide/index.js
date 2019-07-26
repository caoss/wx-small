function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e = getApp();

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
        page: 1,
        hasMore: !0,
        list: [],
        reject_msg: "",
        isShow: !1
    },
    onLoad: function(t) {
        t.verified && this.setData({
            currentType: t.verified,
            currentIndex: this.data.tabs.findIndex(function(e) {
                return e.id == t.verified;
            })
        }), this.getMemberList();
    },
    onReachBottom: function() {
        this.data.hasMore && this.getMemberList(this.data.page);
    },
    getMemberList: function(t) {
        var a = this;
        wx.showLoading(), e.request({
            url: "tourGroup/admin/guideList",
            data: {
                page: t,
                is_verified: this.data.tabs[this.data.currentIndex].id
            },
            success: function(t) {
                if (0 == t.err) {
                    var e = t.res;
                    a.setData({
                        list: a.data.list.concat(e.list),
                        page: e.nextPage,
                        hasMore: e.hasMore
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
        }), this.getMemberList(this.data.page);
    },
    applyVerifiedHandler: function(t) {
        var a = this, i = this, n = t.currentTarget.dataset.verified, r = this.data.list.filter(function(t) {
            return t.active;
        });
        r.length && (wx.showLoading(), e.request({
            url: "tourGroup/admin/guideVerify",
            data: {
                application_ids: r.map(function(t) {
                    return t.id;
                }),
                is_verified: n,
                msg: i.data.reject_msg
            },
            success: function(t) {
                0 == t.err && (wx.showToast({
                    title: "操作成功"
                }), a.setData({
                    list: [],
                    page: 1,
                    isShow: !1
                }), i.getMemberList(i.data.page));
            },
            complete: function() {
                wx.hideLoading();
            }
        }));
    },
    chooseHandler: function(t) {
        var e = t.currentTarget.dataset.id, a = (t.currentTarget.dataset.index, this.data.list.find(function(t) {
            return t.id === e;
        }));
        a.active = !a.active, this.setData({
            list: this.data.list,
            chooseAll: this.data.list.every(function(t) {
                return t.active;
            })
        });
    },
    chooseToggleHandler: function() {
        var t = this;
        this.setData({
            list: this.data.list.map(function(e) {
                return e.active = !t.data.chooseAll, e;
            }),
            chooseAll: !this.data.chooseAll
        });
    },
    checkDetailHandler: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/pages/console/guide/details/index?application_id=" + e
        });
    },
    bindValueHandler: function(e) {
        var a = e && e.currentTarget.dataset.key, i = e && e.detail.value;
        this.setData(t({}, a, i));
    },
    rejectApplyHandler: function() {
        this.data.list.filter(function(t) {
            return t.active;
        }).length && this.setData({
            isShow: !0
        });
    },
    rejectHandler: function(t) {
        t.detail.cancel ? this.setData({
            isShow: !1
        }) : this.applyVerifiedHandler({
            currentTarget: {
                dataset: {
                    verified: 0
                }
            }
        });
    }
});