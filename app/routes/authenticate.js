"use strict";
require('rootpath')();
var express = require('express');
var router = express.Router();
var app = express();
var config = require('config');
var ldap = require('ldapjs');

module.exports = router;


router.post('/', function (req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  var client = ldap.createClient({ url: config.ldapUrl });
  var dn = config.ldapSearchFilter + '=' + username + ',' + config.ldapBaseDn;
  client.bind(dn, password, function(err) {
    if (err) {
      console.log(err);
      res.json({ success: false, message: 'Username or password is incorrect', user: username });
    } else {
      client.unbind(function(err) {
        if (err) {
          console.log(err);
          res.json({ success: false, message: 'An error occurred. Login failed', user: username });
        }
        else {
          req.session.user = username;
          res.json({ success: true, message: 'Authentication successful', user: username });
        }
      });
    }
  });
});
