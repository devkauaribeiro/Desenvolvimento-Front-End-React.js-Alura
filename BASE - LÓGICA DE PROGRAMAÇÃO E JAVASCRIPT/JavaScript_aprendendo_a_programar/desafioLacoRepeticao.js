// contar quantos números pares e quantos numeros impares nós temos entre 0 e 100

let totalNumerosPares = 0
let totalNumerosImpares = 0

for (let numero = 0; numero <= 100; numero++) {
    if (numero % 2 == 0) {
        totalNumerosPares += 1
    } else {
        totalNumerosImpares += 1
    }
}

console.log('Total de números pares:', totalNumerosPares)
console.log('Total de números impares', totalNumerosImpares)