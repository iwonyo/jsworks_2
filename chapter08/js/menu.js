//스크롤 이동시 상단 메뉴 고정
var topMenu = document.getElementById("navbar"); //메뉴
var topMenuPosition = topMenu.offsetTop;   //메뉴 top의 위치

//scroll 이벤트 처리
document.addEventListener("scroll", function(){
    if(window.pageYOffset >= topMenuPosition){
        topMenu.classList.add("sticky"); 
        //sticky 스타일 사용
    }
    else{
        topMenu.classList.remove("sticky");
        //sticky 스타일 사용하지 않음
    }
})