function saudacao(){
    console.log('Bem vindo!')
}

setTimeout(saudacao, 3000) // valoe em milisegundos

let contador = 0

const id = setInterval(() => {
    contador++
    console.log('Tempo decorrido (em segundos):', contador)
    if (contador == 10 ){
        clearInterval(id)
    }
}, 1000)