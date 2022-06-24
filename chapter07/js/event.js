//이벤트 구현
window.onload = function(){
    var img = document.getElementById("pic");

    img.onmouseover = changePic;
    img.onmouseout = originPic;

    //querySelector()는 onmouseover가 지원되지 않으므로 
    //addEventListener()와 함께 사용함
    /*var img = document.querySelector("#pic");

    img.addEventListener("mouseover", changePic);
    img.addEventListener("mouseout", originPic);*/

    function changePic(){
        img.src="images/easys-2.jpg";
    }
    function originPic(){
        img.src="images/easys-1.jpg";
    }

    /*//마우스를 올려 놓으면 이미지 변경
    img.addEventListener("mouseover", function(){
        img.src = "images/easys-2.jpg";
    });

    //마우스가 이미지를 벗어났을때 원래 이미지로 변경
    img.addEventListener("mouseout", function(){
        img.src = "images/easys-1.jpg";
    });*/
}

