var http = require('http');
var fs = require('fs');
var url = require('url');

// Criando um server
http.createServer( function (request, response) {  
   // parseia o request para buscar o file
   var pathname = url.parse(request.url).pathname;
   
   console.log("Request for " + pathname + " received.");
   
   // lê nome d arquivo recebido no request e procura na raiz do projeto
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         // HTTP Status: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/html'});
      }else{	
         //Page found	  
         // HTTP Status: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': 'text/html'});	
         
         // escreve o conteudo do arquivo no response body
         response.write(data.toString());		
      }
      // envia response body 
      response.end();
   });   
}).listen(3000);
console.log('Server running at http://127.0.0.1:3000/');