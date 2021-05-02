let cardForm = document.querySelector(".js-cards-form");
let cardInput = cardForm.querySelector(".js-cards-input"),
    cardList = document.querySelector(".js-cards-list");


const CARD_LS = "cards";

let cards = [];

function saveCards(){
    localStorage.setItem(CARD_LS, JSON.stringify(cards));
}

function deleteCards(event){
    const btn = event.target;
    const div = btn.parentNode;
    cardList.removeChild(div);
    const cleanCards = cards.filter(function(card) {
        return card.id !== parseInt(div.id);
    });
    cards = cleanCards;
    saveCards();
}

function paintCard(text){
    const divCard = document.createElement("div");
    const delCardBtn = document.createElement("button");
    const spanCard = document.createElement("span");
    // 삭제를 위한 id 생성
    const cardId = cards.length + 1;
    delCardBtn.innerText = "❌";
    delCardBtn.addEventListener("click", deleteCards);
    spanCard.innerText = text;
    divCard.appendChild(spanCard);
    divCard.appendChild(delCardBtn);
    divCard.id = cardId;
    cardList.appendChild(divCard);

    const cardsObj = {
        text: text,
        id: cardId,
    };
    cards.push(cardsObj);
    saveCards();
}


function loadCards(){
    const loadedCards = localStorage.getItem(CARD_LS);
    const parsedCards = JSON.parse(loadedCards);
    if (parsedCards !== null){
        parsedCards.forEach(function(card){
            paintCard(card.text);
        });
    }
}

function handleSubmit(event){
    event.preventDefault();
    cardForm = event.target;
    cardInput = cardForm.querySelector(".js-cards-input");
    cardList = cardForm.parentNode.querySelector(".js-cards-list");
    const currentValue = cardInput.value;
    paintCard(currentValue);
    cardInput.value = "";
}


function cardInit(){
    loadCards();
    addEventListener("submit", handleSubmit);
}

cardInit();