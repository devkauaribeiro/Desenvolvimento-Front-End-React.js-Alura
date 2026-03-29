// 1. Lista de nomes
const nomes = ['Lucas', 'Felipe', 'Kauã', 'Ronaldo', 'Rodrigo']
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i])
}

// 2. Adicionar e remover itens
const frutas = ['Maçã', 'Banana', 'Melancia', 'Morango']

console.log('Antes de adicionar:', frutas)

frutas.push('Pera')
console.log(frutas)

frutas.shift()
console.log(frutas)

// 3. Contar itens do array
const cidades = ['São Bernardo de Campo', 'Diadema', 'São Caetano do Sul']
console.log('Total de cidades:',cidades.length)

// 4. Somar todos os números
let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]; 

let soma = 0; 

for (let i = 0; i < numeros.length; i++) { 
    soma += numeros[i];
} 

console.log("Soma total: " + soma);

// 5. Média de notas
const notas = [5, 6, 3, 8]
let somaNotas = 0

for (let nota of notas) {
    somaNotas += nota
}

let media = somaNotas / notas.length

if (media >= 7) {
    console.log('Aprovado com média:', media)
} else {
    console.log('Reprovado com média:', media)
}

// 6. Mensagens personalizadas com forEach
const nomeUsuario = ['Kauã', 'Felipe', 'Lucas']

nomeUsuario.forEach(nome => {
    console.log('Olá,', nome,'!')
});

// 7. Descontos com map
const precos = [10.10, 20.39, 3.21]

const desconto = precos.map((numero) => {
    return numero * 0.90
})

console.log('Desconto de 10% nos produtos:', desconto)

// 8. Filtrar valores altos
const idades = [22, 10, 34, 12, 45]

const maiorIdade = idades.filter((idade) => {
    return idade > 18
})

console.log('Maiores de idade:', maiorIdade)

// 9. Simulando carrinho de compras
let carrinho = [50, 30, 20];
let total = 0;

for (let preco of carrinho) {
  total += preco;
}

let totalComDesconto = total * 0.8;

console.log("Total com desconto de 20%: R$ " + totalComDesconto);

// 10. Lista de tarefas
let tarefas = ["Estudar", "Lavar a louça", "Ir ao mercado", "Caminhar", "Dormir"];
let concluida = [false, true, false, true, false];

let tarefasPendentes = tarefas.filter(function(tarefa, index) {
  return concluida[index] === false;
});

console.log("Tarefas pendentes:", tarefasPendentes);