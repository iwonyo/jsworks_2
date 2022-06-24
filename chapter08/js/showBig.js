window.onload = function(){
    //큰 사진 선택
    let bigPic = document.querySelector("#cup");

    //작은 사진 모두 선택 - 배열
    let smallPics = document.querySelectorAll(".small");

    //onclick 이벤트
    //smallPics[1].onclick = showBig; //인덱스 1번 이미지 확대
    for(let i = 0; i < smallPics.length; i++){
        smallPics[i].onclick = showBig;   //showBig()함수 호출
    }

    function showBig(){
        let newPic = this.src; //this-이벤트 일어난 대상의 속성 값
        bigPic.setAttribute("src", newPic);
        //setAttribute("속성", "속성값")
    }

    //addEventListener() -> 익명함수
    /*for(let i=0; i<smallPics.length; i++){
        smallPics[i].addEventListener("click", function(){
            let newPic = this.src; //this-이벤트 일어난 대상의 속성 값
            bigPic.setAttribute("src", newPic);
        });
    }*/
}

