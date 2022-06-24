// 이미지 넘기기
var num = 1;

function nextGallery(){
  num++;
  if(num > 7)
    num = 1;
  document.getElementById('gallery').src="./images/img" + num + ".jpg";
}

function prevGallery(){
  num--;
  if(num < 1)
    num = 7;
  document.getElementById('gallery').src="./images/img" + num + ".jpg";
}

