let primos = [];

function primo(x) {
  for (let i=2;i<=Math.sqrt(x);i++) { /* Usei sqrt porque não seria necessário ir até i<x, assim fica mais eficiente. */
    if (x%i===0) {
      return false;
    }
  }
  return x>1; /* Caso 0 ou 1 entrassem, daria como primo, por isso essa expressão. Nesse código estou limitando os elementos de buscas, mas posteriormente reutilizo e essa mudança se torna importante. */
}

let i = 2;
while (primos.length<1001) {
  if (primo(i)) {
    primos.push(i);
  }
  i++;
}

console.log('O 1001° número primo é:',primos[1000]);