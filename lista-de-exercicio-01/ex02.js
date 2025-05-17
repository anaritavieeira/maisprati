// classifica a idade de uma pessoa em categorias: (criança, adolescente, adulto, idoso) 
// com base no valor fornecido, utilizando uma estrutura de controle if-else;

const prompt = require('prompt-sync')();

let idade = parseInt(prompt("digite a sua idade: "));

if (idade <= 12) {
    console.log("categoria: criança");
} else if (idade >= 13 && idade <= 17) {
    console.log("categoria: adolescente");
} else if (idade >= 18 && idade <= 59) {
    console.log("categoria: adulto");
} else {
    console.log("categoria: idoso");
}
