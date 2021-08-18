import './style.css';

const todos = [{
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
const arrSort = (arr) => arr.sort((a, b) => a.index - b.index);

// function component() {
const list = document.querySelector('ul');
const sortedTodos = arrSort(todos);
if (sortedTodos.length > 0) {
  sortedTodos.forEach((el) => {
    const todo = document.createElement('div');
    todo.setAttribute('class', 'todoItem');
    const titleCheckbox = document.createElement('div');
    if (el.completed) {
      todo.classList.add('completed');
    } else {
      todo.classList.add('uncomplete');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      titleCheckbox.appendChild(checkbox);
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

//  return list;
// }

// document.body.appendChild(component());