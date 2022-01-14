import { Hero } from './Hero';
import { Archer } from './Heroes/Archer';
import { Knight } from './Heroes/Knight';
import { Wizard } from './Heroes/Wizard';
import { Logger } from './Logger';
import { HeroTypes } from './HeroTypes';
import { Pair } from './Pair';

export class Generator {
  private arrayOfHeroes: string[] = [HeroTypes.Archer, HeroTypes.Knight, HeroTypes.Knight];
  private arrayOfNames: string[] = [
    'Vesemir',
    'Geralt',
    'Lyutik',
    'Aragorn',
    'Legolas',
    'Gimli',
    'Boromir',
    'Faramir',
    'Gandalf',
    'Frodo',
    'Sam',
    'Peregrin',
    'Meriadoc',
    'Radagast',
    'Thorin',
    'Elrond',
  ];
  private arrayOfLastNames: string[] = [
    'Brandybuck',
    'Prier',
    'Jonson',
    'Jackson',
    'Bushe',
    'Gramm',
    'Took',
    'Tudor',
    'Oakenshield',
    'Merigold',
  ];
  private logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
  }

  initHero(totalAmountOfHeroes: number): Array<Hero> {
    const heroList: Array<Hero> = [];

    for (let i = 0; i < totalAmountOfHeroes; i++) {
      const type: string = this.initRandomHeroType();
      const name: string = this.initRandomHeroName();
      const lastName: string = this.initRandomHeroLastName();
      const power: number = this.initRandomHeroPower();
      const health: number = this.initRandomHeroHealth();
      const newHero = this.initHeroType(type, name, lastName, power, health);

      newHero.Type = type;
      newHero.FirstName = name;
      newHero.LastName = lastName;
      newHero.Power = power;
      newHero.Health = health;

      heroList.push(newHero);
    }
    return heroList;
  }
  initHeroType(type: string, name: string, lastName: string, power: number, health: number): Hero {
    let completeHero: Hero;
    switch (type) {
      case HeroTypes.Wizard:
        completeHero = new Wizard(type, name, lastName, power, health, this.logger);
        break;
      case HeroTypes.Archer:
        completeHero = new Archer(type, name, lastName, power, health, this.logger);
        break;
      case HeroTypes.Knight:
        completeHero = new Knight(type, name, lastName, power, health, this.logger);
        break;
    }

    return completeHero;
  }
  initRandomHeroType(): string {
    return this.arrayOfHeroes[Math.floor(Math.random() * this.arrayOfHeroes.length)];
  }
  initRandomHeroName(): string {
    return this.arrayOfNames[Math.floor(Math.random() * this.arrayOfNames.length)];
  }
  initRandomHeroLastName(): string {
    return this.arrayOfLastNames[Math.floor(Math.random() * this.arrayOfLastNames.length)];
  }
  initRandomHeroPower(): number {
    return Math.floor(Math.random() * 20) + 15;
  }
  initRandomHeroHealth(): number {
    return Math.floor(Math.random() * 31) + 70;
  }

  makePairs(heroList): Pair<Hero>[] {
    const pairsArray: Pair<Hero>[] = [];
    const copyHeroList = [...heroList];

    for (let i = 0; i < heroList.length / 2; i++) {
      const randomHeroOne: number = this.mathRandom(copyHeroList);
      const randomHeroTwo: number = this.mathRandom(copyHeroList);
      if (randomHeroOne === randomHeroTwo) {
        i--;
        continue;
      }
      const newPair = new Pair<Hero>(copyHeroList[randomHeroOne], copyHeroList[randomHeroTwo]);
      pairsArray.push(newPair);
      copyHeroList.splice(randomHeroOne, 1);
      if (randomHeroTwo > randomHeroOne) {
        copyHeroList.splice(randomHeroTwo - 1, 1);
      } else {
        copyHeroList.splice(randomHeroTwo, 1);
      }
    }
    return pairsArray;
  }
  mathRandom(array: number[]): number {
    return Math.floor(Math.random() * array.length);
  }
}
