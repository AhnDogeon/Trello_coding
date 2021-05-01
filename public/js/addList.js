const ListForm = document.querySelector(".js-lists-form"),
    listInput = ListForm.querySelector("input"),
    listList = document.querySelector(".js-lists-list");

const LIST_LS = "LISTS";

const lists = [];

function saveLists(){
    localStorage.setItem(LIST_LS, JSON.stringify(lists));
}


function paintList(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const cardForm = document.createElement("form");
    const cardinput = document.createElement("input");
    const span = document.createElement("span");
    const listId = lists.length + 1;
    delBtn.innerText = "❌";
    cardinput.placeholder = "Add a Card";
    cardForm.appendChild(cardinput);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(cardForm);
    li.appendChild(delBtn);
    listList.appendChild(li);

    const listsObj = {
        text: text,
        id: listId,
    };
    lists.push(listsObj);
    saveLists();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = listInput.value;
    paintList(currentValue);
}

function loadLists(){
    const loadedlists = localStorage.getItem(LIST_LS);
    if (loadedlists !== null){

    }
}

function init(){
    loadLists();
    ListForm.addEventListener("submit", handleSubmit);
}

init();