import editTodoMock from '../__mocks__/editTodoMock';

describe('edit Todo', () => {
  const todos = [
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
  const text = 'Eat X 2';
  it('should update description', () => {
    expect(editTodoMock(todos, 2, text)[1].description).toEqual('Eat X 2');
  });
});