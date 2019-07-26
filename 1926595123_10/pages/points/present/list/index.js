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
        isShow: !1,
        list: [],
        hasMore: !0,
        page: 1,
        isLoading: !1,
        info: {}
    },
    onLoad: function(t) {
        this.setData({
            type: t.type
        }), this.getLog(t.type);
    },
    onShow: function() {
        e.loadFontFace();
    },
    onReachBottom: function() {
        this.getLog(this.options.type);
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
    getLog: function(t) {
        var a = this;
        !this.data.isLoading && this.data.hasMore && (this.setData({
            isLoading: !0
        }), wx.showLoading(), e.request({
            url: "points/getLog",
            data: {
                page: a.data.page,
                type: t
            },
            success: function(t) {
                0 === t.err && a.setData({
                    list: a.data.list.concat(t.res.list),
                    hasMore: t.res.hasMore,
                    page: t.res.nextPage,
                    isLoading: !1
                });
            },
            complete: function() {
                wx.hideLoading();
            }
        }));
    },
    acceptHandler: function(a) {
        var i = this, s = this, n = a && a.currentTarget.dataset.id, o = a && a.currentTarget.dataset.index;
        if (this.data.list[o].loading) return !1;
        wx.showLoading(), s.setData(t({}, "list[" + o + "].loading", !0)), e.request({
            url: "points/accept",
            data: {
                id: n
            },
            success: function(e) {
                0 == e.err && wx.showToast({
                    title: "领取成功",
                    icon: "success",
                    success: function() {
                        setTimeout(function() {
                            s.setData(t({
                                isShow: !1
                            }, "list[" + o + "]", e.res));
                        }, 1e3);
                    },
                    complete: function() {
                        wx.hideLoading(), s.setData(t({}, "list[" + o + "].loading", !1));
                    }
                });
            },
            complete: function() {
                i.data.list[o].loading && (wx.hideLoading(), s.setData(t({}, "list[" + o + "].loading", !1)));
            }
        });
    },
    onShareAppMessage: function(t) {
        if ("button" === t.from) {
            var e = t.target.dataset.point;
            return {
                imageUrl: "https://sunrisedutyfree-weixin.oss-cn-shanghai.aliyuncs.com/static/redpack_share.jpg",
                title: e.from_user.name + "送您日上积分啦，快去查收吧!",
                path: "/pages/points/present/detail/index?id=" + e.id
            };
        }
    }
});