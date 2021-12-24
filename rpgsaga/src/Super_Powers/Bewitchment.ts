import { Hero } from '../Hero';
import { Logger } from '../Logger';

import { SuperPower } from './SuperPower';

export class Bewitchment extends SuperPower {
  logger: Logger;
  constructor(logger: Logger) {
    super();
    this.logger = logger;
  }
  useSuperPower(attacker: Hero) {
    attacker.superPower.SuperPowerInRoundStatus = true;
    attacker.superPower.SuperPowerJustNow = true;
    this.logger.useBewitchment(attacker);
  }
}
