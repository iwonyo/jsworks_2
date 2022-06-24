//이미지 바꾸기
var pic = document.getElementById("img");
pic.addEventListener("mouseover", function() {
  pic.src = "images/easys-2.jpg";
});

pic.addEventListener("mouseout", function() {
  pic.src = "images/easys-1.jpg";
});  

