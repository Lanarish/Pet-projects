import { Hero } from './Hero';
import { Random } from './Random';

// const NUMBER_USERS = 4;
export class Game {
  heroList: Hero[];
  run() {
    this.initHero();

    // const numberOfPlayers = prompt('Enter the number of players');
  }

  initHero() {
    const random = new Random();
    random.initHero();
  }
}
