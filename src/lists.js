import { serializeToLocalStorage, deserializeFromLocalStorage} from "./localStorage";

const lists =  deserializeFromLocalStorage() || [];

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
const createList = (name) => {
    if(lists.find((list) => list.name === name)) 
        return
    const list = List(name);
    lists.push(list);
    serializeToLocalStorage(lists);
    console.log(lists)
    return list.id

}
const deleteList = (listID) => {
    const index = getListIndex(listID);
    lists.splice(index, 1);
    serializeToLocalStorage(lists, listID);
    console.log(lists);
}
const editList = (listID, newName) => {
    const list = getList(listID);
    list.name = newName;
    serializeToLocalStorage(lists, listID);
}

const getList = (listID) => lists.find((list) => list.id === listID);
const getListIndex = (listID) => lists.findIndex((list) => list.id === listID);

export  {
    lists,
    createList,
    deleteList,
    editList,
     getList,
     getListIndex
}