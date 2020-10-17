export const createButton = (classes, textContent, btnOnClickMethod) => {
  const button = document.createElement('button');
  button.setAttribute('class', classes);
  button.textContent = textContent;
  button.addEventListener('click', () => {
    if (!btnOnClickMethod()) {
      window.location.reload();
    }
  });
  return button;
};

export const validateForm = (passedFields) => {
  const {
    todoNameInputField,
    todoDescriptInputField,
    todoDateInputField,
  } = passedFields;
  let isError = false;

  const fields = [
    todoNameInputField, todoDescriptInputField, todoDateInputField];
  const invalidFields = [];
  if (!todoNameInputField.value) {
    invalidFields.push(todoNameInputField);
    isError = true;
  }
  if (!todoDateInputField.value) {
    invalidFields.push(todoDateInputField);
    isError = true;
  }
  if (!todoDescriptInputField.value) {
    invalidFields.push(todoDescriptInputField);
    isError = true;
  }

  for (let i = 0; i < fields.length; i += 1) {
    if (!invalidFields.includes(fields[i])) {
      fields[i].classList.remove('error-field');
    } else {
      invalidFields[i].classList.add('error-field');
    }
  }
  return isError;
};
