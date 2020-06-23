import { createSelector } from 'reselect';

import { AppState } from '../modules';
import * as Todos from '../domain/todos';

function getTodos(state: AppState) {
  return state.todos;
}

export const getCompletedTodos = createSelector([getTodos], todos => Todos.getCompletedTodos(todos));

export const getNumofCompleted = createSelector([getCompletedTodos], completedTodos =>
  Todos.getNumofCompleted(completedTodos),
);
