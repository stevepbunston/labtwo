var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('jimmy', { title: 'Jimmy',
  parText: 'Jimmy isnt very social but does ok for himself.' });
});

module.exports = router;