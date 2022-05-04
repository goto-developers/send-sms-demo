require("dotenv").config();
var { AuthorizationCode } = require("simple-oauth2");
var crypto = require("crypto");

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

var expectedStateForAuthorizationCode = crypto.randomBytes(15).toString('hex');
var authorizationUrl = oauthClient.authorizeURL({
    redirect_uri: process.env.OAUTH_REDIRECT_URI,
    scope: 'messaging.v1.send',
    state: expectedStateForAuthorizationCode
});
console.log('Open in browser to send a SMS: ', authorizationUrl);
