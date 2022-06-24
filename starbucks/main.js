// 제목 글자 애니메이션
let mainText = document.querySelector("h1");

window.addEventListener('scroll', function(){
    let value = this.window.scrollY;
    console.log("scrollY", value);

    if(value > 300){
        mainText.style.animation = "disappear 1s ease-out forwards"
    }
    else{
        mainText.style.animation = "slide 1s ease-out";
    }
});
