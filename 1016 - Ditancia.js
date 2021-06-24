var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var km = lines.shift();

distacia = (60 * km) / 30;

console.log(`${distacia} minutos`)




