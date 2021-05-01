const ListForm = document.querySelector(".js-lists-form"),
    listInput = ListForm.querySelector("input"),
    listList = document.querySelector(".js-lists-list");

const LIST_LS = "LISTS";

const lists = [];

// Local Storage 저장
function saveLists(){
    localStorage.setItem(LIST_LS, JSON.stringify(lists));
}

// 리스트 생성
function paintList(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const cardForm = document.createElement("form");
    const cardInput = document.createElement("input");
    const span = document.createElement("span");
    // 삭제를 위한 id 생성
    const listId = lists.length + 1;
    delBtn.innerText = "❌";
    cardInput.placeholder = "Add a Card";
    cardForm.appendChild(cardInput);
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
    const loadedLists = localStorage.getItem(LIST_LS);
    if (loadedLists !== null){

    }
}

function init(){
    loadLists();
    ListForm.addEventListener("submit", handleSubmit);
}

init();