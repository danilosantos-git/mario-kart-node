import { rollDice } from './dice.js';
import { getRandomBlock } from './blocks.js';
import { logRollResult } from '../utils/logger.js';

async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`🏎  Rodada ${round}`);

        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);

        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if (block === "reta") {
            totalTestSkill1 = diceResult1 + character1.velocidade;
            totalTestSkill2 = diceResult2 + character2.velocidade;

            await logRollResult(character1.nome, "velocidade", diceResult1, character1.velocidade);
            await logRollResult(character2.nome, "velocidade", diceResult2, character2.velocidade);
        }

        if (block === "curva") {
            totalTestSkill1 = diceResult1 + character1.manobrabilidade;
            totalTestSkill2 = diceResult2 + character2.manobrabilidade;

            await logRollResult(character1.nome, "manobrabilidade", diceResult1, character1.manobrabilidade);
            await logRollResult(character2.nome, "manobrabilidade", diceResult2, character2.manobrabilidade);
        }

        // Verificar o vencedor (reta ou curva)
        if (totalTestSkill1 > totalTestSkill2) {
            console.log(`${character1.nome} marcou um ponto! 🎉`);
            character1.pontos++;
        } else if (totalTestSkill1 < totalTestSkill2) {
            console.log(`${character2.nome} marcou um ponto! 🎉`);
            character2.pontos++;
        }

        if (block === "confronto") {
            let powerResult1 = diceResult1 + character1.poder;
            let powerResult2 = diceResult2 + character2.poder;

            console.log(`🥊 ${character1.nome} confrontou ${character2.nome} 🥊`);

            await logRollResult(character1.nome, "poder", diceResult1, character1.poder);
            await logRollResult(character2.nome, "poder", diceResult2, character2.poder);

            if (powerResult1 > powerResult2 && character2.pontos > 0) {
                console.log(`${character1.nome} venceu a batalha!🎯 ${character2.nome} perdeu um ponto.`);
                character2.pontos--;
            }

            if (powerResult2 > powerResult1 && character1.pontos > 0) {
                console.log(`${character2.nome} venceu a batalha!🎯 ${character1.nome} perdeu um ponto.`);
                character1.pontos--;
            }

            console.log(powerResult1 === powerResult2 ? `Empate! Nenhum ponto foi removido.` : ``);
        }

        console.log(`-----------------------------`);
    }
}

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
}

export { playRaceEngine, declareWinner };