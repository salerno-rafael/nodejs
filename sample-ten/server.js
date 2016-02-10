var express = require('express');
var app = express();
var fs = require("fs");

app.use(express.static('public'));

app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/list_products', function (req, res) {
   fs.readFile( __dirname + "/" + "produtos.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.get('/process_get', function (req, res) {

   // builda o output em formato JSON 
   response = {
       first_name:req.query.first_name,
       last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("listening in http://%s:%s", host, port)

})