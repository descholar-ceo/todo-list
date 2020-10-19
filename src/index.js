import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/style.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBarUI from './layouts/navbar';
import HomeUI from './layouts/home';
import ProjectsList from './components/projects-list';
import ProjectUI from './layouts/project-ui';
import ToDoUI from './layouts/todo-ui';

const content = document.querySelector('#root');
const allProjects = new ProjectsList().listAll();
const mainWrapper = () => HomeUI.generateMainWrapper(content);

NavBarUI.displayNavbar(content);

mainWrapper();

const mainElt = document.querySelector('#main-container');


const createProjectForm = () => { ProjectUI.displayCreateProjectForm(mainElt); };
const createTodo = () => { ToDoUI.displayCreateToDoForm(mainElt, allProjects); };
const mainHome = () => HomeUI.displayProjectsList(allProjects, mainElt, createProjectForm, createTodo);

mainHome();

const tabSwitcher = (moduleToDisplay) => {

  mainElt.innerHTML = '';

  moduleToDisplay();

}
const allNavItems = document.querySelectorAll('#nav-item');
const allFooterItems = document.querySelectorAll('#footer-item');

const deleteClassActive = () => {
  allNavItems.forEach(item => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    }
  });
  allFooterItems.forEach(item => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    }
  });
};

const addClassActive = (item) => {
  item.classList.add('active');
};

// eventListeners
allNavItems.forEach(item => {
  item.addEventListener('click', event => {
    if (event.target.classList.contains('home')) {
      deleteClassActive();
      addClassActive(event.target);
      tabSwitcher(mainHome);
    }
    if (event.target.classList.contains('new-project')) {
      deleteClassActive();
      addClassActive(event.target);
      tabSwitcher(createProjectForm);
    }
    if (event.target.classList.contains('to-do-form')) {
      deleteClassActive();
      addClassActive(event.target);
      tabSwitcher(createTodo);
    }
  });
});