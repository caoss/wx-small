var t = require("../../config/ServerConfig.js"), e = require("../../server/BarrageData.js"), a = require("../../server/BarrageInfo.js"), r = require("../../utils/CommonHelper.js"), o = require("../../utils/SystemHelper.js"), i = require("../../utils/StringHelper.js"), s = require("../../server/StatisticsLogic.js");

Page({
    data: {
        rollShare: [],
        fluoreShare: [],
        menuTapCurrent: 1,
        curBarrageInfo: null,
        avatarUrl: "../../img/face.png",
        cursorSpace: 10,
        toView_color: "c1",
        toView_bgcolor: "c1",
        order: [ "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10", "c11", "c12", "c13", "c14", "c15" ],
        lastIntervalId: 0,
        focus: !1,
        temptxt: "",
        isAndroid: !1,
        rollTextHaveFace: !1,
        AdImg: "",
        AdId: "",
        naviToMiniProgramVisible: !0,
        AdButton: "scdm_side_ad",
        yinyu_fuli_hint: {
            showZhezhao: !1
        }
    },
    give: function() {
        wx.navigateToMiniProgram && wx.navigateToMiniProgram({
            appId: "wx18a2ac992306a5a4",
            path: "pages/apps/largess/detail?accountId=77738",
            success: function(t) {}
        });
    },
    finput: function(t) {
        var e = t.currentTarget.dataset.key, a = this.data.fluore;
        if (a.fluoreData[e].txt = i.Trim(t.detail.value), a.fluoreData[e].show = 0 != a.fluoreData[e].txt.length, 
        a.fluoreData[e].show) if (this.data.isAndroid) {
            var r = i.getCharIfStartWithEmojiFace(a.fluoreData[e].txt);
            if (null != r) a.fluoreData[e].shtxt = r; else {
                var o = !0, s = !1, n = void 0;
                try {
                    for (var l, d = a.fluoreData[e].txt[Symbol.iterator](); !(o = (l = d.next()).done); o = !0) {
                        var h = l.value;
                        a.fluoreData[e].shtxt = h;
                        break;
                    }
                } catch (t) {
                    s = !0, n = t;
                } finally {
                    try {
                        !o && d.return && d.return();
                    } finally {
                        if (s) throw n;
                    }
                }
            }
        } else {
            var u = !0, f = !1, c = void 0;
            try {
                for (var g, w = a.fluoreData[e].txt[Symbol.iterator](); !(u = (g = w.next()).done); u = !0) {
                    var v = g.value;
                    a.fluoreData[e].shtxt = v;
                    break;
                }
            } catch (t) {
                f = !0, c = t;
            } finally {
                try {
                    !u && w.return && w.return();
                } finally {
                    if (f) throw c;
                }
            }
        }
        this.setData({
            fluore: a
        });
    },
    ffocus: function(t) {
        var e = t.currentTarget.dataset.key, a = this.data.fluore, r = this.data.view;
        a && r ? (r.isfCol = !0, a.inpkey = e, a.ckey = a.fluoreData[e].ckey, r.isFont = !1, 
        this.setData({
            fluore: a,
            view: r
        })) : console.error("fluore or view is null");
    },
    fbuur: function(t) {
        this.ftart();
    },
    setFCol: function(t) {
        var e = t.currentTarget.dataset.key, a = this.data.fluore;
        if (e == a.ckey) return !1;
        a.fluoreData[a.inpkey].ckey = e, a.fluoreData[a.inpkey].col = a.cArray[e], a.fluoreData[a.inpkey].animat = a.aArray[e] + a.fluoreData[a.inpkey].index, 
        a.ckey = e, this.setData({
            fluore: a
        });
    },
    ftart: function(t) {
        var e, a = this.data.view, r = this.data.fluore, o = 0;
        o = r.fluoreData.map(function(t) {
            return t.show && t.edit ? 1 : 0;
        }).reduce(function(t, e) {
            return t + e;
        }), (t || o != r.tLen) && (e = o * r.fz, r.tLen = o, a.windowHeight > e ? r.top = (a.windowHeight - e) / 2 - r.fz / 2 : r.top = -(e - a.windowHeight) / 2 - r.fz / 2, 
        this.setData({
            fluore: r
        }));
    },
    menuTap: function(t) {
        var e = t.currentTarget.dataset.current;
        console.log(e), this.setData({
            menuTapCurrent: e
        });
    },
    setfz: function(t) {
        var e, a = t.currentTarget.dataset.key, r = this.data, o = r.roll, i = r.fluore, s = r.view, n = this;
        if (s.fkey == a) return !1;
        if (s.vtxt = s.ftArray[a], s.fkey = a, s.isFont = !1, 0 == s.category) o.fz = o.fArray[a], 
        o.move = 0, o.time = 0, o.fkey = a, o.top = s.windowHeight - o.fz / 2, o.setfz = !0, 
        this.setData({
            view: s,
            roll: o
        }), setTimeout(function() {
            n.start(!0);
        }, 50); else if (1 == s.category) {
            switch (i.fkey = a, i.fz = i.fArray[a], e = i.fluoreData.length, i.fluoreData = i.fluoreData.map(function(t) {
                return t.edit = !0, t;
            }), a) {
              case 1:
                i.fluoreData[e - 1].edit = !1, 4 == i.inpkey && (i.inpkey = 3);
                break;

              case 2:
                i.fluoreData[e - 1].edit = !1, i.fluoreData[e - 2].edit = !1, 4 != i.inpkey && 3 != i.inpkey || (i.inpkey = 2);
            }
            this.setData({
                fluore: i,
                view: s
            }), this.ftart(!0);
        }
    },
    setView: function() {
        var t = this.data.view, e = this.data.fluore, r = this.data.roll, i = this.data.rollShare, s = this.data.fluoreShare;
        if (r || e) {
            if (t.footShow) {
                if (t.footShow = !1, t.rollShow = !1, t.fluoreShow = !1, t.isFont = !1, t.isfCol = !1, 
                t.isrCol = !1, t.isSpeed = !1, t.category == a.BarrageType.NORMAL) r.txt == r.defaultTxt || i.some(function(t) {
                    return t == r.txt;
                }) || (i.push(r.txt), i.length > 10 && i.shift(), this.reportCurrentBarrage()); else if (t.category == a.BarrageType.FLUORE) {
                    var n = "";
                    e.fluoreData.forEach(function(t) {
                        t.show && (n += t.shtxt);
                    }), n == e.defaultTxt || s.some(function(t) {
                        return t == n;
                    }) || (s.push(n), s.length > 10 && s.shift(), this.reportCurrentBarrage());
                }
                this.getAdUrl(this.data.AdButton);
            } else t.isSet ? this.doneSet() : (t.footShow = !0, 0 == t.category ? t.rollShow = !0 : 1 == t.category && (t.fluoreShow = !0));
            o.ScreenOn(), this.setData({
                view: t,
                rollShare: i,
                fluoreShare: s
            });
        } else wx.showToast({
            title: "正在获取弹幕，请稍后...",
            icon: "none"
        });
    },
    reportCurrentBarrage: function() {},
    swFluore: function() {
        wx.navigateTo({
            url: "../../pages/styleList/index"
        });
    },
    swFluore1: function() {
        var t = this.data.view, e = this.data.fluore;
        if (t && e) {
            t.fkey = e.fkey, t.vtxt = t.ftArray[t.fkey], t.category = a.BarrageType.FLUORE, 
            t.rollShow = !1, t.fluoreShow = !0, t.isFont = !1, t.isfCol = !1, 1 == t.iscal ? (t.iscal = 0, 
            this.setData({
                view: t
            }), this.closeStart(), this.ftart(!0)) : (this.closeStart(), this.setData({
                view: t
            }));
            var r = this.data.roll;
            r.bgcol = r.bgcArray[0], getApp().getBarrageType(t.category), this.setData({
                roll: r,
                view: t
            });
        } else console.log("swFluore1 view or fluore is null");
    },
    formSubmit: function(t) {
        var e = t.detail.formId;
        getApp().getLogic().trriggerTemplateMsg(e);
    },
    swToll: function() {
        wx.navigateTo({
            url: "../../pages/styleList/index"
        });
    },
    swToll1: function() {
        var t = this.data.view, e = this.data.roll, r = e.bgckey;
        t.fkey = e.fkey, t.vtxt = t.ftArray[t.fkey], t.category = a.BarrageType.NORMAL, 
        t.rollShow = !0, t.fluoreShow = !1, t.isFont = !1, t.isfCol = !1, e.bgcol = e.bgcArray[r], 
        getApp().setBarrageType(t.category), this.setData({
            view: t
        }), this.reStart(), console.log(e.bgckey);
    },
    listenerVal: function(t) {
        this.data.roll ? (this.data.roll.temptxt = t.detail.value, this.start(!1)) : console.error("listenerVal roll is null");
    },
    showSpeed: function() {
        var t = this.data.view;
        t.isSpeed = !t.isSpeed, t.isFont = !1, t.isColor = !1, this.setData({
            view: t
        });
    },
    setSpeed: function(t) {
        var e = this.data.roll, a = t.currentTarget.dataset.key, r = this.data.view, o = this;
        if (e.skey == a) return !1;
        e.move = 0, e.time = 0, e.skey = a, r.isSpeed = !1, e.spTxt = e.sTxtArray[a], e.setfz = !0, 
        this.setData({
            roll: e,
            view: r
        }), setTimeout(function() {
            o.start(!0);
        }, 50);
    },
    showCol: function() {
        var t = this.data.view;
        t.isrCol = !t.isrCol, t.isFont = !1, t.isSpeed = !1, this.setData({
            view: t
        });
    },
    setCol: function(t) {
        var e = this.data.roll, a = t.currentTarget.dataset.key, r = this.data.view, o = this;
        if (e.ckey == a) return !1;
        e.col = e.cArray[a], clearInterval(e.st), e.ckey = a, r.isrCol = !1, e.move = 0, 
        e.time = 0, this.setData({
            roll: e,
            view: r
        }), setTimeout(function() {
            o.time();
        }, 50), a >= 5 ? this.setData({
            toView_color: this.data.order[a - 5]
        }) : this.setData({
            toView_color: this.data.order[0]
        });
    },
    setbgCol: function(t) {
        var e = this.data.roll, a = t.currentTarget.dataset.key, r = this.data.view, o = this;
        if (e.bgckey == a) return !1;
        e.bgcol = e.bgcArray[a], e.bgckey = a, clearInterval(this.data.lastIntervalId), 
        r.isrCol = !1, e.move = 0, e.time = 0, this.setData({
            roll: e,
            view: r
        }), setTimeout(function() {
            o.time();
        }, 50), a >= 5 ? this.setData({
            toView_bgcolor: this.data.order[a - 5]
        }) : this.setData({
            toView_bgcolor: this.data.order[0]
        });
    },
    showfz: function() {
        var t = this.data.view;
        t.isFont = !t.isFont, t.isfCol = !1, t.isrCol = !1, t.isSpeed = !1, this.setData({
            view: t
        });
    },
    focus: function() {
        var t = this.data.roll;
        t ? (clearInterval(t.st), t.txt = "", t.focus = !0, t.move = 0, t.time = 0, this.setData({
            roll: t,
            focus: !0
        })) : console.error("focus roll is null");
    },
    inputEnd: function() {
        this.start(!0), this.setData({
            focus: !1
        });
    },
    start: function(t) {
        this.data.view;
        var e, a, r, s, n = this.data.roll;
        n ? (s = n.speedbase * n.sArray[n.skey], e = (a = i.Trim(n.temptxt)).length, this.data.isAndroid && (i.haveEmojiFace(a) ? this.setData({
            rollTextHaveFace: !0
        }) : this.setData({
            rollTextHaveFace: !1
        })), 0 == e && (e = (a = n.setfz ? n.txt : n.defaultTxt).length), r = i.chineseNum(a) + 2, 
        n.moveLen = (e - r + 2) * n.fz / 2 + r * n.fz + o.systemInfo().windowHeight, n.moveTime = Math.ceil(n.moveLen / s / 1e3), 
        n.moveLen = -n.moveLen, n.setmoveTime = 1e3 * n.moveTime + 300, n.txt = a, t && (n.temptxt = "", 
        n.setfz = !1, n.focus = !1, this.setData({
            temptxt: ""
        })), this.setData({
            roll: n
        }), this.time()) : console.log("index start roll is null");
    },
    time: function() {
        var t = this.data.roll, e = this;
        console.log("clearInerval:" + this.data.lastIntervalId), clearInterval(this.data.lastIntervalId), 
        t.move = 0, t.time = 0, e.setData({
            roll: t
        }), setTimeout(function() {
            t.move = t.moveLen, t.time = t.moveTime, e.setData({
                roll: t
            });
        }, 300), this.data.lastIntervalId = setInterval(function(a) {
            t.move = 0, t.time = 0, e.setData({
                roll: t
            }), setTimeout(function() {
                t.move = t.moveLen, t.time = t.moveTime, e.setData({
                    roll: t
                });
            }, 300);
        }, t.setmoveTime);
    },
    closeStart: function() {
        var t = this.data.roll;
        t ? (clearInterval(t.st), t.move = 0, t.time = 0, this.setData({
            roll: t
        })) : console.error("closeStart roll is null");
    },
    reStart: function() {
        var t = this.data.roll;
        {
            if (t) return t.isReStart ? (t.isReStart = !1, this.setData({
                roll: t
            }), !1) : void (t.moveTime > 0 ? this.time() : this.start(!0));
            console.error("reStart roll is null");
        }
    },
    onHide: function() {
        var t = this.data.view;
        t && 0 == t.category && this.closeStart();
    },
    goHeiKeJi: function() {
        if (0 == this.data.showDlg) {
            var e = t.getAppId();
            this.data.AdId == e ? wx.redirectTo({
                url: this.data.AdUrl
            }) : (s.reportSourceRecordGo(this.data.AdId), wx.navigateToMiniProgram({
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
        s.reportSourceRecordGo(this.data.AdId);
    },
    getAdUrl: function(e) {
        var a = this;
        wx.request({
            url: "https://shenjiaokj.com/sjkj_api/api/buttonEvent",
            data: {
                btn_key: e,
                _type: "rand"
            },
            header: {
                "secret-token": t.getSecretToken()
            },
            success: function(t) {
                if (1 == t.data.code) {
                    var e = "/" + t.data.data.appurl, r = t.data.data.appid, o = t.data.data.bgimg_path_src;
                    a.setData({
                        dlgOpacity: 1,
                        AdUrl: e,
                        AdId: r,
                        AdImg: o,
                        showDlg: !1
                    }), a.getNavigateToMiniProgram();
                } else console.log(t.data);
            }
        });
    },
    onShow: function() {
        var t = this.data.view, r = this;
        try {
            t.category == a.BarrageType.NORMAL && this.reStart();
        } catch (o) {
            setTimeout(function() {
                r.data.view || (t = e.getInfo("view"), r.setData({
                    view: t
                }), t.category == a.BarrageType.NORMAL && getApp().getBarrageType() == a.BarrageType.FLUORE ? r.swFluore1() : t.category == a.BarrageType.FLUORE && getApp().getBarrageType() == a.BarrageType.NORMAL && r.swToll1());
            }, 1e3);
        }
        t && (r.setData({
            view: t
        }), t.category == a.BarrageType.NORMAL && getApp().getBarrageType() == a.BarrageType.FLUORE ? this.swFluore1() : t.category == a.BarrageType.FLUORE && getApp().getBarrageType() == a.BarrageType.NORMAL && this.swToll1()), 
        this.getAdUrl(this.data.AdButton);
    },
    setInfo: function() {
        this.getAdUrl(this.data.AdButton), console.log("--------------");
        var t = this.data, e = t.view, a = t.roll, r = t.fluore;
        a || r ? (e.isSet = !0, e.footShow = !1, this.setData({
            view: e
        })) : wx.showToast({
            title: "正在获取弹幕，请稍后...",
            icon: "none"
        });
    },
    doneSet: function() {
        var t = this.data.view;
        t.isSet = !1, t.footShow = !0, this.setData({
            view: t
        });
    },
    smallPrgo: function() {
        wx.navigateTo({
            url: "/pages/drainage/drainage"
        });
    },
    makeGif: function() {
        var t = this.data.roll;
        t && t.txt && t.txt.length > 0 ? t.txt.length <= 20 ? wx.navigateTo({
            url: "/pages/gif/gif?txt=" + t.txt + "&color=" + t.col + "&speed=" + t.skey + "&bgColor=" + t.bgcol + "&fontSize=" + t.fz
        }) : wx.showToast({
            title: "字数要小于20字"
        }) : wx.showToast({
            title: "你还没输入"
        });
    },
    userInfoHandler: function(t) {
        var e = t.detail.userInfo;
        getApp().getLogic().setUserInfo(e), this.setInfo();
    },
    onLoad: function(t) {
        var i = o.systemInfo(), s = e.getInfo("fluore"), n = e.getInfo("view"), l = e.getInfo("roll"), d = this;
        if (this.setData({
            isAndroid: !i.IOS
        }), console.log("onLoad ud:" + t.ud + " uuid:" + t.uuid), r.isEmpty(t.ud)) n.category = a.BarrageType.NORMAL, 
        n.rollShow = !0, n.fluoreShow = !1, n.footShow = !0, n.windowWidth = i.windowWidth, 
        n.windowHeight = i.windowHeight, n.IOS = i.IOS, n.tleft = i.windowWidth / 2 ? i.windowWidth / 2 : 150, 
        l.top = i.windowHeight - l.fz / 2, "alading" == decodeURIComponent(t.scene) && (l.txt = "AMIC大会带您领略小程序大商业", 
        l.temptxt = l.txt), r.isEmpty(t.fromOtherPage) || (l.txt = getApp().getOtherPathToNoramlText(t.fromOtherPage), 
        l.temptxt = l.txt), d.setData({
            fluore: s,
            roll: l,
            view: n,
            cursorSpace: o.rpx2px(13)
        }); else try {
            getApp().getLogic().getBarrage(t.ud, t.uuid, function(t, e) {
                if (1 == t) if (null != e) {
                    d.data.curBarrageInfo = e, n.category = e.getType(), n.category == a.BarrageType.NORMAL ? (l.isReStart = !0, 
                    n.fkey = l.fkey, n.vtxt = n.ftArray[n.fkey], (l = e.data).move = 0, l.time = 0, 
                    l.setfz = !0) : (n.iscal = 0, s = e.data);
                    var r = !0, h = !1, u = void 0;
                    try {
                        for (var f, c = Object.keys(n)[Symbol.iterator](); !(r = (f = c.next()).done); r = !0) {
                            var g = f.value;
                            !0 === n[g] && (n[g] = !1);
                        }
                    } catch (t) {
                        h = !0, u = t;
                    } finally {
                        try {
                            !r && c.return && c.return();
                        } finally {
                            if (h) throw u;
                        }
                    }
                    n.windowWidth = i.windowWidth, n.windowHeight = i.windowHeight, n.IOS = i.IOS, n.tleft = i.windowWidth / 2 ? i.windowWidth / 2 : 150, 
                    l.top = i.windowHeight - l.fz / 2, l.isReStart && setTimeout(function() {
                        d.start(!0);
                    }, 50), d.setData({
                        fluore: s,
                        roll: l,
                        view: n
                    }), 1 == n.category && d.ftart(!0);
                } else n.category = a.BarrageType.NORMAL, n.rollShow = !0, n.fluoreShow = !1, n.footShow = !0, 
                n.windowWidth = i.windowWidth, n.windowHeight = i.windowHeight, n.IOS = i.IOS, n.tleft = i.windowWidth / 2 ? i.windowWidth / 2 : 150, 
                l.top = i.windowHeight - l.fz / 2, d.setData({
                    fluore: s,
                    roll: l,
                    view: n,
                    cursorSpace: o.rpx2px(13)
                }); else wx.hideLoading && wx.hideLoading(), wx.showToast({
                    title: -2 == t ? "网络不佳，获取弹幕失败" : "网络不佳，获取弹幕失败！",
                    icon: "none",
                    duration: 2e3
                }), n.windowWidth = i.windowWidth, n.windowHeight = i.windowHeight, n.IOS = i.IOS, 
                n.tleft = i.windowWidth / 2 ? i.windowWidth / 2 : 150, l.top = i.windowHeight - l.fz / 2, 
                l.isReStart && setTimeout(function() {
                    d.start(!0);
                }, 50), d.setData({
                    fluore: s,
                    roll: l,
                    view: n
                }), 1 == n.category ? this.ftart(!0) : setTimeout(function() {
                    d.start(!0);
                }, 50);
            });
        } catch (t) {
            console.log(t);
        }
    },
    getNavigateToMiniProgram: function() {
        o.curVersionBiggerThan("2.0.6") ? this.setData({
            naviToMiniProgramVisible: !1
        }) : this.setData({
            naviToMiniProgramVisible: !0
        });
    },
    back: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    onShareAppMessage: function() {
        var t = "";
        console.log("isRollShow:" + this.data.view.category), r.isNull(this.data.curBarrageInfo) ? this.data.view.category == a.BarrageType.NORMAL ? this.data.curBarrageInfo = new a.BarrageInfo(a.BarrageType.NORMAL, this.data.roll) : this.data.curBarrageInfo = new a.BarrageInfo(a.BarrageType.FLUORE, this.data.fluore) : this.data.view.category == a.BarrageType.NORMAL ? (this.data.curBarrageInfo.setData(this.data.roll), 
        this.data.curBarrageInfo.setType(a.BarrageType.NORMAL)) : (this.data.curBarrageInfo.setData(this.data.fluore), 
        this.data.curBarrageInfo.setType(a.BarrageType.FLUORE)), t = getApp().getLogic().getBarrageIdForShare(), 
        this.data.curBarrageInfo.setId(t);
        var o = this, s = "/pages/index/index?ud=" + t + "&uuid=" + getApp().getLogic().getUUID();
        return console.log("onAppShareMessage:" + s), {
            title: "快点开看我说了啥",
            path: s,
            imageUrl: "https://scdm-1254308649.file.myqcloud.com/common/scdm_share_index.png",
            success: function(r) {
                console.log("分享成功 index....."), getApp().getLogic().addBarrage(o.data.curBarrageInfo, function(t, r) {
                    if (-3 == t) {
                        var s = o.data.view;
                        if (s.footShow = !0, o.data.view.category == a.BarrageType.NORMAL) {
                            o.data.rollShare = i.findStrAndRemoveFromArray(o.data.rollShare, o.data.curBarrageInfo.getText());
                            var n = o.data.roll;
                            n.txt = n.defaultTxt, o.setData({
                                temptxt: "",
                                roll: n,
                                view: s
                            });
                        } else {
                            o.data.fluoreShare = i.findStrAndRemoveFromArray(o.data.fluoreShare, o.data.curBarrageInfo.getText());
                            var l = e.getInfo("fluore");
                            o.setData({
                                fluore: l,
                                view: s
                            });
                        }
                        o.start(!0);
                    }
                }), getApp().getLogic().resetBarrageIdForShare(), console.log("share message succ id:" + t, "uuid:" + getApp().getLogic().getUUID()), 
                getApp().getLogic().updateShareBarrage(t);
            }
        };
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