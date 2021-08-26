import getStorage from './getStorage';

export default function toggleTodo(id, todos) {
  const newtodos = todos.map((e) => {
    if (e.index === Number(id)) {
      e.completed = !e.completed;
      return e;
    }
    return e;
  });
  getStorage(newtodos);
  // eslint-disable-next-line
  //location.reload();
}