import { Duel } from './Duel';
import { HeroPairs } from './HeroPairs';
import { Logger } from './Logger';

export class Round {
  numberOfRound: number;
  logger: Logger = new Logger();
  duel: Duel = new Duel();

  runRound(pairsArray: HeroPairs[]) {
    this.logger.infoAboutPairs(pairsArray);
    pairsArray.forEach(pair => this.duel.startDuel(pair));
  }
}
