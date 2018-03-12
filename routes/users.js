var express = require('express');
var router = express.Router();

const spotifyController = require('../controllers/spotify');

/* GET users listing. */
router.get('/me', function(req, res, next) {
  res.send('respond with a resource');
  spotifyController.getElvis();
});

router.get('/:id', function(req, res, next) {
  res.send('nuthing here')
  console.log('looking for id', req.params.id);
});


module.exports = router;
