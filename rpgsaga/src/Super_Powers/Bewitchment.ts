import { SuperPower } from './SuperPower';

export class Bewitchment extends SuperPower {
  useSuperPower(attacker, opponent) {
    attacker.superPower.boostUsedInRound = true;
  }
}
