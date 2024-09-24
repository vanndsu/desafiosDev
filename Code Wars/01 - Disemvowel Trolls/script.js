function semVogaiss(string) {
  return string.replace(/[aeiouAEIOU]/g, "");
}

console.log(semVogaiss("This website is for losers LOL!"));

function semVogais(string) {
  let semV = string.split("");

  for (let i in semV) {
    if (
      semV[i].toLowerCase() == "i" ||
      semV[i].toLowerCase() == "a" ||
      semV[i].toLowerCase() == "e" ||
      semV[i].toLowerCase() == "o" ||
      semV[i].toLowerCase() == "u" ||
      semV[i].toLowerCase() == "é"
    ) {
      semV[i] = "";
    }
  }
  return semV.join("");
}

console.log(semVogais("É o capote!"));
