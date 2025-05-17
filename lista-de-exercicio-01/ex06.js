// ler três valores para os lados de um triângulo: A, B e C. 
// verificar se os lados fornecidos formam realmente um triângulo
// caso forme, deve ser indicado o tipo de triângulo:
// isósceles, escaleno ou eqüilátero;

const prompt = require('prompt-sync')();

let A = parseFloat(prompt("digite o comprimento do lado A: "));
let B = parseFloat(prompt("digite o comprimento do lado B: "));
let C = parseFloat(prompt("digite o comprimento do lado C: "));

if (A < B + C && B < A + C && C < A + B) {
    
    if (A === B && B === C) {
        console.log("triângulo equilátero");
    } else if (A === B || A === C || B === C) {
        console.log("triângulo isósceles");
    } else {
        console.log("triângulo escaleno");
    }
} else {
    console.log("os valores fornecidos não formam um triângulo, tente novamente");
}
