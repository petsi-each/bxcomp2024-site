#include <stdio.h>
#include <string.h>

int main(void) {

  int n;
  scanf("%d", &n);

  for (int i = 0; i < n; i++) {

    // inicializa bingo
    int bingo[7];
    for(int j = 0; j < 7; j++){
      bingo[j] = 0;
    }
    
    // scan bingo - a aprender
    for (int j = 0; j < 9; j++) {
      int aux;
      scanf("%d", &aux);
      if (aux == 1){
        bingo[1]++;
      } else if (aux == 2){
        bingo[2]++;
      } else if (aux == 3){
        bingo[3]++;
      } else if (aux == 4){
        bingo[4]++;
      } else if (aux == 5){
        bingo[5]++;
      } else if (aux == 6){
        bingo[6]++;
      }
    }

    // pega mensagens - aprender
    for (int j = 1; j < 10; j++) {
      char mensagem[100];
      scanf(" %[^\n]", mensagem);
      
      if(strcmp(mensagem, "Sem novas mensagens") == 0){
        continue;
      } else if (strcmp(mensagem, "Staaar 1") == 0){
        bingo[1]--;
      } else if (strcmp(mensagem, "Staaar 2") == 0){
        bingo[2]--;
      } else if (strcmp(mensagem, "Staaar 3") == 0){
        bingo[3]--;
      } else if (strcmp(mensagem, "Staaar 4") == 0){
        bingo[4]--;
      } else if (strcmp(mensagem, "Staaar 5") == 0){
        bingo[5]--;
      } else if (strcmp(mensagem, "Staaar 6") == 0){
        bingo[6]--;
      } 
    }

    // conseguiu fazer bingo?
    
    int cont = 0;
    for (int j = 0; j < 7; j++){
      if (bingo[j] > 0){
        cont++;
      }
    }
    if (cont > 0){
      printf("Ih, sobrou pra depois\n");
      // feitiços aprendidos no domingo
      for (int j = 1; j < 7; j++){
        if(bingo[j] > 0) printf("%d\n", bingo[j]);
        else if (bingo[j] <= 0) printf("0\n");
      }
    }
    else {
      printf("Bingoo\n");
    }
  }

  return 0;
}