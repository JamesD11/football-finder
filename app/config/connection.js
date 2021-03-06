var mysql = require('mysql');

var source= {
  localhost:{
    port: 8889, //MAMP PORT
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'football-finder'
  }
};

var connection = mysql.createConnection(source.localhost);

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
