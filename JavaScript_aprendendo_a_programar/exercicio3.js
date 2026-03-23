// 1. Contador de 1 a 10
// for(let contador = 0; contador <= 10; contador++){
//     console.log('Número:', contador)
// }

// 2. Soma de 1 a 100
// let soma = 0
// for(let contador = 0; contador <= 100; contador++){
//     soma += contador;
// }
// console.log('Soma de 1 a 100:', soma)

// 3. Tabuada personalizada
// let numero = 2
// for(let contador = 0; contador <= 10; contador++) {
//     let multiplicacao = numero * contador
//     console.log(numero,'x',contador,'=', multiplicacao)
// }

//4. Contagem regressiva
// let contagem = 10

// while (contagem >= 0) {
//     console.log("Contagem regressiva:", contagem)
//     contagem--
// }

// 5. Receber números até digitar 0
// let numeroDigitado;
// let quantidade = 0;
// let repeticoes = 0;

// do {
//   // simulação manual de entrada
//   if (repeticoes === 0) {
//     numeroDigitado = 5;
//   } else if (repeticoes === 1) {
//     numeroDigitado = 10;
//   } else {
//     numeroDigitado = 0;
//   }

//   if (numeroDigitado !== 0) {
//     quantidade++;
//   }

//   repeticoes++;
// } while (numeroDigitado !== 0);

// console.log("Total de números digitados: " + quantidade);

// 6. Jogo do número secreto
// let numeroSecreto = 7;

// for (let tentativa = 1; tentativa <= 3; tentativa++) {
//   let numeroTentado;

//   if (tentativa === 1) {
//     numeroTentado = 3;
//   } else if (tentativa === 2) {
//     numeroTentado = 5;
//   } else {
//     numeroTentado = 7;
//   }

//   if (numeroTentado === numeroSecreto) {
//     console.log("Acertou!");
//   } else {
//     console.log("Tente novamente");
//   }
// }

//7. Idade ao longo dos anos
// let anoNascimento = 2003
// let anoAtual = 2026

// for(let ano = anoNascimento; ano <= anoAtual; ano++) {
//     console.log("Em " + ano + " você tinha " + (ano - anoNascimento) + " anos.")
// }

// 8. Listando números pares
// let numerosPares = 0
// let numerosimpares = 0

// for (let contador = 1; contador <= 50; contador++) {
//     if (contador % 2 === 0) {
//         console.log(contador)
//     }
// }

// 9. Contar múltiplos de 3 entre 1 e 100 

let multiplosDe3 = 0; 

for (let i = 1; i <= 100; i++) { 

if (i % 3 === 0) { 

multiplosDe3++; 

} 

} 

console.log("Números entre 1 e 100 divisíveis por 3: " + multiplosDe3); 

 

// 10. Menu com repetição 

let opcao;
let passo = 0;

do {
  // simulação da escolha do usuário
  if (passo === 0) {
    opcao = 1;
  } else if (passo === 1) {
    opcao = 2;
  } else {
    opcao = 3;
  }

  if (opcao === 1) {
    console.log("Ver saldo");
  } else if (opcao === 2) {
    console.log("Fazer depósito");
  } else if (opcao === 3) {
    console.log("Sair");
  }

  passo++;
} while (opcao !== 3);