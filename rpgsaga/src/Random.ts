import { Hero } from './Hero';

export class Random {
  arrayOfHeroes: string[] = ['Witcher', 'Archer', 'Knight'];
  arrayOfNames: string[] = ['Tom', 'Bot', 'Thor', 'Artur', 'Igor', 'Jane', 'Paul', 'Travis', 'Troy'];
  arrayOfPower: number[] = [4, 5, 8, 6, 9, 3, 7];
  arrayOfHealth: number[] = [100, 90, 80, 70, 95, 85, 75];

  initHero() {
    const heroList: Hero[] = [];
    for (let i = 0; i < 2; i++) {
      const newHero: Hero = new Hero();
      this.initRandomTypes();
      this.initRandomHeroName();
      this.initRandomHeroHealth();
      this.initRandomHeroPower();
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
}
