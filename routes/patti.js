var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('patti', { title: 'Patti',
  parText: 'Shes gonna be really proud when i finally finish this diploma' });
});

module.exports = router;