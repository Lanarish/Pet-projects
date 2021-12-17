import { Duel } from './Duel';
import { Hero } from './Hero';
import { HeroPairs } from './HeroPairs';
import { Logger } from './Logger';

export class Round {
  numberOfRound: number;
  winnersList: Hero[];
  logger: Logger = new Logger();
  duel: Duel = new Duel();

  runRound(pairsArray: HeroPairs[]) {
    this.duel.setWinnerList = [];
    this.logger.infoAboutPairs(pairsArray);
    pairsArray.forEach(pair => this.duel.startDuel(pair));
    this.winnersList = this.duel.setWinnerList;
    this.logger.showWinnerList(this.winnersList);
  }
}
