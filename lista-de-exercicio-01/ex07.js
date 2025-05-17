// as maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra;

const prompt = require('prompt-sync')();

let macas = parseInt(prompt("digite o número desejado de maçãs: "));
let preco;

if (macas < 12) {
    preco = 0.30;
    console.log("o preço por maçã é R$ 0,30");
} else {
    preco = 0.25;
    console.log("o preço por maçã é R$ 0,25");
}

let total = macas * preco;

console.log("valor total da compra: R$ " + total.toFixed(2));
