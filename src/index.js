import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/style.scss';

const content = document.querySelector('#root');
//create navbar
const navEl = document.createElement('nav');
navEl.setAttribute('class', 'nav-bar navbar');
const navItems = document.createElement('ul');
navItems.setAttribute('class', 'nav-bar-ul w-100 d-flex justify-content-between justify-content-md-center');
const toDoListLink = document.createElement('li');
toDoListLink.textContent = 'To Do List';
const homeLink = document.createElement('li');
homeLink.textContent = 'Home';
navItems.appendChild(homeLink);
navItems.appendChild(toDoListLink);
navEl.appendChild(navItems);
content.append(navEl);

//Create default project and toDos