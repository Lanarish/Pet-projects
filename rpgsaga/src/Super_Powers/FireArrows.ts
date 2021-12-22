import { SuperPower } from './SuperPower';

export class FireArrows extends SuperPower {
  useSuperPower(attacker, opponent) {
    opponent.Health - 2;
  }
}
