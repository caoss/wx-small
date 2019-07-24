var t = getApp();

Component({
    data: {
        statusBarHeight: 0,
        navgationHeight: 0
    },
    attached: function() {
        var a = t.globalData, i = a.statusBarHeight, e = void 0 === i ? 0 : i, g = a.navgationHeight, s = void 0 === g ? 0 : g;
        this.setData({
            statusBarHeight: e,
            navgationHeight: s
        });
    },
    methods: {}
});