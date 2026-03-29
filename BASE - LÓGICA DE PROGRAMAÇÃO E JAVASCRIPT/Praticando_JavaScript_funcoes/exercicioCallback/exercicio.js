// CALLBACKS

// criar uma função que faça operações: matemáticas entre 2 valores (soma e multiplicação)
// função deve receber por parâmetro: operação desejada, valor1 e valor2

function soma(a, b) { return a + b}
function multiplica(a, b) { return a * b}

function calcula(fnOperacao, valorA, valorB) {
    return fnOperacao(valorA, valorB)
}

console.log(calcula(soma, 5, 2))
console.log(calcula(multiplica, 5, 2))

// criar uma função que emita uma mensagem caso usuário x não esteja interagindo com
// o sistema após quantidade y de tempo

const userId = '4545656'

const avisaUsuario = userId => console.log(`sessão de ${userId} está inativa`)

setTimeout(avisaUsuario, 2000, userId)


// Faz a mesma coisa
setTimeout((userId) => console.log(`sessão de ${userId} está inativa`), 2000, userId)
