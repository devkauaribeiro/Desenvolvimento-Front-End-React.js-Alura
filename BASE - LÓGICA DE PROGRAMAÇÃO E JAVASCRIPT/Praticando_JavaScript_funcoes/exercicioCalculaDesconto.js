function calcularDesconto(valorOriginal, desconto = 10) {
    const valorFinal = valorOriginal - (valorOriginal * desconto / 100)
    return valorFinal
}

console.log(calcularDesconto(100, 20))