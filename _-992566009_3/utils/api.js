var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("config.js")), a = getApp();

t.default.getDomain, t.default.hostDomain, t.default.CID;

console.log(a), module.exports = {
    login: function(t) {
        return a.globalData.api + "Users/";
    },
    postUserInfo: function() {
        return a.globalData.api + "Users/";
    },
    getHomeList: function() {
        return a.globalData.api + "/home.html";
    },
    getList: function(t) {
        return a.globalData.api + "/Lists/?fields=id,title,status,create_time&offset=" + t.offset + "&limit=" + t.limit + "&type=" + t.type;
    },
    deleteList: function(t) {
        return a.globalData.api + "/Lists/" + t.id + "/hide";
    },
    getListByID: function(t) {
        return a.globalData.api + "/Lists/";
    },
    getWinListByID: function(t) {
        return a.globalData.api + "/win/" + t.list_id + ".html";
    },
    getWinListByPage: function(t) {
        return a.globalData.api + "/winmore?list_id=" + t.lid + "&detail_id=" + t.id + "&p=" + t.p;
    },
    putKXByID: function(t) {
        return a.globalData.api + "/awarded.html";
    },
    getUserInfo: function(t) {
        return a.globalData.api + "/userinfo.html";
    },
    getAddrList: function(t) {
        return a.globalData.api + "/address.html";
    },
    getAddrListByID: function(t) {
        return a.globalData.api + "/address/" + t.id + ".html";
    },
    getAddrByID: function(t) {
        return a.globalData.api + "/confirmAddress/" + t.id + ".html";
    },
    postAddr: function(t) {
        return a.globalData.api + "/address.html";
    },
    postAddrWX: function(t) {
        return a.globalData.api + "/confirmAddress/" + t.id + ".html";
    },
    getMyList: function(t) {
        return a.globalData.api + "/myList.html?type=" + t.type + "&status=" + t.status + "&p=" + t.page + "&limit=" + t.limit;
    },
    confirmAddr: function(t) {
        return a.globalData.api + "/confirmAddress.html";
    },
    getAQList: function(t) {
        return a.globalData.api + "/question.html";
    },
    getAQListByID: function(t) {
        return a.globalData.api + "/question/" + t.id + ".html";
    },
    getJoinGameList: function(t) {
        return "https://wxa.zhuyuce.com/juliang.php?s=YxBox/common&app_id=54&category=cjxgj";
    },
    getRecommend: function() {
        return a.globalData.api + "recommend.html";
    },
    postSpread: function(t) {
        return a.globalData.api + "/spread.html";
    },
    getSpread: function(t) {
        return a.globalData.api + "/spread.html";
    },
    postLottery: function(t) {
        return t;
    },
    putLottery: function(t) {
        return t;
    },
    getLottery: function(t) {
        return t;
    },
    getEWM: function(t) {
        return a.globalData.api + "/lists/" + t.lid + "/share?scene=" + t.type + t.lid + "&page=" + encodeURIComponent(t.path);
    },
    getDetail: function(t) {
        return a.globalData.api + "/lists/" + t.lid + "/runs.html";
    },
    getPrizeUsers: function(t) {
        return a.globalData.api + "/Lists/" + t.lid + "/users/?fields=username,avatar,create_time&offset=" + t.offset;
    },
    comingPrize: function(t) {
        return a.globalData.api + "/Lists/" + t.lid + "/users/";
    },
    joinPrize: function(t) {
        return a.globalData.api + "/Lists/" + t.lid + "/users/";
    },
    showdetail: function(t) {
        return a.globalData.api + "/Lists/" + t.lid + "/hide";
    },
    winnerExport: function(t) {
        return a.globalData.api + "/export/" + t.list_id + ".html";
    }
};