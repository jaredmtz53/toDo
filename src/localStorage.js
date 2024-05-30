const localStorageKey = "lists"
const localStorageIdKey = "listsId"

function serializeToLocalStorage(lists, selectedListId) {
    localStorage.setItem(localStorageKey, JSON.stringify(lists));
    localStorage.setItem(localStorageIdKey, JSON.stringify(selectedListId));
}

function deserializeFromLocalStorage() {
    let deserialized = JSON.parse(localStorage.getItem(localStorageKey));
    return deserialized
}
function deserializeIDFromLocalStorage() {
    let deserialized = JSON.parse(localStorage.getItem(localStorageIdKey));
    return deserialized
}


export {serializeToLocalStorage, deserializeFromLocalStorage , deserializeIDFromLocalStorage} 