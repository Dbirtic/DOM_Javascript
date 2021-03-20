const form = document.getElementById('addForm');
const itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', removeItem);

// Function addItem
function addItem(e){
    e.preventDefault();

    console.log("11");

    // Get input value
    const newItem = document.getElementById('item').value;
    
    // Create new li element
    const li = document.createElement('li');
    // add class name to the new element
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create delete button element
    const deleteBtn = document.createElement('button')

    // Add classes to the delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);

    // append li to the list
    itemList.appendChild(li);
}

// Function removeItem
function removeItem(e){
    if(e.target.classList.contains('delete')){
        
    }
}