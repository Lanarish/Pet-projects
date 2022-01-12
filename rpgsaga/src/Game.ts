// import prompts = require('prompts');

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
  private totalAmountOfHeroes = 8;

  constructor() {
    this.logger = new Logger();
    this.heroList = [];
    this.pairsArray = [];
    this.random = new Generator(this.logger);
  }

  async run() {
    // await this.prompt();
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

  //   async prompt() {
  //     const question = [
  //       {
  //         type: 'number',
  //         name: 'value',
  //         message: 'Please, enter a number of players in power 2',
  //       },
  //     ];
  //     try {
  //       const response = await prompts(question);
  //       if (response.value < 2) {
  //         throw new Error('Error1');
  //       }
  //       if ((response.value & (response.value - 1)) !== 0) {
  //         throw new Error('Error2');
  //       }

  //       this.totalAmountOfHeroes = response.value;
  //     } catch (error) {
  //       if (error.message === 'Error2') {
  //         this.logger.error2();
  //       }
  //       if (error.message === 'Error1') {
  //         this.logger.error1();
  //       }
  //       await this.prompt();
  //     }
  //   }
  initHero() {
    this.heroList = this.random.initHero(this.totalAmountOfHeroes);
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
