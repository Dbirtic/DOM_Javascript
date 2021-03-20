const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', removeItem);

// Filter event
filter.addEventListener('keyup', filterItems);

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
        if(confirm("Are you sure?")){
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Function filterItems
function filterItems(e){
    // convert text to lowercase
    const text = e.target.value.toLowerCase();

    // Get list
    const items = itemList.getElementsByTagName('li');

    // convert collection to an array
    Array.from(items).forEach(function(item){
        const itemName = item.firstChild.textContent;

        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = "block";
        }
        else{
            item.style.display = "none";
        }
    });
}