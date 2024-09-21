#include <math.h>
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>

bool diagonal(int *coord, int *coordP) {
  if (coord[0] == coordP[0] || coord[1] == coordP[1])
    return false;
  else
    return true;
}

float distancia(int *coord, int *coordP) {

  // cateto horizontal
  int distH = abs(coord[1] - coordP[1]);
  // cateto vertical
  int distV = abs(coord[0] - coordP[0]);

  if (diagonal(coord, coordP)) {
    // hipotenusa
    float hip = sqrt(distH * distH + distV * distV);
    return hip;
  } else {
    // horizontal
    if (distH != 0)
      return distH;
    // vertical
    else
      return distV;
  }
}

int main(void) {

  int casos;
  scanf("%d", &casos);

  for (int n = 0; n < casos; n++) {
    int puroOsso[2], billy[2], mandy[2];
    for (int i = 0; i < 7; i++) {
      for (int j = 0; j < 10; j++) {
        char atual;
        scanf(" %c", &atual);
        if (atual == 'P') {
          puroOsso[0] = i;
          puroOsso[1] = j;
        } else if (atual == 'B') {
          billy[0] = i;
          billy[1] = j;
        } else if (atual == 'M') {
          mandy[0] = i;
          mandy[1] = j;
        }
      }
    }

    float distB = distancia(billy, puroOsso),
          distM = distancia(mandy, puroOsso);

    if (distB <= distM) {
      printf("Ah, oi Puro Osso\n");
    } else
      printf("Nao me mate, pegue o idiota do Billy primeiro\n");
  }
}
