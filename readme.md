<h1>Projeto: Mario Kart.JS (Node.js)</h1>

  <table>
        <tr>
            <td>
                <img src="./docs/header.gif" alt="Mario Kart" width="200">
            </td>
            <td>
                <b>Objetivo:</b>
                <p>Mario Kart é uma série de jogos de corrida desenvolvida e publicada pela Nintendo. Nosso desafio será criar uma lógica de um jogo de vídeo game para simular corridas de Mario Kart, levando em consideração as regras e mecânicas abaixo.</p>
            </td>
        </tr>
    </table>

<h2>Players</h2>
      <table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Mario</p>
                <img src="./docs/mario.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 4</p>
                <p>Manobrabilidade: 3</p>
                <p>Poder: 3</p>
            </td>
             <td style="border: 1px solid black; text-align: center;">
                <p>Peach</p>
                <img src="./docs/peach.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 2</p>
            </td>
              <td style="border: 1px solid black; text-align: center;">
                <p>Yoshi</p>
                <img src="./docs/yoshi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 2</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 3</p>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Bowser</p>
                <img src="./docs/bowser.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 5</p>
                <p>Manobrabilidade: 2</p>
                <p>Poder: 5</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Luigi</p>
                <img src="./docs/luigi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 4</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Donkey Kong</p>
                <img src="./docs/dk.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 2</p>
                <p>Manobrabilidade: 2</p>
                <p>Poder: 5</p>
            </td>
        </tr>
    </table>

<p></p>

<h3>🕹️ Regras & mecânicas:</h3>

<b>Jogadores:</b>

<input type="checkbox" id="jogadores-item" />
<label for="jogadores-item">O Computador deve receber dois personagens para disputar a corrida em um objeto cada</label>

<b>Pistas:</b>

<ul>
  <li><input type="checkbox" id="pistas-1-item" /> <label for="pistas-1-item">Os personagens irão correr em uma pista aleatória de 5 rodadas</label></li>
  <li><input type="checkbox" id="pistas-2-item" /> <label for="pistas-2-item">A cada rodada, será sorteado um bloco da pista que pode ser uma reta, curva ou confronto</label>
    <ul>
      <li><input type="checkbox" id="pistas-2-1-item" /> <label for="pistas-2-1-item">Caso o bloco da pista seja uma RETA, o jogador deve jogar um dado de 6 lados e somar o atributo VELOCIDADE, quem vencer ganha um ponto</label></li>
      <li><input type="checkbox" id="pistas-2-2-item" /> <label for="pistas-2-2-item">Caso o bloco da pista seja uma CURVA, o jogador deve jogar um dado de 6 lados e somar o atributo MANOBRABILIDADE, quem vencer ganha um ponto</label></li>
      <li><input type="checkbox" id="pistas-2-3-item" /> <label for="pistas-2-3-item">Caso o bloco da pista seja um CONFRONTO, o jogador deve jogar um dado de 6 lados e somar o atributo PODER, quem perder, perde um ponto</label></li>
      <li><input type="checkbox" id="pistas-2-3-item" /> <label for="pistas-2-3-item">Nenhum jogador pode ter pontuação negativa (valores abaixo de 0)</label></li>
    </ul>
  </li>
</ul>

<b>Condição de vitória:</b>

<input type="checkbox" id="vitoria-item" />
<label for="vitoria-item">Ao final, vence quem acumulou mais pontos</label>

## Instalação

Para instalar o projeto, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/danilosantos-git/mario-kart-node.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd mario-kart-node
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Execução

Para executar o jogo, utilize o seguinte comando:

```bash
   node src/index.js
```

## Como Jogar

Para jogar Mario Kart.JS, você deve seguir os passos abaixo:

1. **Configuração dos Jogadores**:

   - No arquivo `src/index.js`, você pode definir os jogadores que irão competir. Cada jogador é representado por um objeto que contém as seguintes propriedades:
     - `nome`: Nome do personagem.
     - `velocidade`: Atributo que determina a velocidade do personagem.
     - `manobrabilidade`: Atributo que determina a habilidade de manobrar em curvas.
     - `poder`: Atributo que determina a força em confrontos.
     - `pontos`: Inicialmente definido como 0, representa os pontos acumulados durante a corrida.

   Exemplo de configuração de jogadores:

   ```javascript
   const player1 = {
     nome: "Mario",
     velocidade: 4,
     manobrabilidade: 3,
     poder: 3,
     pontos: 0,
   };

   const player2 = {
     nome: "Luigi",
     velocidade: 3,
     manobrabilidade: 4,
     poder: 4,
     pontos: 0,
   };
   ```

2. **Iniciar a Corrida**:

   - Após definir os jogadores, você pode iniciar a corrida chamando a função `playRaceEngine` com os dois jogadores como argumentos. Por exemplo:

   ```javascript
   await playRaceEngine(player1, player2);
   ```

3. **Objetivo do Jogo**:

   - O objetivo é acumular o maior número de pontos ao final de 5 rodadas. Os pontos são ganhos em retas e curvas, e podem ser perdidos em confrontos.

4. **Resultado**:
   - Ao final da corrida, a função `declareWinner` será chamada para mostrar o resultado e declarar o vencedor.

## Funções Principais

### 1. `playRaceEngine`

- **Localização**: A função `playRaceEngine` está definida no arquivo `src/index.js`.
- **Descrição**: Esta função é responsável por gerenciar a lógica da corrida entre dois personagens. Ela simula 5 rodadas de corrida, onde os jogadores competem em diferentes blocos da pista (reta, curva ou confronto).
- **Parâmetros**:
  - `character1`: O primeiro personagem que irá competir.
  - `character2`: O segundo personagem que irá competir.

**Exemplo de uso**:

```javascript
await playRaceEngine(player1, player2);
```

### 2. `declareWinner`

- **Localização**: A função `declareWinner` também está definida no arquivo `src/index.js`.
- **Descrição**: Esta função é chamada após a corrida para declarar o vencedor com base nos pontos acumulados pelos personagens.
- **Parâmetros**:
  - `character1`: O primeiro personagem que participou da corrida.
  - `character2`: O segundo personagem que participou da corrida.

**Exemplo de uso**:

```javascript
await declareWinner(player1, player2);
```

Siga essas instruções para configurar e jogar o Mario Kart.JS!
