Component({
    properties: {
        aid: {
            type: String,
            value: ""
        }
    },
    data: {
        api: "https://www.dzadx.com/api/",
        cssloading: "dz-wrap-loading",
        params: {},
        queryData: {},
        showed: [],
        imgUrl: "",
        imgView: "",
        pageShow: 0,
        imgshow: 0
    },
    pageLifetimes: {
        show: function() {
            this.setData({
                pageShow: 1,
                imgshow: 0
            });
        },
        hide: function() {
            this.setData({
                pageShow: 0,
                imgshow: 1
            });
        }
    },
    lifetimes: {
        attached: function() {
            var a = this, e = a.data.params;
            e.appid = wx.getAccountInfoSync().miniProgram.appId, wx.getSystemInfo({
                success: function(t) {
                    e.model = t.model, e.platform = t.platform, e.system = t.system, e.version = t.version, 
                    a.setData({
                        params: e
                    });
                }
            }), wx.getNetworkType({
                success: function(t) {
                    e.net = t.networkType, a.setData({
                        params: e
                    });
                }
            }), this.getOpenidcode();
        }
    },
    methods: {
        imgLoad: function(a) {
            this.setData({
                cssloading: ""
            }), this.requestPv();
        },
        getOpenidcode: function() {
            var a = this, e = a.data.params;
            wx.login({
                success: function(t) {
                    e.code = t.code;
                    var i = wx.getStorageSync("openid");
                    i && (e.code = "", e.openid = i), a.setData({
                        params: e
                    }), a.requestAd();
                }
            });
        },
        requestAd: function() {
            var a = this, e = this.data.params;
            a.properties.aid ? wx.request({
                url: a.data.api + "appckpv/getad",
                data: {
                    aid: a.properties.aid,
                    code: a.data.params.code
                },
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                success: function(t) {
                    if (t.data.success) {
                        var i = t.data.data;
                        i.imgs.length && (e.code && (e.openid = i.openid, wx.setStorage({
                            key: "openid",
                            data: i.openid
                        })), a.setData({
                            params: e,
                            queryData: i
                        }), a.showImg());
                    }
                }
            }) : console.log('请在组件上传入aid，例：<dzad aid="xxxxxx"></dzad>');
        },
        requestPv: function() {
            var a = this, e = this.data.params, t = this.data.aditem, i = a.data.queryData;
            this.data.showed.indexOf(t.id) < 0 && (e.pay = 0, e.type = 0, wx.request({
                url: i.pvurl,
                data: e,
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                success: function(e) {
                    var i = a.data.showed;
                    i.indexOf(t.id) < 0 && (i.push(t.id), a.setData({
                        showed: i
                    }));
                }
            }));
        },
        requestCk: function() {
            var a = this.data.queryData, e = this.data.params;
            e.pay = 1, e.type = 1, wx.request({
                url: a.ckurl,
                data: e,
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                method: "POST"
            });
        },
        showImg: function() {
            var a = this, e = this.data.queryData;
            if (0 == this.data.imgshow) {
                var t = e.imgs, i = wx.getStorageSync("showimgs");
                i = i ? JSON.parse(i) : [];
                for (var s = t[Math.floor(Math.random() * t.length)], d = (e.webad.removeids || "").split(","), o = 0; o < t.length; o++) if (s = t[o], 
                i.indexOf(s.id) < 0 && d.indexOf(s.id) < 0) {
                    i.push(s.id);
                    break;
                }
                i.length >= t.length && (i = []), wx.setStorage({
                    key: "showimgs",
                    data: JSON.stringify(i)
                });
                var r = getCurrentPages(), n = r[r.length - 1].route, p = this.data.params;
                p.url = n, p.aid = s.id, p.realjump = s.realjump, p.aduid = s.uid, p.sid = e.webad.id, 
                p.webid = e.webad.webid, p.webuid = e.webad.uid, this.setData({
                    aditem: s,
                    params: p,
                    imgUrl: e.imghost + s.pic,
                    imgView: e.imghost + s.codepic
                });
            }
            e.loop && setTimeout(function() {
                a.showImg();
            }, e.loop);
        },
        previewImage: function(a) {
            var e = this, t = this.data.queryData;
            wx.previewImage({
                current: e.data.imgView,
                urls: [ e.data.imgView ],
                success: function() {
                    setTimeout(function() {
                        0 == e.data.pageShow ? e.data.params.realjump = 1 : e.data.params.realjump = 0, 
                        e.requestCk();
                    }, t.realjump);
                }
            });
        },
        dzClickad: function(a) {
            var e = this, t = this.data.queryData, i = this.data.aditem;
            1 == t.webad.direct && 1 == i.direct ? (e.setData({
                imgshow: 1
            }), wx.navigateToMiniProgram({
                appId: i.appid,
                success: function(a) {
                    e.data.params.realjump = 1, e.requestCk(), e.setData({
                        imgshow: 0
                    });
                },
                fail: function(a) {
                    a.errMsg.indexOf("appId") >= 0 ? e.previewImage() : (e.data.params.realjump = 0, 
                    e.requestCk(), e.setData({
                        imgshow: 0
                    }));
                }
            })) : e.previewImage();
        }
    }
});