// Preferi montar a função recursivamente.
function fatorial(x) {
  if (x===0) {
    return 1;
  } else {
    return x*fatorial(x-1);
  }
}

// Pelo que entendi do enunciado, fiz a variável como user input. Mas fiquei com um pouco de dúvida se era realmente isso.
let input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
let valor = input[0];
console.log('O fatorial de',valor,'é:',fatorial(valor)+'.');