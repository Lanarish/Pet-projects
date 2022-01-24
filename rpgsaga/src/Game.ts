import prompts = require('prompts');

import { Hero } from './Hero';
import { Generator } from './Generator';
import { Round } from './Round';
import { Logger } from './Logger';
import { Pair } from './Pair';
import { WorkWithFile } from './WorkWithFile';

export class Game {
  private heroList: Hero[];
  private pairsArray: Pair<Hero>[];
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
    const isGenerate = await this.promptChoose();
    if (isGenerate) {
      await this.prompt();
    }
    let i = 0;
    this.logger.startGame();
    this.initHero(isGenerate);
    while (this.heroList.length > 1) {
      this.populate();
      this.makeRound(i);
      i++;
    }
    this.gameEnd();
  }
  async promptChoose() {
    const question = [
      {
        type: 'select',
        name: 'value',
        message: 'Please,choose game play',
        choices: [
          { title: 'Read from file', value: false },
          { title: 'Random generate', value: true },
        ],
        initial: 1,
      },
    ];
    const response = await prompts(question);
    return response.value;
  }

  async prompt() {
    const question = [
      {
        type: 'text',
        name: 'value',
        message: 'Please, enter a number of players in power 2',
      },
    ];
    while (!this.totalAmountOfHeroes) {
      try {
        const response = await prompts(question);

        if (Number(response.value) < 2) {
          throw new Error('ErrorLess0');
        }
        if (!/^\d+$/.test(response.value)) {
          throw new Error('ErrorString');
        }
        if ((response.value & (response.value - 1)) !== 0) {
          throw new Error('ErrorInvalidNumber');
        }
        this.totalAmountOfHeroes = Number(response.value);
      } catch (error) {
        switch (error.message) {
          case 'ErrorInvalidNumber':
            this.logger.error('Please, just numbers in power 2(e.g. 4, 8, 16, 32...)');
            break;
          case 'ErrorLess0':
            this.logger.error('The number should be more than 2');
            break;
          case 'ErrorString':
            this.logger.error('Please use just numbers!');
            break;
          default:
            this.logger.error(error.message || error);
            break;
        }
      }
    }
  }
  initHero(isGenerate: boolean) {
    if (!isGenerate) {
      this.heroList = WorkWithFile.readFromFile('./resourses/readyHeroList.json', this.logger);
      return;
    }
    this.heroList = this.random.initHero(this.totalAmountOfHeroes);
    WorkWithFile.outputFile('./resourses/heroList.json', this.heroList, this.logger);
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
