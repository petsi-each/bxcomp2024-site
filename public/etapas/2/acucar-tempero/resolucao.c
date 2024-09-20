#include <stdio.h>
#include <string.h>

#define BUFFER 100

void solve() {
	char s[BUFFER];
	int soma = 0;

	for (int i = 0; i < 4; ++i) {
		scanf("%s", s);
		if (!strcmp(s, "acucar")) soma += 1;
		else if (!strcmp(s, "tempero")) soma += 10;
		else if (!strcmp(s, "tudoquehadebom")) soma += 100;
		else if (!strcmp(s, "x")) soma += 1000;
	}

	if (soma == 0) puts("?");
	else if (soma == 4) puts("Uniao faz");
	else if (soma == 40) puts("Nao falta!");
	else if (soma == 400) puts("Nada!");
	else if (soma == 4000) puts("Anoitece, amanhece e o efeito permanece...");
	else if (soma == 1111) puts("E assim nasceram as meninas Superpoderosas, usando seus ultra-super poderes - Florzinha, Lindinha e Docinho, tem dedicado suas vidas Combatendo o crime, e as forcas do mal!");
	else puts("E assim nasceram as meninas Superpoderosas");

}

int main() {
	int t;

	scanf("%d", &t);
	while (t--) solve();
	return 0;
}

