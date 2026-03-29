// HOF -> Higher-Order Funcition === função que recebe outra função como parametro

function calcular(numero1, numero2, operacao) {

    return operacao(numero1, numero2)
}

function soma(num1, num2) {
    return num1 + num2
}

function divisao(num1, num2) {
    return num1 / num2
}

function multiplicacao(num1, num2) {
    return num1 * num2
}

const resultaSoma = calcular(3, 7, soma) // soma é um callback
console.log('Resultado da soma:', resultaSoma)

const resultaDivisao = calcular(32, 8, divisao) // divisão é um callback
console.log('Resultado da divisão:', resultaDivisao)

const resultadoMultiplicacao = calcular(2, 2, multiplicacao) // multiplicação é um callback
console.log('Resultado da multiplicação:', resultadoMultiplicacao)