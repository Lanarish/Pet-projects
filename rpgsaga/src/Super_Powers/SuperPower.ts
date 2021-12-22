import { Hero } from '../Hero';

export abstract class SuperPower {
  private boostUsedInRound = false;
  private boostJustUsed = false;

  public set BoostJustNow(status: boolean) {
    this.boostJustUsed = status;
  }
  public get BoostJustNow() {
    return this.boostJustUsed;
  }

  public set BoostInRoundStatus(status: boolean) {
    this.boostUsedInRound = status;
  }
  public get BoostStatus() {
    return this.boostUsedInRound;
  }

  abstract useSuperPower(attacker: Hero, opponent: Hero);
}
