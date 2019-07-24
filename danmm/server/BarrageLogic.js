function e(e, t, o) {
    null != o && (o.header = {
        "secret-token": r.getSecretToken()
    }, a.isEmpty(t) || (o.header.scdm = t), null != e && (o.method = e), a.isNull(o.data) || (o.data.version = r.getVersion()), 
    wx.request(o));
}

var t = "https://shenjiaokj.com/sjkj_api/api/", r = require("../config/ServerConfig.js"), a = require("../utils/CommonHelper.js"), o = require("../utils/base64.modified.js"), s = (require("../utils/JsonHelper.js"), 
require("BarrageInfo.js")), i = require("BarrageData.js"), n = require("BarrageInfoPartice.js"), d = "uuid_v2", c = "token_v2", u = "barrageIdForShare_v2";

module.exports = {
    Logic: function() {
        this.userUUID, this.token, this.userInfo, this.shareBarrageId, this.reGetTokenTime = 0, 
        this.init = function() {
            this.loadUUID(), a.isEmpty(this.userUUID) ? this.requestUUID() : (this.loadToken(), 
            this.loadBarrageIdForShare(), a.isEmpty(this.shareBarrageId) && this.requestBarrageIdForShare(), 
            this.loadBarrageInfoTemp());
        }, this.getUUID = function() {
            return this.userUUID;
        }, this.setUserInfo = function(e) {
            a.isNull(e) || (this.userInfo = e);
        }, this.setUUID = function(e) {
            this.userUUID = e, this.saveUUID(this.userUUID), console.log("setUUID:" + e);
        }, this.loadUUID = function() {
            this.userUUID = wx.getStorageSync(d);
        }, this.resetBarrageIdForShare = function() {
            this.shareBarrageId = "", this.requestBarrageIdForShare(), console.log("logic resetBarrageIdForShare");
        }, this.getBarrageIdForShare = function() {
            return this.shareBarrageId;
        }, this.loadBarrageIdForShare = function() {
            this.shareBarrageId = wx.getStorageSync(u), console.log("logic loadBarrageIdForShare:" + this.shareBarrageId);
        }, this.setBarrageIdForShare = function(e) {
            this.shareBarrageId = e, wx.setStorageSync(u, this.shareBarrageId), console.log("setBarrageIdForShare id:" + e);
        }, this.setToken = function(e) {
            this.token = e, wx.setStorageSync(c, this.token), console.log("new token:" + this.token);
        }, this.loadToken = function() {
            this.token = wx.getStorageSync(c);
        }, this.getToken = function() {
            return this.token;
        }, this.requestUUID = function() {
            var t = this;
            e("GET", null, {
                url: r.getUrl("getUUID"),
                success: function(e) {
                    1 == e.data.code ? (t.setUUID(e.data.data.uuid), t.login()) : console.error("request getUUID error:" + e.data.msg);
                },
                fail: function(e) {
                    console.error("request getUUID fail:" + e);
                }
            });
        }, this.requestBarrageIdForShare = function() {
            var t = this;
            e("GET", this.token, {
                url: r.getUrl("getBarrageId"),
                success: function(e) {
                    1 == e.data.code ? (t.setBarrageIdForShare(e.data.data.id), console.log("logic requestBarrageIdForShare:" + e.data.data.id)) : (-1 == e.data.code && t.handleTokenUnvisible(), 
                    console.error("request requestBarrageIdForShare error:" + e.data.msg));
                },
                fail: function(e) {
                    console.error("request requestBarrageIdForShare fail:" + e);
                }
            });
        }, this.saveUUID = function() {
            wx.setStorageSync(d, this.userUUID);
        }, this.getUserInfo = function() {
            var e = this;
            return a.isNull(this.userInfo) && wx.getSetting({
                success: function(t) {
                    t.authSetting["scope.userInfo"] && wx.getUserInfo({
                        success: function(t) {
                            e.setUserInfo(t.userInfo);
                        }
                    });
                }
            }), this.userInfo;
        }, this.login = function(t) {
            var o = this;
            a.isEmpty(this.token) && wx.login({
                success: function(s) {
                    var i = s.code;
                    i && e("POST", null, {
                        url: r.getUrl("getToken"),
                        data: {
                            code: i,
                            encryptedData: "",
                            iv: "",
                            signature: "",
                            uuid: o.getUUID()
                        },
                        success: function(e) {
                            1 == e.data.code ? (o.setToken(e.data.data.scdm), o.requestBarrageIdForShare(), 
                            o.loadBarrageInfoTemp()) : console.error("request getToken error:" + e.data.msg), 
                            a.isNull(t) || t(e.data.code);
                        },
                        fail: function(e) {
                            console.error("request getToken fail:" + e);
                        }
                    });
                },
                fail: function(e) {}
            });
        }, this.addBarrage = function(t, s) {
            var i = this;
            a.isEmpty(t.getId()) ? console.error("addBarrage id is null") : (console.log("addBarrage:" + t.getText() + " style:" + t.getStyleJson() + " id:" + t.getId()), 
            e("POST", this.token, {
                url: r.getUrl("addBarrage"),
                data: {
                    uuid: this.getUUID(),
                    id: t.getId(),
                    text: o.encode(t.getText()),
                    type: "" + t.getType(),
                    style_json: o.encode(t.getStyleJson())
                },
                success: function(e) {
                    if (1 == e.data.code) {
                        var r = e.data.data.id;
                        t.setId(r), console.info("request addBarrage succ:" + e.data.msg + " id:" + r);
                    } else {
                        if (-1 == e.data.code) i.handleTokenUnvisible(); else if (-3 == e.data.code) {
                            var o = e.data.msg;
                            a.isEmpty(o) && (o = "请修改信息敏感"), wx.showToast({
                                title: o,
                                icon: "none",
                                duration: 3e3
                            });
                        }
                        console.error("request addBarrage error:" + e.data.msg);
                    }
                    a.isNull(s) || s(e.data.code, t);
                },
                fail: function(e) {
                    console.error("request addBarrage fail:" + e);
                }
            }));
        }, this.updateShareBarrage = function(t) {
            var a = this;
            e("POST", this.token, {
                url: r.getUrl("shareBarrage"),
                data: {
                    id: t
                },
                success: function(e) {
                    1 == e.data.code || (-1 == e.data.code && a.handleTokenUnvisible(), console.error("request shareBarrage error:" + e.data.msg));
                },
                fail: function(e) {
                    console.error("request shareBarrage fail:" + e);
                }
            });
        }, this.getBarrage = function(t, o, d) {
            var c = this;
            a.isEmpty(this.token) ? setTimeout(function() {
                c.getBarrage(t, o, d);
            }, 500) : e("GET", this.token, {
                url: r.getUrl("getBarrage"),
                data: {
                    uuid: o,
                    id: t
                },
                success: function(e) {
                    var r = null;
                    1 == e.data.code ? (console.log("getBarrage succ id:" + t + " type:" + e.data.data.type), 
                    null != (r = e.data.data.type == s.BarrageType.NORMAL ? new s.BarrageInfo(e.data.data.type, i.getInfo("roll")) : e.data.data.type == s.BarrageType.FLUORE ? new s.BarrageInfo(e.data.data.type, i.getInfo("fluore")) : new n.BarrageInfoPartice(n.getConfigInfo("roll"))) && r.updateByJsonData(e.data.data), 
                    c.setBarrageInfoTemp(e.data.data.info)) : (-1 == e.data.code && (c.handleTokenUnvisible(), 
                    setTimeout(function() {
                        c.getBarrage(t, o, d);
                    }, 500)), console.error("request getBarrage error:" + e.data.msg)), null != d && d(e.data.code, r);
                },
                fail: function(e) {
                    console.error("request getBarrage fail:" + e), null != d && d(-2, "net error");
                }
            });
        }, this.makeGifWaitTime = 0, this.makeGif = function(t, o) {
            t.uuid = this.getUUID();
            var s = this;
            this.makeGifWaitTime < 10 && a.isEmpty(this.token) ? (setTimeout(function() {
                s.makeGif(t, o);
            }, 1e3), this.makeGifWaitTime++, console.log(this.makeGifWaitTime)) : (this.makeGifWaitTime = 0, 
            e("POST", this.token, {
                url: r.getUrl("makeGif"),
                data: t,
                success: function(e) {
                    o.success(e), -1 == e.data.code && s.handleTokenUnvisible();
                },
                fail: function(e) {
                    o.fail(e);
                }
            }));
        }, this.trriggerTemplateMsg = function(t) {
            console.log("trriggerTemplateMsg:" + t);
            var o = this;
            a.isEmpty(this.token) ? (console.log("token为空"), this.login(function(e) {
                1 != e || a.isEmpty(o.token) || o.trriggerTemplateMsg(t);
            })) : e("POST", this.token, {
                url: r.getUrl("updateUserFormId"),
                data: {
                    form_id: t
                },
                success: function(e) {
                    console.log(e), -1 == e.data.code && o.handleTokenUnvisible();
                }
            });
        }, this.handleTokenUnvisible = function() {
            ++this.reGetTokenTime > 3 ? (console.log("handleTokenUnvisible more than " + this.reGetTokenTime), 
            wx.navigateToMiniProgram({
                appId: r.getAppId()
            })) : (this.token = "", this.login(), console.log("handleTokenUnvisible relogin"));
        }, this.setBarrageInfoTemp = function(e) {
            var t = wx.getStorageSync("barrageInfo");
            a.isEmpty(t) && (wx.setStorageSync("barrageInfo", e), console.log("setBarrageInfoTemp:" + e));
        }, this.getBarrageInfoTemp = function() {
            return wx.getStorageSync("barrageInfo");
        }, this.loadBarrageInfoTemp = function(t) {
            var o = this;
            a.isEmpty(this.getBarrageInfoTemp()) && e("GET", this.token, {
                url: r.getUrl("updateBarrage"),
                data: {},
                success: function(e) {
                    1 == e.data.code ? (o.setBarrageInfoTemp(e.data.data.info), console.info("request loadBarrageInfoTemp succ:" + e.data.data.info)) : console.error("request loadBarrageInfoTemp error:" + e.data.msg), 
                    a.isNull(t) || t(e.data.code, barrageInfo);
                },
                fail: function(e) {
                    console.error("request loadBarrageInfoTemp fail:" + e);
                }
            });
        }, this.getDefData = function(e) {
            if (e === s.BarrageType.PARTICLE) return n.getConfigInfo("roll");
        }, this.reportSourceRecordCome = function(e) {
            var a = this;
            wx.reportAnalytics("report_source_record_come", {
                appid: e
            }), wx.request({
                url: t + "sourceRecordV2",
                header: {
                    "secret-token": r.getSecretToken()
                },
                data: {
                    appid: r.getAppId(),
                    appid_come: e,
                    api_secret: r.getApiSecret(),
                    scdm: this.token
                },
                method: "POST",
                success: function(e) {
                    -1 == e.data.code && (a.handleTokenUnvisible(), setTimeout(function() {
                        a.reportSourceRecordCome();
                    }, 3e3));
                }
            });
        }, this.reportSourceRecordGo = function(e) {
            var a = this;
            wx.reportAnalytics("report_source_record_go", {
                appid: e,
                where: ""
            }), wx.request({
                url: t + "sourceRecordV2",
                header: {
                    "secret-token": r.getSecretToken()
                },
                data: {
                    appid_go: e,
                    appid: r.getAppId(),
                    api_secret: r.getApiSecret(),
                    scdm: this.token
                },
                method: "POST",
                success: function(e) {
                    -1 == e.data.code && (a.handleTokenUnvisible(), setTimeout(function() {
                        a.reportSourceRecordGo();
                    }, 3e3));
                }
            });
        };
    }
};