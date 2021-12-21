import { SuperPower } from './SuperPower';

export class Bewitchment extends SuperPower {
  useSuperPower(userPower, opponent) {
    userPower.superPower.isUseSuperPower = true;
  }
}
