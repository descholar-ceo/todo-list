class NavBarUI {
  static displayNavbar = (rootElement) => {
    const headerElt = document.createElement('header');
    headerElt.setAttribute('class', 'primary-bg centered-h-v width-100');

    const navElt = document.createElement('nav');
    navElt.setAttribute('class', 'centered-h-v width-100 flex-md-horizontal-right');

    const navUl = document.createElement('ul');
    navUl.setAttribute('class', 'flex-horizontal-center width-100 width-md-60');

    const navLiHome = document.createElement('li');
    navLiHome.setAttribute('class', 'padding-1 margin-x-1 active home');
    navLiHome.setAttribute('id', 'nav-item');
    const homeIcon = document.createElement('i');
    homeIcon.setAttribute('class', 'fa fa-home hidden-sm');
    homeIcon.setAttribute('aria-hidden', 'true');
    const homeText = document.createTextNode('Home');
    navLiHome.appendChild(homeIcon);
    navLiHome.appendChild(homeText);
    navUl.appendChild(navLiHome);

    const navLiNewProject = document.createElement('li');
    navLiNewProject.setAttribute('class', 'padding-1 margin-x-1 new-project');
    navLiNewProject.setAttribute('id', 'nav-item');
    const createNewProjectIcon = document.createElement('i');
    createNewProjectIcon.setAttribute('class', 'fa fa-pencil-square-o hidden-sm');
    createNewProjectIcon.setAttribute('aria-hidden', 'true');
    const createNewProjectText = document.createTextNode('New project');
    navLiNewProject.appendChild(createNewProjectIcon);
    navLiNewProject.appendChild(createNewProjectText);
    navUl.appendChild(navLiNewProject);

    const navLiNewToDo = document.createElement('li');
    navLiNewToDo.setAttribute('class', 'padding-1 margin-x-1 to-do-form');
    navLiNewToDo.setAttribute('id', 'nav-item');
    const createNewTodoIcon = document.createElement('i');
    createNewTodoIcon.setAttribute('class', 'fa fa-pencil-square-o hidden-sm');
    createNewTodoIcon.setAttribute('aria-hidden', 'true');
    const createNewTodoText = document.createTextNode('Add a todo');
    navLiNewToDo.appendChild(createNewTodoIcon);
    navLiNewToDo.appendChild(createNewTodoText);
    navUl.appendChild(navLiNewToDo);

    // wrap up
    navElt.appendChild(navUl);
    headerElt.appendChild(navElt);
    rootElement.append(headerElt);
  }
}

export default NavBarUI;