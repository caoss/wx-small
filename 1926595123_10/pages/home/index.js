var t = getApp();

Page({
    data: {
        user: null,
        notification: {}
    },
    onLoad: function() {
        wx.showLoading(), t.loadFontFace();
    },
    onShow: function() {
        this.getUserProfile(), this.getNotification(), this.getPointsInfo();
    },
    onUnload: function() {},
    openScanner: function() {
        wx.scanCode({
            success: function(t) {
                var e = t.result.split(":");
                switch (e[0]) {
                  case "GROUP":
                    wx.navigateTo({
                        url: "/pages/user/group/index?group_id=" + e[1]
                    });
                }
            }
        });
    },
    getNotification: function() {
        var e = this;
        t.request({
            url: "user/getNotifications",
            success: function(t) {
                0 === t.err && (e.setData({
                    notification: t.res
                }), e.store.notification.dispatch(t.res));
            }
        });
    },
    getPointsInfo: function() {
        var e = this;
        t.request({
            url: "points/getInfo",
            success: function(t) {
                0 === t.err && (e.setData({
                    "user.points_total": t.res.total
                }), e.store.points.dispatch(t.res));
            }
        });
    },
    getUserProfile: function() {
        var e = this;
        t.request({
            url: "user/profile",
            success: function(s) {
                0 === s.err && (e.setData({
                    user: s.res
                }), t.setUser(s.res), e.store.user.dispatch(s.res));
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    onShareAppMessage: function() {
        return {
            title: "日上会员"
        };
    }
});