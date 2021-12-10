import { Hero } from './Hero';
import { HeroPairs } from './HeroPairs';
import { Logger } from './Logger';

export class Generator {
  arrayOfHeroes: string[] = ['Witcher', 'Archer', 'Knight'];
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
  arrayOfPower: number[] = [4, 5, 8, 6, 9, 3, 7];
  arrayOfHealth: number[] = [100, 90, 80, 70, 95, 85, 75];
  heroList: Hero[] = [];
  pairsArray: [number, number][] = [];
  logger: Logger = new Logger();

  initHero(totalAmountOfHeroes: number) {
    for (let i = 0; i < totalAmountOfHeroes; i++) {
      this.initRandomTypes();
      const name = this.initRandomHeroProperties(this.arrayOfNames);
      const power = this.initRandomHeroProperties(this.arrayOfPower);
      const health = this.initRandomHeroProperties(this.arrayOfHealth);
      const newHero: Hero = new Hero({ name, power, health });
      this.heroList.push(newHero);
    }
    // console.log(this.heroList);
    return this.heroList;
  }

  initRandomTypes() {
    const heroType: string = this.arrayOfHeroes[Math.floor(Math.random() * this.arrayOfHeroes.length)];
    return heroType;
  }

  initRandomHeroProperties(array: Array<string | number>): string | number {
    return array[Math.floor(Math.random() * array.length)];
  }

  makePairs(totalAmountOfHeroes: number) {
    const totalArray: number[] = new Array(totalAmountOfHeroes).fill(1);

    for (let i = 0; i < totalArray.length / 2; i++) {
      const randomHeroOne: number = Math.floor(Math.random() * totalArray.length);
      if (totalArray[randomHeroOne] === 0) {
        i--;
        continue;
      }
      const randomHeroTwo: number = Math.floor(Math.random() * totalArray.length);
      if (totalArray[randomHeroTwo] === 0) {
        i--;
        continue;
      }

      if (randomHeroOne !== randomHeroTwo) {
        totalArray.splice(randomHeroOne, 1, 0);
        totalArray.splice(randomHeroTwo, 1, 0);
        this.pairsArray.push([randomHeroOne, randomHeroTwo]);
      } else {
        i--;
        continue;
      }
    }
    return this.pairsArray;
  }

  newHeroArray(): HeroPairs[] {
    const newHeroArray: HeroPairs[] = [];

    for (let i = 0; i < this.pairsArray.length; i++) {
      const array: HeroPairs = new HeroPairs();
      for (let k = 0; k < this.pairsArray[i].length; k++) {
        for (let j = 0; j < this.heroList.length; j++) {
          if (this.pairsArray[i][k] === j) {
            if (k === 0) {
              array.firstHero = this.heroList[j];
            } else {
              array.secondHero = this.heroList[j];
            }
          }
        }
      }
      newHeroArray.push(array);
    }
    this.logger.info(newHeroArray);
    return newHeroArray;
  }
}
