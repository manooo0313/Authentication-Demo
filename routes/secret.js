var express = require('express');
var router = express.Router();

/* GET secret page. */
router.get('/', isLoggedIn, function(req, res, next) {
  res.render('secret');
});

function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/login');
}

module.exports = router;
