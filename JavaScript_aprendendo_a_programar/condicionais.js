const idade = 22

// if(idade >= 18) {
//     console.log('É maior de idade')
// } else {
//     console.log('É menor de idade')
// }

idade >= 18 ? console.log('Maior de idade') : console.log('Menor de idade')

// if(idade < 18) {
//     console.log('É menor de idade')
// }

// entre 9 e 10: excelente
// entre 7 e 8: bom
// entre 4 e 6: médio
// entre 0 e 3: ruim

const notaDoAluno = 3

if (notaDoAluno >= 9) {
    console.log('Nota excelente')
} else if (notaDoAluno >= 7) {
    console.log('Nota boa')
} else if (notaDoAluno >= 4) {
    console.log('Nota mediana')
} else {
    console.log('Nota ruim')
}

notaDoAluno >= 9 ? console.log('excelente') :
    notaDoAluno >= 7 ? console.log('boa') :
        notaDoAluno >= 4 ? console.log('mediana') :
            console.log('Ruim')