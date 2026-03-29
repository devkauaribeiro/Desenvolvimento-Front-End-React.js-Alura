// function saudacao(nome) { // nome é um parâmetro da função saudação
//     console.log('Olá,', nome)
// }

// const saudacao = (nome) => {
//      console.log('Olá,', nome)

// }

const saudacao = nome => console.log('Olá', nome)

saudacao('Kauã') // Kauã é o 'argumento'
saudacao('Jessica')
saudacao('Natalia')

// function calcularDobro(numero) {
//     return numero * 2
// }

// const calcularDobro = (numero) => {
//     return numero * 2
// }

const calcularDobro = numero => numero * 2

const numeroDobrado = calcularDobro(4)
console.log(numeroDobrado)