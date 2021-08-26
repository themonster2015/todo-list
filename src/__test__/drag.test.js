import dragMock from '../__mocks__/dragMock';
import getStorageMock from '../__mocks__/getStorageMock';

describe('drag-n-drop action', () => {
  let todos = [
    {
      description: 'Sleep',
      index: 1,
      completed: false,
    },
    {
      description: 'Eat',
      index: 2,
      completed: true,
    },
    {
      description: 'Code',
      index: 3,
      completed: false,
    },
  ];
  it('should swap item\'index after drag and drop action', () => {
    todos = dragMock(todos, 1, 2);
    expect(todos[0].index).toEqual(2);
    expect(todos[1].index).toEqual(1);
  });
  it('should update localstorage with new swap item\'index after drag and drop action', () => {
    expect(getStorageMock.getItem('todos')[0].index).toEqual(2);
    expect(getStorageMock.getItem('todos')[1].index).toEqual(1);
  });
});