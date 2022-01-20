import { Hero } from '../Hero';
import { Logger } from '../Logger';

import { SuperPower } from './SuperPower';

export class Bewitchment extends SuperPower {
  constructor(logger: Logger) {
    super(logger);
  }
  useSuperPower(attacker: Hero, opponent: Hero) {
    attacker.superPower.SuperPowerInRoundStatus = true;
    opponent.missTurn = true;
    this.logger.useBewitchment(attacker);
  }
  checkBoost(attacker: Hero) {
    if (!attacker.missTurn) {
      return false;
    } else {
      this.logger.missTurn(attacker);
      attacker.missTurn = false;
      return true;
    }
  }
  tryUseBoost(attacker: Hero, opponent: Hero): boolean {
    if (!attacker.superPower.SuperPowerInRoundStatus) {
      const chance: number = Math.floor(Math.random() * 3);
      if (chance === 3 || chance === 2) {
        attacker.superPower.useSuperPower(attacker, opponent);
        return true;
      }
    }
    return false;
  }
  useSuperPowerEffect() {
    return false;
  }
}
