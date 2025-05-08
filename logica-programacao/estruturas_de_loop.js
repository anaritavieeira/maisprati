//estudo de estruturas de repetição (for, while, do while)


//FOR

// for: (inicialização; condição; incremento/decremento) {
    // código a ser executado em cada iteração
  //}

//exemplo:
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
    console.log(i);
    }
    }

// (ideal quando você sabe o número de iterações (neste caso, de 1 a 10)




//WHILE

// while (condição) {
    // código a ser executado enquanto a condição for verdadeira
  //}

  //exemplo:
    let contador = 1;
    while (contador <= 10) {
    if (contador % 2 === 0) {
    console.log(contador);
    }
    contador++; 
}

// (ideal quando você não sabe o número exato de iterações 
// e precisa verificar a condição antes de cada repetição)




//DO WHILE

//do {
    // código a ser executado
  //} while (condição);

  //exemplo:
let numero = 1;
    do {
    if (numero % 2 === 0) {
    console.log(numero);
    }
    numero++;
} while (numero <= 10);

// (garante que o código dentro do "do" seja executado pelo menos uma vez)
