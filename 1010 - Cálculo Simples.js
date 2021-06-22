var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var pecaUm = lines[0].split(' ');
var pecaDois = lines[1].split(' ');

var quantidadeDePecasUm = parseInt(pecaUm[1]);
var valorUnitarioPecaUm = parseFloat(pecaUm[2]); 

var quantidadeDePecasDois = parseInt(pecaDois[1]);
var valorUnitarioPecaDois = parseFloat(pecaDois[2]); 

var total = (quantidadeDePecasUm * valorUnitarioPecaUm) + (quantidadeDePecasDois * valorUnitarioPecaDois);
console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)


