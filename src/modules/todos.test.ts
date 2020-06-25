import { Todo, Todos } from '../domain/models';
import { SET, set, default as reducer } from './todos';

describe('todos', () => {
  describe('set', () => {
    it('returns an Action to tell the reducer "set todos"', () => {
      const action = set(Todos.factory([{ title: 'foo', detail: 'bar' }, { title: 'buz' }]));
      expect(action.type).toBe(SET);
      expect(Todos.getNumof(action.payload.todos)).toBe(2);
    });
  });

  // TODO: 全部のAction分書く。

  describe('reducer', () => {
    describe('set Action', () => {
      it('returns a new state that has payload of "set Action"', () => {
        const action = set(Todos.factory([{ title: 'foo', detail: 'bar' }, { title: 'buz' }]));
        const setState = reducer(undefined, action);
        expect(Todos.getNumof(setState)).toBe(2);
      });
    });

    // TODO: 全部のAction分書く。
  });
});
