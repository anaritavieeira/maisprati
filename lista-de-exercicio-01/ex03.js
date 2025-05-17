// recebe uma nota de 0 a 10 e classifica como
// (aprovado, em recuperação ou reprovado) utilizando if-else;

const prompt = require('prompt-sync')();

let nota = parseInt(prompt("digite sua nota: "));

if (nota >= 7 && nota <= 10) {
    console.log("você está aprovado");
} else if (nota >= 4 && nota <= 6) {
    console.log("você está em recuperação");
} else if (nota >= 0 && nota < 4) {
    console.log("você está reprovado");
} else {
    console.log("erro: a nota deve ser entre 0 a 10");
}

