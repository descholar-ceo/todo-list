class ToDo {
  constructor(title = 'title', priority = 1, description = 'description', dueDate = new Date()) {
    this.priority = priority;
    this.description = description;
    this.dueDate = dueDate;
    this.title = title;
  }

  get name() {
    return this.title;
  }

  get urgency() {
    return this.priority;
  }

  get deadline() {
    return this.dueDate;
  }

  get explanation() {
    return this.description;
  }

  set name(thisTitle) {
    this.title = thisTitle;
  }

  set urgency(priorityLevel) {
    this.priority = priorityLevel;
  }

  set deadline(date) {
    this.dueDate = date;
  }

  set explanation(descriptStr) {
    this.description = descriptStr;
  }
}

export default ToDo;