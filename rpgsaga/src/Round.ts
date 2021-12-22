import { Duel } from './Duel';
import { Hero } from './Hero';
import { HeroPairs } from './HeroPairs';
import { Logger } from './Logger';

export class Round {
  private numberOfRound: number;
  private winnersList: Hero[] = [];
  private logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
  }
  runRound(pairsArray: HeroPairs[]) {
    this.logger.infoAboutPairs(pairsArray);
    pairsArray.forEach(pair => {
      const duel: Duel = new Duel(pair, this.logger);
      const winnerHero = duel.startDuel();
      this.winnersList.push(winnerHero);
    });
    return this.winnersList;
  }
}
