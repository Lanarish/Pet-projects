import { Hero } from '../Hero';
import { Logger } from '../Logger';

import { SuperPower } from './SuperPower';

export class FireArrows extends SuperPower {
  constructor(logger: Logger) {
    super(logger);
  }
  useSuperPower(attacker: Hero) {
    attacker.superPower.SuperPowerInRoundStatus = true;
    attacker.superPower.SuperPowerJustNow = true;
    this.logger.useFireArrows(attacker);
  }
}
