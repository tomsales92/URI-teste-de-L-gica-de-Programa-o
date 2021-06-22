var input = require('fs').readFileSync('stdin', 'utf8');
//a trolagem está na linha de baixo, os dados vão entrar tudo na linha um
var lines = input.split(' ');

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());
var pi = 3.14159;

var triangulo = (A * C) / 2.0;
var circulo = pi * Math.pow(C, 2);
var trapezio = ((A + B) * C) / 2;
var quadrado = B * B;
var retangulo = A * B;

console.log(`TRIANGULO: ${triangulo.toFixed(3)}`)
console.log(`CIRCULO: ${circulo.toFixed(3)}`)
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`)
console.log(`QUADRADO: ${quadrado.toFixed(3)}`)
console.log(`RETANGULO: ${retangulo.toFixed(3)}`)
 
