import { SuperPower } from './SuperPower';

export class FireArrows extends SuperPower {
  useSuperPower(userPower, opponent) {
    opponent.Health - 2;
  }
}
