#include <stdio.h>
#include <string.h>

#define MAX_LENGTH 255

// Função para verificar se uma string é um palíndromo
int eh_palindromo(char str[]) {
    int len = strlen(str);
    for(int i = 0; i < len / 2; i++) {
        if(str[i] != str[len - i - 1]) {
            return 0; // Não é palíndromo
        }
    }
    return 1; // É palíndromo
}

int main() {
    int n;
    char numero[MAX_LENGTH];

    // Leitura do número de casos de teste
    scanf("%d", &n);

    // Processa cada caso de teste
    for(int i = 0; i < n; i++) {
        scanf("%s", numero);
        if(eh_palindromo(numero)) {
            printf("EH CLONE, CUIDADO\n");
        } else {
            printf("Bem vindos, agentes\n");
        }
    }

    return 0;
}
