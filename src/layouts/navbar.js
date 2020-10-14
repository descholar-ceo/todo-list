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
    navLiHome.setAttribute('id', 'nav-item-home');
    const navLiContact = document.createElement('li');
    navLiContact.setAttribute('class', 'padding-1 margin-x-1 contact');
    navLiContact.setAttribute('id', 'nav-item');
    const navLiMenu = document.createElement('li');
    navLiMenu.setAttribute('class', 'padding-1 margin-x-1 menu');
    navLiMenu.setAttribute('id', 'nav-item');
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

    navLiContact.appendChild(contactIcon);
    navLiContact.appendChild(contactText);

    navLiMenu.appendChild(menuIcon);
    navLiMenu.appendChild(menuText);

    navUl.appendChild(navLiHome);
    navUl.appendChild(navLiContact);
    navUl.appendChild(navLiMenu);

    navElt.appendChild(navUl);

    headerElt.appendChild(navElt);

    rootElement.append(headerElt);
  }
}

export default NavBarUI;