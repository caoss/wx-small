var t = getApp();

Page({
    data: {
        wW: "",
        wH: "",
        showInput: !1,
        showOption: !1,
        showMenus: !1,
        select: {
            type: 1,
            text: "弹幕文字行走的字幕",
            obj: {
                fontSize: 2,
                color: 0,
                speed: 1,
                background: 2
            }
        },
        fontSize: [ {
            name: "小",
            size: "72rpx"
        }, {
            name: "中",
            size: "144rpx"
        }, {
            name: "大",
            size: "216rpx"
        }, {
            name: "特大",
            size: "288rpx"
        }, {
            name: "超大",
            size: "360rpx"
        } ],
        color: [ "#ffffff", "#b1b1b1", "#010101", "#fe3f35", "#f7b142", "#fbee48", "#a9ee3b", "#58ea3f", "#69fca3", "#46b0fe", "#3f37fe", "#8f2dfc", "#e525ae", "#fd2b84", "#f89997" ],
        speed: [ {
            name: "慢",
            time: "15s"
        }, {
            name: "正常",
            time: "7s"
        }, {
            name: "快",
            time: "3s"
        } ],
        model: 0,
        navBar: {}
    },
    onLoad: function(e) {
        this.data.navBar.statusBarHeight = t.globalData.statusBarHeight, this.data.navBar.title = "";
        var a = getCurrentPages().length;
        this.data.navBar.type = a < 2 ? 1 : 2, this.setData({
            navBar: this.data.navBar
        }), this.setData({
            navBar: this.data.navBar
        }), this.setData({
            wW: t.globalData.wW,
            wH: t.globalData.wH,
            model: t.globalData.model
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    Showtap: function(t) {
        var e = this;
        this.setData({
            showInput: !this.data.showInput
        }), this.data.showInput && this.setData({
            showOption: !0
        }), setTimeout(function() {
            e.setData({
                showOption: !1
            });
        }, 1e3);
    },
    MenuTap: function() {
        this.setData({
            showInput: !1,
            showMenus: !this.data.showMenus
        });
    },
    tagTap: function(t) {
        this.setData({
            "select.type": t.currentTarget.dataset.type
        });
    },
    inputFocus: function() {
        this.setData({
            showOption: !0
        });
    },
    inputIn: function(t) {
        t.detail.value.length > 10 ? (wx.showToast({
            title: "字幕太长了"
        }), this.setData({
            "select.text": this.data.select.text
        })) : this.setData({
            "select.text": t.detail.value
        });
    },
    cgOption: function(t) {
        "font" == t.currentTarget.dataset.type ? this.setData({
            "select.obj.fontSize": t.currentTarget.dataset.index
        }) : "color" == t.currentTarget.dataset.type ? this.setData({
            "select.obj.color": t.currentTarget.dataset.index
        }) : "speed" == t.currentTarget.dataset.type ? this.setData({
            "select.obj.speed": t.currentTarget.dataset.index
        }) : "background" == t.currentTarget.dataset.type && this.setData({
            "select.obj.background": t.currentTarget.dataset.index
        });
    },
    goHome: function() {
        wx.redirectTo({
            url: "/pages/index/index"
        });
    },
    goBack: function() {
        wx.navigateBack({
            delta: 1
        });
    }
});