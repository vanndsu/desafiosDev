// Função usando map() para transformar a string em JadenCase
function toJadenCasee(string) {
  // Divide a string em um array de palavras, aplica o map() para capitalizar a primeira letra de cada palavra e junta o resultado em uma nova string
  let newString = string
    .split(" ") // Divide a string em palavras
    .map((newArray) => newArray.charAt(0).toUpperCase() + newArray.slice(1)); // Capitaliza a primeira letra e concatena o restante da palavra

  return newString.join(" "); // Junta as palavras em uma nova string separadas por espaços
}
console.log(toJadenCasee("How can mirrors be real if our eyes aren't real")); // Exemplo de uso da função

// Versão alternativa, que contém um erro no return
function toJadenCase(string) {
  // O split e map são chamados corretamente, mas o return tenta usar string.join(), que é incorreto porque string ainda é uma string, não um array
  string
    .split(" ") // Divide a string em palavras
    .map((newArray) => newArray.charAt(0).toUpperCase() + newArray.slice(1)); // Aplica a capitalização

  return string.join(" "); // Erro: 'string' ainda é uma string, não um array, então join não funciona aqui
}
console.log(toJadenCase("How can mirrors be real if our eyes aren't real")); // Exemplo, não funcionará como esperado

// Versão usando um loop for, funcional, mas mais longa que o map()
function toJadenCase(string) {
  let aux = string.split(" "); // Divide a string em um array de palavras

  // Loop que percorre o array, modificando cada palavra
  for (let i in aux) {
    aux[i] = aux[i].charAt(0).toUpperCase() + aux[i].slice(1); // Capitaliza a primeira letra de cada palavra
  }
  return aux.join(" "); // Junta o array de palavras novamente em uma string
}
console.log(toJadenCase("How can mirrors be real if our eyes aren't real")); // Exemplo de uso da função

// Solução aceita no Codewars, estende a String.prototype para adicionar a função toJadenCase
String.prototype.toJadenCase = function () {
  // Usa split, map, e join para capitalizar a primeira letra de cada palavra
  return this.split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1); // Capitaliza a primeira letra de cada palavra
    })
    .join(" "); // Junta as palavras em uma nova string
};
