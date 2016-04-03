var express = require('express'),
	app = express();

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

app.listen(4000, function(){
	console.log("Listening on port : 4000 ");
});