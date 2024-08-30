#include <stdio.h>
#include <string.h>
#include <ctype.h>

#define MAX_PALAVRA 101

void criptografar_palavra(char palavra[], int n, char resultado[]) {

	int tamanho_palavra = strlen(palavra);

	for (int i = 0; i < tamanho_palavra; i++) {
		char letra = palavra[i];
		int indice_original = letra - 'A';
		int indice_novo = (indice_original + n) % 26;
		resultado[i] = 'A' + indice_novo;
	}
	resultado[tamanho_palavra] = '\0';  // Adicionar caractere nulo ao final
}


int main() {
	int casos_teste, n;
	char palavra[MAX_PALAVRA];

	scanf("%d", &casos_teste);

	char resultados[casos_teste][MAX_PALAVRA];


	for (int i = 0; i < casos_teste; i++) {
		scanf("%d %s", &n, palavra);
		criptografar_palavra(palavra, n, resultados[i]);
	}

	for (int i = 0; i < casos_teste; i++) {
		printf("%s\n", resultados[i]);
	}

	return 0;
}