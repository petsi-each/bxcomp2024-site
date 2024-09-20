#include <stdio.h>

int main (){
    int casos; //recebe o numero de casos testes//
    scanf ("%d", &casos);

    for (int k=1; k<=casos; k++){ //cria loop dos casos testes//
        int aviao[8][9]; //matriz que receberá o peso das galinhas//
        int esq=0; //variavel que soma o peso da esquerda//
        int dir=0; //variavel que soma o peso da direita//

        for (int i=0; i<8; i++){ 
            for (int j=0; j<9;j++){ //para cada item da matriz//
                scanf ("%d", &aviao[i][j]); //recebe o peso//

                if (j<=3){
                    esq+=aviao[i][j]; //soma os pesos em milho da esquerda//
                }
                if (j>=5){
                    dir+=aviao[i][j]; //soma os pesos em milho da direita//
                }
            }
        }
    esq = esq*0.75; //faz a conversão//
    dir = dir*0.75;

    printf ("%d %d\n", esq, dir); 

    /* printa os casos segundo a diferença de peso */
    
    if (esq>1.5*dir || dir>1.5*esq)
        printf("po PO POOOOOOO!!!! Essa lata veia vai cairrr!!!!!\n");
    else if (esq>1.3*dir || dir>1.3*esq)
        printf("Oh ceus, segura na mao da amiga e vai.\n");
    else
        printf("VOOOOAAAA DISGRACAAAAA!\n");
    }

return 0;
}
