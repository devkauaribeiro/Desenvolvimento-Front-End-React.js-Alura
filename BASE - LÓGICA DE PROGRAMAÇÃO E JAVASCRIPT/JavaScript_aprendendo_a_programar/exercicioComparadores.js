// 1. Verificação de maioridade
let idade = 18
const maiorIdade = idade >= 18
console.log('É maior de idade?', maiorIdade)

// 2. Situação do aluno
let primeiraNota = 7
let segundaNota = 5
let media = (primeiraNota + segundaNota) / 2

console.log(media => 7)

// 3. Simulação de troco
let valorCompra = 35.90
let valorPago = 50
const troco = valorPago - valorCompra

console.log('Seu troco é:', troco)

// 4. Validação de senha
const senha = 'abc123'
const confirmaSenha = 'abc123'
const comparacao = senha === confirmaSenha
console.log('As senhas são iguais?', comparacao)

// 5. Controle de faltas
let totalAulas = 30
let faltas = 2
let limiteFaltas = totalAulas * 0.25;
console.log(faltas > limiteFaltas);

// 6. Verificação de login
let temLogin = true
let temSenha = false

console.log(temLogin && temSenha)

// 7. Valor negado
let disponivel = true
console.log("Disponibilidade invertida: " + !disponivel)

// 8. Condições compostas
let numero1 = 10
let numero2 = 10

console.log(numero1 % 2 === 0 && numero2 % 2 === 0 && numero1 === numero2)


// 9. Calculadora de porcentagem
let numero = 120
let porcetagem = numero * 0.15

console.log('15% de 120 é igual a', porcetagem)

// 10. Ordem de operações
let expressao = 2 + 3 * 5
console.log('Resultado da expressão 2 + 3 * 5:',expressao,'Multiplicação feita primeiro devido as regras matemáticas')