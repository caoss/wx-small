var e = getApp(), t = require("../../../assets/js/weapp.qrcode.min"), n = null, o = null, i = !1, s = 0, a = 0, r = 0;

Page({
    data: {
        user: null,
        qr_code: null,
        current_group: null,
        points: 0,
        items: [ {
            name: "兼容模式",
            checkde: !1
        } ]
    },
    onLoad: function(e) {
        wx.showLoading(), this.isLoading = !0, this.getCode();
        try {
            if (!(i = wx.getStorageSync("points_status"))) return void this.setData({
                points: "***"
            });
        } catch (e) {
            console.log(e);
        }
    },
    onShow: function() {
        wx.getScreenBrightness({
            success: function(e) {
                r = e.value, wx.setScreenBrightness({
                    value: .9
                });
            }
        }), this.getPointsInfo();
    },
    onUnload: function() {
        n && clearInterval(n), wx.setStorage({
            key: "points_status",
            data: i
        }), wx.setScreenBrightness({
            value: r
        });
    },
    onPullDownRefresh: function() {
        this.getCode(), this.getPointsInfo(function() {
            wx.stopPullDownRefresh();
        });
    },
    checkboxChange: function(e) {
        a = e.detail.value.length, n && clearInterval(n), n = null, this.getCode({
            loadingFlag: !0
        });
    },
    toggleStatus: function(e) {
        this.setData({
            points: i ? "***" : s
        }), i = !i;
    },
    getCode: function() {
        var i = this, s = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).loadingFlag, r = void 0 !== s && s, u = 390 * (e.globalData.sysInfo.windowWidth / 750);
        this.codeLoading || (r && wx.showLoading(), this.codeLoading = !0, e.request({
            url: "user/getCardQrcode",
            success: function(e) {
                if (0 === e.err) {
                    var s = e.res.barcode;

                    if (a && -1 !== s.indexOf("+")) 
                    return o && clearTimeout(o), o = null, void (o = setTimeout(function() {
                        i.getCode({
                            loadingFlag: !0
                        });
                    }));
                    t({
                        width: u,
                        height: u,
                        canvasId: "myQrcode",
                        text: s
                    }),
                     i.setData({
                        current_group: e.res.current_group,
                        user: e.res.user
                    }, function() {
                        i.isLoading && (i.isLoading = !1, wx.hideLoading());
                    }),
                     n || (n = setInterval(function() {
                        i.getCode();
                    }, 900 * e.res.valid_time));
                }
            },
            complete: function() {
                i.codeLoading = !1, r && wx.hideLoading();
            }
        }));
    },
    getPointsInfo: function(t) {
        var n = this;
        this.infoLoading || (this.infoLoading = !0, e.request({
            url: "points/getInfo",
            success: function(e) {
                0 === e.err && (s = e.res.offline, n.setData({
                    points: i ? s : "***"
                }), t && t());
            },
            complete: function() {
                n.infoLoading = !1;
            }
        }));
    }
});

