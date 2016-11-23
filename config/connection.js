// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

var mysql = require('mysql');

// we placed the connections in this source object
var source = {
    // localhost
    localhost: {
      port: 3306,
      host: 'sulnwdk5uwjw1r2k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      user: 'nsdvyit65z0j8uef',
      password: 'k120xxbbxjiinqm1',
      database: 'r1cn0t1s01sbjj52'  
    },


    // jawsDB
    jawsDB: {
      port: 3306,
      host: 'sulnwdk5uwjw1r2k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      user: 'nsdvyit65z0j8uef',
      password: 'k120xxbbxjiinqm1',
      database: 'r1cn0t1s01sbjj52' 
    }
}

// we use source.[name of connection] to hook into mysql
 var connection = mysql.createConnection(source.jawsDB || source.localhost);
//var connection = mysql.createConnection(source.localhost);


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;