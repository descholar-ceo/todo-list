export const createTodoComponent = (todo, bg) => {
  const todoDiv = document.createElement('div');
  todoDiv.setAttribute('class', `width-60 ${bg} bordered-element padding-2`);

  const todoH1 = document.createElement('h1');
  todoH1.setAttribute('class', 'width-100 centered-text text-1-5');
  todoH1.textContent = todo.title;
  todoDiv.appendChild(todoH1);

  const todoDescrition = document.createElement('p');
  todoDescrition.setAttribute('class', 'text-1-2');
  todoDescrition.textContent = todo.description;
  todoDiv.appendChild(todoDescrition);

  const todoDueDate = document.createElement('p');
  todoDueDate.setAttribute('class', 'text-1');
  todoDueDate.textContent = todo.dueDate;
  todoDiv.appendChild(todoDueDate);

  const todoPriority = document.createElement('p');
  todoPriority.setAttribute('class', 'text-medium');
  todoPriority.textContent = todo.priority;
  todoDiv.appendChild(todoPriority);

  todoDiv.addEventListener('click', () => {});

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