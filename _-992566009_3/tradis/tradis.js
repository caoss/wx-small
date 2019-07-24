function t(t) {
    var a = "https://api.zjjunlv.com/r.gif?union_id=" + t.target.dataset.union_id + "&creative_id=" + t.target.dataset.creative_id + "&openid=" + wx.getStorageSync("openid") + "&action=click";
    console.log(a), wx.request({
        url: a
    });
}

function a(a) {
    console.log(a), "h5" == a.target.dataset.linktype && (console.log("click h5"), wx.reportAnalytics("gaogao", {
        type: "h5"
    }), wx.navigateTo({
        url: "/tradis/h5/h5?url=" + encodeURIComponent(a.target.dataset.path),
        success: function() {
            t(a);
        }
    })), "wxa" == a.target.dataset.linktype && (console.log("wxa"), wx.reportAnalytics("gaogao", {
        type: "wxa"
    }), wx.navigateToMiniProgram({
        appId: a.target.dataset.appid,
        path: a.target.dataset.path,
        success: function() {
            t(a);
        }
    })), "article" == a.target.dataset.linktype && (console.log("article"), wx.reportAnalytics("gaogao", {
        type: "article"
    }), wx.navigateTo({
        url: a.target.dataset.path,
        success: function() {
            t(a);
        }
    })), "ad" == a.target.dataset.linktype && (console.log("ad"), wx.reportAnalytics("gaogao", {
        type: "ad"
    }), t(a));
}

function e(t) {
    console.log(t), console.log("没有合适的广告显示");
}

function o(t) {
    console.log(t);
}

var n = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../utils/config.js")), i = n.default.hostDomain, r = n.default.CID, s = 0, d = 0;

wx.getSystemInfo({
    success: function(t) {
        s = t.windowWidth, d = t.windowHeight;
    }
}), module.exports = {
    tradis: function(t) {
        console.log(t);
        var n = {};
        wx.request({
            url: i + "/ads.php?id=" + r,
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                1 == a.data.code && (n.openid = wx.getStorageSync("openid"), n.tradisData = a.data.data, 
                n.innerad = [], n.positionad = [], n.tradisData.forEach(function(a, e) {
                    n.tradisData[e].content.forEach(function(t, a) {
                        n.tradisData[e].content[a]._t = new Date().getTime(), n.tradisData[e].content[a].openid = wx.getStorageSync("openid");
                    }), n.tradisData[e].show = !1, 0 == n.tradisData[e].display.length && ("topBanner" == a.type ? n.BHeight = 0 : "btmBanner" == a.type && (n.BTHeight = 0)), 
                    n.tradisData[e].display.forEach(function(o, i) {
                        if (t.data.pageIn == o) return "innerBanner" == n.tradisData[e].type && n.innerad.push(n.tradisData[e]), 
                        n.positionad.push(n.tradisData[e]), n.tradisData[e].show = !0, "topBanner" == a.type ? void (n.BHeight = parseInt(a.height) + 15 + "rpx") : void ("btmBanner" == a.type && (n.BTHeight = parseInt(a.height) + 15 + "rpx"));
                    });
                }), console.log(n), t.setData(n));
            }
        }), t.tradisTap = a, t.tradisError = e, t.tradisLoad = o;
    },
    tradisTap: a,
    tradisError: e,
    tradisLoad: o
};