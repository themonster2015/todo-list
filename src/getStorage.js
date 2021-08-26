const getStorage = (todos) => {
  window.localStorage.setItem('todos', JSON.stringify(todos));
};
export default getStorage;