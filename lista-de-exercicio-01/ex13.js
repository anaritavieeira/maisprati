// faça um algoritmo para receber números decimais até que o usuário digite 0 
// e calcular a média aritmética desses números;

const prompt = require('prompt-sync')();  

let soma = 0;  
let contador = 0; 

while (true) {
    let numeroStr = prompt("digite um número decimal (ou 0 para encerrar a conta): ");
    if (numeroStr === "0") {  
        break;
    }

    numeroStr = numeroStr.replace(',', '.');
    
    let numero = parseFloat(numeroStr);

    if (isNaN(numero)) {  
        console.log("por favor, insira um número válido.");
        continue;
    }

    soma += numero;  
    contador++; 
}

if (contador > 0) {
    let media = soma / contador;  
    console.log("a média aritmética dos números é: " + media);
} else {
    console.log("erro: nenhum número válido foi fornecido");
}
