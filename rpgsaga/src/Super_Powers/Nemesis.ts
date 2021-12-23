import { Hero } from '../Hero';
import { Logger } from '../Logger';

import { SuperPower } from './SuperPower';

export class Nemesis extends SuperPower {
  logger: Logger = new Logger();
  useSuperPower(attacker: Hero, opponent: Hero) {
    opponent.Health -= Math.floor(attacker.Power * 0.3);
    this.logger.useNemesis(attacker, opponent);
  }
}
