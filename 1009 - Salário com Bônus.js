var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var nomeVendedor = lines.shift();
var salarioFixo = parseFloat(lines.shift());
var valorVendasEfetuadas = parseFloat(lines.shift());
var taxaDeComissao = 0.15;

var remuneracao = (valorVendasEfetuadas * taxaDeComissao) + salarioFixo;

console.log(`TOTAL = R$ ${remuneracao.toFixed(2)}`)


