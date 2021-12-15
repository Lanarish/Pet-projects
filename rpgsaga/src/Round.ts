import { Duel } from './Duel';
import { HeroPairs } from './HeroPairs';
import { Logger } from './Logger';

const duel = new Duel();
export class Round {
  numberOfRound: number;
  winnersList: string[];
  logger: Logger = new Logger();
  startRound(pairsArray: HeroPairs[]) {
    this.logger.info(pairsArray);
    pairsArray.forEach(pair => duel.startDuel(pair));
  }
}
