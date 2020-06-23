export function getCompletedTodos(todos: Model) {
  return todos.filter(todo => todo.isCompleted);
}

export function getNumofCompleted(todos: Model) {
  return getCompletedAll(todos).length;
}
