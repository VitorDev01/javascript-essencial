// Arrays - Atribuição via Desestruturação
  let a = 'A'; 
  let b = 'B'; 
  let c = 'C'; 
  
  //reatribuindo os valores 
  const letras = [b, c, a];
  [a, b, c] =  letras;
  
  console.log(a, b, c);
  // Arrancar coisas do array e jogar numa variável 
  const numbers = [100, 200, 300, 400, 500, 600, 700, 800, 900];
  const [primeiroNumero, segundoNumero, ...resto] = numbers;
  
  console.log(primeiroNumero, segundoNumero);
  // .. rest , ...spread
  console.log(resto);
  
  // array dentro de array
  //       indice 0           1          2
  //            0  1  2    0  1  2    0  1   2
  const num = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  
  console.log(num[1][2]);