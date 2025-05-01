let multiplos = [];
for (let i=3;i<1000;i++) {
  if ((i%3===0)||(i%5===0)) {
    multiplos.push(i);
  }
}
console.log('Os múltiplos de 3 ou 5, abaixo de 1000, são:\n', multiplos);