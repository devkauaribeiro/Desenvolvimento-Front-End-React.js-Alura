// OPERADORES

// verififca se um ano é bissexto.
// um ano é bissexto quando:
// deve ser divisível por 4 mas NÃO divisível por 100
// OU
// deve ser divisível por 100 e por 400

const ano = 2000
// const = 2000
// const = 2022
// const = 1992

if (((ano % 4 === 0) && (ano % 100 !== 0)) || (ano % 400 === 0)) {
    console.log(ano, 'É bissexto')
} else {
    console.log(ano, 'não é bissexto')
}