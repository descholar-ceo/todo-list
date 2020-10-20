class ProjectsList {
  constructor() {
    this.allProjects = localStorage.getItem('projects') ? JSON.parse(localStorage.getItem('projects')) : [];
  }

  addProject = (thisTitle = '') => {
    const newProject = {
      projectId: this.allProjects.length + 1,
      title: thisTitle,
      todos: [],
    };
    this.allProjects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(this.allProjects));
  }

  getIndivualProject = (projectId) => this.allProjects[projectId - 1];

  addTodoToProject = (projectId, todo) => {
    this.getIndivualProject(projectId).todos.push(todo);
    localStorage.setItem('projects', JSON.stringify(this.allProjects));
  };

  editTodoToProject = (projectId, editedTodo, index) => {
    this.getIndivualProject(projectId).todos[index] = editedTodo;

    localStorage.setItem('projects', JSON.stringify(this.allProjects));
  };

  deleteTodoFromProject = (projectId, index) => {
    this.getIndivualProject(projectId).todos.splice(index, 1);
    localStorage.setItem('projects', JSON.stringify(this.allProjects));
  };

  changeTodoStatus = (projectId, index, currentStatus) => {
    const todo = this.getIndivualProject(projectId).todos[index];
    todo.finished = currentStatus;
    this.getIndivualProject(projectId).todos[index] = todo;
    localStorage.setItem('projects', JSON.stringify(this.allProjects));
  };

  getAllTodosOfProject = (projectId) => this.getIndivualProject(projectId).todos

  listAll = () => this.allProjects;
}

export default ProjectsList;