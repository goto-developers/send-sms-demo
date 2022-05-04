require("dotenv").config();
var { AuthorizationCode } = require("simple-oauth2");

var oauthConfig = {
    client: {
        id: process.env.OAUTH_CLIENT_ID,
        secret: process.env.OAUTH_CLIENT_SECRET
    },
    auth: {
        tokenHost: process.env.OAUTH_SERVICE_URL
    }
};
var oauthClient = new AuthorizationCode(oauthConfig);
