import createButton from '../helpers/global-helpers';
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
    const btnsDiv = document.createElement('div');
    // btnsDiv.setAttribute('c', 'parent-item');
    const collapseLink = document.createElement('a');
    collapseLink.href

    bvn module.exports.......................................
    btnsDiv.setAttribute('class', 'col-10 col-md-6 d-flex flex-column align-items-center flex-sm-row centered-horizontal padding-y-5 d-flex justify-content-between align-items-center');
    const btnClasses = 'new-project mt-5 btn-primary btn-sm create-project-btn p-4';
    const buttonNewProject = document.createElement('button');
    const buttonCreateToDo = document.createElement('button');
    buttonNewProject.setAttribute('class', `${btnClasses} new-project-btn`);
    // buttonNewProject.innerHTML = < i class = `fa fa-plus-circle` > < /i>;
    buttonNewProject.addEventListener('click', () => {
      createProjectFunc();
    });
    buttonCreateToDo.setAttribute('class', `${btnClasses} to-do-form-btn`);
    buttonCreateToDo.innerHTML = '&plus; todo';
    buttonCreateToDo.addEventListener('click', () => {
      createTodoFunc();
    });

    btnsDiv.appendChild(buttonNewProject);
    btnsDiv.appendChild(buttonCreateToDo)

    rootElement.appendChild(btnsDiv);
  }
}

export default home;