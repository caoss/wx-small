var a = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}(require("./utils/av-weapp-min.js"));

App({
    globalData: {
        pixelRatio: 1,
        windowWidth: 0,
        windowHeight: 0,
        hats: []
    },
    onLaunch: function() {
        a.default.init({
            appId: "899e29777f1b4ba52c5961091a296b5d",
            appKey: "wx742dd65cdd852c41"
        });
    }
});