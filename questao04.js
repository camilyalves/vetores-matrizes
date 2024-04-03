/*
Exercícios de Vetores e Matrizes em JavaScript
Questão: Crie uma matriz 3x3 em JavaScript e imprima-a na tela
*/

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      document.write(matriz[i][j] + ' ');
    }
    document.write('<br>');
  }
  