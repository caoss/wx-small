function e(e, n) {
    for (var r = /\$\{(.+?)\}/.exec(e); r; ) void 0 !== n[r[1]] && (e = e.replace(/\$\{(.+?)\}/, n[r[1]]), 
    delete n[r[1]]), r = /\$\{(.+?)\}/.exec(e);
    return {
        url: /^http:\/\//.test(e) ? e : t.domain.debug + e,
        params: n
    };
}

function n(e) {
    return e ? Object.keys(e).sort().map(function(n) {
        var t = e[n];
        return Array.isArray(t) ? t.sort().map(function(e) {
            return encodeURIComponent(n) + "=" + encodeURIComponent(e);
        }).join("&") : encodeURIComponent(n) + "=" + encodeURIComponent(t);
    }).join("&") : "";
}

var t = {
    domain: {
        debug: "",
        release: ""
    }
}, r = {
    Accept: "*/*",
    "Content-Type": "application/json;charset=UTF-8"
};

module.exports = {
    setHeader: function(e) {
        Object.assign(r, e);
    },
    get: function(t) {
        var o = e(t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), a = n(o.params);
        return o.url = o.url + ("" == a ? "" : "?" + a), console.log("发送get请求[%s]", o.url), 
        new Promise(function(e, n) {
            wx.request({
                url: o.url,
                header: r,
                success: function(n) {
                    e(n.data);
                },
                fail: function(e) {
                    n(e);
                }
            });
        });
    },
    post: function(n) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = arguments[2], a = {};
        Object.assign(a, r, o);
        var u = e(n, t);
        return new Promise(function(e, n) {
            wx.request({
                url: u.url,
                method: "POST",
                header: a,
                data: u.params,
                success: function(n) {
                    e(n.data);
                },
                fail: function(e) {
                    n(e);
                }
            });
        });
    },
    uploadFile: function(n) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = arguments[2], a = {};
        Object.assign(a, r, o);
        var u = e(n, t);
        return console.log("发送uploadFile请求[%s]", u.url), new Promise(function(e, n) {
            wx.uploadFile({
                url: u.url,
                filePath: u.params.avterFile,
                header: a,
                name: "avterFile",
                success: function(n) {
                    e(n.data);
                },
                fail: function(e) {
                    n(e);
                }
            });
        });
    }
};