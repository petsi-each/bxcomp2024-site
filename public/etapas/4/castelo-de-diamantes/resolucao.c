#include <stdio.h>
#include <string.h>
#include <ctype.h>


int is_vowel(char c) {
    c = tolower(c);
    return (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u');
}


int desafio1(char *musica) {
    int vogais = 0, consoantes = 0;
    for (int i = 0; musica[i] != '\0'; i++) {
        if (isalpha(musica[i])) {
            if (is_vowel(musica[i])) {
                vogais++;
            } else {
                consoantes++;
            }
        }
    }
    return consoantes <= vogais;
}


int desafio2(char *hex1, char *hex2, char *nota) {
    int num1, num2;
    sscanf(hex1, "%x", &num1);
    sscanf(hex2, "%x", &num2);
    char nota1 = (char)num1;
    char nota2 = (char)num2;
    char notas[3] = {nota1, nota2, '\0'};
    return strcasecmp(notas, nota) == 0; // Comparação case-insensitive
}


int desafio3(char *palavras) {
    const char *frase[] = {"pra", "mim", "tem", "que", "acreditar"};
    int pos = 0;
    char *token = strtok(palavras, " ");
    
    while (token != NULL) {
        if (strcmp(token, frase[pos]) == 0) {
            pos++;
        }
        if (pos == 5) {  // Se todas as palavras foram encontradas na ordem correta
            return 1;
        }
        token = strtok(NULL, " ");
    }
    return 0;  
}

int main() {
    char musica[1000];
    char hex1[10], hex2[10], nota[10];
    char palavras[1000];

    // Lendo a entrada
    fgets(musica, sizeof(musica), stdin);
    scanf("%s %s %s", hex1, hex2, nota);
    getchar(); // Consome a quebra de linha após a leitura dos hexadecimais e nota
    fgets(palavras, sizeof(palavras), stdin);

    // Remove a nova linha do final das strings, se houver
    musica[strcspn(musica, "\n")] = '\0';
    palavras[strcspn(palavras, "\n")] = '\0';

    // Verifica os desafios
    if (desafio1(musica) && desafio2(hex1, hex2, nota) && desafio3(palavras)) {
        printf("tan nan nan naaan nan tan nan nanana nan naaan nan\n");
    } else {
        printf("desculpa, Melody, foi mal\n");
    }

    return 0;
}
