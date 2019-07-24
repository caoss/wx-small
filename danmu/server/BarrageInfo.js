var t = require("../utils/CommonHelper.js"), a = require("../utils/JsonHelper.js"), e = require("../utils/base64.modified.js"), i = {
    NORMAL: "0",
    FLUORE: "1",
    PARTICLE: "2"
};

module.exports = {
    BarrageInfo: function(s, o) {
        this.type = s, this.data = o, this.id = "", this.defStyleData, this.getType = function() {
            return this.type;
        }, this.setType = function(t) {
            this.type = t;
        }, this.setData = function(t) {
            this.data = t;
        }, this.setId = function(t) {
            this.id = t;
        }, this.getId = function() {
            return this.id;
        }, this.getText = function() {
            if (!t.isEmpty(this.data)) {
                if (this.type == i.NORMAL) return this.data.txt;
                for (var a = "", e = 0; e < this.data.fluoreData.length; e++) a += this.data.fluoreData[e].txt;
                return a;
            }
            return null;
        }, this.setText = function(a) {
            t.isNull(this.data) || (this.data.txt = a);
        }, this.getBgColor = function() {
            return t.isEmpty(this.data) ? "#000000" : this.data.bgcol;
        }, this.setBgColor = function(a) {
            t.isNull(this.data) || (this.data.bgcol = a, this.data.bgckey = t.indexOf(this.data.bgcArray, this.data.bgcol, this.data.bgckey));
        }, this.getFontSpeed = function() {
            return t.isEmpty(this.data) ? "1" : this.data.skey;
        }, this.setFontSpeed = function(a) {
            t.isNull(this.data) || (this.data.skey = a, this.data.spTxt = this.data.sTxtArray[this.data.skey]);
        }, this.getFontColor = function() {
            return t.isEmpty(this.data) ? "#ffffff" : this.data.col;
        }, this.setFontColor = function(a) {
            t.isNull(this.data) || (this.data.col = a, this.data.ckey = t.indexOf(this.data.cArray, this.data.col, this.data.ckey));
        }, this.getFontSize = function() {
            return t.isEmpty(this.data) ? 170 : this.data.fz;
        }, this.setFontSize = function(a) {
            t.isNull(this.data) || t.isEmpty(a) || (this.data.fz = parseInt(a), this.data.fkey = t.indexOf(this.data.fArray, "" + this.data.fz, this.data.fkey));
        }, this.getStyleJson = function() {
            var t = null;
            if (this.type == i.NORMAL) t = {
                font_size: this.getFontSize(),
                font_color: this.getFontColor(),
                font_speed: "" + this.getFontSpeed(),
                bg_color: this.getBgColor()
            }; else {
                t = {
                    fkey: this.data.fkey,
                    fluoreDatas: []
                };
                for (var e = 0; e < this.data.fluoreData.length; e++) {
                    var s = this.data.fluoreData[e];
                    t.fluoreDatas.push({
                        index: s.index,
                        txt: s.txt,
                        ckey: s.ckey,
                        bShow: s.show,
                        bEdit: s.edit
                    });
                }
            }
            var o = a.jsonToString(t);
            return console.log(o), o;
        }, this.updateByJsonData = function(s) {
            this.setId(s.id);
            var o = a.stringToJson(e.decode(s.style_json));
            if (this.type == i.NORMAL) this.setText(e.decode(s.text)), t.isNull(o) || (this.setFontSize(o.font_size), 
            this.setFontColor(o.font_color), this.setFontSpeed(o.font_speed), this.setBgColor(o.bg_color)); else {
                var n = this.data;
                n.fluoreData = n.fluoreData.map(function(t) {
                    return t.txt = "", t.show = !1, t;
                }), n.fkey = o.fkey, n.fz = n.fArray[n.fkey], o.fluoreDatas.forEach(function(t) {
                    var a = t.index - 1;
                    n.fluoreData[a].ckey = t.ckey, n.fluoreData[a].col = n.cArray[n.fluoreData[a].ckey], 
                    n.fluoreData[a].txt = t.txt, n.fluoreData[a].shtxt = t.txt, n.fluoreData[a].show = t.bShow, 
                    n.fluoreData[a].edit = t.bEdit, n.fluoreData[a].animat = n.aArray[n.fluoreData[a].ckey] + n.fluoreData[a].index;
                }), console.log(n);
            }
            this.defStyleData = this.getStyleJson();
        }, this.isDiffrentWithDef = function(a) {
            return !t.isNull(this.data) && this.type == i.NORMAL && this.data.txt != a.txt;
        }, this.isStyleDataChage = function() {
            return !(!t.isEmpty(this.defStyleData) && this.getStyleJson() === this.defStyleData);
        };
    },
    BarrageType: i
};