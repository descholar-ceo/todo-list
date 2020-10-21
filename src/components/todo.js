class ToDo {
  constructor(title = 'default title', priority = 1, description = 'default description', dueDate = new Date()) {
    this.priority = priority;
    this.description = description;
    this.dueDate = dueDate;
    this.title = title;
    this.completed = 'false';
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

  get finished() {
    return this.completed;
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

  set finished(currentStatus) {
    this.completed = currentStatus;
  }
}

export default ToDo;