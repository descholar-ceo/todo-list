class home {
  static displayProjectsList = (projects, rootElement) => {
    const homeDivWrapper = document.createElement('div');
    homeDivWrapper.setAttribute('class', 'width-40 centered-horizontal padding-y-5');
    const listH1 = document.createElement('h2');
    listH1.textContent = 'List of Projects';
    homeDivWrapper.appendChild(listH1);
    projects.forEach((project) => {
      const projectDiv = document.createElement('div');
      projectDiv.setAttribute('class', 'project-container d-flex justify-content-between align-items-center');

      const title = document.createElement('h4');
      title.textContent = project.title;

      projectDiv.appendChild(title);
      const toDos = document.createElement('h4');
      toDos.textContent = `${project.todos.length} todos`;
      projectDiv.appendChild(toDos);

      homeDivWrapper.appendChild(projectDiv);
    });
    rootElement.appendChild(homeDivWrapper);
  }
}

export default home;