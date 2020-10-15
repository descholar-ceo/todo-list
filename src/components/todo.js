class ToDo {
  constructor(title = 'title', priority = 1, description = 'description', dueDate = new Date()) {
    this.priority = priority;
    this.description = description;
    this.dueDate = dueDate;
    this.title = title;
  }

  get name() {
    return this._title;
  }
  get urgency() {
    return this._priority;
  }

  get deadline() {
    return this._dueDate;
  }

  get explanation() {
    return this._description;
  }

  set name(thisTitle) {
    this._title = thisTitle;
  }
  set urgency(priorityLevel) {
    this.priority = priorityLevel;
  }

  set deadline(date) {
    this._dueDate = date;
  }

  set explanation(descriptStr) {
    this._description = descriptStr;
  }
}

export default ToDo;