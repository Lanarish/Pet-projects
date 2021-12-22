import { SuperPower } from './SuperPower';

export class Nemesis extends SuperPower {
  useSuperPower(attacker, opponent) {
    opponent.Health -= attacker.Power * 0.3;
  }
}
