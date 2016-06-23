var orm = require ("../config/orm.js");

module.exports = function(app){

  app.get('/all',function(req,res){

      var data=  orm.allPlayers(function(data){
            res.json(data);
      });

  });
};
