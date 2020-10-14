class Projects {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.allProjects = localStorage.getItem('projects') ? JSON.parse(localStorage.getItem('projects')) : [];
  }

  retrieveProjects = () => JSON.parse(this.projects)

  addProject = () => {
    const newProject = {
      projectId: this.retrieveProjects().length + 1,
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      priority: this.priority,
      todos: [],
    };
    this.projects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(this.projects));
  }

  getIndivualProject = (projectId) => this.retrieveProjects()[projectId - 1];

  addTodoToProject = (projectId, todo) => this.getIndivualProject(projectId).todos.push(todo);

  getAllTodsOfProject = (projectId) => this.getIndivualProject(projectId).todos
}

export default Projects;
