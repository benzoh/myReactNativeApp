import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getTodos } from '../selectors/todos';
import * as Todos from '../modules/todos';
import { Home } from '../components/pages';
import { UserContext } from '../contexts';

export default function ConnectedHome() {
  const todos = useSelector(getTodos);
  console.log({ Todos });

  const { userState } = React.useContext(UserContext);

  const dispatch = useDispatch();
  const actions = React.useMemo(
    () =>
      userState
        ? {
          removeTodo(id: string) {
            dispatch(Todos.removeAndSync(userState.id, id));
          },
          toggleTodo(id: string) {
            dispatch(Todos.toggleAndSync(userState.id, id));
          },
        }
        : null,
    [userState, userState?.id, dispatch],
  );

  if (!actions) {
    return null;
  }

  console.log({ Todos });

  // FIXME: ここで渡すはず
  return <Home todos={todos} actions={actions} />;
}
