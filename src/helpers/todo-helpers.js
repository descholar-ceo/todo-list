import ProjectsList from '../components/projects-list';
import ToDo from '../components/todo';

export const editTodo = (todo, index) => {
  const { value: projectId } = todo.projectSelect;
  const { value: todoTitle } = todo.todoNameInputField;
  const { value: todoPriority } = todo.todoNumInputField;
  const { value: dueDate } = todo.todoDateInputField;
  const { value: description } = todo.todoDescriptInputField;
  const editedTodo = new ToDo(todoTitle, todoPriority, description, dueDate);
  new ProjectsList().editTodoToProject(projectId, editedTodo, index);
};

export const createTodoComponent = (todo, bg) => {
  const todoDiv = document.createElement('div');
  todoDiv.setAttribute('class', `width-60 ${bg} bordered-element padding-2 centered-horizontal`);

  const todoH1 = document.createElement('h1');
  todoH1.setAttribute('class', 'width-100 centered-text text-1-5');
  todoH1.textContent = todo.title;
  todoDiv.appendChild(todoH1);

  const todoDescription = document.createElement('p');
  todoDescription.setAttribute('class', 'text-1-2');
  todoDescription.textContent = `Description: ${todo.description}`;
  todoDiv.appendChild(todoDescription);

  const todoDueDate = document.createElement('p');
  todoDueDate.setAttribute('class', 'text-1');
  todoDueDate.textContent = `Due Date: ${todo.dueDate}`;
  todoDiv.appendChild(todoDueDate);

  const todoPriority = document.createElement('p');
  todoPriority.setAttribute('class', 'text-medium');
  todoPriority.textContent = `Priority: This is the ${todo.priority}th priority`;
  todoDiv.appendChild(todoPriority);

  const statusItem = document.createElement('p');
  statusItem.setAttribute('class', 'text-medium');
  statusItem.textContent = 'Status: This task is still unfnished.';
  if (todo.finished === true) {
    statusItem.textContent = 'Status: This task has been completed.';
  }

  todoDiv.appendChild(statusItem);
  return todoDiv;
};

export const getTodoBackground = todo => {
  let bg = '';
  switch (todo.priority) {
    case '1':
      bg = 'priority-1-bg';
      break;
    case '2':
      bg = 'priority-2-bg';
      break;
    case '3':
      bg = 'priority-3-bg';
      break;
    case '4':
      bg = 'priority-4-bg';
      break;
    default:
      bg = 'priority-1-bg';
      break;
  }
  return bg;
};

export const saveTodo = todo => {
  const { value: projectId } = todo.projectSelect;
  const { value: todoTitle } = todo.todoNameInputField;
  const { value: todoPriority } = todo.todoNumInputField;
  const { value: dueDate } = todo.todoDateInputField;
  const { value: description } = todo.todoDescriptInputField;
  const newTodo = new ToDo(todoTitle, todoPriority, description, dueDate);
  new ProjectsList().addTodoToProject(projectId, newTodo);
};