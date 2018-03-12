const express = require('express')
const router = express.Router()

const spotifyController = require('../controllers/spotify')

/* GET playlists listing. */
router.get('/', function(req, res, next) {
  spotifyController.api.getMe()
    .then( function(data) {
      console.log(data.body)
    }, function(err) {
      console.log('some error', err)
      console.log('playlistsac', spotifyController.api.getAccessToken())
    }
  )
  res.send('respond with a resource')
})

module.exports = router
