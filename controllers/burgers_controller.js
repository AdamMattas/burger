/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// redirects user to /burgers
router.get('/', function (req, res) {
  res.redirect('/burgers');
});

// accesses the all function in burger.js
// tells the index.handlebars to render and sends select all response as an object
router.get('/burgers', function (req, res) {
  burger.all(function (data) {
    var hbsObject = { burgers: data };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

// accesses the create function in burger.js
// passes the burger name from the index.handlebars form and passes the db column name
// redirects to .get /burgers and reloads page
router.post('/burgers/create', function (req, res) {
  if(!req.body.burger_name === '') {
    burger.create(['burger_name'], [req.body.burger_name], function () {
      res.redirect('/burgers');
    });
  } else {
    res.redirect('/burgers');  
  }
});

// accesses the update function in burger.js
// passes burger id and hidden input value from form in index.handlebars
// redirects to .get /burgers and reloads page
router.put('/burgers/update/:id', function (req, res) {
  var condition = 'id = ' + req.params.id;
  console.log('condition', condition);
  burger.update({ devoured: req.body.devoured }, condition, function () {
    res.redirect('/burgers');
  });
});

module.exports = router;