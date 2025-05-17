// escreva um programa que solicita ao usuário 5 números 
// e calcula a soma total utilizando um loop for;

const prompt = require('prompt-sync')();  

let soma = 0; 

for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt("digite o " + (i + 1) + "º número: ")); 
    soma += numero;  
}

console.log("a soma total é: " + soma);  
