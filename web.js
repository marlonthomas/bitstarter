var express = require('express'), fs = require("fs");

var app = express.createServer(express.logger());

var filename = "./index.html";

var content = fs.readFileSync(filename);

app.get('/', function(request, response) {
  response.send(content.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
