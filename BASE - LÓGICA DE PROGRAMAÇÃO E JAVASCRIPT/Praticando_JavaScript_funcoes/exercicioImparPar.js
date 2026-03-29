const verificarParidade = (numero) => {
    if (numero % 2 === 0) {
        return 'Par'
    }else {
        return 'ímpar'
    }
}

verificarParidade(8);
verificarParidade(5);