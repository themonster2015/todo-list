export default function toggleTodo(id, todos) {
  const newtodos = todos.map((e) => {
    if (e.index === Number(id)) {
      e.completed = !e.completed;
      return e;
    }
    return e;
  });
  // saving the new updated changes to localStorage is done through this line:
  window.localStorage.setItem('todos', JSON.stringify(newtodos));
  // eslint-disable-next-line
  //location.reload();
}