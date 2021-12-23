import { Hero } from '../Hero';
import { Logger } from '../Logger';

import { SuperPower } from './SuperPower';

export class Bewitchment extends SuperPower {
  logger: Logger = new Logger();
  useSuperPower(attacker: Hero) {
    attacker.superPower.SuperPowerInRoundStatus = true;
    attacker.superPower.SuperPowerJustNow = true;
    this.logger.useBewitchment(attacker);
  }
}
