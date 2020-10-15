import HomeUI from './home';
import ProjectsList from '../components/projects_list';
import ProjectUI from './project-ui';
import ToDoUI from './todo-ui';

class NavBarUI {
  clear = () => {};

  static displayNavbar = (rootElement) => {
    const headerElt = document.createElement('header');
    headerElt.setAttribute('class', 'primary-bg centered-h-v width-100');
    const navElt = document.createElement('nav');
    navElt.setAttribute('class', 'centered-h-v width-100 flex-md-horizontal-right');
    const navUl = document.createElement('ul');
    navUl.setAttribute('class', 'flex-horizontal-center width-100 width-md-60');
    const navLiHome = document.createElement('li');
    navLiHome.setAttribute('class', 'padding-1 margin-x-1 active home');
    navLiHome.setAttribute('id', 'nav-item-home');

    const projectsObj = new ProjectsList();
    navLiHome.addEventListener('click', (evt) => {
      evt.stopImmediatePropagation();

      rootElement.innerHTML = '';
      NavBarUI.displayNavbar(rootElement);
      HomeUI.displayProjectsList(projectsObj.listAll(), rootElement);
    });

    const navLiNewProject = document.createElement('li');
    navLiNewProject.setAttribute('class', 'padding-1 margin-x-1 contact');
    navLiNewProject.setAttribute('id', 'nav-item-new-project');
    navLiNewProject.addEventListener('click', (evt) => {
      evt.stopImmediatePropagation();

      rootElement.innerHTML = '';
      NavBarUI.displayNavbar(rootElement);
      ProjectUI.displayCreateProjectForm(rootElement);

      const projectName = document.querySelector('#project-name');
      const submitBtn = document.querySelector('#submit-project-btn');

      submitBtn.addEventListener('click', (evt) => {
        evt.stopImmediatePropagation();
        projectsObj.addProject(projectName.value);
      });
    });
    const navLiMenu = document.createElement('li');
    navLiMenu.setAttribute('class', 'padding-1 margin-x-1 menu dropdown-toggle');
    navLiMenu.setAttribute('data-toggle', 'dropdown');
    navLiMenu.setAttribute('id', 'nav-item');
    const dropDownMenu = document.createElement('div');

    dropDownMenu.setAttribute('class', 'dropdown-menu');
    const createToDoItem = document.createElement('li');
    createToDoItem.setAttribute('class', 'dropdown-item cursor-pointer');
    createToDoItem.textContent = 'Create todo';
    createToDoItem.addEventListener('click', (evt) => {
      evt.stopImmediatePropagation();

      rootElement.innerHTML = '';
      NavBarUI.displayNavbar(rootElement);
      ToDoUI.displayCreateToDoForm(rootElement);
    });
    dropDownMenu.appendChild(createToDoItem);
    navLiMenu.appendChild(dropDownMenu);

    const homeIcon = document.createElement('i');
    homeIcon.setAttribute('class', 'fa fa-home hidden-sm');
    homeIcon.setAttribute('aria-hidden', 'true');
    const contactIcon = document.createElement('i');
    contactIcon.setAttribute('class', 'fa fa-address-card hidden-sm');
    contactIcon.setAttribute('aria-hidden', 'true');
    const menuIcon = document.createElement('i');
    menuIcon.setAttribute('class', 'fa fa-bars hidden-sm');
    menuIcon.setAttribute('aria-hidden', 'true');
    const homeText = document.createTextNode('Home');
    const contactText = document.createTextNode('New project');
    const menuText = document.createTextNode('Menu');

    navLiHome.appendChild(homeIcon);
    navLiHome.appendChild(homeText);

    navLiNewProject.appendChild(contactIcon);
    navLiNewProject.appendChild(contactText);

    navLiMenu.appendChild(menuIcon);
    navLiMenu.appendChild(menuText);

    navUl.appendChild(navLiHome);
    navUl.appendChild(navLiNewProject);
    navUl.appendChild(navLiMenu);

    navElt.appendChild(navUl);

    headerElt.appendChild(navElt);

    rootElement.append(headerElt);
  }
}

export default NavBarUI;