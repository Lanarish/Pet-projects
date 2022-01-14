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
    this.logger.roundNumber(this.roundNumber);
    this.logger.infoAboutPairs(pairsArray);
    pairsArray.forEach(pair => {
      const duel: Duel = new Duel(pair, this.logger);
      const winnerHero = duel.startDuel();
      this.winnersList.push(winnerHero);
    });

    return this.winnersList;
  }
}
