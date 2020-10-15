export const createSingleProjectView = () => {};
export const createSingleTodoView = (todo, bg) => {
  const singleTodoDiv = document.createElement('div');
  singleTodoDiv.setAttribute('class', `width-60 flex-space-between cursor-pointer padding-1 margin-y-1 centered-horizontal ${bg}`);

  const todoTitle = document.createElement('div');
  todoTitle.textContent = `ToDo: ${todo.title}`;

  const todoDueDate = document.createElement('div');
  todoDueDate.textContent = `DueDate: ${todo.dueDate}`;

  singleTodoDiv.appendChild(todoTitle);
  singleTodoDiv.appendChild(todoDueDate);

  return singleTodoDiv;
};