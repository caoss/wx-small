module.exports = function(t) {
    var n = null, u = [], r = function(r) {
        n = n ? t(n, r) : t(), u.forEach(function(t) {
            return t();
        });
    };
    return r(), {
        subscribe: function(t) {
            return u.push(t);
        },
        dispatch: r,
        getState: function() {
            return n;
        }
    };
};