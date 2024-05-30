/*-----------SIDEBAR------------*/
import * as listMod from './lists'
import * as localStorage from './localStorage'
//importing images 
import editbtn from './assets/edit.svg'
import trashbtn from './assets/trash.svg'
import logo from './assets/logo.svg'
function controller() {
    // Get DOM elements
    const listsContent = document.querySelector('.lists-content');
    const addListBtn = document.querySelector('.add-new-list-btn');
    const addListData = document.querySelector('#add-list-datafield');
    const editModal = document.querySelector('.edit-modal');
    const overlay = document.querySelector('.overlay');

    const closeEdit = document.createElement('div');
    const submit = document.createElement('button');
    const editInput = document.createElement('input');
    const editform = document.createElement("form");
    const editModalHeader = document.createElement('h3');
    
    // Event listener for adding a new list and Saved Lists
    addListBtn.addEventListener('click', createListCard);
    window.addEventListener('load', generateSavedCards);

    function generateSavedCards() {
        const storedCards = localStorage.deserializeFromLocalStorage();
        storedCards.forEach(card => {
            console.log(card.id);
            const storedListCard = createListElement(card.name, card.id);
            listsContent.appendChild(storedListCard);
        });
    }

    // Function to create a new list card
    function createListCard() {
        const newListID = listMod.createList(addListData.value);
        const listCard = createListElement(addListData.value, newListID);
        listsContent.appendChild(listCard);
    
    }

    // Function to create list element
    function createListElement(title, id) {
        const listCard = document.createElement('div');
        const listTitle = document.createElement('p');
        const editListBtn = createIconButton(editbtn);
        const deleteListBtn = createIconButton(trashbtn);

        // Add classes to elements
        listCard.classList.add('list-card');
        listTitle.classList.add('list-title');
        editListBtn.classList.add('list-edit');
        deleteListBtn.classList.add('list-delete');
        editModal.classList.add('edit-modal');

        // Container for edit and delete buttons
        const listActions = document.createElement('div');
        listActions.classList.add('list-actions');
        listActions.appendChild(editListBtn);
        listActions.appendChild(deleteListBtn);

        // Set list title
        listTitle.textContent = title;

        // Append elements
        listCard.appendChild(listTitle);
        listCard.appendChild(listActions);


        // Event listener for delete button
        deleteListBtn.addEventListener("click", () => {
            listMod.deleteList(id);
            listsContent.removeChild(listCard);

        });
        // Event listener for edit button
        editListBtn.addEventListener("click", () => {
            createEditListModal();
            editModal.classList.add("active");
            overlay.style.display = 'block';
            
        });
        closeEdit.addEventListener("click", () => {
            overlay.style.display = 'none';
            editModal.classList.remove("active");
            editModal.innerHTML = "";
        });
        editform.addEventListener("submit", (e) => {
            e.preventDefault();
            listTitle.textContent = editInput.value;
            overlay.style.display = 'none';
            editModal.classList.remove("active");
            editModal.innerHTML = "";
            listMod.editList(id, editInput.value);
        })
        return listCard;
    }
    
    function createEditListModal() {
        
        closeEdit.classList.add('close-btn');
        editform.classList.add("edit-form");
        editModalHeader.classList.add("edit-modal-header");

        editInput.setAttribute('type', 'text');
        editInput.setAttribute('name', 'edit');

        closeEdit.textContent = "\u00D7";
        submit.textContent = 'edit';


        editModalHeader.textContent = 'Edit Name'
        
        editModal.appendChild(closeEdit);
        editModal.appendChild(editform);
        editform.appendChild(editModalHeader);
        editform.appendChild(editInput)
        editform.appendChild(submit);
    }
    // Function to create icon button
    function createIconButton(src) {
        const iconBtn = document.createElement('img');
        iconBtn.src = src;
        return iconBtn;
    }
}


export default controller