class ProjectUI {
  static displayCreateProjectForm = (element) => {
    const formDivWrapper = document.createElement('div');
    formDivWrapper.setAttribute('class', 'col-10 col-md-6 centered-horizontal padding-y-5');
    const formH1 = document.createElement('h3');
    formH1.textContent = 'Create a new project';
    formDivWrapper.appendChild(formH1);

    const formElement = document.createElement('form');
    const projectNameDiv = document.createElement('div');
    projectNameDiv.setAttribute('class', 'form-group');
    const projectNameLabel = document.createElement('label');
    projectNameLabel.textContent = 'Project Name: ';
    const projectNameInputField = document.createElement('input');
    projectNameInputField.setAttribute('type', 'text');
    projectNameInputField.setAttribute('id', 'project-name');
    projectNameInputField.setAttribute('class', 'form-control form-control-sm');
    projectNameInputField.setAttribute('placeholder', 'Enter the project name here ... ');
    projectNameDiv.appendChild(projectNameLabel);
    projectNameDiv.appendChild(projectNameInputField);
    formElement.appendChild(projectNameDiv);
    formDivWrapper.appendChild(formElement);

    const formSubmitBtnDiv = document.createElement('div');

    const formSubmitBtn = document.createElement('button');
    formSubmitBtn.setAttribute('type', 'button');
    formSubmitBtn.setAttribute('id', 'submit-project-btn');
    formSubmitBtn.setAttribute('class', 'btn btn-sm btn-primary');
    formSubmitBtn.textContent = 'Save Project';
    formSubmitBtnDiv.appendChild(formSubmitBtn);

    formDivWrapper.appendChild(formSubmitBtnDiv);

    element.append(formDivWrapper);
  }
}

export default ProjectUI;