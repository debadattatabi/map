var express = require("express"), 
	app = express();

app.use(express.static(__dirname+ '/views'));
app.listen(8080);
console.log("Server running in port 8080");