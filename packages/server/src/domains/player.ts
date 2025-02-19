import { IPlayer, CellPosition, PlayerActions } from '@cordopoly/shared';
import { Cube } from './cube';

export class Player implements IPlayer {
  id = '';
  joined = false;
  name = '';
  color = '';
  balance = 15000;
  moveCells: CellPosition[] = [];

  availableActions: Array<PlayerActions> = [];

  constructor(player: Partial<IPlayer>) {
    Object.assign(this, player);
  }

  setMoveCells(cells: CellPosition[]) {
    this.moveCells = cells;
  }

  getCurrentCell() {
    return this.moveCells[this.moveCells.length - 1];
  }

  withdraw(money: number) {
    this.balance -= money;
  }

  deposit(money: number) {
    this.balance += money;
  }

  setAvailableActions(actions: Array<PlayerActions>) {
    this.availableActions = actions;
  }

  rollDice() {
    return Cube.generateCubes();
  }

  toPlain() {
    return {
      id: this.id,
      name: this.name,
    };
  }

  static fromPlain(player: IPlayer) {
    return new Player(player);
  }
}
