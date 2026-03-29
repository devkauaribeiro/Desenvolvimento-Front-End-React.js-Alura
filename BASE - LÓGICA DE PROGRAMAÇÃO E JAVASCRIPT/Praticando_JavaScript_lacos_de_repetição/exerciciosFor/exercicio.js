// FOR

// Gerar números aleatórios de 1 a 50 e interromper o laço caso o numero gerado seja 15
// Interromper depois de 30 tentativas e contar a quantidade de tentativas.


for (let contador = 1; contador <= 30; contador++) {
    const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1)
    if (numero === 15) {
        console.log(`${numero} em ${contador} tentativas`)
        break
    }
}


// Gerar números aleatórios de 1 a 50 
// Criar um contador que só é incrementado caso os números NÃO sejam divisíveis por 5
// No final, exiba o valor do cantador

let contador = 0

for (let i = 1; i <= 30; i++) {
    const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1)
    if (numero % 5 === 0) {
        continue
    }
    contador++
}

console.log(contador);