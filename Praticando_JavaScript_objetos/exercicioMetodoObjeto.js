const maquina = {
    nome: 'Esteira Transportadora',
    funcionando: false,
    exibirStatus: function () {
        if (this.funcionando) {
            return console.log(`A máquina ${this.nome} está em funcionamento.`)
        } else {
            return console.log(`A máquina ${this.nome} está parada`)
        }
    }
};


maquina.exibirStatus();