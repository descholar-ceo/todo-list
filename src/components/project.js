class Projects {
  constructor(title) {
    this.title = title;
    this.allProjects = localStorage.getItem('projects') ? JSON.parse(localStorage.getItem('projects')) : [];
  }

  addProject = () => {
    const newProject = {
      projectId: this.allProjects.length + 1,
      title: this.title,
      todos: [],
    };
    this.allProjects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(this.allProjects));
  }

  getIndivualProject = (projectId) => this.allProjects[projectId - 1];

  addTodoToProject = (projectId, todo) => this.getIndivualProject(projectId).todos.push(todo);

  getAllTodosOfProject = (projectId) => this.getIndivualProject(projectId).todos
}

export default Projects;
