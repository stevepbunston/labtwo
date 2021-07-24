var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('doug', { title: 'Doug',
  parText: 'He thinks i fix computers but im sure hes proud too' });
});

module.exports = router;