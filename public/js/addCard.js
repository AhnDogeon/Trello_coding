const cardForm = document.querySelector(".js-cards-form"),
    cardInput = cardForm.querySelector(".js-cards-input"),
    cardList = document.querySelector(".js-cards-list");

const CARD_LS = "cards";

let cards = [];

function paintCard(text){
    const liCard = document.createElement("li");
    const delCardBtn = document.createElement("button");
    const spanCard = document.createElement("span");
    // 삭제를 위한 id 생성
    const cardId = cards.length + 1;
    delCardBtn.innerText = "❌";
    delCardBtn.addEventListener("click", deleteLists);
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
    //saveLists();
}


function loadCards(){
    const loadedCards = localStorage.getItem(CARD_LS);
    if (loadedCards !== null){
        const parsedCards = JSON.parse(loadedCards);
        parsedCards.forEach(function(card){
            paintList(card.text);
        });

    }
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = cardInput.value;
    console.log(cardInput);
    paintCard(currentValue);
    cardInput.value = "";
}


function init(){
    loadCards();
    cardForm.addEventListener("submit", handleSubmit);
}

init();