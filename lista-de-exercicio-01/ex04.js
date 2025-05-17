// menu interativo no console que oferece ao usuário a escolha de três opções.
// utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')();

let opções = prompt("escolha uma das opções do menu: 1-(pizzas), 2-(sobremesas) ou 3-(bebidas): ");

switch (opções) {

    case "1":
        console.log("você escolheu: pizzas");
    break;

    case "2":
        console.log("você escolheu: sobremesas");
    break;

    case "3":
        console.log("você escolheu: bebidas");
    break;

    default:
    console.log("opção inválida. por favor, digite: 1, 2 ou 3.");
    break;

}
