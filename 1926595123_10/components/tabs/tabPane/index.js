Component({
    relations: {
        "/components/tabs/index": {
            type: "parent",
            linked: function(t) {},
            linkChanged: function(t) {},
            unlinked: function(t) {}
        }
    },
    properties: {
        name: {
            type: String,
            value: ""
        },
        label: {
            type: String,
            value: ""
        }
    },
    data: {
        current: !1
    },
    methods: {
        setActiveContent: function(t) {
            this.setData({
                current: t
            }), this.setScrollTop();
        },
        setScrollTop: function() {
            wx.pageScrollTo({
                scrollTop: 0
            });
        }
    }
});