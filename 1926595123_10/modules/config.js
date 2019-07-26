module.exports = {
    env: "prod",
    store: {
        globalKey: "store",
        tokenKey: "token",
        userKey: "user",
        refererAppKey: "refererApp"
    },
    envConfigs: {
        prod: {
            apiBaseUrl: "https://new-mem-api.srgow.com/api/v1/"
        },
        test: {
            apiBaseUrl: "https://sr.tripurx.com/api/v1/"
        },
        dev: {
            apiBaseUrl: "http://localhost:8000/api/v1/"
        }
    },
    getEnvConfig: function() {
        return this.envConfigs[this.env];
    }
};