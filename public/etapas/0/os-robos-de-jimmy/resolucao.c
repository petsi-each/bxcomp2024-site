#include <stdio.h>
#include <stdlib.h>

int main() {
    int num_casos_teste,dimensao_x,dimensao_y, num_robos, num_movimentos, pos_x, pos_y;
    int** pos;
    char** movimentos;
    int bateu;
    scanf("%d",&num_casos_teste);
    for (int i=0;i<num_casos_teste;i++) {
        scanf("%d %d", &dimensao_x, &dimensao_y);
        scanf("%d %d",&num_robos, &num_movimentos);
        pos = (int**) malloc(num_robos*sizeof(int*));
        for (int j = 0; j < num_robos; j++) {
            pos[j] = malloc(2*sizeof(int));
        }
        movimentos = (char**) malloc(num_robos*sizeof(char*));
        for (int j = 0; j < num_robos; j++) {
            movimentos[j] = malloc(num_movimentos*sizeof(char));
        }
        for (int j=0; j<num_robos; j++) {
            scanf("%d %d", &pos[j][0], &pos[j][1]);
            for (int k=0; k<num_movimentos; k++) {
                scanf(" %c", &movimentos[j][k]);
            }
            movimentos[j][num_movimentos] = '\0';
        }
        for (int k=0; k<num_movimentos; k++) {
            bateu = 0;
            for (int j=0; j<num_robos; j++) {
                switch (movimentos[j][k]) {
                    case 'E':
                        pos[j][0]--;
                        break;
                    case 'D':
                        pos[j][0]++;
                        break;
                    case 'C':
                        pos[j][1]--;
                        break;
                    case 'B':
                        pos[j][1]++;
                        break;
                }
            }
            for (int j=0; j<num_robos; j++) {
                for (int l=j+1; l<num_robos; l++) {
                    if ((pos[j][0] == pos[l][0]) && (pos[j][1] == pos[l][1])) {
                        bateu = 1;
                        break;
                    }
                }
                if (bateu) break;
            }
            if (bateu) break;
        }
        if (bateu) {
            printf("Hmm, parece que tivemos um pequeno contratempo robótico.\n");
        }
        else {
            printf("Eureka! Eu sabia que minha programação era impecável.\n");
        }

        for (int j = 0; j < num_robos; j++) {
            free(pos[j]);
        }
        free(pos);

        for (int j = 0; j < num_robos; j++) {
            free(movimentos[j]);
        }
        free(movimentos);
    }
    return 0;
}