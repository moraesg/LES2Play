var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.send('index page - load a bunch of games');
});

router.get('/games/', function(req, res, next){
    res.send('games page - load all games.');
});

router.get('/games/:id', function(req, res, next){
    res.send('games page - load a single page.');
});

module.exports = router;