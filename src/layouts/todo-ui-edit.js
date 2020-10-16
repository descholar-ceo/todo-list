import createButton from '../helpers/global-helpers';
import { editTodo } from '../helpers/todo-helpers';

class ToDoUI {
  static displayEditToDoForm = (element, project, toDoIndex) => {
    const toToDoToEdit = project.todos[toDoIndex];
    const formDivWrapper = document.createElement('div');
    formDivWrapper.setAttribute('class', 'col-10 col-md-6 centered-horizontal padding-y-5');
    const formH1 = document.createElement('h3');
    formH1.textContent = 'Edit todo';
    formDivWrapper.appendChild(formH1);

    const formElement = document.createElement('form');
    const todoNameDiv = document.createElement('div');
    todoNameDiv.setAttribute('class', 'form-group');
    const todoNameLabel = document.createElement('label');
    todoNameLabel.textContent = 'ToDo Name: ';
    const todoNameInputField = document.createElement('input');
    todoNameInputField.setAttribute('type', 'text');

    todoNameInputField.setAttribute('id', 'todo-name');
    todoNameInputField.setAttribute('class', 'mb-5 form-control form-control-sm');
    todoNameInputField.setAttribute('placeholder', `${toToDoToEdit.title}`);
    todoNameInputField.value = toToDoToEdit.title;

    todoNameDiv.appendChild(todoNameLabel);
    todoNameDiv.appendChild(todoNameInputField);

    const chooseProject = document.createElement('div');
    chooseProject.setAttribute('class', 'input-group mb-3');
    const inputLabelDiv = document.createElement('div');
    inputLabelDiv.setAttribute('class', 'input-group-prepend');
    chooseProject.appendChild(inputLabelDiv);

    const projectSelect = document.createElement('select');
    chooseProject.appendChild(projectSelect);
    projectSelect.setAttribute('class', 'custom-select mb-5 form-control form-control-sm');
    projectSelect.setAttribute('id', 'todo-project');
    const todoProjectLabel = document.createElement('label');
    todoProjectLabel.textContent = 'ToDo Project: ';

    const choice = document.createElement('option');
    choice.value = project.projectId;
    choice.textContent = project.title;
    projectSelect.appendChild(choice);

    todoNameDiv.appendChild(todoProjectLabel);
    todoNameDiv.appendChild(chooseProject);

    const todoDescriptInputField = document.createElement('input');
    todoDescriptInputField.setAttribute('id', 'todo-description');
    todoDescriptInputField.setAttribute('class', 'mb-5 form-control form-control-sm');
    const todoDescriptLabel = document.createElement('label');
    todoDescriptLabel.textContent = 'ToDo Description: ';
    todoDescriptInputField.setAttribute('type', 'text');
    todoDescriptInputField.setAttribute('placeholder', `${toToDoToEdit.description}`);
    todoDescriptInputField.value = toToDoToEdit.description;
    todoNameDiv.appendChild(todoDescriptLabel);
    todoNameDiv.appendChild(todoDescriptInputField);

    const todoNumInputField = document.createElement('input');
    todoNumInputField.setAttribute('id', 'todo-priority');
    todoNumInputField.setAttribute('class', 'mb-5 form-control form-control-sm');
    const todoNumLabel = document.createElement('label');
    todoNumLabel.textContent = 'ToDo Priority: ';
    todoNumInputField.setAttribute('type', 'number');
    todoNumInputField.setAttribute('placeholder', `${toToDoToEdit.priority}`);
    todoNumInputField.value = toToDoToEdit.priority;
    todoNameDiv.appendChild(todoNumLabel);
    todoNameDiv.appendChild(todoNumInputField);

    const todoDateInputField = document.createElement('input');
    todoDateInputField.setAttribute('id', 'todo-date');
    todoDateInputField.setAttribute('class', 'mb-5 form-control form-control-sm');
    const todoDateLabel = document.createElement('label');
    todoDateLabel.textContent = 'ToDo Date: ';
    todoDateInputField.setAttribute('type', 'date');
    todoDateInputField.setAttribute('placeholder', `${toToDoToEdit.dueDate}`);
    todoDateInputField.value = toToDoToEdit.dueDate;
    todoNameDiv.appendChild(todoDateLabel);
    todoNameDiv.appendChild(todoDateInputField);

    formElement.appendChild(todoNameDiv);

    formDivWrapper.appendChild(formElement);

    const formSubmitBtnDiv = document.createElement('div');

    const todoParams = {
      todoNameInputField,
      projectSelect,
      todoDescriptInputField,
      todoNumInputField,
      todoDateInputField,
    };
    const formSubmitBtn = createButton('btn btn-sm btn-primary', 'Edit todo', () => editTodo(todoParams, toDoIndex));
    formSubmitBtnDiv.appendChild(formSubmitBtn);

    formDivWrapper.appendChild(formSubmitBtnDiv);

    element.append(formDivWrapper);
  }
}

export default ToDoUI;