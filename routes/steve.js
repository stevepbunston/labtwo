var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('steve', { title: 'Steve',
  parText: 'Trying really hard to finish his diploma at georgian college' });
});

module.exports = router;