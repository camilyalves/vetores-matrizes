/*
Exercícios de Vetores e Matrizes em JavaScript
Questão: Crie uma matriz 3x3 e escreva uma função para verificar se a matriz é
simétrica em relação à sua diagonal principal
*/

function verificarSimetriaDiagonal(matriz) {
   
    if (matriz.length !== matriz[0].length) {
      return false; 
    }
  
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
     
        if (matriz[i][j] !== matriz[j][i]) {
          return false; 
        }
      }
    }
  
  
    return true;
  }
  

  const matrizTeste = [
    [1, 2, 3],
    [2, 4, 5],
    [3, 5, 6]
  ];
  
 

  console.log("A matriz é simétrica em relação à sua diagonal principal?", verificarSimetriaDiagonal(matrizTeste));
  