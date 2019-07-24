var a = require("../../server/StatisticsLogic.js"), t = require("../../utils/SystemHelper.js");

Page({
    data: {
        defaultData: [ {
            cat: "donation",
            slogan: "向开发者赞赏",
            img: "",
            name: "赞赏",
            appid: "wx18a2ac992306a5a4",
            appurl: "pages/apps/largess/detail?accountId=77738"
        }, {
            cat: "program",
            slogan: "你的优惠券，尽在小券包",
            img: "https://shenjiaokj.com/public_dls/upload/recommend/20180118/logo_5a5ff8c8f090d6.17863915.png",
            name: "小券包",
            appid: "wx6ea39853a45f470f"
        }, {
            cat: "program",
            slogan: "精心的一句话，让萌翻牌牌们帮你举起来吧！",
            img: "/img/mfpp.png",
            name: "萌翻牌牌",
            appid: "wxf5c9e529b32bf3f2"
        }, {
            cat: "program",
            slogan: "海量真人图片，等你来主持颜值正义",
            img: "/img/placards.jpg",
            name: "颜擂台",
            appid: "wxa2010ca9bca8d36d"
        }, {
            cat: "program",
            slogan: "精心的一句话，让萌翻牌牌们帮你举起来吧！",
            img: "https://shenjiaokj.com/public_dls/upload/recommend/20180115/logo_5a5c749dd00991.84192323.jpeg",
            name: "游戏码",
            appid: "wx73c9987386ac24d6"
        }, {
            cat: "public"
        }, {
            cat: "redpack",
            slogan: "快来领取支付宝跨年红包！1月1日起还有机会额外获得专享红包哦！复制此消息，打开最新版支付宝就能领取！i5jJli96Gj"
        } ],
        join: !1,
        startdefault: !1,
        AdImg: "",
        AdId: "",
        naviToMiniProgramVisible: !0,
        yinyu_fuli_hint: {
            showZhezhao: !1
        }
    },
    closeJoin: function() {
        this.setData({
            join: !1
        });
    },
    saveImg: function(a) {
        var t = a.currentTarget.dataset.key, o = this.data.startdefault;
        wx.showLoading({
            title: "处理中"
        }), o ? wx.saveImageToPhotosAlbum({
            filePath: t,
            success: function(a) {
                wx.hideLoading(), wx.showModal({
                    title: "提示",
                    content: "图片已保存到相册，请在微信扫码打开",
                    showCancel: !1,
                    success: function(a) {
                        a.confirm;
                    }
                });
            }
        }) : wx.getImageInfo({
            src: t,
            success: function(a) {
                wx.saveImageToPhotosAlbum({
                    filePath: a.path,
                    success: function(a) {
                        wx.hideLoading(), wx.showModal({
                            title: "提示",
                            content: "图片已保存到相册，请在微信扫码打开",
                            showCancel: !1,
                            success: function(a) {
                                a.confirm;
                            }
                        });
                    },
                    fail: function(a) {
                        console.log(a);
                    }
                });
            }
        });
    },
    goProduct: function(t) {
        var o = t.currentTarget.dataset.key, i = void 0;
        i = "pages/index/index", o.appurl && (i = o.appurl), console.log(o.appid, i), a.reportSourceRecordGo(o.appid), 
        wx.navigateToMiniProgram && wx.navigateToMiniProgram({
            appId: o.appid,
            path: i,
            success: function(a) {},
            fail: function(a) {
                console.log(a);
            }
        });
    },
    openJoin: function() {
        wx.setClipboardData && wx.setClipboardData({
            data: "风雨晓程",
            success: function(a) {}
        }), this.setData({
            join: !0
        });
    },
    getRedpack: function(a) {
        var t = a.currentTarget.dataset.key;
        wx.setClipboardData && wx.setClipboardData({
            data: t,
            success: function(a) {
                wx.showModal({
                    title: "提示",
                    content: "打开吱付宝，领取红包",
                    showCancel: !1,
                    success: function(a) {
                        a.confirm;
                    }
                });
            }
        });
    },
    getNavigateToMiniProgram: function() {
        t.curVersionBiggerThan("2.0.6") ? this.setData({
            naviToMiniProgramVisible: !1
        }) : this.setData({
            naviToMiniProgramVisible: !0
        }), console.log(this.data.naviToMiniProgramVisible);
    },
    AdCount: function(t) {
        a.reportSourceRecordGo(t.currentTarget.dataset.appid);
    },
    onLoad: function() {
        var a = this, o = this.data.defaultData, i = void 0, e = this;
        wx.request({
            url: "https://shenjiaokj.com/sjkj_api/api/recommend",
            header: {
                "secret-token": "az4ZpQ7km18xy3dhvQ5JrpMgROiHdwMo"
            },
            success: function(t) {
                console.log(t.data.data);
                try {
                    i = t.data.data, i = i.filter(function(a) {
                        return "手持弹幕" != a.name;
                    }), a.setData({
                        dsts: i
                    });
                } catch (t) {
                    a.setData({
                        dsts: o,
                        startdefault: !0
                    });
                }
                e.getNavigateToMiniProgram();
            },
            fail: function(t) {
                a.setData({
                    dsts: o,
                    startdefault: !0
                });
            }
        }), wx.request({
            url: "https://shenjiaokj.com/sjkj_api/api/adStatus?id=about_applet",
            success: function(a) {
                var t = a.data;
                null != t && 1 == t.code && 1 == t.status ? e.showBottomAd(!0) : e.showBottomAd(!1), 
                console.log(t);
            },
            fail: function(a) {
                var t = a.data;
                e.showBottomAd(!0), console.log(t);
            }
        }), this.setData({
            top: t.getStatusBarHeight() + "rpx"
        });
    },
    showBottomAd: function(a) {
        this.setData({
            showBottomAd: a
        });
    },
    back: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    showZhezhao: function() {
        var a = this.data.yinyu_fuli_hint;
        a.showZhezhao = !0, this.setData({
            yinyu_fuli_hint: a
        });
    },
    hideZhezhao: function() {
        var a = this.data.yinyu_fuli_hint;
        a.showZhezhao = !1, this.setData({
            yinyu_fuli_hint: a
        });
    }
});