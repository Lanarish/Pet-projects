import { Duel } from './Duel';
import { Hero } from './Hero';
import { Logger } from './Logger';
import { Pair } from './Pair';

export class Round {
  private winnersList: Array<Hero> = [];
  private logger: Logger;
  private roundNumber: number;
  constructor(roundNumber: number, logger: Logger) {
    this.logger = logger;
    this.roundNumber = roundNumber;
  }

  runRound(pairsArray: Pair<Hero>[]): Hero[] {
    if (!pairsArray) {
      return;
    }
    this.logger.info(`ROUND #${[this.roundNumber + 1]}`);
    this.logger.info(`ROUND START!`);
    pairsArray.forEach((pair, index) => {
      if (!pair?.first || !pair?.second) {
        return;
      }
      this.logger.info(
        `There are pairs of heroes:Pair №${index + 1} is ${pair.first.Type} ${pair.first.toString()}  vs ${
          pair.second.Type
        } ${pair.second.toString()}`,
      );
      const duel: Duel = new Duel(pair, this.logger);
      const winnerHero = duel.startDuel();
      this.winnersList.push(winnerHero);
    });

    return this.winnersList;
  }
}
