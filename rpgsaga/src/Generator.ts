import { Hero } from './Hero';
import { Round } from './Round';
import { Logger } from './Logger';
import { HeroPairs } from './HeroPairs';

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
  arrayOfPower: number[] = [34, 35, 38, 46, 39, 53, 27];
  arrayOfHealth: number[] = [100, 90, 80, 70, 95, 85, 75];
  logger: Logger = new Logger();
  round: Round = new Round();

  initHero(totalAmountOfHeroes: number) {
    const heroList: Hero[] = [];
    for (let i = 0; i < totalAmountOfHeroes; i++) {
      this.initRandomTypes();
      const name = this.initRandomHeroProperties(this.arrayOfNames);
      const power = this.initRandomHeroProperties(this.arrayOfPower);
      const health = this.initRandomHeroProperties(this.arrayOfHealth);
      const newHero: Hero = new Hero(name, power, health);

      heroList.push(newHero);
    }
    return heroList;
  }

  initRandomTypes() {
    const heroType: string = this.arrayOfHeroes[Math.floor(Math.random() * this.arrayOfHeroes.length)];
    return heroType;
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
    this.logger.info(pairsArray);
    return pairsArray;
  }
  mathRandom(array: number[]): number {
    return Math.floor(Math.random() * array.length);
  }
}
