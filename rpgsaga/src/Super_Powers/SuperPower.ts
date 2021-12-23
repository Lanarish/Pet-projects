import { Hero } from '../Hero';

export abstract class SuperPower {
  private superPowerUsedInRound = false;
  private superPowerJustUsed = false;

  public set SuperPowerJustNow(status: boolean) {
    this.superPowerJustUsed = status;
  }
  public get SuperPowerJustNow() {
    return this.superPowerJustUsed;
  }

  public set SuperPowerInRoundStatus(status: boolean) {
    this.superPowerUsedInRound = status;
  }
  public get SuperPowerInRoundStatus() {
    return this.superPowerUsedInRound;
  }

  abstract useSuperPower(attacker: Hero, opponent: Hero);
}
