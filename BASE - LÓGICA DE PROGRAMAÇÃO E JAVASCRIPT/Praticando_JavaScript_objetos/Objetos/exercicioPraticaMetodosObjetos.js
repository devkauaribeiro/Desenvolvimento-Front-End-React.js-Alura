// adicione ao obj um método para calcular a idade da pessoa e retornar o valor no terminal como string.

const user = {
    nome: 'Roberta R',
    nascimento: '1996-01-01',
    cpf: '23445667889',
    pontuacao: 4576,
    trofeus: ['speedrunner', 'indie']
};

user.calculaIdade = function calculaIdade() {
    const anoNasc = parseInt(this.nascimento.slice(0, 4));
    const idade = new Date().getFullYear() - anoNasc;
    console.log('a idade é:', idade);
}

user.calculaIdade();