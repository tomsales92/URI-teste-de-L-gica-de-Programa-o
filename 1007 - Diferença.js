var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());
var D = parseFloat(lines.shift());

var diferenca = ((A * B) - (C * D))
console.log("DIFERENCA = " + diferenca);

