#include <stdio.h>
#include <stdlib.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// Particiona o array para o Quicksort
int partition(int *array, int low, int high) {
    int pivot = array[high];
    int i = low - 1; // Índice do menor elemento

    for (int j = low; j < high; j++) {
        if (array[j] <= pivot) {
            i++;
            swap(&array[i], &array[j]);
        }
    }
    swap(&array[i + 1], &array[high]);
    return i + 1;
}


void quickSort(int *array, int low, int high) {
    if (low < high) {
        int pi = partition(array, low, high); // Índice de partição

        quickSort(array, low, pi - 1);
        quickSort(array, pi + 1, high);
    }
}

int main() {
    int casos;
    int numArrays = 4;
    int i, j, k;

    scanf("%d", &casos);

    for (k = 0; k < casos; k++) {

        // Aloca memória para o número de arrays
        int (*arrays)[4] = malloc(numArrays * sizeof(int[4]));
        if (arrays == NULL) {
            printf("Erro ao alocar memória.\n");
            return 1;
        }

        // Leitura dos arrays
        for (i = 0; i < numArrays; i++) {
            for (j = 0; j < 4; j++) {
                scanf("%d", &arrays[i][j]);
            }
        }

        // Aloca memória para o array combinado
        int totalSize = numArrays * 4;
        int *combinedArray = malloc(totalSize * sizeof(int));
        if (combinedArray == NULL) {
            printf("Erro ao alocar memória.\n");
            free(arrays);
            return 1;
        }

        // Combina todos os arrays em um único array
        for (i = 0; i < numArrays; i++) {
            for (j = 0; j < 4; j++) {
                combinedArray[i * 4 + j] = arrays[i][j];
            }
        }

        // Ordena o array combinado usando Quicksort
        quickSort(combinedArray, 0, totalSize - 1);

        for (i = 0; i < totalSize; i++) {
            printf("%d ", combinedArray[i]);
        }
        printf("\n");


        free(arrays);
        free(combinedArray);
    }

    return 0;
}
