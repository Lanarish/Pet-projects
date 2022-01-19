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
  tryUseBoost(attacker: Hero, opponent: Hero) {
    if (!attacker.superPower.SuperPowerInRoundStatus) {
      const chance: number = Math.floor(Math.random() * 3);
      if (chance === 3 || chance === 2) {
        attacker.superPower.useSuperPower(attacker, opponent);
      }
    }
    return false;
  }

  abstract useSuperPower(attacker: Hero, opponent: Hero): void;
  abstract checkBoost(whoUsedBoost: Hero, opponent: Hero): boolean;
  abstract useSuperPowerEffect(whoUsedBoost: Hero, opponent: Hero): void;
}
