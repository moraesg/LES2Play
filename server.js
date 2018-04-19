var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var users = require('./routes/users');
var games = require('./routes/games');

var port = 3000;

var app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/users', users);
app.use('/api/', games);
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + " 404 - this page is like my will to live. it can\'t be found."})
});
  
app.listen(port, function(){
    console.log('Server started on port '+port);
});