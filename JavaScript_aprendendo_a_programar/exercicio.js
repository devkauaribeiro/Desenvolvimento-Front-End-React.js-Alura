//1. Boas-vindas personalizadas
let nome = "Kauã Ribeiro"
console.log('Olá,', nome,'! Seja bem-vindo(a) ao curso de Javascript')

//2. Cálculo de idade
let anoAtual = 2026
let anoNascimento = 2003
console.log('Você tem',anoAtual - anoNascimento, 'anos.')

//3. Mensagem de localização
let cidade = 'São Bernardo do Campo'
let estado = 'São Paulo'
let pais = 'Brasil'
console.log('Você está em', cidade, '-', estado,',', pais,'.')

//4. Tipo da variável:
let temCarteira = true
console.log(typeof temCarteira)

//5. Simulação bancária simples:
let saldo = 0
saldo = 200
saldo = 150
console.log('Saldo final: R$:', saldo)

//6. Média de notas:
let matematica = 7
let portugues = 3.5
let ciencias = 5
let media = (matematica + portugues + ciencias) / 3
console.log('Sua média é:', media )

//7. Reajuste de salário:
let salario = 3000
salario = 3000*1.10
console.log('Seu salário com o aumento de 10% fica R$:', salario)

//8. Contador de cliques:
let cliques = 0
cliques++
cliques++
cliques++
console.log('O botão foi cricado '+ cliques + ' vezes.')

//9. Constantes não podem ser alteradas
const PI = 3.14; 
// PI = 3.1415; // ❌ Isso causaria erro pois constantes não podem ser modificadas 
console.log("PI é uma constante e não pode ser alterada: " + PI); 

// 10. Concatenando tipos diferentes 

let mensagem = "O número é "; 
let numero = 42; 
let combinado = mensagem + numero; 
console.log(combinado); // "O número é 42" 
console.log(typeof combinado); // string 