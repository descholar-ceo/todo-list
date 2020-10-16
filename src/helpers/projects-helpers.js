import ProjectsList from '../components/projects-list';
import { createTodoComponent } from './todo-helpers';

export const createSingleProjectView = (project, ProjectUI, rootElement) => {
  const projectDiv = document.createElement('div');
  projectDiv.setAttribute('class', 'project-container cursor-pointer pl-4 pr-4  d-flex justify-content-between align-items-center');

  const title = document.createElement('h4');
  title.textContent = project.title;

  projectDiv.appendChild(title);
  const toDos = document.createElement('h4');
  toDos.textContent = `${project.todos.length} todo(s)`;
  projectDiv.appendChild(toDos);
  projectDiv.addEventListener('click', () => {
    ProjectUI.displayIndividualProject(rootElement, project);
  });
  return projectDiv;
};

export const createSingleTodoView = (todo, toDoDetails, bg, mainElt) => {
  const posn = toDoDetails[1];
  const projectId = toDoDetails[0];
  const singleTodoDiv = document.createElement('div');
  singleTodoDiv.id = `id-${projectId}-${posn}`;
  singleTodoDiv.setAttribute('class', `width-60 cursor-pointer padding-1 margin-y-1 centered-horizontal ${bg}`);
  const singleTodoBtns = document.createElement('div');
  singleTodoBtns.setAttribute('class', 'pb-2 col-12 d-flex flex-space-between');
  const editBtn = document.createElement('i');

  editBtn.setAttribute('class', 'fa fa-pencil-square-o')
  singleTodoBtns.append(editBtn);

  const deleteBtn = document.createElement('i');

  deleteBtn.setAttribute('class', 'fa fa-trash')
  deleteBtn.addEventListener('click', (evt) => {
    const toDoDivEl = (evt.target.parentNode).parentNode
    const toDoDivElId = toDoDivEl.id.split('-');
    new ProjectsList().deleteTodoFromProject(parseInt(toDoDivElId[1]), parseInt(toDoDivElId[2]));
    toDoDivEl.remove();
  });
  singleTodoBtns.append(deleteBtn);

  const infoBtn = document.createElement('i');
  infoBtn.setAttribute('class', 'fa fa-info-circle')
  infoBtn.addEventListener('click', (evt) => {
    mainElt.innerHTML = '';
    mainElt.append(createTodoComponent(todo, bg));
  });
  singleTodoBtns.append(infoBtn);

  const singleTodoContent = document.createElement('div');
  singleTodoContent.setAttribute('class', 'col-12 d-flex flex-space-between');
  const todoTitle = document.createElement('div');
  todoTitle.textContent = `ToDo: ${todo.title}`;
  const todoDueDate = document.createElement('div');
  todoDueDate.textContent = `DueDate: ${todo.dueDate}`;

  singleTodoContent.appendChild(todoTitle);
  singleTodoContent.appendChild(todoDueDate);

  singleTodoDiv.appendChild(singleTodoBtns);
  singleTodoDiv.appendChild(singleTodoContent);

  return singleTodoDiv;
};

export const saveProject = projectTitleInputField => {
  new ProjectsList().addProject(projectTitleInputField.value);
};