const pessoa = {
    nome: 'Ana',
    idade: 26,
    temCNH: true
}

pessoa.sobrenome = 'Paula'

console.log('Nome:', pessoa.nome)
console.log('sobrenome:', pessoa.sobrenome)

const livro = {
    titulo: 'O Hobbit',
    paginas: 319
}

livro.publicado = true
livro.idiomas = [
    'Ingles', 'Portugues', 'Espanhol'
]

livro.idiomas.push('Mandarim')
livro.idiomas.push('Francês')

console.log('Livro antes:', livro)

delete livro.paginas

console.log('Livro depois:', livro)

console.log('Editora', livro['editora'])

const autor = {
    nome: 'J R R Tolkien',
    nacionalidade: 'Britânico',
    idade: 98,
    livros: [livro]
}

console.log('Autor', autor)

livro.autor = autor

console.log(livro)

livro.autor.nome
livro.autor.nacionalidade