var path 		= require('path');

module.exports = function(app){

  app.get('/all', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/front.html'));
	});

};
