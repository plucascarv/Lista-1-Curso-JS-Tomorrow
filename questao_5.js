let a=2, b=8, c=-24;
let delta = (b**2)-4*(a*c);
// Talvez tenha ficado confuso, mas preferi usar um conselo.log() só.
console.log('A fórmula do Δ é:\n','Δ= b²-4ac.\n','Nesse caso temos:\n','a= '+a+'; b= '+b+'; c= '+c+'.\n',
  'Assim,\n','b²= '+b**2+'; ac= '+a*c,'\n','daí,\n','Δ= '+b**2+"-4("+a*c+")",'\n','Δ= '+b**2+"+"+a*c*(-4),'\n','Δ= '+delta);