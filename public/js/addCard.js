const cardForm = document.querySelector(".js-cards-form"),
    cardInput = cardForm.querySelector("input"),
    cardList = document.querySelector(".js-cards-list");

const LIST_LS = "LISTS";

const lists = [];

function paintList(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const cardForm = document.createElement("form");
    const cardinput = document.createElement("input");
    const span = document.createElement("span");
    delBtn.innerText = "❌";
    cardinput.placeholder = "Add a Card";
    cardForm.appendChild(cardinput);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(cardForm);
    li.appendChild(delBtn);
    cardList.appendChild(li);

    const listsObj = {
        text: text,
        id: lists.length + 1
    };
    lists.push(listsObj);

}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = cardInput.value;
    paintList(currentValue);
}

function loadCards(){
    const loadedlists = localStorage.getItem(LIST_LS);
    if (loadedlists !== null){

    }
}

function init(){
    loadCards();
    cardForm.addEventListener("submit", handleSubmit);
}

init();