import { Hero } from '../Hero';
import { Logger } from '../Logger';

import { SuperPower } from './SuperPower';

const ADD_DAMAGE = 0.3;
export class Nemesis extends SuperPower {
  constructor(logger: Logger) {
    super(logger);
  }
  useSuperPower(attacker: Hero, opponent: Hero) {
    opponent.Health -= Math.floor(attacker.Power * ADD_DAMAGE);
    this.logger.useNemesis(attacker, opponent);
  }
}
