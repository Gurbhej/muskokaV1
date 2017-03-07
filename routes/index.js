var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to muskoka steamship and discoovery' });
});

// staff dash
router.get('/staff-dashboard', function(req, res, next){
  res.render('staff-dashboard', { title:'Staff Dashboard'});
});

// child-login
router.get('/child-login', function(req, res, next){
  res.render('child-login', { title:'Please sign in your child'});
});

// staff camper-reports
router.get('/camper-reports', function(req, res, next){
  res.render('camper-reports', { title:'Camper Reports'});
});

//staff daily camp archieve

router.get('/staff-camp-archive', function(req, res, next){
  res.render('staff-camp-archive', { title:'Daily Camper Archive'});
});

//staff sign in / out reports

router.get('/staff-signinOut-reports', function(req, res, next){
  res.render('staff-signinOut-reports', { title:'Parent Sign In / Out Reports'});
});

// staff payment
router.get('/staff-payment', function(req, res, next){
  res.render('staff-payment', { title:'Payments'});
});

// // staff camper profiles
// router.get('/staff-camper-profiles', function(req, res, next){
//   res.render('staff-camper-profiles', { title:'Camper Profiles'});
// });

///staff-camper-registration
router.get('/staff-camper-registration', function(req, res, next){
  res.render('staff-camper-registration', { title:'Camper Registration'});
});


module.exports = router;
