import { Hero } from './Hero';
import { HeroPairs } from './HeroPairs';
import { Logger } from './Logger';

export class Duel {
  logger: Logger = new Logger();
  startDuel(pairOfHeroes: HeroPairs) {
    const turn: boolean = this.whoIsFirst();

    let firstFighter;
    let secondFighter;
    if (turn === false) {
      firstFighter = pairOfHeroes.firstHero;
      secondFighter = pairOfHeroes.secondHero;
      console.log(`${firstFighter.name} attacks first`);
    } else {
      firstFighter = pairOfHeroes.secondHero;
      secondFighter = pairOfHeroes.firstHero;
      console.log(`${firstFighter.name} attacks first`);
    }

    while (firstFighter.health > 0 && secondFighter.health > 0) {
      this.fight(firstFighter, secondFighter);
      if (secondFighter.health <= 0) {
        this.logger.stopDuel(firstFighter);
        return firstFighter;
      }
      this.fight(secondFighter, firstFighter);
      if (firstFighter.health <= 0) {
        this.logger.stopDuel(secondFighter);
        return secondFighter;
      }
    }
  }
  whoIsFirst() {
    return Boolean(Math.floor(Math.random() * 2));
  }

  fight(a: Hero, b: Hero) {
    b.health -= a.power;
    this.logger.game(a, b);
  }
}
