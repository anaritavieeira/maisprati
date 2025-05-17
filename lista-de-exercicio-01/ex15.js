// escreva um programa que gera e imprime os primeiros 10 números da sequência 
// de fibonacci utilizando um loop for;

const prompt = require('prompt-sync')();

let a = 0;
let b = 1;

console.log("10 primeiros números da sequência de fibonacci:");
console.log(a);
console.log(b);

for (let i = 2; i < 10; i++) {
    let proximo = a + b;
    console.log(proximo);
    a = b;
    b = proximo;
}
