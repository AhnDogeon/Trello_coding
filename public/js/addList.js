const ListForm = document.querySelector(".js-lists-form"),
    listInput = ListForm.querySelector(".js-lists-input"),
    listList = document.querySelector(".js-lists-list");

const LIST_LS = "lists";

let lists = [];

// Local Storage 저장
function saveLists(){
    localStorage.setItem(LIST_LS, JSON.stringify(lists));
}

// li 삭제
function deleteLists(event){
    const btn = event.target;
    const li = btn.parentNode;
    listList.removeChild(li);
    console.log(lists);
    const cleanLists = lists.filter(function(list) {
        return list.id !== parseInt(li.id);
    });
    console.log(cleanLists);
    lists = cleanLists;
    saveLists();
}

// 리스트 생성
function paintList(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const cardForm = document.createElement("form");
    const cardInput = document.createElement("input");
    const span = document.createElement("span");
    const cardUl = document.createElement("ul");
    // 삭제를 위한 id 생성
    const listId = lists.length + 1;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteLists);
    cardInput.placeholder = "Add a Card";
    cardInput.className = "js-cards-input";
    cardForm.className = "js-cards-form";
    cardForm.appendChild(cardInput);
    cardUl.className = "js-cards-list";
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(cardForm);
    li.appendChild(delBtn);
    li.append(cardUl);
    li.id = listId;
    li.className = "js-lists-li";
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
    listInput.value = "";
}

function loadLists(){
    const loadedLists = localStorage.getItem(LIST_LS);
    if (loadedLists !== null){
        const parsedLists = JSON.parse(loadedLists);
        parsedLists.forEach(function(list){
            paintList(list.text);
        });

    }
}

function init(){
    loadLists();
    ListForm.addEventListener("submit", handleSubmit);
}

init();