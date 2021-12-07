export abstract class Random {
  initRandomHeroes() {
    const arrayOfHeroes = ['Witcher', 'Knight', 'Archer'];
    const heroType: number = Math.floor(Math.random() * (arrayOfHeroes.length - 0)) + 0;
    console.log(heroType);
  }

  initRandomHeroName() {
    console.log('name');
  }
  initRandomHeroPower() {
    console.log('power');
  }
  initRandomHeroHealth() {
    console.log('health');
  }
}
