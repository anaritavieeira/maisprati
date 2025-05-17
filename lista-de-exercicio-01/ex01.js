// recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if;

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("digite um número: "));

if (numero % 2 === 0) {
    console.log("é um número par");
} else {
    console.log("é um número ímpar");
}
