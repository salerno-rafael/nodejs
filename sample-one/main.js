var http = require("http");  
// 'required' importa o modulo do node para http

http.createServer(function (request, response) {   
// cria um servidor http, onde espera como parametro um request e um response

   response.writeHead(200, {'Content-Type': 'text/plain'}); 
   //quando for feita uma chamada é adicionado ao header um status 200 :OK
  
   response.end('Hello World\n');   
   // response da chamada na porta 3000

}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');