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

for(let i = 0; i < li.length; i++)
{
    li[i].style.borderTopColor = "#551123";
}

// querySelector
const selector = document.querySelector("#main-header");

selector.style.borderTopColor = "#FFFFF00";

const input = document.querySelector("input");
input.value = "Goodbye world";

const submit = document.querySelector("input[type='submit']");
submit.value = "SEND";

const item = document.querySelector(".list-group-item");
item.style.color = "red";

// querySelectorAll
const selectorAll = document.querySelectorAll(".title");

// traversing the DOM
const itemList = document.querySelector("#items");

// parent node
itemList.parentNode.style.backgroundColor = "#ccdd22";

// child nodes - not very usable, children are better
console.log(itemList.childNodes);

console.log(itemList.children);

// First child
console.log(itemList.firstChild);

// first element child
console.log(itemList.firstElementChild);

// next sibling
console.log(itemList.nextSibling);

console.log(itemList.nextElementSibling);

// creating elements and insert them
// create element
const newDiv = document.createElement('div');

// add class
newDiv.className = "hello";

// add id
newDiv.id = "hello1";

// add attr
newDiv.setAttribute = "title, hello div";

// create text node
const newDivText = document.createTextNode("Hello World");

// add text to div
newDiv.appendChild(newDivText);

const headerContainer = document.querySelector("header .container");
const h1 = document.querySelector("header h1");

headerContainer.insertBefore(newDiv, h1);
newDiv.style.fontSize = "30px";