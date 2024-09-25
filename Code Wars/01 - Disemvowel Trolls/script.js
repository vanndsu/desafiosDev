// Função que remove vogais de uma string usando regex
function disemvowel(string) {
  // Usamos o método replace() para substituir todas as vogais (tanto minúsculas quanto maiúsculas)
  // O padrão de regex /[aeiouAEIOU]/g procura todas as vogais e as substitui por uma string vazia
  return string.replace(/[aeiouAEIOU]/g, "");
}
console.log(disemvowel("This website is for losers LOL!")); // Saída: "Ths wbst s fr lsrs LL!"

// Função alternativa para remover vogais usando loop e manipulação de array
function semVogais(string) {
  // Converte a string em um array de caracteres para manipulação
  let semV = string.split("");

  // Loop através de cada caractere do array
  for (let i in semV) {
    // Verifica se o caractere atual é uma vogal (minúscula ou maiúscula)
    if (
      semV[i].toLowerCase() == "i" ||
      semV[i].toLowerCase() == "a" ||
      semV[i].toLowerCase() == "e" ||
      semV[i].toLowerCase() == "o" ||
      semV[i].toLowerCase() == "u" ||
      semV[i].toLowerCase() == "é" // Adicionamos o "é" como exemplo de vogal acentuada
    ) {
      // Se for uma vogal, substituímos por uma string vazia
      semV[i] = "";
    }
  }

  // Retorna o array convertido de volta para uma string, agora sem vogais
  return semV.join("");
}

console.log(semVogais("This website is for losers LOL!")); // Saída: "Ths wbst s fr lsrs LL!"
