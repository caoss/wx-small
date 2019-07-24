var a = require("../../config/ServerConfig.js"), e = require("../../utils/SystemHelper.js"), t = require("../../server/BarrageInfo.js"), r = require("../../server/StatisticsLogic.js");

Page({
    data: {
        yinyu_fuli_hint: {
            showZhezhao: !1
        },
        list_on: 0,
        arry: [ {
            url: "/pages/particle/particle",
            img: "../../img/particle.png",
            label: "粒子弹幕",
            name: "particle"
        }, {
            barrageType: t.BarrageType.NORMAL,
            url: "/pages/index/index",
            text: "手持弹幕 行走的弹幕",
            label: "经典弹幕",
            name: "roll"
        }, {
            barrageType: t.BarrageType.FLUORE,
            url: "/pages/index/index",
            text: "我 ❤ 黄 家 驹",
            label: "荧光弹幕",
            name: "fluore"
        } ],
        top: "40rpx",
        indicatorDots: !0,
        autoplay: !0,
        interval: 3e3,
        duration: 500,
        banner_array: [],
        naviToMiniProgramVisible: !0,
        AdId: ""
    },
    banner_href: function(e) {
        var t = e.currentTarget.id;
        this.setData({
            AdId: this.data.banner_array[t].appid
        }), this.data.banner_array[t].appid == a.getAppId() ? wx.reLaunch({
            url: "../../" + this.data.banner_array[t].appurl
        }) : (r.reportSourceRecordGo(this.data.banner_array[t].appid), wx.navigateToMiniProgram({
            appId: this.data.banner_array[t].appid,
            path: this.data.banner_array[t].appurl,
            success: function(a) {
                console.log("跳转成功");
            }
        }));
    },
    getNavigateToMiniProgram: function() {
        e.curVersionBiggerThan("2.0.6") ? this.setData({
            naviToMiniProgramVisible: !1
        }) : this.setData({
            naviToMiniProgramVisible: !0
        });
    },
    AdCount: function(a) {
        var e = a.currentTarget.id;
        this.setData({
            AdId: this.data.banner_array[e].appid
        }), r.reportSourceRecordGo(this.data.AdId);
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
    },
    btnanniu: function(a) {
        var e = a.currentTarget.id;
        this.setData({
            list_on: e
        });
        var t = getCurrentPages(), r = t.length - 2;
        if (t.length > 1) "/" + t[r].route == (i = this.data.arry[e].url) ? ("/pages/index/index" == i && getApp().setBarrageType(this.data.arry[e].barrageType), 
        wx.navigateBack({
            delta: 1
        })) : ("/pages/index/index" == i && getApp().setBarrageType(this.data.arry[e].barrageType), 
        wx.reLaunch({
            url: this.data.arry[e].url
        })); else {
            var i = this.data.arry[e].url;
            "/pages/index/index" == i && getApp().setBarrageType(this.data.arry[e].barrageType), 
            wx.reLaunch({
                url: this.data.arry[e].url
            });
        }
    },
    onLoad: function(t) {
        var r = this;
        wx.request({
            url: "https://shenjiaokj.com/sjkj_api/api/adBannerList",
            data: {
                isIOS: e.systemInfo().IOS ? 1 : 0
            },
            header: {
                "secret-token": a.getSecretToken()
            },
            success: function(a) {
                console.log(a.data.data);
                for (var e = a.data.data.length, t = 0; t < e; t++) {
                    var i = a.data.data[t];
                    2 == i.type && r.data.banner_array.push(i);
                }
                r.setData({
                    banner_array: r.data.banner_array
                }), r.getNavigateToMiniProgram();
            }
        }), this.setData({
            top: e.getStatusBarHeight() + "rpx"
        });
    },
    onReady: function() {},
    onShow: function() {
        var a = wx.createAnimation({
            duration: 1e3,
            timingFunction: "ease"
        });
        this.animation = a, a.translate(-100).step(), this.setData({
            animationData: a.export()
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    back: function() {
        wx.navigateBack({
            delta: 1
        });
    }
});