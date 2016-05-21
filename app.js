var express = require('express');

app = express();

app.get('/home', function(req, resp){
resp.send("Hello Suresh.");

});

app.listen(3000, function(){

	console.log("listening....on port 3000");
});