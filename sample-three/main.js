var events = require('events');

// criando um eventEmitter 
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
   console.log('connection succesful.');
  
   // recebe dados de um even data_received 
   eventEmitter.emit('data_received');
}
// conecta com o emiter
eventEmitter.on('connection', connectHandler);
 
// envia dados para o emiter data_received 
eventEmitter.on('data_received', function(){
   console.log('data received succesfully.');
});

//abre eventp de conexão com emiter
eventEmitter.emit('connection');

console.log("Program Ended.");