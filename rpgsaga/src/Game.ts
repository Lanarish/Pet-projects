import prompts = require('prompts');

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
  private totalAmountOfHeroes;

  constructor() {
    this.logger = new Logger();
    this.heroList = [];
    this.pairsArray = [];
    this.random = new Generator(this.logger);
  }

  async run() {
    await this.prompt();
    let i = 0;
    this.logger.startGame();
    this.initHero();
    while (this.heroList.length > 1) {
      this.populate();
      this.makeRound(i);
      i++;
    }
    this.gameEnd();
    // run() {
    //     const questions = [
    //       {
    //         type: 'number',
    //         name: 'value',
    //         message: 'Please, enter a number of players',
    //       },
    //     ];
    //     (async () => {
    //       const response = await prompts(questions);
    //       this.totalAmountOfHeroes = response.value;
    //       console.log(this.totalAmountOfHeroes);
    //       let i = 0;
    //       this.logger.startGame();
    //       this.initHero();
    //       while (this.heroList.length > 1) {
    //         this.populate();
    //         this.makeRound(i);
    //         i++;
    //       }
    //       this.gameEnd();
    //     })();
    // let i = 0;
    // this.logger.startGame();
    // this.initHero();
    // while (this.heroList.length > 1) {
    //   this.populate();
    //   this.makeRound(i);
    //   i++;
    // }
    // this.gameEnd();
  }

  async prompt() {
    const questions = [
      {
        type: 'number',
        name: 'value',
        message: 'Please, enter a number of players',
      },
    ];
    try {
      const response = await prompts(questions);
      if (response.value < 2) {
        throw new Error('Error2');
      }
      if ((response.value & (response.value - 1)) !== 0) {
        throw new Error('Error1');
      }

      this.totalAmountOfHeroes = response.value;
      console.log(this.totalAmountOfHeroes);
    } catch (error) {
      if (error.message === 'Error1') {
        console.error('POWER 2');
      }
      if (error.message === 'Error2') {
        console.error('More than 2');
      }
      console.error('ERROR');
      await this.prompt();
    }
  }
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
