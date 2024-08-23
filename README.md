# Site do BXCOMP 2024

## Como rodar

1) Tenha as seguintes dependências:

* Node.js
* npm
* Next.js
* git (instalado e configurado com uma conta com acesso à organização do PET)

2) Clone o repositório
    ```
    git clone git@github.com:petsi-each/bxcomp2024.git
    ```

3) Vá para a raíz do repositório

    ```
    cd bxcomp2024/
    ```

4) Instale as dependências do projeto (só é necessário uma vez ou quando adicionarem um pacote novo)

    ```
    npm i
    ```

5) Rode o projeto next

    ```
    npm run dev
    ```

6) Entre no link mencionado no output, geralmente será http://localhost:3000/

## Como gerenciar e atualizar informações

Todas as informações relativas aos times estão armazenadas em arquivos JSON em ```src/data``` que, por sua vez, são consumidos pelos respectivos componentes. Em outras palavras, atualizaões no JSON se propagam para o resto do site.

### Informações armazenadas

* **Etapas**

    As etapas são armazenadas em um vetor chamado ```etapas``` em ```landingpage.json```.

* **Equipes**

    Também em uma array homônimo em ```landingpage.json```.

* **Desafios**

    Em ```etapasDesafios.json```, há um array que determina quais desafios pertencem a qual etapa e as suas informações. 

* **Regulamento**

    Por fim, o regulamento e o suas última atualizações são armazenadas em ```regulamento.json```.

### Durante o campeonato

Entre as etapas, as seguintes atualizações são necessárias:

* **Liberar a etapa:**

    Em ```landingpage.json```, no array ```etapas```, alterar o campo ```visivel``` da etapa concluída de ```false``` para ```true```.

    **OBS:** Conferir se o ```link``` para a página da etapa foi atribuído corretamente.

* **Contabilizar a pontuação:**

    Os pontos das equipes são armazenados em um array ```pontos``` onde o índice é o número da etapa.

    Em ```landingpage.json```, colocar a quantidade de pontos da equipe na respectiva posição do seu array de pontos. Não esquecer de adicionar ```0``` para as equipes que tiveram menos que 2 (dois) dos membros chegando antes do horário limite.

    **Ex.:** Essa equipe fez 1 ponto na etapa 0, 6 na etapa 1 e 2 na etapa 2.
  
    ![image](https://github.com/user-attachments/assets/3defdba2-b556-4635-b118-41c5c13ee43d)
