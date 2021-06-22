var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());

var maiorAB = ((A + B) + Math.abs(A - B)) / 2;
var maiorABComparandoC = ((maiorAB + C) + Math.abs(maiorAB - C)) / 2;

console.log(`${maiorABComparandoC} eh o maior`)
