var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var raio = parseFloat(lines.shift());
pi = 3.14159;
area = pi * (raio * raio);

console.log(`A=${area.toFixed(4)}`)