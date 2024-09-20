#include <stdio.h>
#include <string.h>

void solve() {
	char vencedor[101];
	int d, podervencedor = -1;
	scanf("%d", &d);

	while (d--) {
		char nome[101];
		int poder;
		scanf("%s %d", nome, &poder);
		if (poder > podervencedor) {
			podervencedor = poder;
			strcpy(vencedor, nome);
		}
	}

	printf("%s %d\n", vencedor, podervencedor);
}

int main() {
	int b;
	scanf("%d", &b);
	while (b--) {
		solve();
	}
	return 0;
}
