var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var linhaUm = lines.shift().split(' ');
var linhaDois = lines.shift().split(' ');

var x1 = parseFloat(linhaUm[0]);
var y1 = parseFloat(linhaUm[1]);
var x2 = parseFloat(linhaDois[0]);
var y2 = parseFloat(linhaDois[1]);

var distancia = Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2));

console.log(distancia.toFixed(4));


