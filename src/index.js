import { player1, player2 } from './characters/characters.js';
import { playRaceEngine, declareWinner } from './game/index.js';

(async function main() {
    console.log(`🟢 Corrida entre ${player1.nome} e ${player2.nome} começando... \n`);

    await playRaceEngine(player1, player2);

    await declareWinner(player1, player2);
})();