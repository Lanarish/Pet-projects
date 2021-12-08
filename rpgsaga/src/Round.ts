import { Game } from './Game';
import { Duel } from './Duel';

const duel = new Duel();
const game = new Game();

export class Round {
  numberOfRound: number;
  winnersList: [string];
  heroOneUsedBoosts: [string];
  heroTwoUsedBoosts: [string];
  newPairs: [number, number][];

  startRound(pairsArray: [number, number][]) {
    for (let i = 0; ; i++) {
      if (pairsArray[0] !== undefined) {
        duel.startDuel(pairsArray[0]);
        pairsArray.splice(0, 1);
        continue;
      } else {
        break;
      }
    }

    if (game.heroList.length === 1) {
      game.gameOver;
    }
  }
}
