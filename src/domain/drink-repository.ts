import * as Drink from './drink';

const master: Readonly<Array<Drink.Model>> = [
  Drink.factory('water', 100, 30),
  Drink.factory('orange juice', 120, 30),
  Drink.factory('coffee', 120, 30),
];

export function getAll() {
  return master;
}
