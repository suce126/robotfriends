var btn = document.getElementById('enter-button');
var input = document.getElementById('input');
let ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");


function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

btn.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

ul.onclick = function (event) {
    var target = event.target;
    target.classList.toggle("done");
}

function listLength() {
    return listItems.length;
}

function deleteButton() {
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete!"));
    listItems[i].appendChild(btn);
    btn.onclick = removeParent;
}

for (i = 0; i < listLength(); i++) {

    deleteButton();
}

function removeParent(evt) {
    evt.target.parentNode.remove();
}

const array = [1,2,3,4,5,6];

const newArray = array.map((num) => {
    return num * 5;
})