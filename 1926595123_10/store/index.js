var n = Object.assign || function(n) {
    for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
    }
    return n;
};

module.exports = {
    points: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            total: "***",
            free: "***",
            free_lock: "***",
            free_to_give: "***",
            limit: "***",
            online: "***",
            online_lock: "***",
            offline: "***",
            offline_lock: "***"
        }, t = arguments[1];
        return n({}, e, t);
    },
    user: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments[1];
        return n({}, e, t);
    },
    notification: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments[1];
        return n({}, e, t);
    }
};