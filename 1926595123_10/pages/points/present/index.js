function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e = getApp(), a = {}, n = "";

Page({
    data: {
        isShow: !1,
        chooseShow: !1,
        presentItem: {},
        currentType: 0,
        submitLock: !0,
        errMsg: ""
    },
    onLoad: function(t) {
        var e = this;
        this.setData({
            currentType: t.type
        }), Object.defineProperty(this.data, "currentPoints", {
            set: function(t) {
                var a = t > e.data.store.points.free_to_give;
                e.setData({
                    submitLock: t <= 0 || a,
                    errMsg: a ? "当前积分已超过可赠送积分" : ""
                }), n = t;
            },
            get: function() {
                return n;
            }
        });
    },
    onShow: function() {
        this.data.chooseShow && wx.navigateBack(), e.loadFontFace();
    },
    modalShowHandler: function() {
        this.setData({
            isShow: !0
        });
    },
    stopTouchHandler: function(t) {
        return !1;
    },
    getInfo: function() {
        var t = this;
        e.request({
            url: "points/getInfo",
            success: function(e) {
                0 === e.err && t.store.points.dispatch(e.res);
            }
        });
    },
    modalClickHandler: function(t) {
        var n = t.detail, i = (n.cancel, this);
        n.confirm && (wx.showLoading(), e.request({
            url: "points/give",
            data: {
                amount: i.data.currentPoints,
                mobile: i.data.mobile
            },
            success: function(t) {
                if (wx.hideLoading(), 0 == t.err) {
                    if (i.getInfo(), 1 == i.data.currentType) return i.setData({
                        presentItem: t.res,
                        chooseShow: !0
                    }), void (a = t.res.from_user);
                    wx.showToast({
                        title: "赠送成功",
                        success: function() {
                            setTimeout(function() {
                                wx.navigateBack();
                            }, 1500);
                        }
                    });
                }
            }
        })), this.setData({
            isShow: !1
        });
    },
    presentPointHandler: function(t) {
        var e = t && t.detail.value;
        this.setData({
            currentPoints: e
        });
    },
    handlerFocus: function(t) {
        var e = t.detail.height;
        this.setData({
            keyboardHeight: e
        });
    },
    handlerBlur: function(t) {
        this.setData({
            keyboardHeight: 0
        });
    },
    pointFlushHandler: function() {
        this.setData({
            currentPoints: this.data.store.points.free_to_give
        });
    },
    bindValueHandler: function(e) {
        var a = e && e.currentTarget.dataset.key, n = e && e.detail.value;
        this.setData(t({}, a, n));
    },
    onShareAppMessage: function() {
        if (1 == this.data.currentType) return {
            imageUrl: "https://sunrisedutyfree-weixin.oss-cn-shanghai.aliyuncs.com/static/redpack_share.jpg",
            title: a.name + "送您日上积分啦，快去查收吧!",
            path: "/pages/points/present/detail/index?id=" + this.data.presentItem.id
        };
    }
});