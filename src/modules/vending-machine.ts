import * as VendingMachine from '../domain/vending-machine';

export function createInitialState() {
  return VendingMachine.factory();
}

export const CHARGE = 'vending-machine/charge' as const;
export const SELL = 'vending-machine/sell' as const;

export function charge(chargeMoney: number) {
  return {
    type: CHARGE,
    payload: {
      chargeMoney,
    },
  };
}

export function sell(id: string) {
  return {
    type: SELL,
    payload: {
      id,
    },
  };
}

export type Action = ReturnType<typeof charge> | ReturnType<typeof sell>;

export default (state = createInitialState(), action: Action) => {
  switch (action.type) {
    case CHARGE:
      return VendingMachine.charge(state, action.payload.chargeMoney);
    case SELL:
      return VendingMachine.sell(state, action.payload.id);
    default:
      return state;
  }
};
