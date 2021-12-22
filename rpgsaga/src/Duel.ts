import { Hero } from './Hero';
import { HeroPairs } from './HeroPairs';
import { Logger } from './Logger';

// import { Generator } from './Generator';

export class Duel {
  logger: Logger = new Logger();
  startDuel(pairOfHeroes: HeroPairs) {
    this.logger.duelStart(pairOfHeroes.firstHero, pairOfHeroes.secondHero);
    const turn: boolean = this.whoIsFirst();

    let firstFighter;
    let secondFighter;

    if (!turn) {
      firstFighter = pairOfHeroes.firstHero;
      secondFighter = pairOfHeroes.secondHero;
    } else {
      firstFighter = pairOfHeroes.secondHero;
      secondFighter = pairOfHeroes.firstHero;
    }
    this.logger.firstTurn(firstFighter);
    while (firstFighter.health && secondFighter.health) {
      this.fightChecker(firstFighter, secondFighter);
      if (secondFighter.health <= 0) {
        this.logger.showWinner(firstFighter);
        return firstFighter;
      }

      this.fightChecker(secondFighter, firstFighter);
      if (firstFighter.health <= 0) {
        this.logger.showWinner(secondFighter);
        return secondFighter;
      }
    }
  }
  whoIsFirst() {
    return Boolean(Math.floor(Math.random() * 2));
  }
  fightChecker(attacker: Hero, opponent: Hero) {
    if (opponent.Type === 'Wizard' && opponent.superPower.BoostJustNow === true) {
      this.logger.missTurn(attacker);
      opponent.superPower.BoostJustNow = false;
    } else {
      this.attackPreparation(attacker, opponent);
    }
  }
  attackPreparation(attacker: Hero, opponent: Hero) {
    if (attacker.superPower.BoostStatus === false) {
      const chance: number = Math.floor(Math.random() * 3);
      if (chance === 3 || chance === 2) {
        attacker.superPower.useSuperPower(attacker, opponent);
      }
    }
    if (attacker.Type === 'Archer' && attacker.superPower.BoostStatus === true) {
      opponent.Health = opponent.Health - 3;
      this.logger.usedFireArrowsEffect(opponent);
    }

    if (attacker.Type === 'Archer' && attacker.superPower.BoostJustNow === true) {
      attacker.superPower.BoostJustNow = false;
      return;
    } else {
      attacker.fight(attacker, opponent);
      this.logger.gameProcess(attacker, opponent);
    }
  }
  //   fight(a: Hero, b: Hero) {
  //     a.useSuperPower();
  //     b.Health -= a.Power;
  //     this.logger.gameProcess(a, b);
  //   }
  //   setWinner(winner) {
  //     this.setWinnerList.push(winner);
  //     return this.setWinnerList;
  //   }
}
