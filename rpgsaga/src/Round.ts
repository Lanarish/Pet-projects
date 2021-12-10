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

  startRound(newHeroArray: object[]) {
    for (let i = 0; ; i++) {
      // forEach
      if (newHeroArray[0]) {
        duel.startDuel(newHeroArray[0]);
        newHeroArray.splice(0, 1);
        continue;
      } else {
        break;
      }
      console.log(newHeroArray);
    }

    if (game.heroList.length === 1) {
      game.gameOver;
    }
  }
}
