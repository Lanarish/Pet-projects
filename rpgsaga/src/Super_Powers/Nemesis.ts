import { Hero } from '../Hero';
import { Logger } from '../Logger';

import { SuperPower } from './SuperPower';

const ADD_DAMAGE = 0.3;
export class Nemesis extends SuperPower {
  constructor(logger: Logger) {
    super(logger);
  }
  useSuperPower(whoUsedBoost: Hero, opponent: Hero) {
    const damage = Math.floor(whoUsedBoost.Power * ADD_DAMAGE);
    opponent.Health = opponent.Health - damage;
    whoUsedBoost.superPower.SuperPowerJustNow = true;

    this.logger.useNemesis(whoUsedBoost, opponent);
  }

  useSuperPowerEffect(whoUsedBoost: Hero, opponent: Hero) {
    return false;
  }
}
