abstract class Hero {
  names: string[] = ['Tom', 'Bot', 'Thor', 'Artur'];
  name: string;
  power: number;
  health: number;
  startHealth: number;

  performSuperPower() {
    console.log('n');
  }
  prepareForRound(): void;
}
