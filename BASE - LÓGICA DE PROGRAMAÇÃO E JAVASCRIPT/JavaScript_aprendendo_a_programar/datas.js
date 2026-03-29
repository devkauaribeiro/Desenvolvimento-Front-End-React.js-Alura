const agora = new Date()

console.log(agora)

console.log('Ano:', agora.getFullYear())
console.log('Mês 0-11:', agora.getMonth())
console.log('Dia do mês:', agora.getDate())
console.log('Hora:', agora.getHours())
console.log('Minutos:', agora.getMinutes())
console.log('Segundos:', agora.getSeconds())

const nascimento = new Date(2003, 10, 26)
const nascimento1 = new Date('2003-11-26T02:00:00.000Z')

console.log(nascimento)
console.log(nascimento1)

console.log('Data formatada (BR):', nascimento.toLocaleDateString('pt-br'))
console.log('Data formatada (US):', nascimento.toLocaleDateString('en-US'))