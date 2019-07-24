require("../config/ServerConfig.js"), require("../utils/CommonHelper.js");

module.exports = {
    reportSourceRecordCome: function(e, o) {
        var r = getApp();
        !r && o && (r = o), r.getLogic().reportSourceRecordCome(e);
    },
    reportSourceRecordGo: function(e) {
        getApp().getLogic().reportSourceRecordGo(e);
    }
};