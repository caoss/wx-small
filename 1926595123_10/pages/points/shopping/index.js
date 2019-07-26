var t = getApp(), a = "";

Page({
    data: {
        isShow: !1,
        submitLock: !0
    },
    onLoad: function(t) {
        var i = this;
        this.setData({
            isBack: t.is_back || 0
        }), Object.defineProperty(this.data, "amount", {
            set: function(t) {
                if (i.data.isBack) {
                    var s = t > i.data.store.points.offline;
                    i.setData({
                        submitLock: t <= 0 || s,
                        errMsg: s ? "当前转入积分已超过可转入线上积分" : ""
                    });
                } else {
                    var e = t > i.data.store.points.online;
                    i.setData({
                        submitLock: t <= 0 || e,
                        errMsg: e ? "当前转入积分已超过可转入门店积分" : ""
                    });
                }
                a = t;
            },
            get: function() {
                return a;
            }
        });
    },
    onShow: function() {
        t.loadFontFace();
    },
    submitHandler: function() {
        this.setData({
            isShow: !0
        });
    },
    handlerAmount: function(t) {
        this.setData({
            amount: t && t.detail.value
        });
    },
    handlerFocus: function(t) {
        var a = t.detail.height;
        this.setData({
            keyboardHeight: a
        });
    },
    handlerBlur: function(t) {
        this.setData({
            keyboardHeight: 0
        });
    },
    handlerFlush: function(t) {
        if (this.data.isBack) {
            if (this.data.store.points.offline + 0 === 0) return;
        } else if (this.data.store.points.online + 0 === 0) return;
        if (this.data.isBack) {
            if (this.data.store.points.offline <= 0) return void this.setData({
                errMsg: "您没有可用的门店积分"
            });
        } else if (this.data.store.points.online <= 0) return void this.setData({
            errMsg: "您没有可用的线上积分"
        });
        this.setData({
            amount: this.data.isBack ? this.data.store.points.offline : this.data.store.points.online
        });
    },
    transferPointHandler: function() {
        var a = this;
        wx.showLoading(), t.request({
            url: "points/transfer",
            data: {
                amount: a.data.amount,
                is_back: a.data.isBack
            },
            success: function(t) {
                0 == t.err && wx.showToast({
                    icon: "success",
                    title: "转出成功",
                    success: function() {
                        setTimeout(function() {
                            wx.navigateBack();
                        }, 1500);
                    }
                });
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    modalClickHandler: function(t) {
        var a = t.detail, i = a.confirm;
        a.cancel;
        if (i) return this.transferPointHandler(), !1;
        this.setData({
            isShow: !1
        });
    }
});