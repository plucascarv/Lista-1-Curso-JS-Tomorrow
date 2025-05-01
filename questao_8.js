// Preferi montar a função recursivamente.
function fatorial(x) {
  if (x===0) {
    return 1;
  } else {
    return x*fatorial(x-1);
  }
}

let valor = 5;
console.log('O fatorial de',valor,'é:',fatorial(valor)+'.');