import { createSingleProjectView } from '../helpers/projects-helpers';
import ProjectUI from './project-ui';

class home {
  static generateMainWrapper = (rootElement) => {
    const mainElt = document.createElement('main');
    mainElt.setAttribute('class', 'main-page width-100 height-100');
    mainElt.setAttribute('id', 'main-container');
    rootElement.append(mainElt);
  }

  static displayProjectsList = (projects, rootElement, createProjectFunc, createTodoFunc) => {
    const homeDivWrapper = document.createElement('div');
    homeDivWrapper.setAttribute('class', 'col-10 col-md-6 centered-horizontal padding-y-5');
    const listH1 = document.createElement('h2');
    listH1.textContent = 'List of Projects';
    homeDivWrapper.appendChild(listH1);
    const allProjects = [];
    projects.forEach((project) => {
      allProjects.push(createSingleProjectView(project, ProjectUI, rootElement));
    });
    allProjects.map(curr => homeDivWrapper.appendChild(curr));
    rootElement.appendChild(homeDivWrapper);
    const btnsDiv = document.createElement('ul');
    const collapseContent = document.createElement('button');
    collapseContent.setAttribute('class', 'mb-2 btn-plus centered-horizontal mt-5 d-flex flex-column align-items-center')
    const collapseLink = document.createElement('a');
    collapseLink.setAttribute('role', 'button');
    collapseLink.setAttribute('data-toggle', 'collapse');
    collapseLink.setAttribute('aria-expanded', 'false');
    collapseLink.setAttribute('aria-controls', 'collapse-items');
    const plusIcon = document.createElement('i');
    plusIcon.className = 'fa fa-plus-circle fa-2x icon-plus';
    plusIcon.setAttribute('aria-hidden', 'true');
    collapseLink.appendChild(plusIcon);
    collapseLink.href = '#collapse-items';
    collapseContent.appendChild(collapseLink);
    btnsDiv.setAttribute('class', 'collapse card-body centered-horizontal border col-10 col-md-3');
    const buttonNewProject = document.createElement('li');
    const buttonCreateToDo = document.createElement('li');
    buttonNewProject.setAttribute('class', 'border p-3');
    buttonNewProject.textContent = 'Add a new project'
    buttonNewProject.addEventListener('click', () => {
      createProjectFunc();
    });
    buttonCreateToDo.setAttribute('class', 'border p-3');
    buttonCreateToDo.textContent = 'Add a todo';
    buttonCreateToDo.addEventListener('click', () => {
      createTodoFunc();
    });

    btnsDiv.appendChild(buttonNewProject);
    btnsDiv.appendChild(buttonCreateToDo);
    btnsDiv.setAttribute('id', 'collapse-items');

    rootElement.appendChild(homeDivWrapper);
    rootElement.appendChild(collapseContent);
    rootElement.appendChild(btnsDiv);
  }
}

export default home;