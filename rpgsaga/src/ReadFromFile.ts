import { Archer } from './Heroes/Archer';
import { Farmer } from './Heroes/Farmer';
import { Knight } from './Heroes/Knight';
import { Wizard } from './Heroes/Wizard';
import { Logger } from './Logger';
import readyHeroList from './resourses/readyHeroList.json';

export class ReadFromFile {
  private logger: Logger;
  constructor(logger: Logger) {
    this.logger = logger;
  }

  makeList() {
    const arrayOfHeroes = readyHeroList.map(elem => {
      const { type, firstName, lastName, power, health } = elem;
      switch (type) {
        case 'Knight':
          return new Knight(type, firstName, lastName, power, health, this.logger);
          break;
        case 'Wizard':
          return new Wizard(type, firstName, lastName, power, health, this.logger);
          break;
        case 'Archer':
          return new Archer(type, firstName, lastName, power, health, this.logger);
          break;
        case 'Farmer':
          return new Farmer(type, firstName, lastName, power, health);
          break;
      }
    });
    return arrayOfHeroes;
  }
}
