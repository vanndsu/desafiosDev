// Função que soma dois números e retorna a soma em formato binário
function addBinary(num1, num2) {
  // Soma os dois números passados como parâmetros
  let soma = num1 + num2;

  // Converte a soma para formato binário usando o método toString(2)
  // O argumento '2' especifica que queremos a representação binária
  return soma.toString(2);
}

// Testa a função somando 4 e 6, e imprime o resultado em binário
console.log(addBinary(4, 6)); // Saída: "1010"

// Função simplificada para somar dois números e retornar o resultado em binário
function addBinary(num1, num2) {
  // Soma diretamente os dois números e converte para binário
  return (num1 + num2).toString(2);
}

// Testa novamente somando 4 e 6, e imprime o resultado em binário
console.log(addBinary(4, 6)); // Saída: "1010"
