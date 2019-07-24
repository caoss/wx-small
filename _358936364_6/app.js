var t = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var a = arguments[e];
        for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (t[r] = a[r]);
    }
    return t;
}, e = require("./libs/wechat-weapp-mobx/observer").observer;

require("./utils/http.js");

App(e({
    props: {
        homeStore: require("./store/index.js").homeStore
    },
    onLaunch: function() {
        var e = this.props.homeStore, a = this;
        e.getWallpapperList(), e.getWallpaperCategory().then(function() {
            e.setCurrentType(), e.getStat();
        });
        wx.getSystemInfo({
            success: function(e) {
                var r = e.statusBarHeight, o = 68;
                -1 !== e.model.indexOf("iPhone X") ? o = 88 : -1 !== e.model.indexOf("iPhone") && (o = 64);
                var s = o - r;
                a.globalData = Object.assign({}, a.globalData, t({
                    statusBarHeight: r,
                    navgationHeight: s
                }, e));
            },
            fail: function(t) {
                console.log("err-----------------------", t), a.globalData = Object.assign({}, a.globalData, {
                    statusBarHeight: 0,
                    navgationHeight: 0
                });
            }
        });
    },
    userData: {
        loading: !0
    },
    globalData: {}
}));