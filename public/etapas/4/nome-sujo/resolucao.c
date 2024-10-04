#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Função para verificar se o telefone contém os dígitos '6', '9', '4' e '7'
bool telefone_valido(int telefone) {
  char str[10];
  sprintf(str, "%d", telefone); // Converte o número de telefone para string

  // Verifica se contém os dígitos '6', '9', '4' e '7'
  return (strchr(str, '6') && strchr(str, '9') && strchr(str, '4') &&
          strchr(str, '7'));
}

int main() {
  int t;
  scanf("%d", &t);

  while (t--) {
    double valor_arrecadado, valor_seu_barriga;
    int N;

    scanf("%lf %lf %d", &valor_arrecadado, &valor_seu_barriga, &N);

    int *valores_reivindicados = (int *)malloc(sizeof(int) * N);
    double total_dividas = 0;

    for (int i = 0; i < N; i++) {
      int telefone;
      scanf("%d.%d",&valores_reivindicados[i],&telefone);

      if (telefone_valido(telefone)) {
        total_dividas += (int)valores_reivindicados[i];
      }
    }

    double divida_total = total_dividas + valor_seu_barriga;

    if (valor_arrecadado >= total_dividas + valor_seu_barriga) {
      printf("SEU MADRUGA, O SENHOR TÁ LIMPOOOOO!!!\n");
    } else {
      printf("Tá faltando dinheiro, Seu Madruga.... entra pro PET que tem "
             "bolsa!\n");
    }
  }

  return 0;
}
