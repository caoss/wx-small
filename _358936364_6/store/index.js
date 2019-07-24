var e = require("../libs/wechat-weapp-mobx/mobx").extendObservable, r = require("./homeStore");

module.exports = new function() {
    e(this, {
        homeStore: new r()
    });
}();