import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/style.scss';

import ProjectUI from './layouts/projects-ui';
import NavBarUI from './layouts/navbar';
import HomeUI from './layouts/home';
import Projects from './components/projects';

const content = document.querySelector('#root');
const projectsObj = new Projects();

NavBarUI.displayNavbar(content);
const homeBtn = document.querySelector('#nav-item-home');

ProjectUI.displayCreateProjectForm(content);

const projectName = document.querySelector('#project-name');
const submitBtn = document.querySelector('#submit-project-btn');

submitBtn.addEventListener('click', () => {
  projectsObj.addProject(projectName.value);
});

homeBtn.addEventListener('click', () => {
  clear();
  const projectsList = projectsObj.allProjects;
  HomeUI.displayProjectsList(projectsList, content);
});

const clear = () => {
  content.innerHTML = '';
  NavBarUI.displayNavbar(content);
};