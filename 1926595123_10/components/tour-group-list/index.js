var e = getApp(), r = e.getUser();

Component({
    properties: {
        list: {
            type: Array,
            value: []
        }
    },
    data: {
        user: r
    },
    ready: function() {
        r = e.getUser();
    },
    methods: {
        clickHandler: function(e) {
            var i = e && e.currentTarget.dataset.group;
            if (r.id == i.user.id) {
                if (1 === i.is_verified) return void wx.navigateTo({
                    url: "/pages/group/details/index?group_id=" + i.id
                });
                wx.navigateTo({
                    url: "/pages/group/apply/index?group_id=" + i.id
                });
            } else wx.navigateTo({
                url: "/pages/user/group/index?group_id=" + i.id
            });
        }
    }
});