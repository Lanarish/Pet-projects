import { Duel } from './Duel';
import { Hero } from './Hero';
import { HeroPairs } from './HeroPairs';
import { Logger } from './Logger';

export class Round {
  private winnersList: Hero[] = [];
  private logger: Logger;
  private roundNumber: number;
  constructor(roundNumber: number, logger: Logger) {
    this.logger = logger;
    this.roundNumber = roundNumber;
  }

  constructor(roundNumber: number, logger: Logger) {
    this.logger = logger;
    this.roundNumber = roundNumber;
  }
  runRound(pairsArray: HeroPairs[]) {
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
