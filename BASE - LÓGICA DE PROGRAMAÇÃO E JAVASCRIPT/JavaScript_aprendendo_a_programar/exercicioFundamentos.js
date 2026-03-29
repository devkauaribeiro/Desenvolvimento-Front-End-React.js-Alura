// 1. Destructuring em objetos 
const pessoa = {
    nome: 'Lucia',
    idade: 44,
    email: 'email@email.com'
}

const {nome, idade, email} = pessoa
console.log(nome, idade, email)

// 2. Destructuring em arrays
const linguagemProgramacao = ['JavaScript', 'Python', 'C#']
const [ling1, ling2, ling3] = linguagemProgramacao

console.log(ling1, ling2, ling3)

// 3. Rest operator em função
function somarTudo(...numeros) {
  let soma = 0;

  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }
  return soma;
}
console.log(somarTudo(1, 2, 3, 4)); // 10

// 4. Spread operator com arrays
const frutas = ['Maça', 'Banana', 'Goiaba']

const maisFrutas = ['Uva', 'Morango', 'Kiwi']

const todasFrutas = [...frutas, ...maisFrutas]

console.log(todasFrutas); 

// 5. Spread operator com objetos
const nomePessoa = { nome: 'Kaua' }
const idadePessoa = { idade: 22}

const pessoaCompleto = {...nomePessoa, ...idadePessoa}
console.log(pessoaCompleto)

// 6. Função com parâmetro default
function saudacao(nome = 'visitante') {
    console.log('Olá,', nome)
}

saudacao()
saudacao('Kauã')

// 7. Trabalhando com datas
const hoje = new Date()

const dia = hoje.getDate(); 
const mes = hoje.getMonth() + 1; // mês começa em 0 
const ano = hoje.getFullYear(); 
console.log(`Hoje é ${dia}/${mes}/${ano}`); 

// 8. Modularização com export/import
// Arquivo: somar.js 
// module.exports = function somar(a, b) { 
//  return a + b; 
// }

// Arquivo: app.js 
// const somar = require('./somar'); 
// console.log(somar(5, 3)); 
// // Ou usando ES Modules (Node com "type": "module") 
// export function somar(a, b) { 
// return a + b; 
// } 

// import { somar } from './somar.js'; 
// console.log(somar(5, 3));

// 9. Objeto com função construtora
function Livro(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;
}

const livro1 = new Livro("Dom Casmurro", "Machado de Assis");
const livro2 = new Livro("1984", "George Orwell");

console.log(livro1);
console.log(livro2);

// 10. Método no objeto
function Livro(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;
  this.descrever = function () {
    return "O livro " + this.titulo + " foi escrito por " + this.autor + ".";
  };
}

const livro = new Livro("O Hobbit", "J. R. R. Tolkien");
console.log(livro.descrever());