var express = require('express'), fs = require('fs');

var app = express.createServer(express.logger());
app.use(express.static(__dirname));

var filename = "./index.html";

var content = fs.readFileSync(filename);

app.get('/', function(request, response) {
  response.send(content.toString());

});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
