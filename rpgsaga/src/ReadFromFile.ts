import { Knight } from './Heroes/Knight';
import { Wizard } from './Heroes/Wizard';
import { Logger } from './Logger';
import hero1 from './resourses/hero1.json';
// import hero2 from './resourses/hero2.json';

export class ReadFromFile {
  logger = new Logger();
  makeList() {
    // const arr = [];
    // arr.push(hero1);
    // arr.push(hero2);
    // console.log(arr);
    const arr2 = hero1.map(elem => {
      const { type, firstName, lastName, power, health } = elem;
      switch (type) {
        case 'Knight':
          return new Knight(type, firstName, lastName, power, health, this.logger);
          break;
        case 'Wizard':
          return new Wizard(type, firstName, lastName, power, health, this.logger);
          break;
      }
    });
    console.log(arr2);
    return arr2;
  }
}
