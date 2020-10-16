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

  static displayProjectsList = (projects, rootElement) => {
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

    const btnsDiv = document.createElement('div');
    btnsDiv.setAttribute('class', 'd-flex justify-content-between align-items-center');
    const btnClasses = 'mt-5 btn-primary btn-sm create-project-btn p-4';
    btnsDiv.appendChild(createButton(btnClasses, 'Create a project', undefined));
    btnsDiv.appendChild(createButton(btnClasses, 'Create a todo', undefined));

    homeDivWrapper.appendChild(btnsDiv);
    rootElement.appendChild(homeDivWrapper);
  }
}

export default home;