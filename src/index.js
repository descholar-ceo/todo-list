import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/style.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBarUI from './layouts/navbar';
import HomeUI from './layouts/home';
import ProjectsList from './components/projects_list';

const content = document.querySelector('#root');
const projectsObj = new ProjectsList();

NavBarUI.displayNavbar(content);
HomeUI.displayProjectsList(projectsObj.listAll(), content);