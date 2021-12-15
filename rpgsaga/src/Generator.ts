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
  ];
  arrayOfLastNames: string[] = ['Bolton', 'Prier', 'Jonson', 'Jackson', 'Bushe'];
  arrayOfPower: number[] = [34, 35, 38, 46, 39, 53, 27];
  arrayOfHealth: number[] = [100, 90, 80, 70, 95, 85, 75];

  initHero(totalAmountOfHeroes: number) {
    const heroList: Hero[] = [];

    for (let i = 0; i < totalAmountOfHeroes; i++) {
      const name = this.initRandomHeroProperties(this.arrayOfNames);
      const lastName = this.initRandomHeroProperties(this.arrayOfLastNames);
      const power = this.initRandomHeroProperties(this.arrayOfPower);
      const health = this.initRandomHeroProperties(this.arrayOfHealth);
      const newHero = this.initHeroType(name.toString(), lastName.toString(), Number(power), health);

      heroList.push(newHero);
    }
    return heroList;
  }
  initHeroType(name: string, lastName: string, power: number, health: number | string) {
    let completeHero: Hero;
    switch (this.initRandomHeroProperties(this.arrayOfHeroes)) {
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

  initRandomHeroProperties(array: Array<string | number>): string | number {
    return array[Math.floor(Math.random() * array.length)];
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
