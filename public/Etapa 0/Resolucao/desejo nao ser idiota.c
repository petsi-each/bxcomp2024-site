#include <stdio.h>
#include <string.h>

int t;

void solve() {
	char desejo[256];

	scanf("\n%[^\n]", desejo);

	if (strlen(desejo) % 3 == 1) {
		puts("Cosmo: Haha, gostei desse desejo");
	} else {
		puts("Wanda: Que desejo mais interessante, Timmy");
	}
}

int main() {
	scanf("%d", &t);

	while (t--) solve();

	return 0;
}
