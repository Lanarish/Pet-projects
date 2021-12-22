import { Hero } from './Hero';
import { Generator } from './Generator';
import { HeroPairs } from './HeroPairs';
import { Round } from './Round';
import { Logger } from './Logger';

export class Game {
  private heroList: Hero[];
  private pairsArray: HeroPairs[] = [];
  private random: Generator = new Generator();
  private logger: Logger;
  private totalAmountOfHeroes = 8;

  constructor() {
    this.logger = new Logger();
  }
  run() {
    this.logger.startGame();
    this.initHero();
    for (let i = 0; this.heroList.length > 1; i++) {
      this.populate();
      this.makeRound(i);
    }
    this.gameEnd();
  }

  private initHero() {
    this.heroList = this.random.initHero(this.totalAmountOfHeroes);
  }
  private populate() {
    this.pairsArray = this.random.makePairs(this.heroList);
  }
  private makeRound(i: number) {
    const round: Round = new Round(i, this.logger);
    this.heroList = round.runRound(this.pairsArray);
  }
  private gameEnd() {
    this.logger.showWinnerList(this.heroList);
  }
}
