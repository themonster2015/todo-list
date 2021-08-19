import './style.css';
import toggleTodo from './statusChange';
import {
  add, edit, remove, clearCompleted,
} from './crud';

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
    const iconContainer = document.createElement('div');
    iconContainer.classList.add('iconContainer');
    const delBtn = document.createElement('button');
    delBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    delBtn.classList.add('delBtn');
    delBtn.id = `${el.index}`;
    const icon = document.createElement('i');
    icon.classList.add('fa', 'fa-ellipsis-v');
    iconContainer.appendChild(delBtn);
    iconContainer.appendChild(icon);
    titleCheckbox.appendChild(title);
    todo.appendChild(titleCheckbox);
    todo.appendChild(iconContainer);
    list.appendChild(todo);
  });
}
const checkInput = (text) => text.trim().length > 0;

const addTodo = document.getElementsByClassName('addInput');
addTodo[0].addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const text = e.target.value;
    console.log(text);
    if (checkInput(text)) {
      add(todos, text);
      location.reload();
    } else {
      alert('Empty text!');
    }
  }
});

const editTodo = document.querySelectorAll('.title');
editTodo.forEach((field) => {
  field.addEventListener('click', (e) => {
    const id = e.target.parentNode.parentNode.getAttribute('id');
    const text = e.target.innerText;
    const newText = prompt('Edit your to-do item: ', text);
    if (newText && checkInput(newText)) {
      edit(todos, id, newText);
      location.reload();
    } else {
      alert('Empty text!');
    }
  });
});

const removeTodos = document.querySelectorAll('.delBtn');
removeTodos.forEach((field) => {
  field.addEventListener('click', (e) => {
    const id = e.target.parentNode.getAttribute('id');
    remove(todos, Number(id));
    location.reload();
  });
});
const clearDone = document.getElementsByClassName('clearCompleted');
clearDone[0].addEventListener('click', (e) => {
  e.preventDefault();
  clearCompleted(todos);
  location.reload();
});