// OP CONDICIONAL E SWITCH

// Verificar se estudante receberá bônus na nota.
// Estudantes recebem bônus se nota for 8 ou acima e se tiverem no máximo 2 faltas. 

const nome = 'Roberta'
const nota = 8
const faltas = 2

const recebeBonus = (nota >= 8) && (faltas <= 2)
    ? `${nome} recebe bônus` 
    : `${nome} não recebe bônus`

console.log(recebeBonus)

// criar um fluxo que identifica o tipo de pessoa usuária e comunica de acordo.
// ex: pessoa usuária free tem acesso limitado ao app
//     pessoa usuária premium tem acesso a todas as funções
//     pessoa usuária super premium tem acesso total e bônus especiais

const user = 'super premium'

switch (user) {
    case 'free':
        console.log('Acesso limitado')
        break
    case 'premium':
        console.log('Acesso total ao app');
        break
    case 'super premium':
        console.log('Acesso total ao app e bônus');
        break;
    default:
        console.log('Tipos de user desconhecido');
        break
}