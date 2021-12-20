export abstract class Hero {
  private type: string;
  private name: string;
  private lastName: string;
  private power: number;
  private health: number;

  constructor(type, name, lastName, power, health) {
    this.type = type;
    this.name = name;
    this.lastName = lastName;
    this.power = power;
    this.health = health;
  }
  setHeroType(type: string) {
    this.type = type;
  }
  getHeroType() {
    return this.type;
  }
  setFirstName(name: string) {
    this.name = name;
  }
  getFirstName() {
    return this.name;
  }
  setLastName(lastName: string) {
    this.lastName = lastName;
  }
  getLastName() {
    return this.lastName;
  }
  setPower(power: number) {
    this.power = power;
  }
  getPower() {
    return this.power;
  }
  setHealth(health: number) {
    this.health = health;
  }
  getHealth() {
    return this.health;
  }
}
Hero.prototype.toString = function (): string {
  return `${this.name} ${this.lastName.substring(0, 1)}.`;
};
