import getStorageMock from './getStorageMock';

const editTodoMock = (todos, id, text) => {
  const newTodos = todos.map((el) => {
    if (el.index === Number(id)) {
      el.description = text;
      return el;
    }
    return el;
  });
  getStorageMock.setItem(newTodos);
  return newTodos;
};

export default editTodoMock;