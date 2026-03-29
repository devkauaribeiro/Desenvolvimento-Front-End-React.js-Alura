const despesas = [120, 80, 45.5, 200, 60];
let soma = 0

for (let numeros = 0; numeros < despesas.length; numeros++) {
    soma = despesas[numeros] + soma
    // ou total += despesas[i];
}

console.log(`Total de despesas: R$ ${soma}`);
