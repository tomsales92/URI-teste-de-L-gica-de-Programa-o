var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valorCedula = parseInt(lines.shift());

var nota100 = parseInt(valorCedula / 100);
var nota50 = parseInt((valorCedula % 100) / 50);
var nota20 = parseInt((valorCedula % 100 % 50) / 20);
var nota10 = parseInt((valorCedula % 100 % 50 % 20) /10);
var nota5 = parseInt((valorCedula % 100 % 50 % 20 % 10) / 5);
var nota2 = parseInt((valorCedula % 100 % 50 % 20 % 10 % 5) /2);
var nota1 = parseInt((valorCedula % 100 % 50 % 20 % 10 % 5 % 2));


console.log(`${valorCedula}`);
console.log(`${nota100} nota(s) de R$ 100,00`);
console.log(`${nota50} nota(s) de R$ 50,00`);
console.log(`${nota20} nota(s) de R$ 20,00`);
console.log(`${nota10} nota(s) de R$ 10,00`);
console.log(`${nota5} nota(s) de R$ 5,00`);
console.log(`${nota2} nota(s) de R$ 2,00`);
console.log(`${nota1} nota(s) de R$ 1,00`);




