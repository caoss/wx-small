require("../config/ServerConfig.js"), require("../utils/CommonHelper.js"), module.exports = {
    reportSourceRecordCome: function(e) {
        getApp().getLogic().reportSourceRecordCome(e);
    },
    reportSourceRecordGo: function(e) {
        getApp().getLogic().reportSourceRecordGo(e);
    }
};