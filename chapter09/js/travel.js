// 아이템 리스트 
let itemList = []

let addBtn = document.getElementById("add");
addBtn.addEventListener("click", addList);

//아이템 추가 함수
function addList(){
    let item = document.getElementById("item").value; //아이템 입력

    itemList.push(item);   //아이템 추가
    document.getElementById("item").value = "";  //아이템 초기화
    document.getElementById("item").focus();     //커서 위치

    //console.log(itemList);

    showList();  //목록 조회 호출
}

//아이템 목록 조회 함수
function showList(){
    let list = "<ul>";  //목록 리스트 변수 할당
    for(var i = 0; i < itemList.length; i++){
        //document.getElementById("itemList").innerHTML = itemList[i];
        list += "<li>" + itemList[i] + "<span class='close' id=" + i + ">X</span></li>";
    }
    list += "</ul>"
    document.getElementById("itemList").innerHTML = list;

    //아이템 삭제 - 'X' 클릭
    let removeList = document.querySelectorAll(".close");

    for(var i = 0; i < removeList.length; i++){
        removeList[i].addEventListener("click", remove);
    }
}

//삭제 함수
function remove(){
    console.log(this);  //클릭 이벤트가 일어난 대상
    let id = this.getAttribute("id"); //인덱스 가져오기
    itemList.splice(id, 1);   //인덱스가 id인 요소 1개 삭제

    showList();
}
