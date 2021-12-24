import { Hero } from './Hero';
import { Archer } from './Heroes/Archer';
import { Wizard } from './Heroes/Wizard';
import { HeroPairs } from './HeroPairs';
import { Logger } from './Logger';

export class Duel {
  private logger: Logger;
  private firstFighter: Hero;
  private secondFighter: Hero;

  constructor(pairOfHeroes: HeroPairs, logger: Logger) {
    this.logger = logger;
    const turn: boolean = this.whoIsFirst();
    if (!turn) {
      this.firstFighter = pairOfHeroes.firstHero;
      this.secondFighter = pairOfHeroes.secondHero;
    } else {
      this.firstFighter = pairOfHeroes.secondHero;
      this.secondFighter = pairOfHeroes.firstHero;
    }
  }
  startDuel() {
    this.logger.duelStart(this.firstFighter, this.secondFighter);
    this.logger.firstTurn(this.firstFighter);
    let winner: Hero;
    while (this.firstFighter.Health && this.secondFighter.Health) {
      this.attackChecker(this.firstFighter, this.secondFighter);
      if (this.secondFighter.Health <= 0) {
        winner = this.firstFighter;
        break;
      }

      this.attackChecker(this.secondFighter, this.firstFighter);
      if (this.firstFighter.Health <= 0) {
        winner = this.secondFighter;
        break;
      }
    }
    this.logger.showWinner(winner);
    return winner;
  }
  whoIsFirst() {
    return Boolean(Math.floor(Math.random() * 2));
  }
  attackChecker(attacker: Hero, opponent: Hero) {
    if (opponent instanceof Wizard && opponent.superPower.SuperPowerJustNow) {
      this.logger.missTurn(attacker);
      opponent.superPower.SuperPowerJustNow = false;
    } else {
      this.attackPreparation(attacker, opponent);
    }
  }
  attackPreparation(attacker: Hero, opponent: Hero) {
    if (!attacker.superPower.SuperPowerInRoundStatus) {
      const chance: number = Math.floor(Math.random() * 3);
      if (chance === 3 || chance === 2) {
        attacker.superPower.useSuperPower(attacker, opponent);
      }
    }
    if (attacker instanceof Archer && attacker.superPower.SuperPowerInRoundStatus) {
      opponent.Health = opponent.Health - 3;
      this.logger.usedFireArrowsEffect(opponent);
    }

    if (attacker instanceof Archer && attacker.superPower.SuperPowerJustNow) {
      attacker.superPower.SuperPowerJustNow = false;
    } else {
      attacker.fight(attacker, opponent);
      this.logger.gameProcess(attacker, opponent);
    }
  }
}
