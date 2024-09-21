#include <stdio.h>

int main() {
    int num_entradas;
    scanf("%d", &num_entradas);
    for(int i = 0; i < num_entradas; i++) {
        int num_bombas = 0;
        for(int j = 0; j < 25; j++) {
            int pos;
            scanf("%d", &pos);
            if(pos == 1)
                num_bombas++; 
        }
        printf("Marvin precisa de %d bombas!\n", num_bombas);
    }
}