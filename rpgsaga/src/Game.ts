import { Hero } from './Hero';
import { Generator } from './Generator';
import { HeroPairs } from './HeroPairs';
import { Round } from './Round';
import { Logger } from './Logger';

export class Game {
  heroList: Hero[];
  pairsArray: HeroPairs[] = [];
  random: Generator = new Generator();
  round: Round = new Round();
  logger: Logger = new Logger();
  totalAmountOfHeroes = 8;
  run() {
    this.initHero();
    this.populate();
  }

  initHero() {
    this.heroList = this.random.initHero(this.totalAmountOfHeroes);
  }

  private populate() {
    this.pairsArray = this.random.makePairs(this.heroList);
    this.round.runRound(this.pairsArray);
  }
}
