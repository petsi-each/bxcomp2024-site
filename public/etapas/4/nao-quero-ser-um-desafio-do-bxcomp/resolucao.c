#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

char* comprimir_string(const char *palavra) {
    int comprimento_comprimido = 0;
    char *comprimido = (char*)malloc(200);

    if (comprimido == NULL) {
        return NULL;
    }

    int i = 0, j = 0;
    while (palavra[i] != '\0') {
        int contagem_repetida = 1;

        char caractere_atual = tolower(palavra[i]);

        while (tolower(palavra[i]) == tolower(palavra[i + 1])) {
            contagem_repetida++;
            i++;
        }

        comprimido[j++] = caractere_atual;
        j += sprintf(&comprimido[j], "%d", contagem_repetida);

        comprimento_comprimido += 1 + (contagem_repetida < 10 ? 1 : (contagem_repetida < 100 ? 2 : 3));
        i++;
    }

    comprimido[j] = '\0';

    if (comprimento_comprimido > i) {
        free(comprimido);
        return strdup(palavra);
    }

    return comprimido;
}

int main() {
    int casos_teste;
    scanf("%d", &casos_teste);
    getchar();

    char **resultados = (char**)malloc(casos_teste * sizeof(char*));
    if (resultados == NULL) {
        return 1;
    }

    for (int i = 0; i < casos_teste; i++) {
        char palavra[150];
        fgets(palavra, 150, stdin);
        palavra[strcspn(palavra, "\n")] = 0; 

        for (int k = 0; palavra[k]; k++) {
            palavra[k] = tolower(palavra[k]);
        }
        resultados[i] = comprimir_string(palavra);
    }

    for (int i = 0; i < casos_teste; i++) {
        printf("%s\n", resultados[i]);
        free(resultados[i]);
    }

    free(resultados);

    return 0;
}
