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

export const createSingleTodoView = (todo, bg, mainElt) => {
  const singleTodoDiv = document.createElement('div');
  singleTodoDiv.setAttribute('class', `width-60 flex-space-between cursor-pointer padding-1 margin-y-1 centered-horizontal ${bg}`);

  const todoTitle = document.createElement('div');
  todoTitle.textContent = `ToDo: ${todo.title}`;

  const todoDueDate = document.createElement('div');
  todoDueDate.textContent = `DueDate: ${todo.dueDate}`;

  singleTodoDiv.appendChild(todoTitle);
  singleTodoDiv.appendChild(todoDueDate);

  singleTodoDiv.addEventListener('click', () => {
    mainElt.innerHTML = '';
    mainElt.append(createTodoComponent(todo, bg));
  });

  return singleTodoDiv;
};

export const saveProject = projectTitleInputField => {
  new ProjectsList().addProject(projectTitleInputField.value);
};