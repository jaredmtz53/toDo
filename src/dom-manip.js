/*-----------SIDEBAR------------*/
import * as listMod from './lists'

//importing images 
import editbtn from './assets/edit.svg'
import trashbtn from './assets/trash.svg'

function controller() {
    // Get DOM elements
    const listsContent = document.querySelector('.lists-content');
    const addListBtn = document.querySelector('.add-new-list-btn');
    const addListData = document.querySelector('#add-list-datafield');
    const editModal = document.querySelector('.edit-modal');
    const overlay = document.querySelector('.overlay');

    // Event listener for adding a new list
    addListBtn.addEventListener('click', createListCard);

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
        });

        return listCard;
    }
    //function to create Modal for Edit
    function createEditListModal() {
        const editform = document.createElement("form");
        const editModalHeader = document.createElement('h3');
        const input = document.createElement('input');
        const submit = document.createElement('button');
        
        
        editform.classList.add("edit-form");
        editModalHeader.classList.add("edit-modal-header");

        input.setAttribute('type', 'text');
        input.setAttribute('name', 'edit');

        submit.textContent = 'submit';

        overlay.style.display = 'block';
        editModalHeader.textContent = 'Edit'

        editModal.appendChild(overlay);
        editModal.appendChild(editform);
        editform.appendChild(editModalHeader);
        editform.appendChild(input)
        editform.appendChild(submit);

        return input.value;
    }
    
    // Function to create icon button
    function createIconButton(src) {
        const iconBtn = document.createElement('img');
        iconBtn.src = src;
        return iconBtn;
    }
}

export default controller