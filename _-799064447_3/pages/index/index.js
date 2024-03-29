var t = getApp(),ts= require("./weapp.qrcode.min");

Page({
    data: {
        userInfo: {},
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        guideQrcodeUrl: "",
        count: 180,
        currentCount: 0,
        userID: "",
        userIDGlobal: "",
        getUserInfoButtonStyle: "",
        notCheckUser: !0
    },
    bindViewTap: function() {},
    onLoad: function(e) {
        void 0 != e.userID && "" != e.userID ?
        (this.setData({
            userID: e.userID
        }), wx.setStorageSync("userID", e.userID))
        :
        this.setData({
            userID: wx.getStorageSync("userID")
        }), "" != t.globalData.userID && this.setData({
            userIDGlobal: t.globalData.userID
        }), (wx.getStorageSync("userInfo") || this.data.notCheckUser) && (this.setData({
            getUserInfoButtonStyle: "hasGotUserInfoButton"
        }), this.autoFreshQrcode());


        ts({
            width: 160,
            height: 160,
            canvasId: "myQrcode",
            text: "7045F408423815635176492437,AinRpDa3kBxBnIcGsO8jF7Q5K+tzL2V67FwoEFkWubIMqbI2b88KDSm+JqUE6jv6q2q6PEtnrw5/OwElNRh2"
        })

    },
    ontGottUserInfo: function(t) {
        this.setData({
            userInfo: t.detail.userInfo,
            hasUserInfo: !0
        }), wx.setStorageSync("userInfo", this.data.userInfo), this.autoFreshQrcode(), this.setData({
            getUserInfoButtonStyle: "hasGotUserInfoButton"
        });
    },
    autoFreshQrcode: function() {
        setInterval(this.freshQrcode, 1e3);
    },
    freshQrcode: function() {
        0 == this.data.currentCount ? ("" == this.data.userID ? this.setData({
            guideQrcodeUrl: "http://139.196.93.206:8080/GetCodeController/GetGuideByPixel?pixel=250&" + (Math.random() + Math.random())
        }) : this.setData({
            guideQrcodeUrl: "http://139.196.93.206:8080/GetCodeController/GetGuideByIDAndPixel?userID=" + this.data.userID + "&pixel=250&" + (Math.random() + Math.random())
        }), this.setData({
            currentCount: this.data.count
        })) : this.setData({
            currentCount: this.data.currentCount - 1
        });
    }
});
// http://139.196.93.206:8080/GetCodeController/GetGuideByIDAndPixel?userID=17811919825&pixel=250&0.6933915099569328