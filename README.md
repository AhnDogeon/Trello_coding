# Trello_coding
clone Trello

## Trello 클론 코딩

#### 서버 : nodejs + express

#### 프론트 : JavaScript

```bash
npm install express --save
```

```bash
node index.js
```

express generator 설치

```bash
npm install express-generator -g
```

## 프로그램 실행

```bash
nodemon app.js
```



## 기능

#### List 생성

![리스트생성](https://user-images.githubusercontent.com/45963082/116802025-71328d00-ab4a-11eb-80bd-f51bdd95c18c.gif)



#### List  삭제

![리스트삭제](https://user-images.githubusercontent.com/45963082/116802030-7a235e80-ab4a-11eb-926a-fd2b361e2d6b.gif)



#### Card 생성

![카드생성](https://user-images.githubusercontent.com/45963082/116802032-80b1d600-ab4a-11eb-9a37-85557191f43c.gif)



#### Card 삭제

![카드삭제1](https://user-images.githubusercontent.com/45963082/116802085-f28a1f80-ab4a-11eb-90dc-14bf94da6fbf.gif)



#### 카드 Drag and Drop

![드래그](https://user-images.githubusercontent.com/45963082/116802036-8d362e80-ab4a-11eb-9299-2577fb940ff3.gif)



## 전체 앱 구성

##### app.js : nodejs와 express로 웹서버 구현 및 router 연결

##### addList.js : List 생성 및 삭제 js 파일

##### addCard.js : Card 생성 및 삭제 js 파일

##### dragdrop.js : drag 구현 js파일



## 어려웠던 점

1. 리스트에서 각각의 Form에서 text 입력할 경우 첫 번째 리스트에만 카드가 남겨졌습니다.

   초반 form을 querySelector의 class명으로 받아오면서 한 개의 ``ul``만 인식하여 발생한 문제였습니다.

   선택한 form의 parentNode를 이용하여 해당 ``ul``의 하단 ``li``에서만 생성이 가능하게 변경하였습니다.

2. drag and drop 기능의 경우, 현재 단순 ``Drag``와 ``Drop`` 기능만 구현되었습니다. 선택한 Card를 다른 하위 리스트들로 옮기는 기능이 어려웠습니다. 

3. List와 달리 Card의 삭제가 잘 되지 않았습니다. 개발 초반, Card의 생성을 id로 구분자를 주지 않고 단순 tag의 나열로만 진행하였습니다. 각각 id를 부여하였으나, 다른 리스트의 카드가 정상적으로 동작하지 않는 경우가 발생중입니다.

## 느낀 점

리스트, 카드의 생성 삭제 뿐만 아니라 드래그&드랍 기능 구현으로 mouseevent까지 배워볼 수 있었던 프로젝트였습니다. 항상 프로젝트 개발을 할 때면, 산 넘어 산이라는 생각이 듭니다. 리스트의 생성 문제를 해결하면, 카드 생성과 삭제에서 막히기도 했습니다. 특히 카드의 경우 기능 구현에 많은 시간이 투자된 것에 비해 결과물이 만족스럽지 않았습니다. 물론, 완벽히 구현하지 못한 드래그&드랍 기능은 더 아쉬움이 남습니다. 현업에 간다면 단순 기능 구현 뿐만 아니라 DB 간의 유기적인 연동이 필요하므로 지속적인 학습을 해야겠습니다.