import { SuperPower } from './Super_Powers/SuperPower';

export class Hero {
  private type: string;
  private name: string;
  private lastName: string;
  private power: number;
  private health: number;
  protected superPower: SuperPower;

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
  attackPreparation(a, b) {
    a.superPower.useSuperPower(a, b);
  }

  fight(a: Hero, b: Hero) {
    b.Health -= a.Power;
    this.logger.gameProcess(a, b);
  }
}
Hero.prototype.toString = function (): string {
  return `${this.name} ${this.lastName.substring(0, 1)}.`;
};
