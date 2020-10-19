import { createButton } from '../helpers/global-helpers';
import { createSingleTodoView, saveProject } from '../helpers/projects-helpers';
import { getTodoBackground } from '../helpers/todo-helpers';

class ProjectUI {
  static displayCreateProjectForm = (element) => {
    element.innerHTML = '';
    const formDivWrapper = document.createElement('div');
    formDivWrapper.setAttribute('class', 'col-10 col-md-6 centered-horizontal padding-y-5');
    const formH1 = document.createElement('h3');
    formH1.textContent = 'Create a new project';
    formDivWrapper.appendChild(formH1);

    const formElement = document.createElement('form');
    const projectNameDiv = document.createElement('div');
    projectNameDiv.setAttribute('class', 'form-group');
    const projectNameLabel = document.createElement('label');
    projectNameLabel.textContent = 'Project Name: ';
    const projectNameInputField = document.createElement('input');
    projectNameInputField.setAttribute('type', 'text');
    projectNameInputField.setAttribute('id', 'project-name');
    projectNameInputField.setAttribute('class', 'form-control form-control-sm');
    projectNameInputField.setAttribute('placeholder', 'Enter the project name here ... ');
    projectNameDiv.appendChild(projectNameLabel);
    projectNameDiv.appendChild(projectNameInputField);
    formElement.appendChild(projectNameDiv);
    formDivWrapper.appendChild(formElement);

    const formSubmitBtnDiv = document.createElement('div');
    const saveProjectMethod = () => {
      if (projectNameInputField.value) {
        return saveProject(projectNameInputField);
      }
      projectNameInputField.classList.add('error-field');
      return true;
    };

    const formSubmitBtn = createButton('btn btn-sm btn-primary', 'Save Project', saveProjectMethod);
    formSubmitBtnDiv.appendChild(formSubmitBtn);

    formDivWrapper.appendChild(formSubmitBtnDiv);

    element.append(formDivWrapper);
  }

  static displayIndividualProject = (rootElement, projectToDisplay) => {
    rootElement.innerHTML = '';
    const title = document.createElement('h4');
    title.setAttribute('class', 'text-center m-5');
    title.textContent = projectToDisplay.title;
    rootElement.appendChild(title);
    const allTodosInAProject = [];
    let posn = 0;
    projectToDisplay.todos.forEach(curr => {
      allTodosInAProject.push(createSingleTodoView(
        curr,
        [projectToDisplay.projectId, posn],
        getTodoBackground(curr),
        rootElement,
      ));
      posn += 1;
    });

    allTodosInAProject.map(todo => rootElement.append(todo));
  };
}

export default ProjectUI;