// crie um objeto 'pessoa' como jogadora de uma plataforma de games e adicione algumas caracteristicas

const pessoa = {
    nome: 'Roberta R',
    nascimento: '2020-01-01',
    cpf: '23445667889',
    pontuacao: 4576,
    trofeus: ['speedrunner', 'indie']
};

// imprima no terminal o nome da pessoa e um dos troféus
console.log(pessoa.nome)
console.log(pessoa.trofeus[0])

// exclua uma propriedade do objeto
delete pessoa.cpf
console.log(pessoa)

// criar uma função para iterar os troféus
function exibeTrofeus(listaTrofeus) {
    for (const trofeu of listaTrofeus) {
        console.log(`tem o troféu ${trofeu}`)
    }
}

exibeTrofeus(pessoa.trofeus);