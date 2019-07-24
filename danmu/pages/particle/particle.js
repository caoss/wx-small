require("../../server/BarrageInfo.js");

var t = require("../../server/BarrageInfoPartice.js"), e = require("../../utils/CommonHelper.js"), a = require("../../utils/SystemHelper.js"), r = require("../../utils/StringHelper.js"), i = require("../../server/ParticeLogic.js");

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
        isReady: !1
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
        var e = this.data.view;
        e.footShow = !1, this.setData({
            focus: !1,
            view: e
        });
    },
    listenerVal: function(t) {
        this.data.temptxt = t.detail.value;
        var e = r.spliteTextByChar(this.data.temptxt, " ", 5);
        this.setData({
            temptxt: e
        });
    },
    swFluore: function() {
        wx.navigateTo({
            url: "../../pages/styleList/index"
        });
    },
    setView: function() {
        var t = this.data.view;
        this.data.roll;
        t.footShow ? t.footShow = !1 : (t.footShow = !0, this.triggerStartInSetView = !1, 
        t.isSet && this.doneSet()), a.ScreenOn(), this.setData({
            view: t
        }), t.footShow || (this.start(), this.triggerStartInSetView = !0);
    },
    doneSet: function() {
        var t = this.data.view;
        t.isSet = !1, t.footShow = !0, this.setData({
            view: t
        });
    },
    goDrainage: function() {
        wx.navigateTo({
            url: "../../pages/drainage/drainage"
        });
    },
    menuTap: function(t) {
        var e = t.currentTarget.dataset.current;
        this.setData({
            menuTapCurrent: e
        });
    },
    reportCurrentBarrage: function() {},
    start: function(t) {
        var a = this;
        this.particeLogic.setFontColor(this.curBarrageInfo.getFontColor1(), this.curBarrageInfo.getFontColor2()), 
        this.particeLogic.setBgColor(this.curBarrageInfo.getBgColor()), !e.isNull(t) && t || this.curBarrageInfo.setText(this.data.temptxt);
        var r = this;
        this.curBarrageInfo.getText() == this.curBarrageInfo.getData().defaultTxt || this.rollShare.some(function(t) {
            return t == a.curBarrageInfo.getText();
        }) || (this.rollShare.push(this.curBarrageInfo.getText()), this.rollShare.length > 10 && this.rollShare.shift(), 
        this.reportCurrentBarrage()), e.isEmpty(getApp().getLogic().getBarrageInfoTemp()) ? (r.showMakeDataLoading(!0), 
        getApp().getLogic().loadBarrageInfoTemp(), setTimeout(function() {
            r.start(t);
        }, 1e3)) : 0 == this.particeLogic.start(this.curBarrageInfo) && r.showMakeDataLoading(!0);
    },
    setpcol: function(t) {
        var e = t.currentTarget.dataset.key, a = this.curBarrageInfo.getData();
        if (a.pckey == e) return !1;
        a.pckey = e, this.setData({
            roll: a
        }), this.particeLogic.setFontColor(a.pcArray1[e], a.pcArray2[e]), e >= 3 ? this.setData({
            toView_pcolor: this.data.particeOrder[e - 3]
        }) : this.setData({
            toView_pcolor: this.data.particeOrder[0]
        });
    },
    setCol: function(t) {
        var e = this.data.roll, a = t.currentTarget.dataset.key;
        this.data.view;
        if (e.ckey == a) return !1;
        e.col = e.cArray[a], e.ckey = a, this.setData({
            roll: e
        }), this.particeLogic.setFontColor(e.col), a >= 5 ? this.setData({
            toView_color: this.data.order[a - 5]
        }) : this.setData({
            toView_color: this.data.order[0]
        });
    },
    setbgCol: function(t) {
        var e = this.curBarrageInfo.getData(), a = t.currentTarget.dataset.key;
        this.data.view;
        if (e.bgckey == a) return !1;
        this.particeLogic.setBgColor(this.curBarrageInfo.getBgColor()), e.bgckey = a, this.setData({
            roll: e
        });
    },
    setPattern: function(t) {
        var e = this.curBarrageInfo.getData(), a = t.currentTarget.dataset.key;
        this.data.view;
        if (e.playMode == a) return !1;
        e.playMode = a, this.setData({
            roll: e
        }), console.log(e.playMode);
    },
    goList: function() {
        wx.redirectTo({
            url: "../../pages/styleList/index"
        });
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
        var t = this.curBarrageInfo.getText();
        getApp().setOtherPathToNoramlText("Particle", t), wx.redirectTo({
            url: "../../pages/index/index?fromOtherPage=Particle"
        });
    },
    onLoad: function(r) {
        l = this;
        if (this.setData({
            isAndroid: !a.systemInfo().IOS
        }), null == this.particeLogic) {
            this.particeLogic = new i.ParticeLogic(!this.data.isAndroid);
            var o = a.getWindowWidth(), s = a.getWindowHeight(), n = i.isHorizontalMode();
            this.setData({
                windowWidth: o,
                windowHeight: s,
                isHorizontal: n
            });
            var c = new i.Canvas("canvasForShow", o, s);
            new i.Canvas("canvasForBuild", n ? s : o, n ? o : s);
            this.particeLogic.setCanvas(c, c), this.particeLogic.setMakeParticeDataCallback(function(t, e) {
                t ? l.showMakeDataLoading(!1) : (console.error("make date fail"), l.setData({
                    showMakeFailDialog: !0
                }));
            });
        }
        i.checkClientIsSurpport() || (getApp().aldstat.sendEvent("unvisible", "particle"), 
        this.setData({
            supportCanvas: !1
        }));
        var g = t.getConfigInfo("roll"), l = this, h = t.getConfigInfo("view");
        this.curBarrageInfo = new t.BarrageInfoPartice(g), this.setData({
            roll: g,
            view: h,
            cursorSpace: a.rpx2px(13)
        }), e.isEmpty(r.ud) || e.isEmpty(r.uuid) || (console.log("particle onload barrage id:" + r.ud + " uuid:" + r.uuid), 
        getApp().getLogic().getBarrage(r.ud, r.uuid, function(t, e) {
            if (1 == t) {
                l.curBarrageInfo = e;
                var a = l.data.view;
                a.footShow = !1, l.data.temptxt = l.curBarrageInfo.getText(), l.setData({
                    roll: l.curBarrageInfo.getData(),
                    view: a
                }), l.data.isReady ? l.start(!0) : (l.showMakeDataLoading(!0), setTimeout(function() {
                    l.start(!0);
                }, 500));
            } else l.data.isReady ? l.start(!1) : (l.showMakeDataLoading(!0), setTimeout(function() {
                l.start(!0);
            }, 500));
        }), this.fromShareId = r.ud);
    },
    onReady: function() {
        if (this.data.supportCanvas) {
            var t = this;
            e.isEmpty(this.fromShareId) && setTimeout(function() {
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
        console.log(this.curBarrageInfo.data), this.curBarrageInfo.setId(getApp().getLogic().getBarrageIdForShare());
        var e = this, a = "/pages/particle/particle?ud=" + this.curBarrageInfo.getId() + "&uuid=" + getApp().getLogic().getUUID();
        return console.log("particle share :" + a), {
            title: "我有话要对你说↓",
            path: a,
            imageUrl: "https://scdm-1254308649.file.myqcloud.com/common/scdm_share_lizi.png",
            success: function(t) {
                console.log("Share succ........... particle"), getApp().getLogic().addBarrage(e.curBarrageInfo, function(t, a) {
                    if (-3 == t) {
                        var i = e.data.view;
                        i.footShow = !0, e.data.rollShare = r.findStrAndRemoveFromArray(e.data.rollShare, e.data.curBarrageInfo.getText());
                        var o = e.data.roll;
                        o.txt = o.defaultTxt, e.setData({
                            temptxt: "",
                            roll: o,
                            view: i
                        }), e.start(!0);
                    }
                }), getApp().getLogic().resetBarrageIdForShare(), console.log("share message succ id:" + e.curBarrageInfo.getId(), "uuid:" + getApp().getLogic().getUUID()), 
                getApp().getLogic().updateShareBarrage(e.curBarrageInfo.getId());
            }
        };
    },
    showMakeDataLoading: function(t) {
        this.data.isAndroid && (t ? wx.showLoading({
            title: "生成中..."
        }) : wx.hideLoading());
    }
});