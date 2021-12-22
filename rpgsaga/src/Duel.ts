import { Hero } from './Hero';
import { HeroPairs } from './HeroPairs';
import { Logger } from './Logger';

// import { Generator } from './Generator';

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
      this.fightChecker(this.firstFighter, this.secondFighter);
      if (this.secondFighter.Health <= 0) {
        winner = this.firstFighter;
        break;
      }

      this.fightChecker(this.secondFighter, this.firstFighter);
      if (this.firstFighter.Health <= 0) {
        winner = this.firstFighter;
        break;
      }
    }
    this.logger.showWinner(this.firstFighter);
    return winner;
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
}
