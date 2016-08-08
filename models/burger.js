// require (object relational mapping) orm.js file
var orm = require('../config/orm.js');

// object that is accessed from the gets and posts from burgers_controller.js
var burger = {
  // calls SELECT */all function in orm.js passing table name
  all: function (cb) {
    orm.all('burgers', function (res) {
      cb(res);
    });
  },
  // calls INSERT/create function in orm.js
  // passes table name, column name, and value
  // cols and vals are arrays
  create: function (cols, vals, cb) {
    orm.create('burgers', cols, vals, function (res) {
      cb(res);
    });
  },
  // calls UPDATE/update function in orm.js
  // passes table name, column name, value, and id
  // objColVals is object
  update: function (objColVals, condition, cb) {
    orm.update('burgers', objColVals, condition, function (res) {
      cb(res);
    });
  },
};

// makes orm accessible to burgers_controller.js
module.exports = burger;