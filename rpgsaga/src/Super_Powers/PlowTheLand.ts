import { Hero } from '../Hero';
import { Logger } from '../Logger';

import { SuperPower } from './SuperPower';

export class PlowTheLand extends SuperPower {
  constructor(logger: Logger) {
    super(logger);
  }
  useSuperPower(attacker: Hero) {
    attacker.superPower.SuperPowerInRoundStatus = false;
    attacker.superPower.SuperPowerJustNow = false;
  }
}
