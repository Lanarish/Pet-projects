import { Hero } from './Hero';

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

  initHero(totalAmountOfHeroes: number) {
    const heroList: Hero[] = [];

    for (let i = 0; i < totalAmountOfHeroes; i++) {
      this.initRandomTypes();
      const name: string = this.initRandomHeroName();
      const power: number = this.initRandomHeroPower();
      const health: number = this.initRandomHeroHealth();
      const newHero: Hero = new Hero(name, power, health);
      heroList.push(newHero);
    }
    console.log(heroList);
    return heroList;
  }

  initRandomTypes() {
    const heroType: string = this.arrayOfHeroes[Math.floor(Math.random() * this.arrayOfHeroes.length)];
    // console.log(heroType);
    return heroType;
  }

  initRandomHeroName() {
    const heroName: string = this.arrayOfNames[Math.floor(Math.random() * this.arrayOfNames.length)];
    // console.log(heroName);
    return heroName;
  }
  initRandomHeroPower() {
    const heroPower: number = this.arrayOfPower[Math.floor(Math.random() * this.arrayOfPower.length)];
    // console.log(heroPower);
    return heroPower;
  }
  initRandomHeroHealth() {
    const heroHealth: number = this.arrayOfHealth[Math.floor(Math.random() * this.arrayOfHealth.length)];
    // console.log(heroHealth);
    return heroHealth;
  }

  makePairs(totalAmountOfHeroes: number) {
    const totalArray: number[] = new Array(totalAmountOfHeroes).fill(1);
    const pairsArray: [number, number][] = [];

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
        pairsArray.push([randomHeroOne, randomHeroTwo]);
      } else {
        i--;
        continue;
      }
    }

    console.log(pairsArray);
    return pairsArray;
  }
}
