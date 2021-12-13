import { Duel } from './Duel';
import { Hero } from './Hero';

const duel = new Duel();
export class Round {
  numberOfRound: number;
  winnersList: [string];
  heroOneUsedBoosts: [string];
  heroTwoUsedBoosts: [string];
  newPairs: [number, number][];

  startRound(pairsArray: [Hero, Hero][]) {
    for (let i = 0; ; i++) {
      // forEach
      if (pairsArray[0]) {
        duel.startDuel(pairsArray[0]);
        pairsArray.splice(0, 1);
        continue;
      } else {
        break;
      }
    }

    // if (game.heroList.length === 1) {
    //   game.gameOver;
    // }
  }
}
