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

    rootElement.appendChild(homeDivWrapper);
  }
}

export default home;