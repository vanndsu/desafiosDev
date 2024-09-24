function toM(string) {
  let aux = string.split(" ");

  for (let i in aux) {
    aux[i] = aux[i].charAt(0).toUpperCase() + aux[i].slice(1);
  }
  return aux.join(" ");
}
console.log(toM("How can mirrors be real if our eyes aren't real"));
