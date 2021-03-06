const taskList = '#lista-tarefas';

function createLi(text) {
  const listItem = document.createElement('li');
  listItem.innerText = text;
  listItem.className = 'task';
  document.getElementById('lista-tarefas').appendChild(listItem);
}

function addItem() {
  const button = document.getElementById('criar-tarefa');
  const textBox = document.getElementById('texto-tarefa');
  button.addEventListener('click', () => {
    const text = textBox.value;
    createLi(text);
    textBox.value = '';
  });
}

// codigo abaixo otimizado apos verificar o codigo de alguns colegas e aprendi o event e o target
function setColor() {
  const list = document.querySelector(taskList);
  list.addEventListener('click', (event) => {
    const selected = document.querySelector('.selected');
    if (selected === null) {
      event.target.classList.add('selected');
    } else {
      selected.classList.remove('selected');
      event.target.classList.add('selected');
    }
  });
}

function doneTaskSelect(array) {
  let result = 0;
  for (let index = 0; index < array.length; index += 1) {
    const element = array[index];
    if (element === 'completed') {
      result = 1;
    }
  }
  return result;
}

function doneTask() {
  const list = document.querySelector(taskList);
  list.addEventListener('dblclick', (event) => {
    const array = event.target.classList;
    const result = doneTaskSelect(array);
    if (result === 1) {
      event.target.classList.remove('completed');
    } else if (result === 0) {
      event.target.classList.add('completed');
    }
  });
}

function clearTasks() {
  const list = document.querySelector(taskList);
  const btn = document.querySelector('#apaga-tudo');
  btn.addEventListener('click', () => {
    while (list.hasChildNodes()) { // essa parte do código vi no w3school
      list.removeChild(list.firstChild);
    }
  });
}

function clearCompleted() {
  const btn = document.querySelector('#remover-finalizados');
  const done = document.getElementsByClassName('completed');
  btn.addEventListener('click', () => {
    while (done.length > 0) {
      done[0].remove();
    }
  });
}

window.onload = function run() {
  recoveryList();
  addItem();
  setColor();
  doneTask();
  clearTasks();
  clearCompleted();
  saveList();
};
