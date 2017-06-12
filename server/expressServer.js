var express = require('express');
var app = express();

app.use(express.static('../build'))

app.get('/',function(req,res){
	res.send("Hello world!");
	console.log("/ is open");
})

var server = app.listen(3002,function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("Example app listening at http://%s:%s",host,port);
	console.log(server.address());
})