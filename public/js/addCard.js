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
    const li = btn.parentNode;
    cardList.removeChild(li);
    const cleanCards = cards.filter(function(card) {
        return card.id !== parseInt(li.id);
    });
    cards = cleanCards;
    saveCards();
}

function paintCard(text){
    const liCard = document.createElement("li");
    const delCardBtn = document.createElement("button");
    const spanCard = document.createElement("span");
    // 삭제를 위한 id 생성
    const cardId = cards.length + 1;
    delCardBtn.innerText = "❌";
    delCardBtn.addEventListener("click", deleteCards);
    spanCard.innerText = text;
    liCard.appendChild(spanCard);
    liCard.appendChild(delCardBtn);
    liCard.id = cardId;
    cardList.appendChild(liCard);

    const cardsObj = {
        text: text,
        id: cardId,
    };
    cards.push(cardsObj);
    saveCards();
}


function loadCards(){
    const loadedCards = localStorage.getItem(CARD_LS);
    if (loadedCards !== null){
        const parsedCards = JSON.parse(loadedCards);
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
    console.log(cardList);
    //cardList.removeChild("li");
    const currentValue = cardInput.value;
    paintCard(currentValue);
    cardInput.value = "";
}


function init(){
    loadCards();
    addEventListener("submit", handleSubmit);
}

init();