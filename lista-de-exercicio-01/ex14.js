// crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while;

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("digite um número para calcular o fatorial: "));
let fatorial = 1;

for (let i = 1; i <= numero; i++) {
    fatorial *= i; 
}

console.log(`o valor fatorial de ${numero} é: ${fatorial}`);
