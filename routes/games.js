var express = require('express');
var router = express.Router();

router.get('/games', function(req, res, next){
    res.send('games api');
});

module.exports = router;