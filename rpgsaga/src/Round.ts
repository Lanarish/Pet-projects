import { Duel } from './Duel';
import { Hero } from './Hero';
import { HeroPairs } from './HeroPairs';
import { Logger } from './Logger';

export class Round {
  private numberOfRound: number;
  private winnersList: Hero[] = [];
  private logger: Logger = new Logger();
  private duel: Duel = new Duel();

  runRound(pairsArray: HeroPairs[]) {
    this.logger.infoAboutPairs(pairsArray);
    pairsArray.forEach(pair => {
      const winnerHero = this.duel.startDuel(pair);
      this.winnersList.push(winnerHero);
    });
    return this.winnersList;
  }
}
