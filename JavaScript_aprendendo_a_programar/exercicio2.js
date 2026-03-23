// 1. Verificação de idade para compra de bebida
let idade = 15

if (idade >= 18) {
    console.log('Maior de idade, pode comprar bebida')
} else {
    console.log('Menor de idade, proibido comprar bebidas')
}

// 2. Saudação de acordo com a hora
let horaAtual = 20

if (horaAtual >= 6 && horaAtual <= 12) {
    console.log('Bom dia!')
} else if (horaAtual >= 12 && horaAtual <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}

// 3. Verificação de número positivo ou negativo
let qualquerNumero = -1

if (qualquerNumero > 0 ) {
    console.log('Valor positivo')
} else if (qualquerNumero == 0) {
    console.log('Igual a 0')
} else {
    console.log('Número negativo')
}

// 4. Conversão de nota em conceito
let nota = 1

if (nota >= 9) {
    console.log('A (9-10)')
} else if (nota >= 8) {
    console.log('B (8-9)')
} else if (nota >= 6) {
    console.log('C (6-7.9)')
} else if (nota >= 4) {
    console.log('D (4-5.9)')
} else {
    console.log('E (0-3.9)')
}

// 5. Número par ou ímpar com ternário
const numero = 3
const resultado = numero % 2 == 0 ? "Número par" : "Número impar"
console.log(resultado)

// 6. Menu com switch-case
const opcao = 4

switch (opcao) {
    case 1:
        console.log('1- Cadastrar')
        break;
    case 2:
        console.log('2- Listar')
        break
    case 3:
        console.log('3- Sair')
        break
    default:
        console.log('Valor incorreto')
        break;
}

// 7. Validação de campo obrigatório
const email = ''
if (email === '') {
    console.log('Preencha o campo de e-mail')
} else {
    console.log('e-mail válido')
}

// 8. Validação de senha segura
const senha = 'abc123'
const senhaValida = false

if (senhaValida) {
    console.log('Senha válida')
} else {
    console.log('Senha muito curta')
}

// 9. Compra com saldo
let saldoDisponivel = 200
let valorCompra = 200

if (saldoDisponivel >= valorCompra) {
    console.log('Compra aprovada!')
} else {
    console.log('Saldo insuficiente!')
}

// 10. Validação de formulário completo
let nome = 'Kauã'
let email1 = 'email@email.com'
let idade1 = 22
let formularioValido = false

if (formularioValido) {
    console.log('Formulário enviado com sucesso')
} else {
    console.log('Por favor, preencha todos os campos corretamente')
}