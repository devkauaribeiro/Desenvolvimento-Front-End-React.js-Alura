const readline = require('readline')

const qt = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('Bem-vindo(a) ao Quiz de JavaScript!')
console.log('Responda com a letra correta: A, B ou C')

let acertos = 0

qt.question('[1] Qual não é uma linguagem de programação?\nA - HTML\nB - JavaScript\nC - Python\n', (resposta) => {
    if (resposta != 'A') {
        console.log('Errou!')
    } else {
        console.log('Acertou, parabéns!')
        acertos++
    }

    qt.question('[2] Para que serve Javascript:\nA - Programação Front-End\nB - Programação Back-end\nC - Todas as alternativas\n', (resposta) => {
        if (resposta != 'C') {
            console.log('Errou!')
        } else {
            console.log('Acertou, parabéns!')
            acertos++
        }

        qt.question('[3] Oque console.log faz?:\nA - Imprime mensagem\nB - Apaga mensagens\nC - Todas as alternativas\n', (resposta) => {
            if (resposta != 'A') {
                console.log('Errou!')
            } else {
                console.log('Acertou, parabéns!')
                acertos++
            }

            if (acertos == 3) {
                console.log('Acertou tudo, parabéns')
            } else if (acertos == 2) {
                console.log('Acertou somente 2, muito bom! continue assim!')
            } else {
                console.log('Não acertou nenhuma, continue praticando')
            }
            qt.close()
        })
    })
})