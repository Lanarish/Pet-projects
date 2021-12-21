import { SuperPower } from './SuperPower';

export class Nemesis extends SuperPower {
  useSuperPower(userPower, opponent) {
    opponent.Health -= userPower.Power * 0.3;
  }
}
