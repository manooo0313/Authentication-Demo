var express = require('express');
var router = express.Router();
var User = require('../models/user');
var passport = require('passport');
var LocalStrategy = require('passport-local');

//GET home page.
router.get('/', function(req, res, next) {
  res.render('index');
});

//Register Routes
//===============

// Render the register form
router.get('/register', function(req, res, next) {
  res.render('register');
});

//Create a new user in db
router.post('/register',function(req, res, next) {
    User.register(new User({username: req.body.username}), req.body.password, function(err, user) {
        if(err){
            console.log(err);
            return res.render('register');
        }
        passport.authenticate('local')(req, res, function(){
            res.redirect('/secret');
        });
    });
});

//Login Routes
//============

//render the login form
router.get('/login', function(req, res){
  res.render('login');
});

// Login logic
//middleware
router.post('/login', passport.authenticate('local', {
  successRedirect: '/secret',
  failureRedirect: '/login'
}), function(req,res){
  console.log(req.user.username);
});

//Logout logic
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


module.exports = router;
