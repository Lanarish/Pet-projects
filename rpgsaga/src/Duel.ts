import { Logger } from './Logger';

export class Duel {
  logger: Logger = new Logger();
  startDuel(pairsArray) {
    const turn: number = this.whoIsFirst(pairsArray);
    let a: number, b: number;
    if (turn === 0) {
      a = 0;
      b = 1;
      console.log(`${pairsArray[a].name} attacks first`);
    } else {
      a = 1;
      b = 0;
      console.log(`${pairsArray[a].name} attacks first`);
    }
    for (; pairsArray[0].health > 0 && pairsArray[1].health > 0; ) {
      if (a === 0) {
        this.fight(a, b, pairsArray);
        if (pairsArray[b].health <= 0) {
          this.logger.stopDuel(pairsArray, a);
          return pairsArray[a];
        }
        this.fight(b, a, pairsArray);
        if (pairsArray[a].health <= 0) {
          this.logger.stopDuel(pairsArray, b);
          return pairsArray[b];
        }
      } else {
        this.fight(a, b, pairsArray);
        if (pairsArray[b].health <= 0) {
          this.logger.stopDuel(pairsArray, a);
          return pairsArray[a];
        }
        this.fight(b, a, pairsArray);
        if (pairsArray[a].health <= 0) {
          this.logger.stopDuel(pairsArray, b);
          return pairsArray[b];
        }
      }
    }
  }
  whoIsFirst(pairsArray) {
    const firstTurn: number = Math.floor(Math.random() * pairsArray.length);
    return firstTurn;
  }
  fight(a: number, b: number, pairsArray) {
    pairsArray[b].health -= pairsArray[a].power;
    this.logger.game(a, b, pairsArray);
  }
}
