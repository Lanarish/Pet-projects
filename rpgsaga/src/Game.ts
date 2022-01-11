import { Hero } from './Hero';
import { Generator } from './Generator';
import { HeroPairs } from './HeroPairs';
import { Round } from './Round';
import { Logger } from './Logger';

export class Game {
  private heroList: Hero[];
  private pairsArray: HeroPairs[];
  private random: Generator;
  private logger: Logger;
  private totalAmountOfHeroes = 2;

  constructor() {
    this.logger = new Logger();
    this.heroList = [];
    this.pairsArray = [];
    this.random = new Generator(this.logger);
  }
  run() {
    let i = 0;
    this.logger.startGame();
    this.initHero();
    while (this.heroList.length > 1) {
      this.populate();
      this.makeRound(i);
      i++;
    }
    this.gameEnd();
  }

  initHero() {
    try {
      if (typeof this.totalAmountOfHeroes === 'string') {
        throw 'ErrorString';
      }
      if (this.totalAmountOfHeroes <= 0) {
        throw 'Error0';
      }
      if (this.totalAmountOfHeroes === 1) {
        throw 'Error1';
      }
      this.heroList = this.random.initHero(this.totalAmountOfHeroes);
    } catch (error) {
      if (error === 'Error0') {
        console.log('Number should be more than 0!');
      }
      if (error === 'Error1') {
        console.log('Please use minimum 2 players');
      }
      if (error === 'ErrorString') {
        console.log('Should use JUST NUMBERS!');
      }
    }
  }
  private populate() {
    this.pairsArray = this.random.makePairs(this.heroList);
  }
  private makeRound(i: number) {
    const round: Round = new Round(i, this.logger);
    this.heroList = round.runRound(this.pairsArray);
    this.heroList.forEach((hero: Hero) => {
      hero.restoreHealth();
    });
  }

  private gameEnd() {
    this.logger.showWinnerList(this.heroList);
  }
}
