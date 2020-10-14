import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/style.scss';

import ProjectUI from './layouts/projects-ui';
import NavBarUI from './layouts/navbar';
import Project from './components/project';

const content = document.querySelector('#root');

NavBarUI.displayNavbar(content);
ProjectUI.displayCreateProjectForm(content);

const projectName = document.querySelector('#project-name');
const submitBtn = document.querySelector('#submit-project-btn');

submitBtn.addEventListener('click', () => {
  const projectObj = new Project(projectName.value);
  projectObj.addProject();
});
