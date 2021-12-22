import { Hero } from '../Hero';

import { SuperPower } from './SuperPower';

export class Bewitchment extends SuperPower {
  useSuperPower(attacker: Hero) {
    attacker.superPower.BoostInRoundStatus = true;
    attacker.superPower.BoostJustNow = true;
    // logger
  }
}
