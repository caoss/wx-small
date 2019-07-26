var t = {
    listeners: {},
    subscribe: function(t, s) {
        this.listeners[t] = this.listeners[t] || [], this.listeners[t].push(s);
    },
    dispatch: function() {
        var t = this, s = [].concat(Array.prototype.slice.call(arguments))[0], e = [].concat(Array.prototype.slice.call(arguments)).slice(1), i = this.listeners[s];
        i && i.forEach(function(s) {
            s.hasOwnProperty("apply") && (s.apply = Function.prototype.apply), s.apply(t, e);
        });
    },
    remove: function(t) {
        this.listeners[t] = [];
    }
};

module.exports = t;