var t = require("BarrageInfo.js"), i = require("../utils/JsonHelper.js"), e = require("../utils/CommonHelper.js"), s = require("../utils/base64.modified.js"), o = {};

o.view = {
    isSet: !1,
    footShow: !0
}, o.roll = {
    defaultTxt: "",
    txt: "",
    pckey: 0,
    pcArray1: [ "#8BA6D6", "#006AFF", "#FFAF45", "#9FBB87", "#E71717", "#27FDA0", "#7C4EFF", "#FF5858", "#F9F7EA", "#7CD096", "#999999", "#FFA687" ],
    pcArray2: [ "#FFB296", "#CACAD7", "#FFDACD", "#FFF4F0", "#FFB229", "#F5FFDD", "#27FDA0", "#87FFCB", "#FFDACD", "#FF791E", "#ffffff", "#FFD8A5" ],
    bgcArray: [ "#000000", "#290000", "#23002B", "#040037", "#003931" ],
    bgckey: 0,
    playMode: 0
}, module.exports = {
    BarrageInfoPartice: function(o) {
        this.type = t.BarrageType.PARTICLE, this.data = o, this.id = "", this.getText = function() {
            return e.isEmpty(this.data) ? "" : this.data.txt;
        }, this.setText = function(t) {
            e.isEmpty(this.data) || (this.data.txt = t);
        }, this.setData = function(t) {
            this.data = t;
        }, this.getData = function() {
            return this.data;
        }, this.setId = function(t) {
            this.id = t;
        }, this.getId = function() {
            return this.id;
        }, this.getType = function() {
            return this.type;
        }, this.getFontColor1 = function() {
            return e.isEmpty(this.data) ? "#ffffff" : this.data.pcArray1[this.getFontColorKey()];
        }, this.getFontColor2 = function() {
            return e.isEmpty(this.data) ? "#ffffff" : this.data.pcArray2[this.getFontColorKey()];
        }, this.getFontColorKey = function() {
            return e.isEmpty(this.data) ? 0 : this.data.pckey;
        }, this.setFontColorKey = function(t) {
            e.isNull(this.data) || (this.data.pckey = t);
        }, this.getBgColor = function() {
            return e.isEmpty(this.data) ? "#000000" : this.data.bgcArray[this.data.bgckey];
        }, this.getBgColorKey = function() {
            return e.isEmpty(this.data) ? 0 : this.data.bgckey;
        }, this.setBgColorKey = function(t) {
            e.isNull(this.data) || (this.data.bgckey = t);
        }, this.getPlayMode = function() {
            return e.isEmpty(this.data) ? 0 : this.data.playMode;
        }, this.setPlayMode = function(t) {
            e.isNull(this.data) || (this.data.playMode = t);
        }, this.getStyleJson = function() {
            var t = null;
            t = {
                font_color_key: this.getFontColorKey(),
                bg_color_key: this.getBgColorKey(),
                play_mode: this.getPlayMode()
            };
            var e = i.jsonToString(t);
            return console.log(e), e;
        }, this.updateByJsonData = function(t) {
            this.setId(t.id);
            var o = i.stringToJson(s.decode(t.style_json));
            this.setText(s.decode(t.text)), e.isNull(o) || (this.setFontColorKey(o.font_color_key), 
            this.setBgColorKey(o.bg_color_key), this.setPlayMode(o.play_mode));
        };
    },
    getConfigInfo: function(t) {
        return o[t];
    }
};