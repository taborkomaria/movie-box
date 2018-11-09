var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.redirect('/films');
});

router.get('/films', function(req, res, next) {
  res.render('films', { title: "Film's catalog"});
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/film', function(req, res, next) {
  res.render('film', { title: 'Film page' });
});

router.get('/profile', function(req, res, next) {
  res.render('profile', { title: 'Profile' });
});

router.post('/films', function(req, res, next) {
  res.redirect('/films');
});


module.exports = router;
