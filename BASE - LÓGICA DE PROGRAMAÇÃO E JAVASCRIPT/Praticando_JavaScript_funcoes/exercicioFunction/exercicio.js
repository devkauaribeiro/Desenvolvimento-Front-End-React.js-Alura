// FUNCTION

// elevar um número x a uma potência y

// Meu código

function calculaPotencia(num, pow) {
  let resultado = 1;
  for (let i = 0; i < pow; i++) {
    resultado = resultado * num;
  }
  return resultado;
};

console.log(calculaPotencia(4, 3));