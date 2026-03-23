// 1. Função de saudação
function saudacao() {
    console.log('Olá seja bem-vindo(a)!')
}

saudacao()

// 2. Função com parâmetros
function apresentarPessoa(nome, idade) {
    console.log('Olá, meu nome é', nome, 'e tenho', idade, 'anos.')
}

apresentarPessoa('Kauã', 22)

// 3. Cálculo de IMC
function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura)
    return imc
}

let resultadoIMC = calcularIMC(67, 1.78)
console.log('Seu IMC é:', resultadoIMC)

// 4. Verificar aprovação
function verificarAprovacao(nota) {
    if (nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

verificarAprovacao(4)

// 5. Número par ou ímpar
function ehPar(numero) {
    return numero % 2 === 0
}

console.log('O número e par?', ehPar(4))

// 6. Função soma
function soma(num1, num2) {
    return num1 + num2
}

console.log('Soma:', soma(2, 2))

// 7. Reutilizando código
function calcularTroco(valorCompra, valorPago) {
    let troco = valorPago - valorCompra
    return troco
}

let resultadoTroco = calcularTroco(35.9, 50)
console.log('Troco: R$', resultadoTroco)

// 8. Arrow function
const somar = (numero1, numero2) => numero1 + numero2
console.log("Soma:", somar(2, 2))

// 9. Callback simples
function executarAcao(acao) { 
acao(); 
} 

executarAcao(function() { 
console.log("Executando ação!"); 
});

// 10. Desafio do quiz
function quiz(pergunta, respostaCorreta) {
    let respostaUsuario = respostaCorreta

    if (respostaUsuario === respostaCorreta) {
        console.log('Resposta correta!')
    } else {
        console.log('Resposta errada!')
    }
}

quiz('Qual é a capital do Brasil?', 'Brasília')