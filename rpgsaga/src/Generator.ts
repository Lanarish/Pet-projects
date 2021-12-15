import { Hero } from './Hero';
import { HeroPairs } from './HeroPairs';
import { Archer } from './Heroes/Archer';
import { Knight } from './Heroes/Knight';
import { Wizard } from './Heroes/Wizard';

export class Generator {
  arrayOfHeroes: string[] = ['Wizard', 'Archer', 'Knight'];
  arrayOfNames: string[] = [
    'Tom',
    'Bot',
    'Thor',
    'Artur',
    'Igor',
    'Jane',
    'Paul',
    'Travis',
    'Troy',
    'Mike',
    'Denis',
    'Kir',
    'Geralt',
    'Walt',
    'Sander',
  ];
  arrayOfLastNames: string[] = ['Bolton', 'Prier', 'Jonson', 'Jackson', 'Bushe', 'Gramm', 'Tomme', 'Tudor'];

  initHero(totalAmountOfHeroes: number) {
    const heroList: Hero[] = [];

    for (let i = 0; i < totalAmountOfHeroes; i++) {
      const name: string = this.initRandomHeroName();
      const lastName: string = this.initRandomHeroLastName();
      const power: number = this.initRandomHeroPower();
      const health: number = this.initRandomHeroHealth();
      const newHero = this.initHeroType(name, lastName, power, health);

      heroList.push(newHero);
    }
    return heroList;
  }
  initHeroType(name: string, lastName: string, power: number, health: number) {
    let completeHero: Hero;
    switch (this.initRandomHeroType()) {
      case 'Wizard':
        completeHero = new Wizard(name, lastName, power, health);
        break;
      case 'Archer':
        completeHero = new Archer(name, lastName, power, health);
        break;
      case 'Knight':
        completeHero = new Knight(name, lastName, power, health);
        break;
    }

    return completeHero;
  }
  initRandomHeroType() {
    return this.arrayOfHeroes[Math.floor(Math.random() * this.arrayOfHeroes.length)];
  }
  initRandomHeroName() {
    return this.arrayOfNames[Math.floor(Math.random() * this.arrayOfNames.length)];
  }
  initRandomHeroLastName() {
    return this.arrayOfLastNames[Math.floor(Math.random() * this.arrayOfLastNames.length)];
  }
  initRandomHeroPower() {
    return Math.floor(Math.random() * 20) + 15;
  }
  initRandomHeroHealth() {
    return Math.floor(Math.random() * 31) + 70;
  }

  makePairs(heroList): HeroPairs[] {
    const pairsArray: HeroPairs[] = [];
    const totalArray: number[] = new Array(heroList.length).fill(1);

    for (let i = 0; i < totalArray.length / 2; i++) {
      const randomHeroOne: number = this.mathRandom(totalArray);
      if (totalArray[randomHeroOne] === 0) {
        i--;
        continue;
      }
      const randomHeroTwo: number = this.mathRandom(totalArray);
      if (totalArray[randomHeroTwo] === 0) {
        i--;
        continue;
      }

      if (randomHeroOne !== randomHeroTwo) {
        const newPair = new HeroPairs(heroList[randomHeroOne], heroList[randomHeroTwo]);
        pairsArray.push(newPair);
        totalArray[randomHeroOne] = 0;
        totalArray[randomHeroTwo] = 0;
      } else {
        i--;
        continue;
      }
    }
    return pairsArray;
  }
  mathRandom(array: number[]): number {
    return Math.floor(Math.random() * array.length);
  }
}
