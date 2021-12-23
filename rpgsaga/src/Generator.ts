import { Hero } from './Hero';
import { HeroPairs } from './HeroPairs';
import { Archer } from './Heroes/Archer';
import { Knight } from './Heroes/Knight';
import { Wizard } from './Heroes/Wizard';
import { FireArrows } from './Super_Powers/FireArrows';
import { Bewitchment } from './Super_Powers/Bewitchment';
import { Nemesis } from './Super_Powers/Nemesis';

export class Generator {
  arrayOfHeroes: string[] = ['Wizard', 'Archer', 'Knight'];
  arrayOfNames: string[] = [
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
  arrayOfLastNames: string[] = [
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

  initHero(totalAmountOfHeroes: number) {
    const heroList: Hero[] = [];

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
  initHeroType(type: string, name: string, lastName: string, power: number, health: number) {
    let completeHero;
    switch (type) {
      case 'Wizard':
        completeHero = new Wizard(type, name, lastName, power, health, new Bewitchment());
        break;
      case 'Archer':
        completeHero = new Archer(type, name, lastName, power, health, new FireArrows());
        break;
      case 'Knight':
        completeHero = new Knight(type, name, lastName, power, health, new Nemesis());
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
    const copyHeroList = [...heroList];

    for (let i = 0; i < heroList.length / 2; i++) {
      const randomHeroOne: number = this.mathRandom(copyHeroList);
      const randomHeroTwo: number = this.mathRandom(copyHeroList);
      if (randomHeroOne === randomHeroTwo) {
        i--;
        continue;
      }
      const newPair = new HeroPairs(copyHeroList[randomHeroOne], copyHeroList[randomHeroTwo]);
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
