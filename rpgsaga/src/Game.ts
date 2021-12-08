import { Hero } from './Hero';
import { Random } from './Random';

// const NUMBER_USERS = 4;
export class Game {
  heroList: Hero[];
  run() {
    this.getNumbersOfHeroes();
    this.initHero();

    // const numberOfPlayers = prompt('Enter the number of players');
  }

  initHero() {
    const random = new Random();
    random.initHero();
  }

  private getNumbersOfHeroes() {
    const totalAmountOfHeroes = 10;
    this.makePairs(totalAmountOfHeroes);
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

  gameOver(heroList: [string]) {
    console.log(`Game is over. The winner is ${heroList[0]}! `);
  }
}
