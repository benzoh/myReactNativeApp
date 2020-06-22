import assert from '../lib/assert';
import assertIsDefined from '../lib/assert-is-defined';
import * as Drink from './drink';
import * as DrinkRepository from './drink-repository';

export interface Model {
  inventory: Readonly<Array<Drink.Model>>;
  chargeMoney: number;
}

export function factory(): Model {
  return {
    inventory: DrinkRepository.getAll(),
    chargeMoney: 0,
  };
}

export function charge(vendingMachine: Model, money: number): Model {
  return {
    ...vendingMachine,
    chargeMoney: vendingMachine.chargeMoney + money,
  };
}

export function sell(vendingMachine: Model, id: string): Model {
  const selected = vendingMachine.inventory.find(item => item.id === id);
  assertIsDefined(selected);
  assert(selected.remains <= 0, `Selected drink is sold out: ${selected.name}`);
  assert(
    vendingMachine.chargeMoney < selected.price,
    `Too few charged money for selected drink: ${vendingMachine.chargeMoney} < ${selected.price}`,
  );

  return {
    ...vendingMachine,
    inventory: vendingMachine.inventory.map(item => {
      if (item === selected) {
        return {
          ...selected,
          remains: selected.remains - 1,
        };
      }
      return item;
    }),
    chargeMoney: vendingMachine.chargeMoney - selected.price,
  };
}
