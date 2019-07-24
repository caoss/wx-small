require("../../server/BarrageInfo.js");

var t = require("../../server/BarrageInfoPartice.js"), a = require("../../utils/CommonHelper.js"), e = require("../../utils/SystemHelper.js"), i = require("../../utils/StringHelper.js"), r = require("../../server/ParticeLogic.js"), o = getApp();

Page({
    data: {
        view: null,
        roll: null,
        menuTapCurrent: 2,
        toView_color: "c1",
        toView_bgcolor: "c1",
        order: [ "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10", "c11", "c12", "c13", "c14", "c15" ],
        focus: !1,
        temptxt: "",
        isAndroid: !1,
        rollTextHaveFace: !1,
        toView_pcolor: "c1",
        particeOrder: [ "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10", "c11", "c12" ],
        supportCanvas: !0,
        isHorizontal: !0,
        windowWidth: 0,
        windowHeight: 0,
        showMakeFailDialog: !1,
        isReady: !1,
        navBar: {}
    },
    particeLogic: null,
    curBarrageInfo: null,
    fromShareId: "",
    triggerStartInSetView: !1,
    rollShare: [],
    setInfo: function() {
        var t = this.data.view;
        t.isSet = !0, t.footShow = !1, this.setData({
            view: t
        });
    },
    focus: function() {
        this.setData({
            focus: !0
        });
    },
    inputEnd: function(t) {
        this.curBarrageInfo.setText(this.data.temptxt), this.triggerStartInSetView || this.start();
        var a = this.data.view;
        a.footShow = !1, this.setData({
            focus: !1,
            view: a
        });
    },
    listenerVal: function(t) {
        this.data.temptxt = t.detail.value;
        var a = i.spliteTextByChar(this.data.temptxt, " ", 5);
        this.setData({
            temptxt: a
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
    },
    setView: function() {
        var t = this.data.view;
        this.data.roll, t.footShow ? t.footShow = !1 : (t.footShow = !0, this.triggerStartInSetView = !1, 
        t.isSet && this.doneSet()), e.ScreenOn(), this.setData({
            view: t
        }), t.footShow || (this.start(), this.triggerStartInSetView = !0);
    },
    doneSet: function() {
        var t = this.data.view;
        t.isSet = !1, t.footShow = !0, this.setData({
            view: t
        });
    },
    menuTap: function(t) {
        var a = t.currentTarget.dataset.current;
        this.setData({
            menuTapCurrent: a
        });
    },
    start: function(t) {
        var e = this;
        this.particeLogic.setFontColor(this.curBarrageInfo.getFontColor1(), this.curBarrageInfo.getFontColor2()), 
        this.particeLogic.setBgColor(this.curBarrageInfo.getBgColor()), !a.isNull(t) && t || this.curBarrageInfo.setText(this.data.temptxt);
        var i = this;
        this.curBarrageInfo.getText() == this.curBarrageInfo.getData().defaultTxt || this.rollShare.some(function(t) {
            return t == e.curBarrageInfo.getText();
        }) || (this.rollShare.push(this.curBarrageInfo.getText()), this.rollShare.length > 10 && this.rollShare.shift()), 
        a.isEmpty(getApp().getLogic().getBarrageInfoTemp()) ? (i.showMakeDataLoading(!0), 
        getApp().getLogic().loadBarrageInfoTemp(), setTimeout(function() {
            i.start(t);
        }, 1e3)) : 0 == this.particeLogic.start(this.curBarrageInfo) && i.showMakeDataLoading(!0);
    },
    setpcol: function(t) {
        var a = t.currentTarget.dataset.key, e = this.curBarrageInfo.getData();
        if (e.pckey == a) return !1;
        e.pckey = a, this.setData({
            roll: e
        }), this.particeLogic.setFontColor(e.pcArray1[a], e.pcArray2[a]), a >= 3 ? this.setData({
            toView_pcolor: this.data.particeOrder[a - 3]
        }) : this.setData({
            toView_pcolor: this.data.particeOrder[0]
        });
    },
    setCol: function(t) {
        var a = this.data.roll, e = t.currentTarget.dataset.key;
        if (this.data.view, a.ckey == e) return !1;
        a.col = a.cArray[e], a.ckey = e, this.setData({
            roll: a
        }), this.particeLogic.setFontColor(a.col), e >= 5 ? this.setData({
            toView_color: this.data.order[e - 5]
        }) : this.setData({
            toView_color: this.data.order[0]
        });
    },
    setbgCol: function(t) {
        var a = this.curBarrageInfo.getData(), e = t.currentTarget.dataset.key;
        if (this.data.view, a.bgckey == e) return !1;
        this.particeLogic.setBgColor(this.curBarrageInfo.getBgColor()), a.bgckey = e, this.setData({
            roll: a
        });
    },
    setPattern: function(t) {
        var a = this.curBarrageInfo.getData(), e = t.currentTarget.dataset.key;
        if (this.data.view, a.playMode == e) return !1;
        a.playMode = e, this.setData({
            roll: a
        }), console.log(a.playMode);
    },
    closeMakeFailDlg: function() {
        this.setData({
            showMakeFailDialog: !1
        });
    },
    retry: function() {
        this.closeMakeFailDlg(), this.start();
    },
    goNormal: function() {
        wx.redirectTo({
            url: "/pages/index/index?"
        });
    },
    onLoad: function(i) {
        this.data.navBar.statusBarHeight = o.globalData.statusBarHeight, this.data.navBar.title = "";
        var s = getCurrentPages().length;
        if (this.data.navBar.type = s < 2 ? 1 : 2, this.setData({
            navBar: this.data.navBar
        }), this.setData({
            navBar: this.data.navBar
        }), void 0 != i.word && this.setData({
            temptxt: decodeURIComponent(i.word)
        }), d = this, this.setData({
            isAndroid: !e.systemInfo().IOS
        }), null == this.particeLogic) {
            this.particeLogic = new r.ParticeLogic(!this.data.isAndroid);
            var n = e.getWindowWidth(), c = e.getWindowHeight(), h = r.isHorizontalMode();
            this.setData({
                windowWidth: n,
                windowHeight: c,
                isHorizontal: h
            });
            var l = new r.Canvas("canvasForShow", n, c);
            new r.Canvas("canvasForBuild", h ? c : n, h ? n : c), this.particeLogic.setCanvas(l, l), 
            this.particeLogic.setMakeParticeDataCallback(function(t, a) {
                t ? d.showMakeDataLoading(!1) : (console.error("make date fail"), d.setData({
                    showMakeFailDialog: !0
                }));
            });
        }
        r.checkClientIsSurpport() || this.setData({
            supportCanvas: !1
        });
        var g = t.getConfigInfo("roll"), d = this, u = t.getConfigInfo("view");
        this.curBarrageInfo = new t.BarrageInfoPartice(g), this.setData({
            roll: g,
            view: u,
            cursorSpace: e.rpx2px(13)
        }), a.isEmpty(i.ud) || a.isEmpty(i.uuid) || (getApp().getLogic().getBarrage(i.ud, i.uuid, function(t, a) {
            if (1 == t) {
                d.curBarrageInfo = a;
                var e = d.data.view;
                e.footShow = !1, d.data.temptxt = d.curBarrageInfo.getText(), d.setData({
                    roll: d.curBarrageInfo.getData(),
                    view: e
                }), d.data.isReady ? d.start(!0) : (d.showMakeDataLoading(!0), setTimeout(function() {
                    d.start(!0);
                }, 500));
            } else d.data.isReady ? d.start(!1) : (d.showMakeDataLoading(!0), setTimeout(function() {
                d.start(!0);
            }, 500));
        }), this.fromShareId = i.ud), void 0 != i.pckey && this.setData({
            "roll.pckey": i.pckey
        }), void 0 != i.bgckey && this.setData({
            "roll.bgckey": i.bgckey
        }), void 0 != i.playMode && this.setData({
            "roll.playMode": i.playMode
        });
    },
    onReady: function() {
        if (this.data.supportCanvas) {
            var t = this;
            a.isEmpty(this.fromShareId) && setTimeout(function() {
                t.start();
            }, 100);
        }
        this.data.isReady = !0;
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function(t) {
        console.log(this.curBarrageInfo.data), console.log("/pages/detail/canvas?word=" + encodeURIComponent(this.data.temptxt) + "&pckey=" + this.data.roll.pckey + "&playMode=" + this.data.roll.playMode + "&bgckey=" + this.data.roll.bgckey);
        return {
            title: "我有话要对你说↓",
            path: "/pages/detail/canvas?word=" + encodeURIComponent(this.data.temptxt) + "&pckey=" + this.data.roll.pckey + "&playMode=" + this.data.roll.playMode + "&bgckey=" + this.data.roll.bgckey,
            imageUrl: "../../images/share.png",
            success: function(t) {}
        };
    },
    showMakeDataLoading: function(t) {
        this.data.isAndroid && (t ? wx.showLoading({
            title: "生成中..."
        }) : wx.hideLoading());
    }
});