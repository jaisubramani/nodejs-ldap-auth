// ========================
// get the packages we need
// ========================
﻿require('rootpath')();
var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var config = require('config');
var morgan = require('morgan');

// =============
// configuration
// =============

// use morgan to log http requests
app.use(morgan('dev'))

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(session({ secret: config.secret, resave: false, saveUninitialized: true }));

// ======
// routes
// ======

// serve angular app files from the '/client' route
app.use('/', express.static('client'));

app.use('/api/authenticate', require('routes/authenticate'));

// make '/client' default route
app.get('/', function (req, res) {
    return res.redirect('/client');
});

// This middleware ends up being a "catch all" error handler
app.use(function (err, req, res, next) {
    if (err.msg)
        res.status(500).send({ success: false, message: err.msg });
    else {
        console.log(err);
        res.status(500).send({ success: false, message: '500 - Internal Server Error' });
    }
});


// ================
// start the server on 8080
// ================
app.listen(8080);
console.log('Server listening at 8080');
