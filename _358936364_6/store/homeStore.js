var t = require("../libs/wechat-weapp-mobx/mobx").extendObservable, e = require("../utils/http.js"), a = require("../configs/EvnConst.js"), l = require("../configs/ApiConst.js"), o = (require("../common/data.js"), 
a.default.apiHost);

module.exports = function() {
    t(this, {
        wallpaperData: {
            list: [],
            total: 0,
            more: !0,
            pageNo: 1
        },
        wallpaperDataColum: {
            list: [],
            total: 0,
            more: !0,
            pageNo: 1
        },
        wallpaperDataDetail: {
            list: [],
            total: 0,
            more: !0,
            pageNo: 1
        },
        wallpaperCategory: {
            list: [],
            total: 0
        },
        currentType: {
            id: 1,
            name: "cateName"
        },
        cur_type: !1,
        wallpaperStat: {
            newImgCnt: 0,
            totalDownloadCnt: 0
        },
        shareTiles: [ "这么好看的壁纸，一定适合好看的你", "来这里，你想要的我都有", "好看的皮囊千篇一律，有趣的灵魂百里挑一", "海量超清壁纸，给你一双发现美的眼睛", "每天一碗毒鸡汤，满满的正能量", "拔剑吧少年，新世界在召唤", "百万超清壁纸，还原每一帧的精彩" ],
        getWallpapperList: function() {
            var t = this, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            console.log("cur_type", this.cur_type), console.log("lvCateId", this.currentType.id);
            var r = a.pageNo, n = void 0 === r ? this.wallpaperData.pageNo : r, i = a.pageSize, p = void 0 === i ? 30 : i, s = a.idChange;
            return wx.showLoading({
                title: "",
                mask: !0
            }), this.cur_type && !a.pageNo && (n = this.wallpaperDataColum.pageNo), new Promise(function(a, r) {
                e.get(o + l.default.LV1_CATEGORY, {
                    lvCateId: t.currentType.id,
                    pageNo: n,
                    pageSize: p
                }).then(function(e) {
                    wx.hideLoading(), e.list.length > 0 && (t.cur_type ? t.wallpaperDataColum = 1 === n ? {
                        list: e.list,
                        total: e.total,
                        more: e.more,
                        pageNo: n + 1
                    } : {
                        list: t.wallpaperDataColum.list.concat(e.list),
                        total: e.total,
                        more: e.more,
                        pageNo: n + 1
                    } : t.wallpaperData = 1 === n ? {
                        list: e.list,
                        total: e.total,
                        more: e.more,
                        pageNo: n + 1
                    } : {
                        list: t.wallpaperData.list.concat(e.list),
                        total: e.total,
                        more: e.more,
                        pageNo: n + 1
                    }, s && (t.wallpaperData = 1 === n ? {
                        list: e.list,
                        total: e.total,
                        more: e.more,
                        pageNo: n + 1
                    } : {
                        list: t.wallpaperData.list.concat(e.list),
                        total: e.total,
                        more: e.more,
                        pageNo: n + 1
                    })), a();
                });
            });
        },
        getWallpaperCategory: function() {
            var t = this;
            return arguments.length > 0 && void 0 !== arguments[0] && arguments[0], new Promise(function(a, r) {
                e.get(o + l.default.LV1_lIST).then(function(e) {
                    t.wallpaperCategory = {
                        list: e,
                        total: e.length
                    }, a();
                });
            });
        },
        getStat: function() {
            var t = this;
            e.get(o + l.default.WALLPAPERS_STAT, {
                lvCateId: this.currentType.id
            }).then(function(e) {
                t.wallpaperStat = {
                    newImgCnt: e.newImgCnt,
                    totalDownloadCnt: e.totalDownloadCnt
                };
            });
        },
        setCurrentType: function() {
            var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = (e.type, 
            e.index), l = void 0 === a ? 0 : a;
            return new Promise(function(e, a) {
                var o = t.wallpaperCategory.list[l];
                o.id == t.currentType.id && (t.currentType = t.wallpaperCategory.list[l]), o.id !== t.currentType.id && (t.currentType = t.wallpaperCategory.list[l], 
                t.getWallpapperList({
                    pageNo: 1,
                    idChange: !0
                }), t.getStat(), e({
                    status: 0,
                    message: "success"
                })), e({
                    status: 1,
                    message: "success"
                });
            });
        },
        setCurrentType2: function(t) {
            this.cur_type = t;
        },
        getSize: function(t) {
            return new Promise(function(a, r) {
                e.get(o + l.default.WALLPAPERS_SIZE + "?imgUrl=" + t).then(function(t) {
                    a(t);
                });
            });
        },
        downLoadSuccess: function(t) {
            var a = this;
            e.post(o + l.default.WALLPAPERS_DOWNLOAD, {
                wpId: t
            }).then(function(t) {
                console.log("result", t), a.wallpaperStat = {
                    totalDownloadCnt: a.wallpaperStat.totalDownloadCnt - 0 + 1,
                    newImgCnt: a.wallpaperStat.newImgCnt
                };
            });
        }
    });
};