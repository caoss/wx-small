var t = getApp();

Page({
    data: {
        groupId: "",
        page: 1,
        hasMore: !0,
        list: []
    },
    onLoad: function(t) {
        this.setData({
            groupId: t.group_id
        }), this.getMemberList(t.group_id);
    },
    onReachBottom: function() {
        this.data.hasMore && this.getMemberList(this.data.page);
    },
    getMemberList: function(e) {
        var a = this;
        t.request({
            url: "tourGroup/user/groupMemberList",
            data: {
                page: this.data.page,
                group_id: e
            },
            success: function(t) {
                if (0 == t.err) {
                    var e = t.res;
                    a.setData({
                        list: a.data.list.concat(e.list),
                        page: e.nextPage,
                        hasMore: e.hasMore
                    });
                }
            }
        });
    }
});