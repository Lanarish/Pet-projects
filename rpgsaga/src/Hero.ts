abstract class Hero {
  abstract name: string;
  abstract power: number;
  abstract health: number;
  abstract startHealth: number;

  abstract performSuperPower(): void;
  abstract prepareForRound(): void;
}
