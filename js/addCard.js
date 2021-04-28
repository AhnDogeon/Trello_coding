const cardForm = document.querySelector(".js-cards-form"),
    cardInput = cardForm.querySelector("input"),
    cardList = document.querySelector(".js-cards-list");

const CARD_LS = "CARDS";

function loadCards(){
    const cards = localStorage.getItem(CARD_LS);
    if (cards !== null){

    }
}

function init(){
    loadCards();

}

init();