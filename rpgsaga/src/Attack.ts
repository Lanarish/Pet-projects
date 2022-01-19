import { Hero } from './Hero';
import { Logger } from './Logger';

export class Attack {
  private logger: Logger;
  constructor(logger: Logger) {
    this.logger = logger;
  }
  checkAttack(attacker: Hero, opponent: Hero) {
    if (!opponent.superPower) {
      return;
    }
    attacker.superPower.useSuperPowerEffect(attacker, opponent);
    if (opponent.superPower.checkBoost(attacker, opponent)) {
      return;
    } else {
      if (attacker.superPower.tryUseBoost(attacker, opponent)) {
        return;
      } else {
        opponent.getDamage(attacker.Power);
        this.logger.gameProcess(attacker, opponent);
      }
    }
  }
}
