import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/style.scss';

import ProjectUI from './layouts/projects-ui';
import NavBarUI from './layouts/navbar';

const content = document.querySelector('#root');
// create navbar
NavBarUI.displayNavbar(content);
ProjectUI.displayCreateProjectForm(content);
