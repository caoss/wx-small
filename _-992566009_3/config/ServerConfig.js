var e = {
    getUUID: "getUserUuid",
    getToken: "getUserToken",
    makeGif: "makeBarrageGif",
    addBarrage: "addBarrage",
    shareBarrage: "updateBarrageShareCount",
    getBarrage: "getBarrageInfo",
    getBarrageId: "getBarrageId",
    updateUserFormId: "updateUserFormId",
    updateBarrage: "updateBarrageInfo"
}, r = {
    sourceRecord: "sourceRecordV2"
};

module.exports = {
    getUrl: function(r) {
        return "https://shenjiaokj.com/scdm_v2/api/" + e[r];
    },
    getStaticsUrl: function(e) {
        return "https://shenjiaokj.com/sjkj_api/api/" + r[e];
    },
    getAppId: function() {
        return "wx68c7dd3634272f71";
    },
    getSecretToken: function() {
        return "az4ZpQ7km18xy3dhvQ5JrpMgROiHdwMo";
    },
    getApiSecret: function() {
        return "yjr38tuj1d0pzi8ctr1nsc663h0byeed";
    },
    getVersion: function() {
        return "v1.5.10";
    }
};