// toggle 방식
function showText(){
  //설명글 보이기
  document.getElementById('desc').style.display = "block";

   //보기 버튼 숨기기
  document.getElementById('open').style.display = "none";
}

function hideText(){
  //설명글 숨기기
  document.getElementById('desc').style.display = "none";

  //보기 버튼 보이기
  document.getElementById('open').style.display = "block";
}
