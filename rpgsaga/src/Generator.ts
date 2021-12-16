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
  arrayOfLastNames: string[] = ['Bolton', 'Prier', 'Jonson', 'Jackson', 'Bushe', 'Gramm', 'Tomme', 'Tudor'];
  logger: Logger = new Logger();

  initHero(totalAmountOfHeroes: number) {
    const heroList: Hero[] = [];

    for (let i = 0; i < totalAmountOfHeroes; i++) {
      const name: string = this.initRandomHeroName();
      const lastName: string = this.initRandomHeroLastName();
      const power: number = this.initRandomHeroPower();
      const health: number = this.initRandomHeroHealth();
      const newHero = new Hero(name, lastName, power, health);

      heroList.push(newHero);
    }
    return heroList;
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
    console.log(heroList);
    const totalArray: number[] = new Array(heroList.length).fill(1);

    for (let i = 0; i < totalArray.length / 2; i++) {
      const randomHeroOne: number = this.mathRandom(totalArray);
      const randomHeroTwo: number = this.mathRandom(totalArray);
      if (totalArray[randomHeroOne] === 0 || totalArray[randomHeroTwo] === 0) {
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
