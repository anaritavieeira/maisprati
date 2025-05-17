// crie um programa que exibe a tabuada de um número fornecido pelo usuário 
// (de 1 a 10) utilizando um loop for;

const prompt = require('prompt-sync')();  

let numero = parseInt(prompt("digite um número de 1 a 10 para calcular sua tabuada: "));  

if (numero >= 1 && numero <= 10) {
    console.log("tabuada do " + numero + ":");
    
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));  
    }
} else {
    console.log("por favor, digite um número entre 1 e 10.");
}
