import { SuperPower } from './Super_Powers/SuperPower';

export class Hero {
  private type: string;
  private name: string;
  private lastName: string;
  private power: number;
  private health: number;
  superPower: SuperPower;

  constructor(type, name, lastName, power, health, superPower) {
    this.type = type;
    this.name = name;
    this.lastName = lastName;
    this.power = power;
    this.health = health;
    this.superPower = superPower;
  }
  public set Type(type: string) {
    this.type = type;
  }
  public get Type() {
    return this.type;
  }
  public set FirstName(name: string) {
    this.name = name;
  }
  public get FirstName() {
    return this.name;
  }
  public set LastName(lastName: string) {
    this.lastName = lastName;
  }
  public get LastName() {
    return this.lastName;
  }
  public set Power(power: number) {
    this.power = power;
  }
  public get Power() {
    return this.power;
  }
  public set Health(health: number) {
    this.health = health;
  }
  public get Health() {
    return this.health;
  }

  //   attackPreparation(attacker: Hero, opponent: Hero) {
  //     if (attacker.superPower.BoostStatus === false) {
  //       const chance: number = Math.floor(Math.random() * 3);
  //       if (chance === 3 || chance === 2) {
  //         attacker.superPower.useSuperPower(attacker, opponent);
  //       }
  //     }
  //     if (attacker instanceof Archer && attacker.superPower.BoostJustNow === true) {
  //       opponent.Health = opponent.Health - (attacker.Power + 3);
  //     } else {
  //       this.fight(attacker, opponent);
  //     }
  //     if (attacker instanceof Archer && attacker.superPower.BoostJustNow === true) {
  //       attacker.superPower.BoostJustNow = false;
  //       return;
  //     } else {
  //       this.fight(attacker, opponent);
  //     }
  //   }

  fight(attacker: Hero, opponent: Hero) {
    attacker.Health -= opponent.Power;
    // this.logger.gameProcess(a, b);
  }
}
Hero.prototype.toString = function (): string {
  return `${this.name} ${this.lastName.substring(0, 1)}.`;
};
