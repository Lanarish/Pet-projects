import { Hero } from './Hero';
import { Logger } from './Logger';

export class Attack {
  private logger: Logger;
  constructor(logger: Logger) {
    this.logger = logger;
  }
  checkAttack(attacker: Hero, opponent: Hero) {
    if (!opponent.superPower) {
      throw new Error('noSuperPower');
    }
    if (!attacker.superPower) {
      throw new Error('noSuperPower2');
    }
    attacker.superPower.useSuperPowerEffect(attacker, opponent);
    if (!opponent.superPower.checkBoost(attacker) && !attacker.superPower.tryUseBoost(attacker, opponent)) {
      opponent.getDamage(attacker.Power);
      this.logger.gameProcess(attacker, opponent);
    }
  }
}
