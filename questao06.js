/*
Exercícios de Vetores e Matrizes em JavaScript
Questão:  Escreva um código para calcular a soma de todos os elementos de uma
matriz em JavaScript
*/

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  

  let soma = 0;
  
  for (let i = 0; i < matriz.length; i++) {

    for (let j = 0; j < matriz[i].length; j++) {
     
      soma += matriz[i][j];
    }
  }
  
  console.log("A soma de todos os elementos da matriz é:", soma);
  