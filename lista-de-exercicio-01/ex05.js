// calcula o IMC de uma pessoa e determina a categoria de peso:
// (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else;

const prompt = require('prompt-sync')();

let peso = parseFloat(prompt("digite seu peso: "));
let altura = parseFloat(prompt("digite sua altura: "));

let imc = peso / (altura * altura);  
console.log("seu IMC é: " + imc);

if (imc < 18.5) {
    console.log("categoria: abaixo do peso");
} else if (imc >= 18.5 && imc < 24.9) {
    console.log("categoria: peso normal");
} else if (imc >= 25 && imc < 29.9) {
    console.log("categoria: sobrepeso");
} else {
    console.log("categoria: obesidade");
}
