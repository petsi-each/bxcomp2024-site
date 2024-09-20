#include <stdio.h>
#include <stdbool.h>

void printPosicao(int cod) {

  if (cod == 0) printf("0\n");
  else if (cod == 1) printf("1 2\n");
  else {
    int posicao = 3; 
    long atualFibo = 2, antFibo = 1;
    
    while (atualFibo < cod) {
        int aux = antFibo;
        antFibo = atualFibo;
        atualFibo += aux;
        posicao++;
    }
    
    printf("%d\n", posicao);
  }

}

int main(void) {

  int numCasos;
  long codigo;
  scanf("%d", &numCasos);
  
  for (int i = 0; i < numCasos; i++) {
    scanf("%ld", &codigo);
    printPosicao(codigo);
  }
  return 0;
}





