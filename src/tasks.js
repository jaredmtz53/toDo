const createTask = (title, description, dueDate, priority) => {
    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        checkList: checkList
    }
}
export default createTask;