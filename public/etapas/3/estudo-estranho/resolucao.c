#include <stdio.h>
#include <string.h>

#define MAX_TYPES 5
#define MAX_NAME_LENGTH 10
#define MAX_MONSTERS 100

int guloso(int tempo_disp, int conhecimento[], int tempo_monstro[], int qtd_monstro[]) {
    int conhecimento_total = 0;

    while (tempo_disp > 0) {
        int melhor_loc = -1;
        int melhor_val = 0;

        
        for (int i = 0; i < MAX_TYPES; i++) {
            if (qtd_monstro[i] > 0 && conhecimento[i] > melhor_val && tempo_monstro[i] <= tempo_disp) {
                melhor_val = conhecimento[i];
                melhor_loc = i;
            }
        }

        
        if (melhor_loc != -1) {
            int tempo_nec = tempo_monstro[melhor_loc];
            int max_count = tempo_disp / tempo_nec;
            if (max_count > qtd_monstro[melhor_loc]) {
                max_count = qtd_monstro[melhor_loc];
            }

            conhecimento_total += max_count * conhecimento[melhor_loc];
            tempo_disp -= max_count * tempo_nec;
            qtd_monstro[melhor_loc] -= max_count; 
        } else {
            break; 
        }
    }

    return conhecimento_total;
}

int main() {
    int num_cases;
    scanf("%d", &num_cases);

    int montro_temp[MAX_TYPES] = {1, 4, 9, 12, 15};
    char *monstro_nomes[MAX_TYPES] = {"porco", "olhos", "morcego", "gnomo", "pe"};

    while (num_cases--) {
        int tempo_disp;
        scanf("%d", &tempo_disp);

        int conhecimento[MAX_TYPES];
        for (int i = 0; i < MAX_TYPES; i++) {
            scanf("%d", &conhecimento[i]);
        }

        
        int monstro_qtd[MAX_TYPES] = {0}; 

       
        char monstro[MAX_NAME_LENGTH];
        while (scanf("%s", monstro) == 1) {
            
            int achou = 0;
            for (int j = 0; j < MAX_TYPES; j++) {
                if (strcmp(monstro, monstro_nomes[j]) == 0) {
                    monstro_qtd[j]++;
                    achou = 1;
                    break;
                }
            }

            if (getchar() == '\n') {
                break;
            }
        }

    
        int result = guloso(tempo_disp, conhecimento, montro_temp, monstro_qtd);
        printf("%d\n", result);
    }

    return 0;
}
