import toToDo from "./to-do";

// create  project factory
const project = (title = 'Project One', note = 'Do this project', toDos = []) => {
  const title = title;
  const note = note;
  const toDos = toDos;
  return {
    title,
    note,
    toDos,
    set toDos(toDoItem) {
      toDos.push(toToDoItem);
    }
  };
};
export default project;