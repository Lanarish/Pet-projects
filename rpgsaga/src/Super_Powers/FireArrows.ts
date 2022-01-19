import { Hero } from '../Hero';
import { Logger } from '../Logger';

import { SuperPower } from './SuperPower';

const ADD_DAMAGE = 4;
export class FireArrows extends SuperPower {
  constructor(logger: Logger) {
    super(logger);
  }
  useSuperPower(whoUsedBoost: Hero) {
    whoUsedBoost.superPower.SuperPowerInRoundStatus = true;
    this.logger.useFireArrows(whoUsedBoost);
  }
  useSuperPowerEffect(whoUsedBoost: Hero, opponent: Hero) {
    if (whoUsedBoost.superPower.SuperPowerInRoundStatus) {
      opponent.Health = opponent.Health - ADD_DAMAGE;
      this.logger.usedFireArrowsEffect(opponent);
    }
  }
  checkBoost(): boolean {
    return false;
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
}
