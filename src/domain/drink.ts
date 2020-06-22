import 'react-native-get-random-values';
import { v4 as generateUuid } from 'uuid';

export interface Model {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly remains: number;
}

export function factory(name: string, price: number, remains: number): Model {
  return {
    id: generateUuid(),
    name,
    price,
    remains,
  };
}
