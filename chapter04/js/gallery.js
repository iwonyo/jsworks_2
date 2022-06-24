//nextGallery() 함수 만들기
let num = 1;   //전역 변수(이미지 번호)

function nextGallery(){
    num++;       //1증가
    if(num > 7)   //img7이 넘어가면
        num = 1;  //img1로 설정
    document.getElementById("gallery").src = "images/img" + num + ".jpg";
}

//prevGallery() 만들기
function prevGallery(){
    num--;     //1감소
    if(num < 1)    // img1보다 작으면
        num = 7;   //img7로 설정
    document.getElementById("gallery").src = "images/img" + num + ".jpg";
}
