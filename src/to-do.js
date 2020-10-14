// create  todo factory
const toToDo = (title = 'Do homework', description = 'Do the home work assignment', dueDate = new Date(), priority = 1) => {
  const title = title;
  const description = description;
  const dueDate = dueDate;
  const priority = priority;
  return { title, description, dueDate, priority };
};
export default toToDo;