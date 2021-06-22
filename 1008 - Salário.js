var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var number = parseInt(lines.shift());
var horasTrabalhadas = parseInt(lines.shift());
var valorHora = parseFloat(lines.shift());

var salario = valorHora * horasTrabalhadas;
console.log(`NUMBER = ${number}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);


