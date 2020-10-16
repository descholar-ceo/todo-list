const createButton = (classes, textContent, btnOnClickMethod) => {
  const button = document.createElement('button');
  button.setAttribute('class', classes);
  button.textContent = textContent;
  button.addEventListener('click', () => {
    btnOnClickMethod();
    window.location.reload();
  });
  return button;
};

export default createButton;