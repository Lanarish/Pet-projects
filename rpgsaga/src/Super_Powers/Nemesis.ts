import { Hero } from '../Hero';
import { Logger } from '../Logger';

import { SuperPower } from './SuperPower';

export class Nemesis extends SuperPower {
  logger: Logger;
  constructor(logger: Logger) {
    super();
    this.logger = logger;
  }
  useSuperPower(attacker: Hero, opponent: Hero) {
    opponent.Health -= Math.floor(attacker.Power * 0.3);
    this.logger.useNemesis(attacker, opponent);
  }
}
