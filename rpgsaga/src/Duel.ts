import { Hero } from './Hero';
import { HeroPairs } from './HeroPairs';
import { Logger } from './Logger';

export class Duel {
  logger: Logger = new Logger();
  startDuel(pairsArray: HeroPairs) {
    const turn: boolean = this.whoIsFirst();
    let a: number;
    if (turn === false) {
      a = 0;

      console.log(`${pairsArray.firstHero.name} attacks first`);
    } else {
      a = 1;

      console.log(`${pairsArray.secondHero.name} attacks first`);
    }
    while (pairsArray.firstHero.health > 0 && pairsArray.secondHero.health > 0) {
      if (a === 0) {
        this.fight(pairsArray.firstHero, pairsArray.secondHero);
        if (pairsArray.secondHero.health <= 0) {
          this.logger.stopDuel(pairsArray, pairsArray.firstHero);
          return pairsArray.firstHero;
        }
        this.fight(pairsArray.secondHero, pairsArray.firstHero);
        if (pairsArray.firstHero.health <= 0) {
          this.logger.stopDuel(pairsArray, pairsArray.secondHero);
          return pairsArray.secondHero;
        }
      } else {
        this.fight(pairsArray.secondHero, pairsArray.firstHero);
        if (pairsArray.firstHero.health <= 0) {
          this.logger.stopDuel(pairsArray, pairsArray.secondHero);
          return pairsArray.secondHero;
        }
        this.fight(pairsArray.firstHero, pairsArray.secondHero);
        if (pairsArray.secondHero.health <= 0) {
          this.logger.stopDuel(pairsArray, pairsArray.firstHero);
          return pairsArray.firstHero;
        }
      }
      //   if (a === 0) {
      //     this.fight(a, b, pairsArray);
      //     if (pairsArray[b].health <= 0) {
      //       this.logger.stopDuel(pairsArray, a);
      //       return pairsArray[a];
      //     }
      //     this.fight(b, a, pairsArray);
      //     if (pairsArray[a].health <= 0) {
      //       this.logger.stopDuel(pairsArray, b);
      //       return pairsArray[b];
      //     }
      //   } else {
      //     this.fight(a, b, pairsArray);
      //     if (pairsArray[b].health <= 0) {
      //       this.logger.stopDuel(pairsArray, a);
      //       return pairsArray[a];
      //     }
      //     this.fight(b, a, pairsArray);
      //     if (pairsArray[a].health <= 0) {
      //       this.logger.stopDuel(pairsArray, b);
      //       return pairsArray[b];
      //     }
      //   }
    }
  }
  whoIsFirst() {
    const firstTurn = Boolean(Math.floor(Math.random() * 2));
    return firstTurn;
  }
  fight(a: Hero, b: Hero) {
    b.health -= a.power;
    this.logger.game(a, b);
  }
}
