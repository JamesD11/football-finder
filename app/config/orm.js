var connection = require('./connection.js');

var tableName  = 'players';

var orm ={
      allPlayers:function(callback){
            var s= 'SELECT * FROM' + tableName;

            connection.query(s, function(err, result) {

            callback(result);

        });
    }
};

module.exports= orm;
