const cardForm = document.querySelector(".js-cards-form"),
    cardInput = cardForm.querySelector("input"),
    cardList = document.querySelector(".js-cards-list");

const CARD_LS = "CARDS";

function paintCard(text){
    console.log(text);
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const cardForm = document.createElement("form");
    const cardinput = document.createElement("input");
    const span = document.createElement("span");
    delBtn.innerText = "❌";
    cardForm.appendChild(cardinput);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(cardForm);
    li.appendChild(delBtn);
    cardList.appendChild(li);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = cardInput.value;
    paintCard(currentValue);
}

function loadCards(){
    const cards = localStorage.getItem(CARD_LS);
    if (cards !== null){

    }
}

function init(){
    loadCards();
    cardForm.addEventListener("submit", handleSubmit);
}

init();