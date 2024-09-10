<div align="center">
    
<img src="./public/logoBxcomp.svg" alt="retro_music" width="700">

<h1> Site do BXCOMP 2024 </h1>

[![GitHub stars](https://img.shields.io/github/stars/petsi-each/bxcomp2024-site?color=yellow)]()
[![GitHub forks](https://img.shields.io/github/forks/petsi-each/bxcomp2024-site?color=orange)]()


O **BXComp** é o tradicional Campeonato de Programação para Calouros do Curso de Sistemas de Informação da EACH-USP organizado pelo **PET-SI** (Programa de Educação Tutorial). Em 2024, o BXCOMP está em sua 14ª edição com o tema de Desenhos e Animações!


</div>


<br/><br/>


## 🖱️ Tecnologias

<div align="center">

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

</div>
<br/><br/>


## 🖌️ Design

<div align="center">
    
[![View on Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/file/Bn1XePEk91ujLn8tDD1Am1?embed_host=share&kind=file&node-id=962-78&t=luFv4tCfbkNMMZ8i-1&viewer=1)

</div>

<br/><br/>

## 🚀 Inicie com o projeto

### 📦 Instalação

### ⚙️ Rodar

### 📓 Gerenciar informações


<br/><br/>

## 🫂 Contribuidores

<a href = "https://github.com/petsi-each/bxcomp2024-site/contributors">
  <img src = "https://contrib.rocks/image?repo=petsi-each/bxcomp2024-site"/>
</a>


<!--

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

    Além disso, cada desafio referencia o ```path``` para três arquivos: enunciado, resolução e casos de testes. Esses arquivos devem ser armazenados em ```public/{etapa}/{desafio}``` (criar pastas para cada etapa e desafio).

* **Regulamento**

    Por fim, o regulamento e o suas última atualizações são armazenadas em ```regulamento.json```.

### Durante o campeonato

Entre as etapas, as seguintes atualizações são necessárias:

* **Liberar a etapa:**

    Tanto em ```landingpage.json``` quando em ```etapaDesafios.json```, alterar o campo ```visivel``` da etapa concluída de ```false``` para ```true```.

    **OBS:** No primeiro, conferir se o ```link``` para a página da etapa foi atribuído corretamente.

* **Contabilizar a pontuação:**

    Os pontos das equipes são armazenados em um array ```pontos``` onde o índice é o número da etapa.

    Em ```landingpage.json```, colocar a quantidade de pontos da equipe na respectiva posição do seu array de pontos. Não esquecer de adicionar ```0``` para as equipes que tiveram menos que 2 (dois) dos membros chegando antes do horário limite.

    **Ex.:** Essa equipe fez 1 ponto na etapa 0, 6 na etapa 1 e 2 na etapa 2.
  
    ![image](https://github.com/user-attachments/assets/3defdba2-b556-4635-b118-41c5c13ee43d)
-->