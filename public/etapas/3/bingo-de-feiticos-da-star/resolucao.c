#include <stdio.h>
#include <string.h>

int main(void) {
    // Abre o arquivo de entrada para leitura
    FILE *input = fopen("in.in", "r");
    if (input == NULL) {
        printf("Erro ao abrir o arquivo de entrada.\n");
        return 1;
    }

    // Abre o arquivo de saída para escrita
    FILE *output = fopen("out.out", "w");
    if (output == NULL) {
        printf("Erro ao abrir o arquivo de saída.\n");
        fclose(input);
        return 1;
    }

    int n;
    fscanf(input, "%d", &n);

    for (int i = 0; i < n; i++) {
        // inicializa bingo
        int bingo[7];
        for (int j = 0; j < 7; j++) {
            bingo[j] = 0;
        }

        // lê os números do bingo
        for (int j = 0; j < 9; j++) {
            int aux;
            fscanf(input, "%d", &aux);
            if (aux == 1) {
                bingo[1]++;
            } else if (aux == 2) {
                bingo[2]++;
            } else if (aux == 3) {
                bingo[3]++;
            } else if (aux == 4) {
                bingo[4]++;
            } else if (aux == 5) {
                bingo[5]++;
            } else if (aux == 6) {
                bingo[6]++;
            }
        }

        // lê as mensagens
        for (int j = 1; j < 10; j++) {
            char mensagem[100];
            fscanf(input, " %[^\n]", mensagem);

            if (strcmp(mensagem, "Sem novas mensagens") == 0) {
                continue;
            } else if (strcmp(mensagem, "Staaar 1") == 0) {
                bingo[1]--;
            } else if (strcmp(mensagem, "Staaar 2") == 0) {
                bingo[2]--;
            } else if (strcmp(mensagem, "Staaar 3") == 0) {
                bingo[3]--;
            } else if (strcmp(mensagem, "Staaar 4") == 0) {
                bingo[4]--;
            } else if (strcmp(mensagem, "Staaar 5") == 0) {
                bingo[5]--;
            } else if (strcmp(mensagem, "Staaar 6") == 0) {
                bingo[6]--;
            }
        }

        // verifica se fez bingo
        int cont = 0;
        for (int j = 0; j < 7; j++) {
            if (bingo[j] > 0) {
                cont++;
            }
        }

        if (cont > 0) {
            fprintf(output, "Ih, sobrou pra depois\n");
            for (int j = 1; j < 7; j++) {
                if (bingo[j] > 0) 
                    fprintf(output, "%d\n", bingo[j]);
                else 
                    fprintf(output, "0\n");
            }
        } else {
            fprintf(output, "Bingoo\n");
        }
    }

    // Fecha os arquivos
    fclose(input);
    fclose(output);

    return 0;
}
