import { SuperPower } from './Super_Powers/SuperPower';

export class Hero {
  private type: string;
  private name: string;
  private lastName: string;
  private power: number;
  private health: number;
  private startHealth: number;
  superPower: SuperPower;

  constructor(type: string, name: string, lastName: string, power: number, health: number) {
    this.type = type;
    this.name = name;
    this.lastName = lastName;
    this.power = power;
    this.health = health;
    this.startHealth = health;
  }
  public set Type(type: string) {
    this.type = type;
  }
  public get Type(): string {
    return this.type;
  }
  public set FirstName(name: string) {
    this.name = name;
  }
  public get FirstName(): string {
    return this.name;
  }
  public set LastName(lastName: string) {
    this.lastName = lastName;
  }
  public get LastName(): string {
    return this.lastName;
  }
  public set Power(power: number) {
    this.power = power;
  }
  public get Power(): number {
    return this.power;
  }
  public set Health(health: number) {
    this.health = health;
  }
  public get Health(): number {
    return this.health;
  }
  public get StartHealth(): number {
    return this.startHealth;
  }

  getDamage(power: number) {
    if (!power) {
      throw new Error('powerError');
    }
    this.Health -= power;
  }
  restoreHealth() {
    this.Health = this.StartHealth;
    if (!this.superPower) {
      return;
    }
    this.superPower.SuperPowerInRoundStatus = false;
    this.superPower.SuperPowerJustNow = false;
  }
}
Hero.prototype.toString = function (): string {
  return `${this.name} ${this.lastName.substring(0, 1)}.`;
};
