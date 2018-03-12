const SpotifyWebApi = require('spotify-web-api-node')

const _credentials = {
    clientId: process.env.SPCLIID,
    clientSecret: process.env.SPCLISEC,
    redirectUri: process.env.SPREDIRECT
}

const SpotifyController = {
    _scopes: ['user-read-private', 'user-read-email'],
    _state: null,
    api: new SpotifyWebApi(_credentials),

    getAuthURL: function getAuthURL() {
        return this.api.createAuthorizeURL(this._scopes, this._state)
    },

    authCodeGrant: function authCodeGrant(code) {
        this.api.authorizationCodeGrant(code)
            .then((data) => {
                    this.api.setAccessToken(data.body.access_token)
                    // this.api.setRefreshToken(data.body.refreshToken)
                }, 
                (err) => {
                    console.log('error while setting access token', err)
                }
            )
    }


}

module.exports = SpotifyController