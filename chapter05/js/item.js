var itemList = [];  //아이템을 담을 빈 배열 생성

var addBtn = document.getElementById("add");

//추가 버튼 클릭시 이벤트 처리
addBtn.addEventListener("click", function(){
    var item = document.getElementById("item").value; //물품 추가

    itemList.push(item);  //요소 추가
    document.getElementById("item").value =""; //초기화
    document.getElementById("item").focus();  //커서 위치
    
    showList();
});

//물품 조회
function showList(){
    var list = "<ul>";
    for(var i=0; i<itemList.length; i++){
        //document.getElementById("itemList").innerHTML = itemList[i];
        list += "<li>" + itemList[i] + "<span class='close' id=" + i + ">X</span></li>";
    }
    list += "</ul>";
    document.querySelector("#itemList").innerHTML = list;
    /*
      <ul>
        <li>itemList[0]</li>
        <li>itemList[1]</li>
        <li>itemList[2]</li>
      </ul>
    */

    //아이템 삭제 - 'X' 클릭
    var removeItems = document.querySelectorAll(".close");
    //class='close'인 요소를 모두 가져오므로 배열이 됨

    for(var i=0; i<removeItems.length; i++){
        removeItems[i].addEventListener("click", function(){
            var id = this.getAttribute("id");  //클릭된 item을 가져오기
            itemList.splice(id, 1);  //인덱스가 id인 요소 1개 삭제

            showList(); // 삭제 후 변경된 itemList를 다시 화면에 표시(reload)
        });
    }
}

