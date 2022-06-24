//mouseover, mouseout 이벤트 실행
//var img = document.getElementById("pic");
var img = document.querySelector("#pic");

//이벤트 처리기(함수)
img.addEventListener("click", changePic);
//on을 생략한 click 사용
//함수 호출시 주의!! ()없는 함수 사용

img.addEventListener("mouseout", originPic);

function changePic(){
    img.src = "images/bird2.jpg";
}

function originPic(){
    img.src = "images/bird1.jpg";
}