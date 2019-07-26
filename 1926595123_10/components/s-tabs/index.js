var e = getApp();

Component({
    relations: {
        "./tab-pane/index": {
            type: "child",
            linked: function(e) {
                this.currentChangeHandler();
            },
            linkChanged: function(e) {
                this.currentChangeHandler();
            },
            unlinked: function(e) {
                this.currentChangeHandler();
            }
        }
    },
    properties: {
        value: {
            type: String,
            value: 0,
            observer: "currentChangeHandler"
        },
        scroll: {
            type: Boolean,
            value: !1
        }
    },
    ready: function() {
        this.setData({
            fixedTop: e.globalData.navBarHeight + "px"
        });
    },
    data: {
        tabs: {},
        activeTab: ""
    },
    methods: {
        getAllChildNodes: function() {
            return this.getRelationNodes("./tab-pane/index");
        },
        changeHandler: function(e) {
            var t = e.currentTarget.dataset.index;
            this.currentChangeHandler(t), this.triggerEvent("change", {
                index: t
            });
        },
        currentChangeHandler: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.properties.value, t = this.getAllChildNodes();
            this.setData({
                activeTab: e,
                tabs: t.map(function(e) {
                    return e.data;
                })
            }), t.length && t.forEach(function(t, n) {
                t.setActiveContent(e == n);
            });
        }
    }
});