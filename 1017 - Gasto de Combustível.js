var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var tempoViagem = parseInt(lines.shift());
var velocidade = parseInt(lines.shift());

var consumoCombustivel = (tempoViagem * velocidade) / 12.0;

console.log(consumoCombustivel.toFixed(3));





