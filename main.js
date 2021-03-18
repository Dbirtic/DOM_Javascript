// Examine elements inside a document
console.dir(document);

// selectors

const header = document.getElementById('header-title');

console.log(header);

/*header.textContent = "hello";
header.innerText = "Goodbye";
console.log(header.textContent); */

header.style.borderBottom = "solid 3px #000";

const headerDash = document.getElementById("main-header");
headerDash.style.borderBottom = "solid 5px #777";

// getElementsByClassName

const listItems = document.getElementsByClassName("list-group-item");
listItems[3].textContent = "LOL";
listItems[1].style.backgroundColor = "#FF0";

for(let i = 0; i < listItems.length; i++)
{
    listItems[i].style.fontSize = "20px";
}

// getElementsByTagName
const li = document.getElementsByTagName("li");

