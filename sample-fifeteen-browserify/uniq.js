var unique = require('uniq');

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(unique(data));

window.onload = function() {
	document.getElementById("p1").innerHTML  = unique(data);
};