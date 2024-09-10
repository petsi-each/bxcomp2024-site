#include <stdio.h>
#include <string.h>

int main(void) {
  int ent;
  scanf("%i", &ent);
  getchar();
  int i, controle;
  int letras[26];
  char entrada[1001];
  for (int j = 0; j<ent; j++){
    for(i = 0; i<26; i++)
      letras[i] = 0;
    scanf("%[^\n]s", entrada);
    getchar();
    for(i = 0; entrada[i]!='\0'; i++){
      if(entrada[i]>=65 && entrada[i]<=90)
        letras[(entrada[i]-65)]++;
      if(entrada[i]>=97 && entrada[i]<=122)
        letras[(entrada[i]-97)]++;
    }
    for(i = 0; i<26; i++)
      if(letras[i] == 0){
        printf("Falso\n");
        controle = j;
        break;
      }
    if(controle!=j)
      printf("Verdadeiro\n");
  }
  return 0;
}
