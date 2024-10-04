#include <stdio.h>
#include <math.h>
int main() {
  int t;
  scanf("%i", &t);
  for (int j = 0; j < t; j++) {
    int n;
    scanf("%i", &n);
    int controle = 0; 
    long int temp;
    double log;
    for (int i = 0; i < n; i++){
      scanf("%ld", &temp);
      //checando se é ou nao potencia de 2:
      log = log2(temp); 
      if (log-(int)log != 0) //se nao for potencia de dois incrementa controle
        controle++;      
    }    
    if (controle > (n/2))
      printf("Esse nao serve Robin! Desse jeito vamos fritar o Ciborgue!!\n");
    else printf("Esse serve Robin, confia que eu sou melhor que o Batman!\n");
  }
  return 0;
}
