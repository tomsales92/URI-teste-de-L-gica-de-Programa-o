var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var distanciaTotalPecorrida = parseInt(lines.shift());
var totalDeCombustivelGasto = parseFloat(lines.shift());

var consumoMedio = distanciaTotalPecorrida / totalDeCombustivelGasto;

console.log(`${consumoMedio.toFixed(3)} km/l`);
