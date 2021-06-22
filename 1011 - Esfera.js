var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var raio = parseFloat(lines.shift());
var pi = 3.14159;
var formula = (4 /3.0) * pi * Math.pow(raio, 3);

console.log(`VOLUME = ${formula.toFixed(3)}`)


