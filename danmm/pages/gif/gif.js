var t = require("../../config/ServerConfig.js"), i = require("../../utils/base64.modified.js"), a = require("../../utils/CommonHelper.js"), e = require("../../utils/SystemHelper.js"), o = require("../../server/StatisticsLogic.js");

Page({
    data: {
        showGifGenerateSucc: !1,
        gifPath: "",
        loadingData: {
            text: "生成中..."
        },
        showSaveHint: !1,
        hintData: {
            text: ""
        },
        loadingTimeOut: !1,
        AdId: "",
        AdUrl: "",
        AdImg: "../../img/dlgBg.png",
        dlgOpacity: "0",
        naviToMiniProgramVisible: !0,
        yinyu_fuli_hint: {
            showZhezhao: !1
        }
    },
    onLoad: function(t) {
        var o = this;
        if (t.txt) {
            var s = i.encode(t.txt), n = "" + (t.fontSize ? t.fontSize : 170), d = t.color ? t.color : "#ffffff", h = t.speed ? t.speed : "1", r = t.bgColor ? t.bgColor : "#000000";
            "0" == h && (h = "0.5");
            var c = {
                text: s,
                font_color: d,
                font_speed: h,
                font_size: n,
                bg_color: r
            };
            getApp().getLogic().makeGif(c, {
                success: function(t) {
                    if (t.data && 1 == t.data.code) {
                        var i = t.data.data.gif_pic_path, a = t.data.data.width, e = t.data.data.height;
                        if (void 0 == a && (a = 320), void 0 == e && (e = 80), i) return o.setData({
                            gifPath: i,
                            showGifGenerateSucc: !1,
                            gifWidth: a,
                            gifHeight: e
                        }), void (o.data.loadingTimeOut && (o.saveGif(), o.setData({
                            showGifGenerateSucc: !0
                        })));
                    }
                    o.makeGifFailed();
                },
                fail: function(t) {
                    o.makeGifFailed();
                }
            });
        }
        (o = this).showLoadding("生成中..."), setTimeout(function() {
            o.showLoadding("生成后记得长按分享哦~"), setTimeout(function() {
                o.data.loadingTimeOut = !0, a.isEmpty(o.data.gifPath) || (o.saveGif(), o.setData({
                    showGifGenerateSucc: !0
                }));
            }, 2e3);
        }, 1e3), this.setData({
            top: e.getStatusBarHeight() + "rpx"
        });
    },
    makeGifFailed: function(t) {
        this.setData({
            showGifGenerateSucc: !1
        }), wx.showToast({
            icon: "none",
            title: "注入动图失败"
        }), setTimeout(function() {
            wx.navigateBack({
                delta: 1
            });
        }, 2e3);
    },
    makeGifAndShowSuccess: function(t) {
        wx.hideLoading();
    },
    back: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    gifLoadSucc: function() {
        this.makeGifAndShowSuccess();
    },
    gifLoadFail: function() {
        wx.showToast({
            title: "加载动图失败"
        });
    },
    onShow: function() {
        if (this.data.showGifGenerateSucc) {
            var t = wx.getStorageSync("visitingTime");
            t ? t < 3 ? (t++, wx.setStorageSync("visitingTime", t), this.setData({
                showDlg: !0
            }), this.getAdUrl("scdm_play_hkj")) : (this.back(), this.setData({
                showDlg: !1
            })) : (wx.setStorageSync("visitingTime", "1"), this.setData({
                showDlg: !0
            }), this.getAdUrl("scdm_play_hkj"));
        }
    },
    getAdUrl: function(i) {
        var a = this;
        wx.request({
            url: "https://shenjiaokj.com/sjkj_api/api/buttonEvent",
            data: {
                btn_key: "scdm_play_hkj"
            },
            header: {
                "secret-token": t.getSecretToken()
            },
            success: function(t) {
                var i = "/" + t.data.data.appurl, e = t.data.data.appid, o = t.data.data.bgimg_path_src;
                a.setData({
                    dlgOpacity: 1,
                    AdUrl: i,
                    AdId: e,
                    AdImg: o,
                    showDlg: !1
                }), a.getNavigateToMiniProgram();
            }
        });
    },
    showLoadding: function(t) {
        var i = {
            text: t
        };
        this.setData({
            loadingData: i
        });
    },
    goHeiKeJi: function() {
        if (0 == this.data.showDlg) {
            var i = t.getAppId();
            this.data.AdId == i ? wx.redirectTo({
                url: this.data.AdUrl
            }) : (o.reportSourceRecordGo(this.data.AdId), wx.navigateToMiniProgram({
                appId: this.data.AdId,
                path: this.data.AdUrl,
                success: function(t) {},
                fail: function(t) {
                    console.log(t);
                }
            }));
        }
    },
    AdCount: function() {
        o.reportSourceRecordGo(this.data.AdId);
    },
    getNavigateToMiniProgram: function() {
        e.curVersionBiggerThan("2.0.6") ? this.setData({
            naviToMiniProgramVisible: !1
        }) : this.setData({
            naviToMiniProgramVisible: !0
        });
    },
    closeDlg: function() {
        0 == this.data.showDlg && wx.navigateBack({
            delta: 1
        });
    },
    previewGif: function() {
        getApp().aldstat.sendEvent("btn_click", "preview"), this.saveGif();
    },
    saveGif: function() {
        wx.previewImage({
            urls: [ this.data.gifPath ]
        });
    },
    showZhezhao: function() {
        var t = this.data.yinyu_fuli_hint;
        t.showZhezhao = !0, this.setData({
            yinyu_fuli_hint: t
        });
    },
    hideZhezhao: function() {
        var t = this.data.yinyu_fuli_hint;
        t.showZhezhao = !1, this.setData({
            yinyu_fuli_hint: t
        });
    }
});