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
  private totalAmountOfHeroes: number;

  constructor() {
    this.logger = new Logger();
    this.heroList = [];
    this.pairsArray = [];
    this.random = new Generator(this.logger);
  }

  async run() {
    const isGenerate = await this.promptChoose();
    let i = 0;
    await this.initHero(isGenerate);
    this.logger.info(`Start game!`);
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
  async promptFile() {
    const question = [
      {
        type: 'text',
        name: 'value',
        message: 'Please, enter path of file',
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
        this.logger.info(`The number of heroes for game is ${this.totalAmountOfHeroes}`);
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
  async initHero(isGenerate: boolean) {
    if (!isGenerate) {
      const path = await this.promptFile();
      this.heroList = WorkWithFile.readFromFile(path, this.logger);
      return;
    }
    await this.prompt();
    this.heroList = this.random.initHero(this.totalAmountOfHeroes);
    WorkWithFile.outputFile('./resourses/heroList.json', this.heroList, this.logger);
  }

  private populate() {
    this.pairsArray = this.random.makePairs(this.heroList);
  }
  private makeRound(i: number) {
    const round: Round = new Round(i, this.logger);
    this.heroList = round.runRound(this.pairsArray);
    this.logger.info(`ROUND END!`);
    this.heroList.forEach((hero: Hero) => {
      hero.restoreHealth();
    });
  }

  private gameEnd() {
    console.log(` -------------------------------
     Game successfully over!`);
    this.logger.info(`THE WINNER OF THE GAME IS ${this.heroList[0].toString()}! CONGRATULATIONS!!!`);
  }
}
