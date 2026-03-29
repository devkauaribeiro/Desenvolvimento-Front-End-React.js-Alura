// Gerar um laço que tente "adivinhar" um dado número de 1 a 50
// e conte a quantidade de tentativas até o resultado

const numeroSecreto = 8;
let numeroAleatorio = 0
let tentativas = 0

while (numeroSecreto !== numeroAleatorio) {
    numeroAleatorio = Math.floor(Math.random() * (50 - 1 + 1) + 1)
    tentativas++
}

console.log(`Adivinhou em ${tentativas} tentativas`)

// Criar um laço que gere um número aleatório de 1 a 50
// executar o laço enquanto não gerar um número par

let numneroRandom = 0

do {
    numneroRandom = Math.floor(Math.random() * (50 - 1 + 1) + 1)
    console.log(numneroRandom)
} while (numneroRandom % 2 !== 0)

console.log(numneroRandom)

// criar um laço que recebe um texto e verifica se é um palíndromo
// imprimir no console o texto, informando se é ou não palíndromo

const texto = 'luz azul'.toLowerCase().split(' ').join('');
// const texto = 'arara';
// const texto = 'luz azul';

let textoInvertido = ''

for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i]
}

const result = texto === textoInvertido
    ? `${texto} é palíndromo`
    : `${texto} não é palíndromo`

console.log(result)