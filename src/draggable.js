import getStorage from './getStorage';

export const dragstart = (e) => {
  e.dataTransfer.setData('text', e.target.id);

//   e
//     .currentTarget
//     .style
//     .backgroundColor = 'yellow';
};
export const dragstop = (e) => {
  e.preventDefault();
};

export const drop = (sortedTodos, target, source) => {
  if (sortedTodos[target - 1]) {
    const temp = sortedTodos[target - 1].index;
    sortedTodos[target - 1].index = sortedTodos[source - 1].index;
    sortedTodos[source - 1].index = temp;

    getStorage(sortedTodos);
    // eslint-disable-next-line
      location.reload();
  }
};