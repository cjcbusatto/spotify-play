let express = require('express')
let querystring = require('querystring')
let router = express.Router()

let spotifyController = require('../controllers/spotify')

router.get('/', function(req, res) {
  res.redirect(spotifyController.getAuthURL())
})

router.get('/callback', function(req, res) {
  let code = req.query.code || null
  spotifyController.authCodeGrant(code)
  res.redirect('http://localhost:3000/playlists')
});

module.exports = router