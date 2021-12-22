import { SuperPower } from './SuperPower';

export class FireArrows extends SuperPower {
  useSuperPower(attacker) {
    attacker.superPower.BoostInRoundStatus = true;
    attacker.superPower.BoostJustNow = true;
  }
}
