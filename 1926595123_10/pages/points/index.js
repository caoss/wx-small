var t = Object.assign || function(t) {
    for (var n = 1; n < arguments.length; n++) {
        var i = arguments[n];
        for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o]);
    }
    return t;
}, n = getApp();

Page({
    data: {
        placeholder: {
            totalPoints: "***",
            onlinePoints: "***",
            offlinePoints: "***"
        },
        isShow: !1
    },
    onLoad: function() {
        n.loadFontFace(), this.numHidden = wx.getStorageSync("numHidden"), this.numHidden && this.setData({
            numHidden: JSON.parse(this.numHidden)
        }), this.setData(this.data.placeholder);
    },
    onShow: function() {
        this.getNotification(), this.getInfo();
    },
    onPullDownRefresh: function() {
        this.getInfo(!0);
    },
    getNotification: function() {
        var t = this;
        n.request({
            url: "user/getNotifications",
            success: function(n) {
                0 === n.err && t.store.notification.dispatch(n.res);
            }
        });
    },
    toggleNumsHandler: function(n) {
        var i = !this.data.numHidden, o = {
            totalPoints: "***" === this.data.store.points.total ? 0 : this.data.store.points.total,
            onlinePoints: "***" === this.data.store.points.online ? 0 : this.data.store.points.online,
            offlinePoints: "***" === this.data.store.points.offline ? 0 : this.data.store.points.offline
        }, e = i ? this.data.placeholder : o;
        this.setData(t({
            numHidden: i
        }, e)), wx.setStorageSync("numHidden", this.data.numHidden);
    },
    getInfo: function(t) {
        var i = this;
        !!t && wx.showLoading(), n.request({
            url: "points/getInfo",
            success: function(t) {
                if (0 === t.err) {
                    i.points = t.res;
                    var n = i.data.numHidden ? i.data.placeholder : {
                        totalPoints: i.points.total,
                        onlinePoints: i.points.online,
                        offlinePoints: i.points.offline
                    };
                    i.store.points.dispatch(i.points), i.setData(n);
                }
            },
            complete: function() {
                wx.hideLoading(), wx.stopPullDownRefresh();
            }
        });
    },
    pointInfoHandler: function() {
        this.setData({
            isShow: !0
        });
    }
});