var fs = require("fs");

// criando stream de leitura
var readerStream = fs.createReadStream('input.txt');

// criando stream de escrita
var writerStream = fs.createWriteStream('output.txt');

readerStream.pipe(writerStream);

console.log("execuçao finalizada");