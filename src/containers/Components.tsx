import React from 'react';
import { useSelector } from 'react-redux';

import Component from '../components/Component';
import * as Todos from '../selectors/todos.ts';

export function ConnectedComponent() {
  const completedTodos = useSelector(Todos.getCompletedTodos);
  const numofCompleted = useSelector(Todos.getNumofCompleted);

  return <Component completedTodos={completedTodos} numofCompleted={numofCompleted} />;
}