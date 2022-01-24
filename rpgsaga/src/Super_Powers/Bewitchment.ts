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
    this.logger.info(`* ${attacker.toString()} use Bewitchment! *`);
  }
  checkBoost(attacker: Hero) {
    if (!attacker.missTurn) {
      return false;
    }
    this.logger.info(`* ${attacker.toString()} miss turn *`);
    attacker.missTurn = false;
    return true;
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
  useSuperPowerEffect(whoUsedBoost: Hero, opponent: Hero) {
    return false;
  }
}
