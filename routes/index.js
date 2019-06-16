var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ViRAj' });
});

router.get('/Home', function(req, res, next) {
  res.render('Home');
});

router.get('/View', function(req, res, next) {
  res.render('View');
});
module.exports = router;
