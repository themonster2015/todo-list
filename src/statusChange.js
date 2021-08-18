export default function toggleTodo(id, todos) {
  const newtodos = todos.map((e) => {
    if (e.index === Number(id)) {
      console.log(e.description);
      e.completed = !e.completed;
      return e;
    }
    return e;
  });
  window.localStorage.setItem('todos', JSON.stringify(newtodos));
  location.reload();
}