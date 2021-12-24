import { Hero } from '../Hero';
import { Logger } from '../Logger';

export abstract class SuperPower {
  protected logger: Logger;
  private superPowerUsedInRound = false;
  private superPowerJustUsed = false;

  constructor(logger: Logger) {
    this.logger = logger;
  }
  public set SuperPowerJustNow(status: boolean) {
    this.superPowerJustUsed = status;
  }
  public get SuperPowerJustNow(): boolean {
    return this.superPowerJustUsed;
  }

  public set SuperPowerInRoundStatus(status: boolean) {
    this.superPowerUsedInRound = status;
  }
  public get SuperPowerInRoundStatus(): boolean {
    return this.superPowerUsedInRound;
  }

  abstract useSuperPower(attacker: Hero, opponent: Hero);
}
