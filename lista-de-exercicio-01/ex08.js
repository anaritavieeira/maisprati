// escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente;

const prompt = require('prompt-sync')();

let valor1 = parseFloat(prompt("digite o primeiro valor: "));
let valor2 = parseFloat(prompt("digite o segundo valor: "));

if (valor1 === valor2) {
    console.log("os valores não podem ser iguais, tente novamente.");
} else if (valor1 > valor2) {
    console.log("ordem crescente: " + valor2 + ", " + valor1);
} else {
    console.log("ordem crescente: " + valor1 + ", " + valor2);
}
