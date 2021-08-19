export const add = (todos, item) => {
  todos.push({
    description: item,
    index: todos.length + 1,
    completed: false,
  });
  window.localStorage.setItem('todos', JSON.stringify(todos));
};

export const remove = (todos, id) => {
  const newTodos = todos.filter((el) => el.index !== id);
  newTodos.sort((a, b) => a.index - b.index);
  for (let i = 1; i <= newTodos.length; i += 1) {
    newTodos[i - 1].index = i;
  }
  console.log(newTodos);
  window.localStorage.setItem('todos', JSON.stringify(newTodos));
};

export const edit = (todos, id, text) => {
  const newTodos = todos.map((el) => {
    if (el.index === Number(id)) {
      el.description = text;
      return el;
    }
    return el;
  });
  window.localStorage.setItem('todos', JSON.stringify(newTodos));
};

export const clearCompleted = (todos) => {
  const newTodos = todos.filter((el) => el.completed === false);
  window.localStorage.setItem('todos', JSON.stringify(newTodos));
};