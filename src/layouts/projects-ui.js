// import Projects from '../components/project';

class ProjectUI {
    static displayCreateProjectForm = (element) => {
      const formDivWrapper = document.createElement('div');
      const formTitle = document.createElement('title');
      const formH1 = document.createElement('h1');
      formH1.textContent = 'Create a new project';
      formTitle.appendChild(formH1);
      formDivWrapper.appendChild(formTitle);

      const formElement = document.createElement('form');
      const projectNameDiv = document.createElement('div');
      const projectNameLabel = document.createElement('label');
      projectNameLabel.textContent = 'Project Name: ';
      const projectNameInputField = document.createElement('input');
      projectNameInputField.setAttribute('type', 'text');
      projectNameInputField.setAttribute('id', 'project-name');
      projectNameInputField.setAttribute('placeholder', 'Enter the project name here ... ');
      projectNameDiv.appendChild(projectNameLabel);
      projectNameDiv.appendChild(projectNameInputField);
      formElement.appendChild(projectNameDiv);
      formDivWrapper.appendChild(formElement);

      const formSubmitBtnDiv = document.createElement('div');

      const formSubmitBtn = document.createElement('button');
      formSubmitBtn.setAttribute('type', 'button');
      formSubmitBtn.setAttribute('class', 'btn btn-primary');
      formSubmitBtn.textContent = 'Save Project';
      formSubmitBtnDiv.appendChild(formSubmitBtn);

      formDivWrapper.appendChild(formSubmitBtnDiv);

      element.append(formDivWrapper);
    }
}

export default ProjectUI;
