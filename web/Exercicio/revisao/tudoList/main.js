// Função responsável por carregar a lista de tarefas, se não existir, cria uma nova vazia
function loadTasks() {
  if (!localStorage.getItem('todoList')) {
    localStorage.setItem('todoList', JSON.stringify([]));
  }

  return JSON.parse(localStorage.getItem('todoList')); 
}

listTasks(); // Já chamamos para listar

const todo = document.getElementById('todo'); // input a fazer
todo.focus(); // da foco no input ao iniciar a aplicação

// Função responsável por criar uma nova tarefa
function createTask() {
  // Faz uma validação para não deixe o usuário adicionar uma tarefa sem descrição
  if (!todo.value) {
    todo.focus(); // da foco no input quando não tiver valor e o usuário clicar
    return alert('É necessário informar uma tarefa'); // Mostra um alerta padrão do browser, informando o usuário
  }

  const todoList = loadTasks(); // carrega lista armazenada
  
  // Instância uma nova tarefa
  const todoNew = {
    whatToDo: todo.value,
    isDone: false
  }

  todoList.push(todoNew); // adiciona no vetor

  localStorage.setItem('todoList', JSON.stringify(todoList)); // Grava no local storage

  todo.value = ''; // Limpa o input
  todo.focus(); // Depois que limpa da foco no input

  listTasks(); // Lista novamente as tarefas
}

// Função responsável por listar as tarefas
function listTasks() {
  let ul = document.querySelector('ul');

  if (ul) {
    ul.remove();
  }

  ul = document.createElement('ul');
  // Carrego a lista de tarefas
  const todoList = loadTasks();
  
  todoList.forEach((todo, index) => {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.classList.add('checkbox');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', index);
    
    const p = document.createElement('p');
    p.innerHTML = todo.whatToDo;
    
    if (todo.isDone) {
      checkbox.setAttribute('checked', 'checked');
      p.classList.add('isDone');
    }

    const trash = document.createElement('i');
    trash.classList.add('fas', 'fa-trash');
    trash.setAttribute('id', index);

    li.appendChild(checkbox);
    li.appendChild(p);
    li.appendChild(trash);

    ul.appendChild(li);
  });

  document.getElementById('sectionList').append(ul);

  loadAddEventListenerCheckbox();
  loadAddEventListenerTrashButton();
}

// Função responsável por setar uma tarefa como concluída/não concluída
function checkTaskIsDone(event) {
  const inputTarget = event.target;

  let todoList = loadTasks();

  todoList = todoList.map((todo, index) => {
    if(+inputTarget.id === index) {
      todo.isDone = !todo.isDone;
    }
    return todo;
  });

  localStorage.setItem('todoList', JSON.stringify(todoList));

  listTasks()
}

// Função responsável por remover uma  tarefa
function removeTask(event) {
  const trashTarget = event.target;

  let todoList = loadTasks();

  todoList.splice(+trashTarget.id, 1);

  localStorage.setItem('todoList', JSON.stringify(todoList));

  listTasks();
}
 
// Parte de listeners

// Adiciona listener (ouvidor) do botão de adicionar nova tarefa
document.getElementById('addToDoButton')
  .addEventListener('click', createTask);


// Função responsável por adicionar os eventos de click nos inputs do tipo checkbox
function loadAddEventListenerCheckbox() {
  const checkboxes = document.querySelectorAll('.checkbox');
  
  if (checkboxes.length) {
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('click', checkTaskIsDone);
    })
  }
}

// Função responsável por adicionar os eventos de click nos botões de remover
function loadAddEventListenerTrashButton() {
  const trashes = document.querySelectorAll('.fa-trash');
  
  if (trashes.length) {
    trashes.forEach(trash => {
      trash.addEventListener('click', removeTask);
    })
  }
}

// Adiciona evento keypress do teclado, para adicionar uma tarefa também pelo enter
document.addEventListener('keypress', function(event) {
  // Se o botao pressionado no teclado for enter chama a funcao adicionar
  if (event.key === 'Enter') {
    event.preventDefault();
    document.getElementById('addToDoButton').click();
  }
});