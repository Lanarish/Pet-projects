// import { Game } from './Game';
// import { Duel } from './Duel';
import { HeroPairs } from './HeroPairs';

// const duel = new Duel();
// const game = new Game();

export class Round {
  numberOfRound: number;
  winnersList: [string];
  heroOneUsedBoosts: [string];
  heroTwoUsedBoosts: [string];
  newPairs: [number, number][];

  startRound(newHeroArray: HeroPairs[]) {
    newHeroArray.forEach(elem => {
      if (elem[0]) {
        // duel.startDuel(elem[0]);
        newHeroArray.splice(0, 1);
        console.log('каждый элемент', elem[0]);
      }
    });
  }
}
