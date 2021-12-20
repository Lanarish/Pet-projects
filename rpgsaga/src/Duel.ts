import { Hero } from './Hero';
import { HeroPairs } from './HeroPairs';
import { Logger } from './Logger';
import { Generator } from './Generator';

export class Duel {
  logger: Logger = new Logger();
  generator: Generator = new Generator();
  setWinnerList: Hero[] = [];
  startDuel(pairOfHeroes: HeroPairs) {
    this.logger.duelStart(pairOfHeroes.firstHero, pairOfHeroes.secondHero);
    const turn: boolean = this.whoIsFirst();

    let firstFighter;
    let secondFighter;

    if (!turn) {
      firstFighter = pairOfHeroes.firstHero;
      secondFighter = pairOfHeroes.secondHero;
      this.logger.firstTurn(firstFighter);
    } else {
      firstFighter = pairOfHeroes.secondHero;
      secondFighter = pairOfHeroes.firstHero;
      this.logger.firstTurn(firstFighter);
    }

    while (firstFighter.health && secondFighter.health) {
      this.fight(firstFighter, secondFighter);
      if (secondFighter.health <= 0) {
        this.logger.showWinner(firstFighter);
        return this.setWinner(firstFighter);
      }

      this.fight(secondFighter, firstFighter);
      if (firstFighter.health <= 0) {
        this.logger.showWinner(secondFighter);
        return this.setWinner(secondFighter);
      }
    }
  }
  whoIsFirst() {
    return Boolean(Math.floor(Math.random() * 2));
  }

  fight(a: Hero, b: Hero) {
    b.setHealth(b.getHealth() - a.getPower());
    this.logger.gameProcess(a, b);
  }
  setWinner(winner) {
    this.setWinnerList.push(winner);
    return this.setWinnerList;
  }
}
