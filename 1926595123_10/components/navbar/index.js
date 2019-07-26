var e = getApp();

Component({
    data: {
        navH: "90px",
        showHome: !1,
        showBack: !1
    },
    ready: function() {
        this.setData({
            navH: e.globalData.navBarHeight + "px"
        });
        var a = getCurrentPages(), t = [ "pages/home/index", "pages/category2/index", "pages/shoppingList/home", "pages/user/index" ].indexOf(a[a.length - 1].route) > -1;
        this.setData({
            showBack: a.length > 1,
            showHome: !t
        });
    },
    methods: {
        goBack: function() {
            wx.navigateBack();
        },
        goHome: function() {
            wx.reLaunch({
                url: "/pages/home/index"
            });
        }
    }
});