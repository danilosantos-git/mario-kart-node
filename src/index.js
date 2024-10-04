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

const player3 = {
    nome: "Peach",
    velocidade: 3,
    manobrabilidade: 4,
    poder: 2,
    pontos: 0,
};

const player4 = {
    nome: "Yoshi",
    velocidade: 2,
    manobrabilidade: 4,
    poder: 3,
    pontos: 0,
};

const player5 = {
    nome: "Bowser",
    velocidade: 5,
    manobrabilidade: 2,
    poder: 5,
    pontos: 0,
};

const player6 = {
    nome: "Donkey Kong",
    velocidade: 2,
    manobrabilidade: 2,
    poder: 5,
    pontos: 0,
};

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
};

async function getRandomBlock() {
    let randomBlock = Math.random();
    let result;

    switch (true) {
        case randomBlock < 0.33:
            result = "reta"
            break;

        case randomBlock < 0.66:
            result = "curva"
            break;

        default:
            result = "confronto"
    };

    return result;
};

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
};

async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`🏎  Rodada ${round}`);

        // Sortear os blocos da pista
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);

        // Rolar os dados
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        //  Teste de habilidade
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        let powerResult1 = 0;
        let powerResult2 = 0;

        if (block === "reta") {
            totalTestSkill1 = diceResult1 + character1.velocidade;
            totalTestSkill2 = diceResult2 + character2.velocidade;

            await logRollResult(character1.nome, "velocidade", diceResult1, character1.velocidade);

            await logRollResult(character2.nome, "velocidade", diceResult2, character2.velocidade);
        };

        if (block === "curva") {
            totalTestSkill1 = diceResult1 + character1.manobrabilidade;
            totalTestSkill2 = diceResult2 + character2.manobrabilidade;

            await logRollResult(character1.nome, "manobrabilidade", diceResult1, character1.manobrabilidade);

            await logRollResult(character2.nome, "manobrabilidade", diceResult2, character2.manobrabilidade);
        };

        // Verificar o vencedor (reta ou curva)
        if (totalTestSkill1 > totalTestSkill2) {
            console.log(`${character1.nome} marcou um ponto! 🎉`);
            character1.pontos++;
        } else if (totalTestSkill1 < totalTestSkill2) {
            console.log(`${character2.nome} marcou um ponto! 🎉`);
            character2.pontos++;
        };

        if (block === "confronto") {
            powerResult1 = diceResult1 + character1.poder;
            powerResult2 = diceResult2 + character2.poder;

            console.log(`🥊 ${character1.nome} confrontou ${character2.nome} 🥊`);

            await logRollResult(character1.nome, "poder", diceResult1, character1.poder);

            await logRollResult(character2.nome, "poder", diceResult2, character2.poder);

            if (powerResult1 > powerResult2 && character2.pontos > 0) {
                console.log(`${character1.nome} venceu a batalha!🎯 ${character2.nome} perdeu um ponto.`);
                character2.pontos--;
            };

            if (powerResult2 > powerResult1 && character1.pontos > 0) {
                console.log(`${character2.nome} venceu a batalha!🎯 ${character1.nome} perdeu um ponto.`);
                character1.pontos--;
            };

            // If Ternário (Operador Ternário)
            console.log(powerResult1 === powerResult2 ? `Empate! Nenhum ponto foi removido.` : ``);
        };

        console.log(`-----------------------------`);
    };
};

async function declareWinner(character1, character2) {
    console.log(`Resultado final:`);
    console.log(`${character1.nome}: ${character1.pontos} ponto(s)`);
    console.log(`${character2.nome}: ${character2.pontos} ponto(s)`);

    if (character1.pontos > character2.pontos) {
        console.log(`${character1.nome} é o(a) vencedor(a)! 🏆`);
    } else if (character2.pontos > character1.pontos) {
        console.log(`${character2.nome} é o(a) vencedor(a)! 🏆`);
    } else {
        console.log("Empate! Ninguém ganhou... 😢");
    }
};

(async function main() {
    console.log(`🟢 Corrida entre ${player1.nome} e ${player2.nome} começando... \n`);

    await playRaceEngine(player1, player2);

    await declareWinner(player1, player2);
})();