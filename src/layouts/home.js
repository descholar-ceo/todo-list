import ProjectUI from './project-ui';

class home {
  static displayProjectsList = (projects, rootElement) => {
    const homeDivWrapper = document.createElement('div');
    homeDivWrapper.setAttribute('class', 'col-10 col-md-6 centered-horizontal padding-y-5');
    const listH1 = document.createElement('h2');
    listH1.textContent = 'List of Projects';
    homeDivWrapper.appendChild(listH1);
    projects.forEach((project) => {
      const projectDiv = document.createElement('div');
      projectDiv.setAttribute('class', 'project-container cursor-pointer pl-4 pr-4  d-flex justify-content-between align-items-center');

      const title = document.createElement('h4');
      title.textContent = project.title;

      projectDiv.appendChild(title);
      const toDos = document.createElement('h4');
      toDos.textContent = `${project.todos.length} todos`;
      projectDiv.appendChild(toDos);

      homeDivWrapper.appendChild(projectDiv);
      projectDiv.addEventListener('click', () => {
        ProjectUI.displayIndividualProject(rootElement, project);
      });
    });

    const btnsDiv = document.createElement('div');
    btnsDiv.setAttribute('class', 'd-flex justify-content-between align-items-center');
    const createProjectBtn = document.createElement('button');
    createProjectBtn.setAttribute('class', 'mt-5 btn-primary create-project-btn p-4');
    createProjectBtn.textContent = 'Create a project';
    btnsDiv.appendChild(createProjectBtn);

    const createToDoBtn = document.createElement('button');
    createToDoBtn.setAttribute('class', 'ml-5 mt-5 btn-primary create-project-btn p-4');
    createToDoBtn.textContent = 'Create a todo';
    btnsDiv.appendChild(createToDoBtn);
    homeDivWrapper.appendChild(btnsDiv);
    rootElement.appendChild(homeDivWrapper);
  }
}

export default home;