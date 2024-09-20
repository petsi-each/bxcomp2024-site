#include <stdio.h>
#include <string.h>
#define TRUE 1;
#define FALSE 0;


int eh_palindromo(char* string, int comeco, int final) {
    while (comeco<final) {
        if (string[comeco]!=string[final]) return FALSE;
        comeco++;
        final--;
    }
    return TRUE;
}

int main() {
    int num_casos, tamanho_do_caminho, i, j, total_cavado;
    char itens[101];
    scanf("%d", &num_casos);
    for (int caso = 0; caso<num_casos; caso++) {
        scanf("%d", &tamanho_do_caminho);
        scanf("%s", itens);
        total_cavado = 0;
        int tem_paraquedas = FALSE;
        int len = strlen(itens);

        for (i = 0; i < len; i++) {
            if (itens[i] == 'C' && itens[i+1] == 'F') {
                total_cavado += 3;
            } else if (itens[i] == 'C' && itens[i+1] == 'D') {
                total_cavado += 5;
            } else if (itens[i] == 'B' && itens[i+1] != 'D') {
                total_cavado += 10;
            }

            // Verificar paraquedas
            for (j = i; j < len; j++) {
                if (j - i >= 2 && eh_palindromo(itens, i, j)) {
                    tem_paraquedas = TRUE;
                }
            }
        }
        if (total_cavado < tamanho_do_caminho) printf("Kowalski: Capitao, segundo meus calculos faltaram %d metros para escaparmos\n", tamanho_do_caminho - total_cavado);
        else if (!tem_paraquedas) printf("Capitao: Sujou! Rapido, escondam nossa rota de fuga!... Voce nao viu nada...\n");
        else printf("Capitao: Quem disse que pinguim nao voa? Haha! Sorriam e acenem rapazes\n");
    }
    return 0;
}
