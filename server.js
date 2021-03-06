
var express 	   = require('express');
var bodyParser 	 = require('body-parser');

// Express boilerplate language

var app = express();
var PORT = process.env.PORT || 8005;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Routes

require("./app/routes/html-routes.js")(app);

require("./app/routes/orm-routes.js")(app);

//server
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
});
