function primo(x) {
  for (let i=2;i<=Math.sqrt(x);i++) {
    if (x%i===0) {
      return false;
    }
  }
  return x>1; 
}

let primos = [];
for (let i=0;i<=200;i++) { /* Nesse código é onde se faz necessária a mudança na linha 7 contementada na questãop 3 (linha 9), pois aqui se começa a busca do 0 */
  if (primo(i)===true) {
    primos.push(i);
  }
}

console.log('Os números primos entre 0 e 200 são:\n', primos);