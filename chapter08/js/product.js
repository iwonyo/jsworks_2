//사진 선택하여 바꾸기
let bigPic = document.querySelector("#cup");
let smallPics = document.querySelectorAll(".small");

//클릭 이벤트 
for(let i = 0; i < smallPics.length; i++){
    smallPics[i].onclick = showBig;  
}

function showBig(){
    let newPic = this.src;  //이벤트가 일어난 대상
    bigPic.setAttribute("src", newPic);
    //setAttribute(속성, 속성값)
}

//상세설명 보기/닫기(toggle 방식)
let isOpen = false;

let view = document.querySelector("#view"); //상세 설명 보기

let detail = document.querySelector("#detail"); //설명글

//이벤트 처리(클릭)
view.addEventListener("click", function(){
    if(isOpen==false){
        detail.style.display = "block";
        //view.innerHTML = "상세 설명 닫기"
        view.innerText = "상세 설명 닫기"
        isOpen = true;   //현재 상태가 열려있음
    }
    else{ //isOpen==true
        detail.style.display = "none";
        view.innerText = "상세 설명 보기";
        isOpen = false;  //현재 닫혀있는 상태
    }
});
