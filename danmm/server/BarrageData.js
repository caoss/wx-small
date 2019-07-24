var e = {};

e.view = {
    vtxt: "大",
    ftArray: [ "小", "中", "大", "特大", "超大" ],
    flArray: [ "小", "中", "大" ],
    fkey: 2,
    category: 0,
    iscal: 1,
    isFont: !1,
    isfCol: !1,
    isrCol: !1,
    isSpeed: !1,
    isSet: !1,
    rollShow: !0,
    fluoreShow: !1,
    footShow: !0
}, e.roll = {
    defaultTxt: "手持弹幕 可行走的弹幕",
    txt: "手持弹幕 可行走的弹幕",
    temptxt: "",
    st: "",
    focus: !1,
    fz: 170,
    fArray: [ "130", "150", "170", "200", "230" ],
    fkey: 2,
    setfz: !1,
    col: "#ffffff",
    cArray: [ "#ffffff", "#B1B1B1", "#000000", "#FF2F2F", "#FFB130", "#FFF219", "#A3EF00", "#00EC1D", "#27FDA0", "#00AFFF", "#3D35FF", "#8B29FF", "#E400AA", "#FF0083", "#FF9898" ],
    ckey: 0,
    bgcol: "#000000",
    bgcArray: [ "#000000", "#ffffff", "#7F7F7F", "#FC9797", "#EC6363", "#DF83FF", "#C92EFF", "#6D81C5", "#4C73FF", "#2C1178", "#99CF9C", "#81D7C1", "#D2DAAA", "#D2E566", "#FECA31" ],
    bgckey: 0,
    sArray: [ .5, 1, 2 ],
    sTxtArray: [ "慢", "正常", "快" ],
    skey: 1,
    spTxt: "正常",
    move: 0,
    time: 0,
    moveLen: 0,
    moveTime: 0,
    speedbase: .36,
    setmoveTime: 10
}, e.fluore = {
    ckey: 0,
    fkey: 0,
    fz: 110,
    inpkey: 2,
    tLen: 3,
    cArray: [ "#FF1177", "#228DFF", "#B6FF00", "#FF9900", "#BA01FF" ],
    fArray: [ "110", "140", "170" ],
    aArray: [ "red", "blue", "yellow", "greed", "orange" ],
    defaultTxt: "我❤️黄家驹",
    fluoreData: [ {
        index: 1,
        ckey: 0,
        animat: "red1",
        anicol: "#fff",
        col: "#FF1177",
        show: !0,
        edit: !0,
        txt: "我",
        shtxt: "我"
    }, {
        index: 2,
        ckey: 0,
        animat: "red2",
        anicol: "#fff",
        col: "#FF1177",
        show: !0,
        edit: !0,
        txt: "❤️",
        shtxt: "❤️"
    }, {
        index: 3,
        ckey: 0,
        animat: "red3",
        anicol: "#fff",
        col: "#FF1177",
        show: !0,
        edit: !0,
        txt: "黄",
        shtxt: "黄"
    }, {
        index: 4,
        ckey: 0,
        animat: "red2",
        anicol: "#fff",
        col: "#FF1177",
        show: !0,
        edit: !0,
        txt: "家",
        shtxt: "家"
    }, {
        index: 5,
        ckey: 0,
        animat: "red3",
        anicol: "#fff",
        col: "#FF1177",
        show: !0,
        edit: !0,
        txt: "驹",
        shtxt: "驹"
    } ]
}, e.scene = {
    roll: 1002,
    sroll: 1e3,
    fluore: 1003,
    sfluore: 1001
}, e.shCpat = [ "给你霸道的打call，不看就滑走了", "点开有惊喜，手机坏了别怪我哟", "一起来打call", "呀，打开之后黑屏了！", "演唱会专用手持弹幕，拿去不谢", "接车接机专用手持弹幕，拿去不谢", "据说90%的人都不知道微信这个功能，快看看吧" ], 
module.exports = {
    getInfo: function(t) {
        return e[t] || "";
    }
};