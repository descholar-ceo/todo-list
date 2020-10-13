import '../../public/bootstrap-4.3.1-dist/css/bootstrap.min.css';
import '../css/index.css';

const content = document.querySelector('#content');
//create navbar
const navEl = document.createElement('nav');
navEl.setAttribute('class', 'nav-bar navbar');
const NavItems = document.createElement('ul');
NavItems.className = 'nav-bar-ul d-flex justify-content-between';
const toDoListLink = document.createElement('li');
toDoListLink.textContent = 'To Do List';
const homeLink = document.createElement('li');
homeLink.textContent = document.createElement('li');
document.body.insertBefore(content, navEl);