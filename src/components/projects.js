class Projects {
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

  addTodoToProject = (projectId, todo) => this.getIndivualProject(projectId).todos.push(todo);

  getAllTodosOfProject = (projectId) => this.getIndivualProject(projectId).todos
  allProjects = () => this.allProjects;
}

export default Projects;