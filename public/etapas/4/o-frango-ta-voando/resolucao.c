#include <stdio.h>

void solve() {
	int n = 0;
	int array[100];

	while (1) {
		int x;
		scanf("%d", &x);
		if (x == 0) break;

		array[n] = x;
		++n;
	}

	int maior_soma = array[0], soma_atual;

	for (int tamanho_intervalo = 1; tamanho_intervalo <= n; ++tamanho_intervalo) {
		for (int inicio = 0, fim = tamanho_intervalo - 1; fim < n; ++inicio, ++fim) {
			soma_atual = 0;
			for (int i = inicio; i <= fim; ++i) {
				soma_atual += array[i];
			}
			if (soma_atual > maior_soma) maior_soma = soma_atual;
		}
	}

	printf("%d\n", n > 0 ? maior_soma : 0);
}

int main() {
	int t; 
	scanf("%d", &t);

	while (t--) solve();

	return 0;
}
