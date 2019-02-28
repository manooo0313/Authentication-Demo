var express = require('express');
var router = express.Router();

/* GET secret listing. */
router.get('/', function(req, res, next) {
  res.render('secret');
});

module.exports = router;
