#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main() {
	char abertura[] = "Sao tres meses de ferias Que passam depressa Curtir e a prioridade Temos que aproveitar bem Entao vamos nessa Mas tem que rolar novidade (Como por exemplo) Ir ao espaco Lutar com uma mumia Ou escalar a Torre Eiffel inteira Descobrir uma coisa maluca demais Ou lavar o macaco na banheira Surfar um maremoto Criar minirobos Ou colocar o monstro no diva (Ta aqui o cerebro) Achar mais um dodo Pintar um continente Ou enlouquecer nossa irma (Phineas!) Antes que as aulas comecem de novo Temos muito que fazer (Vem Perry!) Fique ligado pois com Phineas e Ferb Tudo pode acontecer Fique ligado pois com Phineas e Ferb Tudo pode acontecer Manhe! Phineas e o Ferb estao fazendo a abertura da serie!";

	char palavras[122][100];

	// Separa as palavras da abertura em um array
	char *token = strtok(abertura, " ");

	for (int i = 0; i < 122; ++i) {
		strcpy(palavras[i], token);
		token = strtok(NULL, " ");
	}

	int t;
	scanf("%d", &t);
	int indice = 0; // indica a primeira palavra da próxima resposta
	while (t--) {
		char s[10];
		scanf("%s", s);
		if (!strcmp(s, "MANHE!!!")) { // verifica se a entrada é a string MANHE!!!
			indice = 0;
			puts("Vem Perry!");
		} else {
			int qtd_palavras = atoi(s);
			qtd_palavras *= 2; // a entrada está em segundos, e em cada segundo duas palavras são ditas
			while (qtd_palavras--) {
				printf("%s ", palavras[indice]); 
				++indice;
				if (indice == 122) {
					printf("PEEEEEEWN!");
					indice = 0;
					break;
				}
			}
			puts(""); // quebra de linha
			}
	}
	return 0;
}
