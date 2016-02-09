var express = require('express');
var app = express();

app.get('/', function (req, res) {
   console.log("Request para GET");
   res.send('Hello GET');
})


app.post('/', function (req, res) {
     console.log("Request para POST");
   res.send('Hello POST');
})

app.delete('/del_user', function (req, res) {
     console.log("Request para DELETE");
   res.send('Hello DELETE');
})

app.get('/lista', function (req, res) {
   console.log("Request GET para outra pagina");
   res.send('Page Listing');
})


var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Exemplo de  app listening http://%s:%s", host, port)

})