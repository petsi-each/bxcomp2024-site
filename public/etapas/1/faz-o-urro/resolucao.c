#include <stdio.h>
#include <stdbool.h>
#include <string.h>

/*
    Notas:
    - Contagem de instâncias da string "FAZ O URRO" de modo que:
        - [0; 0] => "falou comigo?"
        - [1; 6] => "agora nao"
        - [7; 12] => "sai daqui cueca suja"
        - [13; ∞[ => "AAAAAAAAAAAAAAAAAAAAAAARRRRRRRRRRRRRRRRRGGGGGGGGHHHHHHHHHH"
*/

int main()
{
    int num_cases;
    char str[] = "FAZ O URRO";

    scanf("%d", &num_cases);
    getchar();

    for (int k = 0; k < num_cases; k++)
    {
        int urro_count = 0;
        char in[255];
		scanf("\n%[^\n]", in);

        // SEM USAR STRING.H

        // for (int i = 0; i < (int)strlen(in) - 1; i++)
        // // i -> iterador de "in"
        // // j -> iterador de "str"
        // {
        //     int j = 0;
        //     while (in[i] == str[j])
        //     {
        //         j++;
        //         if (j == (int)strlen(str))
        //             urro_count++;
        //         i++;
        //     }
        // }

        // USANDO STRING.H
        char* pos = in;
        while ((pos = strstr(pos, str)) != NULL)
        {
            urro_count++;
            pos += strlen(str);
        }

        if(urro_count == 0)
            printf("falou comigo?\n");
        else if(urro_count > 0 && urro_count <= 6)
            printf("agora nao\n");
        else if(urro_count >= 7 && urro_count <= 12)
            printf("sai daqui cueca suja\n");
        else if(urro_count >= 13)
            printf("AAAAAAAAAAAAAAAAAAAAAAARRRRRRRRRRRRRRRRRGGGGGGGGHHHHHHHHHH\n");
    }
}
