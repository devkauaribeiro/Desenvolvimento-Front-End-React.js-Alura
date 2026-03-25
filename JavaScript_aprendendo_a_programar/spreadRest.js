let camila1 = {
    nome: 'Camila',
    idade: 29,
}

const camila2 = { ...camila1 }

camila2.idade = 30

console.log(camila1)
console.log(camila2)

camila1 = {
    ...camila2,
    profissao: 'Desenvolvedora Sênior',
    possuiCNH: true
}

console.log(camila1)

const { nome, ...restante } = camila1

console.log(nome)
console.log(restante)