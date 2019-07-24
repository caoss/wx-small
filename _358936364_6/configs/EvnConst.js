Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = exports.Mode = {
    DEBUG: "DEBUG",
    TEST: "TEST",
    PREP: "PREP",
    RELEASE: "RELEASE"
}, c = {
    DEBUG: "https://neets.cc/uc-wechat-callback/h5",
    TEST: "https://neets.cc/UC_ADAPTER_CALLBACK/h5",
    PREP: "https://neets.cc/uc-wechat-callback/h5",
    RELEASE: "https://neets.cc/uc-wechat-callback/h5"
}, e = {
    DEBUG: "http://121.40.29.234:8088/",
    TEST: "http://121.40.29.234:8088/",
    PREP: "https://communityapi.neets.cc/",
    RELEASE: "https://communityapi.neets.cc/"
}, E = {
    DEBUG: "http://47.97.0.114:28080/",
    TEST: "http://47.97.0.114:28080/",
    PREP: "https://uc.neets.cc/",
    RELEASE: "https://uc.neets.cc/"
}, s = {
    DEBUG: "http://118.31.115.183:28080/",
    TEST: "http://118.31.115.183:28080/",
    PREP: "https://main.neets.cc/",
    RELEASE: "https://main.neets.cc/"
}, p = {
    DEBUG: "https://log.neets.cc/",
    TEST: "https://log.neets.cc/",
    PREP: "https://log.neets.cc/",
    RELEASE: "https://log.neets.cc/"
}, h = {
    DEBUG: "http://118.178.224.109:8088/api/",
    TEST: "http://118.178.224.109:8088/api/",
    PREP: "https://tcommunity.neets.cc/api/",
    RELEASE: "https://tcommunity.neets.cc/api/"
}, n = exports.currentMode = t.RELEASE, a = {
    apiHost: e[n],
    ucHost: E[n],
    mainHost: s[n],
    logHost: p[n],
    temHost: h[n],
    redirectUri: c[n]
};

exports.default = a;