#include <stdio.h>
#include <string.h>

int verificar_tapete(const char *latido) {
	char *tapete = "TAPETE";
	int j = 0; // Índice para a palavra "TAPETE"
	int n = strlen(latido);

	for (int i = 0; i < n;) {
		// letra E (aauu)
		if (strncmp(&latido[i], "aauu", 4) == 0) {
			if (tapete[j] == 'E') {
				j++;
				i += 4;
			}
			else {
				j = 0;
				++i;
			}
		}

		// letra T (aau)
		else if (strncmp(&latido[i], "aau", 3) == 0) {
			if (tapete[j] == 'T') {
				j++;
				i += 3;
			}
			else {
				j = 1;
				++i;
			}
		}

		// letra A (auu)
		else if (strncmp(&latido[i], "auu", 3) == 0) {
			if (tapete[j] == 'A') {
				j++;
				i += 3;
			}
			else {
				j = 0;
				++i;
			}
		}

		// letra P (aaau)
		else if (strncmp(&latido[i], "aaau", 4) == 0) {
			if (tapete[j] == 'P') {
				j++;
				i += 4;
			}
			else {
				j = 0;
				++i;
			}
		}

		else {
			i++;
		}
	if (j == 6) {
		return 1; // Palavra "TAPETE" foi encontrada corretamente
	}
	}

	return 0; // Palavra "TAPETE" não foi encontrada
}

int main() {
	int n;
	char latido[1001];
	int resultados[1001]; 

	scanf("%d", &n);

	for (int i = 0; i < n; i++) {
		scanf("%s", latido);
		resultados[i] = verificar_tapete(latido);
	}

	for (int i = 0; i < n; i++) {
		if (resultados[i]) {
			printf("taPETe!!! ENTENDIIII! EH PENTAAH ZELDAAA!\n");
		} else {
			printf("NAO ENTENDI NADAAAAA, rePETee!!!\n");
		}
	}
	return 0;
}
