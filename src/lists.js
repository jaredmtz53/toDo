const list = [];

const List = (name) => {
    let id = Date.now().toString();
    let tasks = [];
    let completed = [];
    return {
        id,
        tasks,
        completed,
        name
    }
};
