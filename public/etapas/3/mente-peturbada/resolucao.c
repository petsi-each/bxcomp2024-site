#include <stdio.h>
#include <stdbool.h>
#include <string.h>
#include <ctype.h>

/*
    - Lógica:
        - Memórias de alegria são as strings com algum projeto dos 6 projetos do pet presentes (case insensitive)
        - Memórias base são as strings com "PET" (case insensitive) presente
        - Memórias de esquecimento são as que não se enquadram em nenhuma das classificações anteriores
    - Corner-Cases:
        - "competec" tem "pet" no nome
        - linhas com mais de uma palavra-chave
        - linhas com palavras-chave não isoladas (ex.: "obxcomp" não é uma palavra válida)
*/

void toLowerCase(char *str)
{
    for (int i = 0; i < (int)strlen(str); i++)
        //     if (str[i] >= 'A' && str[i] <= 'Z')
        //         // caracteres minúsculos sempre são 32 posições depois dos seus equivalentes maiúsculos na tabela ASCII
        //         str[i] += 32;

        str[i] = tolower(str[i]); // usando ctype.h
}

bool verifyMem(char *line, char *reference_str)
{
    toLowerCase(line);
    int line_len = (int)strlen(line);
    int ref_len = (int)strlen(reference_str);
    if (line_len < ref_len)
        return false;

    for (int i = 0; i < line_len; i++)
    {
        if (
            (i == 0 || line[i - 1] == ' ') &&
            (strncmp(&line[i], reference_str, ref_len)) == 0 &&
            (i + ref_len == line_len || line[i + strlen(reference_str)] == ' ' || line[i + strlen(reference_str)] == '\n')
        )
            return true;
    }

    return false;
}

bool verifyMemPet(char *line)
{
    if ((int)strlen(line) < 3)
        return false;

    toLowerCase(line);
    for (int i = 0; i < (int)strlen(line); i++)
    {
        if (
            (i == 0 || line[i - 1] == ' ') &&                             // verifica caractere anterior
            line[i] == 'p' && line[i + 1] == 'e' && line[i + 2] == 't' && // verifica se a substring é "pet"
            (line[i + 3] == ' ' || line[i + 3] == '\n')                   // verifica se tem espaço depois
        )
        {
            return true;
        }
    }
    return false;
}

int main()
{
    int num_cases;
    scanf("%d", &num_cases);
    for (int i = 0; i < num_cases; i++)
    {
        int num_lines;
        scanf("%d", &num_lines);
        getchar();

        int mem_base = 0;
        int mem_alegria = 0;
        int mem_esqc = 0;
        char projetos[6][255] = {
            "bxcomp",
            "competec",
            "fala, coruja",
            "owlficinas",
            "grace",
            "coruja informa"};

        for (int i = 0; i < num_lines; i++)
        {
            char str[255];
            // OBS: fgets pega '\n' como caractere, então strlen(str) é 1 a mais que o esperado
            fgets(str, sizeof(str), stdin);

            bool mem_encontrada = false;

            // verificando memória de alegria
            for (int j = 0; j < (int)(sizeof(projetos) / sizeof(projetos[0])); j++)
            {
                if (verifyMem(str, projetos[j]))
                {
                    mem_alegria++;
                    // printf("%s em alegria\n", str);
                    mem_encontrada = true;
                    break;
                }
            }

            // verificando memória base
            if (verifyMem(str, "pet"))
            {
                mem_encontrada = true;
                mem_base++;
                // printf("%s em base\n", str);
            }

            // verificando memória de esquecimento
            if (!mem_encontrada)
            {
                // printf("%s em esquecimento\n", str);
                mem_esqc++;
            }
        }

        if (mem_base + mem_alegria > mem_esqc)
            printf("O PET eh extraordinario e soh tem projetos admiraveis!!!");
        else if (mem_base + mem_alegria == mem_esqc)
            printf("Nao esta facil, mas pelo menos temos o PET!");
        else
            printf("Acho que falta um pouco de PET na minha vida...");

        printf(" Eu tenho %d memorias base, %d memorias de alegria e %d no esquecimento\n", mem_base, mem_alegria, mem_esqc);
    }
}
