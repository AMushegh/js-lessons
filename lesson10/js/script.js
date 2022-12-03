const buttonNode = document.querySelector("button");
const headingNode = document.querySelector("h1");
const addItemButtonNode = document.getElementById("addItemButton");
const listNode = document.getElementById("list");

buttonNode.addEventListener("click", showName);
addItemButtonNode.addEventListener("click", addItemButtonClickHandler);

function showName() {
  headingNode.innerText = "Mushegh Andrasyan";
}

function addItemButtonClickHandler() {
  const newLiElement = document.createElement("li");
  newLiElement.innerText = `list item ${listNode.childElementCount + 1}`;
  listNode.appendChild(newLiElement);
}
