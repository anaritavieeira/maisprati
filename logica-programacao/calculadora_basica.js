//estudo de estruturas condicionais (if e else, switch case)


//IF E ELSE

//(usados para testar condições simples e executar ações baseadas em verdadeiro ou falso)

const prompt = require('prompt-sync')();

let valor1 = Number(prompt("insira o primeiro valor: "))
let valor2 = Number(prompt("insira o segundo valor: "))
let operacao = prompt("informe a operação desejada: (+, -, /, *): ")
let resultado = 0

if (operacao === '+') { 
    resultado = valor1 + valor2
} else if (operacao === '-') {
    resultado = valor1 - valor2
} else if (operacao === '*') {
    resultado = valor1 * valor2
} else if (operacao === '/') {    
    if (valor2 !== 0) {
        resultado = valor1 / valor2
    } else {
        console.error("erro: divisão por zero")
        resultado = undefined
    }
} else {                           
    console.log("operação inválida")
    resultado = undefined
}

if (resultado !== undefined) {
    console.log("resultado: ", resultado)
}




//SWITCH CASE

//(ideal para quando as opções possíveis de uma variável já são conhecidas,
//  permitindo decisões baseadas nesses valores específicos)

let primeirovalor = Number(prompt("digite o primeiro número: "));
let segundovalor = Number(prompt("digite o segundo número: "));
let operação = prompt("escolha a operação a ser realizada: (+, -, *, /) ");

switch (true) {
    case (operação === "+"):
        console.log(primeirovalor + segundovalor);
        break;

    case (operação === "-"):
        console.log(primeirovalor - segundovalor);
        break;

    case (operação === "*"):
        console.log(primeirovalor * segundovalor);
        break;

    case (operação === "/"):
        if (segundovalor === 0) {
            console.log("erro: não é possível dividir por zero");
        } else {
            console.log(primeirovalor / segundovalor);
        }
        break;

    default:
        console.log("operação inválida! por favor, escolha uma operação válida: (+, -, *, /)");
}


