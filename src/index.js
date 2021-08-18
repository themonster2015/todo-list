import './style.css';
import toggleTodo from './statusChange';

let todos;
const dummyTodos = [{
  description: 'wash the dish',
  completed: false,
  index: 1,
},
{
  description: 'complete the to do list project',
  completed: false,
  index: 2,
},
{
  description: 'feed the dog',
  completed: false,
  index: 0,
},
];
if (!window.localStorage.getItem('todos')) {
  window.localStorage.setItem('todos', JSON.stringify(dummyTodos));
  todos = dummyTodos;
} else {
  todos = JSON.parse(window.localStorage.getItem('todos'));
}

const arrSort = (arr) => arr.sort((a, b) => a.index - b.index);

const list = document.querySelector('ul');
const sortedTodos = arrSort(todos);
if (sortedTodos.length > 0) {
  sortedTodos.forEach((el) => {
    const todo = document.createElement('div');
    todo.setAttribute('id', `${el.index}`);
    todo.classList.add('todoItem');
    const titleCheckbox = document.createElement('div');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('click', (e) => {
      const id = e.target.parentNode.parentNode.getAttribute('id');
      console.log(id);
      toggleTodo(id, todos);
    });
    titleCheckbox.appendChild(checkbox);
    if (el.completed) {
      todo.classList.add('completed');
      checkbox.classList.add('disableCheckbox');
      checkbox.checked = true;
    } else {
      todo.classList.add('uncomplete');
    }
    const title = document.createElement('p');
    title.classList.add('title');
    title.innerText = el.description;
    const icon = document.createElement('i');
    icon.classList.add('fa', 'fa-ellipsis-v');
    titleCheckbox.appendChild(title);
    todo.appendChild(titleCheckbox);
    todo.appendChild(icon);
    list.appendChild(todo);
  });
}
