var t = getApp();

Page({
    data: {
        wW: "",
        wH: "",
        showInput: !1,
        showOption: !1,
        showFont: !1,
        select: {
            index: 0,
            obj: {
                fontSize: 0,
                maxSize: 5
            }
        },
        fontSize: [ {
            name: "小",
            size: "216rpx"
        }, {
            name: "中",
            size: "288rpx"
        }, {
            name: "大",
            size: "360rpx"
        } ],
        textList: [ {
            name: "好",
            color: 0
        }, {
            name: "喜",
            color: 0
        }, {
            name: "欢",
            color: 0
        }, {
            name: "你",
            color: 0
        }, {
            name: "哟",
            color: 0
        } ],
        color: [ "#ff3177", "#3d8efa", "#bbfd41", "#f69a2d", "#bb1fff" ],
        animate: [ "red", "blue", "yellow", "greed", "orange" ],
        model: 0,
        navBar: {}
    },
    onLoad: function(a) {
        this.data.navBar.statusBarHeight = t.globalData.statusBarHeight, this.data.navBar.title = "";
        var e = getCurrentPages().length;
        this.data.navBar.type = e < 2 ? 1 : 2, this.setData({
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
        this.setData({
            showInput: !this.data.showInput,
            showFont: !1
        });
    },
    inputFocus: function(t) {
        this.setData({
            showOption: !0,
            showFont: !1,
            "select.index": t.currentTarget.dataset.index
        });
    },
    inputBlur: function(t) {
        this.setData({
            showOption: !1
        });
    },
    inputIn: function(t) {
        this.data.textList[t.currentTarget.dataset.index].name = t.detail.value, this.setData({
            textList: this.data.textList,
            "select.index": t.currentTarget.dataset.index
        });
    },
    selectColor: function(t) {
        this.data.textList[this.data.select.index].color = t.currentTarget.dataset.index, 
        this.setData({
            textList: this.data.textList
        });
    },
    selectFontBox: function(t) {
        this.setData({
            showFont: !0
        });
    },
    selectFontSize: function(t) {
        this.setData({
            "select.obj.fontSize": t.currentTarget.dataset.index,
            "select.obj.maxSize": 5 - t.currentTarget.dataset.index
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