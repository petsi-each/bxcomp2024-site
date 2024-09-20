    #include <stdio.h>

    void bomba (int n) {
        int horas = n / 3600;
        int minutos = (n % 3600) / 60;
        int segundos = n % 60;
        
        int ehPrimoMinutos = 1;
        int ehPrimoSegundos = 1;

        if (minutos < 2) {
            ehPrimoMinutos = 0;
        } else {
            for (int i = 2; i < minutos; i++) {
                if (minutos % i == 0) {
                    ehPrimoMinutos = 0;
                    break;
                }
            }
        }

        if (segundos < 2) {
            ehPrimoSegundos = 0;
        } else {
            for (int i = 2; i < segundos; i++) {
                if (segundos % i == 0) {
                    ehPrimoSegundos = 0;
                    break;
                }
            }
        }

        if (ehPrimoMinutos || ehPrimoSegundos) {
            printf("%.2d:%.2d:%.2d CORTA OS FIO FLASH AGORA BOMB HAS BEEN DEFUSED\n", horas, minutos, segundos);
        } else {
            printf("%.2d:%.2d:%.2d Segura a mao flash paciencia eh uma virtude nao seja precoce\n", horas, minutos, segundos);
        }
    }

    int main() {
        int entradas;
        scanf("%d", &entradas);

        int resultados[entradas];

        for (int i = 0; i < entradas; i++) {
            scanf("%d", &resultados[i]);
        }

        for (int i = 0; i < entradas; i++) {
            bomba(resultados[i]);
        }
        return 0;
    }
