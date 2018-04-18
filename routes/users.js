var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.send('load all users.');
});

router.get('/:id', function(req, res, next){
    res.send('load a single user page.');
});

module.exports = router;